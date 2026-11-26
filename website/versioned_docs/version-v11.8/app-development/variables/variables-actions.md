---
title: "Actions"
id: "variables-actions"
---
Introduction to Actions in WaveMaker. Learn how to implement actions. 

--- 

Variables and Actions form the glue between the frontend UI and the backend services. Variables provide data integration for the widgets, while Actions implement the business logic, rules and data flows. For more information about creating variables, see [Variables](/learn/app-development/variables/variables).

Actions are the tasks performed such as invoking a backend API, database CRUD operation or navigating to another page etc. when a UI event occurs. Events could be either user-initiated or can occur as a result of another task being performed.

## Action Types

Actions can be categorized based on the triggering event:

|No. | Action Types | Description |
|---|---|---|
|1. | **[Navigation](/learn/app-development/variables/navigation-action/)** |To pass control from one page to another passing data if needed. | 
|2.|**[Login](/learn/app-development/variables/login-action/)** |To trigger at the time of user login.|
|3.|**[Logout](/learn/app-development/variables/logout-action/)** |To trigger at the time of user logout. |
|4.|**[Timer](/learn/app-development/variables/timer-action/)** | To trigger an action based on time interval.|
|5.|**[Notification](/learn/app-development/variables/notification-action/)** | To alert the user of any information. |

## Error Handling

WaveMaker Variables dealing with external services like Web, Database etc. may not always return with a successful response. Sometimes the Variable call may fail due to various reasons like server validation, request timeout, etc. To gracefully handle such scenarios, a default **Notification Action** (_toaster target_) named _appNotification_ is created in the app. By default, all Variables invoke this action on error response from the target service. This enables the app has a central point of error handling. 

The default appNotification Action can further be customized as per requirement. For example, if you want the app to display errors in an alert dialog, the appNotification action can be changed to alert type. To suppress the default error handling, simply delete the appNotification action. For more information, see [Error handling](/learn/how-tos/error-handling-wavemaker-app/).

[![variable error](/learn/assets/vars_error.png)](/learn/assets/vars_error.png)

