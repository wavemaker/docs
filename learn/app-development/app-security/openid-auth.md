---
title: "Configuring Open ID authentication providers - Google, Okta, Auth0"
id: "openid-auth"
sidebar_label: "Open ID Authentication"
---

In this document, we will be describing about how to use Open ID authentication in WaveMaker application.

---

Using Open ID, WaveMaker applications can let their customers login using their already existing identity such as Google Account, Okta, or AuthO. It is also possible to implement SSO by setting up multiple applications use the same Open ID provider. Some well-known Open ID providers include Google, Okta, and AuthO. For example, Twitter uses Open ID authentication where you can select Identity Provider like Google to login.

## How Open ID Authentication Helps

Open ID Authentication helps verify the user identity with the Identity Providers. Following are some points how it helps:

- **Easy maintainance of usernames and passwords**: Open ID stops proliferation of username, passwords enabling reuse of identify from providers such as Google, Apple & Facebook. Developers also benefit from not needing store usernames and passwords.

- **Lower Password security risks**: Open ID providers do not share passwords with any website and protect online identity.

- **Simple Sign-up process**: With WaveMaker, developer delegates authentication to Open ID providers like Google, Facebook, Okta, Auth0 or any other Open ID standards. You login with a single click, avoiding the efforts and time to feed the redundant information to use an application.

Here is more information on Open ID Authentication

## Open ID Authentication Workflow 

1. **User** accesses the **Application**.
2. **Application** displays options to choose from available **Identity Providers**.
3. **User** gets directed to the **Identity Provider** to provide necessary details for authentication and authorization.
4. **Identity Provider** verifies the user’s identity and validates the user details. 
5. **User** successfully logs into the application and the role is assigned to the user
6. Session gets established between **User** and **Application**.

[![Open ID architecture](/learn/assets/OpenID_Architecture.png)](/learn/assets/OpenID_Architecture.png)

## Configuring Open ID

1. Go to **Project** > **Security**.
[![Open ID security](/learn/assets/wm_openid_f_1.png)](/learn/assets/wm_openid_f_1.png)

2. Go to **Authentication & Authorization**.

3. Enable **Authentication**.

4. Go to **Security Providers** > **Open ID**.

5. Select **Provider ID** from the drop-down menu. For example Google or Custom (Okta, AuthO).

[![Open ID configuration](/learn/assets/wm_openid_f_2.png)](/learn/assets/wm_openid_f_2.png)

Once the Open ID provider is selected, you can configure the security specifications based on the provider.

:::note

- For more information, see [Google as provider](/learn/how-tos/implement-openid-google-provider) 
- For more information, see [Okta as provider](/learn/how-tos/implement-openid-okta-provider)

::: 

## Properties

Below are the Open ID Authentication security specifications used to configure the application with the Open ID Identity Provider.

[![Open ID properties](/learn/assets/wm_openid_f_3.png)](/learn/assets/wm_openid_f_3.png)

### Identity Provider Information

This section contains configuration properties for Identity Provider.

- **Provider ID:** Allows User to select the Identity Provider
- **Authorization URL:** Endpoint that initiates the authentication of the end user
- **Token URL:** Endpoint used to communicate Access token, ID token and refresh token
- **JWKS URL:** Json Web Key Set (JWKS) endpoint stores the information on public keys used to verify the Json Web tokens
- **User Info Endpoint:** User Info endpoint allows the client application to fetch the required claims about the authenticated end user
- **Logout URL:** Endpoint used by the client application to erase provider-side session and related cookies

### Service Provider Information

This section contains configuration properties for service provider. 

- **Redirect URL:** Redirect endpoint is the URL to which the client receives the response

### Integration Information

This section contains configuration properties for integration between Service Provider and Identity Provider. 

- **Client ID:** Unique identity for the registered client
- **Client Secret:** Client specific information that is only known to application and the authorization server. This is application's password
- **Scopes:** Scope parameter is used to authorize access to user information
- **User Name Attribute:** Allows to configure the attribute value associated with user name fetched from Identity Provider

### Role Mapping

Role Mapping is used to assign you with security roles during login. You are given access and assignements based on the assigned role.

**Search User Role**: Enable this option to select the user role provider. You are provided with two options:

1. Open ID
2. Database

**Open ID**: When you select **Open ID**, both authentication and authorization will be retrieved from the Open ID security provider. You need to provide:

- **Role Attribute**: This field allows you to assign the required role.

**Database**: When you select **Database**, authentication is performed using Open ID and authorization content is retrieved from the database. This allows you to use username and password credentials from Open ID while retrieving role content from the database. For role configuration using database, [see here](https://docs.wavemaker.com/learn/app-development/app-security/authorization/#useronboarding).
