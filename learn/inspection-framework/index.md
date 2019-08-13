---
title: "Inspection Framework"
id: "inspection-framework"
---

framework is available since WaveMaker 10.0. Inspection Framework helps you locate errors, custom code or any unsupported methods in your project. For example, you can use this feature for the project migration process to identify unsupported methods. Using the inspection framework, you can perform tests and include this feature in your QA cycle to help you find code errors. Also, with this, you can point to the project’s custom code and edit and fix any code errors you may have. 

## to use Inspection Framework

can locate Inspection framework from the More options menu located on the bottom-left corner when you open a project. See the image below:

![](https://www.wavemaker.com../assets/inspectionframeworklowcode.png)

initiate the inspection framework, you click the More options menu and click Run. When you run the inspection framework from your project, if there are any unsupported methods or errors in your code, it shows them on the screen immediately. following guide helps you with each rule that Inspection Framework will help you identify and fix the issues in your project.

## AngularJS Service

This rule attempts to catch and prevent any usage of AngularJS Service.

### Details

If you want to remove AngularJS service this rule can help you by warning you of any usage of AngularJS service in your app.

#### includes:

(‘myService’, function() {});

For replacing AngularJS service, we can use objects defined on the App.

#### of incorrect code for this rule

(‘myService’, function($rootScope) {
this.someFunction = function() {
	...
	$rootScope.x
	...
}
});

$controller(‘$scope’, ‘myService’ function($scope, myService) {
myService.someFunction();
});

#### of correct code for this rule

 = {
	someFunction: function() {
		…
	App.x //$rootScope to be replaced with App
	...
	}
}

();

## AngularJS Controller

This rule attempts to catch and prevent any usage of the AngularJS controller.

### Details

If you want to remove AngularJS controller this rule can help you by warning you of any usage of AngularJs controller in your app.

#### includes:

(‘myController’, function() {});

For replacing the AngularJS controller, we can use Prefabs.
Examples of incorrect code for this rule:
Application.controller("myCtrl", function ($scope) {
    $scope.firstName = "Alex";
    $scope.lastName = "Bob";
});

{{firstName}}

#### of correct code for this rule:

Create a prefab with all the properties and methods. Export the prefab to the project where it needs to be used.

## AngularJS Factory

This rule attempts to catch and prevent any usage of AngularJS Factory.

### Details

If you want to remove AngularJS Factory this rule can help you by warning you of any usage of AngularJS factory in your app.

#### includes:

(‘myFactory’, function() {});

For replacing the AngularJS factory, we can use objects defined on the App.

#### of incorrect code for this rule:

(‘myFactory’, function() {
return {
	displayMethod: function () {
		console.log(‘in display method’);
	}
};
});

$controller(‘$scope’, ‘myFactory’, function($scope, myService) {
‘myFactory’.displayMethod();

#### of correct code for this rule:

Define the factory in app.js. Any AngularJS dependency being used in the factory will NOT work. That has to be defined separately in app.js before defining the factory.

 = {
	someFunction: function() {
		…
	App.x //$rootScope to be replaced with App
	...
	}
}

();

## AngularJS Config

This rule attempts to catch and prevent any usage of AngularJS config.

### Details

If you want to remove AngularJS config this rule can help you by warning you of any usage of AngularJS config in your app.

#### includes:

(function() {});

#### of incorrect code for this rule:

(function ($httpProvider) {
    $httpProvider.interceptors.push('myHttpInterceptor');
});

#### of correct code for this rule:

Not supported in Wavemaker 10.x.

## AngularJS Run

This rule attempts to catch and prevent any usage of AngularJS run.

### Details

If you want to remove AngularJS run this rule can help you by warning you of any usage of AngularJS run in your app.

#### includes:

(function() {});

#### of incorrect code for this rule:

(function (editableOptions) {
	editableOptions.theme = “default”;
});

#### of correct code for this rule:

Not supported in Wavemaker 10.x.

## AngularJS Constant

rule attempts to catch and prevent any usage of AngularJS constant.

### Details

If you want to remove AngularJS constant this rule can help you by warning you of any usage of AngularJS constant in your app.

#### of incorrect code for this rule:

('MY\_CONSTANT1', 'The Constant Text Value');

$controller(‘$scope’, ‘myService’ function($scope, myService) {
$scope.testValue = MY\_CONSTANT1;
});

#### of correct code for this rule:

 constants object in script file
App.constants = {
	‘name’: ‘Alex’
}

## AngularJS Value

This rule attempts to catch and prevent any usage of AngularJS value.

### Details

If you want to remove AngularJS value this rule can help you by warning you of any usage of AngularJS value in your app.

#### of incorrect code for this rule:

(‘Test\_Value’, ‘Test’);

$controller(‘$scope’, ‘myService’ function($scope, myService) {
$scope.testValue = Test\_Value;
});

#### of correct code for this rule:

 constants object in script file
App.values = {
	‘Test\_Value’: ‘Test’
}

## AngularJS $scope

This rule attempts to catch and prevent any usage of AngularJS $scope.

### Details

If you want to remove AngularJS $scope this rule can help you by warning you of any usage of AngularJS $scope in your app.

#### includes:

$scope.testValue = ‘test’;
$scope.display = function () {
	console.log($scope.testValue);
}

For replacing AngularJS $scope, we can context for defining variables and methods.

#### of incorrect code for this rule:

("myCtrl", function ($scope) {
    $scope.firstName = "Alex";
    $scope.lastName = "Bob";
});

{{firstName}} {{lastName}}

#### of correct code for this rule:

$scope is not supported in 10.x. Instead of $scope, current context can be used.

 = ‘First Page’
Page.newFunction = function() {
	console.log(‘welcome’);
}

;
Page.newFunction();

## AngularJS Arrow Function

This rule attempts to catch and prevent any usage of AngularJS Arrow functions.

### Details

If you want to remove AngularJS Arrow functions this rule can help you by warning you of any usage of AngularJS arrow functions in your app.

#### includes:

 x = ()=>{return 10;}

For replacing the AngularJS arrow function, we can normal functions.

#### of incorrect code for this rule:

 func => () {console.log(‘in arrow function’);}

();

#### of correct code for this rule:

Arrow functions are not supported in 10.x. Normal functions can be defined and used.

 func = function() {
	console.log(‘normal function’);
}

();

## AngularJS $location

This rule attempts to catch and prevent any usage of AngularJS $location.

### Details

If you want to remove AngularJS $location, this rule can help you by warning you of any usage of AngularJS $location in your app.

#### of incorrect code for this rule:

$location.path(‘/page1’);

#### of correct code for this rule:

(‘/MainPage’);

## AngularJS $apply

This rule attempts to catch and prevent any usage of AngularJS $apply.

### Details

If you want to remove AngularJS $apply this rule can help you by warning you of any usage of AngularJS $apply in your app.

#### of incorrect code for this rule:

$scope.$apply(function () {
	$scope.val1 = ‘test’;
});

#### of correct code for this rule:

Not supported in Wavemaker 10.x.

## AngularJS $watch

This rule attempts to catch and prevent any usage of AngularJS $watch.

### Details

If you want to remove AngularJS $watch this rule can help you by warning you of any usage of AngularJS $watch in your app.

#### of incorrect code for this rule:

$scope.$watch(‘testVal’, function (nv) {
	If (nv) {
	console.log(‘new value’, nv);
}
});

#### of correct code for this rule:

Widget/ Variable events can be used instead of $watch.

## AngularJS $filter

This rule attempts to catch and prevent any usage of the AngularJS $filter.

### Details

If you want to remove AngularJS $filter this rule can help you by warning you of any usage of AngularJS $filter in your app.

#### of incorrect code for this rule:

$scope.fullDate = $filter('date')(today, 'fullDate');

#### of correct code for this rule:

Not supported in Wavemaker 10.x

## AngularJS $window

This rule attempts to catch and prevent any usage of AngularJS $window.

### Details

If you want to remove AngularJS $window this rule can help you by warning you of any usage of AngularJS $window in your app.

#### of incorrect code for this rule:

$window.alert(‘hello world’);

$controller(‘$scope’, ‘$window’ function($scope, myService) {
$window.alert(‘hello world’);
});

#### of correct code for this rule:

$window is not supported in 10x. “Window” can be used in 10x instead of $window.

(“hello world”);

## AngularJS Component

This rule attempts to catch and prevent any usage of AngularJS components.

### Details

If you want to remove AngularJS components this rule can help you by warning you of any usage of AngularJS components in your app.

#### of incorrect code for this rule:

(‘greetUser’, {
	template: ‘Hello, {{$ctrl.user}}!’,
	controller: function GreetUserController() {
		this.user = ‘world’;
}
});

#### of correct code for this rule:

Components are not supported in wavemaker 10.x. You can yse Prefabs instead of the component. Drag and drop the prefab where you want to use instead of the component.

## AngularJS Directive

This rule attempts to catch and prevent any usage of AngularJS directives.

### Details

If you want to remove AngularJS directives this rule can help you by warning you of any usage of AngularJS directives in your app.

#### of incorrect code for this rule:

('helloWorld', function() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: 'Hello {{name}}'
    }
});

#### of correct code for this rule:

Directives are not supported in wavemaker 10.x. You can use Prefabs instead of a directive. Drag and drop the prefab where you want to use instead of a directive.

## AngularJS Provider

This rule attempts to catch and prevent any usage of AngularJS providers.

### Details

If you want to remove AngularJS Provider this rule can help you by warning you of any usage of AngularJS Provider in your app.

#### of incorrect code for this rule:

(“test”, function () {
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

#### of correct code for this rule:

Not supported in 10x. You can use Prefabs with outbound properties.

## AngularJS $parent

This rule attempts to catch and prevent any usage of AngularJS $parent.

### Details

If you want to remove AngularJS $parent this rule can help you by warning you of any usage of AngularJS $parent in your app.

#### of incorrect code for this rule:

$scope.$parent.testValue = ‘test’;

$scope.$parent.testValue;

#### of correct code for this rule:

$parent is not supported in Wavemaker 10.x. Use App or App.activePage based on the requirement.

## AngularJS RouteParams

This rule attempts to catch and prevent any usage of AngularJS RouteParams.

### Details

If you want to remove AngularJS RouteParams this rule can help you by warning you of any usage of AngularJS RouteParams in your app.

#### of incorrect code for this rule:

(function($routeProvider, $locationProvider) {
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

#### of correct code for this rule:

Not supported in Wavemaker 10.x **for Inspection Framework**

<!--td {border: 1px solid #ccc;}br {mso-data-placement:same-cell;}-->

[AngularJS Service](#service)

[AngularJS Controller](#controller)

[AngularJS Factory](#factory)

[AngularJS Config](#config)

[AngularJS Run](#run)

[AngularJS Constant](#constant)

[AngularJS Value](#value)

[AngularJS $scope](#scope)

[AngularJS Arrow function](#arrow)

[AngularJS $location](#location)

[AngularJS $apply](#apply)

[AngularJS $watch](#watch)

[AngularJS $filter](#filter)

[AngularJS $window](#window)

[AngularJS Component](#component)

[AngularJS Directive](#directive)

[AngularJS Provider](#provider)

[AngularJS $parent](#parent)

[AngularJS RouteParams](#routeparams)
