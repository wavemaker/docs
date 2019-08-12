---
title: "Variable for Database APIs"
date: "2017-08-10"
---

every database table imported into the app, APIs are generated. In addition to the CRUD operations, functionalities like Count, Filter, Get by field name, Get associated table data etc. can be accessed through the corresponding APIs. These Database APIs also include those corresponding to Queries and Procedures created within the data model.

can be created using these **Database APIs**

- operations include, a comprehensive list can be found from the [Designer](http://[supsystic-show-popup id=110]) after the import of the database:
    
    - case of related tables
- REST APIs generated when [](http://[supsystic-show-popup id=117])and [Calls](http://[supsystic-show-popup id=118]) are saved. : Since the queries/procedure needs to be executed to fetch the data, the widgets bound to these variables will display values only at run-time, not in Studio mode.

# Creation

The **data source** for these Variables comes from a _APIs_ There are two ways of creating variables:

1. [workspace toolbar](#direct)
2. the time of [data and live widgets](#widgets);

## Creation - direct method

1. Variable option from the Variables Workspace Toolbar. [![](../assets/var_sel.png)](../assets/var_sel.png)
2. New Variable from the Variable Dialog [![](../assets/var_new.png?v=20)](../assets/var_new.png?v=20)
3. will initiate Create Variable wizard with the following steps:
    
    1. we are creating a variable to access database API operations, select **API** as the target operation
    2. :
        - \- database (already imported) name,
        - **Type** - choose between table, query or procedure API
        - **/Query/Procedure - ** the corresponding table, query or procedure. In the case of Table, you have to further select the specific API.
        - \- is set by default but can be modified
        - \- the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app
    3. to complete the variable creation process
    
    [![](../assets/dbapi_varcr_direct.png)](../assets/dbapi_varcr_direct.png)
4. will be directed to the Variables page, with the new variable listed. [![](../assets/dbapi_varcr_direct_var.png)](../assets/dbapi_varcr_direct_var.png) As you can see:
    1. **API** Variable is created,
    2. the selected API/query/procedure as target
    3. **tab** contains all the properties like _options_, and behavior. [more about properties](#properties)
    4. **tab** will contain the fields serving as _fields_ for the API
    5. tab will contain the events that can be configured to trigger any action. [more about events](#events)

## Creation - from Data & Live Widgets

We will show the steps in creating Variable using the Data Table widget. The steps will be same for any Data Widgets

1. and drop a **Table ** the canvas
2. **Data** from : If you have not imported any database or web service in your application, you will be prompted to import the same.
3. you have imported the data source, choose _API _ the list of ** type**
4. the to the desired and then select an **/Type** from the list of APIs for tables within the selected database or query/procedure name. [![](../assets/dbapi_varcr_dt.png)](../assets/dbapi_varcr_dt.png)
5. you have selected the service type and the service you can:
    - the **of the variable** generated
    - **Configuration** includes:
        - also have the option choose a particular data node.
        - **per request** to be fetched, default set to 20
        - **data on input change** will ensure that the data content of the variable is refreshed when the value of the input parameter changes
        - **data on page load** will ensure that the data is fetched when the page rendering the variable data is loaded
6. will be followed by steps to select the Data Table layout and columns to be displayed.
7. can see the variable listed Variables dialog As you can see:
    1. **API** Variable for selected operation is created,
    2. is a **scoped variable,**
    3. the selected database and API as target
    4. **tab** contains all the properties like _options_, and behavior. (Click on the Variable to view the Variable definition).  [more about properties](#properties)
    5. **tab** will contain the fields serving as _fields_ for data fetch operation
    6. tab will contain the events that can be configured to trigger any action. [more about events](#events)

**Options** Available only for Query APIs

per request

(Available only for Query APIs)

property sets the number of records to be fetched at runtime. It can be set to a value with 100 being maximum allowed value. 0 is invalid and entering the same will reset it to the default value. The default value is 20.

In the Development profile, the maximum limit is set to 100 records for optimized performance. For Deployment profile, you can change this limit by changing the change the "Records per Request" for the Database from the Config Profiles for Deployment Profile.

by

(Available only for Query APIs)

to use for ordering the data. Sorting can be in ascending or descending order. By default, it is set to the Primary Key Field ascending order. You can add more fields, or delete this setting.

**Usage**: You can select the fields to which you want the data to be ordered from a drop-down list and click on + to add new order by field. By default, the order is set to descending which can be changed by a simple click operation.

data on input change

checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable.

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
        - [Database API](#)
            - [Overview](#)
            - [Variable Creation](#creation)
            - [Properties](#properties)
            - [Events](#events)
            - [Methods](#methods)
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
        - e. Security Service
            - [Overview](/learn/app-development/variables/security-service/)
            - [Variable Creation](/learn/app-development/variables/security-service/#creation)
            - [Properties](/learn/app-development/variables/security-service/#properties)
            - [Events](/learn/app-development/variables/security-service/#events)
            - [Methods](/learn/app-development/variables/security-service/#methods)
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
