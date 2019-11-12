---
title: "Variable for Database APIs"
id: ""
sidebar_label: "Database APIs"
---
---

For every database table imported into the app, APIs are generated. In addition to the CRUD operations, functionalities like Count, Filter, Get by field name, Get associated table data etc. can be accessed through the corresponding APIs. These Database APIs also include those corresponding to Queries and Procedures created within the data model.

Variable can be created using these **Database APIs**.

- The operations include, a comprehensive list can be found from the [API Designer](/learn/assets/API_Access.png) after the import of the database:
    - **Get**
    - **Count **
    - **Export**
    - **Filter**
    - **FindAssociated **in case of related tables
- Any REST APIs generated when [Queries](http://[supsystic-show-popup id=117]) and [Procedure Calls](http://[supsystic-show-popup id=118]) are saved. **Note**: Since the queries/procedure needs to be executed to fetch the data, the widgets bound to these variables will display values only at run-time, not in Studio mode.

# Variable Creation

The **data source** for these Variables comes from a _Database APIs_. There are two ways of creating variables:

1. from [variable workspace toolbar](#direct)
2. at the time of [binding data and live widgets](#widgets);

## Variable Creation - direct method

1. Select Variable option from the Variables Workspace Toolbar. [![](/learn/assets/var_sel.png)](/learn/assets/var_sel.png)
2. Click New Variable from the Variable Dialog [![](/learn/assets/var_new.png?v=20)](/learn/assets/var_new.png?v=20)
3. This will initiate Create Variable wizard with the following steps:
    
    1. Since we are creating a variable to access database API operations, select **Database API** as the target operation
    2. Select:
        - **Database** - database (already imported) name,
        - **API Type** - choose between table, query or procedure API
        - **Table/Query/Procedure - **choose the corresponding table, query or procedure. In the case of Table, you have to further select the specific API.
        - **Name** - is set by default but can be modified
        - **Owner** - the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app
    3. Click **Done** to complete the variable creation process
    
    [![](/learn/assets/dbapi_varcr_direct.png)](/learn/assets/dbapi_varcr_direct.png)
4. You will be directed to the Variables page, with the new variable listed. [![](/learn/assets/dbapi_varcr_direct_var.png)](/learn/assets/dbapi_varcr_direct_var.png) As you can see:
    1. a **Database API** Variable is created,
    2. with the selected API/query/procedure as target
    3. the **properties tab** contains all the properties like _server options_, _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
    4. the **data tab** will contain the fields serving as _input fields_ for the API
    5. the **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Variable Creation - from Data & Live Widgets

We will show the steps in creating Variable using the Data Table widget. The steps will be same for any Data Widgets

1. Drag and drop a **Data Table **onto the canvas
2. Set **Retrieve Data** from _Service_ **Note**: If you have not imported any database or web service in your application, you will be prompted to import the same.
3. Once you have imported the data source, choose _Database API _from the list of **service type**
4. Set the **service** to the desired _database_ and then select an **Operation/Type** from the list of APIs for tables within the selected database or query/procedure name. [![](/learn/assets/dbapi_varcr_dt.png)](/learn/assets/dbapi_varcr_dt.png)
5. Once you have selected the service type and the service you can:
    - change the **name of the variable** generated
    - **Data Configuration** includes:
        - You also have the option choose a particular data node.
        - **Records per request** to be fetched, default set to 20
        - **Update data on input change** will ensure that the data content of the variable is refreshed when the value of the input parameter changes
        - **Request data on page load** will ensure that the data is fetched when the page rendering the variable data is loaded
6. This will be followed by steps to select the Data Table layout and columns to be displayed.
7. You can see the variable listed Variables dialog As you can see:
    1. a **Database API** Variable for selected operation is created,
    2. which is a **page scoped variable,**
    3. with the selected database and API as target
    4. the **properties tab** contains all the properties like _server options_, _behavior_ and _spinner_ behavior. (Click on the Variable to view the Variable definition). [Know more about properties](#properties).
    5. the **data tab** will contain the fields serving as _filter fields_ for data fetch operation
    6. The **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

# Properties

| **Property** | **Description** |
| --- | --- |
| **Server Options** Available only for Query APIs |
| Records per request
(Available only for Query APIs) | This property sets the number of records to be fetched at runtime. It can be set to a value with 100 being maximum allowed value. 0 is invalid and entering the same will reset it to the default value. The default value is 20.

In the Development profile, the maximum limit is set to 100 records for optimized performance. For Deployment profile, you can change this limit by changing the change the "Records per Request" for the Database from the Config Profiles for Deployment Profile. |
| Order by

(Available only for Query APIs) | Property to use for ordering the data. Sorting can be in ascending or descending order. By default, it is set to the Primary Key Field ascending order. You can add more fields, or delete this setting.

**Usage**: You can select the fields to which you want the data to be ordered from a drop-down list and click on + to add new order by field. By default, the order is set to descending which can be changed by a simple click operation. |
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
    sv.setInput("fname": "Peter");
    sv.setInput("lname": "Parker");
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
        - [b. Database API](#)
            - [○ Overview](#)
            - [○ Variable Creation](#creation)
            - [○ Properties](#properties)
            - [○ Events](#events)
            - [○ Methods](#methods)
        - c. Web Service
            - [○ Overview](/learn/app-development/variables/web-service/)
            - [○ Variable Creation](/learn/app-development/variables/web-service/#creation)
            - [○ Properties](/learn/app-development/variables/web-service/#properties)
            - [○ Events](/learn/app-development/variables/web-service/#events)
            - [○ Methods](/learn/app-development/variables/web-service/#methods)
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
