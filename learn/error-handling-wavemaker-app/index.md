---
title: "Error Handling in a WaveMaker App"
id: ""
---

WaveMaker platform, by default, takes care of the error handling for all the network calls being made by Variables and Widgets within an App.

By default, the errors are captured by a **Notification Action** named _appNotification_. This Action is created in the app by default and is of type error toaster. Hence, all the errors will be displayed as a red toaster. This can be customized by the developer as per need. If none of the messages is desired in the app, just deleting the appNotification variable will suffice. Widgets do not use the appNotification action. Widgets by default, display error and success messages in the form of a toaster.

In this How To we will be talking about a way to customise these error messages.A common JavaScript error handler in app.js will be invoked once an error is captured by a Variable or Widget. The signature of the error handler is as follows:

/\*
     \* This application level callback function will be invoked after 
     \* a Variable receives an error from the target service.
     \* Use this function to write common error handling logic across the application.
     \* source:    Variable object or Widget Scope
     \* errorMsg:  The error message returned by the target service. 
     \*            This message will be displayed through appNotification variable
     \*            You can change this through $rootScope.Variables.appNotification.setMessage(YOUR\_CUSTOM\_MESSAGE)
     \* xhrObj:      The xhrObject used to make the service call
     \*              This object contains useful information like 
     \*              statusCode, url, request/response body.
     \*/

    App.onServiceError = function (source, errorMsg, xhrObj) {

    };

## Usage Examples

### To show a custom message for all failures corresponding to a particular HTTP status code

An app can be using a number of Variables hitting backend services. These services, in error situations, return an HTTP status code e.g. 400, 404, 500, etc. If the developer wants to display a single message for 404(say), it can be done through the onServiceError handler as follows. In the below code, we are:

1. capturing the error status of 404 from the `xhrObj.status`,
2. building a custom message, and
3. using the `setMessage` method setting the message on the default notification variable

App.onServiceError = function(source, errorMsg, xhrObj) {
        var custom\_message;

        // logic to compute error message
        if (xhrObj.status === 404) {
            custom\_message = 'Requested resource "' + xhrObj.config.url + '" not found. Please contact admin.';
        }

        // set message on the default notification variable
        App.Variables.appNotification.setMessage(custom\_message);
    };

### To log all the errors to a database table

As an app developer, you may want to capture all the service errors in the app and store it in DB. A sample to achieve this can be as follows. Here, `lvErrorLogs` is the Variable corresponding to the table where error logs are to be stored in the database. This table is assumed to contain the columns: _message_, _url_, _httpStatus_ and _userid_.

  App.Variables.lvErrorLogs.insertRecord({
            row: {
                "message": errorMsg.message || errorMsg,
                "url": xhrObj.config.url,
                "httpStatus": xhrObj.status,
                "userid": App.Variables.loggedInUser.dataSet.id
            }
        });

- 1\. How to Handle Error Situations in WaveMaker App
    - [i. Signature of Error Handler](#error-handler)
    - [ii. Use Cases](#usage)
        - [● Common Custom Message](#ex1)
        - [● Logging Error Messages](#ex2)
