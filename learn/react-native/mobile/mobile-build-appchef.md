---
title: "Mobile Build - AppChef"
id: "mobile-build-appchef"
---
---

AppChef builds app installers including APK and IPA from a Cordova zip that can be exported from the WaveMaker Studio. Thus, generated APK or IPA, can be used for testing or can be uploaded to the Play Store and App Store for distribution. 

## Prerequisite to build using AppChef

To perform a Build using AppChef, you should have the application Cordova zip.
WaveMaker provides an option to export your mobile application to a Cordova zip. For more information, see [download cordova zip](/learn/hybrid-mobile/mobile-build-manual#how-to-export-cordova-zip).

Using the Workspace Toolbar from Build task select **Open AppChef**. It will navigate you to the AppChef application.

![mobile-build-appchef-studio-option.png](/learn/assets/mobile-build-appchef-studio-option.png)

To login, click **Login with WaveMaker**

![mobile-build-appchef-login-screen](/learn/assets/mobile-build-appchef-login-screen.png)

If there are no builds, a dialog will be shown to choose between Read documentation or Create new build.
    
![mobile-build-appchef-startup-dialog.png](/learn/assets/mobile-build-appchef-startup-dialog.png)

## Steps to build using AppChef

Build through AppChef is a three-step process, as described below.
1. Upload Cordova zip
2. Configure AppInfo
3. Configure Build

### Upload Cordova zip

Click on create new build option, drag and drop or browse your files to upload cordova zip.

![mobile-build-appchef-upload-cordova-zip](/learn/assets/mobile-build-appchef-upload-cordova-zip.png)

### Configure AppInfo

1. After Successful upload, AppInfo will be pre-populated from your uploaded cordova zip. You have options to modify them to your choice.

2. Click Next to configure the Build options.

![mobile-build-appchef-appInfo](/learn/assets/mobile-build-appchef-appInfo.png)

### Configure Build

In this step, you can provide a distribution profile and choose certificates of the profile respectively.

![mobile-build-appchef-buildconfig](/learn/assets/mobile-build-appchef-buildconfig.png)

| Options | Description |
|---|---|
|Cordova | This is the cordova version that is required by the uploaded app. This cannot be modified.|
|Build Type | There are two options, 1) Development and 2) Production. Choose ‘Development’ to create a debuggable app -- typically for testing. Choose ‘Production’ to create an apk or ipa to distribute on play store or app store.|
|Cordova IOS | This is the cordova-ios version that is required by the uploaded app. This cannot be modified.|
|IOS Certificate | In this option, either you have to choose already uploaded certificates or you can [upload a new one](#manage-or-upload-certificates). Choose the right certificate that supports ‘Build Type’ selected.|
|Cordova Android | This is the cordova-android version that is required by the uploaded app. This cannot be modified|
|Android Certificate | In this option, A default  _DEBUG certificate is available to generate an android application. _DEBUG certificate can only support ‘Development’ build type. You can either choose already uploaded certificates or you can [upload a new one](#manage-or-upload-certificates). Choose the right certificate that supports ‘Build Type’ selected.|
|Android Package | This option will be visible only if Android certificate is selected. This dropdown has only two options (aab and apk). If the build type is development, then Android package is set as apk. If the build type is production, then Android package is set as aab. Users can override the default behaviour with their choice.|

Provide the required options and click Save and Build to start building the application.

:::note
Uploaded certificates password will be cleared after every 24 hours, you need to provide password whenever prompted. To know more, click [here](#securing-certificates)
:::


## Manage or Upload Certificates

During the build process, i.e., in the last step of the build, there is an Add icon to upload certificates for Android and iOS . Dialog will be shown specific to store android and iOS certificates.

![mobile-build-appchef-upload-certificate-option](/learn/assets/mobile-build-appchef-upload-certificate-option.png)

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

To secure the uploaded certificates, passwords will be saved in encrypted format. A Certificate with password is in unlocked state and builds can
 only be triggered with unlocked certificates. Certificates will get automatically locked after 24 hours of unlocking, To unlock the certificate you have to
  provide password again.
 
A dialog will be shown to unlock certificate in two cases,

1. In configure build step, while uploading cordova zip
 
    For iOS, you need to enter certificate password

    ![/learn/assets/mobile-build-appchef-unlock-ios-certificate](/learn/assets/mobile-build-appchef-unlock-ios-certificate.png)

    For android, you need to enter Key password and Store password

    ![/learn/assets/mobile-build-appchef-unlock-android-certificate](/learn/assets/mobile-build-appchef-unlock-android-certificate.png)
 
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

To perform builds for the latest cordova zip of the existing application, you have an option to upload cordova zip and build info of the application will be shown in the application itself.

![mobile-build-appchef-submitted-build-options](/learn/assets/mobile-build-appchef-submitted-build-options.png)

:::note
Only the last 10 builds are shown under the Builds section. If build requests exceeds 10, a message will be shown to delete the existing builds.
:::

After the successful build, you can install the application in Android or iOS devices by scanning the QRcode which is located at the right corner as shown below.

![learn/assets/mobile-build-appchef-build-qrcodes](/learn/assets/mobile-build-appchef-build-qrcodes.png)

or, you can click on the platform (IOS, Android) under the build info to scan a particular build QRCode.

![/learn/assets/mobile-build-appchef-build-specific-qrcode](/learn/assets/mobile-build-appchef-build-specific-qrcode.png)
