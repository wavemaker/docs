---
title: "Central Authentication System"
id: ""
---

The Central Authentication Service (CAS) is a single sign-on protocol for the web. Its purpose is to permit a user to access multiple applications using the same underlying authentication service. For example, a company has HRIS system which authenticates using LDAP. Now we want to build a Leave application using WaveMaker. If we need to provide a single login to Leave App & HRIS, then CAS is the solution to enable single sign-on.

CAS also allows web applications to authenticate users without gaining access to a user's security credentials, such as a password. The CAS protocol involves at least three parties: a client web browser, the web application requesting authentication, and the CAS server. It may also involve a back-end service, such as a database server, that does not have its own HTTP interface but communicates with a web application.

When the client visits an application desiring to authenticate to it, the application redirects it to CAS. CAS validates the client's authenticity, usually by checking a username and password against a database (such as Kerberos, LDAP or Active Directory). If the authentication succeeds, CAS returns the client to the application, passing along a security ticket. The application then validates the ticket by contacting CAS over a secure connection and providing its own service identifier and the ticket. CAS then gives the application trusted information about whether a particular user has successfully authenticated. [Know more about CAS](https://wiki.jasig.org/display/CAS/Home).

To set up authentication using a Central Authentication Service in WaveMaker apps, enable from the security dialog, choose _CAS_ as the **Security Provider**.

[![](/learn/assets/sec_access.png)](/learn/assets/sec_access.png)

[![](/learn/assets/sec_user_cas.png)](/learn/assets/sec_user_cas.png)

When you choose _CAS_ as the **Security Provider**, you can perform the following configurations on the **Users** tab:

- _Server URL_: This field specifies the context path of the CAS server. Example: http://mydomain.com:8080/cas
- _Login URL_: This fields specifies the login path relative to the server URL where login page will be shown. Example: http://mydomain.com:8080/login. **Note**: This field will be auto-populated based upon the Server URL and it can be edited as per requirement.
- _Validation URL_: This fields specifies the URL where service ticket validation will happen. Example: http://mydomain.com:8080/serviceValidate. **Note**: This field will be auto-populated based upon the Server URL and it can be edited as per requirement.
- _Service Parameter Name_: This fields helps configure the callback URL for CAS login. The default value is 'service'. Eg. /cas-server-webapp/login? service=https%3A%2F%2Flocalhost%3A8443%2Fcassample-1.0%2Flogin%2Fcas
- _Ticket Parameter Name_: This fields helps configures the Request Parameter to look for when attempting to see if a CAS ticket was sent from the server. The default value is 'ticket'. Eg. /cassample-1.0/login/cas?ticket=ST-1-lCYeRuXfmhKid1auqdy2-cas01.example.org
- _Test Connection_: Clicking on Test Connection will open a new window that redirects to CAS login page . After login, sample response will be shown in tabular format. The possible attributes for the role attribute name, in case of CAS authorization, will be extracted from here.

**ROLE MAPPING**: This section can be used to define roles for the purpose of authorization. Your app might need authentication but no authorization, in such cases _un-check_ the **Search User Role** option.

- _Select User Role Provider_: Choose the user role provider.
    
    1. If you select **CAS**, mention the attribute name returned by the CAS that contains the User Role values. The _Role Attribute Name_ will be populated from the CAS authentication response, after successful Test Connection, you can choose from the list. In case you know the attribute name, you can enter it without testing the connection.
    2. If you select **Database** then authentication is performed using CAS and authorization (roles) content is retrieved from the database. This allows you to use username and password credentials from CAS while retrieving role content from a separate database.
        - _Data Model_:  The Data Model (database) that contains the tables for the username and password fields. Choose the Data Model from the pull-down menu. (You have to import the database first. If you have imported the database and it does not appear in this list, try closing and reopening the project).
        - _Entity_: Select the table that contains the columns for the usernames and passwords.
        - _Username Field_: Select the column for the user (login) name. **Note**: Ensure that the username values that are returned by the CAS authentication exist in the database, these will not be added automatically.
        - _Userid Field_: The primary key for the table selected in Entity
        - _Password Field_: Select the column for the password.
        - _Role Field_: Select the column for the user's role.
    
    [![](/learn/assets/sec_user_cas_role.png)](/learn/assets/sec_user_cas_role.png)

< SSL Encryption

7\. Security

- 7.1 App Security Overview
    - [i. Overview](/learn/app-security/app-security/#)
    - [ii. How Security Works](/learn/app-security/app-security/#working)
    - [iii. How Security is Implemented](/learn/app-security/app-security/#implementation)
    - [iv. Security Terminology](/learn/app-security/app-security/#terminology)
- 7.2 Authentication
    - [i. Overview](/learn/app-security/authentication/)
    - [ii. Security Providers](/learn/app-security/authentication/#security-providers)
        - [○ Demo](/learn/app-security/authentication/#demo)
        - [○ Database](/learn/app-security/authentication/#database)
        - [○ LDAP](/learn/app-security/authentication/#ldap)
        - [○ Active Directory](/learn/app-security/authentication/#ad)
        - [○ CAS](/learn/app-security/authentication/#cas)
        - [○ SAML](/learn/app-security/authentication/#saml)
        - [○ Custom](/learn/app-security/authentication/#custom)
- 7.3 Authorization
    - [i. Overview](/learn/app-security/authorization/)
    - [ii. User Onboarding](/learn/app-security/authorization/#user-onboarding)
    - [iii. App Roles](/learn/app-security/authorization/#app-roles)
- 7.4 Access Levels & Permissions
    - [i. Overview](/learn/app-security/access-levels-permissions/)
    - [ii. Setting Permissions](/learn/app-security/access-levels-permissions/#setting-permissions)
    - [iii. Role Based Access to Widgets](/learn/app-security/access-levels-permissions/#role-based-access)
- 7.5 Login Configuration
    - [i. Overview](/learn/app-security/login-configuration/)
    - [i. Login Page](/learn/app-security/login-configuration/#login-page)
    - [ii. Landing Page](/learn/app-security/login-configuration/#landing-page)
    - [iii. Session Timeout](/learn/app-security/login-configuration/#session-timeout)
- 7.6 Security Related Variables
    - [i. Overview](/learn/app-security/security-variables)
- 7.7 SSL Encryption
    - [i. Overview](/learn/app-security/ssl-encryption/)
- 7.8 OWASP
    - [i. Overview](/learn/app-security/owasp/)
    - [ii. Preventing XSS Attacks](/learn/app-security/owasp/#xss)
    - [iii. Preventing CSRF Attacks](/learn/app-security/owasp/#csrf)
- [7.9 Single Sign-On (CAS)](#)
    - [i. Overview](#)
- 7.10 Token Based Authentication
    - [i. Overview](/learn/app-security/token-based-authentication/)
    - [ii. How Token Based Authentication Works](/learn/app-security/token-based-authentication/#working)
    - [iii. What is Token](/learn/app-security/token-based-authentication/#token)
    - [iv. Token Repository](/learn/app-security/token-based-authentication/#token-repository)
    - [v. Token Request](/learn/app-security/token-based-authentication/#token-request)
    - [vi. API Invocation](/learn/app-security/token-based-authentication/#api-invocation)
    - [vii. Token Validity](/learn/app-security/token-based-authentication/#token-validity)
- 7.11 SAML Integration
    - [i. Overview](/learn/app-development/app-security/saml-integration/)
    - [i. Profiles](/learn/app-development/app-security/saml-integration/#profiles)
    - [ii. Integration](/learn/app-development/app-security/saml-integration/#integration)
    - [iii. Configuration Files](/learn/app-development/app-security/saml-integration/#files)
    - [iv. Deployment](/learn/app-development/app-security/saml-integration/#deployment)
    - [v. Troubleshooting](/learn/app-development/app-security/saml-integration/#troubleshooting)
    - [vi. Use Cases](/learn/app-development/app-security/saml-integration/#use-cases)
