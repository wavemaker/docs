---
title: "Automate testing of WaveMaker mobile apps using Appium"
id: "mobile-automation-appium"
sidebar_label: "WaveMaker Mobile Apps Automation"
---
---

 How to use Appium to automate testing of WaveMaker mobile app

## Introduction

Appium is an open-source tool for automating testing of native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop
 platforms. 
- Native apps are those written using the iOS, Android, or Windows SDKs. 
- Mobile web apps are web apps accessed using a mobile browser (Appium supports Safari on iOS and Chrome or the built-in 'Browser' app on Android). 
- Hybrid apps have a wrapper around a "webview" -- a native control that enables interaction with web content. Projects like Apache Cordova make it easy to
 build apps using web technologies that are then bundled into a native wrapper, creating a hybrid app.

 WaveMaker mobile applications are hybrid mobile applications and can be easily tested using Appium. This How-To document explains how to do this.
 
## Generate APK of the WM mobile application. 

We can generate APK of the WM application by following any of the options mentioned below.

1. Build for Android or
2. Export cordova zip and perform manual build.

Refer [documentation](/learn/hybrid-mobile/mobile-build-android/) for more details.

## Choosing locators for WM apps. 

An appium driver has two contexts to choose locators.

**Native_APP** : This is the driver context where we choose locators from uiautomatorviewer tool.

**WebView** : This is another driver context where we choose locators from mobile debug browser.

For the WM applications, if we choose uiautomatorviewer widget-id will be randomly changed on every execution of a certain test case and hence it will be better to switch context of the driver from Native_App to WebView.
Using the WebView context, the best approach to choose locators are by its name, class name or any other unique selectors which will not change on every test script execution.

**Here is the example how to choose locators for a sample application built in WaveMaker.**

**TestCase** : Test will attempt to login into the application. We need to fill in the Username & Password and click on the Login button. We will verify if the
 Login is
 successful.

 - Launch the application in emulator and navigate to chrome://inspect/#devices from chrome browser and open the remote debugging window of the launched
 application. 
 
 [![](/learn/assets/wm_mobile_automation_locators.png)](/learn/assets/wm_mobile_automation_locators.png)


Get the locators of the Username, Password, Login button and verify login locators. 
i.e.,

```

By userNameTxt = By.xpath("//*[@name='userNameField']//input");
By passwordTxt = By.xpath("//*[@name='passwordField']//input");
By loginButton = By.xpath("//*[@name='loginButton']");
By labellocator = By.xpath("//label[text() = 'LoggedIn as Admin']");
```

## Register appium driver by providing required desired capabilities as shown below.

```
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
   capabilities.setCapability("noRest", true);

   driver = new AppiumDriver<AndroidElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
   wait = new WebDriverWait(driver, 1000);
}
```
:::note
In the above snippet, capability ‘app’ is the location of the app, ‘appPackage’ is the applicationId and ‘appActivity’ is used to launch the application in the
 emulator.

We can get appPackage and appActivity values by executing following commands in terminal,

1. adb shell
2. dumpsys window windows | grep -E ‘mCurrentFocus’

[![](/learn/assets/wm_mobile_automation_emulatorinfo.png)](/learn/assets/wm_mobile_automation_emulatorinfo.png)
:::

## Switch the context of the driver from Native_APP to WEBVIEW.

As we are using web inspector locators, switching to WebView context.
```
driver.context("WEBVIEW_" + appPackage);
```
## Prepare your test scripts to execute test cases.
[![](/learn/assets/wm-mobile-automation-appium-execution.gif)](/learn/assets/wm-mobile-automation-appium-execution.gif)


Link for Reference:
https://www.swtestacademy.com/appium-tutorial/
