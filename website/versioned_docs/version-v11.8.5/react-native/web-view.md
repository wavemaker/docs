---
title: "Web View"
id: "web-view"
sidebar_label: "WebView"
---
---
import webviewInject from '/learn/assets/webview-inject.gif';

WebView renders web content in a native view, such as In-app-browser. This allows communication between the WaveMaker app and Web Apps. Also, inject Script and CSS to Web Apps.

## Add Script to WebView

To execute JavaScript in WebView, call the `executeScript` function and receive the result.

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

To inject CSS into WebView, call the `injectCSS` function, as shown below.

```
 Page.Widgets.webview1.insertCSS(`
        .wm-app .app-label {
            background-color: green;
            color: red;
        }
    `);
```

## Communicate between WebView and React Native

Execute the below code in WebView to send the string data to React Native app, wherein React Native is a WaveMaker app, and WebView is a Web App. 

### Script to add in Webview

```
window.ReactNativeWebView && window.ReactNativeWebView.postMessage('Message from web');
```

### Script to add in React Native

In React Native app, add a JavaScript function for `onMessage` event, then handle the data that is sent from WebView.

```
Page.webview1Message = function(event, widget) {
    var data = event.nativeEvent && event.nativeEvent.data;
    // process data
};
```

## Example

The following example shows adding script and CSS to Web App. It also shows how to communicate from Web App to React Native App.

### Web App

#### Markup
```
<wm-page name="mainpage" pagetitle="Main">
    <wm-header content="header" name="header" height="auto"></wm-header>
    <wm-top-nav name="topnav" content="topnav"></wm-top-nav>
    <wm-content name="content">
        <wm-left-panel columnwidth="2" name="leftpanel" content="leftnav"></wm-left-panel>
        <wm-page-content columnwidth="8" name="mainContent" padding="unset 15px">
            <wm-button class="btn-default" caption="" type="button" margin="unset 0.5em" name="subtract" iconclass="wm-sl-l sl-subtract" on-click="subtractClick($event, widget)"></wm-button>
            <wm-label padding="unset 0.5em" name="count" caption="0"></wm-label>
            <wm-button class="btn-default" caption="" type="button" margin="unset 0.5em" name="add" iconclass="wm-sl-l sl-add" on-click="addClick($event, widget)"></wm-button>
            <wm-label padding="unset 0.5em" name="labelMessageSent" caption=""></wm-label>
            <wm-button class="btn-default" caption="Send Message" type="button" margin="unset 0.5em" name="button4" on-click="button4Click($event, widget)"></wm-button>
        </wm-page-content>
        <wm-right-panel columnwidth="2" name="rightpanel" content="rightnav"></wm-right-panel>
    </wm-content>
    <wm-footer name="footer" content="footer"></wm-footer>
</wm-page>
```

#### Script

```js
Page.onReady = function() {};

Page.subtractClick = function($event, widget) {
    Page.Widgets.count.caption = parseInt(Page.Widgets.count.caption) - 1;
};
Page.addClick = function($event, widget) {
    Page.Widgets.count.caption = parseInt(Page.Widgets.count.caption) + 1;
};
Page.button4Click = function($event, widget) {
    window.postMessage("Post message from web count is:" + Page.Widgets.count.caption, "*")
};
```

### React Native App

#### Markup
```
<wm-page name="mainpage">
    <wm-content name="content1">
        <wm-page-content columnwidth="12" name="page_content1" backgroundcolor="#717171">
            <wm-webview name="webview1" webviewsrc="https://stage-studio.wavemakeronline.com/run-tlgl6v1wz7/ent1253c0349106/ServicesApp_master/#/Main" width="100%" height="300" on-load="webview1Load($event, widget)"></wm-webview>
            <wm-button class="btn-default" caption="update count" type="button" name="button1" width="100%" on-tap="button1Tap($event, widget)"></wm-button>
            <wm-linearlayout direction="row" spacing="4" padding="4px" name="linearlayout1">
                <wm-linearlayoutitem name="linearlayoutitem1" flexgrow="7" horizontalalign="right">
                    <wm-label padding="unset 4px" name="label1" class="h4" caption="Count Value"></wm-label>
                </wm-linearlayoutitem>
                <wm-linearlayoutitem name="linearlayoutitem3" flexgrow="6" horizontalalign="left">
                    <wm-label padding="unset 4px" name="labelCountValue" class="h4" textalign="left"></wm-label>
                </wm-linearlayoutitem>
            </wm-linearlayout>
            <wm-button class="btn-default" caption="Update CSS" type="button" name="button2" width="100%" on-tap="button2Tap($event, widget)"></wm-button>
            <wm-linearlayout direction="row" spacing="4" padding="4px" name="linearlayout2">
                <wm-linearlayoutitem name="linearlayoutitem3_1" flexgrow="4" horizontalalign="right">
                    <wm-label padding="unset 4px" name="label3" class="h4" caption="Message"></wm-label>
                </wm-linearlayoutitem>
                <wm-linearlayoutitem flexgrow="9" name="linearlayoutitem4" horizontalalign="left">
                    <wm-label padding="unset 4px" name="labelMessage" class="h4"></wm-label>
                </wm-linearlayoutitem>
            </wm-linearlayout>
            <wm-button class="btn-default" caption="Inject Post Message" type="button" name="button3" width="100%" on-tap="button3Tap($event, widget)"></wm-button>
        </wm-page-content>
    </wm-content>
</wm-page>
```

#### Script
```js
Page.count = 0;
Page.onReady = function() {};
Page.webview1Load = function($event, widget) {};
Page.button1Tap = function($event, widget) {
    Page.Widgets.webview1.executeScript(`function() {
        return document.querySelector('label[name="count"]').innerHTML; 
    }()`).then(function(result) {
        Page.Widgets.labelCountValue.caption = result;
        Page.refresh();
    });

};
Page.button2Tap = function($event, widget) {
    if (Page.count % 2 === 0) {
        Page.Widgets.webview1.insertCSS(`
        .wm-app .app-label {
            color: red;
        }
    `);
    } else {
        Page.Widgets.webview1.insertCSS(`
        .wm-app .app-label {
            color: green;
        }
    `);
    }
    Page.count = Page.count + 1;
};
Page.webview1Message = function(event, widget) {
    var data = event.nativeEvent && event.nativeEvent.data;
    Page.Widgets.labelMessage.caption = data.split(":").pop();
};
Page.button3Tap = function($event, widget) {
    Page.Widgets.webview1.onMessage = Page.webview1Message
    Page.Widgets.webview1.executeScript(`(function() {
      window.postMessage = function(data) {
        window.ReactNativeWebView.postMessage(data);
      };
    })()`);
};
```

#### Preview

<div style={{flex:1}}>
<img src={webviewInject}/>
</div>