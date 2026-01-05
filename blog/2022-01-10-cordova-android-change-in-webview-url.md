---
title: "URL Change in WaveMaker Android WebView"
author: Srinivasa Rao Boyina
---
---

In WaveMaker 10.10, Cordova-android is upgraded to 10.1.0. With that change, it is observed that third-party cookies are not getting stored on the WebView. Cookies are required for WaveMaker authentication. So, a plugin **[wm-cordova-plugin-advanced-http](https://www.npmjs.com/package/wm-cordova-plugin-advanced-http)** was used to make ajax calls instead of browser XHR. Following are the drawbacks of using the plugin.

- All network calls are logged into the console of chrome dev tools instead of the network tab.
- There are gaps between plugin API and XmlHttpRequest. Some of these gaps are addressed in the WaveMaker platform to make it work in WaveMaker without any changes in the existing code.

In WaveMaker 10.11, another method is implemented to solve the cookie problem.

<!--truncate-->

## Method

[Cordova allows developers to set the hostname](https://cordova.apache.org/announcements/2021/07/20/cordova-android-10.0.0.html) through preference in config.xml. 'localhost' is the default hostname. Using this hostname preference, WaveMaker platform automatically sets the server path's (given in export Cordova zip dialog) domain as the hostname. This is done during Cordova zip export. Thus, all cookies from the server path become first-party cookies, and WebView is allowing them to be stored.


## Changes needed from the Developer

By default, this methodology gets implemented in all projects. If the hostname preference is mentioned in config.xml under the Android platform, then WaveMaker does not apply this change and fallback to plugin usage. No changes are required from the WaveMaker developer.

## Changes to note

In Android Apps, location.href now has the server domain as the host. All local app files are served at path **https://${server_domain}/_www**.

## Additional Info

As iOS does not allow to set scheme as HTTP/HTTPS, this same methodology does not work for iOS. So, the plugin is still being used in iOS for marking AJAX calls. 