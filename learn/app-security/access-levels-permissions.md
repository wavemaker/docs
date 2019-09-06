---
title: "Access Levels & Permissions"
id: ""
---

Once you have added the roles, you can set up the **permissions**. Permissions is a mix of Authentication and Authorization. The Authentication options are _Everyone_ and _Authenticated_. If the developer chooses “Everyone”, then it's not covered under WaveMaker security. “Authenticated” secures the resource/service.

Permissions can be set to three levels:

1. **Everyone** \- access is granted to all users irrespective of whether they are logged in or not. This setting would be used for an About or Contact Us pages which can be viewed by anyone.
2. **Authenticated** \- access is granted only to users who are logged in, for example, the logout button.
3. Once the resource/service is authenticated, then you can choose the level of “visibility”, i.e Authorization. You can choose roles which can have exclusive access to this resource/service. By default, all resources/services are “Authenticated” and are accessible to all once authenticated. [![](../assets/sec_perm_web.png)](../assets/sec_perm_web.png)

# Setting Permissions

Users can set permissions for web resources, services, and Prefabs.

- **Web resources** are pages created in WaveMaker.
- Selecting **Services** option will list all the services used by your application. Services include java services, database, web services created for consumption. Each service exposes various end points for setting permissions. For example, permissions can be set for the Java service and methods; web service end points; database, table or end-points.
- Permissions can be set for **Prefabs** incorporated within the app.  Permissions set to a particular prefab will cascade onto all services invoked inside that Prefab.

**NOTE:** The **permission level follows a hierarchical structure**, with child level inheriting from the parent in case no permission is set. Let us look at how the security permissions work at various levels. Consider the Sample hrdb, each entity is exposed as a controller ie it has User, Vacation, Department, Employee controllers. At each table-level there are multiple operations defined, for example, User controller has operations ‘getUser’, ‘deleteUser’, ‘editUser’ etc. Once authentication is enabled at the service level hrdb is set to be authenticated. If permission is set to the respective controller, then it will be retrieved else it inherits parent permission of ‘hrdb’. Same for operations, if some permission set it will be retrieved else inherits from its parent ‘User’ else then from its parent ‘hrdb’ permission will be inherited. Changing permission for the parent will affect only the children which do not have specific permissions set, permissions set to children will be retained. Let us look at some cases:

- **Case 1**: hrdb -- ‘Authenticated’; Result: Every controller and their operations are ‘Authenticated’ inherited from hrdb.
- **Case 2**: hrdb -- ‘Authenticated’; Changed: User permitted to ‘Admin, User’ and User operation ‘editUser’ permitted to ‘Admin’; Result: Only ‘editUser’ operation in User controller has permission ‘Admin’ and all other operations has permission ‘Admin, User’ inherited from its parent controller ‘User’. Rest of the controllers (Employee, Vacation etc) remain to be ‘Authenticated’ inherited from hrdb.
- **Case 3**: User -- ‘Admin, User’; User operation ‘editUser’ -- ‘Admin’ but hrdb permission set to ‘Everyone’; Result: User controller ’editUser’ operation will have ‘Admin’ and rest of their operations has permissions ‘Admin, User’ inheriting from User. Rest of the controllers (Employee, Vacation etc) will have permission ‘Everyone’ inheriting from hrdb.
- **Case 4**: hrdb -- ‘Everyone’, User operation ‘editUser’ permitted to ‘Admin’, User permission set to ‘Authenticated’; Result: User controller ’editUser’ operation will have permission to ‘Admin’ and rest of the User operations have permissions ‘Authenticated’ inherited from User. Rest of the controllers (Employee, Vacation etc) will have permission ‘Everyone’ inherited from hrdb.

# Role Based Access to Widgets

Once you create roles in a project, you can enable **role-based access** for a widget.

1. Select the widget in the **Design** mode.
2. Click on the **Security** tab on the **Properties Panel**.
3. You will find that the _Widget Access_ property is set with the User Role Group as _Everyone_ by default. You can set the User Role Group as:
    1. **Everyone** \- access is granted to all users irrespective of whether they are logged in or not. This setting would be used for an About or Contact Us pages which can be viewed by anyone.
    2. **Anonymous** \- access is granted only to users who are not logged in. An example would be the login button on the About page
    3. **Authenticated** \- access is granted only to users who are logged in. For example the logout button.
    4. Further authenticated access can be **Role-based** ie for a particular User Role as defined in the App Role section.
4. Select a **User Role** to make the selected widget visible to users with this role. [![](../assets/sec_widgets.png)](../assets/sec_widgets.png)

< Authorization

Login Configuration >

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
- [7.4. Access Levels & Permissions](#)
    - [i. Overview](#)
    - [ii. Setting Permissions](#setting-permissions)
    - [iii. Role Based Access to Widgets](#role-based-access)
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
- 7.9 Single Sign-On (CAS)
    - [i. Overview](/learn/app-security/central-authentication-system/)
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
