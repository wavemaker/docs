---
title: "Authorization"
id: ""
---

is a process through which the access to various aspects of the app such as services, widgets, and functionality is restricted to the specified app roles.

authentication in an application makes all pages (except Common, Login) and services to be authenticated. Common and Login pages have permission set as ‘Everyone’ and this cannot be changed. For the other pages and services, WaveMaker allows you to control the application behavior based on the user's role. It is a three-step process of:

1. _the roles_,
2. _these roles to users_ and then
3. _the access levels_ to various pages, services and widgets of the app.

###  Onboarding

order to use Role-based Access Control, you must have configured Security Providers and Roles. The configuration for user details should be set.

[![](../assets/sec_user_db.png)](../assets/sec_user_db.png) _Configuration_ can be Basic or Custom. In the case of , a HQL query will be built by default in read-only mode. In case of , you can change the query to suit the app needs. : Here we are talking about the database-based role configuration. For other role providers like LDAP, AD etc., refer to the corresponding section in [ document](/learn/app-development/app-security/authentication/)

- the case of **Role Configuration**, set the _Column_ to the field within the user table where role information is stored. : In case the role column is in a related table, use Custom query. [![](../assets/sec_user_db_role1.png)](../assets/sec_user_db_role1.png)
- the case of **Role Configuration**, Query Type can be set to HQL or SQL. By default, HQL is selected and a default query is generated, which can be modified. : The username and role can reside in separate tables and you can write a query to retrieve the information. **parameter to the query LOGGED\_IN\_USERNAME needs to be retained as it is, WaveMaker stores the username details in this variable** [![](../assets/sec_user_db_role2.png)](../assets/sec_user_db_role2.png)
- an example, if you select Database as Security Provider; sample hrdb as the Database; User as the Entity; Username, Userid and Password as themselves, then the sample query would be provided along with a text box to enter a sample value for username and test the query. [![](../assets/sec_user_db_role3.png)](../assets/sec_user_db_role3.png)

### Roles

need to add the roles that you want to use in your application as per the roles in the above-mentioned Security Providers and Roles in the **Roles** tab. There are two App Roles - and offered for all providers. They are for authorization and provided out of the box. Users can add/remove to suit their needs. Using the arrow keys, you can set the **precedence** for multiple roles within an application. This is particularly useful when a single user has multiple roles with different overlapping functionality. For example, Manager has two roles – admin and user. And for admin the landing page is set as EmployeeDashboard, while user has the landing page as EmployeeProfile. Based on the role precedence the corresponding landing page takes priority, i.e., when Manager logs in, if admin role has higher precedence then EmployeeDashboard page is displayed, if user role has higher precedence then EmployeeProfile page is displayed.

[![](../assets/sec_roles.png)](../assets/sec_roles.png)

< Authentication

\-Based Access >

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
- [7.3 Authorization](#)
    - [Overview](#)
    - [User Onboarding](#user-onboarding)
    - [App Roles](#app-roles)
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
