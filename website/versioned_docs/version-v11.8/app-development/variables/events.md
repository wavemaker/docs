---
title: "Events"
id: "events"
---
Introducing Variable Events. Learn how it works in WaveMaker.

---

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc.

:::note
To learn the life cycle of a variable, see [Events](/learn/app-development/variables/events-overview).
:::

You can set each of these events to trigger an action like Javascript, another variable, navigation or notification calls or a combination of these.

Based on the application needs, a component can be assigned to these events like calling another Service/Live Variable, or a Call Variable for notification, or a JavaScript function for custom logic, etc.

A typical event flow when a variable is used to update data would be:

[![lsv_eventcycle](/learn/assets/LSV_eventcycle.png)](/learn/assets/LSV_eventcycle.png) 

:::important
The onBeforeUpdate event in the above diagram differs based upon the type of variable as explained in the table below. It is:

- onBeforeListRecords for Database CRUD Variable with READ operation
- onBeforeUpdateRecord for Database CRUD Variable with UPDATE operation
- onBeforeInsertRecord for Database CRUD Variable with INSERT operation
- onBeforeDeleteRecord for Database CRUD Variable with DELETE operation
- onBeforeUpdate for all types of variables except Database CRUD Variable
:::

| Events | Description |
| --- | --- |
| **onCanUpdate** | This event is called as soon as the variable is ready to be triggered to hit the target service. |
| **onBeforeListRecords** (for READ operation of Database CRUD variable) | This event is called just before the variable is triggered to hit the target service. “dataFilter” contains an object based on the filter criteria set (that appear under the “Filter Criteria” tab of Variable definition dialog). Each criteria contains the following information - Field Name, Condition, and Value. You can retrieve the criteria using the following method: dataFilter.getCriteria(“field-name”) and make any changes. Allowed actions on the criteria are:  - Retrieve/Validate data of a particular field.   - Change the value of a particular field.  |

### Example 1: Filter 
Change filter criteria as per your use case.

```
Page.HrdbEmployeeDataonBeforeListRecords = function(variable, dataFilter, options) {
    // Validate or retrieve the data of a particular field
    if (dataFilter.getCriteria("jobtitle")[0].value == "Product Manager") {
       return true;
     } else {
    //Change value of a field
     dataFilter.getCriteria("jobtitle")[0].value = "Product Manager";
    }
  };
};
```

### Example 2: Stop execution

```
Page.HrdbEmployeeDataonBeforeListRecords = function(variable, dataFilter, options) {
    // Validate or retrieve the data of a particular field
    if (dataFilter.getCriteria("deptId")[0].value == 1) {
       return false;
     } else {
    //Change value of a field
     dataFilter.getCriteria("deptId")[0].value = 3;
    }
  };
};
```
| Events | Description |
| --- | --- |
| For Database CRUD Variables  |
|**onBeforeUpdateRecord** (for Update operation)   **onBeforeInsertRecord** (for Insert operation)   **onBeforeDeleteRecord** (for Delete operation) | These events are called just before the variable is triggered to hit the target service. “inputData” contains an object having key-value pairs of input fields (that appear under the “Data” tab of Variable definition dialog). The call to the target service from the variable can be prevented by assigning a JavaScript function to this event and returning false from this function. If input data needs modification or validation, it should be done at this place. |

### Example 1
Input data can be modified by simply modifying the “inputData” parameter passed to the function. Please note, calling setInput on the Variable from this event is not valid. “inputData” param should directly be modified.

```
Page.empInsertonBeforeInsertRecord = function(variable, inputData, options) {
    // append/modify fields in the current input data
    inputData.firstname = "Steve";
    inputData.lastname = "Rogers";
};
``` 

### Example 2
Input data can also be modified by returning a new set of input data (object having key-value pair of input data)
```
Page.empInsertonBeforeInsertRecord = function(variable, inputData, options) {
    // return a new set of input data (old one is discarded)
    var new_data = {
        "firstname": "Steve",
        "lastname": "Rogers"
    };
    return new_data;
};
```

### Example 3
If the call to the target service is to be blocked due to any validation failure, return false
```
Page.empInsertonBeforeInsertRecord= function(variable, inputData, options) {
    // Validation Check for mandatory input fields
    // example, block the call if input data does not have fields 'firstname' or 'lastname'
    if (!inputData.firstname || !inputData.lastname) {
        return false;
    }
};
```

| Events | Description |
| --- | --- |
| For all Variables |All Variables, except Database Crud Variables. |
| **onBeforeUpdate** | These events are called just before the variable is triggered to hit the target service. “inputData” contains an object having key-value pairs of input fields (that appear under the “Data” tab of Variable definition dialog). The call to the target service from the variable can be prevented by assigning a JavaScript function to this event and returning false from this function. If input data needs modification or validation, it should be done at this place. |
 

### Example 1
Input data can be modified by simply modifying the “inputData” parameter passed to the function. Please note, calling setInput on the Variable from this event is not valid. “inputData” param should directly be modified.
```
Page.MyJavaServiceVariableonBeforeUpdateRecord = function(variable, inputData, options) {
    // append/modify fields in the current input data
    inputData.firstname = "Steve";
    inputData.lastname = "Rogers";
};
```

### Example 2
Input data can also be modified by returning a new set of input data (object having key-value pair of input data)
```
Page.MyJavaServiceVariableonBeforeUpdate = function(variable, inputData, options) {
    // return a new set of input data (old one is discarded)
    var new_data = {
        "firstname": "Steve",
        "lastname": "Rogers"
    };
    return new_data;
};
```

### Example 3
If the call to the target service is to be blocked due to any validation failure, return false
```
Page.MyJavaServiceVariableonBeforeUpdate = function(variable, inputData, options) {
    // Validation Check for mandatory input fields
    // example, block the call if input data does not have fields 'firstname' or 'lastname'
    if (!inputData.firstname || !inputData.lastname) {
        return false;
    }
};
```
| Events | Description |
| --- | --- |
| **onResult** | This event is triggered as soon as the variable receives a response from the target service. onResult is called whether or not there was an error generated. An additional last argument as the “operation-name” that holds the invoked operation is present for Database CRUD Variables. |
| **onBeforeDatasetReady** | This event is triggered just before the variable's dataSet property is updated with the data received from the target service (after onResult). This event handler gives you the opportunity to manipulate the data before your variable’s dataSet property is assigned this value. If you want to add rows to a Grid or List or Select, this is a good way to add in extra items into your results before your variable is set and your widget is updated. The new data can be returned from here in order to update the Variable’s dataSet. |
| **Usage Examples** | |
| | Example 1: “data” is the response received from the target service. This event gives a chance to process this data before it is assigned to the Variable’s “dataSet” property. Please note, calling setData on the Variable from this event is not valid. Modified “data” should be returned from this event. |
```
Page.HrdbEmployeeDataonBeforeDatasetReady = function(variable, data) {
    // the data has 'firstname' and 'lastname'
    // add a new field 'fullname' into the data
    var new_data = [];
    if (data && data.length) {
        data.forEach(function(datum) {
            datum.fullname = datum.firstname + " " + datum.lastname;
            new_data.push(datum);
        });

        return new_data;
    }
};
```
| | |
| --- | --- |
| **onSuccess** | Allows you to trigger an action when the Variable has completed its life cycle. Any component bound to the resultant dataSet of this Variable will be updated just before this event is triggered. So, If you want to trigger another Variable which is dependent on the dataSet of this Variable, the Variable should be triggered by this event. An additional last argument as the “operation-name” that holds the invoked operation is present for Database CRUD Variables. |
| **onError** | This event is called if there is an error generated during the Service call. An additional last argument as the “operation-name” that holds the invoked operation is present for Database CRUD Variables. |

:::note
WaveMaker supports binding multiple actions to a given event, i.e. a given event can trigger multiple actions.
:::

## Methods

Few Methods are exposed on Variables which can be used for achieving more control and accessing extra functionality. The methods differ based on the type of Variable, see the respective Variable document for the detailed listing.
