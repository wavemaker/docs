---
title: "Variable for Security Service"
id: ""
---

Services can be accessed from within your app using Variables. By default, a Model Variable is created for all applications. In case you need access to more details, you can create a Variable using the appropriate API.

 comprehensive list of these APIs can be found from the [Designer](http://[supsystic-show-popup id=110]) after the import of the service. These include APIs to:

- Access Token, Logged In User details, logged in Time, logged in User Id, Role etc.,
- security and authentication etc..

# Creation

The **data source** for these Variables comes from a _ Service APIs_

1. the Variable option from Variable Workspace Toolbar. [![](../assets/var_sel.png)](../assets/var_sel.png)
2. New Variable from the Variable Dialog [![](../assets/var_new.png?v=20)](../assets/var_new.png?v=20)
3. will initiate Create Variable wizard with the following steps:
    1. we are creating a variable to access Security Service, select  the target action
    2. :
        - \- security service (already set),
        -  - the security operation that you want to invoke,
        - \- is set by default but can be modified
        - \- the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app
    3. to complete the variable creation process
4. will be directed to the Variables page, with the new variable listed. As you can see:
    1. **Service** Variable is created,
    2. the selected operation as target
    3. **tab** contains all the properties like and behavior. [more about properties](#properties)
    4. tab will contain the events that can be configured to trigger any action. [more about events](#events)

data on page load

checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load.

Flight Behavior

property determines the behavior when a call is fired through the variable with the previous call still pending. Variable queues all these calls, waits for the previous call completion and then based on the value of the property, decides what to do with all the queued calls:

- \- all the queued calls will be discarded,
- \- all the calls will be triggered one by one, or
- \- only the last call is triggered and the rest are discarded, this is the default behavior

Context

property specifies on which UI widget the spinner should show. Leave empty if no spinner required.

Message

message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple variables are fired then the spinner messages will be displayed as a list below a single spinner.

the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc. [More](/learn/app-development/variables/variables-actions/#events-implementation)

Few Methods are exposed for Variables which can be used for achieving more control and accessing extra functionality. Listed here are the same.

## ()

method updates the Variable’s dataSet with new data by making a call to the target service.

:

- (object) - It can have fields as:
    - (key-value pair of inputData)
    - (pagination for Query Service Variable)
    - (pagination for Query Service Variable)
    - (pagination for Query Service Variable)
- (callback)
- (callback)

_Value_: none

_:_

 sv = Page.Variables.\[variable\_name\];
    sv.invoke({
       "inputFields": {
       "fname": "Steve",
       "lname": "Rogers"
       }
      }, function(data) {
        // Success Callback
        console.log("success", data);
     }, function(error) {
        // Error Callback
        console.log("error", error)
    });

## ()

method aborts the current inflight variable request.

: none _Value_: none

_:_

\[variable\_name\].cancel();

## ()

method returns the variable’s dataSet, i.e., the current data stored in the variable through the listrecords method.

: none

_Value_: Array of record objects

_:_

 result = Page.Variables.\[variable\_name\].getData();
console.log("result:", result);
// Output: 
// result: {data in the variable}

## ()

This method clears  variable dataSet.

: none

_Value_: Updated(empty) dataSet of the variable

_:_

 result = Page.Variables.\[variable\_name\].clearData();
console.log("result:", result);
// Output: 
// result: {}

## (key, value)

This method sets the input field value against the specified field(key).

:

- (string): name of the input field
- (\*): value for the input field

_Value_: Updated inputFields object

_:_

 sv = Page.Variables.\[variable\_name\];
    sv.setInput("fname": "Peter");
    sv.setInput("lname": "Parker");
    sv.invoke();

## (object)

This method can also be used to set all the specified key-value pairs as input fields in the variable.

: inputData(object) object or key-value pairs {“key”: “value”,…}

_Value_: Updated inputFields object

_:_

 sv = Page.Variables.\[variable\_name\];
    sv.setInput({
      "fname": "Peter",
      "lname": "Parker"
     });
    sv.invoke();

< Variables & Actions

6\. Data Integration - Variables

- 6.1 Binding Layer
    - [Overview](/learn/app-development/variables/data-integration/)
- [6.2 Variables and Actions](/learn/app-development/variables/variables-actions/)
    - [Overview](/learn/app-development/variables/variables-actions/#)
    - [Variables](/learn/app-development/variables/variables-actions/#variables)
        - a. Database CRUD
            - [Overview](/learn/app-development/variables/database-crud/)
            - [Variable Creation](/learn/app-development/variables/database-crud/#creation)
            - [Properties](/learn/app-development/variables/database-crud/#properties)
            - [Events](/learn/app-development/variables/database-crud/#events)
            - [Methods](/learn/app-development/variables/database-crud/#methods)
        - b. Database API
            - [Overview](/learn/app-development/variables/database-apis/)
            - [Variable Creation](/learn/app-development/variables/database-apis/#creation)
            - [Properties](/learn/app-development/variables/database-apis/#properties)
            - [Events](/learn/app-development/variables/database-apis/#events)
            - [Methods](/learn/app-development/variables/database-apis/#methods)
        - c. Web Service
            - [Overview](/learn/app-development/variables/web-service/)
            - [Variable Creation](/learn/app-development/variables/web-service/#creation)
            - [Properties](/learn/app-development/variables/web-service/#properties)
            - [Events](/learn/app-development/variables/web-service/#events)
            - [Methods](/learn/app-development/variables/web-service/#methods)
        - d. Java Service
            - [Overview](/learn/app-development/variables/java-services)
            - [Variable Creation](/learn/app-development/variables/java-services/#creation)
            - [Properties](/learn/app-development/variables/java-services/#properties)
            - [Events](/learn/app-development/variables/java-services/#events)
            - [Methods](/learn/app-development/variables/java-services/#methods)
        - [Security Service](#)
            - [Overview](#)
            - [Variable Creation](#creation)
            - [Properties](#properties)
            - [Events](#events)
            - [Methods](#methods)
        - f. Model
            - [Overview](/learn/app-development/variables/model-variable/)
            - [Variable Creation](/learn/app-development/variables/model-variable/#creation)
            - [Properties](/learn/app-development/variables/model-variable/#properties)
            - [Events](/learn/app-development/variables/model-variable/#events)
            - [Methods](/learn/app-development/variables/model-variable/#methods)
        - g. Device Variables
            - [Overview](/learn/hybrid-mobile/device-variables/#)
            - [Services](/learn/hybrid-mobile/device-variables/#services)
            - [Operations](/learn/hybrid-mobile/device-variables/#operations)
            - [Events](/learn/hybrid-mobile/device-variables/#events)
            - [Methods](/learn/hybrid-mobile/device-variables/#methods)
            - [Usage](/learn/hybrid-mobile/device-variables/#usage)
    - [Actions](/learn/app-development/variables/variables-actions/#actions)
        - i. Navigation
            - [Overview](/learn/app-development/variables/navigation-action/)
            - [Action Creation](/learn/app-development/variables/navigation-action/#creation)
            - [Properties](/learn/app-development/variables/navigation-action/#properties)
            - [Methods](/learn/app-development/variables/navigation-action/#methods)
        - ii. Login
            - [Overview](/learn/app-development/variables/login-action/)
            - [Action Creation](/learn/app-development/variables/login-action/#creation)
            - [Properties](/learn/app-development/variables/login-action/#properties)
            - [Data](/learn/app-development/variables/login-action/#data)
            - [Events](/learn/app-development/variables/login-action/#events)
        - iii. Logout
            - [Overview](/learn/app-development/variables/logout-action/)
            - [Action Creation](/learn/app-development/variables/logout-action/#creation)
            - [Properties](/learn/app-development/variables/logout-action/#properties)
            - [Events](/learn/app-development/variables/logout-action/#events)
        - iv. Timer
            - [Overview](/learn/app-development/variables/timer-action/)
            - [Action Creation](/learn/app-development/variables/timer-action/#creation)
            - [Properties](/learn/app-development/variables/timer-action/#properties)
            - [Events](/learn/app-development/variables/timer-action/#events)
            - [Methods](/learn/app-development/variables/timer-action/#methods)
        - v. Notification
            - [Overview](/learn/app-development/variables/notification-action/)
            - [Action Creation](/learn/app-development/variables/notification-action/#creation)
            - [Properties](/learn/app-development/variables/notification-action/#properties)
            - [Events](/learn/app-development/variables/notification-action/#events)
            - [Methods](/learn/app-development/variables/notification-action/#methods)
    - [Scoping](/learn/app-development/variables/variables-actions/#scoping)
    - [Variable Events](/learn/app-development/variables/variables-actions/#events)
    - [Error Handling](/learn/app-development/variables/variables-actions/#error-handling)
- 6.3 Variable Binding
    - [Overview](/learn/variables/variable-binding/#)
    - [Data Binding](/learn/variables/variable-binding/#data-binding)
    - [Widget Binding](/learn/variables/variable-binding/#widget-binding)
    - [Binding Options](/learn/variables/variable-binding/#binding-options)
- 6.4 JavaScript Access
    - [Overview](/learn/variables/accessing-elements-via-javascript/#)
    - [Widget Controllers](/learn/variables/accessing-elements-via-javascript/#widget-controllers)
    - [Page Scripting](/learn/variables/accessing-elements-via-javascript/#page-scripting)
    - [Script Access](/learn/variables/accessing-elements-via-javascript/#script-access)
