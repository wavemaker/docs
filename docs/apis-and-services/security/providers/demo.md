---
last_update: { author: "Priyanka Bhadri" }
---

# Demo  

The **Demo Authentication Provider** in WaveMaker is a built-in, lightweight authentication mechanism intended only for development, demos, and POCs. It allows users to log in using predefined or dynamically created users without integrating with external identity systems such as LDAP, SAML, or OAuth.

This provider helps teams quickly enable security flows, role-based access control, and protected pages while focusing on application functionality rather than identity setup.

> ⚠️ **Not recommended for production use**

---

## What Is the Demo Provider?

- A WaveMaker-managed authentication provider
- No external identity store required
- Credentials are stored and validated internally
- Ideal for UI demos, testing RBAC, and early-stage development

---

## How Demo Authentication Works in WaveMaker

1. A user accesses a secured page or service.
2. WaveMaker presents the login screen.
3. User enters demo credentials.
4. WaveMaker validates the credentials internally.
5. A security session is created.
6. Assigned roles are applied and authorization rules enforced.

No redirection, tokens, or third-party communication is involved.

---

## When to Use the Demo Provider

Use the Demo provider when you need to:

- Quickly enable security in an application
- Demonstrate login and role-based access
- Test secured pages, services, and APIs
- Prototype application flows without real users

Avoid using it when:

- Building production or customer-facing apps
- Enterprise authentication is required
- Compliance or auditability matters

---

## Configuring Demo Authentication in WaveMaker

### Step 1: Enable Security

1. Open your application in **WaveMaker Studio**
2. Navigate to **Security**
3. Enable application security



### Step 2: Select Demo as Authentication Provider

1. Choose **Demo** as the authentication provider
2. Set it as the active provider
3. Save the configuration

WaveMaker automatically provisions demo users and roles.



### Step 3: Define Roles

Use the **Roles** section to define application roles such as:

- `ADMIN`
- `USER`


These roles can be assigned to demo users and used for RBAC.



### Step 4: Secure Pages and Services

- Protect pages using role-based access
- Secure APIs via URL interception rules
- Enforce authorization consistently across UI and backend

---

## Runtime Behavior

At runtime:

- Login is handled entirely by WaveMaker
- User sessions are maintained internally
- Roles are resolved from demo configuration
- Authorization is enforced server-side

This allows realistic security behavior without external dependencies.

---

## Generated Backend Code

When Demo authentication is enabled, WaveMaker generates a **security service structure** that handles authentication and authorization internally.

### Project Structure

```text
services/
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

## Design-Time Configuration

**`designtime`**

Contains all security configuration created via WaveMaker Studio, including:

- Authentication provider type (Demo)
- Role definitions
- URL interception rules
- Global security options

These files define **what is secured** and **how security is applied** across the application.



## Runtime Service Definitions

**`src/servicedefs`**

The service definition file connects design-time settings to runtime enforcement.

It enables:

- Request interception
- Internal credential validation
- Role resolution
- Authorization enforcement

This ensures consistent, server-side security behavior at runtime.

---

## Security Characteristics

- No external credential storage
- No token exchange
- No SSO or federation
- Fully server-side enforcement

Provides functional security behavior suitable for demos and testing scenarios.

---

## Application Configuration Properties

Whenever security is configured in WaveMaker, the platform automatically **generates configuration properties** that can be mapped to different environments such as Development, QA, or Production.  
You can view and manage these properties in the **Profiles**.  
For more information, refer to the **[Profiles](../../configurations/profiles.md)** section in the documentation.

For more details on environment-specific configurations, refer to the **[Deployment Profiles](../../configurations/profile-settings.md)** section.

<details>
<summary>Click to expand configuration properties</summary>

```properties
# Security Configuration (Demo)

security.activeProviders=DEMO
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

The Demo Authentication Provider offers a fast and simple way to enable security in WaveMaker applications without external dependencies. It is ideal for demos, prototyping, and early development, allowing teams to focus on application behavior while still validating authentication and authorization flows.

For production-ready applications, always migrate to a supported enterprise authentication provider.






