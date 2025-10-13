---
title: "Login Configuration"
id: "login-configuration"
---
---

**Login Configuration** defines the login behavior once authentication is enabled.

There are two behaviors that can be defined:

- login page and
- landing page.

You can also configure the session timeout behavior.

## Setting Login Page

1. **How** the Login should be handled: using a **login page** - you can use the default login page provided by Studio or create your own page; 

[![](/learn/assets/security_loginpage_1.png)](/learn/assets/security_loginpage_1.png)

2. or using a **login dialog** pop-up provided by Studio. This dialog is present in the _Common page_ as "_CommonLoginDialog_" and can be customized. 

[![](/learn/assets/security_logindialog.png)](/learn/assets/security_logindialog.png)

## Setting Landing Page

1. **Where** the user should land: **Landing page** can be defined to be different for different roles the user is assigned. For example, an admin might want to start with the employee management page, while a user would start with their profile page. In such cases, the employee management page would be the Landing Page for the admin role and the employee profile page would be the Landing Page for the user role.
2. Few things that you need to be aware of regarding the landing page configured here and the home page configured in the [Project Settings](/learn/app-development/wavemaker-overview/product-walkthrough#project-settings) dialog ([Settings accessed from the Project Configurations of Workspace](/learn/app-development/wavemaker-overview/product-walkthrough#project-workspace)):
    - In case the app is not secure, user is redirected to the Home page configured in the project settings.
    - In case the app is secure but the Home Page is not (permission set to everyone), user is redirected to the Home page configured in the project settings.
    - In case the app and Home Page are secure (permission set to specific user role), user is redirected to the configured login page as per the user role.

[![](/learn/assets/security_landingpage.png)](/learn/assets/security_landingpage.png)

## Session Timeout

Session timeout behavior can also be defined. Session timeout occurs due to session inactivity or deletion of browser cookies. The re-login mechanism in the app can be configured as follows:
    
- Page: On session timeout, the user is redirected to the configured login page. Any page can be configured to redirect the user on session timeout.
- Dialog: On session timeout, a dialog pops-up, for re-logging in the app.

[![](/learn/assets/security_reloginpage.png)](/learn/assets/security_reloginpage.png)

In both the cases, on re-login, redirection occurs based upon the user login:

- same user (last logged-in), the user is redirected to the last page(session timeout through Page) or remains in the same state(session timeout through Dialog).
- different user, the user is redirected to the Landing Page against the user role

Control comes to the _onSessionTimeout callback_ function as soon as session timeout is detected by the app. You can perform a custom action like clearing sensitive data, etc in this callback. This function can be invoked from **app.js** file:

```
App.onSessionTimeout = function () {

};
```
This function can be invoked from any **page.js** file:
```
Page.onSessionTimeout = function () {

};
```

## Setting session timeout

By default, the session timeout is set to 30 minutes. You can choose to change it.

[![](/learn/assets/security_timeout.png)](/learn/assets/security_timeout.png)

