---
title: "Automated testing of WaveMaker mobile apps using Appium"
id: "mobile-reactnative-automation-appium"
sidebar_label: "WaveMaker ReactNative Mobile Apps Automation"
---
---

How to use Appium to automate testing of WaveMaker mobile app

## Introduction

Appium is an open-source tool for automating testing of native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop
platforms.
- Native apps are those written using the iOS, Android.
- Mobile web apps are web apps accessed using a mobile browser (Appium supports Safari on iOS and Chrome or the built-in 'Browser' app on Android).
- Hybrid apps have a wrapper around a "webview" -- a native control that enables interaction with web content. Projects like Apache Cordova make it easy to
  build apps using web technologies that are then bundled into a native wrapper, creating a hybrid app.

WaveMaker generates React Native code mobile apps and these native apps can be installed on mobile phones. Apps can be tested using Appium. This document explains how to do this.

## Generate APK of the WM react native mobile application.

We can generate APK of the WM application by following the options mentioned below.

1. Export react native zip and perform manual build.
2. Export react native zip and use appchef

Refer [documentation](https://docs.wavemaker.com/learn/react-native/build-installers) for more details.

## Choosing locators for WM apps.

An appium driver has two contexts to choose locators.

**Native_APP** : This is the driver context where we choose locators from ``uiautomatorviewer`` tool.

**WebView** : This is another driver context where we choose locators from mobile debug browser.

For the WM react native mobile applications, to find locators we use ``uiautomator`` viewer

**Here is the example how to choose locators for a sample react native mobile application built in WaveMaker.**

**TestCase** : Test will attempt to login into the application. We need to fill in the Username & Password and click on the Login button. We will verify if the
Login is
successful.

- Launch the application in emulator and also launch uiautomatorviewer using command prompt.

[![](/learn/assets/wm_rn_mobile_automation_locators.png)](/learn/assets/wm_rn_mobile_automation_locators.png)


Get the locators of the Username, Password, Login button and verify login locators.
i.e.,

```

 By userNameTxt = By.xpath("//*[@class='android.widget.EditText' and @text='Enter username']");
 By passwordTxt = By.xpath("//*[@class='android.widget.EditText' and @text='Enter password']");
 By loginButton = By.xpath("//android.view.ViewGroup[@index=4]");
 By labellocator = By.xpath("//*[@class='android.widget.TextView' and @text='Hello! admin']");
```

## Register appium driver by providing required desired capabilities as shown below.

```java
 @BeforeMethod
    public void setup() throws MalformedURLException, UnexpectedException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("app", appLocation);
        capabilities.setCapability("appPackage", appPackage);
        capabilities.setCapability("appActivity", appActivity);
        capabilities.setCapability("deviceName","Pixel_3_XL_API_28");
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("platformVersion", "7.0");
        capabilities.setCapability("udid", "emulator-5554");
        capabilities.setCapability("autoGrantPermissions", true);
        capabilities.setCapability("showChromedriverLog", true);
        capabilities.setCapability("browserName", "");
        capabilities.setCapability("uiautomator2ServerLaunchTimeout", "50000");
        capabilities.setCapability("--session-override", true);
        capabilities.setCapability("noReset", true);

        driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
        wait = new WebDriverWait(driver, 1000);
    }
```
:::note
In the above snippet, capability ‘app’ is the location of the app, ‘appPackage’ is the applicationId and ‘appActivity’ is used to launch the application in the
emulator.

We can get appPackage and appActivity values by executing following command in terminal,

adb shell dumpsys window | grep -E 'mCurrentFocus'

[![](/learn/assets/wm_rn_mobile_automation_emulatorinfo.png)](/learn/assets/wm_rn_mobile_automation_emulatorinfo.png)
:::

## Prepare your test scripts to execute test cases.
[![](/learn/assets/wm-rn-mobile-automation-appium-execution.gif)](/learn/assets/wm-rn-mobile-automation-appium-execution.gif)


