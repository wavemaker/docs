---
title: "Accessing Elements via JavaScript"
id: "accessing-elements-via-javascript"
sidebar_label: "JavaScript Access"
---
---

A **Page** in WaveMaker application consists of Markup, Script & CSS files. In this document, we will go through the various functions/methods that are available in the script file. We will see how these methods can be created and modified.

**Page script** can be accessed from the script tab on your project workspace. Using JavaScript, the functionality of your project can be enhanced. The various methods and properties associated with each of the Studio elements can be found in the [API Documentation](https://www.wavemakeronline.com/app-runtime/latest/docs/index.html).

## Page Lifecycle

When a Page is created, it has a single context object (singleton instance) called "**Page**" in the JavaScript. You can attach lifecycle methods, events, and callbacks to this object. When a new page is created it creates the "**onReady**" lifecycle methods where you can write the code to be invoked after the page is rendered completely.

There are two more singleton instances used in the platform named "**Partial**" & "**Prefab**" which are used in Partial pages and Prefab page respectively.

:::note
_onPageReady _function has been deprecated since 10.0 release, use Page.onReady instead.
:::

[![](/learn/assets/pageScript.png)](/learn/assets/pageScript.png)

In the following sections, we will be seeing how each element of the project can be accessed using the Script.

## Widget Lifecycle

For every Widget, there are a set of lifecycle methods and event callbacks that can be accessed from the JavaScript.

The events can be accessed from the properties panel for the specific Widget and assigned to a JavaScript or any other actions. JavaScript can be written from the Script tab, as per the app requirements. For example, to display an alert message on click of a button, the following would be the code:

```
Page.button1Click = function($event, widget) {
    alert("Hello")
};
```
For Widget Life Cycle Methods usage examples refer to the specific [Widget Documentation](/learn/app-development/widgets/widget-library/).

## Custom Methods

You can write your own custom functionality and access the methods from anywhere in the page.

```
Page.myMethod = function(parameters) {
// your code here
};
```

## App Variables

Variables created with Owner set to App can be accessed from all Pages, Partials, and Prefabs
```
App.Variables.<variable-name>.<fields/methods>
```

## Accessing the Page/Partial/Prefab Widgets and Variables

The Widgets and Variables of a page can be accessed through the page script. The widgets and variables operate within the scope they are created in. Additionally, the widgets and variables defined in a Page can be accessed within the partial pages and vice versa.

The Widgets and Variables of a page can be accessed through the page script. They are exposed as 'Widgets' and 'Variables' properties in the respective page scope. 

To access variables and widgets of a page named "Main" use following scripts in Main page controller:

```
/** to set "caption" property of a label widget (eg 'label1') **/
Page.Widgets.label1.caption = "New Caption";
/** to change a variable (eg 'userInfoVariable') dataSet property, use the script: **/
Page.Variables.userInfoVariable.dataSet = {dataValue": "new value"};
```

:::note
Replace Page with Partial or Prefab when working with in Partial or Prefab, respectively.
:::

## Accessing the Widgets and Variables of Partial from Parent Page through Scripting

The Widgets and Variables inside a partial page can be accessed from the parent page script through the 'Widgets' and 'Variables' property exposed in the scope of the partial container widget.

```
Page.Widgets.[container_name].Widgets.[widget_name].[widget_property];
Page.Widgets.[container_name].Variables.[variable_name];
```

**Example**
To access variables and widgets of a partial page loaded in a page named "Main".

```
/** to set the "caption" of a label widget (eg label1) of a partial page loaded as a content of panel widget (eg panel1) **/
Page.Widgets.panel1.Widgets.label1.caption = "New Caption";

/** to access partial page's Variable (say staticVariable1) in the parent page 'Main' **/:
Page.Widgets.panel1.Variables.staticVariable1.dataSet = {"dataValue": "new value"};
```

## App Level Access

As with the Pages, App lifecycle events and variables can be accessed from the _app.js_ file. This file can be accessed from the File Explorer. 

[![](/learn/assets/appJS.png)](/learn/assets/appJS.png) 

The following methods are available:

- **onAppVariablesReady** - this refers to the Variables created with App as Owner.  Variables can be accessed through 'App.Variables' property: e.g. App.Variables.staticVariable1.getData()
- **onSessionTimeout** - perform any action on session timeout here, e.g clearing some data, etc
- **onPageReady** - This application level callback function will be invoked after the invocation of PAGE level onPageReady function
- **onServiceError** - This application level callback function will be invoked after a Variable receives an error from the target service. Use this function to write common error handling logic across the application

