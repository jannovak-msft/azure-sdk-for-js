/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ValidateOperationRequestUnion,
  ValidateOperationTriggerOptionalParams
} from "../models";

/** Interface representing a ValidateOperation. */
export interface ValidateOperation {
  /**
   * Validate operation for specified backed up item in the form of an asynchronous operation. Returns
   * tracking headers which can be tracked using GetValidateOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters resource validate operation request
   * @param options The options parameters.
   */
  beginTrigger(
    vaultName: string,
    resourceGroupName: string,
    parameters: ValidateOperationRequestUnion,
    options?: ValidateOperationTriggerOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Validate operation for specified backed up item in the form of an asynchronous operation. Returns
   * tracking headers which can be tracked using GetValidateOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters resource validate operation request
   * @param options The options parameters.
   */
  beginTriggerAndWait(
    vaultName: string,
    resourceGroupName: string,
    parameters: ValidateOperationRequestUnion,
    options?: ValidateOperationTriggerOptionalParams
  ): Promise<void>;
}