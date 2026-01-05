---
title: " WaveMaker platform is updated to use WKWebView."
author: Srinivasa Rao Boyina
---

## Problem 

Apple deprecated UIWebView and introduced WKWebView. Starting from April 1st, 2020, Apple stopped accepting all new apps that have references to UIWebView. From December 2020, Apple will stop accepting app updates that have references to UIWebView. The current version Cordova that is used in WaveMaker, uses UIWebView by default.

<!-- truncate -->

> WaveMaker allows creation of mobile applications by a simple drag and drop approach. [Click here to know more](/learn/hybrid-mobile/first-mobile-app).
  
## Solution
Cordova created a plugin called [cordova-plugin-wkwebview-engine](https://github.com/apache/cordova-plugin-wkwebview-engine). This plugin brings WKWebView of iOS into cordova. Due to its restrictions imposed by WKWebview, two problems araised.

 1. Cordova by default loads index.html using file:// scheme. WKWebView is blocking access from html page (loaded via file://) to files outside of application directory.
 2. UIWebView allowed CORS requests even if CORS is not enabled in the server. But, WKWebView blocks cross-origin requests unless CORS allowed by server. In WaveMaker, CORS is optional.
 3. It doesnot store cookies from third party domains (domains other than the domain that html file is loaded). WaveMaker uses Cookie based authentication.

[cordova-plugin-local-webserver](https://github.com/wavemaker/cordova-plugin-local-webserver) is a cordova plugin that serves the app files over http by hosting a server with in the app. This helps in resolving problem1.

[cordova-plugin-advanced-http](https://github.com/wavemaker/cordova-plugin-advanced-http) is a cordova plugin that provides API (instead of xhr) to make http calls to the remote server. Using this plugin API, a wrapper is created to replace XHR so that all existing XHR calls work as earlier. This plugin routes all requests through native layer that doesnot block cross-origin requests. This plugin also persist cookies from all domains and send them in appropriate requests. This plugin helps in resolving problem 2 and 3.

In addition to the above, Cordova framework and plugins may have references to UIWebView. Cordova team addressed these framework level changes in cordova-ios@5.1.0. They added a preference called 'WKWebViewOnly'. If this preference is set to 'true', then UIWebView references in the cordova framework are replaced with WKWebView. Out of all the plugins that are supported by WaveMaker, cordova-plugin-inappbrowser has UIWebView reference. cordova-plugin-inappbrowser removed those references in version 3.2.0. So, that plugin is upgraded to 3.2.0.

  
#### Developer Action Required
With WaveMaker 10.4 release, platform has no references to UIWebView. Developer has to make sure that all third party plugins (if any) also have no references to UIWebView in their code. If references are present, contact respective plugin-developer for a newer version of the plugin. 

## Known Issues

 1. cordova-ios@5.1.0 is not supported by build.phonegap.com. When publishing **new app**, ipa has to be created [manually](/learn/hybrid-mobile/mobile-build-manual). For all development builds (even for new) and distribution builds for app updates, phonegap service can still be used.
 2. While uploading a file, there is no pogress event avaiable in cordova-plugin-advanced-http plugin. Currently, a synthetic progress event is created which just mimics but doesnot corelate with the actual progress of operation.

## References

 1. Apache Cordova blog about using WKWebView. [https://cordova.apache.org/howto/2020/03/18/wkwebviewonly.html](https://cordova.apache.org/howto/2020/03/18/wkwebviewonly.html)
 2. Issue with WKWebView. [https://github.com/apache/cordova-plugin-wkwebview-engine/issues/56](https://github.com/apache/cordova-plugin-wkwebview-engine/issues/56)
 3. Cookie Issue with WKWebView. [https://bugs.webkit.org/show_bug.cgi?id=140205](https://bugs.webkit.org/show_bug.cgi?id=140205)
 4. Progress issue in cordova-plugin-advanced-http. [https://github.com/silkimen/cordova-plugin-advanced-http/issues/88](https://github.com/silkimen/cordova-plugin-advanced-http/issues/88)
