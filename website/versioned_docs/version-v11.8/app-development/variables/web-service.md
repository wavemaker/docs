---
title: "Service Variable"
id: "web-service"
sidebar_label: "Service Variable"
---
---

For every service imported into the app, the APIs exposed by the service can be accessed to perform many operations with it. A variable needs to be created to invoke the service and store the results of that invocation. The Variable operations are restricted by the offerings of the underlying service.

A comprehensive list of these APIs can be found from the [API Designer](/learn/assets/API_Access.png) after the import of the service.

:::note
Since the service needs to be invoked to fetch the data, the widgets bound to these variables will display values only at run-time, not in Studio mode.
:::

## How to Create a Service Variable

The **data source** for these Variables comes from imported REST and SOAP services. You can create a Service variable by using the following two approaches depending on the source of the data.

1. Service Variable for **[Web Service](/learn/app-development/services/web-services/web-services)** (REST APIs, SOAP, WebSocket)
2. Service Variable for **[Imported APIs](/learn/app-development/services/api-designer/import-rest-apis-swagger)** (Swagger/Open API)

:::important
The process for creating a variable for WebSocket Service is the same as below, however, the properties and methods are different. For more information, see [WebSocket Variable](/learn/app-development/variables/websocket-variable/).
:::

![select web services](/learn/assets/select-service-variable.png)

### Service Variable for Web Services

1. Select **Variable** from the workspace toolbar.

![variable creation](/learn/assets/var_sel.png)

2. Click **New Variable** from the Variable Dialog.

![new variable](/learn/assets/var_new.png)

3. Select **Web Services** as a target action for Variable.

![select web services](/learn/assets/select-web-services.PNG)

4. In the new Variable dialog, configure the properties for the variable.

:::important
The data source for the Variable comes from the imported Services.
:::

![web service variable](/learn/assets/web-service-variable.png)

- **Service**: Select the service name from imported services.
- **Name**: Set by default, but you can modify it.
- **Owner**: The scope of the Variable. Page is the default option. You can choose Application to make it available across the app.
- Click **Done** to complete the variable creation process.

### Service Variable for Imported APIs

1. Select **Variable** from the workspace toolbar.

![variable creation](/learn/assets/var_sel.png)

2. Click **New Variable** from the Variable Dialog.

![new variable](/learn/assets/var_new.png)

3. Select **Imported APIs** as a target action for Variable.

![select imported api](/learn/assets/select-imported-api.png)

4. In the new Variable dialog, configure the properties for the variable.

![swagger variable](/learn/assets/other-endpoints-variable.png)

:::note
You can create a CRUD variable to perform create, read, update, delete operations using the **Entities (CRUD)** option. For more information, see [Service Variable](/learn/app-development/variables/web-service#service-variable-for-imported-apis).
:::

- **Service**: Select the [Imported Service](/learn/app-development/services/api-designer/import-rest-apis-swagger#importing-swagger).
- **Type**: Select the **Type** as `Other Endpoints`.
- **Method**: If the API exposes multiple services, you can choose from the list.
- **Name**: Set by default, but you can modify it.
- **Owner**: The scope of the Variable. Page is the default option. You can choose Application to make it available across the app.
- Click **Done** to complete the variable creation process.

### Variable Properties and Events

![variable creation](/learn/assets/var_sel.png)

You will be directed to the Variables page, with the new variable listed. You can see the following options.

![crud variable properties](/learn/assets/service-variable-properties.png)

1. **Name**: You can modify the variable name.
2. **Owner**: The scope of the Variable. Page is the default option. You can choose Application to make it available across the app.
3. A new **Web Service** variable created with the default exposed method/selected method as a target.
4. The **Properties** tab contains all the properties like behavior and spinner behavior. [Learn more](#properties).
5. The **Data** tab contains the fields serving as **Input Fields** for the API.
6. The **Events** tab contains the events that can be configured to trigger any action. [Learn more](#events).

## Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** |
| Update data on input change | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable. |
| Request data on page load | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load. |
| In Flight Behavior | This property determines the behavior when a call is fired through the variable with the previous call still pending. Variable queues all these calls, waits for the previous call completion and then based on the value of the `inFlightBehavior` property, decides what to do with all the queued calls:   - doNotExecute - all the queued calls will be discarded,  - executeAll - all the calls will be triggered one by one, or  - executeLast - only the last call is triggered and the rest are discarded, this is the default behavior|
| **Spinner** |
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple variables are fired then the spinner messages will be displayed as a list below a single spinner. |

## Events

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, and more.

- OnBeforeUpdate
- OnResult
- OnError
- OnBeforeDatasetReady
- OnCanUpdate
- OnSuccess

To learn how to implement Events, see [Events Documentation](/learn/app-development/variables/events).

## Methods

Few Methods are exposed for Variables which can be used for achieving more control and accessing extra functionality. Listed here are the same.

<table class="reference notranslate"><tbody><tr><td><a href="#invoke">invoke</a></td><td><a href="#cancel">cancel</a></td></tr><tr><td><a href="#getData">getData</a></td><td><a href="#clearData">clearData</a></td><td><a href="#setInput">setInput</a></td></tr></tbody></table>

## `invoke()`

This method updates the Variable’s dataSet with new data by making a call to the target service.

#### `Parameters`

**options** (object) - It can have fields as
- `inputFields` (key-value pair of inputData)
- `page` (pagination for Query Service Variable)
- `size` (pagination for Query Service Variable)
- `orderBy` (pagination for Query Service Variable)

**success** (callback)

**error** (callback)

#### `Return Value`
none

#### Example
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

## `cancel()`


This method aborts the current inflight variable request.

#### `Parameters`
none 

#### `Return Value`
none

#### Example
```
Page.Variables.[variable_name].cancel();
```

## `getData()`

This method returns the variable’s dataSet, i.e., the current data stored in the variable through the listrecords method.

#### `Parameters`
none

#### `Return Value`
Array of record objects

#### Example

```
var result = Page.Variables.[variable_name].getData();
console.log("result:", result);
// Output: 
// result: {data in the variable}
```

## `clearData()`

This method clears the variable dataSet.

#### Parameters
none

#### Return Value
Updated(empty) dataSet of the variable

#### Example

```
var result = Page.Variables.[variable_name].clearData();
console.log("result:", result);
// Output: 
// result: {}
```

## `setInput(key, value)`

This method sets the input field value against the specified field(key).

#### Parameters

- **key**(string): name of the input field
- **value**(*): value for the input field

#### Return Value
Updated inputFields object

#### Example
```
var sv = Page.Variables.[variable_name];
    sv.setInput("fname", "Peter");
    sv.setInput("lname", "Parker");
    sv.invoke();
```
## `setInput(object)`

This method can also be used to set all the specified key-value pairs as input fields in the variable.

#### `Parameters`
```
inputData(object) object, or 
key-value pairs {“key”: “value”,…}
```
#### `Return Value`
Updated `inputFields` object

#### Example
```
var sv = Page.Variables.[variable_name];
    sv.setInput({
      "fname": "Peter",
      "lname": "Parker"
     });
    sv.invoke();
```
