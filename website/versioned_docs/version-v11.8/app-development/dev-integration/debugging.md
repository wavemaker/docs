---
title: "Debugging"
id: "debugging"
---
---

Many times you might get stuck with a situation wherein your app does not respond the way you intended it to or throws an error that is particularly difficult to solve. In such cases debugging comes in handy. There are two ways to debug a WaveMaker app:

- using logs or
- using debug option from JavaScript.

## Using Logs for Debugging

Log files can be accessed from the project workspace footer area. There are types of logs that are recorded - Server, and Application. These can be accessed from the [Developer Utilities](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) menu for an application.

[![](/learn/assets/logs.png)](/learn/assets/logs.png)

### Server Logs

Server logs consist WaveMaker designer backend logs while developing the app. For example: On importing/updating database, sometimes a message saying `error while updating/importing database please see server logs `is displayed. In such cases, Server logs contain stack trace of error, along with the cause.

You can download the log files using the download icon in the far right corner of the logs window. This option is available for both server and application logs.

[![](/learn/assets/logs_server.png)](/learn/assets/logs_server.png)

## Debugging with HAR files

Sometimes, in order to debug a problem WaveMaker support team may ask you to send the HAR file. To obtain the HAR file:

1. From the app runtime window, open the **Developer Tools**.  Access to the Developer Tools varies from browser to browser. 
    For example, in Chrome Browser you will be using the Chrome menu **(:)** -> **More tools** -> or use a key pattern `Ctrl + Shift + I`.
2. From the Developer Tools panel select the **Network tab**.
3. Select the option to **Preserve Log**
4. Refresh the page
5. Right-click on any Network call and choose the option **Copy** -> **Copy all as HAR**

[![](/learn/assets/logs_har.png)](/learn/assets/logs_har.png)

6. Open any editor like Notepad and paste the content.
7. Save the file and send it to the support team along with the name of the Service call that is failing.

## JavaScript Debugging

To debug the JavaScript code of the pages, add keyword _debugger_ in the script part of the page. Example: Suppose we want to debug the function on click of a button ‘button2’.
```
Page.button2Click = function ($event, widget) { 
    var postion = $event.pageX;
    debugger;
};
```
Instead, if you want to just print the results in the console use the method ‘console.log()’. Example: Suppose we want to print the results of a dataset.
```
Page.button2Click = function ($event, widget) { 
    console.log(Page.Variables.HrdbEmployeeData.dataSet)
};
```
There are more methods of how you want to print the results in the console. For more detailed information refer to the product documentation of the browser you are running your app on.

Once you have the debugger in place, run the app and open the developer tools. The method of accessing developer tools differs from browser to browser.

For example, in **Chrome** use Function Key 12 (F12) or use the key pattern ‘_Ctrl + Shift + i_’ to open the developer tools.

### For debugging

In the developer tools window select on ‘_Sources_’ tab. During the script execution when the script reaches that line containing the debugger statement, it would stop the script execution and provide us options to debug the script. F10 will move the script execution to next method and F11 will move the script execution to next step.

### Console logs
Click on the `console` tab, to see the results printed when the script is executed.

## Debugging Deployed Apps

In case you want to debug deployed apps or to send logs for the deployed app to WaveMaker support team you might have to download the logs for deployed apps. In such cases

1. Open Apps Portal
    - by selecting Manage Deployed Apps button from the Project Dashboard, or
    - by using the Manage App option under Deploy from the Project Workspace Main Menu and then selecting the app in question.
2. Once you have opened the app, hover over the phase for which you want the logs, select DETAILS. 

[![](/learn/assets/apps_portal_liveapp.png)](/learn/assets/apps_portal_liveapp.png)

3. Select the Logs tab and locate the download button to download the logs. 

[![](/learn/assets/logs_deployed.png)](/learn/assets/logs_deployed.png)

