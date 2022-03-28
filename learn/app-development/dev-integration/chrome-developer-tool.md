---
title: "Google Chrome Extension: WaveMaker Devtool"
id: "chrome-developer-tool"
sidebar_label: "Chrome Extension: Devtool"
---
---

**WaveMaker Devtool** is a Google Chrome extension, an addition to the existing Google Chrome developer tools that allow you to debug and monitor WaveMaker applications in preview mode. Accessible via the **Inspect** option. WaveMaker Devtool supports WaveMaker v11 and later.

## Prerequisites

- Google Chrome browser
- Be Logged into WaveMaker to view the logs

### Who can use WaveMaker Devtool 

All WaveMaker users who use Google Chrome to preview the application can install the **WaveMaker Devtool** extension from [here](https://chrome.google.com/webstore/detail/wavemaker-devtool/niakeolhkmomhekokhdbfiaebkganjnk) and use it. 

To enable logs include the following code snippet in the log4j2.xml available in the src folder under FileExplorer panel.

```js
  <!-- log sql queries -->
  <logger name="org.hibernate.SQL" level="DEBUG"/>

  <!-- external api related logging -->
  <logger name="org.apache.http.wire" level="TRACE"/>

  <!-- security -->
  <logger name="org.springframework.security" level="DEBUG"/>
```

[![](/learn/assets/log4j2.png)](/learn/assets/log4j2.png)

## Why WaveMaker Devtool

Typical challenges that WaveMaker application developers experience while debugging. 

1. Developers go through many application logs when an issue is observed; for example, when adding new changes to the application, the page does not load. 
2. Developers often miss out on immediate details of the issue to determine which variables are responsible for the request and fix the encountered issue. 

[![](/learn/assets/extension.png)](/learn/assets/extension.png)

## How Devtool can help

WaveMaker Devtool Chrome extension helps ease the debugging process and improve the application performance. Once you install the extension and preview a WaveMaker application on Preview mode, you can:

1. View the duplicate requests triggered on the page using the **Show only duplicates** option. 
2. Find the **Variable** associated with each request along with the request URL. 
3. You can switch to **All APIs** to view all the requests triggered by the page. By default, the page shows **Core APIs**. 

[![](/learn/assets/show-only-duplicates.png)](/learn/assets/show-only-duplicates.png)
