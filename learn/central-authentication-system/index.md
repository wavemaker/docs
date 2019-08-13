---
title: "Central Authentication System"
id: "central-authentication-system"
---

Central Authentication Service (CAS) is a single sign-on protocol for the web. Its purpose is to permit a user to access multiple applications using the same underlying authentication service. For example, a company has HRIS system which authenticates using LDAP. Now we want to build a Leave application using WaveMaker. If we need to provide a single login to Leave App & HRIS, then CAS is the solution to enable single sign-on.

also allows web applications to authenticate users without gaining access to a user's security credentials, such as a password. The CAS protocol involves at least three parties: a client web browser, the web application requesting authentication, and the CAS server. It may also involve a back-end service, such as a database server, that does not have its own HTTP interface but communicates with a web application.

the client visits an application desiring to authenticate to it, the application redirects it to CAS. CAS validates the client's authenticity, usually by checking a username and password against a database (such as Kerberos, LDAP or Active Directory). If the authentication succeeds, CAS returns the client to the application, passing along a security ticket. The application then validates the ticket by contacting CAS over a secure connection and providing its own service identifier and the ticket. CAS then gives the application trusted information about whether a particular user has successfully authenticated. [more about CAS](https://wiki.jasig.org/display/CAS/Home)

set up authentication using a Central Authentication Service in WaveMaker apps, enable from the security dialog, choose  as the  **Provider**

[![](../assets/sec_access.png)](../assets/sec_access.png)

[![](../assets/sec_user_cas.png)](../assets/sec_user_cas.png)

you choose  as the  **Provider**, you can perform the following configurations on the  tab:

- _URL_: This field specifies the context path of the CAS server. Example: http://mydomain.com:8080/cas
- _URL_: This fields specifies the login path relative to the server URL where login page will be shown. Example: http://mydomain.com:8080/login. : This field will be auto-populated based upon the Server URL and it can be edited as per requirement.
- _URL_: This fields specifies the URL where service ticket validation will happen. Example: http://mydomain.com:8080/serviceValidate. : This field will be auto-populated based upon the Server URL and it can be edited as per requirement.
- _Parameter Name_: This fields helps configure the callback URL for CAS login. The default value is 'service'. Eg. /cas-server-webapp/login? service=https%3A%2F%2Flocalhost%3A8443%2Fcassample-1.0%2Flogin%2Fcas
- _Parameter Name_: This fields helps configures the Request Parameter to look for when attempting to see if a CAS ticket was sent from the server. The default value is 'ticket'. Eg. /cassample-1.0/login/cas?ticket=ST-1-lCYeRuXfmhKid1auqdy2-cas01.example.org
- _Connection_: Clicking on Test Connection will open a new window that redirects to CAS login page . After login, sample response will be shown in tabular format. The possible attributes for the role attribute name, in case of CAS authorization, will be extracted from here.

**MAPPING**: This section can be used to define roles for the purpose of authorization. Your app might need authentication but no authorization, in such cases _\-check_ the ** User Role** option.

- _User Role Provider_: Choose the user role provider.
    
    1. you select , mention the attribute name returned by the CAS that contains the User Role values. The _Attribute Name_ will be populated from the CAS authentication response, after successful Test Connection, you can choose from the list. In case you know the attribute name, you can enter it without testing the connection.
    2. you select  then authentication is performed using CAS and authorization (roles) content is retrieved from the database. This allows you to use username and password credentials from CAS while retrieving role content from a separate database.
        - _Model_:  The Data Model (database) that contains the tables for the username and password fields. Choose the Data Model from the pull-down menu. (You have to import the database first. If you have imported the database and it does not appear in this list, try closing and reopening the project).
        - : Select the table that contains the columns for the usernames and passwords.
        - _Field_: Select the column for the user (login) name. : Ensure that the username values that are returned by the CAS authentication exist in the database, these will not be added automatically.
        - _Field_: The primary key for the table selected in Entity
        - _Field_: Select the column for the password.
        - _Field_: Select the column for the user's role.
    
    [![](../assets/sec_user_cas_role.png)](../assets/sec_user_cas_role.png)

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
- [7.9 Single Sign-On (CAS)](#)
    - [Overview](#)
- 7.10 Token Based Authentication
    - [Overview](/learn/app-security/token-based-authentication/)
    - [How Token Based Authentication Works](/learn/app-security/token-based-authentication/#working)
    - [What is Token](/learn/app-security/token-based-authentication/#token)
    - [Token Repository](/learn/app-security/token-based-authentication/#token-repository)
    - [Token Request](/learn/app-security/token-based-authentication/#token-request)
    - [API Invocation](/learn/app-security/token-based-authentication/#api-invocation)
    - [Token Validity](/learn/app-security/token-based-authentication/#token-validity)
- 7.11 SAML Integration
    - [Overview](/learn/app-development/app-security/saml-integration/)
    - [Profiles](/learn/app-development/app-security/saml-integration/#profiles)
    - [Integration](/learn/app-development/app-security/saml-integration/#integration)
    - [Configuration Files](/learn/app-development/app-security/saml-integration/#files)
    - [Deployment](/learn/app-development/app-security/saml-integration/#deployment)
    - [Troubleshooting](/learn/app-development/app-security/saml-integration/#troubleshooting)
    - [Use Cases](/learn/app-development/app-security/saml-integration/#use-cases)
