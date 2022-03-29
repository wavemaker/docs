---
title: "Google Chrome Extension: WaveMaker Devtool"
id: "chrome-developer-tool"
sidebar_label: "Chrome Extension: Devtool"
---
---

**WaveMaker Devtool** is a Google Chrome extension, an addition to the existing Google Chrome developer tools that allow you to debug and monitor WaveMaker applications in preview mode. Accessible via the **Inspect** option.

## Devtool Installation

**Devtool Extension: [Devtool](https://chrome.google.com/webstore/detail/wavemaker-devtool/niakeolhkmomhekokhdbfiaebkganjnk)**

### Prerequisites

- Google Chrome browser
- Be Logged into WaveMaker to view the logs

### Who can use WaveMaker Devtool 

All WaveMaker users who use Google Chrome to preview the application can install the **WaveMaker Devtool** extension and use it. 

## Why WaveMaker Devtool

Typical challenges that WaveMaker application developers experience while debugging include: 

1. Developers have to go through many application logs when an issue is observed; for example, when adding new changes to the application, the page does not load. 
2. Developers often miss immediate details of the issue to determine which variables are responsible for the request and fix the encountered issue. 

[![](/learn/assets/extension.png)](/learn/assets/extension.png)

## How Devtool can help

WaveMaker Devtool Chrome extension helps ease the debugging process and improve the application performance. Once you install the extension and preview a WaveMaker application on Preview mode, you can:

1. View the duplicate requests triggered on the page using the **Show only duplicates** option. 
2. Find the **Variable** associated with each request along with the request URL. 
3. You can switch to **All APIs** to view all the requests triggered by the page. By default, the page shows **App APIs**. 

[![](/learn/assets/show-only-duplicates.png)](/learn/assets/show-only-duplicates.png)

## Enabling Logs

To enable logs, include the following code snippet in the `log4j2.xml` file in the src folder under the **FileExplorer** panel.

```js
<!-- log sql queries -->
<logger name="org.hibernate.SQL" level="DEBUG"/>

<!-- external api related logging -->
<logger name="org.apache.http.wire" level="TRACE"/>

<!-- security -->
<logger name="org.springframework.security" level="DEBUG"/>
```

[![](/learn/assets/log4j2.png)](/learn/assets/log4j2.png)

## Enabling WaveMaker Devtool in Incognito mode

### Enabling Incognito mode at extension level

Google Chrome disallows extension in incognito mode by default. In order to use the WaveMaker Devtool in the incognito mode, go to extensions page by clicking on the three dots present in the top right of the address bar, click on the **Extensions** option present under **More Tools** option.

[![](/learn/assets/chrome-extensions-page-navigation.png)](/learn/assets/chrome-extensions-page-navigation.png)

In the Chrome extensions page, click on the **Details** button of WaveMaker Devtool extension, you will be navigated to the extension's details page where you will find **Allow in Incognito** option which is turned off by default. Turn on the option to enable WaveMaker Devtool in incognito mode.

[![](/learn/assets/chrome-extensions.png)](/learn/assets/chrome-extensions.png)
[![](/learn/assets/allow-in-incognito.png)](/learn/assets/allow-in-incognito.png)

### Enabling the third party cookies for WaveMaker Domains

Google Chrome blocks third-party cookies in incognito mode by default. Allow WaveMaker domains to always use cookies in order to view logs for WaveMaker application in incognito mode. 

Steps to enable third-party cookies

1. Go to Google Chrome **Settings** page
2. Navigate to **Cookies and other site data** under **Security and privacy** section
3. You will find **Block third-party cookies in Incognito** enabled, scroll to find **Sites that can always use cookies** section in the same page. Add WaveMaker domains in this section. 

[![](/learn/assets/chrome-security-privacy.png)](/learn/assets/chrome-security-privacy.png)
[![](/learn/assets/chrome-add-site.png)](/learn/assets/chrome-add-site.png)

You can now access the WaveMaker Devtool in Incognito mode.

