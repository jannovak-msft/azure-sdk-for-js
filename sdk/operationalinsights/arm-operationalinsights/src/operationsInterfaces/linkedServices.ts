/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  LinkedService,
  LinkedServicesListByWorkspaceOptionalParams,
  LinkedServicesCreateOrUpdateOptionalParams,
  LinkedServicesCreateOrUpdateResponse,
  LinkedServicesDeleteOptionalParams,
  LinkedServicesDeleteResponse,
  LinkedServicesGetOptionalParams,
  LinkedServicesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LinkedServices. */
export interface LinkedServices {
  /**
   * Gets the linked services instances in a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: LinkedServicesListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<LinkedService>;
  /**
   * Create or update a linked service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param linkedServiceName Name of the linkedServices resource
   * @param parameters The parameters required to create or update a linked service.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    linkedServiceName: string,
    parameters: LinkedService,
    options?: LinkedServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinkedServicesCreateOrUpdateResponse>,
      LinkedServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a linked service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param linkedServiceName Name of the linkedServices resource
   * @param parameters The parameters required to create or update a linked service.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    linkedServiceName: string,
    parameters: LinkedService,
    options?: LinkedServicesCreateOrUpdateOptionalParams
  ): Promise<LinkedServicesCreateOrUpdateResponse>;
  /**
   * Deletes a linked service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param linkedServiceName Name of the linked service.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    linkedServiceName: string,
    options?: LinkedServicesDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LinkedServicesDeleteResponse>,
      LinkedServicesDeleteResponse
    >
  >;
  /**
   * Deletes a linked service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param linkedServiceName Name of the linked service.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    linkedServiceName: string,
    options?: LinkedServicesDeleteOptionalParams
  ): Promise<LinkedServicesDeleteResponse>;
  /**
   * Gets a linked service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param linkedServiceName Name of the linked service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    linkedServiceName: string,
    options?: LinkedServicesGetOptionalParams
  ): Promise<LinkedServicesGetResponse>;
}