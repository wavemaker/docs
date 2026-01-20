---
last_update: { author: "Priyanka Bhadri" }
---

#  Overview

WaveMaker supports multiple authentication providers that allow applications to verify user identity and enable secure access. These providers include federated, token-based, and single sign-on (SSO) mechanisms that cater to different integration needs and enterprise environments.

The following providers are commonly used:

- **OpenID Connect (OIDC)**
- **Central Authentication Service (CAS)**
- **Security Assertion Markup Language (SAML)**
- **Token-based Authentication (JWS / Opaque)**
- **LDAP** – Authenticate users via Lightweight Directory Access Protocol.  
- **Active Directory (AD)** – Authenticate and optionally map roles from Microsoft Active Directory.  
- **Demo** – Built-in provider for development and testing purposes.  


These authentication methods help WaveMaker applications integrate with identity solutions, simplify login flows, and support modern security practices such as single sign-on and token validation.


---


## OpenID Connect (OIDC)

OpenID Connect (OIDC) is an identity layer built on the OAuth 2.0 protocol. It enables users to authenticate using existing accounts from identity providers such as Google, Okta, Auth0, or any OIDC-compliant service. With OpenID Connect, WaveMaker applications can delegate user authentication to external providers, reducing the need to manage credentials directly.

### How OpenID Works

1. A user selects an identity provider and attempts to log in.  
2. The application redirects the user to the provider’s login page.  
3. After successful authentication, the provider issues tokens, such as an ID token and possibly an access token.  
4. The application validates the token and establishes a session.  
5. User identity and roles are mapped for authorization decisions.

### Benefits

- Reuses existing identity accounts (e.g., Google, Facebook)  
- Reduces password management and security risk  
- Simplifies user login experience with single sign-on (SSO)

To learn more about configuring OpenID Connect in WaveMaker, including provider setup, token handling, attribute mapping, and environment-specific configurations, refer to the **[OpenID Connect Authentication](openid-authentication.mdx)** section in the WaveMaker Security documentation.


---

## Central Authentication Service (CAS)

CAS is an open, widely used single sign-on (SSO) protocol that enables users to authenticate once and gain access to multiple applications without re-entering credentials. WaveMaker can authenticate users by communicating with a CAS server.

### How CAS Works

1. A user attempts to access the application.  
2. The application redirects the user to the CAS server for login.  
3. CAS authenticates the user and issues a service ticket.  
4. The application validates the ticket with CAS.  
5. Upon success, the user is granted access and roles are mapped for authorization.

### Benefits

- Supports single sign-on across multiple applications  
- Centralizes credential verification  
- Reduces repeated logins in enterprise environments

To learn more about configuring CAS Connect in WaveMaker, including provider setup, token handling, attribute mapping, and environment-specific configurations, refer to the **[CAS Authentication](cas.md)** section in the WaveMaker Security documentation.

---

## Security Assertion Markup Language (SAML)

SAML is an XML-based standard for exchanging authentication and authorization data between identity providers (IdPs) and service providers (SPs). WaveMaker integrates with SAML-compliant identity providers for SSO.

### How SAML Works

1. A user attempts to access the service provider (WaveMaker application).  
2. The service provider redirects the user to the identity provider (IdP).  
3. The IdP authenticates the user and generates a SAML assertion.  
4. The assertion is sent back to the service provider.  
5. The service provider verifies the assertion and establishes a session for the user.

### Key Features

- Standardized authentication for enterprise SSO  
- Centralized identity management by the IdP  
- Supports both login and single logout (SLO)

To learn more about configuring SAML Connect in WaveMaker, including provider setup, token handling, attribute mapping, and environment-specific configurations, refer to the **[SAML Authentication](saml-integration.mdx)** section in the WaveMaker Security documentation.

---


## LDAP (Lightweight Directory Access Protocol)

LDAP is a widely used protocol for accessing and maintaining distributed directory information services. In WaveMaker, selecting LDAP as the security provider allows the application to authenticate users against an LDAP directory.

### How LDAP Works

1. Configure the LDAP server URL and connection details in the security provider settings.  
2. Define user search patterns to locate user entries in the directory.  
3. During authentication, WaveMaker binds to the LDAP server and validates the user’s credentials.  
4. On successful authentication, optional role information can be fetched from LDAP groups or from a database. 

### Role Mapping with LDAP

- Role data can be retrieved directly from the LDAP provider by specifying group search attributes.  
- Alternatively, LDAP can be used for authentication while a database is used to look up application roles.  
This provides flexibility when role information is managed separately from user credentials.

To learn more about configuring OpenID Connect in WaveMaker, including provider setup, token handling, attribute mapping, and environment-specific configurations, refer to the **[LDAP Authentication](active-directory.md)** section in the WaveMaker Security documentation.

---

## Active Directory

Active Directory (AD) is Microsoft’s directory service and is compatible with LDAP. In WaveMaker, Active Directory can be selected as a security provider to authenticate and authorize users using AD domain credentials.

### How Active Directory Works

1. Provide the AD server URL and optional domain information.  
2. Specify user search patterns for locating user accounts.  
3. WaveMaker authenticates users against the AD server using provided credentials.  
4. Role mapping can come either from Active Directory group attributes or from a database. 

### Role Mapping with Active Directory

- If AD is configured as both the authentication and role provider, group attributes from AD are used to resolve roles.  
- If only authentication is done via AD, roles can be retrieved from a database using the authenticated username.  
This hybrid approach allows central credential management with customized role control. 

To learn more about configuring OpenID Connect in WaveMaker, including provider setup, token handling, attribute mapping, and environment-specific configurations, refer to the **[LDAP Authentication](active-directory.md)** section in the WaveMaker Security documentation.

---

## Demo Security Provider

The **Demo** provider is a simple built‑in authentication mechanism designed for development and testing purposes. It is enabled by default when application security is first configured. 

### Key Characteristics

- Provides predefined test users such as `admin` and `user` with matching passwords.  
- Does not require an external user store.  
- Useful for quickly testing authentication and security configuration during design time.  
- Not recommended for production use. 

Developers can add or remove users and assign them roles directly within the Demo provider configuration, making it convenient for early development and prototyping. 

To learn more about configuring demo Connect in WaveMaker, including provider setup, token handling, attribute mapping, and environment-specific configurations, refer to the **[Demo Authentication](demo.md)** section in the WaveMaker Security documentation.

---

## Token‑Based Providers (JWS and Opaque)

WaveMaker supports **token‑based authentication** through JWS and Opaque token providers as *secondary* authentication mechanisms. These are typically used when consuming secure APIs or integrating with external identity systems that issue tokens. 

### JWS (JSON Web Signature)

JWS tokens (a form of JWT) contain signed user information that can be trusted without contacting the issuer at runtime. In WaveMaker:

- JWS tokens are validated using issuer metadata or public key configuration.  
- Claims in the token (such as user identifier and roles) are used to resolve identity and authorization context.  
- Multiple JWS providers can be configured (e.g., Google, Okta), each with its own settings.

### Opaque Token

Opaque tokens do not expose user data within the token itself. Instead:

- They must be validated using an introspection endpoint provided by the token issuer.  
- Once validated, the token can be used to determine user identity and optionally map roles.  
- Opaque tokens are suitable for access tokens in OAuth‑style authentication flows.

### How Token Authentication Works

1. The identity provider issues a token (JWS or opaque) after user authentication.  
2. The client includes this token in authorization headers (typically Bearer).  
3. WaveMaker validates the token (locally for JWS, introspection for opaque).  
4. On successful validation, user identity and roles are retrieved for authorization.  
This enables secure API access and federation with external services. 

To learn more about configuring Token-Based Authentication(JWS / OPAQUE) Connect in WaveMaker, including provider setup, token handling, attribute mapping, and environment-specific configurations, refer to the **[Token-Based Authentication(JWS / OPAQUE)](token-based-authentication.mdx)** section in the WaveMaker Security documentation.

---

## Custom Security

Custom Security in WaveMaker allows developers to implement **bespoke authentication logic** when built-in providers such as OpenID Connect, SAML, or LDAP do not meet specific requirements. It provides full control over how users are authenticated and how identity and roles are resolved.

<!-- With Custom Security, authentication can be implemented against **any external system**, such as legacy identity services, proprietary APIs, databases, or custom token-based mechanisms, while still leveraging WaveMaker’s server-side authorization and security enforcement. -->



### How Custom Security Works

1. A user attempts to log in to the application.
2. WaveMaker routes the authentication request to a **custom authentication manager** implemented by the developer.
3. The custom logic validates user credentials or tokens using an external system.
4. Upon successful validation, user identity information is constructed programmatically.
5. User roles are resolved and assigned.
6. WaveMaker establishes a secure session and applies authorization rules.



### Benefits

- Supports authentication against **any custom or legacy system**
- Enables advanced or non-standard authentication flows
- Provides full control over user identity and role resolution
- Integrates seamlessly with WaveMaker’s authorization model
- Maintains upgrade safety by isolating custom logic

---

To learn more about implementing Custom Security in WaveMaker, including creating a custom authentication manager, handling credentials, resolving roles, and securing APIs, refer to the **[Custom Authentication](custom.md)** section in the WaveMaker Security documentation.




<!-- ## Token-Based Authentication (JWS / Opaque)

Token-based authentication uses cryptographically signed tokens to validate a user’s identity without traditional session-based authentication. WaveMaker supports JSON Web Signature (JWS) and opaque token providers.

### JWS (JSON Web Signature)

- Contains signed user information in a token (JWT)  
- Application validates the token using a public key or metadata  
- Used commonly with OpenID Connect identity tokens

### Opaque Token

- Token cannot be decoded client-side; validated via introspection endpoint  
- Suitable for access tokens issued by an external identity provider  
- Roles and permissions can be mapped from token claims

### How Token Authentication Works

1. A token is issued by an identity provider after successful authentication.  
2. The client includes the token in API requests (e.g., Bearer token).  
3. WaveMaker validates the token (locally for JWS, via introspection for opaque).  
4. Upon validation, user identity and roles are resolved for authorization.

--- -->

## Summary

WaveMaker supports a range of authentication providers to meet diverse integration needs:

- **OpenID Connect** – Delegated identity using OAuth 2.0 / OIDC providers  
- **CAS** – Centralized single sign-on for enterprise applications  
- **SAML** – Standardized SSO between identity and service providers  
- **Token-based (JWS / Opaque)** – Token validation for API and federated access
- **LDAP** and **Active Directory** – Authenticate users against centralized directory services.  
- **Demo Provider** – Development‑friendly provider for testing and prototyping.  
- **JWS** – Token validation for JWT‑based identity tokens.  
- **Opaque Token** – Token introspection for opaque access tokens.
- **Custom Security** - plug in own authentication logic using Java

These providers enable applications to integrate with existing identity systems, support SSO, and validate user credentials and tokens securely, allowing flexible and scalable authentication configurations.
