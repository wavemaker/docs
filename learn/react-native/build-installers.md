---
title: "Build React Native app installers using AppChef"
sidebar_label: "Build Installers"
id: "build-installers"
---
---

AppChef builds app installers, APK and IPA, using a ReactNative zip of the application, which can be exported from the WaveMaker Studio. The generated APK or IPA can be used for testing or can be uploaded to the Play Store and App Store for distribution.

## Prerequisite to Build using AppChef

To perform a Build using AppChef, you should have application's React Native zip file. WaveMaker provides you an option to export your mobile application to React Native. For more information, see [download React Native zip](/learn/react-native/export-react-native-zip).

Go to the AppChef application using the URL below:

[https://www.wavemakeronline.com/AppChef/#/Main](https://www.wavemakeronline.com/AppChef/#/Main)

1. To log in, click **Login with WaveMaker**.

![mobile-build-appchef-login-screen](/learn/assets/mobile-build-appchef-login-screen.png)

2. Click **Create React Native build** to start the build process in AppChef.

![mobile-build-appchef-native-build-option](/learn/assets/mobile-build-appchef-native-build-option.png)

## Steps to build using AppChef

To Build with AppChef, follow the three-step process as described below.

- [Prerequisite to Build using AppChef](#prerequisite-to-build-using-appchef)
- [Steps to build using AppChef](#steps-to-build-using-appchef)
  - [Upload React Native Zip](#upload-react-native-zip)
  - [Configure AppInfo](#configure-appinfo)
  - [Configure Build](#configure-build)
- [Manage or Upload Certificates](#manage-or-upload-certificates)
  - [Securing certificates](#securing-certificates)
- [Checking status of the submitted build request](#checking-status-of-the-submitted-build-request)
  - [Application build stages](#application-build-stages)
  - [Application Build Actions](#application-build-actions)
  - [Manage the existing application](#manage-the-existing-application)

### Upload React Native Zip

Click on create React Native build option, drag and drop or browse your files to upload React Native zip.

![mobile-build-appchef-upload-native-zip](/learn/assets/mobile-build-upload-react-native-zip.png)

### Configure AppInfo

1. After successfully uploading, AppInfo pre-populates from your uploaded React Native zip. You can modify them as needed.

2. Click **Next** to configure the Build options.

![mobile-build-appchef-app-info-zip](/learn/assets/description-react-native.png)

### Configure Build

In this step, you can provide a distribution profile and choose certificates of the profile respectively.

![mobile-build-appchef-buildconfig](/learn/assets/certificate-upload.png)

| Options | Description |
|---|---|
|Build Type | There are two options, 1) Development and 2) Production. Choose ‘Development’ to create a debuggable app -- typically for testing. Choose ‘Production’ to create an apk or ipa to distribute on play store or app store.|
|IOS Certificate | In this option, either you have to choose already uploaded certificates or you can [upload a new one](#manage-or-upload-certificates). Choose the right certificate that supports ‘Build Type’ selected.|
|Android Certificate | In this option, A default  _DEBUG certificate is available to generate an android application. _DEBUG certificate can only support ‘Development’ build type. You can either choose already uploaded certificates or you can [upload a new one](#manage-or-upload-certificates). Choose the right certificate that supports ‘Build Type’ selected.|

Provide the required options and click Save and Build to start building the application.

:::note
You need to provide password whenever prompted as the uploaded certificates password gets cleared every 24 hours. To know more, click [here](#securing-certificates)
:::

## Manage or Upload Certificates

During the build process, i.e., in the last step of the build, there is an Add icon to upload certificates for Android and iOS. Dialog will be shown specific to store android and iOS certificates.

![mobile-build-appchef-upload-certificate-option](/learn/assets/add-icon-certificate-upload.png)

These are the options that are shown when you want to add an IOS certificate

![mobile-build-appchef-upload-ios-certificate](/learn/assets/mobile-build-appchef-upload-ios-certificate.png)

These are the options that are shown when you want to add an Android certificate

![/learn/assets/mobile-build-appchef-upload-android-certificate](/learn/assets/mobile-build-appchef-upload-android-certificate.png)

:::tip
You always have an option to check the uploaded certificates where you can add a new one, lock or unlock the certificate and delete the existing ones by opening the options from the application menu which is located at the right top corner.
:::

![mobile-build-appchef-application-menu](/learn/assets/mobile-build-appchef-application-menu.png)

![mobile-build-appchef-manage-certificates](/learn/assets/mobile-build-appchef-manage-certificates.png)



### Securing certificates

To secure the uploaded certificates, passwords will be saved in encrypted format. A Certificate with password is in locked state and builds can only be triggered with unlocked certificates. Certificates will get automatically locked after 24 hours of unlocking, To unlock the certificate you have to
  provide password again.
 
A dialog will be shown to unlock certificate in two cases,

1. In configure build step, while uploading React Native zip
 
    For iOS, you need to enter certificate password

    ![/learn/assets/mobile-build-appchef-unlock-ios-certificate](/learn/assets/unlock-ios-certificate-password.png)

    For android, you need to enter Key password and Store password

    ![/learn/assets/mobile-build-appchef-unlock-android-certificate](/learn/assets/key-store-password.png)
 
2. While re-queuing the build in an existing application.
  
   ![/learn/assets/mobile-build-appchef-unlock-ios-certificate-in-requeue.png](/learn/assets/mobile-build-appchef-unlock-ios-certificate-in-requeue.png)
  
   ![/learn/assets/mobile-build-appchef-unlock-android-certificate-in-requeue.png](/learn/assets/mobile-build-appchef-unlock-android-certificate-in-requeue.png)


## Checking status of the submitted build request

Once you click on save and build for an application, the build will be available in MyApps section. Open the application card and check the build info and status related to it. You can also delete the application card if it is not required.

:::note
Only a maximum of 25 applications can be built using AppChef. You can delete the applications that are not necessary.
:::

![mobile-build-appchef-myapps-dashboard](/learn/assets/mobile-build-appchef-myapps-dashboard.png)

These are the details that are shown for the submitted application.

![mobile-build-appchef-check-build-status-info](/learn/assets/mobile-build-appchef-check-build-status-info.png)

### Application build stages

Application build status has following stages

1. **Queued** -  Server is waiting for the worker to pick up the job.
2. **Processing** - Once a worker picks the job, status will be changed to processing.
3. **Success** - If build is successful from the server, status will be changed to success.
4. **Failed** - If build is failed from the server, status will be changed to failed.
5. **Timed-out** - If build time is more, status will be changed to timed-out and it is a failed job.
6. **Cancelled** - If build is cancelled using cancel option, status will be changed to cancelled.

### Application Build Actions
Every build has five actions. i.e.,

1. **Download the build log** - Build log is available for a failed and as well as for a successful job.
2. **Download artifact** - It has APK/IPA file, this option is available only for successful jobs
3. **Queue the build** - You can rebuild the application. this option is available for a successful or a failed job
4. **Cancel build** - Cancel build will cancel the job which is in progress, this option is available only for the job whose Queued or Processing.
5. **Delete build** - Delete the build, this option is available in all the stages of the build.

### Manage the existing application

To perform builds for the latest React Native zip of the existing application, you have an option to upload React Native zip and build info of the application will be shown in the application itself.

![mobile-build-appchef-submitted-build-options](/learn/assets/mobile-build-appchef-submitted-build-options.png)

:::note
Only the last 10 builds are shown under the Builds section. If build requests exceeds 10, a message will be shown to delete the existing builds.
:::

After the successful build, you can install the application in Android or iOS devices by scanning the QRcode which is located at the right corner as shown below.

![learn/assets/mobile-build-appchef-build-qrcodes](/learn/assets/mobile-build-appchef-build-qrcodes.png)

or, you can click on the platform (IOS, Android) under the build info to scan a particular build QRCode.

![/learn/assets/mobile-build-appchef-build-specific-qrcode](/learn/assets/mobile-build-appchef-build-specific-qrcode.png)


