---
last_update: { author: "Priyanka Bhadri" }
---

# REST Request Timeouts

WaveMaker allows you to **customize timeout and connection settings** for REST service calls. These configuration properties control how long the platform waits for connections to be established, data to be received, and how many connections can be maintained. You can override these defaults by specifying system environment variables, Java system properties, or including them in the application’s configuration file (`app.properties`). 

---

## Timeout and Connection Properties

The following properties can be configured to fine-tune REST behavior:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `app.rest.useSystemProperties` | `false` | When set to `true`, WaveMaker uses standard Java system properties (`http.proxyHost`, `http.proxyPort`, `http.nonProxyHosts`) for REST connections.  |
| `app.rest.connectionSocketTimeout` | `360` | Maximum time in **seconds** to wait for the first byte of data after a connection is established. A timeout exception is thrown if the limit is exceeded. 
| `app.rest.connectionTimeout` | `30` | Maximum time in **seconds** to wait for a TCP connection to be established with the REST endpoint. A timeout occurs if the connection cannot be established in this period. 
| `app.rest.connectionRequestTimeout` | `5` | Maximum time in **seconds** to wait for a connection from the HTTP connection pool. A timeout exception will be thrown if the connection cannot be acquired within the specified period.  |
| `app.rest.maxTotalConnections` | `100` | Maximum number of total simultaneous connections that the connection manager can maintain. |
| `app.rest.maxConnectionsPerRoute` | `50` | Maximum number of connections per route (per REST endpoint) in the connection pool.  |
| `app.rest.tlsVersions` | `TLSv1.3,TLSv1.2` | List of TLS protocols enabled for secure connections when invoking HTTPS services.  |
| `app.multipartconfig.maxFileSize` | `300 MB` | Maximum file size allowed for multipart upload requests. |
| `app.multipartconfig.maxRequestSize` | `-1` | Maximum total size of multipart request content. A value of `-1` means no limit. 

---

## How These Settings Affect REST Calls

### Connection Timeout

- **Purpose:** Time allowed to establish a network connection to the REST service.
- **Default:** 30 seconds.
- **Effect:** If the server does not accept the socket connection within this period, a timeout exception is thrown. 

### Socket Timeout

- **Purpose:** Time to wait between receiving data packets once the REST call has been sent.
- **Default:** 360 seconds.
- **Effect:** If no data arrives within this period after the connection is established, the request is terminated with a timeout error. 
### Connection Request Timeout

- **Purpose:** Time to wait for a connection to be available from the connection pool.
- **Default:** 5 seconds.
- **Effect:** If no pooled connection is available within this period, a timeout exception occurs. 

---

## Using System Properties for Timeouts

If you enable `app.rest.useSystemProperties`, WaveMaker uses standard Java system properties such as:

- `http.proxyHost`
- `http.proxyPort`
- `http.nonProxyHosts`

These behave like typical JVM properties and are commonly used when REST calls must go through corporate proxy servers. 

---

## File Upload Limits

WaveMaker also provides properties to control **multipart request size** (used for file uploads):

- **`app.multipartconfig.maxFileSize`** defines the largest single file that can be uploaded.
- **`app.multipartconfig.maxRequestSize`** defines the total allowable size for a multipart request (all parts combined).

A negative value for `maxRequestSize` means there is no enforced limit. 

---

## Summary

Configurable REST timeout and connection settings in WaveMaker allow you to:

- Adjust how long the platform waits to connect or receive data from a REST endpoint.
- Control connection pooling limits for scalability.
- Enable use of system proxy settings when necessary.
- Set limits for file upload sizes via multipart configurations.

These properties can be defined in `app.properties` or controlled through environment/system settings to tune REST integration behavior based on application needs.
