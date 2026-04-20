---
title: "Inspection Framework React Native"
sidebar_label: "Inspection Framework"
id: "inspection-framework-react-native"
---
---

Inspection Framework helps you locate errors, custom code, or any unsupported methods in your React Native project. Also, with this, you can point to the project's custom code and edit and fix any code errors you may have. Using the inspection framework, you can perform tests and include this feature in your QA cycle to help you find code errors.

In React-Native Studio, there are lists of unsupported [features](/learn/react-native/feature-support), [widgets](/learn/react-native/supported-widgets) and [variables](/learn/react-native/supported-variables). When an unsupported feature, widget, or variable is included in the React Native project or a prefab used in React Native application, these may not work.

## How to use Inspection Framework

You can locate **Inspection framework** from the **More options** menu of the project. See the image below:

![](/learn/assets/inspectionframeworklowcode.png)

## Unsupported Widgets

When using Inspection Framework, the following rule catches and warns you about using any [unsupported widgets](/learn/react-native/supported-widgets) of React Native Studio that are used in Prefab projects.

### Rule Details

There is a list of widgets that are [not supported](/learn/react-native/supported-widgets) in React Native Studio. When unsupported widgets are included in the Prefab and are used in a React Native application, these will not work.

#### Warning Message

`widgetname` widget is not yet supported in React Native mobile project. This Prefab will not work in React Native projects.

#### Example

Drag and drop a Rich text editor widget in the Prefab project and click on **[Inspect](/learn/react-native/inspection-framework-react-native#how-to-use-inspection-framework)**. The below message will be shown.

To resolve this error, remove the unsupported widgets and use any other [supported widgets](/learn/react-native/supported-widgets) in the Prefabs that are allowed in React Native projects.

## No DOM API

The following rule attempts to catch any usage of DOM API in React Native projects and Prefabs used in React Native projects.

### Rule Details

In React Native framework, DOM APIs are not supported. If DOM APIs are used in the **page.js** or **app.js** files in Prefab or React-Native projects, they will not work.

#### Warning Message

##### For Prefab Project

Document object is not available in React Native framework. This Prefab will not work in React Native projects.

##### For React Native Project

Document object is not available in React Native framework.

#### Example

Write the below code in **page.js** or **app.js**. Save the project and click **[Inspect](/learn/react-native/inspection-framework-react-native#how-to-use-inspection-framework)**. The below message will be shown.

```js
document.getElementById('test');
```

![](/learn/assets/nodomapiprefabinspectionrule.png)

![](/learn/assets/nodomapiprojectinspectionrule.png)

To resolve this error, remove the usage of DOM APIs in React Native projects and Prefabs used in React Native projects. 

## No JQuery object

The following rule attempts to catch any usage of a jQuery object in React Native projects and Prefabs used in React Native projects.
 
### Rule Details

In React Native framework, jQuery objects are not supported. If jQuery objects are used in the **page.js** or **app.js** files in Prefab or React-Native projects, they will not work.

#### Warning Message

##### For Prefab Project

jQuery does not work in React Native framework. This Prefab will not work.

##### For React Native Project

jQuery does not work in React Native framework.

#### Example

Write the below script in **page.js** or **app.js**. Save the project and click **[Inspect](/learn/react-native/inspection-framework-react-native#how-to-use-inspection-framework)**. The below message will be shown.

```js
$('.test').first(); 
```

Or,

```js
Jquery('.test').first();
```

![](/learn/assets/nojqueryobjectprefabinspectionrule.png)

![](/learn/assets/nojqueryobjectprojectinspectionrule.png)

To resolve this error, remove the usage of jQuery objects in the React Native projects and Prefabs used in React Native projects.

## No Window object

The following rule attempts to catch any usage of a Window object in React Native projects and Prefabs used in React Native projects.

### Rule Details

In React Native framework, Window objects are not supported. If any of those objects are used in the **page.js** or **app.js** files in Prefab or React Native projects, they will not work.

#### Warning Message

##### For Prefab Project

Window object is not available in React Native framework. This Prefab will not work in React Native projects.

##### For React Native Project

Window object is not available in React Native framework.

#### Example

Write the below code in any **page.js** or **app.js** file. Save the project and click **[Inspect](/learn/react-native/inspection-framework-react-native#how-to-use-inspection-framework)**. The below message will be shown.

```js
window.location.href;
```

![](/learn/assets/nowindowobjectprefabinspectionrule.png)

![](/learn/assets/nowindowobjectprojectinspectionrule.png)

To resolve this error, remove the usage of Window object in the React Native projects and Prefabs used in React Native projects.

## No Third-party library

The following rule attempts to catch any third-party libraries in Prefabs used in React Native projects.

### Rule Details

In React Native projects, usage of a third-party library is not yet supported. If these are included in the Prefab that has to be used in the React Native project, they will not work.

#### Warning Message

The third-party library is not yet supported in React Native mobile projects. This Prefab will not work in React Native projects.

#### Example

Add an external script in the Config Prefab dialog, as shown below.

![](/learn/assets/thirdpartylibrariesprefabconfig.png)

Save the project and click **[Inspect](/learn/react-native/inspection-framework-react-native#how-to-use-inspection-framework)**. The below message will be shown.

![](/learn/assets/thirdpartylibrariesprefabinspectionrules.png)

To resolve this error, remove the usage of third-party libraries in the Prefabs that are used in React Native projects.