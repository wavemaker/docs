---
title: "Configuring Open ID authentication using SSO"
id: "openid-auth"
sidebar_label: "Open ID Authentication"
---

In this document, we will be describing about the OpenID authentication using Identity providers.

---

Open ID is an authentication protocol that allows you to log into applications using SSO (Single Sign-On). SSO allows you to use multiple applications securely without creating a separate account and password for the application. Some well-known Open ID providers include Google, Okta, and AuthO. For example, Twitter uses Open ID authentication where you can select identity provider like Google to log in.

## How Open ID Authentication Helps

Open ID Authentication helps verify the user identity with the identity providers. Following are some points how it helps:

- **Easy maintainance of usernames and passwords**: Open ID stops proliferation of username, passwords enabling reuse of identify from providers such as Google, Apple & Facebook. Developers also benefit from not needing store usernames and passwords.

- **Lower Password security risks**: Open ID providers do not share passwords with any website and protect online identity. You can easily change Open ID password in case of any security compromise. 

- **Simple Sign-up process**: With WaveMaker, developer delegates authentication to Open ID providers like Google, Facebook, Okta, Auth0 or any other Open ID standards. You login with a single click, avoiding the efforts and time to feed the redundant information to use an application.

Here is more information on Open ID Authentication

## Open ID Authentication Workflow: 

1. **User** accesses the **Application**.
2. **Application** displays options to choose from available **identity providers**.
3. **User** gets directed to the **identity provider** to provide necessary details for authentication and authorization.
4. **Identity provider** verifies the user’s identity and validates the user details. 
5. **User** successfully logs into the application and the role is assigned to the user
6. Session gets established between **User** and **Application**.

[![Open ID architecture](/learn/assets/OpenID_Architecture.png)](/learn/assets/OpenID_Architecture.png)

## Configuring Open ID

1. Go to **Project** > **Security**.
[![Open ID security](/learn/assets/wm_openid_f_1.png)](/learn/assets/wm_openid_f_1.png)

2. Go to **Authentication & Authorization**.

3. Enable **Authentication**.

4. Go to **Security Providers** > **Open ID**.

5. Select **Provider ID** from the drop down menu.

6. Choose the provider. For example Google or Custom (Okta, AuthO).

[![Open ID configuration](/learn/assets/wm_openid_f_2.png)](/learn/assets/wm_openid_f_2.png)

:::note

- For more information on using [Google as provider](/learn/how-tos/implement-openid-google-provider) 
- For more information on using [Okta as provider](/learn/how-tos/implement-openid-okta-provider)

::: 

## Open ID Properties

Open ID Authentication security configurations allow communication between the application and Identity provider.

[![Open ID properties](/learn/assets/wm_openid_f_3.png)](/learn/assets/wm_openid_f_3.png)

### Identity Provider Information

This section contains configuration details for identity provider.

- **Provider ID:** Allows User to select the Identity Provider
- **Authorization URL:** Endpoint that initiates the authentication of the end user
- **Token Url:** Endpoint used to communicate Access token, ID token and refresh token
- **JWKS Url:** Json Web Key Set (JWKS) endpoint stores the information on public keys used to verify the Json Web tokens
- **User Info Endpoint:** User Info endpoint allows the client application to fetch the required claims about the authenticated end user
- **Logout Url:** Endpoint used by the client application to erase provider-side session and related cookies

### Service Provider Information

This section contains configuration details for service provider. 

- **Redirect Url:** Redirect endpoint is the url to which the client receives the response

### Integration Information

This section contains configuration details for integration between service provider and identity provider. 

- **Client ID:** Unique identity for the registered client
- **Client Secrets:** Client specific information that is only known to application and the authorization server. This is application's password
- **Scopes:** Scope parameter is used to authorize access to user information
- **User Name Attribute:** Allows to configure the attribute value associated with user name fetched from identity provider

### Role Mapping

Role Mapping for logged in users can come from the configured Open ID security provider or an imported Database.

**Search User Role**: Enable this option to select the user role provider. You are provided with two options- Open ID and Database.

**Open Id**: If you select **Open Id** then both authentication and authorization will be retrieved from the Open Id security provider. You need to provide:

- **Role Attribute**: This field allows you to assign the required role.

**Database**: If you select **Database** then authentication is performed using Open Id and authorization content is retrieved from the database. This allows you to use username and password credentials from Open ID while retrieving role content from a separate database. For role configuration using database [see here](https://docs.wavemaker.com/learn/app-development/app-security/authorization/#useronboarding).