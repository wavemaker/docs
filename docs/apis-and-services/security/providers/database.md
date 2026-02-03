---
last_update: { author: "Priyanka Bhadri" }
---

# Database

Database authentication enables WaveMaker applications to authenticate users using credentials stored in an application-managed database. Unlike federated authentication mechanisms, database authentication keeps identity validation fully **within the application boundary**, providing greater control over user lifecycle and credential management.

WaveMaker supports database-based authentication out of the box, allowing applications to validate usernames and passwords against configured database tables while enforcing authorization consistently across pages, services, and APIs.

In a WaveMaker application:
- WaveMaker acts as the **Authentication Provider**
- User credentials and roles are stored and managed in the database

---

## How Database Authentication Works in WaveMaker

1. A user attempts to access a secured WaveMaker application or page.
2. The user is presented with the WaveMaker login screen.
3. Credentials are submitted securely to the backend.
4. WaveMaker validates the credentials against configured database tables.
5. Upon successful authentication, a server-side session is established.
6. User roles are resolved from the database.
7. Authorization rules are applied.

All authentication and authorization checks occur on the server, ensuring secure enforcement.

---

## Database Authentication Architecture

- **Authentication Provider:** WaveMaker backend  
- **User Store:** Application database  
- **Credential Validation:** Server-side  
- **Role Resolution:** Database-driven  
- **Authorization:** Role-based access control (RBAC)  

WaveMaker automatically generates backend security services to manage authentication and authorization consistently.

---

 
## Configuring Database Authentication in WaveMaker

- Database authentication allows WaveMaker applications to verify users and control access using database tables.

- Security must be enabled in the application to ensure that protected pages, services, and APIs are accessible only to authenticated users.

- The database can be configured as the authentication provider by assigning a unique provider name and optionally setting it as the primary authentication mechanism.

- Authentication relies on database tables to manage user credentials and roles:

  - **User Table**
    - Stores username and password details.
    - Can include an account status or enable/disable flag to control user access.

  - **Role Table**
    - Defines application roles using role names and identifiers.

  - **User–Role Mapping Table**
    - Associates users with one or more roles when multiple role assignments are required.

- WaveMaker supports secure password management:
  - Passwords can be stored in encrypted or hashed formats.
  - Password verification is handled securely on the server side.
  - Configurable password encoders are supported.
  - Plain-text password storage is not recommended for production environments.

- After successful authentication, WaveMaker automatically enforces authorization rules:
  - Access to pages, services, and APIs is controlled based on user roles.
  - Unauthorized users are prevented from accessing restricted resources.


---



<!-- ## Runtime Behavior

At runtime:

- WaveMaker intercepts secured requests
- User credentials are validated against the database
- A security context is established on the server
- Roles are resolved from database mappings
- Authorization rules are enforced consistently across UI and backend services

This ensures predictable and secure behavior throughout the application.

--- -->

## When to Use Database Authentication

Database authentication is recommended for:

- Applications that require full control over user management
- Systems without external identity providers
- Standalone or internal applications
- Scenarios where credentials must remain within the application

---

<!-- ## Credential Validation and Security

WaveMaker enforces database authentication security entirely on the backend by:

- Validating credentials server-side
- Supporting encrypted password storage
- Preventing client-side manipulation
- Enforcing session and role checks on every request

This ensures strong security without reliance on external systems.

--- -->

## Generated Backend Code

When database authentication is configured in WaveMaker, the platform automatically generates a **security service structure** responsible for authentication, authorization, and request enforcement. This structure is platform-managed and should not be modified manually.

### Project Structure

```text
services/
├── hrdb
└── securityService
    ├── designtime
    │   ├── auth-info.json
    │   ├── general-options.json
    │   ├── intercept-urls.json
    │   ├── roles.json
    │   ├── securityService_API.json
    │   ├── service-info.json
    │   └── wm-xss-policies.json
    └── src
        └── servicedefs
            └── securityService-service-definitions.json
```

### Design-Time Configuration (`designtime`)

The `designtime` folder stores security configuration created in WaveMaker Studio. This includes authentication provider details, application roles, secured URL mappings, and global security settings. These configurations define how security is applied consistently across the application.

- **`auth-info.json`**
  Stores authentication provider configuration including authentication type (Database, LDAP/AD, CAS, SAML, OpenID, JWS, OPAQUE), provider-specific details, and principal claim attributes.

- **`general-options.json`**
  Defines global security behavior including session timeout, token service configuration, CORS and CSRF settings, SSL and mutual TLS options, and remember-me behavior.

- **`intercept-urls.json`**
  Specifies which URLs are secured and access rules applied to them, including public vs protected endpoints, role-based access mappings, and HTTP method-level security.

- **`roles.json`**
  Defines application roles used for Role-Based Access Control (RBAC), including role names, identifiers, and authorization mappings.

- **`securityService_API.json`**
  Exposes internal security APIs used by the WaveMaker runtime such as login, logout, token validation, and security context resolution. These APIs are not intended for direct customization.

- **`service-info.json`**
  Contains metadata describing the security service including service name, version information, and platform-managed identifiers.

- **`wm-xss-policies.json`**
  Defines XSS protection policies applied at runtime including input/output sanitization rules, backward compatibility options, and enforcement layers.

### Runtime Service Definitions (`src/servicedefs`)

The `src/servicedefs` directory contains runtime artifacts required for security enforcement.

- **`securityService-service-definitions.json`**
  Acts as the bridge between design-time configuration and runtime enforcement, enabling request interception, authentication execution, token validation, role resolution, and authorization enforcement.

### How This Works at Runtime

- A request is made to a secured resource.

- WaveMaker intercepts the request using `intercept-urls.json`.

- Authentication is performed based on `auth-info.json`.

- Global security rules are applied from `general-options.json`.

- Roles are resolved using `roles.json`.

- Authorization is enforced using the runtime service definitions.

- The security context is maintained across UI, services, and APIs.

This guarantees consistent, server-side security enforcement across the entire application.

---

## Application Configuration Properties

Whenever security is configured in WaveMaker, the platform automatically **generates configuration properties** that can be mapped to different environments such as Development, QA, or Production.  
You can view and manage these properties in the **Profiles**.  
For more information, refer to the **[Profiles](../../configurations/profiles.md)** section in the documentation.

For more details on environment-specific configurations, refer to the **[Deployment Profiles](../../configurations/profile-settings.md)** section.

<details>
<summary>Click to expand configuration properties</summary>

```properties
# Security Configuration (HRDB)
security.activeProviders=DATABASE
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
security.general.rememberMe.enabled=true
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

Database authentication in WaveMaker provides a simple, flexible, and fully managed authentication mechanism for applications that require in-app user management. With automatic backend code generation, secure credential validation, and built-in role-based authorization, WaveMaker enables robust authentication without external dependencies.

This approach is ideal for applications that prioritize control, simplicity, and server-side security enforcement.
