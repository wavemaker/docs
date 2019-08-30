---
title: "Test Run (Preview)"
id: ""
---

Once the design and building an app is completed, it needs to be tested. The easiest way to test an application is to click the **Preview **button from the Project Workspace. When you click **Preview, **you are given an URL for the web application that can be accessed by anyone in your network (e.g., by anyone inside your network firewall).

[![](../assets/preview_page_mobile.png)](../assets/preview_page_mobile.png)

**Preview** is recommended only for test or trial purpose as the application is deployed to the WaveMaker server provided with WaveMaker. When you stop WaveMaker, using the WaveMaker console, the application stops too. Using the WaveLens app, you can test run the hybrid mobile apps directly using any smartphone.

- Click **Preview **will run the application in a new browser window.
- An **Application Preview** will be displayed, where one can select the **target device** to run the app. This will give you an idea of how the app looks on various devices like various phone sizes.
- **QR code** is also displayed which can be used to access the app on a mobile device with ease. You can choose to remove this preview toolbar if not needed. [![](../assets/app_preview_mobile.png)](../assets/app_preview_mobile.png)

**Application Runtime** The application will then open with a URL in the following format: _https://www.wavemakeronline.com/unique-id/app-name/login.html#/login_ Here are the elements of the generated URL:

- **www.wavemakeronline.com**: URL of WaveMaker Cloud where applications are hosted.
- **unique-id**: Name of the application space that you provide while registration. It is unique to a user.
- **app-name**: Name of your application, which is the same as the name of your WaveMaker project. You can change this by setting the _context root_ parameter during the application deployment
- **login.html**: A default start page for applications with security enabled. If you are not using security, this will not be part of the URL. Instead, your URL would be._https://www.wavemakeronline.com/unique-id/app-name/#/Main_

As long as your project is running in WaveMaker Studio, it will be available to other users. If you close the project or log out of WaveMaker Studio, it will become unavailable. When you open a new project within WaveMaker Studio the current project is closed.

B.3 Platform Installer

- [3.1 Test Run (Preview)](#)
    - [i. App Preview](#)
    - [iii. Debugging Mobile Apps](/learn/hybrid-mobile/debugging-mobile-apps/)
        - [○ on Android](/learn/hybrid-mobile/debugging-mobile-apps/#android)
        - [○ on iOS](/learn/hybrid-mobile/debugging-mobile-apps/#ios)
    - [iv. Testing using Wavelens](/learn/hybrid-mobile/testing-hybrid-mobile-apps-using-wavelens/)
- 3.2 Mobile Build
    - [i. Android Build](/learn/hybrid-mobile/mobile-build/#android)
    - [ii. Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap/#phonegap)
    - [iii. Manual build - Using cordova zip](/learn/hybrid-mobile/mobile-build-manual/#manual)
