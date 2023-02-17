---
title: "Variable for Database CRUD"
id: "database-crud"
sidebar_label: "Database CRUD"
---
---

**Database CRUD Variable** connects to an individual database entity through auto generated CRUD APIs. It contains the values from the specified database table and controls such as Live Form require a Database CRUD Variable as input.

As the name suggests, operations include the CRUD operations on the database:

- **Read** which can be used to fetch data from the database;
- **Insert/Update** which can be used to insert data to a database, this would require the fields from the data tab bound either to static default values or from widgets capturing and processing the input from the user. 

:::note
Any fields that are not bound will be set to NULL. If according to your use case user is prevented from updating a column value then you can uncheck the **Updatable** option for that column from the **Database Designer**. 
:::

[See here for more](/learn/app-development/services/database-services/working-database-schema/#metadata-implementation).

- **Delete** which can be used to delete data from the database, the primary key value needs to be bound from the data tab.

## Variable Creation

The **data source** for these Variables comes from a _Database_. There are two ways of creating variables:

1. from [variable workspace toolbar](#direct)
2. at the time of [binding data and live widgets](#widgets);

## Variable Creation - direct method

Here we list the steps to create a Variable for Database CRUD operations:

1. Select the Variable option from the Variable Workspace Toolbar. 

[![](/learn/assets/var_sel.png)](/learn/assets/var_sel.png)
 
2. Click New Variable from the Variable Dialog 

[![](/learn/assets/var_new.png?v=20)](/learn/assets/var_new.png?v=20)

3. This will initiate the Create Variable wizard with the following steps:
    
    1. Since we are creating a variable to perform database CRUD operations, select **Database CRUD** as the target operation
    2. Select:
        - **Database** - database (already imported) name,
        - **Table** - entity or table within the database and
        - **Operation** - choose from read, insert, update or delete depending upon the purpose of the variable
        - **Name** - is set by default but can be modified
        - **Owner** - the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app
    3. Click **Done** to complete the variable creation process
    
    [![](/learn/assets/dbcrud_varcr_direct.png)](/learn/assets/dbcrud_varcr_direct.png)

4. You will be directed to the Variables page, with the new variable listed.  
[![](/learn/assets/dbcrud_varcr_direct_var.png)](/learn/assets/dbcrud_varcr_direct_var.png)  
As you can see:  
    1. a **Database CRUD** Variable for selected operation is created,
    2. with the selected database and table as target
    3. the **Properties tab** contains all the properties like _server options_, _behavior_ and _spinner_ behavior.
    4. the **Data tab** will contain the fields for which the values can be set/bound for Insert, Delete and Update operations. Note for Update operation all the fields need to be set irrespective of whether they are to be updated or not
    5. (for READ operation) the **Filter Criteria tab** will contain the fields serving as _filter fields_ for data fetch operation. [Know more about Filter Criteria usage](/learn/how-tos/using-filter-criteria-database-crud-variable/).
    6. the **Events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Variable Creation - from Data & Live Widgets

We will show the steps in creating Variable using the Data Table widget. The steps will be same for any Data Widgets

1. Drag and drop a **Data Table** onto the canvas
2. Set **Retrieve Data** from _Service_ 

:::note
If you have not imported any database or web service in your application, you will be prompted to import the same.
:::

3. Once you have imported the data source, choose _Database CRUD_ from the list of **service type**
4. Set the **service** to the desired _database_ and then select a **Table/Entity** from the list of entities of tables within the selected database. [![](/learn/assets/dbcrud_varcr_dt.png)](/learn/assets/dbcrud_varcr_dt.png)
5. Once you have selected the service type and the service you can change the **name of the variable** generated.  
  
**Data Configuration** includes:    
    - You also have the option choose a particular data node.
    - **Records per request** to be fetched, default set to 20
    - **Update data on input change** will ensure that the data content of the variable is refreshed when the value of the input parameter changes
    - **Request data on page load** will ensure that the data is fetched when the page rendering the variable data is loaded.
    
6. This will be followed by steps to select the Data Table layout and columns to be displayed.
7. You can see the variable listed Variables dialog  

[![](/learn/assets/dbcrud_varcr_dt_var.png)](/learn/assets/dbcrud_varcr_dt_var.png) 

As you can see:
1. a **Database CRUD** Variable for Read operation is created,
2. which is a **page scoped variable,**
3. with the selected database and table as target
4. the **properties tab** contains all the properties like _server options_, _behavior_ and _spinner_ behavior. (Click on the Variable to view the Variable definition). [Know more about properties](#properties).
5. the **filter criteria tab** will contain the fields serving as _filter fields_ for data fetch operation
6. The **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Properties
---
Variables created for Database CRUD are special variables that store the results of a database that was created or imported into the WaveMaker App.

| **Property** | **Description** |
| --- | --- |
| **Server Options** |
| **Match Mode** | This property specifies how to apply the filter on fields under the Data tab.    The options are:    - **start**: match characters at the front of the string. For example, "Wa" would match "WaveMaker".   - **end**: match characters at the end of the string. For example, "Maker" would match "WaveMaker".   - **anywhere**: match characters anywhere in the string. For example, "ve" would match "WaveMaker".   - **exact**: match all characters the string. For example, only "WaveMaker" would match "WaveMaker".|
| **Records per request** | This property sets the number of records to be fetched at runtime. It can be set to a value with 100 being maximum allowed value. 0 is invalid and entering the same will reset it to the default value. The default value is 20.    In the Development profile, the maximum limit is set to 100 records for optimized performance. For Deployment profile, you can change this limit by changing the change the “Records per Request” for the Database from the Config Profiles for Deployment Profile. |
| **Design Max. Results** | The number of records that are returned when viewing data at design time. |
| **Order by** | Property to use for ordering the data. Sorting can be in ascending or descending order. By default, it is set to the Primary Key Field ascending order. You can add more fields, or delete this setting.    **Usage**: You can select the fields to which you want the data to be ordered from a drop-down list and click on + to add new order by field. By default, the order is set to descending which can be changed by a simple click operation. |
| **Ignore Case** | If checked, the filter will ignore case. For example, "wa" will match "WaveMaker". |
| **Behavior** |
| **Update data on input change** | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable. |
| **Request data on page load** | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load. |
| **In Flight Behavior** | This property determines the behavior when a call is fired through the variable with the previous call still pending. Variable queues all these calls, waits for the previous call completion and then based on the value of the _inFlightBehavior_ property, decides what to do with all the queued calls:     - `doNotExecute` - all the queued calls will be discarded,   - `executeAll` - all the calls will be triggered one by one, or   - `executeLast` - only the last call is triggered and the rest are discarded, this is the default behavior  |
| **Spinner** |
| **Spinner Context** | This property specifies the UI widget on which the spinner should show. Leave empty if no spinner required. |
| **Spinner Message** | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple variables are fired then the spinner messages will be displayed as a list below a single spinner. |

## Events

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc. [Know More](/learn/app-development/variables/variables-actions/#events-implementation).

## Methods

Few Methods are exposed for Variables which can be used for achieving more control and accessing extra functionality. Listed here are the same.

<table class="reference notranslate"><tbody><tr><td><a href="#listRecords">listRecords</a></td><td><a href="#createRecord">createRecord</a></td><td><a href="#updateRecord">updateRecord</a></td><td><a href="#deleteRecord">deleteRecord</a></td></tr><tr><td><a href="#getData">getData</a></td><td><a href="#clearData">clearData</a></td><td><a href="#setInput">setInput</a></td><td><a href="#setFilter">setFilter</a></td></tr></tbody></table>

### listRecords(options, successCallback, errorCallback)

This method updates the Variable’s dataSet with new data by making a call to the Live DB Service. This is an asynchronous method that fetches data from target Live DB Service and updates it on the dataSet of the variable. The data can be accessed through the successCallback method. Error handling can be done in the errorCallback method.

**Parameters**:

- **options**(object): The object can have fields as `filterFields` - `key-value` pairs of fields for filtering read calls as `{“key”: “value”}`
- **successCallback**(method): callback method called on successful invocation of the variable.
- **errorCallback**(method): callback method called if an error is encountered while invocation.

**Return Value**: None

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
// Example 1: Get all data for Employees table
lv.listRecords({}, function(data) {
      // Success Callback
      console.log('success', data)
   }, function(error) {
      // Error Callback
      console.error('error', error)
});

var lv = Page.Variables.HrdbEmployeeData;
// Example 2: Set custom page and size
lv.listRecords({
     "page": 2,
     "pagesize": 5
     }, function(data) {
       // Success Callback
       console.log('success', data)
     }, function(error) {
       // Error Callback
       console.error('error', error)
 });

var lv = Page.Variables.HrdbEmployeeData;
// Example 3: Get data filtered on the table fields
lv.listRecords({
     filterFields: {
               "city": {
               "value": "New York"
                }
            }
     }, function(data) {
       // Success Callback
       console.log('success', data)
     }, function(error) {
       // Error Callback
       console.error('error', error)
 });
```
We can also specify the filterFields and orderBy options while invoking the variable. In the below example, the variable will get all the records satisfying the condition deptId==1 & empId>1, and also with the specified sort order. Please refer the [Filter Conditions doc](/learn/how-tos/using-filter-conditions-variable) for the list of available matchModes.

**Example**:

```
lv.listRecords({
     filterFields: {
        "deptId": {
                "value": 1,
                "matchMode": "EQUALS"
        },
        "empId": {
            "value": 1,
            "matchMode": "GREATER_THAN"
        }
    },
    orderBy: "empId desc, firstname desc"
 });

```
### updateRecord(object, success callback, error callback)

This method makes a call to the Live Service to update the provided record in the target table. This is an asynchronous method that updates the record into the target table and updates it on the dataSet of the variable. The updated record is passed and can be accessed in the successCallback method as a parameter named "data". Error handling can be done in the errorCallback method.

**Parameters**:

- **options**(object): This object can have fields as a row - record object as `{"field": "value"}`. Complete record object should be passed along with the primary key.
- **successCallback**(method): callback method called on successful invocation of the variable.
- **errorCallback**(method): callback method called if an error is encountered while invocation.

**Return Value**: None

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
        // Example 1: Update a record
        lv.updateRecord({
            row: {
                "empId": 11,
                "firstname": "Steve",
                "lastname": "Rogers",
                "username": "captain.steve"
            }
        }, function(data) {
            // Success Callback
            console.log("successfully updated employee", data);
        }, function(error) {
            // Error Callback
            console.error("error while updating employee", error)
        });
```

### createRecord(object, successCallback, errorCallback)

This method makes a call to the Live Service to insert a new record into the target table. This is an asynchronous method that inserts the record into the target table and updates it on the dataSet of the variable. The newly created record can be accessed in the successCallback method. Error handling can be done in the errorCallback method.

**Parameters**:

- **options**(object): This object can have fields as row - record object as `{"field": "value",..}`
- **successCallback**(method): callback method called on successful invocation of the variable.
- **errorCallback**(method): callback method called if an error is encountered while invocation.

**Return Value**: None

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
// Example 1: Insert a record into Employee table
lv.createRecord({
    row: {
        'firstname': "Steve",
        'lastname': "Rogers",
        "username": "steve.rogers"
    }
}, function(data) {
    // Success Callback
    console.log("Successfully inserted employee:", data);
    // Output:
    // Successfully inserted employee: {empId: 11, firstname: “Steve”,...}
}, function(error) {
    // Error Callback
    console.error("error while inserting employee", error)
});
```
### updateRecord(object, success callback, error callback)

This method makes a call to the Live Service to update the provided record in the target table. This is an asynchronous method that updates the record into the target table and updates it on the dataSet of the variable. The updated record is passed and can be accessed in the successCallback method as a parameter named "data". Error handling can be done in the errorCallback method.

**Parameters**:

- **options**(object): This object can have fields as a row - record object as `{"field": "value"}`. Complete record object should be passed along with the primary key.
- **successCallback**(method): callback method called on successful invocation of the variable.
- **errorCallback**(method): callback method called if an error is encountered while invocation.

**Return Value**: None

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
// Example 1: Update a record
lv.updateRecord({
    row: {
        "empId": 11,
        "firstname": "Steve",
        "lastname": "Rogers",
        "username": "captain.steve"
    }
}, function(data) {
    // Success Callback
    console.log("successfully updated employee", data);
}, function(error) {
    // Error Callback
    console.error("error while updating employee", error)
});
```
### deleteRecord(options, successCallback, errorCallback)

This method makes a call to the Live Service to delete the passed record in the target table. This is an asynchronous method that fetches data from target service and updates it on the dataSet of the variable. The data can be accessed in the successCallback method. Error handling can be done in the errorCallback method.

**Parameters**:

- **options**(object): This object can have optional fields as row - record object to be deleted as {"key":"value"}
- **successCallback**(method): callback method called on successful invocation of the variable.
- **errorCallback**(method): callback method called if an error is encountered while invocation.

**Return Value**: None

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
// delete a record
lv.deleteRecord({
      row: {
           "empId": 11 // primary key
           }
      }, function(success) {
      // Success Callback
      console.log("successfully deleted employee (boolean)", success);
      }, function(error) {
      // Error Callback
      console.error("error while deleting employee", error)
});
```

### getData()

This method returns the variable’s dataSet, i.e., the current data stored in the variable through the listrecords method.

**Parameters**: none

**Return Value**: Array of record objects

**Example**:

```
var result = Page.Variables.HrdbEmployeeData.getData();
        console.log("result", result);
        //  Output:
        result: [Object, Object, Object], // data in the table
```

### clearData()

This method clears the variable dataSet.

**Parameters**: none

**Return Value**: Updated(empty) dataSet of the variable

**Example**:
```
var result = Page.Variables.HrdbEmployeeData.clearData();
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
var lv = Page.Variables.HrdbEmployeeData;
        lv.setInput("firstname", "Tony");
        lv.setInput("lastname", "Stark");
        lv.createRecord();
```
### setInput(object)

This method can also be used to set all the specified key-value pairs as input fields in the variable.

**Parameters**: inputData(object) object or key-value pairs {“key”: “value”,…}

**Return Value**: Updated inputFields object

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
        lv.setInput({
            "firstname": "Peter",
            "lastname": "Parker"
        });
        lv.createRecord();
```

### setFilter(key, value)

This method sets the filter field value against the specified field(key)

**Parameters**:

- key(string): name of the input field
- value(*): value for the input field

**Return Value**: Updated filterFields object

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
        lv.setFilter("department.name", "Engineering"); // department is a related table
        lv.setFilter("city", "New York");
        lv.listRecords();
```

### setFilter(object)

This method can also be used to set all the specified key-value pairs as filter fields in the variable.

**Parameters**: inputData(object) object or key-value pairs {“key”: “value”,…}

**Return Value**: Updated filterFields object

**Example**:
```
var lv = Page.Variables.HrdbEmployeeData;
        lv.setFilter({
            "deptId": 1, // deptId is the foreign key reference to department table
            "city": "New York"
        });
        lv.listRecords();
```
