let nock = require('nock');

module.exports.hash = "ff54c61cc9a352bcb7c9da0878037d36";

module.exports.testInfo = {"uniqueName":{"share":"share164549791307600052","dir":"dir164549791336706050","file":"file164549791366307077","copiedfile":"copiedfile164549791396208559"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share164549791307600052')
  .query(true)
  .reply(201, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 22 Feb 2022 02:45:13 GMT',
  'ETag',
  '"0x8D9F5AD59C93528"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c1816-501a-006b-0896-274d45000000',
  'x-ms-client-request-id',
  '40443cfd-b467-4edf-acf9-c16427abf3aa',
  'x-ms-version',
  '2021-04-10',
  'Date',
  'Tue, 22 Feb 2022 02:45:12 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share164549791307600052/dir164549791336706050')
  .query(true)
  .reply(201, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 22 Feb 2022 02:45:13 GMT',
  'ETag',
  '"0x8D9F5AD59F6E700"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c1818-501a-006b-0996-274d45000000',
  'x-ms-client-request-id',
  '46bc68b0-5d19-477b-97fd-6028f4aae5a3',
  'x-ms-version',
  '2021-04-10',
  'x-ms-file-change-time',
  '2022-02-22T02:45:13.7136384Z',
  'x-ms-file-last-write-time',
  '2022-02-22T02:45:13.7136384Z',
  'x-ms-file-creation-time',
  '2022-02-22T02:45:13.7136384Z',
  'x-ms-file-permission-key',
  '1348922918165632443*8819015832131519026',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 22 Feb 2022 02:45:12 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share164549791307600052/dir164549791336706050/file164549791366307077')
  .reply(201, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 22 Feb 2022 02:45:14 GMT',
  'ETag',
  '"0x8D9F5AD5A2458F9"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c181b-501a-006b-0b96-274d45000000',
  'x-ms-client-request-id',
  '0aa9d694-ef8e-42f9-ae3e-b654a1d522dd',
  'x-ms-version',
  '2021-04-10',
  'x-ms-file-change-time',
  '2022-02-22T02:45:14.0114681Z',
  'x-ms-file-last-write-time',
  '2022-02-22T02:45:14.0114681Z',
  'x-ms-file-creation-time',
  '2022-02-22T02:45:14.0114681Z',
  'x-ms-file-permission-key',
  '15187149962788154044*8819015832131519026',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 22 Feb 2022 02:45:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share164549791307600052/dir164549791336706050/copiedfile164549791396208559')
  .reply(201, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 22 Feb 2022 02:45:14 GMT',
  'ETag',
  '"0x8D9F5AD5A517CCC"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c181c-501a-006b-0c96-274d45000000',
  'x-ms-client-request-id',
  '5f146f16-82ae-4bb1-8812-2845ce3673e7',
  'x-ms-version',
  '2021-04-10',
  'x-ms-file-change-time',
  '2022-02-22T02:45:14.3072972Z',
  'x-ms-file-last-write-time',
  '2022-02-22T02:45:14.3072972Z',
  'x-ms-file-creation-time',
  '2022-02-22T02:45:14.3072972Z',
  'x-ms-file-permission-key',
  '15187149962788154044*8819015832131519026',
  'x-ms-file-attributes',
  'ReadOnly | Archive',
  'x-ms-file-id',
  '16140971433240035328',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Tue, 22 Feb 2022 02:45:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share164549791307600052/dir164549791336706050/copiedfile164549791396208559')
  .reply(202, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Tue, 22 Feb 2022 02:45:14 GMT',
  'ETag',
  '"0x8D9F5AD5A892670"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c181d-501a-006b-0d96-274d45000000',
  'x-ms-client-request-id',
  '5b55d8f8-f67d-43f0-bd8f-199f3661efa1',
  'x-ms-version',
  '2021-04-10',
  'x-ms-copy-id',
  '3924362b-7f6a-45b1-819b-0526bddbb6a9',
  'x-ms-copy-status',
  'success',
  'Date',
  'Tue, 22 Feb 2022 02:45:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share164549791307600052/dir164549791336706050/file164549791366307077')
  .reply(200, "", [
  'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Tue, 22 Feb 2022 02:45:14 GMT',
  'ETag',
  '"0x8D9F5AD5A2458F9"',
  'Vary',
  'Origin',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c1820-501a-006b-1096-274d45000000',
  'x-ms-client-request-id',
  'f4563d6b-a4b8-48c7-908c-f71b84a8dbc0',
  'x-ms-version',
  '2021-04-10',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-file-change-time',
  '2022-02-22T02:45:14.0114681Z',
  'x-ms-file-last-write-time',
  '2022-02-22T02:45:14.0114681Z',
  'x-ms-file-creation-time',
  '2022-02-22T02:45:14.0114681Z',
  'x-ms-file-permission-key',
  '15187149962788154044*8819015832131519026',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Date',
  'Tue, 22 Feb 2022 02:45:14 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share164549791307600052/dir164549791336706050/copiedfile164549791396208559')
  .reply(200, "", [
  'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Tue, 22 Feb 2022 02:45:14 GMT',
  'ETag',
  '"0x8D9F5AD5A892670"',
  'Vary',
  'Origin',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c1822-501a-006b-1296-274d45000000',
  'x-ms-client-request-id',
  '73129061-7cca-4e9b-b6fb-a9b4aa48ff0e',
  'x-ms-version',
  '2021-04-10',
  'x-ms-copy-id',
  '3924362b-7f6a-45b1-819b-0526bddbb6a9',
  'x-ms-copy-source',
  'https://fakestorageaccount.file.core.windows.net/share164549791307600052/dir164549791336706050/file164549791366307077',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Tue, 22 Feb 2022 02:45:14 GMT',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-file-change-time',
  '2022-02-22T02:45:14.6720880Z',
  'x-ms-file-last-write-time',
  '2022-02-22T02:45:14.0114681Z',
  'x-ms-file-creation-time',
  '2022-02-22T02:45:14.6720880Z',
  'x-ms-file-permission-key',
  '10974970485353649799*8819015832131519026',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '16140971433240035328',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Date',
  'Tue, 22 Feb 2022 02:45:14 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share164549791307600052')
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '868c1826-501a-006b-1596-274d45000000',
  'x-ms-client-request-id',
  'b2b86296-8e5b-46cc-82d2-0e220de5962e',
  'x-ms-version',
  '2021-04-10',
  'Date',
  'Tue, 22 Feb 2022 02:45:14 GMT'
]);
