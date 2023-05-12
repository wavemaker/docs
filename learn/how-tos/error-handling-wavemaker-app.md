---
title: "Error Handling in WaveMaker App"
id: "error-handling-wavemaker-app"
---
---

WaveMaker platform, by default, takes care of the error handling for all the network calls being made by Variables and Widgets within an App.

## Notification Action

By default, the errors are captured by a **Notification Action** called `appNotification`. This Action is created in the app by default, which is of `error toaster` type. Therefore, all the errors display as a red toaster, and these can be customized. If the messages does not apply, you can delete the `appNotification` variable.

:::tip
For more information about Toasters, see [Toast in Notification Action](/learn/app-development/variables/notification-action#toast).
:::

Widgets do not use the `appNotification` action. Widgets by default, display error and success messages in the form of toaster.

You can customize these error messages. A common JavaScript error handler in `app.js` gets invoked once an error is captured by a Variable or a Widget. The signature of the error handler is explained below.

```
/*
* This application level callback function will be invoked after
* a Variable receives an error from the target service.
* Use this function to write common error handling logic across the application.
* errorMsg:  The error message returned by the target service.
*            This message will be displayed through appNotification variable
*            You can change this through $rootScope.Variables.appNotification.setMessage(YOUR_CUSTOM_MESSAGE)
* xhrObj:      The xhrObject used to make the service call
*              This object contains useful information like
*              statusCode, url, request/response body.
*/

App.onServiceError = function (errorMsg, xhrObj) {

};
```
## Examples
---

### Show custom message for all failures corresponding to HTTP status code

An app could a number of Variables hitting backend services. These services, in case of error, return an HTTP status code, for example, 400, 404, 500, and more. For example, to display a message for 404 error, use the onServiceError handler. In the following code snippet, see how to:

1. Capture the error status of 404 from the `xhrObj.status`.
2. Build a custom message.
3. Use the `setMessage` method setting the message on the default notification variable.

```
App.onServiceError = function(errorMsg, xhrObj) {
        var custom_message;

        // logic to compute error message
        if (xhrObj.status === 404) {
            custom_message = 'Requested resource "' + xhrObj.url + '" not found. Please contact admin.';
        }

        // set message on the default notification variable
        App.Actions.appNotification.setMessage(custom_message);
    };
```

### Log errors to a database table

Capture all service errors of an app and store it in a DB. Here, `lvErrorLogs` is the Variable corresponding to the table where error logs can be stored in a database. This table contains columns, including `message`, `url`, `httpStatus` and `userid`.

```
App.Variables.lvErrorLogs.insertRecord({
        row: {
            "message": errorMsg.message || errorMsg,
            "url": xhrObj.url,
            "httpStatus": xhrObj.status,
            "userid": App.Variables.loggedInUser.dataSet.id
        }
    });
```
