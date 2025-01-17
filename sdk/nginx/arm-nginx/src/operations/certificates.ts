/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Certificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NginxManagementClient } from "../nginxManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  NginxCertificate,
  CertificatesListNextOptionalParams,
  CertificatesListOptionalParams,
  CertificatesGetOptionalParams,
  CertificatesGetResponse,
  CertificatesCreateOptionalParams,
  CertificatesCreateResponse,
  CertificatesDeleteOptionalParams,
  CertificatesListResponse,
  CertificatesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Certificates operations. */
export class CertificatesImpl implements Certificates {
  private readonly client: NginxManagementClient;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: NginxManagementClient) {
    this.client = client;
  }

  /**
   * List all certificates of given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    deploymentName: string,
    options?: CertificatesListOptionalParams
  ): PagedAsyncIterableIterator<NginxCertificate> {
    const iter = this.listPagingAll(resourceGroupName, deploymentName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, deploymentName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    deploymentName: string,
    options?: CertificatesListOptionalParams
  ): AsyncIterableIterator<NginxCertificate[]> {
    let result = await this._list(resourceGroupName, deploymentName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    deploymentName: string,
    options?: CertificatesListOptionalParams
  ): AsyncIterableIterator<NginxCertificate> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a certificate of given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesGetOptionalParams
  ): Promise<CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, certificateName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update the Nginx certificates for given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CertificatesCreateResponse>,
      CertificatesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CertificatesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, deploymentName, certificateName, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update the Nginx certificates for given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesCreateOptionalParams
  ): Promise<CertificatesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      deploymentName,
      certificateName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a certificate from the nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, deploymentName, certificateName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a certificate from the nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param certificateName The name of certificate
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    certificateName: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      deploymentName,
      certificateName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all certificates of given Nginx deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    deploymentName: string,
    options?: CertificatesListOptionalParams
  ): Promise<CertificatesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted Nginx deployment
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: CertificatesListNextOptionalParams
  ): Promise<CertificatesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/certificates/{certificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxCertificate
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/certificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NginxCertificate
    },
    201: {
      bodyMapper: Mappers.NginxCertificate
    },
    202: {
      bodyMapper: Mappers.NginxCertificate
    },
    204: {
      bodyMapper: Mappers.NginxCertificate
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  requestBody: Parameters.body,
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/certificates/{certificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxCertificateListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxCertificateListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
