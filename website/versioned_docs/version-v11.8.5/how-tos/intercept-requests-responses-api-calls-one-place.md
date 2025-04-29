---
title: "How to Intercept Request and Response of all API Calls in One Place"
id: "intercept-requests-responses-api-calls-one-place"
---

In this article, you will learn how to intercept request and responses of all the API calls of the app at one place. The following three functions explain the application service and usage examples.

## onBeforeServiceCall

- onBeforeServiceCall is a function which is called before any service call is sent from the application. This function is useful when the user wants to add a particular header to many calls or to append something to the URL of all service calls in the project. It is present in the app.js file of the project.
- It accepts a parameter(requestParams) of type wm HttpRequest and should also return a wm HttpRequest. Below are a few ways to manipulate the requestParams parameter:

Add headers:
```
App.onBeforeServiceCall = function(requestParams) {
 requestParams.headers.set('randomHeader', 'headerValue');
 return requestParams;
};
```
Change URL:
```
App.onBeforeServiceCall = function(requestParams) {
 requestParams.url = // new URL;
 return requestParams;
};
```
Change Method:
```
App.onBeforeServiceCall = function(requestParams) {
 requestParams.method = // new method;
 return requestParams;
};
```
## **onServiceSuccess**

- onServiceSuccess is a function which is called after the success of any service call in the application. This is useful when the user wants to manipulate the data received from service calls success in the project. It is present in the app.js file of the project.
- It accepts two parameters namely data and xhrObj:
    - data contains the success data returned by the call.
    - xhrObj is the complete response received from the network call execution.

## **onServiceError**

- onServiceError is a function which is called after the failure of any service call in the application. This is useful when the user wants to manipulate the error received from service calls failure in the project. It is present in the app.js file of the project.
- It accepts two parameters namely errorMsg and xhrObj:
    - errorMsg contains the error message received in the failed call.
    - xhrObj is the complete response received from the network call failure.
