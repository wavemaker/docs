---
title: "Token Based Authentication"
id: "token-based-authentication"
---

interaction between front-end and back-end for WaveMaker applications goes through REST APIs exposed by the back-end. For every service such as DB, Java, SOAP etc created/imported into WaveMaker application, the corresponding functionality is exposed through REST APIs. These REST APIs can be invoked from the application front-end or they can be integrated with other applications (non-WaveMaker applications). Invocation from the application front-end goes through the login page flow wherein a cookie is provided post authentication, which will be sent while invoking the back-end REST APIs.

[![app_flow](../assets/app_flow.png)](../assets/app_flow.png)

the REST APIs are invoked from a third-party application, the same login flow with cookie will not work. The other alternative is to send the credentials for each and every REST API call through Basic Authentication Header. Though this option works, it is not recommended for security reasons as every request carrying the credentials of the user. To avoid such problems, WaveMaker applications follows **Based authentication mechanism** for their REST APIs.

## it works

\-based authentication is an authentication mechanism mostly used for authentication of API requests. In this mechanism, the user is issued an API access token upon successful authentication, which will be used while invoking any API request. In this process, a cookie will never be issued by the server. All requests are stateless.

[![token_app_flow](../assets/token_app_flow.png)](../assets/token_app_flow.png)

## is a token?

token is a piece of data created by the server containing information to uniquely identify the user. A new token is created for every token request, therefore there could be multiple tokens for the same user.

Eg: cc7112734bbde748b7708b0284233419.

token should be sent as a Header with the name “_\_auth\_token_” when making API requests to the WaveMaker applications.

has a lifetime. It is valid for 1800 seconds from its creation(configurable). Expired tokens are not valid and will be discarded.

## Repository

issued by the server are stored in the token repository. At present WaveMaker only supports In-Memory token repository, hence they will be lost if the server gets restarted.

## Request

obtain the Token an HTTP GET request has to be made to the following URL:  \[app-hosted-url\]/services/security/token by passing the credentials through Basic auth request. In Basic authentication approach, the credentials are encoded with Base64 and sent in the header with the name “Authorization” as shown below

as: : Basic <base64(username:password)>

with the above example, the service URL would be: ://e1d52cdd8ecf.cloud.wavemakeronline.com/Demo/services/security/token and for username as and password as the header would be: : Basic YWRtaW46YWRtaW4=.

your authentication credentials are correct, you will get the following message with the token: {"wm\_auth\_token":"ZXJpYy5saW46MTQ1ODE5MDcyNDU5NTpmZGQwYjUzMDNjMzRiZDgyZmUyZTBhZTQyYTM1NzJjYw"}

If user is not authenticated, you will get an error message as shown below along with the Http Response Code of 401: {"errors":{"error":\[{"id":null,"messageKey":"com.wavemaker.studio.json$UnexpectedError","message":null,"parameters":\["Require authentication to generate access token"\]}\]}}

## API using Token

Once a token is issued, the APIs can be accessed, by passing the token as Header Or Param. The following example shows to access the User table from the sample hrdb: Token based authorization using header parameter:

://\[application context url\]/services/hrdb/User/
Header :
wm\_auth\_token : YWRtaW46MTQ1NzY3NjY1ODMzNzo2NmY4NjJkZTY2MGQ5NjhlMDdhMTk0YWFjMTNhNzY4Mg

Token based authorization using request parameter:

://\[application context url\]/services/hrdb/User/?wm\_auth\_token=YWRtaW46MTQ1NzY3NjY1ODMzNzo2NmY4NjJkZTY2MGQ5NjhlMDdhMTk0YWFjMTNhNzY4Mg

:

- token exists both as request parameter and header, then request parameter takes precedence. Though the token can be sent in either Header or Parameter, we recommend the Header approach for security reasons.
- the token is invalid, then 401 unauthorized error will be sent in response.

## Validity

By default, a token is valid for 1800 seconds since its creation. You can customize token validity seconds in project-security-provider.xml by editing below bean, before deploying the app.

<bean id="wmTokenBasedAuthenticationService" class="com.wavemaker.runtime.security.token.WMTokenBasedAuthenticationService">

The API requests with an invalid/expired token will be returned with the 401 response code.

< SSL Encryption

7\. Security

- 7.1 App Security Overview
    - [Overview](/learn/app-security/app-security/#)
    - [How Security Works](/learn/app-security/app-security/#working)
    - [How Security is Implemented](/learn/app-security/app-security/#implementation)
    - [Security Terminology](/learn/app-security/app-security/#terminology)
- 7.2 Authentication
    - [Overview](/learn/app-security/authentication/)
    - [Security Providers](/learn/app-security/authentication/#security-providers)
        - [Demo](/learn/app-security/authentication/#demo)
        - [Database](/learn/app-security/authentication/#database)
        - [LDAP](/learn/app-security/authentication/#ldap)
        - [Active Directory](/learn/app-security/authentication/#ad)
        - [CAS](/learn/app-security/authentication/#cas)
        - [SAML](/learn/app-security/authentication/#saml)
        - [Custom](/learn/app-security/authentication/#custom)
- 7.3 Authorization
    - [Overview](/learn/app-security/authorization/)
    - [User Onboarding](/learn/app-security/authorization/#user-onboarding)
    - [App Roles](/learn/app-security/authorization/#app-roles)
- 7.4 Access Levels & Permissions
    - [Overview](/learn/app-security/access-levels-permissions/)
    - [Setting Permissions](/learn/app-security/access-levels-permissions/#setting-permissions)
    - [Role Based Access to Widgets](/learn/app-security/access-levels-permissions/#role-based-access)
- 7.5 Login Configuration
    - [Overview](/learn/app-security/login-configuration/)
    - [Login Page](/learn/app-security/login-configuration/#login-page)
    - [Landing Page](/learn/app-security/login-configuration/#landing-page)
    - [Session Timeout](/learn/app-security/login-configuration/#session-timeout)
- 7.6 Security Related Variables
    - [Overview](/learn/app-security/security-variables)
- 7.7 SSL Encryption
    - [Overview](/learn/app-security/ssl-encryption/)
- 7.8 OWASP
    - [Overview](/learn/app-security/owasp/)
    - [Preventing XSS Attacks](/learn/app-security/owasp/#xss)
    - [Preventing CSRF Attacks](/learn/app-security/owasp/#csrf)
- 7.9 Single Sign-On (CAS)
    - [Overview](/learn/app-security/central-authentication-system/)
- [7.10 Token Based Authentication](#)
    - [Overview](#)
    - [How Token Based Authentication Works](#working)
    - [What is Token](#token)
    - [Token Repository](#token-repository)
    - [Token Request](#token-request)
    - [API Invocation](#api-invocation)
    - [Token Validity](#token-validity)
- 7.11 SAML Integration
    - [Overview](/learn/app-development/app-security/saml-integration/)
    - [Profiles](/learn/app-development/app-security/saml-integration/#profiles)
    - [Integration](/learn/app-development/app-security/saml-integration/#integration)
    - [Configuration Files](/learn/app-development/app-security/saml-integration/#files)
    - [Deployment](/learn/app-development/app-security/saml-integration/#deployment)
    - [Troubleshooting](/learn/app-development/app-security/saml-integration/#troubleshooting)
    - [Use Cases](/learn/app-development/app-security/saml-integration/#use-cases)
