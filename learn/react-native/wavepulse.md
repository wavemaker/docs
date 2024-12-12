---
title: "WavePulse"
id: "wavepulse"
sidebar_label: "WavePulse"
---
---

WavePulse is a feature in WaveMaker, designed to provide real-time diagnostics for applications. It helps developers to ensure that their applications are running smoothly by offering insights into various metrics and logs.

WavePulse is particularly useful for maintaining high-performance applications, ensuring stability, and providing end-users with a seamless experience. It enhances the process of debugging by allowing you to debug the APK or IPA file of an application without the need of using or sharing any confidential information like source code or excess information.

To access WavePulse, [click here](https://apps.wavemakeronline.com/wavepulse/client).

### Key Features

- **Easy Debug using IPA and APK**: Uses IPA or APK file to debug rather than using the React Native Zip file of an application.
- **Quick and Simple Setup**: Simplifies the process of setup as it requires only one tool, WavePulse and few steps to get started with it.
- **Debugging on Real Devices**: Debugging can be done on any device given WavePulse is enabled in the application to be debugged.
- **Importing and Exporting Debugging Session**: Debugging session can be easily exported or imported using WavePulse without having to share any irrelevant or confidential information.
- **Viewing WaveMaker Specific Data**: WaveMaker specific component and other details can be easily viewed. User can find every detail at one place, like:
  - Console logs
  - Network
  - Element Tree with Properties and Styles
  - Timeline of various events
  - Storage
  - Info

## WavePulse Debug Architecture 

Debugging is the process of identifying, analyzing, and resolving issues in an application. This step makes sure that the application functions as expected. WavePulse allows you to debug the APK or IPA file of an application on a mobile device where the application details required for debugging can be viewed in the web browser.

![Debugging Architecture](/learn/assets/wavepulse-architecture.png)

The debugging architecture using WavePulse includes the following steps.

**Configuring APK/IPA File in WaveMaker Studio**

1. In WaveMaker studio, [enable WavePulse](#enable-wavepulse-in-application) 
2. [Generate APK or IPA file](#generate-apkipa-file-using-react-native-zip-file)

**Testing & Debugging in WavePulse**

3. Next for testing and debugging, open [WavePulse](https://apps.wavemakeronline.com/wavepulse/client) application.
4. In mobile device, download and install the APK or IPA file.

**Connection between Web Browser and Mobile Device**

5. Then establish [connection between WavePulse web application and mobile device by providing application ID](#connection-between-web-browser-and-mobile-device).
6. Using mobile device scanner, scan QR code to run the application.
7. Application is launched.
8. Now, the debug session of the application can be viewed in WavePulse.

## Configuring APK/IPA File in WaveMaker Studio

An application can be debugged using the APK or IPA file. To get the APK or IPA that can be debugged using the WavePulse,

- Enable the WavePulse in the application created in the WaveMaker studio. Also enable logs, if you want to view the console logs.
- Generate APK or IPA file using the React Native zip file.

:::warning
WaveMaker recommends enabling and using WavePulse only for pre-release builds. For builds already released, it is advised to disable WavePulse.
:::

### Enable WavePulse in Application

1. Go to File Explorer.
2. Navigate to **src/main/webapp/wm_rn_config.json** to find the **wm_rn_config.json** file.
3. Inside wm_rn_config.json. set	`enableWavePulse` and `enablelogs` as true. Click Save. This enables the WavePulse in the application and you can view console logs.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/ppStvsxdQmjNLobnFxCwm8"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Generate APK/IPA file using React Native Zip file

APK for Android and IPA for iOS can be generated using React Native zip file that is a package of project data. To know the process of generating APK and IPA file, you can either use

- [Mobile Manual Build Process](https://docs.wavemaker.com/learn/react-native/mobile-build-manual)
- [Build React Native app installers using AppChef](https://docs.wavemaker.com/learn/react-native/build-installers)

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/4aZwY1FHm872fwGw7h989b"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Testing & Debugging in WavePulse

In the debugging process, two platforms can be used,

- **Web Browser**: First, to open the WavePulse web application.
- **Mobile Device**: Second, to open the APK or IPA file that needs to be debugged.

### Connection between Web Browser and Mobile Device

A connection is established between WavePulse and Application to record and view debugging session associated with the actions performed in the application.

Follow the steps below to establish the connection:

:::note
When using any private network with restrictions, ensure that the mobile device can access WavePulse web application in your network.
:::

1. Open WavePulse web application and enter the application ID that is fetched from Settings > Build Preferences page.

2. Install the APK/IPA on your mobile device and close the app before scanning the QR code.
3. Scan the QR code in WavePulse or use the link below it to launch the app in debug mode.
4. Grant permission to connect the mobile application to the debugging session in WavePulse.

<iframe width="560" height="315" src="https://www.loom.com/embed/955c51e160a64230bf594aa35b7f5039?sid=e33b7e13-99df-4249-844a-f67cde42cab8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
