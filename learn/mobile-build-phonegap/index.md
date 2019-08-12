---
title: "Mobile Build - Phonegap"
date: "2016-12-08"
---

process for a mobile application can be performed through Automated Build process where you can generate .apk (Android application package) or .ipa file (iOS App Store package). Another way is to download Cordova/PhoneGap compatible .zip files to build systems manually for Android/iOS platforms.

WaveMaker Studio supports you to build mobile applications in the following ways:

- **[for Android](/learn/hybrid-mobile/mobile-build-android/)**: Through this build, you can generate APK files which can be signed and hosted on PlayStore.
- **[to PhoneGap](#phonegap)**: Through this build, it provides you a complete package of building both apk/ipa files for Android and iOS platforms.
- **[Build](/learn/hybrid-mobile/mobile-build-manual)**: Through this build, you can generate or download a .zip file which can be further developed to be hosted on any mobile platform.

# to PhoneGap

build option provides a complete package of building .apk and .ipa files for Android and iOS platforms respectively.

[](http://phonegap.com/)a distribution of Apache Cordova. You can think of Apache  Cordova as the engine that powers PhoneGap, similar to how WebKit is the engine that powers Chrome or Safari. The advantage of PhoneGap build system is it builds for both Android/iOS platforms effortlessly with the only prerequisite of having an account at [Build System](https://build.phonegap.com/)

### to build using PhoneGap:

perform a **Build**, using the Workspace Toolbar from  task select **to PhoneGap. **

[![](../assets/mobile_build.png)](../assets/mobile_build.png) Build through PhoneGap is a three-step process:

1. Configuration:
    - properties for PhoneGap are same as Android. Refer to [Build](/learn/hybrid-mobile/mobile-build-android/#android)
    - **Preferences**: These properties define the app behavior on the device. You have the option to
        - the Minimum Target iOS Version;
        - or disable iOS File Sharing option - enabling would render the app files visible in iTunes for export (post ver 9.3);
        - or disable iOS Prerendered icon before page load and
        - iOS Status Bar Style with available options in the drop-down menu.
    - **App Icons and Splash Screens**: These properties allow you to define platform specific icons. You can select or edit the icons and splash screens as per your device type and screen resolution. After configuring the required properties, click
2. to PhoneGap:
    - your PhoneGap account credentials. **:** Make sure you have Adobe account credentials.
    - successful login, PhoneGap Configuration is the next step.
3. Configuration: This step allows you to configure the platform and build settings.
    - the Android and iOS platform keys as required. For Playstore release and for iOS builds keys are mandatory. (**: **  must setup the keys prior to the build in your PhoneGap account and make sure they are unlocked) Refer to the documentation for [Keys](http://docs.phonegap.com/phonegap-build/signing/ios/) and [Keys](http://docs.phonegap.com/phonegap-build/signing/android/)
    - testing purposes, you can specify PhoneGap build settings such as [](http://docs.build.phonegap.com/en_US/3.1.0/tools_hydration.md.html#Hydration), [](http://docs.build.phonegap.com/en_US/3.1.0/debugging_remote_debugging_tools.md.html#Remote%20Debugging%20Tools)Public Sharing by checking the box.
    - initiate the build sequence in which WaveMaker first prepares PhoneGap compatible project structure then send the zip to your account for the build. Once the build starts on PhoneGap build system user shown the pop-up message showing that build has been queued and user can check the status at their PhoneGap account
    - **Status, ** leads to your PhoneGap account and displays the build status of your application. [![](../assets/PhoneGap_Adobe_Build.png)](../assets/PhoneGap_Adobe_Build.png)
    - your PhoneGap account, you can now download the .apk or .ipa files. See the build details such as **id,** **, ** and also **code**,   **the app**   **the log file.**

3 Platform Installer

- 3.1 Test Run (Preview)
    - [App Preview](/learn/hybrid-mobile/test-run/#preview)
    - [Debugging Mobile Apps](/learn/hybrid-mobile/debugging-mobile-apps/)
        - [on Android](/learn/hybrid-mobile/debugging-mobile-apps/#android)
        - [on iOS](/learn/hybrid-mobile/debugging-mobile-apps/#ios)
    - [Testing using Wavelens](/learn/hybrid-mobile/testing-hybrid-mobile-apps-using-wavelens/)
- [3.2 Mobile Build](#)
    - [Android Build](/learn/hybrid-mobile/mobile-build/#android)
    - [Send to PhoneGap](#)
    - [Manual build - Using cordova zip](/learn/hybrid-mobile/mobile-build-manual/#manual)
