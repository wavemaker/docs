---
title: "Security Variables"
id: "security-variables"
---
---

Whenever Authentication is enabled for an app, one variable and two actions are created by default and these are used in conjunction with the default _login page and logout button_ (in topnav) given by WaveMaker. If you decide to design your own login page and define the login and logout behavior, you can still use these variables to handle the login and log out behavior, by appropriate bindings.

## `loggedInUser`
**loggedInUser** contains the details of the logged in user based upon the fields set in the User details

## `loginAction`
**loginAction** is used to capture the login values entered by the user and take appropriate action. Of special interest is the **useDefaultSuccessHandler**, which will implement the login configuration of post-login behavior, i.e. the landing page selection. 

:::note
For the _onSuccess_ event for loginAction to take precedence over this default handler, you need to uncheck the useDefaultSuccessHandler.
:::

**loginAction** takes as **parameters** - username, password and remember me. These fields are bound to the respective widget values in the default login page. The **username and password** values as entered by the user are matched against the values from the security provider configuration. 

**Remember Me**, when selected by the user, retains the session details and has a default expiry/lifetime cookie. This cookie is valid for 15 days or the user explicitly signing-out out of the application whichever comes first.

:::note
Re-run of the application while testing creates a new session and as such the cookies are not retained.
:::

For more information, see [Remember Me](/learn/app-development/app-security/remember-me).

## `logoutAction`
**logoutAction** is invoked when the user logs-out of the application. Of interest is the **Redirect To** property, which by default is set to the login page but can be changed to any other page in your application.

