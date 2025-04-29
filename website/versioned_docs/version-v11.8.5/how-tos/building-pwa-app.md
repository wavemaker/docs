---
title: "Enabling PWA - Beta"
id: "building-pwa-app"
sidebar_label: "Enabling PWA"
---
---

## What is PWA (Progressive Web Application)

PWA (Progressive Web Application) are web applications that provide a native mobile app experience. These applications combine great functionalities and enhanced user experience based on the browser's capabilities and work on any platform, including desktop and mobile devices. You can develop PWA using web technologies such as JavaScript, HTML, and CSS. 

WaveMaker web applications are already responsive and ready to be converted to Progressive Web App. In this document, learn how to turn any WaveMaker web application into a PWA.

## When to Use PWA vs. Mobile App

WaveMaker Studio allows you to create two types of projects: 

1. Web Application 
2. Mobile Application

PWA applies explicitly to web applications, allowing them to behave closer to native mobile apps. However, to list a mobile app on Google Play or App Store, you should create a Mobile application project instead.

### Advantages of Using PWA

PWAs have many features and benefits that make them more unique compared to traditional web and native apps, including:

- Fully responsive apps and compatible with browsers
- Connectivity independence
- App-like interface
- Push notifications
- Automatic updates
- More secure
- Discoverability and easy installation without going through app store approval cycles

These features make PWA unique from native mobile applications and provide more robust features on any platform using any device.

[![](/learn/assets/pwa/advantages.PNG)](/learn/assets/pwa/advantages.PNG)

## PWA Features Supported by WaveMaker

Currently, the following features are implemented in WaveMaker; that includes:

- Add to the home screen
- Offline capabilities - storing of application code on mobile 
- Push notifications

### Deploying a New Version of the App

**Understanding PWA**: When PWA is installed on a mobile device, the application's code, including JavaScript, CSS, and other artifacts, is stored and served from mobile file storage. Thus, it decreases the application startup time. 

**What happens when a new version is deployed**: WaveMaker build process configures the service worker manifest file to make this happen without having to do anything. When a new version of the web application is deployed on the cloud during the PWA startup, it performs the up-to-date check to verify if its cached contents are valid. If cached content is not valid, the new version of the deployed code is downloaded before starting the application.


### Prerequisites

You must enable SSL and deploy the application using a secure connection to work with PWA features. When developing your application in WaveMaker, go to Security dialog and enable SSL. Then make sure you deploy the application on a domain with a valid SSL certificate.

## Steps to Enable PWA Capabilities

Create a project, add the PWA flag, and set the value as “true”. For example, `app.pwa.enabled=true` from the corresponding profile properties file. 

- The default behavior of the PWA feature is disabled. Therefore, if the PWA flag is not set or not available, it is considered disabled.

:::note
This feature is under active development, and hence to enable it, you need to turn the feature flag on for every project.
:::

[![](/learn/assets/pwa/flagproperty.png)](/learn/assets/pwa/flagproperty.png)

- Deploy the app and launch the deployed app on any browser using the deployed URL.
- Once the app loads, an install icon shows up in the address bar of the browser.
- You can install the app by clicking on the icon highlighted below.

[![](/learn/assets/pwa/install.png)](/learn/assets/pwa/install.png)

- When you click the icon, a pop-up shows up, allowing you to install the application or cancel the installation.

[![](/learn/assets/pwa/installDialog.png)](/learn/assets/pwa/installDialog.png)

- After installing the application, the app opens up as a standalone application.

[![](/learn/assets/pwa/launchedApp.png)](/learn/assets/pwa/launchedApp.png)

### Enable PWA in Old Applications

To enable the PWA feature in old applications, along with the above step, i.e., enabling PWA flag, do the following.

- **Projects without Authentication enabled:** Add Manifest pattern in `project-security.xml`, i.e., add the following lines in the `project-security.xml` file.

```java 
<security:http pattern="/manifest.json" security="none"/>
<security:http pattern="/ngsw.json" security="none"/>
```

- **Projects with Authentication enabled:** Re-save the security config from the Studio, which would regenerate the `project-security.xml` with the manifest pattern.

## Steps to Set App Icon

When PWA is installed on a mobile device, the icon you provide for the app will show on the mobile home screen.

You can set the app icon as a user-provided icon for PWA in WaveMaker. Please find the steps below to add the app icon.

1. Create a folder named “PWA-icons” in the root directory of a project.
2. Place the icon in the “PWA-icons” folder with either of the sizes:
    - 512x512 
    - 384x384
    - 192x192
    - 152x152
    - 144x144
    - 128x128
    - 96x96
    - 72x72
3. Image file naming should be an icon-&lt;size&gt;.png. For example, `icon-384x384.png`.

[![](/learn/assets/pwa/pwaIconsFolder.png)](/learn/assets/pwa/pwaIconsFolder.png)

4. Re-deploying the app reflects the above changes.

:::note
- In case of any missing icon(s), the nearest resolution will be used from the “pwa-icons” directory. 

**Example:** 

In the above image, we have uploaded two different image sizes. But the chrome browser uses 128x128, which is not present in the upload list; therefore, the PWA generation uses 384x384 size as the app icon.
- If no icons are present in the "pwa-icons" directory, PWA will use the WaveMaker default icons.
- As of now, only PNG format images are supported.
:::

## Steps to Install PWA in Mobile Devices

The above features can be applied in mobile, including Android and iPhone. To install the app on mobile, load the deployed app URL in Chrome browser and add the app to the home screen/install the app.

[![](/learn/assets/pwa/mobileInstall.png)](/learn/assets/pwa/mobileInstall.png)

[![](/learn/assets/pwa/installDialog_mobile.png)](/learn/assets/pwa/installDialog_mobile.png)

You can observe the app in the app drawer. 

[![](/learn/assets/pwa/appdrawer.png)](/learn/assets/pwa/appdrawer.png)

And once you open the app, it will be opened as a native mobile application.

[![](/learn/assets/pwa/applaunched.png)](/learn/assets/pwa/applaunched.png)

### Browser Support for PWA

- All browsers do not support all the features of PWA. 
- Please load this [URL](https://tomayac.github.io/pwa-feature-detector/) on any browser to know the PWA features it supports.
