---
title: "Inspection Framework"
id: ""
---

Inspection framework is available since WaveMaker 10.0. Inspection Framework helps you locate errors, custom code or any unsupported methods in your project. For example, you can use this feature for the project migration process to identify unsupported methods. Using the inspection framework, you can perform tests and include this feature in your QA cycle to help you find code errors. Also, with this, you can point to the project’s custom code and edit and fix any code errors you may have. 

## How to use Inspection Framework

You can locate Inspection framework from the More options menu located on the bottom-left corner when you open a project. See the image below:

![](https://www.wavemaker.com../assets/inspectionframeworklowcode.png)

To initiate the inspection framework, you click the More options menu and click Run. When you run the inspection framework from your project, if there are any unsupported methods or errors in your code, it shows them on the screen immediately. The following guide helps you with each rule that Inspection Framework will help you identify and fix the issues in your project.

## No AngularJS Service

This rule attempts to catch and prevent any usage of AngularJS Service.

### Rule Details

If you want to remove AngularJS service this rule can help you by warning you of any usage of AngularJS service in your app.

#### That includes:

Application.service(‘myService’, function() {});

For replacing AngularJS service, we can use objects defined on the App.

#### Examples of incorrect code for this rule

Application.service(‘myService’, function($rootScope) {
this.someFunction = function() {
	...
	$rootScope.x
	...
}
});

### Use

Application.$controller(‘$scope’, ‘myService’ function($scope, myService) {
myService.someFunction();
});

#### Examples of correct code for this rule

App.myService = {
	someFunction: function() {
		…
	App.x //$rootScope to be replaced with App
	...
	}
}

### Use

App.myService.someFunction();

## No AngularJS Controller

This rule attempts to catch and prevent any usage of the AngularJS controller.

### Rule Details

If you want to remove AngularJS controller this rule can help you by warning you of any usage of AngularJs controller in your app.

#### That includes:

Application.controller(‘myController’, function() {});

For replacing the AngularJS controller, we can use Prefabs.
Examples of incorrect code for this rule:
Application.controller("myCtrl", function ($scope) {
    $scope.firstName = "Alex";
    $scope.lastName = "Bob";
});

### Use

{{firstName}}

#### Examples of correct code for this rule:

Create a prefab with all the properties and methods. Export the prefab to the project where it needs to be used.

### Use

MyPrefab.firstName

## No AngularJS Factory

This rule attempts to catch and prevent any usage of AngularJS Factory.

### Rule Details

If you want to remove AngularJS Factory this rule can help you by warning you of any usage of AngularJS factory in your app.

#### That includes:

Application.factory(‘myFactory’, function() {});

For replacing the AngularJS factory, we can use objects defined on the App.

#### Examples of incorrect code for this rule:

Application.factory(‘myFactory’, function() {
return {
	displayMethod: function () {
		console.log(‘in display method’);
	}
};
});

### Use

Application.$controller(‘$scope’, ‘myFactory’, function($scope, myService) {
‘myFactory’.displayMethod();

#### Examples of correct code for this rule:

Define the factory in app.js. Any AngularJS dependency being used in the factory will NOT work. That has to be defined separately in app.js before defining the factory.

App.myFactory = {
	someFunction: function() {
		…
	App.x //$rootScope to be replaced with App
	...
	}
}

### Use

App.myMethod.displayMethod();

## No AngularJS Config

This rule attempts to catch and prevent any usage of AngularJS config.

### Rule Details

If you want to remove AngularJS config this rule can help you by warning you of any usage of AngularJS config in your app.

#### That includes:

Application.config(function() {});

#### Examples of incorrect code for this rule:

Application.config(function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
});

#### Examples of correct code for this rule:

Not supported in Wavemaker 10.x.

## No AngularJS Run

This rule attempts to catch and prevent any usage of AngularJS run.

### Rule Details

If you want to remove AngularJS run this rule can help you by warning you of any usage of AngularJS run in your app.

#### That includes:

Application.run(function() {});

#### Examples of incorrect code for this rule:

Application.run(function (editableOptions) {
	editableOptions.theme = “default”;
});

#### Examples of correct code for this rule:

Not supported in Wavemaker 10.x.

## No AngularJS Constant

This rule attempts to catch and prevent any usage of AngularJS constant.

### Rule Details

If you want to remove AngularJS constant this rule can help you by warning you of any usage of AngularJS constant in your app.

#### Examples of incorrect code for this rule:

Application.constant('MY\_CONSTANT1', 'The Constant Text Value');

### Use

Application.$controller(‘$scope’, ‘myService’ function($scope, myService) {
$scope.testValue = MY\_CONSTANT1;
});

#### Examples of correct code for this rule:

Create constants object in script file
App.constants = {
	‘name’: ‘Alex’
}

## No AngularJS Value

This rule attempts to catch and prevent any usage of AngularJS value.

### Rule Details

If you want to remove AngularJS value this rule can help you by warning you of any usage of AngularJS value in your app.

#### Examples of incorrect code for this rule:

Application.value(‘Test\_Value’, ‘Test’);

### Use

Application.$controller(‘$scope’, ‘myService’ function($scope, myService) {
$scope.testValue = Test\_Value;
});

#### Examples of correct code for this rule:

Create constants object in script file
App.values = {
	‘Test\_Value’: ‘Test’
}

## No AngularJS $scope

This rule attempts to catch and prevent any usage of AngularJS $scope.

### Rule Details

If you want to remove AngularJS $scope this rule can help you by warning you of any usage of AngularJS $scope in your app.

#### That includes:

$scope.testValue = ‘test’;
$scope.display = function () {
	console.log($scope.testValue);
}

For replacing AngularJS $scope, we can context for defining variables and methods.

#### Examples of incorrect code for this rule:

Application.controller("myCtrl", function ($scope) {
    $scope.firstName = "Alex";
    $scope.lastName = "Bob";
});

### Use

{{firstName}} {{lastName}}

#### Examples of correct code for this rule:

$scope is not supported in 10.x. Instead of $scope, current context can be used.

Page.title = ‘First Page’
Page.newFunction = function() {
	console.log(‘welcome’);
}

### Use

Page.title;
Page.newFunction();

## No AngularJS Arrow Function

This rule attempts to catch and prevent any usage of AngularJS Arrow functions.

### Rule Details

If you want to remove AngularJS Arrow functions this rule can help you by warning you of any usage of AngularJS arrow functions in your app.

#### That includes:

Var x = ()=>{return 10;}

For replacing the AngularJS arrow function, we can normal functions.

#### Examples of incorrect code for this rule:

var func => () {console.log(‘in arrow function’);}

### Use

func();

#### Examples of correct code for this rule:

Arrow functions are not supported in 10.x. Normal functions can be defined and used.

var func = function() {
	console.log(‘normal function’);
}

### Use

func();

## No AngularJS $location

This rule attempts to catch and prevent any usage of AngularJS $location.

### Rule Details

If you want to remove AngularJS $location, this rule can help you by warning you of any usage of AngularJS $location in your app.

#### Examples of incorrect code for this rule:

$location.path(‘/page1’);

#### Examples of correct code for this rule:

Window.location(‘/MainPage’);

## No AngularJS $apply

This rule attempts to catch and prevent any usage of AngularJS $apply.

### Rule Details

If you want to remove AngularJS $apply this rule can help you by warning you of any usage of AngularJS $apply in your app.

#### Examples of incorrect code for this rule:

$scope.$apply(function () {
	$scope.val1 = ‘test’;
});

#### Examples of correct code for this rule:

Not supported in Wavemaker 10.x.

## No AngularJS $watch

This rule attempts to catch and prevent any usage of AngularJS $watch.

### Rule Details

If you want to remove AngularJS $watch this rule can help you by warning you of any usage of AngularJS $watch in your app.

#### Examples of incorrect code for this rule:

$scope.$watch(‘testVal’, function (nv) {
	If (nv) {
	console.log(‘new value’, nv);
}
});

#### Examples of correct code for this rule:

Widget/ Variable events can be used instead of $watch.

## No AngularJS $filter

This rule attempts to catch and prevent any usage of the AngularJS $filter.

### Rule Details

If you want to remove AngularJS $filter this rule can help you by warning you of any usage of AngularJS $filter in your app.

#### Examples of incorrect code for this rule:

$scope.fullDate = $filter('date')(today, 'fullDate');

#### Examples of correct code for this rule:

Not supported in Wavemaker 10.x

## No AngularJS $window

This rule attempts to catch and prevent any usage of AngularJS $window.

### Rule Details

If you want to remove AngularJS $window this rule can help you by warning you of any usage of AngularJS $window in your app.

#### Examples of incorrect code for this rule:

$window.alert(‘hello world’);

### Use

Application.$controller(‘$scope’, ‘$window’ function($scope, myService) {
$window.alert(‘hello world’);
});

#### Examples of correct code for this rule:

$window is not supported in 10x. “Window” can be used in 10x instead of $window.

window.alert(“hello world”);

## No AngularJS Component

This rule attempts to catch and prevent any usage of AngularJS components.

### Rule Details

If you want to remove AngularJS components this rule can help you by warning you of any usage of AngularJS components in your app.

#### Examples of incorrect code for this rule:

Application.component(‘greetUser’, {
	template: ‘Hello, {{$ctrl.user}}!’,
	controller: function GreetUserController() {
		this.user = ‘world’;
}
});

### Use

#### Examples of correct code for this rule:

Components are not supported in wavemaker 10.x. You can yse Prefabs instead of the component. Drag and drop the prefab where you want to use instead of the component.

## No AngularJS Directive

This rule attempts to catch and prevent any usage of AngularJS directives.

### Rule Details

If you want to remove AngularJS directives this rule can help you by warning you of any usage of AngularJS directives in your app.

#### Examples of incorrect code for this rule:

Application.directive.directive('helloWorld', function() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: 'Hello {{name}}'
    }
});

### Use

#### Examples of correct code for this rule:

Directives are not supported in wavemaker 10.x. You can use Prefabs instead of a directive. Drag and drop the prefab where you want to use instead of a directive.

## No AngularJS Provider

This rule attempts to catch and prevent any usage of AngularJS providers.

### Rule Details

If you want to remove AngularJS Provider this rule can help you by warning you of any usage of AngularJS Provider in your app.

#### Examples of incorrect code for this rule:

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

#### Examples of correct code for this rule:

Not supported in 10x. You can use Prefabs with outbound properties.

## No AngularJS $parent

This rule attempts to catch and prevent any usage of AngularJS $parent.

### Rule Details

If you want to remove AngularJS $parent this rule can help you by warning you of any usage of AngularJS $parent in your app.

#### Examples of incorrect code for this rule:

$scope.$parent.testValue = ‘test’;

### Use

$scope.$parent.testValue;

#### Examples of correct code for this rule:

$parent is not supported in Wavemaker 10.x. Use App or App.activePage based on the requirement.

## No AngularJS RouteParams

This rule attempts to catch and prevent any usage of AngularJS RouteParams.

### Rule Details

If you want to remove AngularJS RouteParams this rule can help you by warning you of any usage of AngularJS RouteParams in your app.

#### Examples of incorrect code for this rule:

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

#### Examples of correct code for this rule:

Not supported in Wavemaker 10.x**Rules for Inspection Framework**

<!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}-->

[No AngularJS Service](#service)

[No AngularJS Controller](#controller)

[No AngularJS Factory](#factory)

[No AngularJS Config](#config)

[No AngularJS Run](#run)

[No AngularJS Constant](#constant)

[No AngularJS Value](#value)

[No AngularJS $scope](#scope)

[No AngularJS Arrow function](#arrow)

[No AngularJS $location](#location)

[No AngularJS $apply](#apply)

[No AngularJS $watch](#watch)

[No AngularJS $filter](#filter)

[No AngularJS $window](#window)

[No AngularJS Component](#component)

[No AngularJS Directive](#directive)

[No AngularJS Provider](#provider)

[No AngularJS $parent](#parent)

[No AngularJS RouteParams](#routeparams)
