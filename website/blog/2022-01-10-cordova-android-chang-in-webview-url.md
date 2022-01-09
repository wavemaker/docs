---
title: "Change in URL in WaveMaker Android WebView"
author: Srinivasa Rao Boyina
---
---

In WaveMaker 10.10, cordova-android is updraded to 10.10.1. With that change, it is observed that third party cookies are not getting stored on the webview. Cookies are required for WaveMaker authentication. So, a plugin ([wm-cordova-plugin-advanced-http](https://www.npmjs.com/package/wm-cordova-plugin-advanced-http)) was used to make ajax calls instead of browser XHR. Following are the drawbacks in using the plugin.

- all network calls are logged into console of chrome dev tools (instead of network tab).
- There are gaps between plugin API and XmlHttpRequest. To make it work in WaveMaker without any changes in the existing code, some of these gaps are adressed in the WaveMaker platform.

In WaveMaker 10.11, another method is implemented to solve the cookie problem.

<!--truncate-->

## Method

[Cordova allows developers to set the hostname](https://cordova.apache.org/announcements/2021/07/20/cordova-android-10.0.0.html) through preference in config.xml. 'localhost' is the default hostname. Using this hostname preference, WaveMaker platform automatically sets the server path's (given in export cordova zip dialog) domain as the hostname. This is done during cordova zip export. Thus, all cookies from the server path become first party cookies and webview is allowing them to be stored.


## Changes needed from developer

By default, this methodology gets implemented in all projects. If the hostname preference is mentioned in config.xml under android platform, then WaveMaker doesnot apply this change and fallback to plugin usage. No changes are required from WaveMaker developer.

## Changes to note

In Android App, location.href now has the server domain as the host. All local app files are served at path **https://${server_domain}/_www**.

## Additional Info

As iOS does not allow to set scheme as http/https, this same methodology does not work for iOS. So, plugin is still being used in iOS for marking AJAX calls. 