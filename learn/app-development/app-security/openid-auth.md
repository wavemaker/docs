---
title: "Configuring Open ID authentication using SSO"
id: "openid-auth"
sidebar_label: "Open ID Authentication"
---
In this document, we will be describing about the OpenID authentication using Identity providers.

---

OpenID Auth is a protocol that allows you to log into applications with the help of credentials, provided by an OpenID provider. Authenticated user IDs allow to use multiple applications without creating a separate account and password for each. Well-known OpenID providers are Google, Okta, AuthO and so on.

### Example

Twitter is a well-known social media application that uses OpenID authentication. You can select one of the identity providers like Google and Apple to log in.


## Why OpenID Authentication

OpenID Authentication comes with many advantages. Important reasons to choose OpenID authentication are:

### Easy maintainance of usernames and passwords

OpenID stops proliferation of username, passwords enabling reuse of identify from providers such as Google, Apple & Facebook. Developers also benefit from not needing store usernames and passwords.


### Lower Password security risks

Security risks can be encountered while maintaining same credentials for multiple applications. Applications that delegate identity verification to an OpenID provider, negate this risk. 

### Simple Sign-up process

With WaveMaker, developer delegates authentication to OpenID providers like Google, Facebook, Okta, Auth0 or any other OpenID standards. This allows application users to login with a single click, removing the efforts and time to feed the redundant information to use an application.

Here is more information on OpenID Authentication

## OpenID Authentication Workflow: 

1. **User** accesses the **Application**.
2. **Application** displays options to choose from available **identity providers**.
3. **User** gets directed to the **identity provider** to provide necessary details for authentication and authorization.
4. **Identity provider** verifies the user’s identity and validates the user details. 
5. **User** successfully logs into the application and the role is assigned to the user
6. Session gets established between **User** and **Application**.


[![](/learn/assets/OpenID_Architecture.png)](/learn/assets/OpenID_Architecture.png)

## Initial OpenID Configuration in WaveMaker

1. Go to **Project** > **Security**.

[![](/learn/assets/wm_openid_1_f.png)](/learn/assets/wm_openid_1_f.png)

2. Go to **Authentication & Authorization**.

[![](/learn/assets/wm_openid_2_f.png)](/learn/assets/wm_openid_2_f.png)

3. Enable **Authentication**.

[![](/learn/assets/wm_openid_3_f.png)](/learn/assets/wm_openid_3_f.png)

4. Go to **Security Providers** > **OpenID**.

[![](/learn/assets/wm_openid_4_f.png)](/learn/assets/wm_openid_4_f.png)

[![](/learn/assets/wm_openid_5_f.png)](/learn/assets/wm_openid_5_f.png)

5. Select **Provider ID** from the drop down menu.

[![](/learn/assets/wm_openid_6_f.png)](/learn/assets/wm_openid_6_f.png)

6. Choose the provider. For example Google or Custom (Okta, AuthO).

:::note
- For more information on using [Google as provider](/learn/how-tos/implement-openid-google-provider) 
- For more information on using [Okta as provider](/learn/how-tos/implement-openid-okta-provider)
::: 


## Retrieving user information after login

User details are retrieved after successful login. Next, the information is bind using WaveMaker.

1. Go to **Variables** > **Variables**.

[![](/learn/assets/wm_openid_Bind1.png)](/learn/assets/wm_openid_Bind1.png)

2. Click **New Variable**. It creates a variable to fetch the user information.

[![](/learn/assets/wm_openid_Bind2.png)](/learn/assets/wm_openid_Bind2.png)

3. Go to **Security Service**.

[![](/learn/assets/wm_openid_Bind3.png)](/learn/assets/wm_openid_Bind3.png)

4. Select **getLoggedInUser** method from the drop-down menu as this method retrieves the logged in user details.

[![](/learn/assets/wm_openid_Bind4.png)](/learn/assets/wm_openid_Bind4.png)

5. Select appropriate option as **Owner** from the drop-down menu where, **Page** restricts to the respective page and **Application** restricts to complete application. Click on **Done**.

[![](/learn/assets/wm_openid_Bind5.png)](/learn/assets/wm_openid_Bind5.png)

6. Enter variable name and enable  **Request data on page load**. Click **Save & Close**.

[![](/learn/assets/wm_openid_Bind6.png)](/learn/assets/wm_openid_Bind6.png)

7. Drag and drop the required widget.

[![](/learn/assets/wm_openid_Bind7.png)](/learn/assets/wm_openid_Bind7.png)

8. Click link icon under **Caption**.

[![](/learn/assets/wm_openid_Bind8.png)](/learn/assets/wm_openid_Bind8.png)

9. Go to dataset of required variable.

[![](/learn/assets/wm_openid_Bind9.png)](/learn/assets/wm_openid_Bind9.png)

10. Click on **Bind** to update the label with dataset argument values.

[![](/learn/assets/wm_openid_Bind10.png)](/learn/assets/wm_openid_Bind10.png)

[![](/learn/assets/wm_openid_Bind11.png)](/learn/assets/wm_openid_Bind11.png)

11. Click on **Preview** to view the applied changes.
[![](/learn/assets/wm_openid_Bind12.png)](/learn/assets/wm_openid_Bind12.png)

12. Enter necessary details to login. After successful login, user can access the application.
[![](/learn/assets/wm_openid_Bind13.png)](/learn/assets/wm_openid_Bind13.png)


## OpenID Authentication Security Configurations

OpenID Authentication security configurations facilitate communication between the application and Identity provider.

### Identity Provider Information

This section contains configuration details for identity provider. 

- **Provider ID:** Allows User to select the Identity Provider
- **Authorization URL:** This is the endpoint that initiates the authentication of the end user
- **Token Url:** This is the endpoint used to communicate Access token, ID token and refresh token
- **JWKS Url:** Json Web Key Set (JWKS) endpoint stores the information on public keys used to verify the Json Web tokens
- **User Info Endpoint:** User Info endpoint allows the client application to fetch the required claims about the authenticated end user
- **Logout Url:** This endpoint is used by the client application to erase provider-side session and related cookies

### Service Provider Information

This section contains configuration details for service provider. 

- **Redirect Url:** Redirect endpoint is the url to which the client receives the response

### Integration Information

This section contains configuration details for integration between service provider and identity provider. 

- **Client ID:** This acts as the unique identity for the registered client
- **Client Secrets:** It is a client specific information that is only known to application and the authorization server. This acts as application's password
- **Scopes:** Scope parameter is used to authorize access to user information
- **User Name Attribute:** This field allows to configure the attribute value that is associated with the user name that is fetched from the identity provider	

### Role Mapping

If your application has multuple roles, then the role for logged in users can come from the configured openID security provider or application Database.

**Search User Role**: Enable this option to select the user role provider. You are provided with two options- OpenID and Database.

**OpenId**: If you select **OpenId** then both authentication and authorization will be retrieved from the OpenId security provider. You need to provide:

- **Role Attribute**: This field allows you to assign the required role.

**Database**: If you select **Database** then authentication is performed using OpenId and authorization content is retrieved from the database. This allows you to use username and password credentials from OpenId while retrieving role content from a separate database. For role configuration using database [see here](/learn/app-development/app-security/authorization/#user-onboarding).



