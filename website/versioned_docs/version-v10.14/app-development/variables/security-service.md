---
title: "Variable for Security Service"
id: "security-service"
---
---

Security Services can be accessed from within your app using Variables. By default, a **loggedInUser** Model Variable is created for all applications. In case you need access to more details, you can create a Variable using the appropriate API.

A comprehensive list of these APIs can be found from the [API Designer](/learn/assets/API_Access.png) after the import of the service. These include APIs to:

- get Access Token, Logged In User details, logged in Time, logged in User Id, Role etc.,
- check security and authentication etc..

## Variable Creation

The **data source** for these Variables comes from a _Security Service APIs_.

1. Select the Variable option from Variable Workspace Toolbar. [![](/learn/assets/var_sel.png)](/learn/assets/var_sel.png)
2. Click New Variable from the Variable Dialog [![](/learn/assets/var_new.png?v=20)](/learn/assets/var_new.png?v=20)
3. This will initiate Create Variable wizard with the following steps:
    1. Since we are creating a variable to access Security Service, select **Security ****Service **as the target action
    2. Select:
        - **Service** - security service (already set),
        - **Method** - the security operation that you want to invoke,
        - **Name** - is set by default but can be modified
        - **Owner** - the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app
    3. Click **Done** to complete the variable creation process
4. You will be directed to the Variables page, with the new variable listed. As you can see:
    1. a **Security Service** Variable is created,
    2. with the selected operation as target
    3. the **properties tab** contains all the properties like _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
    4. the **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** ||
| Request data on page load | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load. |
| In Flight Behavior | This property determines the behavior when a call is fired through the variable with the previous call still pending. Variable queues all these calls, waits for the previous call completion and then based on the value of the _inFlightBehavior_ property, decides what to do with all the queued calls:   - doNotExecute - all the queued calls will be discarded,   - executeAll - all the calls will be triggered one by one, or   - executeLast - only the last call is triggered and the rest are discarded, this is the default behavior   |
| **Spinner** ||
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple variables are fired then the spinner messages will be displayed as a list below a single spinner. |

## Events

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc. [Know More](/learn/app-development/variables/variables-actions/#events-implementation).

## Methods

Few Methods are exposed for Variables which can be used for achieving more control and accessing extra functionality. Listed here are the same.

<table class="reference notranslate"><tbody><tr><td><a href="#invoke">invoke</a></td><td><a href="#cancel">cancel</a></td></tr><tr><td><a href="#getData">getData</a></td><td><a href="#clearData">clearData</a></td><td><a href="#setInput">setInput</a></td></tr></tbody></table>

### invoke()

This method updates the Variable’s dataSet with new data by making a call to the target service.

**Parameters**:

- **options**(object) - It can have fields as:
    - inputFields(key-value pair of inputData)
    - page(pagination for Query Service Variable)
    - size(pagination for Query Service Variable)
    - orderBy(pagination for Query Service Variable)
- **success**(callback)
- **error**(callback)

**Return Value**: none

**Example**:
```
var sv = Page.Variables.[variable_name];
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
```
### cancel()

This method aborts the current inflight variable request.

**Parameters**: none **Return Value**: none

**Example**:
```
Page.Variables.[variable_name].cancel();
```
### getData()

This method returns the variable’s dataSet, i.e., the current data stored in the variable through the listrecords method.

**Parameters**: none

**Return Value**: Array of record objects

**Example**:
```
var result = Page.Variables.[variable_name].getData();
console.log("result:", result);
// Output: 
// result: {data in the variable}
```
### clearData()

This method clears the variable dataSet.

**Parameters**: none

**Return Value**: Updated(empty) dataSet of the variable

**Example**:
```
var result = Page.Variables.[variable_name].clearData();
console.log("result:", result);
// Output: 
// result: {}
```
### setInput(key, value)

This method sets the input field value against the specified field(key).

**Parameters**:

- **key**(string): name of the input field
- **value**(*): value for the input field

**Return Value**: Updated inputFields object

**Example**:
```
var sv = Page.Variables.[variable_name];
    sv.setInput("fname": "Peter");
    sv.setInput("lname": "Parker");
    sv.invoke();
```
### setInput(object)

This method can also be used to set all the specified key-value pairs as input fields in the variable.

**Parameters**: inputData(object) object or key-value pairs {“key”: “value”,…}

**Return Value**: Updated inputFields object

**Example**:
```
var sv = Page.Variables.[variable_name];
    sv.setInput({
      "fname": "Peter",
      "lname": "Parker"
     });
    sv.invoke();
```
