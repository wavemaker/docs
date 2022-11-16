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
| **`app.rest.connectionSocketTimeout`** |  360 | Maximum time to wait between two packets of data. It is mainly used for the first-byte response to come back for the request made. It throws a timeout exception if the time exceeds. |
| **`app.rest.connectionTimeout`** | 30| Maximum time to wait for the HTTP/HTTPS connection to be established with the target server. It throws a timeout exception if the time exceeds.|
| **`app.rest.maxTotalConnections`** |  100 | Maximum total connections in the pooling connection manager.|
| **`app.rest.maxConnectionsPerRoute`** | 50 | Maximum total connections per route in the pooling connection manager.
| **`app.rest.connectionRequestTimeout`** | 5 | Maximum time to acquire a connection from the pooling connection manager. It throws a timeout exception if the time exceeds. |
