---
title: "Web View"
id: "web-view"
sidebar_label: "Web View"
---
---

WebView in React Native should support api that Cordova inAppBrpwser supports.

To execute javascript in webview (executeScript) and receive the result.

```
Page.Widgets.webview1.executeScript(`function() {
        // code to execute and return the result to recieve back
        return window.location.href; 
    }()`).then(function(result) {
        // code to deal with result
        // Refresh the page
        Page.refresh();
    });
```

To inject CSS into webview (injectCSS)

```
 Page.Widgets.webview1.insertCSS(`
        .wm-app .app-label {
            background-color: green;
            color: red;
        }
    `);
```
To send data from webview to React Native ()

Execute the below code in webview to send string data to React Native app

    window.ReactNativeWebView && window.ReactNativeWebView.postMessage('Message from web');

In React Native app, add a javascript function for onMessage event, Then handle the data that is send from webview

```
Page.webview1Message = function(event, widget) {
    var data = event.nativeEvent && event.nativeEvent.data;
    // process data
};
```