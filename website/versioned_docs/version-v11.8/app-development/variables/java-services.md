---
title: "Variable for Java Service"
id: "java-services"
---
---

Java Services can be accessed from within your app using Variables. These variables allow one to trigger the methods within the Java Service, pass the necessary parameters to the method and access the results from the method.

A comprehensive list of these APIs can be found from the [API Designer](/learn/assets/API_Access.png) after the import of the service.

:::note
Since the service needs to be invoked to fetch the data, the widgets bound to these variables will display values only at run-time, not in Studio mode.
:::

## Variable Creation

The **data source** for these Variables comes from a _Java Service APIs_.

1. Select the Variable option from the Variable Workspace Toolbar. 

[![](/learn/assets/var_sel.png)](/learn/assets/var_sel.png)

2. Click New Variable from the Variable Dialog 
[![](/learn/assets/var_new.png?v=20)](/learn/assets/var_new.png?v=20)

3. This will initiate Create Variable wizard with the following steps:
    1. Since we are creating a variable to access Java Service, select **Java Service** as the target action
    2. Select:
        - **Service** - service (already imported) name,
        - **Method** - the method within the Java Service that you want to invoke,
        - **Name** - is set by default but can be modified
        - **Owner** - the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app
    3. Click **Done** to complete the variable creation process
4. You will be directed to the Variables page, with the new variable listed. As you can see:
    1. a **Java Service** Variable is created,
    2. with the selected method as target
    3. the **properties tab** contains all the properties like _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
    4. the **data tab** will contain the fields serving as _input fields_ for the API
    5. the **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Invoke as Variable Java Service

[![](/learn/assets/Var_create.png)](/learn/assets/Var_create.png)[![](/learn/assets/JS_var_create.png)](/learn/assets/JS_var_create.png)

For each method within the Java Service, a service variable can be generated using the appropriate option from the **Operation** property; with the **input parameters** available within the **_Data_ tab** and the **output** available as the **datavalue for binding**. You can invoke the Java Service by triggering a call to the Service Variable generated. In case you have multiple public class methods in your Java Service, you will see multiple Operation options.

For more information on how variables work, see [Variables](/learn/app-development/variables/variables/).

## Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** |
| Update data on input change | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable. |
| Request data on page load | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load. |
| In Flight Behavior | This property determines the behavior when a call is fired through the variable with the previous call still pending. Variable queues all these calls, waits for the previous call completion and then based on the value of the _inFlightBehavior_ property, decides what to do with all the queued calls:     - doNotExecute - all the queued calls will be discarded,   - executeAll - all the calls will be triggered one by one, or   - executeLast - only the last call is triggered and the rest are discarded, this is the default behavior  |
| **Spinner** |
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple variables are fired then the spinner messages will be displayed as a list below a single spinner. |

## Events

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc. [Know more](/learn/app-development/variables/variables-actions/#events-implementation).

## Methods

Few Methods are exposed for Variables which can be used for achieving more control and accessing extra functionality. Listed here are the same.

<table class="reference notranslate"><tbody><tr><td><a href="#invoke">invoke</a></td><td><a href="#cancel">cancel</a></td></tr><tr><td><a href="#getData">getData</a></td><td><a href="#clearData">clearData</a></td><td><a href="#setInput">setInput</a></td></tr></tbody></table>

## invoke()

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
## cancel()

This method aborts the current inflight variable request.

**Parameters**: none **Return Value**: none

**Example**:
```
Page.Variables.[variable_name].cancel();
```
## getData()

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
## clearData()

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
## setInput(key, value)

This method sets the input field value against the specified field(key).

**Parameters**:

- **key**(string): name of the input field
- **value**(*): value for the input field

**Return Value**: Updated inputFields object

**Example**:
```
var sv = Page.Variables.[variable_name];
    sv.setInput("fname","Peter");
    sv.setInput("lname","Parker");
    sv.invoke();
```
## setInput(object)

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
