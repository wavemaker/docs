---
title: "Web View"
id: "web-view"
sidebar_label: "WebView"
---
---

WebView renders web content in a native view, such as In-app-browser. This allows you to communicate between the WaveMaker app and third-party apps. You can add script and CSS to third-party services too.

## Add Script to WebView

To execute JavaScript in WebView, call `executeScript` function and receive the result.

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

## Styling WebView

To inject CSS into WebView, call `injectCSS` function, as shown below.

```
 Page.Widgets.webview1.insertCSS(`
        .wm-app .app-label {
            background-color: green;
            color: red;
        }
    `);
```

## Communicate between WebView and React Native

Execute the below code in WebView to send the string data to React Native app, wherein React Native is a WaveMaker app, and WebView is a third-party service. 

### Script to add in Webview

```
window.ReactNativeWebView && window.ReactNativeWebView.postMessage('Message from web');
```

### Scrip to add in React Native

In React Native app, add a JavaScript function for `onMessage` event, then handle the data that is send from WebView.

```
Page.webview1Message = function(event, widget) {
    var data = event.nativeEvent && event.nativeEvent.data;
    // process data
};
```