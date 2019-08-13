---
title: "Using Cordova Plugins"
id: "using-cordova-plugins"
---

WaveMaker provides common plugins like camera, contacts etc. for you to use within a Mobile app. These plugins are exposed as services under [Variables](/learn/hybrid-mobile/device-variables/#) The output of a plugin operation is available as the variable's outbound property. You can bind the values to another variable or a widget.

There might be a case when this list of plugins provided by default falls short of the app requirements. You might be required to use additional Cordova plugins. This document explains how to add Cordova plugins to a WaveMaker mobile application.

## to include Cordova plugins

1. and identify the plugin that meets your app requirement. You can find additional plugins from:
    - [://www.npmjs.com/](https://www.npmjs.com/)
    - [://github.com/](https://github.com/)
    - by using any regular search engine
2. the project open the [Build](/learn/hybrid-mobile/mobile-build-android/) dialog. From the Plugins section and under More Plugins, add the new plugin by providing the following information:
    
    - : choose between npm or git,
    - name: provide the plugin’s name,
    - version of the plugin in case source is npm or git repository URL in case of git source.
    
    [![](../assets/cordova_plugin.png)](../assets/cordova_plugin.png)
3. ‘ADD’ button to include the plugin, to be able to use the plugin's API.
4. plugin functionality has to be triggered by JavaScript. Based on requirements, identify the trigger point where the plugin has to be invoked. Following is the list of some common triggers:
    - function in app.js: if the plugin needs to be triggered at application startup time.
    - function in a page: if the plugin needs to be triggered at page ready event.
    - events: if the plugin needs to be triggered when a certain event (like tap, double tap etc.) occurs on a widget. Select JavaScript for the event and invoke the plugin from the JavaScript callback.
5. [a model variable](http://[supsystic-show-popup id=105]) to hold the response from Cordova plugin. Whenever Cordova plugin is executed, update this variable. This variable can be used in further bindings.

**to note**:

- the plugin documentation for the API usage
- JavaScript APIs are an async type. So, they take success and error function as arguments which are invoked after execution of native code.
- invoking the Cordova API, a check has to be done whether Cordova is there. This will prevent errors while previewing in a browser.
- must be injected into your controller or service.

## Case

### Statement

An application has to be built to list the phone numbers of employees in an organization. The user should be able to call directly from the app. For the database, we will be using the sample HR database that is available in WaveMaker.

1. [the sample hrdb](http://[supsystic-show-popup id=106]) and [a page](http://[supsystic-show-popup id=124])
2. and drop a [widget](/learn/app-development/widgets/list/)
    - Database CRUD service type, hrdb service and employees entity
    - a template of your choice, here we are using Action List with basic pagination
    - Picture widget to the picurl field, the Name to firstname and leave JobTitle field empty. We will be using this to display the phone number.
3. phone numbers are not present in HR database, phone numbers are a computed based on the following expression: '+14084352700' + employee Id
4. the canvas select JobTitle label widget, using the bind icon next to its Caption property, from the Use Expression dialog bind it thus: '+14084352700' +Variables.HrdbEmployeeData.dataSet\[$i\].empId [![](../assets/cordova_uc2.png)](../assets/cordova_uc2.png)![](https://www.wavemaker.com../assets/Job-title-label-caption-expression.png)
5. the default share icon in the live list with a call icon. [![](../assets/cordova_uc3.png)](../assets/cordova_uc3.png)
6. per our use case, upon clicking a contact info, a call should initiate. None of WaveMaker standard plugins can make a call. So, a third party Cordova plugin is needed in order to make a call. We will use the following [\-plugin-call-number](https://www.npmjs.com/package/cordova-plugin-call-number) found in npm.
7. add this plugin
    
    - Android build dialog
    - to Plugins section.
    - plugin details and click ‘Add’ button.
    - ‘Save’
    
    [![](../assets/cordova_uc4.png)](../assets/cordova_uc4.png)
8. , plugin's API can be used. Since we need to make a call when the user taps on the list, set the on Tap event of the list to JavaScript and define the following JavaScript function to invoke the plugin API. Before invoking the Cordova API, a check has to be done whether Cordova is there. This will prevent errors in preview in browser.
    
    1Tap = function($event, widget) {
     var phoneNumber = '+14084352700' + widget.item.empId,
     bypassAppChooser = true;
     if (!Utils.hasCordova()) {
     return;
     }
     window.plugins.CallNumber.callNumber(onCallSuccess, onCallFail, phoneNumber, bypassAppChooser);
    };
    
    Add Utils dependency to the page as below:
    - Utils = App.getDependency('Utils');
        
        ![](../assets/cordova_uc5.png)
9. [a Model Variable](http://[supsystic-show-popup id=105]) called that will hold the plugin's response. callResponse is of entry type with message and success as its properties. Giving default values will help in identifying the type of the property. For example, success has false as the default value. From that, it can be inferred that success is of boolean type. [![](../assets/cordova_uc6.png)](../assets/cordova_uc6.png)
10. plugin's API takes success and error function as arguments which are invoked after execution of native code. From the onCallSuccess and onCallFailure callback of the plugin set the plugin's response to callResponse.
    
     onCallSuccess = function(result) {
                Page.Variables.callResponse.dataSet.message = "CALL SUCCESS (" + result + ")";
                Page.Variables.callResponse.dataSet.success = true;
            },
            onCallFail = function(result) {
                Page.Variables.callResponse.dataSet.message = "CALL FAILED (" + result + ")";
                Page.Variables.callResponse.dataSet.success = false;
            };
    
    ![](https://www.wavemaker.com../assets/code-view.png)
11. variable can be used in bindings. In the below image we are showing how a Button widget's Badge property can be used to display the call response message. [![](../assets/cordova_uc8.png)](../assets/cordova_uc8.png)
12. party plugins will not work WaveLens. So, build the app to test it

App Use Cases

- [1\. Setting Splashscreen Images & App Icons](/learn/how-tos/splashscreens-icons/)
- [2\. Using Cordova Plugins](#)
    - [Steps to include Cordova plugin](#steps)
    - [Use Case](#use_case)
