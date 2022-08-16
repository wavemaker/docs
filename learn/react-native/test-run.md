---
title: "Test Run (Preview)"
id: "test-run"
---
---

Once the design and building an app is completed, it needs to be tested. The easiest way to test an application is to click the **Preview** button from the Project Workspace. When you click **Preview,** you get a URL for the web application that can be accessed by anyone in your network (e.g., by anyone inside your network firewall).

[![](/learn/assets/preview_icon.png)](/learn/assets/preview_icon.png)

## Using Preview

**Preview** is recommended only for test or trial purposes as the application is deployed to the WaveMaker server provided with WaveMaker. When you stop WaveMaker, using the WaveMaker console, the application stops too.

### How to use Preview mode

- Click **Preview** will run the application in a new browser window.
- An **Application Preview** will be displayed, where one can select the **target device** to run the app. This will give you an idea of how the app looks on various devices like various phone sizes.
- **QR code** is also displayed which cannot be used to access the app on a mobile device. 

[![](/learn/assets/preview.png)](/learn/assets/preview.png)

You can refer [this](/learn/react-native/expo-debug) for more details to preview on device.

## Application Runtime

The application will use react-native runtime. Debugging the preview from the chrome debug inspector is different. Refer [this](/learn/react-native/web-preview-debug) for detailed explaination.
