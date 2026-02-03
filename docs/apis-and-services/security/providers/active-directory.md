---
last_update: { author: "Priyanka Bhadri" }
---

# Active Directory (LDAP)

Lightweight Directory Access Protocol (LDAP) is a widely used directory service protocol that enables centralized authentication and authorization against enterprise directory systems such as **Active Directory**, **OpenLDAP**, and other LDAP-compliant servers.

WaveMaker supports LDAP-based authentication, allowing applications to authenticate users directly against an external directory without storing credentials within the application. This enables centralized identity control, consistent access policies, and seamless enterprise integration.

In a WaveMaker application:
- WaveMaker acts as the **Service Provider**
- An external **LDAP Directory** acts as the authentication source

---

## How LDAP Authentication Works in WaveMaker

1. A user attempts to access a secured WaveMaker application or resource.
2. WaveMaker intercepts the request and prompts for credentials.
3. The provided username and password are sent to the configured LDAP server.
4. The LDAP server authenticates the user via a bind operation.
5. Upon successful authentication:
   - User details are resolved
   - Groups or roles are fetched (if configured)
6. A secure session is established in WaveMaker.
7. Authorization rules are applied based on resolved roles.

 LDAP authentication happens **directly and synchronously** without redirects or token exchanges.

---

## LDAP Integration Architecture

- **WaveMaker Application**  
  Acts as the authentication client and authorization enforcer.

- **LDAP Server**  
  Validates user credentials and provides directory attributes.

- **LDAP Bind Operation**  
  Confirms user identity using directory credentials.

- **Group / Role Resolution**  
  Determines user permissions based on directory group membership or mapped roles.

All authentication and authorization decisions are enforced **server-side**.

---

## Supported LDAP Providers

WaveMaker LDAP integration works with any LDAP v3-compliant directory, including:

- Microsoft Active Directory
- OpenLDAP
- Apache Directory Server
- IBM Tivoli Directory Server
- Custom enterprise LDAP implementations

---

## Configuring LDAP Authentication in WaveMaker

- LDAP authentication enables applications to authenticate users using a centralized directory service such as Active Directory or other LDAP-compliant directory servers.

- Security must be enabled in the application to ensure that protected pages, services, and APIs are accessible only to authenticated users.

- The **LDAP** option can be configured as the authentication provider by assigning a unique provider name and optionally setting it as the primary authentication mechanism.

- LDAP server configuration requires defining connection and search parameters used to locate and authenticate users:

  - **LDAP URL**
    - Specifies the LDAP server connection endpoint.
    - Example: `ldap://ldap.company.com:389`

  - **Base DN**
    - Defines the root location for user and group searches.
    - Example: `dc=company,dc=com`

  - **User DN Pattern**
    - Specifies the template used to bind users during authentication.
    - Example: `uid={0},ou=users`

  - **Manager DN (optional)**
    - Service account used to search users and groups within LDAP.
    - Example: `cn=admin,dc=company,dc=com`

  - **Manager Password**
    - Password associated with the Manager DN used for LDAP queries.

  - **Group Search Base (optional)**
    - Defines the location used to resolve group membership and role associations.

- Attribute mapping allows WaveMaker to map LDAP attributes to application-level user identities:
  - Username or User ID
  - Display Name
  - Email (optional)
  - Roles or Groups (optional)

- Role resolution can be handled in multiple ways:
  - Roles can be derived directly from LDAP group memberships.
  - Roles can be mapped using role prefixes such as `ROLE_`.
  - Roles can be resolved through database lookup after successful authentication.

- After successful authentication, WaveMaker enforces authorization rules across the application:
  - Access to pages, services, and APIs is controlled based on assigned roles.
  - Access rules are enforced consistently across UI and backend components.
  - Unauthorized users are prevented from accessing restricted resources.

---




## Runtime Behavior

At runtime:

- Credentials are validated directly against the LDAP server
- No tokens, assertions, or redirects are involved
- Sessions are managed by WaveMaker
- Authorization is applied uniformly across UI, services, and APIs

This ensures low-latency authentication with strong server-side enforcement.

---

## When to Use LDAP

- LDAP authentication is recommended for:
- Enterprise environments with centralized directories
- Applications requiring direct authentication against Active Directory
- Internal systems with controlled network access
- Scenarios where credentials must not be stored in the application

---

## Generated Backend Code


When LDAP authentication is configured, WaveMaker automatically generates and wires the backend security implementation using **Spring Security LDAP**.

### Project Structure


```text
services/
└── securityService
    ├── designtime
    ├── src
    └── servicedefs
```


### Design-Time Configuration (`designtime`)

The `designtime` folder stores LDAP configuration defined in WaveMaker Studio, including:

- Authentication provider details
- LDAP connection parameters
- Role and group mappings
- Secured URL configurations
- Global security options

These settings are environment-agnostic and drive runtime behavior.



### Runtime LDAP Wiring (Internal)

At build and runtime, WaveMaker internally configures:

- `LdapAuthenticationProvider`
- `BindAuthenticator`
- `LdapAuthoritiesPopulator`

These components:
- Perform LDAP bind authentication
- Resolve user authorities (roles)
- Integrate with WaveMaker’s security context

This wiring is **automatic, server-side, and not exposed as editable source code**.



### Service Definitions (`servicedefs`)

Service definition files link LDAP authentication to the application’s runtime security flow, ensuring consistent enforcement across all layers.

---
<!-- 
## Runtime Behavior

* WaveMaker binds to AD to validate credentials.
* Searches for the user in the directory and retrieves attributes for session management.
* Optionally maps AD groups to WaveMaker roles for **role-based access control (RBAC)**.
* Security context is applied across all secured pages, services, and APIs.

--- -->



## Application Configuration Properties

Whenever security is configured in WaveMaker, the platform automatically **generates configuration properties** that can be mapped to different environments such as Development, QA, or Production.  
You can view and manage these properties in the **Profiles**.  
For more information, refer to the **[Profiles](../../configurations/profiles.md)** section in the documentation.

For more details on environment-specific configurations, refer to the **[ Profiles](../../configurations/profile-settings.md)** section.

<details>
<summary>Click to expand configuration properties</summary>

```properties
# Security Configuration (LDAP)

# General Security Settings
security.activeProviders=SAML
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

# LDAP Provider Configuration
security.providers.ldap.url=ldap://ad.mydomain.com:389
security.providers.ldap.domain=mydomain.com
security.providers.ldap.rootDn=dc=mydomain,dc=com
security.providers.ldap.userSearchPattern=(sAMAccountName={0})
security.providers.ldap.roleMappingEnabled=true

# Session Configuration
security.session.persistence.type=in-memory


```
</details>



---


## Summary

Active Directory integration in WaveMaker provides enterprise-grade authentication using existing AD credentials.
By connecting via **LDAP**, WaveMaker securely validates users, optionally resolves roles, and enforces authorization across the application.
