---
last_update: { author: "Priyanka Bhadri" }
---

# CAS (Central Authentication Service)

Central Authentication Service (CAS) is a **ticket-based Single Sign-On (SSO)** protocol widely used in enterprise and academic environments. CAS allows users to authenticate once with a central server and gain access to multiple applications without re-entering credentials.

WaveMaker supports CAS-based authentication, enabling applications to delegate authentication to an external CAS server while maintaining secure, server-side authorization and session management.

In a WaveMaker application:
- WaveMaker acts as the **CAS Client**
- An external CAS server acts as the **Authentication Authority**

---

## How CAS Authentication Works in WaveMaker

1. A user attempts to access a secured WaveMaker application or page.
2. WaveMaker redirects the user to the configured **CAS Login URL**.
3. The CAS server authenticates the user.
4. Upon successful authentication, CAS issues a **Service Ticket (ST)**.
5. The user is redirected back to WaveMaker with the ticket.
6. WaveMaker validates the ticket with the CAS **Validation URL**.
7. User identity is established and a session is created.
8. Roles are resolved and authorization rules are enforced.

This flow enables centralized login while keeping credentials outside the application.

---

## CAS Integration Architecture

- **CAS Client:** WaveMaker application  
- **CAS Server:** Central authentication server  
- **Service Ticket (ST):** One-time ticket issued after login  
- **Ticket Validation:** Server-to-server validation of the ticket  

WaveMaker never handles user passwords directly; all authentication is delegated to CAS.

---

## Supported CAS Servers

WaveMaker CAS integration works with standard CAS implementations, including:

- Apereo CAS Server
- Enterprise CAS deployments
- University or institutional CAS systems

---

## Configuring CAS Authentication in WaveMaker

- CAS authentication enables Single Sign-On (SSO) by allowing users to authenticate through a centralized CAS server, ensuring seamless access across multiple applications.

- Security must be enabled in the application to ensure that protected pages, services, and APIs are accessible only to authenticated users.

- The **CAS** option can be configured as the authentication provider by assigning a unique provider name and optionally setting it as the primary authentication mechanism.

- CAS server configuration requires specifying the required endpoints used during the authentication flow:

  - **Server URL**
    - Defines the base URL of the CAS server.
    - Example: `https://mydomain.com:8080/cas`

  - **Login URL**
    - Specifies the CAS endpoint used for user authentication.
    - Example: `https://mydomain.com:8080/cas/login`

  - **Logout URL**
    - Defines the endpoint used to log users out from the CAS server.
    - Example: `https://mydomain.com:8080/cas/logout`

  - **Validation URL**
    - Used to validate the service ticket returned by the CAS server.
    - Example: `https://mydomain.com:8080/cas/serviceValidate`
    - The validation URL must match the CAS protocol version used.

  - **Service Parameter Name**
    - Specifies the parameter used to pass the service URL during authentication.
    - Common value: `service`

  - **Ticket Parameter Name**
    - Specifies the parameter used to receive the authentication ticket from the CAS server.
    - Common value: `ticket`

- CAS endpoints must be reachable from the WaveMaker runtime environment, and HTTPS is strongly recommended for production deployments to ensure secure communication.

- Attribute mapping allows WaveMaker to extract user details from the CAS validation response, including:
  - Username or Principal
  - Email (if provided by CAS)
  - Display Name (optional)
  - Roles or Groups (optional)

- Role resolution can be handled in two ways:
  - Roles can be directly derived from CAS attributes.
  - Roles can be retrieved from a database using the authenticated username.

- After successful authentication, WaveMaker enforces authorization rules across the application:
  - Access to pages, services, and APIs is controlled based on assigned roles.
  - Unauthorized users are prevented from accessing restricted resources.


---

### Step 5: Configure Authorization

After authentication:
- Role-based access rules are applied
- Pages, services, and APIs are protected
- Unauthorized users are blocked automatically

---

## Runtime Behavior

At runtime:

- WaveMaker intercepts secured requests
- Users are redirected to the CAS login page
- Service tickets are validated server-side
- Sessions are created and maintained
- Logout can optionally propagate to the CAS server (SLO support depends on CAS setup)

This ensures consistent authentication and authorization across the application.

---

## When to Use CAS

CAS is recommended for:

- Organizations with an existing CAS infrastructure
- Centralized authentication across multiple internal applications
- University or institutional systems
- Scenarios where credentials must remain external to the application

---

<!-- ## Ticket Validation and Security

WaveMaker enforces CAS security entirely on the backend by:

- Validating service tickets with the CAS server
- Verifying ticket authenticity and expiry
- Preventing replay attacks
- Applying authorization server-side

Client-side manipulation is prevented through strict server validation.

--- -->

## Generated Backend Code

When CAS authentication is configured in WaveMaker, the platform automatically generates a **security service structure** responsible for authentication, authorization, and request interception. These files are platform-managed and should not be modified manually.

### Project Structure

```text
services/
└── securityService
    ├── designtime
    ├── src
    │   └── cas
    │       └── cas-client-config.xml
    └── servicedefs
```

### Design-Time Configuration (designtime)

The `designtime` folder stores security configuration created in WaveMaker Studio, including provider details, roles, secured URLs, and global security options.

### Runtime CAS Assets (src/cas)

**cas-client-config.xml**
Contains CAS client configuration such as server URLs, validation endpoints, and protocol settings used at runtime.

### Service Definitions (servicedefs)

Service definition files connect CAS configuration to the runtime engine, ensuring consistent enforcement of authentication and authorization across UI, services, and APIs.

---

## Application Configuration Properties

Whenever security is configured in WaveMaker, the platform automatically **generates configuration properties** that can be mapped to different environments such as Development, QA, or Production.  
You can view and manage these properties in the **Profiles**.  
For more information, refer to the **[Profiles](../../configurations/profiles.md)** section in the documentation.

For more details on environment-specific configurations, refer to the **[Deployment Profiles](../../configurations/profile-settings.md)** section.

<details>
<summary>Click to expand configuration properties</summary>

```properties
# Security Configuration (CAS)

security.activeProviders=CAS
security.enabled=true
security.providers.cas.serverUrl=https://mydomain.com:8080/cas
security.providers.cas.loginUrl=https://mydomain.com:8080/cas/login
security.providers.cas.logoutUrl=https://mydomain.com:8080/cas/logout
security.providers.cas.validationUrl=https://mydomain.com:8080/cas/serviceValidate
security.providers.cas.serviceParameter=service
security.providers.cas.ticketParameter=ticket
security.providers.cas.roleMappingEnabled=false
security.general.session.timeout=30
security.general.ssl.enabled=true
```

</details>

---

## Summary

CAS integration in WaveMaker enables centralized and secure authentication by leveraging a trusted CAS server. By delegating user login to CAS, WaveMaker applications gain single sign-on (SSO) capabilities, eliminate direct credential handling, and ensure consistent, server-side security enforcement.

With automatic backend configuration, robust service ticket validation, and seamless role-based authorization, CAS delivers a dependable authentication mechanism well-suited for enterprise and institutional environments.