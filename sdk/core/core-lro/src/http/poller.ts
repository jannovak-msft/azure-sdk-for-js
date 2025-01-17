// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { LongRunningOperation, LroResponse } from "./models";
import { OperationState, SimplePollerLike } from "../poller/models";
import {
  getOperationLocation,
  getOperationStatus,
  inferLroMode,
  parseRetryAfter,
} from "./operation";
import { CreateHttpPollerOptions } from "./models";
import { buildCreatePoller } from "../poller/poller";

/**
 * Creates a poller that can be used to poll a long-running operation.
 * @param lro - Description of the long-running operation
 * @param options - options to configure the poller
 * @returns an initialized poller
 */
export async function createHttpPoller<TResult, TState extends OperationState<TResult>>(
  lro: LongRunningOperation,
  options?: CreateHttpPollerOptions<TResult, TState>
): Promise<SimplePollerLike<TState, TResult>> {
  const {
    resourceLocationConfig,
    intervalInMs,
    processResult,
    restoreFrom,
    updateState,
    withOperationLocation,
  } = options || {};
  return buildCreatePoller<LroResponse, TResult, TState>({
    getStatusFromInitialResponse: (response, state) => {
      const mode = state.config.metadata?.["mode"];
      return mode === undefined ||
        (mode === "Body" && getOperationStatus(response, state) === "succeeded")
        ? "succeeded"
        : "running";
    },
    getStatusFromPollResponse: getOperationStatus,
    getOperationLocation,
    getPollingInterval: parseRetryAfter,
  })(
    {
      init: async () => {
        const response = await lro.sendInitialRequest();
        const config = inferLroMode({
          rawResponse: response.rawResponse,
          requestPath: lro.requestPath,
          requestMethod: lro.requestMethod,
          resourceLocationConfig,
        });
        return {
          response,
          operationLocation: config?.operationLocation,
          resourceLocation: config?.resourceLocation,
          ...(config?.mode ? { metadata: { mode: config.mode } } : {}),
        };
      },
      poll: lro.sendPollRequest,
    },
    {
      intervalInMs,
      withOperationLocation,
      restoreFrom,
      updateState,
      processResult: processResult
        ? ({ flatResponse }, state) => processResult(flatResponse, state)
        : ({ flatResponse }) => flatResponse as TResult,
    }
  );
}
