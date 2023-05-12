---
title: "Build React Native app installers using AppChef"
sidebar_label: "Build Installers"
id: "build-installers"
---
---

AppChef builds app installers, including APK and IPA using a ReactNative zip or Cordova zip of the application, which can be exported from the WaveMaker Studio. The generated APK or IPA can be used for testing or can be uploaded to the Play Store and App Store for distribution. 

## Prerequisite to Build using AppChef

To perform a Build using AppChef, you should have the application React Native zip. WaveMaker provides you an option to export your mobile application to React Native. For more information, see [download Cordova zip](https://docs.wavemaker.com/learn/hybrid-mobile/mobile-build-manual#how-to-export-cordova-zip).

Go to the Appchef application using the URL below:

[https://www.wavemakeronline.com/AppChef/#/Main](https://www.wavemakeronline.com/AppChef/#/Main)

1. To log in, click **Login with WaveMaker**.

![mobile-build-appchef-login-screen](/learn/assets/mobile-build-appchef-login-screen.png)

2. Click the option **Create React Native build**, shown next to **Create Cordova Build**.

![mobile-build-appchef-native-build-option](/learn/assets/mobile-build-appchef-native-build-option.png)

## Steps to build using AppChef


To Build with AppChef, follow the three-step process as described below.

- [Prerequisite to Build using AppChef](#prerequisite-to-build-using-appchef)
- [Steps to build using AppChef](#steps-to-build-using-appchef)
  - [Upload React Native Zip](#upload-react-native-zip)
  - [Configure AppInfo](#configure-appinfo)
  - [Configure Build](#configure-build)
  - [About AppChef](#about-appchef)

### Upload React Native Zip

Click on create React Native build option, drag and drop or browse your files to upload Cordova zip.

![mobile-build-appchef-upload-native-zip](/learn/assets/mobile-build-upload-react-native-zip.png)

### Configure AppInfo

1. After successfully uploading, AppInfo pre-populates from your uploaded React Native zip. You can modify them as needed.

2. Click **Next** to configure the Build options.

![mobile-build-appchef-app-info-zip](/learn/assets/mobile-build-appchef-appInfo-rn.png)

### Configure Build

In this step, you can provide a distribution profile and choose the certificates of the profile respectively.

Follow the steps to configure build: [AppChef Mobile Build - Configure Build](/learn/hybrid-mobile/mobile-build-appchef#configure-build).

### About AppChef

[AppChef Mobile Build](/learn/hybrid-mobile/mobile-build-appchef)  
[Manage, Secure or Upload Certificates](/learn/hybrid-mobile/mobile-build-appchef#manage-or-upload-certificates)  
[Checking Status of the Submitted Build Request](/learn/hybrid-mobile/mobile-build-appchef#checking-status-of-the-submitted-build-request)

