---
title: "Configuring Open ID authentication using SSO"
id: "openid-auth"
sidebar_label: "Open ID Authentication"
---
In this document, we will be describing about the Open ID authentication using Identity providers.

---

OpenID Auth is a type of authentication protocol to log into the application. Users can use the login credentials provided by an OpenID provider to establish a session with another application. OpenID providers are the third-party authentication servers that provide the authenticated ID to users, allowing them to use multiple applications without creating a separate account and password for each. List of a few OpenID providers is provided below:

* Google
* Okta

## Stateless Authentication Session establishment using OpenID

### Stateless Authentication

Stateless authentication, also known as Token-based authentication, includes tokens to authenticate a user request to access any service and/or fetch a resource. This token contains user and client information that is used to identify user. 


1. User initiates the process by accessing an application.	
2. Application provides User with options to choose the desired identity provider via authentication request as soon as the User tries to login to the application.
3. User gets directed to the identity provider to provide necessary details for authentication and authorization purposes.
4. Identity provider successfully verifies the user’s identity and returns the required user details.
5. User successfully logs into the application and the role is assigned to the user
6. Session gets established between user and application.


[![](/learn/assets/OpenID_Architecture.png)](/learn/assets/OpenID_Architecture.png)


### Example

Twitter is a well-known social media application. This application also uses OpenID authentication. As soon as the user tries to login, user is provided with few identity providers like Google and Apple. User can then choose a desired identity provider to log into Twitter.


## Why OpenID Authentication?

OpenID Authentication comes with many advantages. Some important reasons to choose OpenID authentication are:

### Minimum efforts to maintain usernames and passwords:

Users do not have to invest much of their efforts in keeping track of multiple usernames and passwords. Developers also find it beneficial as they are not required to design additional logic to store and maintain the usernames and passwords, specific to any application.


### Lower Password security risks

Users tend to have same passwords and usernames for many applications. This may pose a huge security risk. Applications that delegate identity verification to an OpenID provider, negate this risk. 

### Simple Sign-up process

WaveMaker developer is provided with ability to delegate authentication to OpenID providers like Google, Facebook, Okta, Auth0 or any other OpenID standards based provider. This allows application users to login with a single click. This removes the efforts and time that user spends to feed the redundant information to use an application.


## Steps to start OpenID Configuration

1. Select a project, click on the security option.
[![](/learn/assets/wm_openid_1_f.png)](/learn/assets/wm_openid_1_f.png)

2. Go to Authentication & Authorization option.
[![](/learn/assets/wm_openid_2_f.png)](/learn/assets/wm_openid_2_f.png)

3. Switch on the Authentication option.
[![](/learn/assets/wm_openid_3_f.png)](/learn/assets/wm_openid_3_f.png)

4. Under Security Providers, select the OpenID option from the drop-down menu of Security Provider.
[![](/learn/assets/wm_openid_4_f.png)](/learn/assets/wm_openid_4_f.png)
[![](/learn/assets/wm_openid_5_f.png)](/learn/assets/wm_openid_5_f.png)

5. Select the provider ID from the drop down menu of Provider ID option.
[![](/learn/assets/wm_openid_6_f.png)](/learn/assets/wm_openid_6_f.png)

6. Choose the provider. For example Google, Okta and more.

:::note
* For more information on using [Google as provider](/learn/how-tos/implement-openid-google-provider) 
* For more information on using [Okta as provider](/learn/how-tos/implement-openid-okta-provider) 
 and Okta link.
::: 


## Retrieve and Bind user information

Below are the steps that are to be followed to retrieve and bind the user information using WaveMaker, after the user successfully logs into the application.

1. Go to Variables and select Variables from the drop-down menu.
[![](/learn/assets/wm_openid_Bind1.png)](/learn/assets/wm_openid_Bind1.png)
2. Click on New Variable to create a variable to fetch the user information.
[![](/learn/assets/wm_openid_Bind2.png)](/learn/assets/wm_openid_Bind2.png)
3. Go to Security Service option.
[![](/learn/assets/wm_openid_Bind3.png)](/learn/assets/wm_openid_Bind3.png)
4. Select getLoggedInUser as method from the drop-down menu as this method retrieves the details of the users who have logged in.
[![](/learn/assets/wm_openid_Bind4.png)](/learn/assets/wm_openid_Bind4.png)
5. Select appropriate option as Owner from the drop-down menu where, Page restricts to the respective page and Application restricts to the complete application. Click on Done.
[![](/learn/assets/wm_openid_Bind5.png)](/learn/assets/wm_openid_Bind5.png)
6. Enter the name of the variable and check Request data on page load option. Click on Save & Close option to successfully create the variable.
[![](/learn/assets/wm_openid_Bind6.png)](/learn/assets/wm_openid_Bind6.png)
7. Drag and drop the required widget onto the screen.
[![](/learn/assets/wm_openid_Bind7.png)](/learn/assets/wm_openid_Bind7.png)
8. Click on the link icon under Caption option.
[![](/learn/assets/wm_openid_Bind8.png)](/learn/assets/wm_openid_Bind8.png)
9. Go to the dataset of the required variable.
[![](/learn/assets/wm_openid_Bind9.png)](/learn/assets/wm_openid_Bind9.png)
10. Click on Bind to update the label with the values associated with the dataset arguments.
[![](/learn/assets/wm_openid_Bind10.png)](/learn/assets/wm_openid_Bind10.png)
[![](/learn/assets/wm_openid_Bind11.png)](/learn/assets/wm_openid_Bind11.png)
11. To view the applied changes to the application, click on Preview button.
[![](/learn/assets/wm_openid_Bind12.png)](/learn/assets/wm_openid_Bind12.png)
12. Enter the required details to login. After successful login, user can access the application.
[![](/learn/assets/wm_openid_Bind13.png)](/learn/assets/wm_openid_Bind13.png)


## OpenID Authentication Security Configurations

OpenID Authentication security configurations facilitate communication between the application and Identity provider.

### Identity Provider Information
This section contains configuration details for identity provider. 

| Field | Description |
| ---- | -----------|
| Provider ID | Allows User to select the Identity Provider |
| Authorization URL | This is the endpoint that initiates the authentication of the end user |
| Token Url | This is the endpoint used to communicate Access token, ID token and refresh token |
| JWKS Url | Json Web Key Set (JWKS) endpoint stores the information on public keys used to verify the Json Web tokens |
| User Info Endpoint | User Info endpoint allows the client application to fetch the required claims about the authenticated end user |
| Logout Url | This endpoint is used by the client application to erase provider-side session and related cookies |


### Service Provider Information
This section contains configuration details for service provider. 

| Field | Description |
| ---- | -----------|
| Redirect Url | Redirect endpoint is the url to which the client receives the response |
	

### Integration Information
This section contains configuration details for integration between service provider and identity provider. 

| Field | Description |
| ---- | -----------|
| Client ID | This acts as the unique identity for the registered client |
| Client Secrets | It is a client specific information that is only known to application and the authorization server. This acts as application's password |
| Scopes | Scope parameter is used to authorize access to user information |
| User Name Attribute | This field allows to configure the attribute value that is associated with the user name that is fetched from the identity provider |
	

### Role Mapping

Role Mapping for logged in users can come from the configured openID security provider or an imported Database.

- **Search User Role**: Check this box to select the user role provider - Database or OpenId.
    - If you select _**OpenId**_ then both authentication and authorization (roles) will be retrieved from the OpenId security provider. You need to provide:
        - **Role Attribute**: This allows to assign user the required role.
    - If you select _**Database**_ then authentication is performed using OpenId and authorization (roles) content is retrieved from the database. This allows you to use username and password credentials from OpenId while retrieving role content from a separate database. For role configuration using database [see here](/learn/app-development/app-security/authorization/#user-onboarding).



