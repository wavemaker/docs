---
last_update: { author: "Priyanka Bhadri" }
---

# Individual REST Endpoints

REST Services (Representational State Transfer) are web services designed to provide lightweight, scalable, and maintainable APIs that communicate over standard HTTP protocols. In a RESTful service, resources are exposed via URLs and clients interact with them using standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE. These services typically return responses in JSON or XML formats. WaveMaker makes it easy to integrate external REST services into your application and consume them using variables that can be bound to widgets for data display. 

---

## What is a REST Service?

A **REST Service** is a type of web service that exposes resources over HTTP. Instead of relying on complex messaging protocols, REST services use standard HTTP methods meaning:

- **GET** requests retrieve data  
- **POST** requests create resources or perform operations  
- **PUT/PATCH** requests update data  
- **DELETE** requests remove resources 

WaveMaker treats REST services as first-class data sources that can be imported, configured, and invoked from within your application. 

---

## Importing a REST Service

To integrate a third-party REST API into your WaveMaker app:

1. Go to **Resources → Web Services** in WaveMaker Studio.  
2. Click the **+** button and choose the **REST** service option.  
3. In the REST service dialog:
   - Enter the full service URL.
   - Choose the HTTP method (GET, POST, PUT, PATCH, DELETE, etc.).
   - Optionally configure **Use Proxy** (for web apps) if you need to route calls through a proxy server due to CORS or firewall restrictions.  
     - For web apps, proxy is optional and enables bypassing CORS restrictions during testing.
     - For mobile apps, calls are made directly to the service (if CORS issues occur during import testing, proxy may be applied behind the scenes).  
4. Configure **Authorization** if required:
   - **None** (default)
   - **Basic** (username/password)
   - **OAuth 2.0** – select or define an OAuth Provider and provide client details.  
5. Define any required **query parameters**, **path parameters**, or **header parameters** to match the API signature.  
6. Click **Test** to verify the service returns a valid response.  
7. Once verified, click **Import** to bring the service into your project. 
 The **Import** option becomes active only after a successful test. 
 
![alt text](individual-rest-endpoints/assets/oauth2-configuration.png)
<!-- ![alt text](image.png) -->

---

## Configuring REST Parameters

When setting up a REST service, you can configure several types of parameters:

- **Query Parameters** – Appended to the URL after `?`, and separated using `&`.  
- **Path Parameters** – Specified directly within curly braces `{}` in the URL.  
- **Header Parameters** – Configured via the headers section for additional metadata or auth tokens.  
- **Body Parameters** – Used for methods that accept input (e.g., POST or PUT). For file uploads or mixed content, set the content type to `multipart/form-data`, and specify parameter types such as File or Text. 

These parameters automatically appear as **input fields** in the service variable definition and can be bound to UI elements or variables. 

---

## Authentication and Security

WaveMaker supports different authentication models when configuring REST services:

- **No Authentication** — Default option when the service does not require credentials.  
- **Basic Authentication** — Uses username and password.  
- **OAuth 2.0** — Allows integration with OAuth providers. You can select from pre-configured providers or define new ones during REST service configuration. 

When securing REST calls, consider using **App Environment Properties** or **Server Side Properties** to store sensitive information such as API keys, tokens, or passwords. This ensures that sensitive values are not exposed in the UI or network calls. For more details refer [Secure Server Side Properties](individual-rest-endpoints/secure-server-side-properties.md).

---

 ## REST Request Timeouts 

WaveMaker allows you to **customize timeout and connection settings** for REST service calls. These configuration properties control how long the platform waits for connections to be established, data to be received, and how many connections can be maintained. You can override these defaults by specifying system environment variables, Java system properties, or including them in the application’s configuration file (`app.properties`). 


### Timeout and Connection Properties

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



## Overview of Properties

WaveMaker supports two primary property types for securing sensitive data:

### App Environment Properties

- These are **custom properties** you define and manage.
- They can be used throughout your application wherever environment-specific values are needed.
- Ideal for values like API keys, tokens, endpoints, and other configuration parameters that may differ across environments.
- Once created, App Environment Properties appear in the REST service configuration dialog under **Header** and **Query** parameter options. 

### Server-Side Properties

- These are **built-in variables** provided by WaveMaker.
- Server-Side Properties typically represent dynamic runtime information (for example, current date/time or logged-in user details).
- Like App Environment Properties, they help keep sensitive values off the client and out of direct network calls.

> Both property types help ensure sensitive values are not exposed on the UI or transmitted directly from the client.

---

## Configuring REST Services to Use a Proxy

To prevent sensitive values from being exposed in requests made directly from the client, you can enable the **Use Proxy** option when setting up REST services:

1. Add the REST service as usual, providing the endpoint URL and any required parameters.  
2. For each **Header** or **Query** parameter that should not be sent directly from the client, assign it either a **Server-Side Property** or an **App Environment Property**.  
3. Toggle **Use Proxy** to enable proxy routing for this REST service.  
   - When proxy is enabled, REST calls are made from the server side through the proxy, not directly from the client browser or device.  
   - This hides the sensitive parameter values from both network traces and UI variables.
WaveMaker enforces the use of the proxy server whenever Server-Side or App Environment Properties are used in REST service parameters.
![alt text](../importing-apis/individual-rest-endpoints/assets/rest-service-import-dialog.png)
![alt text](../importing-apis/individual-rest-endpoints/assets/rest-endpoint-creation.png)

---

## How This Affects UI and Network Calls

When sensitive values (such as keys or credentials) are bound to REST service **Header** or **Query parameters**, they may appear in the Variables dialog input fields at design time. Without protection, these values could leak through UI bindings or client-side scripts. 

By enabling the proxy:

- Parameter values are **sent from the server**, not from the client.  
- The client cannot see or intercept these values in the UI or network traffic.  
- This ensures that confidential information stays on the server side and is not exposed to end users. 

---

## Best Practices and Considerations

- If App Environment Properties are not listed under Header or Query parameter selections, ensure they are added correctly to your configuration profile.  
- You **must enable Use Proxy** before you can assign Server-Side or App Environment Properties to REST parameters.  
- If you modify the REST service URL or other configurations, re-test the service before saving to ensure proper behavior. 
- Using **App Environment Properties** for reusable configuration values across environments.  
- Leveraging **Server-Side Properties** for dynamic runtime values.  
- Enabling **Use Proxy** so that API keys, passwords, and other sensitive data are never sent directly from the client.  
- Ensuring that confidential parameters are handled server-side and remain hidden from UI and network traffic. 

These practices help you maintain secure integration with third-party services and safeguard critical application data.

---

## Testing a REST API

WaveMaker provides in-built testing as part of the import flow:

- After entering the service URL and optional parameters, use the **Test** button to validate that the REST endpoint returns a successful response.  
- You can verify response formats (JSON or XML) and adjust configuration like headers and parameters if needed.  
- Testing before import ensures that the service definition matches the expected input/output contract. 

---

## REST Services with Input Data

Some REST endpoints require data input (e.g., text or file uploads):

- When such endpoints are imported, set the **Content Type** to `multipart/form-data` under the Body tab.  
- You can specify input types as **File** or **Text**, allowing upload of files (e.g., images) or submission of textual data.  
- For internal WaveMaker REST APIs, `application/json` or `text/plain` types are also supported. 
<!-- ![alt text](image.png)# Import REST Services -->
![alt text](individual-rest-endpoints/assets/server-timeout-configuration.png)

---

## Generated Code

Once imported, WaveMaker automatically generates a complete backend for third-party APIs, including Java classes, service logic, and design-time configurations. Built on proven enterprise technologies such as Java, Spring, and Hibernate/JPA, this enables rapid and seamless API integration and customization.

Developers have full access to the generated source code. Refer [generated  code](generated-code.md)

## Application Configuration Properties

Whenever services are imported into WaveMaker, the platform automatically **generates configuration properties** that can be mapped to different environments such as Development, QA, or Production.  
You can view and manage these properties in the **Profiles**.  
For more information, refer to the **[Profiles](../../configurations/profiles.md)** section in the documentation.

For more details on environment-specific configurations, refer to the **[ Profile Settings](../../configurations/profile-settings.md)** section.

<details>
<summary>Click to expand configuration properties</summary>

```properties
# ---------------------------
# REST API Configurations
# ---------------------------

## Random User API
rest.randomuser.basepath=
rest.randomuser.host=randomuser.me
rest.randomuser.scheme=https

```
</details>

---

## Summary

REST Services in WaveMaker allow seamless integration of external HTTP APIs into your low-code application:

- Import REST web services via the Web Services panel.  
- Configure URL, HTTP method, parameters, and authentication.  
- Test endpoints before importing.  
- Create service variables to invoke the API and bind responses to UI widgets.  
- Use proxy configuration and environment properties to handle CORS and secure credentials.

<!-- By treating REST services as first-class citizens within the platform, WaveMaker makes it simple to consume external APIs and integrate them with your app’s pages and logic. -->
