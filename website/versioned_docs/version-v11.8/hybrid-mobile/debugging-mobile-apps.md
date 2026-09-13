---
title: "Debugging Mobile Apps"
id: "debugging-mobile-apps"
---
---

WaveMaker uses Cordova platform to build hybrid mobile apps. While Cordova handles the native JavaScript API binding, WaveMaker handles the core app logic and UI. A mobile app built using WaveMaker runs in a web view (equivalent to a web browser). How to debug the web view layer is explained below.

## Debugging on Android

### Requirements

- Android Mobile
- An App (to debug) built on Cordova
- Desktop/laptop with chrome browser

### Enable USB debugging in Android (one-time setup)

- On your android mobile, go to Settings > Security. Enable ‘Unknown sources: Allow installation of apps from unknown sources’  

    [![](/learn/assets/debug_andoid_1.png)](/learn/assets/debug_andoid_1.png)

- Go to Settings > About Phone. In ‘About Phone’ page, click on build number for 7 times to enable developer options.  

    [![](/learn/assets/debug_andoid_2.png)](/learn/assets/debug_andoid_2.png)

- Go to Settings > Developer Options. Enable USB debugging.  

    [![](/learn/assets/debug_andoid_3.png)](/learn/assets/debug_andoid_3.png)

### Debugging mobile app

- Open the app on mobile and connect mobile to a desktop with a USB cable.
- On the desktop, open a chrome browser and go to ‘chrome://inspect#devices’. All available apps for debugging are shown on that page. 

[![](/learn/assets/debug_andoid_4.png)](/learn/assets/debug_andoid_4.png)

- Click on inspect link that appears below to your app.Chrome debugging tools will open and you can debug the app. 

[![](/learn/assets/debug_andoid_5.png)](/learn/assets/debug_andoid_5.png)

## Debugging on IOS

### Requirements

- iPhone
- Mobile app built on Cordova
- MacBook (or Mac Pro or Mac Mini) with safari browser

### Enable Safari Web Inspector (one-time setup)
---
### On iPhone

- Open Settings and Tap on Safari 

[![](/learn/assets/debug_ios_1.png)](/learn/assets/debug_ios_1.png)

- In Safari Settings, Tap on Advanced 

[![](/learn/assets/debug_ios_2.png)](/learn/assets/debug_ios_2.png)

- Turn on Web Inspector. 

[![](/learn/assets/debug_ios_3.png)](/learn/assets/debug_ios_3.png)

### On MacBook

- Open Safari browser > preferences 

[![](/learn/assets/debug_ios_4.png)](/learn/assets/debug_ios_4.png) 

[![](/learn/assets/debug_ios_5.png)](/learn/assets/debug_ios_5.png)

- Go to Advanced and check on ‘Show Develop Menu in menu bar’ 

[![](/learn/assets/debug_ios_6.png)](/learn/assets/debug_ios_6.png)

### Debugging Mobile App

- Open the app to debug on iPhone.
- Connect iPhone to a MacBook with a USB cable.
- Open Safari in a MacBook, and click on ‘Develop’ menu. 

[![](/learn/assets/debug_ios_7.png)](/learn/assets/debug_ios_7.png)

- Under Develop menu, all connected devices (iPhone) are listed.Under each Device sub-menu, all apps available to debug in that device are listed. 

[![](/learn/assets/debug_ios_8.png)](/learn/assets/debug_ios_8.png)

- Click on the app’s page to open the debugger. 

[![](/learn/assets/debug_ios_9.png)](/learn/assets/debug_ios_9.png)