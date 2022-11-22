---
title: "Configuring Open ID authentication using SSO"
id: "openid-auth"
---
In this document we will be describing about the Open ID authentication via gmail.

---

OpenID Auth is a type of authentication protocol to log into the application. Users can use the login credentials provided by an OpenID provider, to establish a session with another application. OpenID providers are the third-party authentication servers that provide the authenticated ID to user, allowing them to use multiple applications without creating a separate account and password for each. 

## Why OpenID Authentication?

OpenID Authentication comes with many advantages. Some important reasons to choose OpenID authentication are:

### Simple Sign-up process

User is provided with few secure identities by OpenID providers like Google, Facebook and so on, that allows the user to login with a single click. This removes the efforts and time that user spends to feed the redundant information to use an application.
 
### Minimum efforts to maintain usernames and passwords

Users do not have to invest much of their efforts in keeping track of multiple usernames and passwords. Developers also find it beneficial as they are not required to design additional logic to store and maintain the usernames and passwords, specific to any application.

### Lower Password security risks

Users tend to have same passwords and usernames for many applications. This may pose a huge security risk as it becomes easy to hack into the user's account in every application. Instead, if the user is provided with an identity by OpenID provider, it reduces the risk of hacking into all the accounts. If the security is anyhow compromised, the user has to only change password to the identity provider and the data stays secure.

## Example

Twitter is a well-known social media application. This application also uses OpenID authentication. As soon as the user tries to login, user is provided with few identity providers like Gmail and Apple. User can then choose a desired identity provider to log into Twitter.

## OpenID Architecture

1. Application sends an authentication request to the identity provider as soon as the User tries to login to the application using desired identity provider.
2.	User gets directed to the identity provider to provide necessary details for authentication and authorization purposes.
3.	Identity provider verifies the user's identity and sends the authorization code to the application.
4.	Application communicates the authorization code to generate a token request that the application passes to the token endpoint of identity provider.
5.	Identity provider verifies the code associated with the token request and sends the ID token, access token and refresh token to the application.
6.	ID token contains the user details, this allows application to establish a session with the user.


[![](/learn/assets/OpenID_Architecture.png)](/learn/assets/OpenID_Architecture.png)
 

## OpenID Authentication Security Configurations

OpenID Authentication security configurations facilitate communication between the application and Identity provider.

### Identity Provider Information

| Field | Description |
| ---- | -----------|
| Provider ID | Allows User to select the Identity Provider |
| Authorization URL | This is the endpoint that initiates the authentication of the end user |
| Token Url | This is the endpoint used to communicate Access token, ID token and refresh token |
| JWKS Url | Json Web Key Set (JWKS) endpoint stores the information on public keys used to verify the Json Web tokens |
| User Info Endpoint | User Info endpoint allows the client application to fetch the required claims about the authenticated end user |
| Logout Url | This endpoint is used by the client application to erase provider-side session and related cookies |
		

### Service Provider Information

| Field | Description |
| ---- | -----------|
| Redirect Url | Redirect endpoint is the url to which the client receives the response |
	

### Integration Information

| Field | Description |
| ---- | -----------|
| Client ID | This acts as the unique identity for the registered client |
| Client Secrets | It is a client specific information that is only known to application and the authorization server. This acts as application's password |
| Scopes | Scope parameter is used to authorize access to user information |
| User Name Attribute | This field allows to configure the attribute value that is associated with the user name that is fetched from the identity provider |
	

### Role Mapping

**Prerequisite:** User must switch in the Search User Role mapping option.
| Field | Description |
| ---- | -----------|
| Select User Role Provider | This option allows to select the type of database containing user details |


**Prerequisite:** User must select "OpenId" option as User Role Provider.
| Field | Description |
| ---- | -----------|
| Role Attribute | This allows to assign user the required role |


**Prerequisite:** User must select "Database" in the Search User Role mapping option.
#### Database Configuration
| Field | Description |
| ---- | -----------|
| Database | This field must contain hrdb as database |
| User Table | This option lets the user decide the table type from the selected database |
	

#### User
| Field | Description |
| ---- | -----------|
| Username Column | This field stores the username of the end user that is fetched from the configured database provider |


#### Role Mapping

**Prerequisite:**  User must select "Basic" in the Role configuration option.
| Field | Description |
| ---- | -----------|
| Role column | This allows to assign user the required role |


**Prerequisite:** User must select "Custom" in the Role configuration option.
| Field | Description |
| ---- | -----------|
| Query Type | This option provides the platform where user can use either HQL or SQL queries to customise the end user roles |




