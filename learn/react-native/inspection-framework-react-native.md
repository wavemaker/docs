---
title: "Inspection Framework React Native"
sidebar_label: "Inspection Framework"
id: "inspection-framework-react-native"
---
---

Inspection Framework helps you locate errors, custom code, or any unsupported methods in your project. Also, with this, you can point to the project’s custom code and edit and fix any code errors you may have. Using the inspection framework, you can perform tests and include this feature in your QA cycle to help you find code errors

## How to use Inspection Framework

You can locate **Inspection framework** from the More options menu of the project. See the image below:

![](/learn/assets/inspectionframeworklowcode.png)

## Unsupported Widgets
The following rule attempts to catch and prevent the unsupported widgets of React Native studio that are used in Prefab projects.

### Rule Details
In React-Native Studio, there is a list of unsupported features. If these are included in the prefab that has to be used in the react native application, they might not work.

#### Warning Message
`widgetname` widget is not yet supported in React Native mobile project. This prefab will not work in React Native projects

#### Example:
Drag and drop a Rich text editor widget in the prefab project and click on inspect tab then below message will be shown

To resolve this error, remove the usage of the unsupported widgets and add the other supported widgets in the Prefabs that are used in React Native 
projects.

## No DOM API
The following rule attempts to catch and prevent any usage of DOM API in React Native projects and Prefabs used in React Native projects.

### Rule Details
In React-Native framework, DOM API's are not supported. If any of the DOM API's are used in the page.js or app.js files in Prefab or React-Native projects, 
they won't work.

#### Warning Message
##### For Prefab Project:
Document object is not available in React Native framework. This prefab will not work in React Native projects.
##### For React Native Project:
Document object is not available in React Native framework.

#### Example:
Write the below code in page.js or app.js. Save the project and click on inspect tab then the below message will be shown.
```js
document.getElementById('test');
```
![](/learn/assets/nodomapiprefabinspectionrule.png)

![](/learn/assets/nodomapiprojectinspectionrule.png)

To resolve this error, remove the usage of DOM API's in the React Native projects and Prefabs used in React Native projects. 

## No JQuery object
The following rule attempts to catch and prevent any usage of a jQuery object in React Native projects and Prefabs used in React Native projects.
  
### Rule Details
In React-Native framework, jQuery objects are not supported. If any of those objects are used in the page.js or app.js files in Prefab or React-Native projects,
they won't work.

#### Warning Message
##### For Prefab Project:
jQuery doesn’t work in React Native framework. This prefab will not work
##### For React Native Project:
jQuery doesn’t work in React Native framework.

#### Example:
Write the below script in page.js or app.js. Save the project and click on inspect tab then the below message will be shown.
```js
$('.test').first(); 
```
OR
```js
Jquery('.test').first();
```
![](/learn/assets/nojqueryobjectprefabinspectionrule.png)

![](/learn/assets/nojqueryobjectprojectinspectionrule.png)

To resolve this error, remove the usage of jQuery object in the React Native projects and Prefabs used in React Native projects.

## No Window object
The following rule attempts to catch and prevent any usage of a window object in React Native projects and Prefabs used in React Native projects.

### Rule Details
In React-Native framework, Window objects are not supported. If any of those objects are used in the page.js or app.js files in Prefab or React-Native 
projects, they won't work.

#### Warning Message
##### For Prefab Project:
Window object is not available in React Native framework. This prefab will not work in React Native projects.
##### For React Native Project:
Window object is not available in React Native framework.

#### Example:
Write the below code in any page.js or app.js file. Save the project and click on inspect tab then the below message will be shown.
```js
window.location.href;
```

![](/learn/assets/nowindowobjectprefabinspectionrule.png)

![](/learn/assets/nowindowobjectprojectinspectionrule.png)

To resolve this error, remove the usage of jQuery object in the React Native projects and Prefabs used in React Native projects.

## No Third-party library
The following rule attempts to catch and prevent any usage of a third party library in Prefabs which are used in React Native projects.

### Rule Details
In React-Native projects, usage of a third-party library is not yet supported, If these are included in the prefab that has to be used in the react native 
project, they wont work.


#### Warning Message
The third-party library is not yet supported in React Native mobile projects. This prefab will not work in React Native projects.

#### Example:
Add an external script in the Config Prefab dialog like below.

![](/learn/assets/thirdpartylibrariesprefabconfig.png)

Save the project and click on inspect tab then the below message will be shown.

![](/learn/assets/thirdpartylibrariesprefabinspectionrules.png)

To resolve this error, remove the usage of third party libraries in the Prefabs that are used in React Native projects.
