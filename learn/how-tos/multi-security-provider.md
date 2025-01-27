---
title: "Multiple Security Provider Configuration"
id: "multi-security-provider"
sidebar_label: "Configuring Multi-Security Providers"
---

With WaveMaker 11.10, Multiple security providers can be enabled to improve user experience and application security. This document includes how WaveMaker supports Multi-Security, including the various security providers available, and their configurations.

## Available Security Providers

WaveMaker offers a variety of security providers that can be configured within your applications. Based on their login flow, these providers are grouped into three categories: Form-based login, SSO-based login, and Pre-Authenticated login.

| **Provider Type** | **Login Flow** |
| ------ | ----- |
| Demo | Form-based |
| Database | Form-based |
| LDAP | Form-based |
| Active Directory | Form-based |
| Custom | Form-based |
| OpenID | SSO-based |
| SAML | SSO-based |
| CAS | SSO-based |
| JWS | Pre-Authenticated |
| Opaque Token | Pre-Authenticated |

- **Form-based Login**: A form-based login flow relies on a username and password login form for authentication. 
- **SSO-based Login**: In contrast, an SSO-based login flow redirects users to the login page of the respective SSO provider for authentication.
- **Pre-Authenticated login**: Pre-authenticated login is a token-based authentication flow in which a request is authenticated based on the token it contains.

An application can be configured with multiple security providers in any combination, such as Demo, Database, SAML, or any other mix based on requirements.

Additionally, multiple instances of OpenID and JWS can be set up within a single application. For example, an app can support both "Sign in with Google" and "Sign in with LinkedIn," each using OpenID-based authentication..

## Adding Multiple Security Providers

In WaveMaker 11.10, configuring multiple security providers has been made simpler. 

1. Navigate to the **Security** Tab and enable Authentication & Authorization
2. Click **plus (+)** icon in the Security Providers section. By clicking this icon, you can configure as many security providers as needed for your application.
3. Click Save to add the security provider to the list.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/2YiBJGXva3d7pfxCvxCWWU" title="multi-security"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>


## Configuring Multi-Security Providers

When multiple security providers are configured, users are directed to the default login page (/Login), which initially supports only username-password authentication. For now, the login page must be manually modified in WaveMaker Studio to accommodate multiple security providers.

- If no form-based security providers are used, the login form can be removed.
- For SSO providers, their respective login flows must be added to the page.

### Navigating between Security Providers

Login can be initiated for an SSO provider by invoking the url `services/security/ssologin?providerId=<providerId>`. For example, if an application is configured with OpenID linkedIn ,OpenID Google and SAML, you can add three buttons on the login page. 

1. Create buttons for OpenID linkedIn ,OpenID Google, and SAML.
2. Add **OnClick** event for each button that redirects the user to the respective SSO login page using JavaScript. Use the below code in the Script tab.

```JavaScript

Page.button2Click = function ($event, widget) {
    window.location.href = "services/security/ssologin?providerId=OPENID.linkedIn"
};

Page.button2Click = function ($event, widget) {
    window.location.href = "services/security/ssologin?providerId=OPENID.google"
};

Page.button2Click = function ($event, widget) {
    window.location.href = "services/security/ssologin?providerId=SAML"
};

```

![Multi-Security Provider Buttons](/learn/assets/multi-security-buttons.png)

## User Credential Validation Order with Multiple form based Providers

When multiple form-based providers such as Database, Demo, Active Directory, Custom, and LDAP are configured, they share the same login form on the Login page. When a login request API is triggered from the form, the authentication request is processed sequentially through each configured form-based provider in the following order until one successfully authenticates the user credentials.

1. Demo
2. Database
3. LDAP
4. Active Directory
5. Custom

For example, if an application is configured with Demo, Database, and Active Directory.
- When entering Database credentials in the login form, the credentials are validated in the order: Demo and Database.
- And if you are entering Active directory credentials in the login form, then the credentials are validated in the order: Demo, Database, and Active Directory.
