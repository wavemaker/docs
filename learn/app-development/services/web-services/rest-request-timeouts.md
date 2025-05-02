---
title: "REST Request Timeouts"
id: "rest-request-timeouts"
---
---

You can override REST properties for proxy REST calls configuration by sending these properties as system env/system property. Alternatively, you can also add them in the `app.properties` for proxy REST calls configuration.

## Properties

| Properties | Default Value | Description |
|---|---|---|
| **`app.rest.useSystemProperties`** |  `false` | If set to true, uses the system properties like http.proxyHost, http.proxyPort, http.nonProxyHosts for making underlying http request for rest service api calls. |
| **`app.rest.connectionSocketTimeout`** |  360 | Maximum time (in seconds) to wait between two packets of data. It is mainly used for the first-byte response to come back for the request made. It throws a timeout exception if the time exceeds. |
| **`app.rest.connectionTimeout`** | 30| Maximum time (in seconds) to wait for the HTTP/HTTPS connection to be established with the target server. It throws a timeout exception if the time exceeds.|
| **`app.rest.maxTotalConnections`** |  100 | Maximum total connections in the pooling connection manager.|
| **`app.rest.maxConnectionsPerRoute`** | 50 | Maximum total connections per route in the pooling connection manager.|
| **`app.rest.connectionRequestTimeout`** | 5 | Maximum time (in seconds) to acquire a connection from the pooling connection manager. It throws a timeout exception if the time exceeds. |
| **`app.rest.tlsVersions`** | TLSv1.3,TLSv1.2 | It allows configuring the TLS versions that the application will utilize for establishing secure connections while invoking REST APIs. TLSv1.3 abd TLSv1.2 are enabled by default. |
| **`app.multipartconfig.maxFileSize`** | 300 MB | It defines the maximum upload size in bytes which prevents users from uploading files with size beyond the set limit. |
| **`app.multipartconfig.maxRequestSize`** | -1 | It defines the maximum request size in bytes for multipart requests, ensuring the total size of incoming request does not exceed the specified limit. By Default there is no restriction on request size. |
| **`app.rest.connectionTimeToLive`** | -1 | Maximum time (in milliseconds) that a newly established connection can remain active in the connection pool. This property is applicable when importing a new REST API as well as for already imported REST API. |
