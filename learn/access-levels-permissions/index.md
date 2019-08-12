---
title: "Access Levels & Permissions"
date: "2016-10-21"
---

you have added the roles, you can set up the Permissions is a mix of Authentication and Authorization. The Authentication options are and If the developer chooses “Everyone”, then it's not covered under WaveMaker security. “Authenticated” secures the resource/service.

can be set to three levels:

1. \- access is granted to all users irrespective of whether they are logged in or not. This setting would be used for an About or Contact Us pages which can be viewed by anyone.
2. \- access is granted only to users who are logged in, for example, the logout button.
3. the resource/service is authenticated, then you can choose the level of “visibility”, i.e Authorization. You can choose roles which can have exclusive access to this resource/service. By default, all resources/services are “Authenticated” and are accessible to all once authenticated. [![](../assets/sec_perm_web.png)](../assets/sec_perm_web.png)

# Permissions

can set permissions for web resources, services, and Prefabs.

- **resources** are pages created in WaveMaker.
- option will list all the services used by your application. Services include java services, database, web services created for consumption. Each service exposes various end points for setting permissions. For example, permissions can be set for the Java service and methods; web service end points; database, table or end-points.
- can be set for incorporated within the app.  Permissions set to a particular prefab will cascade onto all services invoked inside that Prefab.

**:** The **level follows a hierarchical structure**, with child level inheriting from the parent in case no permission is set. Let us look at how the security permissions work at various levels. Consider the Sample hrdb, each entity is exposed as a controller ie it has User, Vacation, Department, Employee controllers. At each table-level there are multiple operations defined, for example, User controller has operations ‘getUser’, ‘deleteUser’, ‘editUser’ etc. Once authentication is enabled at the service level hrdb is set to be authenticated. If permission is set to the respective controller, then it will be retrieved else it inherits parent permission of ‘hrdb’. Same for operations, if some permission set it will be retrieved else inherits from its parent ‘User’ else then from its parent ‘hrdb’ permission will be inherited. Changing permission for the parent will affect only the children which do not have specific permissions set, permissions set to children will be retained. Let us look at some cases:

- **1**: hrdb -- ‘Authenticated’; Result: Every controller and their operations are ‘Authenticated’ inherited from hrdb.
- **2**: hrdb -- ‘Authenticated’; Changed: User permitted to ‘Admin, User’ and User operation ‘editUser’ permitted to ‘Admin’; Result: Only ‘editUser’ operation in User controller has permission ‘Admin’ and all other operations has permission ‘Admin, User’ inherited from its parent controller ‘User’. Rest of the controllers (Employee, Vacation etc) remain to be ‘Authenticated’ inherited from hrdb.
- **3**: User -- ‘Admin, User’; User operation ‘editUser’ -- ‘Admin’ but hrdb permission set to ‘Everyone’; Result: User controller ’editUser’ operation will have ‘Admin’ and rest of their operations has permissions ‘Admin, User’ inheriting from User. Rest of the controllers (Employee, Vacation etc) will have permission ‘Everyone’ inheriting from hrdb.
- **4**: hrdb -- ‘Everyone’, User operation ‘editUser’ permitted to ‘Admin’, User permission set to ‘Authenticated’; Result: User controller ’editUser’ operation will have permission to ‘Admin’ and rest of the User operations have permissions ‘Authenticated’ inherited from User. Rest of the controllers (Employee, Vacation etc) will have permission ‘Everyone’ inherited from hrdb.

# Based Access to Widgets

Once you create roles in a project, you can enable **\-based access** for a widget.

1. the widget in the mode.
2. on the  tab on the **Panel**
3. will find that the  _Access_ property is set with the User Role Group as  by default. You can set the User Role Group as:
    1. \- access is granted to all users irrespective of whether they are logged in or not. This setting would be used for an About or Contact Us pages which can be viewed by anyone.
    2. \- access is granted only to users who are not logged in. An example would be the login button on the About page
    3. \- access is granted only to users who are logged in. For example the logout button.
    4. authenticated access can be **\-based** ie for a particular User Role as defined in the App Role section.
4. a **Role** to make the selected widget visible to users with this role. [![](../assets/sec_widgets.png)](../assets/sec_widgets.png)

< Authorization

Configuration >

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
- [7.4. Access Levels & Permissions](#)
    - [Overview](#)
    - [Setting Permissions](#setting-permissions)
    - [Role Based Access to Widgets](#role-based-access)
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
