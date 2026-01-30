---
last_update: { author: "Priyanka Bhadri" }
---

# Proxy Configuration


WaveMaker allows you to integrate external services—whether **REST APIs** or **Swagger/OpenAPI** endpoints—directly from the frontend or via a **server-side proxy**. Using a proxy provides more control over requests, helps bypass CORS restrictions, and enables secure injection of headers or query parameters. You can also manage cookies and authentication tokens when needed. 


Using a proxy provides several advantages:

 - **Bypass CORS restrictions:** Some APIs may block direct browser requests due to Cross-Origin Resource Sharing policies. Proxying the request through the server avoids this limitation.

 - **Secure parameter injection:** Headers or query parameters can be added on the server side, keeping sensitive information hidden from the client.

 - **Cookie and session management:** With proxy-enabled calls, cookies and authentication tokens can be sent and managed automatically.



<!-- ---

## Proxy Usage Overview -->

| Option | Description |
|--------|-------------|
| **Use Proxy** | Enables routing the API call through WaveMaker’s server instead of directly from the browser. This helps avoid CORS issues and allows sending server-side parameters hidden from the UI. |
| **With Credentials** | Sends cookies and session information along with the request, ensuring APIs that rely on authentication or sessions work correctly. |

---

## Generic Flow

1. **Direct Call (Proxy Disabled)**  
   - The client (browser) calls the external API directly.  
   - The API must support **CORS**; otherwise, the request will be blocked.  
   - No server-side headers or hidden parameters can be applied.  

2. **Server-Side Proxy (Proxy Enabled)**  
   - WaveMaker server forwards the request to the external API.  
   - Allows injecting **server-side headers or query parameters** that are hidden from the UI.  
   - Handles **authentication, API keys, and cookies** transparently.  
   - Resolves CORS issues since the browser is only communicating with the WaveMaker server.

---




## Example Scenarios: Using Proxy for External Services

When integrating external services in WaveMaker, you can decide whether to call them directly or through a **server-side proxy**. The proxy allows additional control, secure header injection, and CORS handling. Here’s how it works in practice:

###  REST API Integration  

Imagine you want to fetch user data from a REST endpoint:  

- **Endpoint:** `https://randomuser.me`  
- **Base Path:** `/api`  
- **Use Proxy:** Enabled  
- **With Credentials:** Checked if cookies or session info are needed  

**Flow:**  
1. The frontend calls your WaveMaker service.  
2. The request goes through the proxy, which can attach hidden headers or tokens.  
3. The proxy handles any CORS restrictions that the API might have.  
4. Cookies or session info from the API are maintained, ensuring authenticated calls succeed.  

**Outcome:** Your UI receives the API data securely and reliably without exposing sensitive info or running into browser CORS limitations.



###  Swagger / OpenAPI Service Integration  

Now consider a Swagger/OpenAPI service:  

- **Host Name:** `https://petstore.swagger.io`  
- **Base Path:** `/v2`  
- **Use Proxy:** Enabled  
- **With Credentials:** Checked if required  
- **Authorization:** API key, OAuth token, or other headers injected server-side  

**Flow:**  
1. A frontend component calls a method defined in the imported Swagger service.  
2. WaveMaker routes the request through the proxy.  
3. The proxy injects necessary authentication headers or query parameters that should remain hidden from the UI.  
4. The request reaches the API endpoint securely, returning the expected response.  

**Outcome:** Multiple endpoints defined in Swagger/OpenAPI are accessed consistently, securely, and can be directly bound to frontend components without manual header management.

---

## Backend File Modifications

When you enable or disable the **Use Proxy** option for a REST or Swagger service in WaveMaker, the platform updates certain configuration and runtime files to reflect this change. These files are used internally by WaveMaker to manage request routing, headers, and server-side behavior.


- **Swagger / REST Service Metadata**
  - `swagger_API_REST_SERVICE.json` – Designtime metadata for the Swagger/REST service.
  - `swagger_apiTarget.json` – Stores configuration about the target API, including base path, host, proxy settings, and credentials.
  - `swagger_apiTarget.jso` – Runtime JSON used by WaveMaker to route API calls and inject server-side headers.

The following are the changes observed in these files when the proxy is enabled/disabled

- **`x-WM-USE_PROXY_FOR_WEB`** – `true` if web requests are routed through the proxy; `false` if bypassing the proxy.  
- **`x-WM-USE_PROXY_FOR_MOBILE`** – `true` if mobile requests are routed through the proxy; `false` if bypassing the proxy.  


Any **server-side headers or query parameters** marked as hidden are maintained and injected via the proxy configuration.
The internal JSON files update automatically, so WaveMaker knows whether to route requests **directly** to the target API or **through the proxy server**.

---


## Best Practices

- **Enable Proxy** when:  
  - API does not support CORS  
  - You need to inject headers or query parameters securely  
  - Cookies or session data must be honored  

- **Disable Proxy** when:  
  - API supports CORS  
  - No sensitive headers or parameters are required  

- **With Credentials** is needed only if cookies or session tokens should be sent along with the request.

---

## Summary

Using WaveMaker’s proxy mechanism ensures secure, reliable, and flexible communication with external services. It works consistently for **REST APIs** and **Swagger/OpenAPI services**, enabling you to:  

- Bypass CORS issues  
- Inject server-side headers and query parameters  
- Maintain authentication or session data  
- Simplify frontend integration by exposing a single, orchestrated API
