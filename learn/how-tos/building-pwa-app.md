---
title: "Enabling PWA in wavemaker Beta"
id: "building-pwa"
sidebar_label: "Enabling PWA in wavemaker"
---
---

## Introduction

### What is progressive Web application?

PWA is a type of application software delivered through the web, which looks and feels like using native mobile applications. PWA are developed using web technologies such as JS, HTML, and CSS. These applications combine great user experience and functionality like innate mobile apps. PWA’s are intended to work on any platform including both desktop and mobile devices.

### Features & Benefits of using PWA
PWA’s have many key features and benefit that a user requires, and these features make them more unique from traditional web and native apps:

- Full responsive and Browser compatibility.
- Connectivity independence.
- App-like Interface.
- Push notifications.
- Self-Updates.
- Safety.
- Discoverability and easy installation.

These features make PWA unique from native mobile applications and provide more robust features on any platform using any device.

[![](/learn/assets/pwa/advantages.PNG)](/learn/assets/pwa/advantages.PNG)


### PWA features supported by Wavemaker

Currently implemented Features in Wavemaker are:

- Add to home screen.
- Offline capabilities.

Allowing users to select native applications as per their requirement.

### Prerequisites

To work with pwa features the user has to enable SSL and deploy the application over secure connection using the available providers.

### Steps to Enable PWA capabilities:

- Create a project and add the PWA flag and set the value as “true” (app.pwa.enabled=true.)in the properties file.  
- In case the flag is unavailable the feature is considered disabled by default.

[![](/learn/assets/pwa/flagproperty.png)](/learn/assets/pwa/flagproperty.png)

- Deploy the app and launch the deployed app on any browser as per requirement and usability(this can be opened in any browser using the deployed url).
- Once the app loads an install icon shows up in the address-bar of the browser.

App can be installed by clicking on the icon as highlighted below.

[![](/learn/assets/pwa/install.png)](/learn/assets/pwa/install.png)

Once the icon is clicked, a pop-up shows up which allows the user to  install the application or cancel the installation.

[![](/learn/assets/pwa/installDialog.png)](/learn/assets/pwa/installDialog.png)

Upon installing the application, app opens up as a standalone application

[![](/learn/assets/pwa/launchedApp.png)](/learn/assets/pwa/launchedApp.png)

**To enable pwa feature in old applications**, along with the above step(i.e. enabling pwa flag) user has to do the following

- ***Projects without Authentication enabled:*** Manifest pattern has to add by the user in project-security.xml. i.e., Add the following lines in project-security.xml file

```Java 
<security:http pattern="/manifest.json" security="none"/>
<security:http pattern="/ngsw.json" security="none"/>
```

- ***Projects with Authentication enabled:*** Just resave the security config from studio which would regenerate the project-security.xml with the manifest pattern

## Steps to set App icon:

We can set the app icon as a user provided icon for pwa in wavemaker. Please find below instructions to add the required app icon

1. Create a folder named “pwa-icons” in the root directory of a project.
2. Whatever the icon you wish to set for the app should place in the above folder with the following sizes 512x512, 384x384, 192x192, 152x152, 144x144, 128x128, 96x96, 72x72
3. Image file naming should be icon-<size>.png. For ex: icon-384x384.png

[![](/learn/assets/pwa/pwaIconsFolder.png)](/learn/assets/pwa/pwaIconsFolder.png)

Above changes can be reflected on re-deploying the app.

:::Please note:

- Incase of any missing icon(s), the nearest resolution will be used from the "pwa-icons " directory. 
**Example:** 
In the above image we have uploaded two different size images. But chrome browser uses 128x128 which is missing. So while pwa generation it will use 384x384 size as app icon.
- If no icon present in the "pwa-icons" directory, wm default icons will be used
- As of now only PNG format images are supported.

## Steps to install PWA in mobile devices

Above features can be applicable in mobile as well(android & iPhone). To install the app in mobile just load the deployed  app Url in chrome browser and add app to home screen/install the app.

[![](/learn/assets/pwa/mobileInstall.png)](/learn/assets/pwa/mobileInstall.png)


[![](/learn/assets/pwa/installDialog_mobile.png)](/learn/assets/pwa/installDialog_mobile.png)

 You can observe the app in the app drawer 

[![](/learn/assets/pwa/appdrawer.png)](/learn/assets/pwa/appdrawer.png)

and once you open the app it will be opened as native mobile application.

[![](/learn/assets/pwa/applaunched.png)](/learn/assets/pwa/applaunched.png)

### Browser Support for PWAs
All browsers do not support all the features of PWA. 

Please load this [URL](https://tomayac.github.io/pwa-feature-detector/) on any browser to know the PWA features it supports.
 