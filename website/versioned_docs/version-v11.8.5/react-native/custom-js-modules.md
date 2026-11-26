---
title: "Supporting Custom JS Libraries in React Native Apps"
sidebar_label: "Custom JS Modules"
id: "custom-js-modules"
---

## Overview

This documentation provides guidance on how to support custom JavaScript (JS) libraries in React Native apps. These libraries are not published to npm or GitHub, but are owned by customers who wish to use them in their React Native applications. By following the steps outlined in this document, developers can enable support for these custom JS libraries and seamlessly integrate them into React Native projects.

## Adding Custom JS Libraries

1. Add the Custom JS Library to the resources folder, In the example shown below `customScript.js` a javascript library is added to resources folder

![Custom JS Resources Uploaded](/learn/assets/custom-script-fileupload.png)

```javascript
// customScript.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to find the modulus of two numbers
function modulus(a, b) {
    return a % b;
}

// Exporting the functions as an object
module.exports = {
    add,
    subtract,
    multiply,
    modulus,
};
```

2. Import the Js file to the App or to a Page by using the following command

```
require('./assets/resources/files/customScript.js');
```

Likewise, we can import platform-specific files to ensure the custom module runs on a certain platform only

```
require('./assets/resources/files/customScript.native.js');
require('./assets/resources/files/customScript.web.js');
```

:::note
`./assets/` should be added before resources in the import path
:::

### App.js

As shown below, We are adding the code to `App.js`

![Custom JS App.js](/learn/assets/custom-script-file.png)

![Custom JS App.js Code](/learn/assets/custom-script-app.png)

```javascript
App.customModule = function() {
    return require('./assets/resources/files/customScript.js');
}
```

We can import `.native.js` or `.web.js` files, using the script provided above.

### Page Markup

```html
<wm-page name="mainpage">
    <wm-left-panel content="leftnav" name="left_panel1"></wm-left-panel>
    <wm-mobile-navbar name="mobile_navbar1" title="Main" backbutton="false">
        <wm-anchor caption="" name="AddLink" iconclass="wi wi-gear"></wm-anchor>
    </wm-mobile-navbar>
    <wm-content name="content1">
        <wm-page-content columnwidth="12" name="page_content1">
            <wm-layoutgrid name="layoutgrid2">
                <wm-gridrow name="gridrow2_1">
                    <wm-gridcolumn columnwidth="3" name="gridcolumn11" xscolumnwidth="3"></wm-gridcolumn>
                    <wm-gridcolumn columnwidth="3" name="gridcolumn3_1" xscolumnwidth="3" horizontalalign="center">
                        <wm-composite name="composite2" margin="unset unset 20px unset">
                            <wm-container class="col-md-9" name="container2">
                                <wm-number textalign="right" name="number1" width="70px" placeholder="bind:&quot; &quot;" required="false"></wm-number>
                            </wm-container>
                        </wm-composite>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="3" name="gridcolumn5" xscolumnwidth="3" horizontalalign="center">
                        <wm-composite name="composite3" margin="unset unset 20px unset">
                            <wm-container class="col-md-9" name="container3">
                                <wm-number textalign="right" name="number2" width="70px" placeholder="bind:&quot; &quot;"></wm-number>
                            </wm-container>
                        </wm-composite>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="3" name="gridcolumn12" xscolumnwidth="3"></wm-gridcolumn>
                </wm-gridrow>
                <wm-gridrow name="gridrow2">
                    <wm-gridcolumn columnwidth="2" name="gridcolumn3" xscolumnwidth="2" horizontalalign="center">
                        <wm-button class="btn-default" caption="" type="button" name="button1" on-tap="button1Tap($event, widget)" iconclass="wi wi-plus"></wm-button>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="2" name="gridcolumn8" horizontalalign="center" xscolumnwidth="2">
                        <wm-button class="btn-default" caption="" type="button" on-tap="button2Tap($event, widget)" iconclass="wm-sl-r sl-subtract" name="button2"></wm-button>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="2" name="gridcolumn4" xscolumnwidth="2" horizontalalign="center">
                        <wm-button class="btn-default" caption="" type="button" on-tap="button3Tap($event, widget)" iconclass="wi wi-close" name="button3"></wm-button>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="2" name="gridcolumn6" horizontalalign="center" xscolumnwidth="2">
                        <wm-button class="btn-default" caption="" type="button" on-tap="button4Tap($event, widget)" iconclass="wm-sl-r sl-discount" name="button4" margin="unset unset 20px unset"></wm-button>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="2" name="gridcolumn7" xscolumnwidth="2"></wm-gridcolumn>
                    <wm-gridcolumn columnwidth="2" name="gridcolumn9" xscolumnwidth="2">
                        <wm-button class="btn-default" caption="AC" type="button" on-tap="button5Tap($event, widget)" iconclass="" name="button5"></wm-button>
                    </wm-gridcolumn>
                </wm-gridrow>
                <wm-gridrow name="gridrow3">
                    <wm-gridcolumn columnwidth="2" name="gridcolumn9_1" xscolumnwidth="6" horizontalalign="right">
                        <wm-label padding="unset" name="label1" caption="Output:" class="h4"></wm-label>
                    </wm-gridcolumn>
                    <wm-gridcolumn columnwidth="2" name="gridcolumn10" xscolumnwidth="6">
                        <wm-label padding="unset" name="labelOutput" class="h4" caption=""></wm-label>
                    </wm-gridcolumn>
                </wm-gridrow>
            </wm-layoutgrid>
        </wm-page-content>
    </wm-content>
    <wm-mobile-tabbar name="mobile_tabbar1" dataset="bind:Variables.staticTabBar.dataSet" itemicon="icon" itemlink="link" morebuttoniconclass="wi wi-date-range fa-2x"></wm-mobile-tabbar>
</wm-page>
```

### Page Script

```javascript
const jsmodule = Page.App.customModule();

Page.onReady = function() {};
Page.button1Tap = function($event, widget) {
    Page.Widgets.labelOutput.caption = jsmodule.add(
        Page.Widgets.number1.datavalue,
        Page.Widgets.number2.datavalue
    );
};
Page.button5Tap = function($event, widget) {
    Page.Widgets.number1.datavalue = "";
    Page.Widgets.number2.datavalue = "";
    Page.Widgets.labelOutput.caption = "";
};
Page.button2Tap = function($event, widget) {
    Page.Widgets.labelOutput.caption = jsmodule.subtract(
        Page.Widgets.number1.datavalue,
        Page.Widgets.number2.datavalue
    );
};
Page.button3Tap = function($event, widget) {
    Page.Widgets.labelOutput.caption = jsmodule.multiply(
        Page.Widgets.number1.datavalue,
        Page.Widgets.number2.datavalue
    );
};
Page.button4Tap = function($event, widget) {
    Page.Widgets.labelOutput.caption = jsmodule.modulus(
        Page.Widgets.number1.datavalue,
        Page.Widgets.number2.datavalue
    );
};
```

### Preview

![Custom JS Preview](/learn/assets/customScript.gif)
