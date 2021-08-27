/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TemplateSpecVersion,
  TemplateSpecVersionsListOptionalParams,
  TemplateSpecVersionsCreateOrUpdateOptionalParams,
  TemplateSpecVersionsCreateOrUpdateResponse,
  TemplateSpecVersionsUpdateOptionalParams,
  TemplateSpecVersionsUpdateResponse,
  TemplateSpecVersionsGetOptionalParams,
  TemplateSpecVersionsGetResponse,
  TemplateSpecVersionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TemplateSpecVersions. */
export interface TemplateSpecVersions {
  /**
   * Lists all the Template Spec versions in the specified Template Spec.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    templateSpecName: string,
    options?: TemplateSpecVersionsListOptionalParams
  ): PagedAsyncIterableIterator<TemplateSpecVersion>;
  /**
   * Creates or updates a Template Spec version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param templateSpecVersionModel Template Spec Version supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    templateSpecVersionModel: TemplateSpecVersion,
    options?: TemplateSpecVersionsCreateOrUpdateOptionalParams
  ): Promise<TemplateSpecVersionsCreateOrUpdateResponse>;
  /**
   * Updates Template Spec Version tags with specified values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    options?: TemplateSpecVersionsUpdateOptionalParams
  ): Promise<TemplateSpecVersionsUpdateResponse>;
  /**
   * Gets a Template Spec version from a specific Template Spec.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    options?: TemplateSpecVersionsGetOptionalParams
  ): Promise<TemplateSpecVersionsGetResponse>;
  /**
   * Deletes a specific version from a Template Spec. When operation completes, status code 200 returned
   * without content.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param templateSpecName Name of the Template Spec.
   * @param templateSpecVersion The version of the Template Spec.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    templateSpecName: string,
    templateSpecVersion: string,
    options?: TemplateSpecVersionsDeleteOptionalParams
  ): Promise<void>;
}