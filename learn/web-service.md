---
title: "Variable for Web Service"
id: ""
---

For every service imported into the app, APIs exposed by the service can be accessed. A Variable needs to be created to invoke the service and store the results of that invocation. The Variable operations are restricted by the offerings of the underlying service.

A comprehensive list of these APIs can be found from the [API Designer](http://[supsystic-show-popup id=110]) after the import of the service.

**Note**: Since the service needs to be invoked to fetch the data, the widgets bound to these variables will display values only at run-time, not in Studio mode.

# Variable Creation

The **data source** for these Variables comes from a _Web Service APIs_. NOTE: Though the process for creating a variable for WebSocket Service is the same as below, properties and methods are different. [See here for the WebSocket Variable](/learn/app-development/variables/websocket-variable/).

1. Select the Variable option from the Variable Workspace Toolbar. [![](./assets/var_sel.png)](./assets/var_sel.png)
2. Click New Variable from the Variable Dialog [![](./assets/var_new.png?v=20)](./assets/var_new.png?v=20)
3. This will initiate Create Variable wizard with the following steps:
    1. Since we are creating a variable to access Web service APIs, select **Web Service **as the target action
    2. Select:
        - **Service** - service (already imported) name,
        - **Method** - in case the web service exposes multiple services, you can choose from the list
        - **Name** - is set by default but can be modified
        - **Owner** - the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app
    3. Click **Done** to complete the variable creation process
    4. You will be directed to the Variables page, with the new variable listed. As you can see:
        1. a **Web Service** Variable is created,
        2. with the default exposed method/selected method as target
        3. the **properties tab** contains all the properties like _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
        4. the **data tab** will contain the fields serving as _input fields_ for the API
        5. the **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

# Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** |
| Update data on input change | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable. |
| Request data on page load | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load. |
| In Flight Behavior | This property determines the behavior when a call is fired through the variable with the previous call still pending. Variable queues all these calls, waits for the previous call completion and then based on the value of the _inFlightBehavior_ property, decides what to do with all the queued calls:
- doNotExecute - all the queued calls will be discarded,
- executeAll - all the calls will be triggered one by one, or
- executeLast - only the last call is triggered and the rest are discarded, this is the default behavior

 |
| **Spinner** |
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple variables are fired then the spinner messages will be displayed as a list below a single spinner. |

# Events

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc. [Know More](/learn/app-development/variables/variables-actions/#events-implementation).

# Methods

Few Methods are exposed for Variables which can be used for achieving more control and accessing extra functionality. Listed here are the same.

<table class="reference notranslate"><tbody><tr><td><a href="#invoke">invoke</a></td><td><a href="#cancel">cancel</a></td></tr><tr><td><a href="#getData">getData</a></td><td><a href="#clearData">clearData</a></td><td><a href="#setInput">setInput</a></td></tr></tbody></table>

## invoke()

This method updates the Variable’s dataSet with new data by making a call to the target service.

_Parameters_:

- **options**(object) - It can have fields as:
    - inputFields(key-value pair of inputData)
    - page(pagination for Query Service Variable)
    - size(pagination for Query Service Variable)
    - orderBy(pagination for Query Service Variable)
- **success**(callback)
- **error**(callback)

_Return Value_: none

_Example:_

var sv = Page.Variables.\[variable\_name\];
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

## cancel()

This method aborts the current inflight variable request.

_Parameters_: none _Return Value_: none

_Example:_

Page.Variables.\[variable\_name\].cancel();

## getData()

This method returns the variable’s dataSet, i.e., the current data stored in the variable through the listrecords method.

_Parameters_: none

_Return Value_: Array of record objects

_Example:_

var result = Page.Variables.\[variable\_name\].getData();
console.log("result:", result);
// Output: 
// result: {data in the variable}

## clearData()

This method clears the variable dataSet.

_Parameters_: none

_Return Value_: Updated(empty) dataSet of the variable

_Example:_

var result = Page.Variables.\[variable\_name\].clearData();
console.log("result:", result);
// Output: 
// result: {}

## setInput(key, value)

This method sets the input field value against the specified field(key).

_Parameters_:

- **key**(string): name of the input field
- **value**(\*): value for the input field

_Return Value_: Updated inputFields object

_Example:_

var sv = Page.Variables.\[variable\_name\];
    sv.setInput("fname", "Peter");
    sv.setInput("lname", "Parker");
    sv.invoke();

## setInput(object)

This method can also be used to set all the specified key-value pairs as input fields in the variable.

_Parameters_: inputData(object) object or key-value pairs {“key”: “value”,…}

_Return Value_: Updated inputFields object

_Example:_

var sv = Page.Variables.\[variable\_name\];
    sv.setInput({
      "fname": "Peter",
      "lname": "Parker"
     });
    sv.invoke();

< Variables & Actions

6\. Data Integration - Variables

- 6.1 Binding Layer
    - [i. Overview](/learn/app-development/variables/data-integration/)
- [6.2 Variables and Actions](/learn/app-development/variables/variables-actions/)
    - [i. Overview](/learn/app-development/variables/variables-actions/#)
    - [ii. Variables](/learn/app-development/variables/variables-actions/#variables)
        - a. Database CRUD
            - [○ Overview](/learn/app-development/variables/database-crud/)
            - [○ Variable Creation](/learn/app-development/variables/database-crud/#creation)
            - [○ Properties](/learn/app-development/variables/database-crud/#properties)
            - [○ Events](/learn/app-development/variables/database-crud/#events)
            - [○ Methods](/learn/app-development/variables/database-crud/#methods)
        - b. Database API
            - [○ Overview](/learn/app-development/variables/database-apis/)
            - [○ Variable Creation](/learn/app-development/variables/database-apis/#creation)
            - [○ Properties](/learn/app-development/variables/database-apis/#properties)
            - [○ Events](/learn/app-development/variables/database-apis/#events)
            - [○ Methods](/learn/app-development/variables/database-apis/#methods)
        - [c. Web Service](#)
            - [○ Overview](#)
            - [○ Variable Creation](#creation)
            - [○ Properties](#properties)
            - [○ Events](#events)
            - [○ Methods](#methods)
        - d. Java Service
            - [○ Overview](/learn/app-development/variables/java-services)
            - [○ Variable Creation](/learn/app-development/variables/java-services/#creation)
            - [○ Properties](/learn/app-development/variables/java-services/#properties)
            - [○ Events](/learn/app-development/variables/java-services/#events)
            - [○ Methods](/learn/app-development/variables/java-services/#methods)
        - e. Security Service
            - [○ Overview](/learn/app-development/variables/security-service/)
            - [○ Variable Creation](/learn/app-development/variables/security-service/#creation)
            - [○ Properties](/learn/app-development/variables/security-service/#properties)
            - [○ Events](/learn/app-development/variables/security-service/#events)
            - [○ Methods](/learn/app-development/variables/security-service/#methods)
        - f. Model
            - [○ Overview](/learn/app-development/variables/model-variable/)
            - [○ Variable Creation](/learn/app-development/variables/model-variable/#creation)
            - [○ Properties](/learn/app-development/variables/model-variable/#properties)
            - [○ Events](/learn/app-development/variables/model-variable/#events)
            - [○ Methods](/learn/app-development/variables/model-variable/#methods)
        - g. Device Variables
            - [○ Overview](/learn/hybrid-mobile/device-variables/#)
            - [○ Services](/learn/hybrid-mobile/device-variables/#services)
            - [○ Operations](/learn/hybrid-mobile/device-variables/#operations)
            - [○ Events](/learn/hybrid-mobile/device-variables/#events)
            - [○ Methods](/learn/hybrid-mobile/device-variables/#methods)
            - [○ Usage](/learn/hybrid-mobile/device-variables/#usage)
    - [iii. Actions](/learn/app-development/variables/variables-actions/#actions)
        - i. Navigation
            - [○ Overview](/learn/app-development/variables/navigation-action/)
            - [○ Action Creation](/learn/app-development/variables/navigation-action/#creation)
            - [○ Properties](/learn/app-development/variables/navigation-action/#properties)
            - [○ Methods](/learn/app-development/variables/navigation-action/#methods)
        - ii. Login
            - [○ Overview](/learn/app-development/variables/login-action/)
            - [○ Action Creation](/learn/app-development/variables/login-action/#creation)
            - [○ Properties](/learn/app-development/variables/login-action/#properties)
            - [○ Data](/learn/app-development/variables/login-action/#data)
            - [○ Events](/learn/app-development/variables/login-action/#events)
        - iii. Logout
            - [○ Overview](/learn/app-development/variables/logout-action/)
            - [○ Action Creation](/learn/app-development/variables/logout-action/#creation)
            - [○ Properties](/learn/app-development/variables/logout-action/#properties)
            - [○ Events](/learn/app-development/variables/logout-action/#events)
        - iv. Timer
            - [○ Overview](/learn/app-development/variables/timer-action/)
            - [○ Action Creation](/learn/app-development/variables/timer-action/#creation)
            - [○ Properties](/learn/app-development/variables/timer-action/#properties)
            - [○ Events](/learn/app-development/variables/timer-action/#events)
            - [○ Methods](/learn/app-development/variables/timer-action/#methods)
        - v. Notification
            - [○ Overview](/learn/app-development/variables/notification-action/)
            - [○ Action Creation](/learn/app-development/variables/notification-action/#creation)
            - [○ Properties](/learn/app-development/variables/notification-action/#properties)
            - [○ Events](/learn/app-development/variables/notification-action/#events)
            - [○ Methods](/learn/app-development/variables/notification-action/#methods)
    - [iv. Scoping](/learn/app-development/variables/variables-actions/#scoping)
    - [v. Variable Events](/learn/app-development/variables/variables-actions/#events)
    - [vi. Error Handling](/learn/app-development/variables/variables-actions/#error-handling)
- 6.3 Variable Binding
    - [i. Overview](/learn/variables/variable-binding/#)
    - [ii. Data Binding](/learn/variables/variable-binding/#data-binding)
    - [iii. Widget Binding](/learn/variables/variable-binding/#widget-binding)
    - [iv. Binding Options](/learn/variables/variable-binding/#binding-options)
- 6.4 JavaScript Access
    - [i. Overview](/learn/variables/accessing-elements-via-javascript/#)
    - [ii. Widget Controllers](/learn/variables/accessing-elements-via-javascript/#widget-controllers)
    - [iii. Page Scripting](/learn/variables/accessing-elements-via-javascript/#page-scripting)
    - [iv. Script Access](/learn/variables/accessing-elements-via-javascript/#script-access)
