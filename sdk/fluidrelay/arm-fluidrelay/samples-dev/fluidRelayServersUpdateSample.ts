/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  FluidRelayServerUpdate,
  FluidRelayManagementClient
} from "@azure/arm-fluidrelay";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update a Fluid Relay server.
 *
 * @summary Update a Fluid Relay server.
 * x-ms-original-file: specification/fluidrelay/resource-manager/Microsoft.FluidRelay/stable/2022-06-01/examples/FluidRelayServers_Update.json
 */
async function updateAFluidRelayServer() {
  const subscriptionId = "xxxx-xxxx-xxxx-xxxx";
  const resourceGroup = "myResourceGroup";
  const fluidRelayServerName = "myFluidRelayServer";
  const resource: FluidRelayServerUpdate = { tags: { category: "sales" } };
  const credential = new DefaultAzureCredential();
  const client = new FluidRelayManagementClient(credential, subscriptionId);
  const result = await client.fluidRelayServers.update(
    resourceGroup,
    fluidRelayServerName,
    resource
  );
  console.log(result);
}

updateAFluidRelayServer().catch(console.error);
