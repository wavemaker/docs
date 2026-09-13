---
title: "App Migration from WaveMaker 9x to 10x"
id: "app-migration-wavemaker-9x-10x"
---
---
Upgrade of the WaveMaker MVC Framework from Angular 1.6 to Angular 7 results in changes to the way the app code is generated. The platform automatically migrates your existing app (built in WaveMaker 9x version) to WaveMaker 10 to generate the Angular 7 code base.

This document is to briefly outline the changes that will happen to your apps. You need not manually make any changes to your existing apps.

## Execution Context

Apps in WaveMaker 10 have two independent contexts instead of the scope inheritance model of WaveMaker 9x:

- App
- Page/Partial/Prefab

Earlier the execution context followed a hierarchy `$rootScope` -> `$scope` -> widgets like Dialog, Grid, Form etc.

To refer to the parent context `$parent` and `$scope.$root` for app level was used, which is no longer needed.

Now, these can be referred independently in the App or Page/Partial/Prefab context.

[![](/learn/assets/migration.png)](/learn/assets/migration.png)

## Widget Access

Widgets can now be accessed directly using the context as mentioned above.

For example, to refer to a Button in a Page:

<table><tbody><tr><td>WaveMaker 9x</td><td>WaveMaker 10x</td></tr><tr><td><span class="lang:js decode:true crayon-inline ">$scope.Widgets.button_name</span></td><td><span class="lang:js decode:true crayon-inline ">Page.Widgets.button_name</span></td></tr></tbody></table>

## Variable Access

Similar to Widgets, Variables too can now be accessed directly using the context. App level Variables can be accessed from within Pages using App context.

For example, to refer to a Variable in a Page:

<table><tbody><tr><td>WaveMaker 9x</td><td>WaveMaker 10x</td></tr><tr><td><span class="lang:js decode:true crayon-inline">$scope.Variables.variable_name</span></td><td><span class="lang:js decode:true crayon-inline ">Page.Variables.variable_name</span></td></tr></tbody></table>

Similarly, to refer to an App Variable from a Page:

<table><tbody><tr><td>WaveMaker 9x</td><td>WaveMaker 10x</td></tr><tr><td><span class="lang:js decode:true crayon-inline ">$scope.$root.Variables.variable_name</span></td><td><span class="lang:js decode:true crayon-inline">App.Variables.variable_name</span></td></tr></tbody></table>

## Dependency Injection

Earlier in order to use certain WaveMaker services, we needed to inject the dependencies in app controller:
```
App.controller(‘pageController’, [“$http”,”DialogService”,...,function($http, DialogService, ...){}])
```
Now the dependency injection can be done as shown below:

```
var $http = App.getDependency(‘HttpService’);
var wmToaster = App.getDependency(‘ToasterService’);
var i18nService = App.getDependency(‘i18nService’);
var DialogService = App.getDependency(‘DialogService’);
var wmSpinner = App.getDependency(‘SpinnerService’);
```
## File Upload Widget Changes

When a user drags and drops the File Upload widget a Service Variable owned by page will be created with the service as File Java Service and the operation as upload file. This variable will have a file field in data tab which would be bound to the file select widget by default. Additionally, it will be containing various other input parameters based on the type of service of the variable. The upload will be triggered by the Service Variable created and by default the on-select event of the File widget will be bound to this Service Variable. 

In run mode, as the user selects the file, the Service Variable kicks in and the upload action is triggered. Delinking the Service Variable from the on select event will convert the widget to a File Select widget. In this mode, the File widget will only act as a file selector with no additional modes. There will be no service or operation selection on the widget and hence it will not trigger the upload action internally. Refer to the document for the updated functionality, [doc link](/learn/app-development/widgets/form-widgets/file-upload/).

In earlier versions the File Upload Widget mode selection was made at the widget level, leading to confusion. The existing functionality will continue to work with migration taking care of the transition.

## Utility Functions

All the utility functions, like _angular.uppercase_, _angular.isDefined_, etc., will be migrated to the corresponding Lodash functions. When using in newly created projects, you need to use the Lodash utilities, [refer here to know about Lodash methods](https://lodash.com/docs/).

## Inter-context Communication

The following changes are made to the communication between contexts: 

|Earlier | Replaced with |
|---|---|
|`$rootScope.$emit` | `App.notify`|
| `$rootScope.$broadcast` | `App.notify`|
| `$rootScope.$on` | `App.subscribe` |

## Deprecation

Any Angular 1.6 specific methods, like _directive_,  _module_, _controller_ etc., in your existing projects will no longer work. These will not be migrated and you need to make the appropriate conversion to Angular 7x, manually.

Any Prefabs using Angular modules will not be migrated. The changes need to be done manually.
