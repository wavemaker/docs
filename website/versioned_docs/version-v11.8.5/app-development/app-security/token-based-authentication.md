---
title: "Token Based Authentication"
id: "token-based-authentication"
---
---
## Overview

The interaction between front-end and back-end for WaveMaker applications goes through REST APIs exposed by the back-end. For every service such as DB, Java, SOAP etc created/imported into WaveMaker application, the corresponding functionality is exposed through REST APIs. These REST APIs can be invoked from the application front-end or they can be integrated with other applications (non-WaveMaker applications). Invocation from the application front-end goes through the login page flow wherein a cookie is provided post authentication, which will be sent while invoking the back-end REST APIs.

[![app_flow](/learn/assets/app_flow.png)](/learn/assets/app_flow.png)

If the REST APIs are invoked from a third-party application, the same login flow with cookie will not work. The other alternative is to send the credentials for each and every REST API call through Basic Authentication Header. Though this option does work, it is not recommended for security reasons as every request will be carrying the credentials of the user. To avoid such problems, WaveMaker applications supports **Token Based authentication mechanism** for the REST APIs.

## How it works

Token-based authentication is an authentication mechanism mostly used for authentication of API requests. In this mechanism, the user is issued an API access token upon successful authentication, which will be used while invoking any API request. In this process, a cookie will never be issued by the server. All requests are stateless and must include the token in a HTTP header or a query param.

[![token_app_flow](/learn/assets/token_app_flow.png)](/learn/assets/token_app_flow.png)

## What is a token?

A token is a piece of data created by the server containing information to uniquely identify the user. A new token is created for every token request, therefore there could be multiple tokens for the same user.

Example: `cc7112734bbde748b7708b0284233419`.

The token should be sent as a Header with the name “_wm_auth_token_” when making API requests to the WaveMaker applications.

Token has a lifetime. It is valid for 1800 seconds from its creation(configurable). Expired tokens are not valid and will be discarded.

## Token Repository

Tokens issued by the server are stored in the token repository. WaveMaker runtime only supports In-Memory token repository, hence they will be lost if the server gets restarted. Clients planning to use tokens must be resilient and expect token expiry. They are expected to handle token expiry gracefully and get a new token in such scenarios. 

## Token Request

To obtain the Token an HTTP GET request has to be made to the following URL: GET [app-hosted-url]/services/security/token by passing the credentials through Basic auth request. In Basic authentication approach, the credentials are encoded with Base64 and sent in the header with the name “Authorization” as shown below

Header as: 
```
Authorization : Basic <base64(username:password)>
```
Continuing with the above example, the service URL would be: 
```
http://e1d52cdd8ecf.cloud.wavemakeronline.com/Demo/services/security/token 
```
and for username as _admin_ and password as _admin_ the header would be: 
```
Authorization : Basic YWRtaW46YWRtaW4=.
```
If your authentication credentials are correct, you will get the following message with the token: 
```JSON
{"wm_auth_token":"ZXJpYy5saW46MTQ1ODE5MDcyNDU5NTpmZGQwYjUzMDNjMzRiZDgyZmUyZTBhZTQyYTM1NzJjYw"}
```
If user is not authenticated, you will get an error message as shown below along with the Http Response Code of 401: 
```
{
    "errors": {
        "error": [{
            "id": null,
            "messageKey": "com.wavemaker.studio.json$UnexpectedError",
            "message": null,
            "parameters": ["Require authentication to generate access token"]
        }]
    }
}
```
## Invoke API using Token

Once a token is issued, the APIs can be accessed, by passing the token in HTTP Header or as a query param. The following example shows to access the User table from the sample hrdb: Token based authorization using HTTP header parameter:
```
http://[application context url]/services/hrdb/User/
Header :
wm_auth_token : YWRtaW46MTQ1NzY3NjY1ODMzNzo2NmY4NjJkZTY2MGQ5NjhlMDdhMTk0YWFjMTNhNzY4Mg
```
Token based authorization using query parameter:
```
http://[application context url]/services/hrdb/User/?wm_auth_token=YWRtaW46MTQ1NzY3NjY1ODMzNzo2NmY4NjJkZTY2MGQ5NjhlMDdhMTk0YWFjMTNhNzY4Mg
```

:::note
- If token exists both as query parameter and header, then query parameter takes precedence. Though the token can be sent in either Header or Parameter, we recommend the Header approach for security reasons.
- If the token is invalid, then 401 unauthorized error will be sent in response.
:::

## Token Validity

By default, a token is valid for 1800 seconds since its creation. You can customize token validity seconds in project-security-provider.xml by editing below bean, before deploying the app.
```
<bean id="wmTokenBasedAuthenticationService" class="com.wavemaker.runtime.security.token.WMTokenBasedAuthenticationService">
```
The API requests with an invalid/expired token will be returned with the 401 response code.

## Renewing the token after expiry

When a token has expired and 401 response code is returned, a fresh token needs to be obtained. Refer to section on "Token request" in this page on documentation obtaining new token.

