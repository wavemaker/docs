---
title: "WavePulse"
id: "wave-pulse"
sidebar_label: "WavePulse"
---
---

WavePulse is a feature in WaveMaker, a low-code development platform, designed to provide real-time diagnostics for applications. It helps developers and administrators ensure that their applications are running smoothly by offering insights into various metrics and logs.

WavePulse is particularly useful for maintaining high-performance applications, ensuring stability, and providing end-users with a seamless experience. It enhances the process of debugging by allowing you to debug the APK or IPA file of an application without the need of using or sharing any confidential or excess information.

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

## Debugging Application

Debugging is the process of identifying, analyzing, and resolving issues in an application. This step makes sure that the application functions as expected. WavePulse allows you to debug the APK or IPA file of an application on a mobile device where the application details required for debugging can be viewed in the web browser.

![Debugging Architecture](/learn/assets/debug-architecture.png)

To debug, you need to generate the APK or IPA file using the React Native zip file. These steps are carried on two platforms.

- **WaveMaker Studio**: [To generate the APK or IPA file](#generating-apk-or-ipa-file-to-debug).
- **Browser and Mobile Device**: [To test and debug the APK or IPA file in WavePulse](#testing--debugging-in-wavepulse).

## Generating APK or IPA File in WaveMaker Studio

An application can be debugged using the APK or IPA file. To get the APK or IPA that can be debugged using the WavePulse,

- Enable the WavePulse in the application created in the WaveMaker studio.
- Generate APK or IPA file using the React Native zip file.

### Enable the WavePulse in the application

- Go to File Explorer.
- Navigate to **src/main/webapp/wm_rn_config.json** to find the **wm_rn_config.json** file.
- Inside wm_rn_config.json. set	`enableWavePulse` as true. Click Save. This enables the WavePulse in the application.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/ppStvsxdQmjNLobnFxCwm8"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Generate APK or IPA file using the React Native Zip file

APK for Android and IPA for iOS can be generated using React Native zip file that is a package of project data. To know the process of generating APK and IPA file, see [Mobile Manual Build Process](https://docs.wavemaker.com/learn/react-native/mobile-build-manual).

## Testing & Debugging in WavePulse

In the debugging process, two platforms can be used,

- **Web Browser**: First, to open the WavePulse web application.
- **Mobile Device**: Second, to open the APK or IPA file that needs to be debugged.

Application can be viewed in the mobile device and the connection is established with WaveMaker web application opened in the browser. With this connection, you can record and view debugging session associated with the actions performed in the application.

### Establishing Connection between Web Browser and Mobile Device for debugging

A connection between the WavePulse web application, opened on web browser, and the APK or IPA file, opened on mobile device, is established.

You can directly navigate to any component or page in the application on the mobile device and view logs, network calls, timelines, and other details about the selected component in the debug session opened in WavePulse.

Follow the steps below to establish the connection:

:::note
When using any private network with restrictions, ensure that the mobile device can access WavePulse web application in your network.
:::

1. Open WavePulse web application and enter the application ID that is unique to every application. This confirms that the required application is launched for debugging.
2. Go to mobile device and install the APK/IPA file if not installed already.

:::note
It is necessary to close the application before scanning the QR code.
:::

3. Scan the QR code generated in the WavePulse web application. Alternatively, you can open the link provided under the QR code to launch the application in debug mode.
4. Grant permission to connect the mobile application to the debugging session in WavePulse. Once connected, you can view the debugging session in WavePulse.

<iframe width="560" height="315" src="https://www.loom.com/embed/5a33a17aa6694c6d81c150a153e647a0?sid=c733abf1-a7ca-4c6d-a487-e1944dd1e5f8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
