---
title: "Remember Me"
id: "remember-me"
---
---
Remembers me retains the session details and has a default expiry/lifetime cookie. This cookie is valid for 15 days or the user explicitly signing-out out of the application whichever comes first.

## How it works
If user login with “remember me” checked in the application’s login page, the system will create & store a “remember me” cookie in the requested browser. Subsequent attempts to open the application with a valid “remember me” cookie will automatically allows the user to be logged-in into the application without asking for credentials again.

Remember-Me is all about automated login to take place in your application by adding “remember me” cookie in the request header.

## Remember-Me in WaveMaker Apps

- Remember-Me feature will be enabled by default if the security is enabled in the WM application. 
- While login into the application the authentication request will send the `j_rememberme` parameter with a value “true/on” to enable the remember me for that user/request.
- After successful authentication, WM application will send a remember cookie with name `remember-me` if remember_me is requested by the user. The cookie value is uniquely identifies the user on subsequent attempts. 
- WM Application validate the remember me cookie with respect to username and cookie expiry.

[![remember-me-login](/learn/assets/remember-me-login.png)](/learn/assets/remember-me-login.png)

### Request with j_rememberMe enabled

[![remember-me-login](/learn/assets/j_rememberme-enabled.png)](/learn/assets/j_rememberme-enabled.png)

## Remember Me Configuration

The following properties can be configured for each application.

### Enable or Disable Remember Me support
Remember-me functionality is enabled by default, it can be turned off by updating the auth-info.json and also the profile properties files.

### Expiry Interval
The default expiry/lifetime for all remember me cookies is 15 days from it’s creation. The expiry value can be changed by updating the auth-info.json and also the profile properties files.

[![remember-me-configuration](/learn/assets/remember-me-configuration.png)](/learn/assets/remember-me-configuration.png)

## Remember Me Cookie Expiry 
The cookie is valid for 15 days or user explicitly signing-out out of the application whichever comes first.

## Limitations
This feature works only for **Demo, Database** and **LDAP** security providers. 