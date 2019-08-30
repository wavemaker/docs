---
title: "Debugging Mobile Apps"
id: ""
---

Wavemaker uses Cordova platform to build hybrid mobile apps. While Cordova handles the native JavaScript API binding, WaveMaker handles the core app logic and UI. A mobile app built using WaveMaker runs in a web view (equivalent to a web browser). How to debug the web view layer is explained below.

## Debugging on Android

**Requirements**

- Android Mobile
- An App (to debug) built on Cordova
- Desktop/laptop with chrome browser

**Enable USB debugging in Android (one-time setup)**

- On your android mobile, go to Settings > Security. Enable ‘Unknown sources: Allow installation of apps from unknown sources’ [![](../assets/debug_andoid_1.png)](../assets/debug_andoid_1.png)
- Go to Settings > About Phone. In ‘About Phone’ page, click on build number for 7 times to enable developer options. [![](../assets/debug_andoid_2.png)](../assets/debug_andoid_2.png)
- Go to Settings > Developer Options. Enable USB debugging. [![](../assets/debug_andoid_3.png)](../assets/debug_andoid_3.png)

**Debugging mobile app**

- Open the app on mobile and connect mobile to a desktop with a USB cable.
- On the desktop, open a chrome browser and go to ‘chrome://inspect#devices’. All available apps for debugging are shown on that page. [![](../assets/debug_andoid_4.png)](../assets/debug_andoid_4.png)
- Click on inspect link that appears below to your app.Chrome debugging tools will open and you can debug the app. [![](../assets/debug_andoid_5.png)](../assets/debug_andoid_5.png)

## Debugging on IOS

**Requirements**

- iPhone
- Mobile app built on Cordova
- MacBook (or Mac Pro or Mac Mini) with safari browser

**Enable Safari Web Inspector (one-time setup)**

- On iPhone
    - Open Settings and Tap on Safari [![](../assets/debug_ios_1.png)](../assets/debug_ios_1.png)
    - In Safari Settings, Tap on Advanced [![](../assets/debug_ios_2.png)](../assets/debug_ios_2.png)
    - Turn on Web Inspector. [![](../assets/debug_ios_3.png)](../assets/debug_ios_3.png)
- On MacBook
    - Open Safari browser > preferences [![](../assets/debug_ios_4.png)](../assets/debug_ios_4.png) [![](../assets/debug_ios_5.png)](../assets/debug_ios_5.png)
    - Go to Advanced and check on ‘Show Develop Menu in menu bar’ [![](../assets/debug_ios_6.png)](../assets/debug_ios_6.png)

**Debugging Mobile App**

- Open the app to debug on iPhone.
- Connect iPhone to a MacBook with a USB cable.
- Open Safari in a MacBook, and click on ‘Develop’ menu. [![](../assets/debug_ios_7.png)](../assets/debug_ios_7.png)
- Under Develop menu, all connected devices (iPhone) are listed.Under each Device sub-menu, all apps available to debug in that device are listed. [![](../assets/debug_ios_8.png)](../assets/debug_ios_8.png)
- Click on the app’s page to open the debugger. [![](../assets/debug_ios_9.png)](../assets/debug_ios_9.png)

B.3 Platform Installer

- [3.1 Test Run (Preview)](#)
    - [i. App Preview](/learn/hybrid-mobile/test-run/#preview)
    - [iii. Debugging Mobile Apps](#)
        - [○ on Android](#android)
        - [○ on iOS](#ios)
    - [iv. Testing using Wavelens](/learn/hybrid-mobile/testing-hybrid-mobile-apps-using-wavelens/)
- 3.2 Mobile Build
    - [i. Android Build](/learn/hybrid-mobile/mobile-build/#android)
    - [ii. Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/#phonegap)
    - [iii. Manual build - Using cordova zip](/learn/hybrid-mobile/mobile-build-manual/#manual)
