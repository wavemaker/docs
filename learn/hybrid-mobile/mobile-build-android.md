---
title: "Mobile Build - Android"
id: "mobile-build-android"
---
---

The **Build** process for a mobile application can be performed through Automated Build process where you can generate .apk (Android application package) or .ipa file (iOS App Store package). Another way is to download Cordova/PhoneGap compatible .zip files to build systems manually for Android/iOS platforms.

WaveMaker Studio supports you to build mobile applications in the following ways:

- **[Build for Android](#android)**: Through this build, you can generate APK files which can be signed and hosted on PlayStore.
- [**Send to PhoneGap**](/learn/hybrid-mobile/mobile-build-phonegap/): Through this build, it provides you a complete package of building both apk/ipa files for Android and iOS platforms.
- **[Manual Build](/learn/hybrid-mobile/mobile-build-manual/)**: Through this build, you can generate or download a .zip file which can be further developed to be hosted on any mobile platform.

## Android Build

Android Build generates a debug version (DEV only) **.apk file** using Cordova Build System which can be installed on any Android phone. The build feature triggers a build request to the system and the file is generated. Once the .apk file is ready, it will be sent to the Developer’s email account.

For building a .apk file, **Mobile Configuration** needs to be set. Mobile Configuration can be set separately for each [pre-defined app configurations](/learn/app-development/deployment/configuration-profiles/) – DEV or PROD.

## Steps to perform an APK Build

To perform an **APK Build**, using the Workspace Toolbar from **Build** task select **Build for Android**.

[![](/learn/assets/mobile_build.png)](/learn/assets/mobile_build.png)

Before proceeding with Build, you need to set the following properties:

### Configuration Details

## Application Properties
- _Application Name_: By default, it is set to the name of the WaveMaker application. You can set the name different from the app name.
- _Server Path_: By default, it provides a server path where the app is being hosted. You can edit this field if you are hosting your app elsewhere like web server.
- _Application Information_: It displays information related to the app such as **Application ID** (by default, com._appname_), **Version** (by default, 0.0.1) and you can edit the fields as per your requirements.
- _Developer Information_: Provide details such as **Developer Name**, **Developer URL** and **Developer Email** (by default set to WaveMaker account email id).

## Plugins
You can see the list of native features used in the application. You drag and drop any mobile widget or use any device variable or functionality, the plugin is auto-selected and can be seen in Plugins section, thus ensuring app to access phone native features like Barcode scanner, Calendar, Camera, Contacts, File, Geolocation, Network and Vibrate.
        
From 8.4 release onwards, Plugins other than Standard Plugins can be added from "More Plugins". Provide the plugin name and plugin version to install the plugin in the project. 

:::note
If the custom plugin is not valid or deprecated, then the app may crash or fail to open. 
:::

Search for more plugins at npm ([https://www.npmjs.com/package/cordova-plugins](https://www.npmjs.com/package/cordova-plugins)) You can also add the Cordova plugins via GitHub URL.
        
## White Listings

Most mobiles block access to external websites for security reasons. If your app needs access to external websites these can be set in the URL Whitelist. Say you want to provide access to google resources to your app, in that case, the URL Whitelist would be http://\*.google.com/\* [See here for more details](https://github.com/apache/cordova-plugin-whitelist#navigation-whitelist). Intent can be used to specify any applications that would need to be launched through your app. [See here for more details](https://github.com/apache/cordova-plugin-whitelist#intent-whitelist)

## Android Preferences
These properties define the app behavior on the device. You have the option to select the Minimum Target Android Version from the drop down menu. Set the orientation of the screen to Portrait or Landscape and enable or disable Full Screen.

## Android Icon and Splash Screens
These properties allow you to define platform specific icons. You can select or edit the icons and splash screens as per your device type and screen resolution.

## Save and Build Configuration
    
- After giving all the required properties, **Save** the configuration properties for a future build.
- **Build** will display the status window and will trigger a build request to WaveMaker Build System, where we get the Cordova zip first and later generate the .apk file offline. Once the .apk file is ready, you will be receiving it through an email.

- For creating release apk to **Publish** on Playstore use [Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/) or [Manual Build](/learn/hybrid-mobile/mobile-build-manual/).

