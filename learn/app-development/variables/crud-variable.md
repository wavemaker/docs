---
title: "CRUD Variable for REST Services"
id: ""
sidebar_label: "CRUD Variable"
---
---

For every service imported into the app, APIs exposed by the service can be accessed. To create a CRUD variable, you need to drag-and-drop a widget to invoke the service and store the results of that invocation. The Variable operations are restricted by the offerings of the underlying service.

A comprehensive list of these APIs can be found from the [API Designer](/learn/assets/API_Access.png) after the import of the service. 

:::note
Since the service needs to be invoked to fetch the data, the widgets bound to these variables will display values only at run-time, not in Studio mode.
:::

## Variable Creation

Drag and drop a widget on the canvas. In the following screen, a Datatable widget is used.

![datatable crud variable](/learn/assets/datatable-crud-variable.png)

- **Service**: Select the service name from imported services.
- **Select a service**: If the API exposes multiple services, you can choose from the list.
- **Name**: Set by default, but you can modify it.
- **Owner**: The scope of the Variable. Page is the default option. You can choose Application to make it available across the app.

#### Step-2
You will be directed to the Variables page, with the new variable listed. You can see the following options:
1. a **Web Service** Variable is created,
2. with the default exposed method/selected method as target
3. the **properties tab** contains all the properties like _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
4. the **data tab** will contain the fields serving as _input fields_ for the API
5. the **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** ||
| Update data on input change | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable. |
| Request data on page load | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load. |
| In Flight Behavior | This property determines the behavior when a call is fired through the variable with the previous call still pending. Variable queues all these calls, waits for the previous call completion and then based on the value of the `inFlightBehavior` property, decides what to do with all the queued calls:<br> <br>- doNotExecute - all the queued calls will be discarded, <br>- executeAll - all the calls will be triggered one by one, or <br>- executeLast - only the last call is triggered and the rest are discarded, this is the default behavior|
| **Spinner** |
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple variables are fired then the spinner messages will be displayed as a list below a single spinner. |

## Events

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc. [Know More](/learn/app-development/variables/variables-actions/#events-implementation).

## Methods

Few Methods are exposed for Variables which can be used for achieving more control and accessing extra functionality. Listed here are the same.

## `invoke()`

This method updates the Variable’s dataSet with new data by making a call to the target service.

#### Parameters

**options** (object) - It can have fields as operation. String which can take one of the values list, create, update or delete. If no value is provided then list will be taken as the default

- `inputFields` (key-value pair of inputData)  
- **success** (callback)
- **error** (callback)
- **Return Value** none

#### Example

```
var sv = Page.Variables.[variable_name];
    sv.invoke({
	“operation”: “list”,
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