---
title: "Inspection Framework"
id: "inspection-framework"
---
---
Inspection framework is available since WaveMaker 10.0. Inspection Framework helps you locate errors, custom code or any unsupported methods in your project. For example, you can use this feature for the project migration process to identify unsupported methods. Using the inspection framework, you can perform tests and include this feature in your QA cycle to help you find code errors. Also, with this, you can point to the project’s custom code and edit and fix any code errors you may have. 

## How to use Inspection Framework

You can locate **Inspection framework** from the More options menu of the project. See the image below:

![](/learn/assets/inspectionframeworklowcode.png)

To initiate the inspection framework, you click the More options menu and click Run. When you run the inspection framework from your project, if there are any unsupported methods or errors in your code, it shows them on the screen immediately. The following guide helps you with each rule that the Inspection Framework will help you identify and fix the issues in your project.

## Handle Script errors for Widgets Configured with Show in device

This rule attempts to catch and prevent any usage of Widgets that have `showindevice` configured for them and are being accessed in the script without checking if the element exists or not.

### Rule Details

As of 10.7, If a widget has `showindevice` configured as something other than `all`, then it won't be rendered in any other viewport other than the specified one. Hence, before accessing properties of that Widget, a sanity check is required to see if it exists or not. This has been done for performance optimization as it prevents unnecessary Network calls.

#### Examples of incorrect code for this rule

```js
Page.Widgets.EmployeeTable.currentItem.name = "John Doe";

var selectedItem = Page.Widgets.DepartmentList.selecteditem;
Page.Variables.FilterDepartments.dataSet.filter(function(employeeObj) {
    return employeeObj.id === selectedItem.empID
});
```

#### Examples of correct code for this rule

```js
if (Page.Widgets.EmployeeTable) {
    Page.Widgets.EmployeeTable.currentItem.name = "John Doe";
}

if (Page.Widgets.DepartmentList) {
    var selectedItem = Page.Widgets.DepartmentList.selecteditem;
    Page.Variables.FilterDepartments.dataSet.filter(function(employeeObj) {
        return employeeObj.id === selectedItem.empID
    });
}
```

The above checks will ensure that there are no script errors when widgets which may not be present in the DOM are being accessed. Without the above check, `selectedItem.empID` in the return statement will throw a script error if we have configured `showindevice` as `Mobile` for DepartmentList and are trying to access it in a Web Application.

## No Missing Page Elements

This rule attempts to validate all the Pages & Partial elements.

### Rule Details

Each Page or Partial in WaveMaker is composed of Markup, Style, Scripts, Variables and each of it is stored as seperate file in the filesystem as HTML,CSS, JS & JSON files respectively. 

![](/learn/assets/inspection-no-missing-page-elements-details.png)

If any of the files is deleted, the page cannot be formed completely & will cause Deployment failure. Inorder to resolve this error, the user can revert the changes causing the deletion of reported file.

## No Invalid Partials

This rule attempts to validate all the Partial references in the project code.

### Rule Details

If the Page or Partial needs to load another partial as it's content, the markup needs to have a partial container widget with its `content` attribute set to partial name. There are couple of usecases where such partial references can be invalid as listed below,

* If the partial referred in the markup is deleted, the deployment can fail citing the invalid reference.
* If a given partial trying to load itself as its content, the deployment can fail citing recursive reference.

	eg: Partial named `testPartial` can have markup as below,

	```html
	<wm-container name="container1" content="testPartial"></wm-container>
	```

Inorder to resolve errors caused by above listed cases, the user can update the markup to set `content` attribute with valid partial references.

## No Invalid Fontpath

This rule attempts to validate font paths updated in the project CSS files.

### Rule Details

If the project needs to use specific fonts, it can be achieved by adding `@font-face` entry in the `CSS` files. The path of source font file is updated in the `src` property as shown below,

```css
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('fonts/glyphicons-halflings-regular.eot');
  src: url('fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('fonts/glyphicons-halflings-regular.woff') format('woff'), url('fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
```

if the path mentioned in the `src` property is not resolved relatively to the `CSS` file, the deployment can fail citing invalid path error. Inorder to fix this issue, the user needs to update the `src` with valid path.

## No Declaration Block Trailing Semicolon

This rule attempts to validate CSS files for trailing Semicolons

### Rule Details

This rule ensures that the trailing semicolon is required within the decleration block as shown below

```css
.testClass {height: 200px; width: 100px;}
```

# Inspecting No AngulaJS
---

## No AngularJS Service

This rule attempts to catch and prevent any usage of AngularJS Service.

### Rule Details

If you want to remove AngularJS service this rule can help you by warning you of any usage of AngularJS service in your app.

#### That includes:

```js
Application.service(‘myService’, function() {});
```

For replacing AngularJS service, we can use objects defined on the App.

#### Examples of incorrect code for this rule

```js
Application.service(‘myService’, function($rootScope) {
this.someFunction = function() {
	...
	$rootScope.x
	...
}
});
```

### Use

```js
Application.$controller(‘$scope’, ‘myService’ function($scope, myService) {
myService.someFunction();
});
```

#### Examples of correct code for this rule

```js
App.myService = {
	someFunction: function() {
		…
	App.x //$rootScope to be replaced with App
	...
	}
}
```

### Use

```
App.myService.someFunction();
```

## No AngularJS Controller

This rule attempts to catch and prevent any usage of the AngularJS controller.

### Rule Details

If you want to remove AngularJS controller this rule can help you by warning you of any usage of AngularJs controller in your app.

#### That includes:

```js
Application.controller(‘myController’, function() {});

For replacing the AngularJS controller, we can use Prefabs.
Examples of incorrect code for this rule:
Application.controller("myCtrl", function ($scope) {
    $scope.firstName = "Alex";
    $scope.lastName = "Bob";
});
```

### Use

```
{{firstName}}
```

#### Examples of correct code for this rule:

Create a prefab with all the properties and methods. Export the prefab to the project where it needs to be used.

### Use

```js
MyPrefab.firstName
```

## No AngularJS Factory

This rule attempts to catch and prevent any usage of AngularJS Factory.

### Rule Details

If you want to remove AngularJS Factory this rule can help you by warning you of any usage of AngularJS factory in your app.

#### That includes:

```js
Application.factory(‘myFactory’, function() {});
```

For replacing the AngularJS factory, we can use objects defined on the App.

#### Examples of incorrect code for this rule:

```js
Application.factory(‘myFactory’, function() {
return {
	displayMethod: function () {
		console.log(‘in display method’);
	}
};
});
```

### Use

```js
Application.$controller(‘$scope’, ‘myFactory’, function($scope, myService) {
‘myFactory’.displayMethod();
```

#### Examples of correct code for this rule:

Define the factory in app.js. Any AngularJS dependency being used in the factory will NOT work. That has to be defined separately in app.js before defining the factory.

```js
App.myFactory = {
	someFunction: function() {
		…
	App.x //$rootScope to be replaced with App
	...
	}
}
```

### Use

```js
App.myMethod.displayMethod();
```

## No AngularJS Config

This rule attempts to catch and prevent any usage of AngularJS config.

### Rule Details

If you want to remove AngularJS config this rule can help you by warning you of any usage of AngularJS config in your app.

#### That includes:

```js
Application.config(function() {});
```

#### Examples of incorrect code for this rule:

```js
Application.config(function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
});
```

#### Examples of correct code for this rule:

Not supported in WaveMaker 10.x.

## No AngularJS Run

This rule attempts to catch and prevent any usage of AngularJS run.

### Rule Details

If you want to remove AngularJS run this rule can help you by warning you of any usage of AngularJS run in your app.

#### That includes:

```js
Application.run(function() {});
```

#### Examples of incorrect code for this rule:

```js
Application.run(function (editableOptions) {
	editableOptions.theme = “default”;
});
```

#### Examples of correct code for this rule:

Not supported in WaveMaker 10.x.

## No AngularJS Constant

This rule attempts to catch and prevent any usage of AngularJS constant.

### Rule Details

If you want to remove AngularJS constant this rule can help you by warning you of any usage of AngularJS constant in your app.

#### Examples of incorrect code for this rule:


```js
Application.constant('MY_CONSTANT1', 'The Constant Text Value');
```

### Use

```js
Application.$controller(‘$scope’, ‘myService’ function($scope, myService) {
$scope.testValue = MY_CONSTANT1;
});
```

#### Examples of correct code for this rule:

```js
Create constants object in script file
App.constants = {
	‘name’: ‘Alex’
}
```

## No AngularJS Value

This rule attempts to catch and prevent any usage of AngularJS value.

### Rule Details

If you want to remove AngularJS value this rule can help you by warning you of any usage of AngularJS value in your app.

#### Examples of incorrect code for this rule:

```js
Application.value(‘Test_Value’, ‘Test’);
```

### Use

```js
Application.$controller(‘$scope’, ‘myService’ function($scope, myService) {
$scope.testValue = Test_Value;
});
```

#### Examples of correct code for this rule:

Create constants object in script file

```js
App.values = {
	‘Test_Value’: ‘Test’
}
```

## No AngularJS $scope

This rule attempts to catch and prevent any usage of AngularJS $scope.

### Rule Details

If you want to remove AngularJS $scope this rule can help you by warning you of any usage of AngularJS $scope in your app.

#### That includes:

```js
$scope.testValue = ‘test’;
$scope.display = function () {
	console.log($scope.testValue);
}
```

For replacing AngularJS $scope, we can context for defining variables and methods.

#### Examples of incorrect code for this rule:

```js
Application.controller("myCtrl", function ($scope) {
    $scope.firstName = "Alex";
    $scope.lastName = "Bob";
});
```

### Use

```js
{{firstName}} {{lastName}}
```

#### Examples of correct code for this rule:

`$scope` is not supported in 10.x. Instead of `$scope`, current context can be used.

```js
Page.title = ‘First Page’
Page.newFunction = function() {
	console.log(‘welcome’);
}
```

### Use

```js
Page.title;
Page.newFunction();
```

## No AngularJS Arrow Function

This rule attempts to catch and prevent any usage of AngularJS Arrow functions.

### Rule Details

If you want to remove AngularJS Arrow functions this rule can help you by warning you of any usage of AngularJS arrow functions in your app.

#### That includes:

```js
Var x = ()=>{return 10;}
```

For replacing the AngularJS arrow function, we can normal functions.

#### Examples of incorrect code for this rule:

```js
var func => () {console.log(‘in arrow function’);}
```

### Use

```js
func();
```

#### Examples of correct code for this rule:

Arrow functions are not supported in 10.x. Normal functions can be defined and used.

```js
var func = function() {
	console.log(‘normal function’);
}
```

### Use

```js
func();
```

## No AngularJS $location

This rule attempts to catch and prevent any usage of AngularJS $location.

### Rule Details

If you want to remove AngularJS $location, this rule can help you by warning you of any usage of AngularJS $location in your app.

#### Examples of incorrect code for this rule:

```js
$location.path(‘/page1’);
```

#### Examples of correct code for this rule:

```js
Window.location(‘/MainPage’);
```

## No AngularJS `$apply`

This rule attempts to catch and prevent any usage of AngularJS `$apply`.

### Rule Details

If you want to remove AngularJS `$apply` this rule can help you by warning you of any usage of AngularJS ``$apply`` in your app.

#### Examples of incorrect code for this rule:

```js
$scope.`$apply`(function () {
	$scope.val1 = ‘test’;
});
```

#### Examples of correct code for this rule:

Not supported in WaveMaker 10.x.

## No AngularJS $watch

This rule attempts to catch and prevent any usage of AngularJS $watch.

### Rule Details

If you want to remove AngularJS $watch this rule can help you by warning you of any usage of AngularJS $watch in your app.

#### Examples of incorrect code for this rule:

```js
$scope.$watch(‘testVal’, function (nv) {
	If (nv) {
	console.log(‘new value’, nv);
}
});
```

#### Examples of correct code for this rule:

Widget/ Variable events can be used instead of $watch.

## No AngularJS $filter

This rule attempts to catch and prevent any usage of the AngularJS $filter.

### Rule Details

If you want to remove AngularJS $filter this rule can help you by warning you of any usage of AngularJS $filter in your app.

#### Examples of incorrect code for this rule:

```js
$scope.fullDate = $filter('date')(today, 'fullDate');
```

#### Examples of correct code for this rule:

Not supported in WaveMaker 10.x

## No AngularJS $window

This rule attempts to catch and prevent any usage of AngularJS $window.

### Rule Details

If you want to remove AngularJS $window this rule can help you by warning you of any usage of AngularJS $window in your app.

#### Examples of incorrect code for this rule:

```js
$window.alert(‘hello world’);
```

### Use

```js
Application.$controller(‘$scope’, ‘$window’ function($scope, myService) {
$window.alert(‘hello world’);
});
```

#### Examples of correct code for this rule:

$window is not supported in 10x. “Window” can be used in 10x instead of $window.

```js
window.alert(“hello world”);
```

## No AngularJS Component

This rule attempts to catch and prevent any usage of AngularJS components.

### Rule Details

If you want to remove AngularJS components this rule can help you by warning you of any usage of AngularJS components in your app.

#### Examples of incorrect code for this rule:

```js
Application.component(‘greetUser’, {
	template: ‘Hello, {{$ctrl.user}}!’,
	controller: function GreetUserController() {
		this.user = ‘world’;
}
});
```

### Use

#### Examples of correct code for this rule:

Components are not supported in WaveMaker 10.x. You can yse Prefabs instead of the component. Drag and drop the prefab where you want to use instead of the component.

## No AngularJS Directive

This rule attempts to catch and prevent any usage of AngularJS directives.

### Rule Details

If you want to remove AngularJS directives this rule can help you by warning you of any usage of AngularJS directives in your app.

#### Examples of incorrect code for this rule:

```js
Application.directive.directive('helloWorld', function() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: 'Hello {{name}}'
    }
});
```

### Use

#### Examples of correct code for this rule:

Directives are not supported in WaveMaker 10.x. You can use Prefabs instead of a directive. Drag and drop the prefab where you want to use instead of a directive.

## No AngularJS Provider

This rule attempts to catch and prevent any usage of AngularJS providers.

### Rule Details

If you want to remove AngularJS Provider this rule can help you by warning you of any usage of AngularJS Provider in your app.

#### Examples of incorrect code for this rule:

```js
Application.provider(“test”, function () {
	var type;
	return {
		setType: function (value) {
			type= value;
},
$get: function () {
	return {
		title: type + “!!”
};
}
};
}); 
Application.config(function (testProvider) {
	testProvider.setType(“Greeting”);
});
Application.controller(“AppCtrl”, function ($scope, test) {
	$scope.title = test.title;
});
```

#### Examples of correct code for this rule:

Not supported in 10x. You can use Prefabs with outbound properties.

## No AngularJS $parent

This rule attempts to catch and prevent any usage of AngularJS $parent.

### Rule Details

If you want to remove AngularJS $parent this rule can help you by warning you of any usage of AngularJS $parent in your app.

#### Examples of incorrect code for this rule:

```js
$scope.$parent.testValue = ‘test’;
```

### Use

```js
$scope.$parent.testValue;
```

#### Examples of correct code for this rule:

$parent is not supported in WaveMaker 10.x. Use App or App.activePage based on the requirement.

## No AngularJS RouteParams

This rule attempts to catch and prevent any usage of AngularJS RouteParams.

### Rule Details

If you want to remove AngularJS RouteParams this rule can help you by warning you of any usage of AngularJS RouteParams in your app.

#### Examples of incorrect code for this rule:

```js
Application.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/page', {
            template: 'Page'
        })
        .when('/about/:paramOne/:paramTwo', {
            template: 'ABOUT',
            controller: 'aboutCtrl'
        })
        .otherwise({
            template: 'Not Found'
        });
});

Application.controller('aboutCtrl', function($routeParams) {
    $scope.paramOnePrint = $routeParams.paramOne;
    $scope.paramTwoPrint = $routeParams.paramTwo;
});
```

#### Examples of correct code for this rule:

Not supported in WaveMaker 10.x

