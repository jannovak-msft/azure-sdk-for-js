let nock = require('nock');

module.exports.hash = "d754d51527d102fcb0c6320fb9fe4afa";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'cdee7f40-c5db-41db-bba8-8a2847f01e00',
  'x-ms-ests-server',
  '2.1.12158.6 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AhyrB-hAWQJPn_eqj3-LoaA; expires=Fri, 19-Nov-2021 07:57:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr0BaXM4PAPHyvYHpxm1wa627e1utwsi9iVZuzSqHn5JE3-sRbscLmwVsEUb-tv4zciKPsQB_M7B7U98UYOA1u8WyHYcDLK8NGKMzz_hNKcVlxHGWNQ4wy-z3bm1gyLrL2FkfT8EhBy2gcYqhl6z2Uij79Io3Ar7EIeELkohd3KfQgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 20 Oct 2021 07:57:42 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'cdee7f40-c5db-41db-bba8-8a284af01e00',
  'x-ms-ests-server',
  '2.1.12158.6 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=AghsddEo1ZdJupinAswEJPY; expires=Fri, 19-Nov-2021 07:57:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr-ZPtQLjsXDjU8NBwCtu1ZGWzC_dtV_4IbEISZzBiRTBMDQLQuZKRPXMtCWLntX-d-YyE_bvmQlIMh-R5ksD1dgeZu6oGS6rmstp8DcNnY5U0q1ti7LxvoHjR6anbkSzJudUuv8GHs_At6hNz-mZmlAT7iD7DlG6tSQTlK0lJuu8gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 20 Oct 2021 07:57:42 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.2&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=89720913-6a45-4619-9462-fa942228a7a6&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'cdee7f40-c5db-41db-bba8-8a284ef01e00',
  'x-ms-ests-server',
  '2.1.12158.6 - SEASLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AoQTr0gYh7RIufQrqQayJpkWPr5BAQAAAPbCAdkOAAAA; expires=Fri, 19-Nov-2021 07:57:43 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Wed, 20 Oct 2021 07:57:42 GMT',
  'Content-Length',
  '1351'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .put('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.ContainerRegistry/registries/myregistryxxxyy', {"location":"eastus","tags":{"key":"value"},"sku":{"name":"Premium"},"properties":{"adminUserEnabled":false}})
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147cddbf5478f7ef147cb6c917ff4e8a39775be28d68b8f461fb5455e7b1ffc12fae47a85265f14d3ba6aaaf3767c522ddbac58e6f5abfca268dafafa6e2dbf147943108a19b5bedbac27cdb42e566d512d9bbb0ff7ce1fde9f1d9c6fdf9b7efa607b7f776f7ffbe1eef4c1f6c1f47ce7c1743639dfdbdfbd5be74db5aea7f9e775b55e357717d73fddb479d3de5dd5d56531cbebe6eeed70a037f58feb77efde5d5f134e3accfe176535cd80227d99674dbbc600daeca2016ddee6d7f4f16556ae73d0a1b92674164fb336c397d33acfda7cf6044dceb3fd07d9eebd9dedf3ecfe747b7f36d9d97e389ddedf9e4c3fbdbf737f7ab0ff60ff01c1b5afbc118a1eaf5665a1dddb6f8f5bfa666f676f777b77677b6fe7cdce8347f71f3cda7f387eb8bbbfb3bff3f0939d9d473b3bd4be2474bfa866c5790190f4d22db108df8ba2e237b9253e441f9aa6555e13ff30f1caeaa258beceeb4b66a70ee1c7d90fd6753eadc74545ddf1c8a967222d70d9d0d94f516beae6b268a879b1bc78ddca2bafd7d3699ecff2197d9fcd16c5f2ab26af4f97d9a4a48f1e9d676593130fe4ed5555bf7db52ef3d7398dea177f34cbcfb375d91e4fd13b81392ecbea8a405c1675bbceca17ee051ad2f7be4facbdb27f60c015d14c87fb8bd6599d2d5be2c897f894e683448cb023867af4d1ac6804157aa9add74debdaa870bda8daac063f46dfa9f33627d8d5d2bd37cbaea9d50399abaf5633a2c3ec4dc14cdea3dffd7b6312b84f1f3cdcd5c91ae8267fb7aa6a0f37db28574afe12345a4eeb6b96eaa0890f8790c94e97b355552cdbee24f8df7dbb6ada17d90204047157757149c330df92842f739e19f3fd7a4298e9a41cd38437f4c547a683607e9f5cafb2a6f992d144a363b01b98b1a0b7a8e90faa65fe2a9fad97b36c89b17ef4d4a04ffcb3ac96d78b6addbc5c97a5812ee8ff925f","f2ff007e9107bf38050000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'api-supported-versions',
  '2021-06-01-preview',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'Server',
  'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes',
  '1199',
  'x-ms-request-id',
  'c6ea9119-464c-4dbf-a7c0-de97581e47e1',
  'x-ms-correlation-request-id',
  'c6ea9119-464c-4dbf-a7c0-de97581e47e1',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211020T075755Z:c6ea9119-464c-4dbf-a7c0-de97581e47e1',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Wed, 20 Oct 2021 07:57:54 GMT'
]);