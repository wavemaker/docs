---
title: "Mobile Build - Phonegap"
id: ""
---

The **Build** process for a mobile application can be performed through Automated Build process where you can generate .apk (Android application package) or .ipa file (iOS App Store package). Another way is to download Cordova/PhoneGap compatible .zip files to build systems manually for Android/iOS platforms.

WaveMaker Studio supports you to build mobile applications in the following ways:

- **[Build for Android](/learn/hybrid-mobile/mobile-build-android/)**: Through this build, you can generate APK files which can be signed and hosted on PlayStore.
- **[Send to PhoneGap](#phonegap)**: Through this build, it provides you a complete package of building both apk/ipa files for Android and iOS platforms.
- **[Manual Build](/learn/hybrid-mobile/mobile-build-manual)**: Through this build, you can generate or download a .zip file which can be further developed to be hosted on any mobile platform.

# Send to PhoneGap

PhoneGap build option provides a complete package of building .apk and .ipa files for Android and iOS platforms respectively.

[PhoneGap](http://phonegap.com/) is a distribution of Apache Cordova. You can think of Apache  Cordova as the engine that powers PhoneGap, similar to how WebKit is the engine that powers Chrome or Safari. The advantage of PhoneGap build system is it builds for both Android/iOS platforms effortlessly with the only prerequisite of having an account at [PhoneGap Build System](https://build.phonegap.com/).

### Steps to build using PhoneGap:

To perform a **PhoneGap Build**, using the Workspace Toolbar from **Build** task select **Send to PhoneGap. **

[![](./assets/mobile_build.png)](./assets/mobile_build.png) Build through PhoneGap is a three-step process:

1. Build Configuration:
    - The properties for PhoneGap are same as Android. Refer to [Android Build](/learn/hybrid-mobile/mobile-build-android/#android).
    - **iOS Preferences**: These properties define the app behavior on the device. You have the option to
        - select the Minimum Target iOS Version;
        - enable or disable iOS File Sharing option - enabling would render the app files visible in iTunes for export (post ver 9.3);
        - enable or disable iOS Prerendered icon before page load and
        - change iOS Status Bar Style with available options in the drop-down menu.
    - **iOS App Icons and Splash Screens**: These properties allow you to define platform specific icons. You can select or edit the icons and splash screens as per your device type and screen resolution. After configuring the required properties, click **Next.**
2. Login to PhoneGap:
    - Enter your PhoneGap account credentials. **Note:** Make sure you have Adobe account credentials.
    - On successful login, PhoneGap Configuration is the next step.
3. PhoneGap Configuration: This step allows you to configure the platform and build settings.
    - Select the Android and iOS platform keys as required. For Playstore release and for iOS builds keys are mandatory. (**Note: **You  must setup the keys prior to the build in your PhoneGap account and make sure they are unlocked) Refer to the documentation for [iOS Keys](http://docs.phonegap.com/phonegap-build/signing/ios/) and [Android Keys](http://docs.phonegap.com/phonegap-build/signing/android/).
    - For testing purposes, you can specify PhoneGap build settings such as [Hydration](http://docs.build.phonegap.com/en_US/3.1.0/tools_hydration.md.html#Hydration), [Debugging](http://docs.build.phonegap.com/en_US/3.1.0/debugging_remote_debugging_tools.md.html#Remote%20Debugging%20Tools) and Public Sharing by checking the box.
    - **Done **will initiate the build sequence in which WaveMaker first prepares PhoneGap compatible project structure then send the zip to your account for the build. Once the build starts on PhoneGap build system user shown the pop-up message showing that build has been queued and user can check the status at their PhoneGap account
    - Click **Check Status, **it leads to your PhoneGap account and displays the build status of your application. [![](./assets/PhoneGap_Adobe_Build.png)](./assets/PhoneGap_Adobe_Build.png)
    - From your PhoneGap account, you can now download the .apk or .ipa files. See the build details such as **app id,** **version, ****source** and also **update code**,  **rebuild the app** and **access the log file. **

B.3 Platform Installer

- 3.1 Test Run (Preview)
    - [i. App Preview](/learn/hybrid-mobile/test-run/#preview)
    - [iii. Debugging Mobile Apps](/learn/hybrid-mobile/debugging-mobile-apps/)
        - [○ on Android](/learn/hybrid-mobile/debugging-mobile-apps/#android)
        - [○ on iOS](/learn/hybrid-mobile/debugging-mobile-apps/#ios)
    - [iv. Testing using Wavelens](/learn/hybrid-mobile/testing-hybrid-mobile-apps-using-wavelens/)
- [3.2 Mobile Build](#)
    - [i. Android Build](/learn/hybrid-mobile/mobile-build/#android)
    - [ii. Send to PhoneGap](#)
    - [iii. Manual build - Using cordova zip](/learn/hybrid-mobile/mobile-build-manual/#manual)
