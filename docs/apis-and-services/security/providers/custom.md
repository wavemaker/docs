---
last_update: { author: "Priyanka Bhadri" }
---

# Custom Security Provider

WaveMaker’s **Custom Security Provider** allows developers to plug in their own authentication logic using Java while still leveraging WaveMaker’s built-in security infrastructure for interception, session handling, and authorization.

This approach is ideal when authentication must be integrated with **non-standard systems**, **legacy services**, or **custom credential validation logic**.

---

## How Custom Security Works in WaveMaker

1. A user attempts to access a secured page or API.
2. The request is intercepted by WaveMaker’s security layer.
3. WaveMaker invokes your custom authentication implementation.
4. Custom logic inspects the credentials (from the login form or request).
5. If validated, WaveMaker establishes a security context with user identity and roles.
6. Authorization (RBAC) is applied based on this resolved identity.

This model keeps **session management, request interception, and authorization enforcement** in WaveMaker while making authentication logic fully customizable.

---

## Custom Authentication Architecture

- **WaveMaker Security Service:** Intercepts requests, manages sessions, resolves roles  
- **Custom Java Class:** Implements authentication logic  
- **Credential Source:** Any system (legacy API, external service, token store, etc.)  
- **Role Mapping:** Can be returned by custom logic or derived from another system

---

## When to Use Custom Security

Use Custom Security when:

- Standard providers do not meet authentication requirements  
- You must integrate with internal or proprietary identity systems  
- Authentication requires multi-factor or API-based logic  
- Dynamic authorization rules are enforced outside of WaveMaker’s default providers

---


## Configuring Custom Authentication in WaveMaker

- Custom authentication allows applications to implement user authentication using custom business logic, external services, or proprietary identity systems that are not supported by standard authentication providers.

- Security must be enabled in the application to ensure that protected pages, services, and APIs are accessible only to authenticated users.

- The **Custom** option can be configured as the authentication provider by assigning a unique provider name and saving the configuration.

- Custom authentication requires providing a fully qualified Java class name that implements the WaveMaker authentication interface:

  - **Required Interface:** `WMCustomAuthenticationManager`
  - If the implementation class does not exist, WaveMaker Studio can generate a sample implementation template.

- The custom authentication class must implement the following method:

  ```java
  public interface WMCustomAuthenticationManager {
      WMUser authenticate(AuthRequestContext authRequestContext) throws AuthenticationException;
  }



WaveMaker passes user credentials and request context using the AuthRequestContext object. The custom implementation must validate credentials and return a `WMUser` object representing the authenticated user. If authentication fails, the method should return `null`.

 
### Supported Authentication Strategies

The custom implementation can include various authentication approaches such as:

 - Validating credentials against a custom database or data store

 - Calling external REST APIs or microservices

 - Applying business-specific authentication rules

 - Implementing multi-factor or conditional authentication logic

 - Assigning user roles dynamically based on validation results

 ### Example Implementation
 ``` 
 @Override
public WMUser authenticate(AuthRequestContext authRequestContext) {
    String username = authRequestContext.getUsername();
    String password = authRequestContext.getPassword();
    HttpServletRequest httpRequest = authRequestContext.getHttpServletRequest();

    // Custom validation logic
    if ("John".equals(username) && "John123".equals(password)) {
        List<String> roles = new ArrayList<>();
        roles.add("admin");
        return new WMUser("John", username, roles);
    }
    return null;
}
```
The custom authentication logic returns a `WMUser` object containing authenticated user details and assigned roles based on validation results or external service responses.

### Authorization Enforcement

After successful authentication, WaveMaker enforces authorization rules across the application:

 - Access to pages, services, and APIs is controlled based on assigned roles

 - Role-based access restrictions are applied consistently across UI and backend components

 - Unauthorized users are prevented from accessing restricted resources

---


## Runtime Behavior


At runtime:

- The security filter invokes your custom authentication class
- Credentials are passed to your code via `AuthRequestContext`
- WaveMaker sets the authenticated user and roles into the runtime security context
- Authorization (RBAC) is enforced for secured pages, data services, and APIs

This ensures both authentication and authorization are enforced server-side without exposing internals to the client.

---

## Generated Backend Code

When custom authentication is configured in WaveMaker, the platform automatically generates a **security service structure** responsible for authentication, authorization, and request interception. These files are platform-managed and should not be modified manually.

### Project Structure

```text
services/
└── securityService/
    ├── designtime/
    │   ├── auth-info.json
    │   ├── general-options.json
    │   ├── intercept-urls.json
    │   ├── roles.json
    │   ├── securityService_API.json
    │   ├── service-info.json
    │   └── wm-xss-policies.json
    └── src/
        ├── servicedefs/
        │   └── securityService-service-definitions.json
        └── customsecurity.java
```


### Design-Time Configuration (`designtime`)

The `designtime` folder contains all security configuration created via WaveMaker Studio. These files define **what is secured** and **how security behaves**.

#### Key Files

- **`auth-info.json`**  
  Specifies the authentication provider type as `Custom` and stores provider-level metadata.

- **`general-options.json`**  
  Defines global security behavior such as:
  - Session handling
  - Cookie and remember-me options
  - CSRF and CORS policies
  - SSL and transport security options

- **`intercept-urls.json`**  
  Defines secured URL patterns and access rules:
  - Public vs protected endpoints
  - Role-based access mappings
  - HTTP method-level security

- **`roles.json`**  
  Contains application roles used for Role-Based Access Control (RBAC).

- **`securityService_API.json`**  
  Exposes internal security APIs such as login, logout, and token validation.  
  These APIs are platform-managed and not meant for customization.

- **`service-info.json`**  
  Contains metadata describing the security service.

- **`wm-xss-policies.json`**  
  Defines runtime XSS protection rules.

---

### Runtime Service Definitions (`src/servicedefs`)

- **`securityService-service-definitions.json`**

This file acts as the bridge between **design-time configuration** and **runtime enforcement**.

It enables:
- Request interception
- Authentication execution
- Role resolution
- Authorization enforcement

WaveMaker uses this definition at runtime to ensure all secured pages, services, and APIs are protected consistently.


<!-- ## Custom Authentication Implementation

### customsecurity.java

When Custom Security is selected, WaveMaker generates a Java class where authentication logic must be implemented.

This class implements the `WMCustomAuthenticationManager` interface.



### Sample Implementation

```java
public class customsecurity implements WMCustomAuthenticationManager {

    private static final Logger logger =
        LoggerFactory.getLogger(customsecurity.class);

    @Override
    public WMUser authenticate(AuthRequestContext authRequestContext)
            throws AuthenticationException {

        String username = authRequestContext.getUsername();
        String password = authRequestContext.getPassword();

        logger.info(username);

        if (username.equals("user1") && password.equals("user1")) {
            return new WMUser(
                username,
                password,
                new ArrayList<String>()
            );
        } else {
            throw new BadCredentialsException(
                "User " + username + " not found"
            );
        }
    }
}
``` -->


---


## Best Practices

- Keep your custom authentication logic modular and testable
- Avoid embedding secrets in client code
- Use secure connections for external calls
- Log authentication attempts securely for audit purposes
- Prefer standard providers if possible — use Custom only when necessary

---

## Application Configuration Properties

Whenever security is configured in WaveMaker, the platform automatically **generates configuration properties** that can be mapped to different environments such as Development, QA, or Production.  
You can view and manage these properties in the **Profiles**.  
For more information, refer to the **[Profiles](../../configurations/profiles.md)** section in the documentation.

For more details on environment-specific configurations, refer to the **[Deployment Profiles](../../configurations/profile-settings.md)** section.

<details>
<summary>Click to expand configuration properties</summary>

```properties
# Security Configuration (CUSTOM)

security.activeProviders=CUSTOM
security.enabled=true
security.general.client.ssl.hostNameVerification.enabled=true
security.general.cookie.base64Encode=true
security.general.cookie.jvmRoute=
security.general.cookie.maxAge=-1
security.general.cookie.path=
security.general.cookie.sameSite=
security.general.cors.allowCredentials=false
security.general.cors.enabled=false
security.general.cors.maxAge=1600
security.general.cors.pathEntries.root.allowedOrigins=*
security.general.csp.enabled=false
security.general.csp.policy=
security.general.frameOptions.allowFromUrl=
security.general.frameOptions.enabled=true
security.general.frameOptions.mode=SAMEORIGIN
security.general.login.maxSessionsAllowed=-1
security.general.mtls.enabled=false
security.general.mtls.keystore.file=
security.general.mtls.keystore.fileType=
security.general.mtls.keystore.password=
security.general.rememberMe.enabled=false
security.general.rememberMe.timeOut=1296000
security.general.request.allowedHosts=
security.general.session.timeout=30
security.general.ssl.enabled=false
security.general.ssl.port=443
security.general.tokenService.enabled=true
security.general.tokenService.parameter=WM_AUTH_TOKEN
security.general.tokenService.tokenValiditySeconds=1800
security.general.truststore.config=SYSTEM_ONLY
security.general.truststore.file=
security.general.truststore.fileType=
security.general.truststore.password=
security.general.xsrf.enabled=true
security.general.xss.dataBackwardCompatibility=false
security.general.xss.enabled=true
security.general.xss.sanitizationLayer=OUTPUT
security.session.persistence.type=in-memory

```

</details>

---


## Summary

The Custom Security Provider in WaveMaker lets you fully tailor authentication to your business needs by plugging in your own Java implementation. This gives you the flexibility to integrate with legacy systems, non-standard identity sources, or any proprietary logic while still leveraging WaveMaker's robust request handling and RBAC enforcement.