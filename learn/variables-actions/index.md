---
title: "Variables &  Actions"
id: ""
---

Variables and Actions form the glue between the frontend UI and the backend services. While Variables provide data integration for the widgets, Actions implement the business logic, rules and data flows.

In this document, we give an overview of how Variables and Actions work, the various types, events, and implementation.

function by invoking the associated REST APIs on the server-side, invoking the client-side JavaScript events that are associated or bound by configuration, after the response is obtained. Variables play a significant role in binding the UI and the backend services layer together through configuration and events, eliminating the necessity to write a lot of code.

can be represented using a block with 3 faces, as in the picture below, representing the APIs invoked, events processed and the Model or Entity objects returned by the APIs.

[![variable representation](../assets/var_representation.png)](../assets/var_representation.png)

Variables can be categorized based on the target action:

1. **CRUD** - The basic insert, read, update and delete operations on an imported database entities can be performed using the default CRUD APIs generated at the time of import by the platform.[](/learn/app-development/variables/database-crud/)
2. \- Variables can be created to be based upon the various APIs exposed by the services integrated within the app. These can be further classified as:
    1. **APIs** - Database import generates several APIs for functionalities like Count, Filter, Get by field name, Get associated table data etc. apart from the default CRUD APIs and can be used for more control over the database. These Database APIs also include those corresponding to Queries and Procedures created within the data model.[](/learn/app-development/variables/database-apis/)
    2. **Service** - Variable can be created to access the APIs exposed by the imported web service.[](/learn/app-development/variables/web-service/)
    3. **Service** - For every Java Service created within WaveMaker, its REST API contract is auto-generated and the same can be accessed through a Variable.[](/learn/app-development/variables/java-services/)
    4. **Service** - In case security is enabled for the app, you have access to various security-related data.[](/learn/app-development/variables/security-service/)
3. 1.  - To store data on the client side.[](/learn/app-development/variables/model-variable/)
    2. \- For Mobile Apps, the various device information can be used to access the respective devices like camera, contacts, etc.[](/learn/hybrid-mobile/device-variables/)

are the tasks performed such as invoking a backend API, database CRUD operation or navigating to another page etc. when a UI event occurs. Events could be either user-initiated or can occur as a result of another task being performed.

Actions can be categorized based on the triggering event:

1. to pass control from one page to another passing data if needed.[](/learn/app-development/variables/navigation-action/)
2. to trigger at the time of user login.[](/learn/app-development/variables/login-action/)
3. to trigger at the time of user logout.[](/learn/app-development/variables/logout-action/)
4. to trigger an action based on time interval.[](/learn/app-development/variables/timer-action/)
5. to alert the user of any information.[](/learn/app-development/variables/notification-action/)

# Handling

Variables dealing with external services like Web, Database etc. may not always return with a successful response. Sometimes the Variable call may fail due to various reasons like server validation, request timeout, etc. To gracefully handle such scenarios, a default **Action **( _target_) named is created in the app. By default, all Variables invoke this action on error response from the target service. This enables the app has a central point of error handling. The default appNotification Action can further be customized as per requirement. For example, if you want the app to display errors in an alert dialog, the appNotification action can be changed to alert type. To suppress the default error handling, simply delete the appNotification action. [more about error handling](/learn/how-tos/error-handling-wavemaker-app/)

[![variable error](../assets/vars_error.png)](../assets/vars_error.png)

# of Variables

and Actions can be classified into two based on the scope of the Variable. The two types of variables are - and level variables. While both these types reside at the _side_, the _level_ variables share the data across multiple pages, whereas _level_ variables share the data within the page where they have been declared/created. Whenever you are switching from one page to another, all the previous page level variables are destroyed. [![var_scope](../assets/var_scope.png)](../assets/var_scope.png) : It is advised to have unique names for any variable to avoid confusion. Whenever you try to create or rename a variable WaveMaker will throw an error if another variable of the same name exists either within the page or at the app level.

# Events

a typical life-cycle:

1. user action triggers an event for the variable.
2. event action talks to the data source via the API call.
3. result from API call is reflected in the Data which in turn changes the user data view.

[![var_lifecycle](../assets/var_lifecycle.png)](../assets/var_lifecycle.png)

actions can be said to be responsible for triggering a variable life-cycle:

- **data on page load** is a property that can be set for every variable. This can be used to initialize and fetch Live Variable data during page load.
- \- Live Variable results are paginated and page size can be configured based on the app needs.
- \- Widgets are updated/notified by user events like click, submit, or variable events like pre and post update, on error etc..
- **data on input change** is a property which configures the ability to auto-reload Variable data, for example, if the data filter value changes dynamically from city = ‘New York’ to city = ‘Boston.

[![var_triggers](../assets/var_triggers.png)](../assets/var_triggers.png)

# Implementation

the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc.

can set each of these events to trigger an action like Javascript, another variable, navigation or notification calls or a combination of these.

on the application needs, a component can be assigned to these events like calling another Service/Live Variable, or a Call Variable for notification, or a JavaScript function for custom logic, etc.

typical event flow when a variable is used to update data would be:

[![lsv_eventcycle](../assets/LSV_eventcycle.png)](../assets/LSV_eventcycle.png) NOTE: The onBeforeUpdate event in the above diagram differs based upon the type of variable as explained in the table below. It is:

- for Database CRUD Variable with READ operation
- for Database CRUD Variable with UPDATE operation
- for Database CRUD Variable with INSERT operation
- for Database CRUD Variable with DELETE operation
- for all types of variables except Database CRUD Variable

event is called as soon as the variable is ready to be triggered to hit the target service.

(for READ operation of Database CRUD variable)

event is called just before the variable is triggered to hit the target service. “dataFilter” contains an object based on the filter criteria set (that appear under the “Filter Criteria” tab of Variable definition dialog). Each criteria contains the following information - Field Name, Condition, and Value. You can retrieve the criteria using the following method: dataFilter.getCriteria(“field-name”) and make any changes. Allowed actions on the criteria are:

- /Validate data of a particular field.
- the value of a particular field.

**Examples**

1: Filter Criteria can be changes as per your use case.

 = function(variable, dataFilter, options) {
    // Validate or retrieve the data of a particular field
    if (dataFilter.getCriteria("jobtitle")\[0\].value == "Product Manager") {
       return true;
     } else {
    //Change value of a field
     dataFilter.getCriteria("jobtitle")\[0\].value = "Product Manager";
    }
  };
};

2: Stop execution for a given condition.

 = function(variable, dataFilter, options) {
    // Validate or retrieve the data of a particular field
    if (dataFilter.getCriteria("deptId")\[0\].value == 1) {
       return false;
     } else {
    //Change value of a field
     dataFilter.getCriteria("deptId")\[0\].value = 3;
    }
  };
};

Database CRUD Variables

(for Update operation) (for Insert operation) (for Delete operation)

events are called just before the variable is triggered to hit the target service. “inputData” contains an object having key-value pairs of input fields (that appear under the “Data” tab of Variable definition dialog). The call to the target service from the variable can be prevented by assigning a JavaScript function to this event and returning false from this function. If input data needs modification or validation, it should be done at this place.

**Examples**

1: Input data can be modified by simply modifying the “inputData” parameter passed to the function. Please note, calling setInput on the Variable from this event is not valid. “inputData” param should directly be modified.

 = function(variable, inputData, options) {
    // append/modify fields in the current input data
    inputData.firstname = "Steve";
    inputData.lastname = "Rogers";
};

2: Input data can also be modified by returning a new set of input data (object having key-value pair of input data)

 = function(variable, inputData, options) {
    // return a new set of input data (old one is discarded)
    var new\_data = {
        "firstname": "Steve",
        "lastname": "Rogers"
    };
    return new\_data;
};

3: If the call to the target service is to be blocked due to any validation failure, return false

\= function(variable, inputData, options) {
    // Validation Check for mandatory input fields
    // example, block the call if input data does not have fields 'firstname' or 'lastname'
    if (!inputData.firstname || !inputData.lastname) {
        return false;
    }
};

all Variables  Database Crud Variables

events are called just before the variable is triggered to hit the target service. “inputData” contains an object having key-value pairs of input fields (that appear under the “Data” tab of Variable definition dialog). The call to the target service from the variable can be prevented by assigning a JavaScript function to this event and returning false from this function. If input data needs modification or validation, it should be done at this place.

**Examples**

1: Input data can be modified by simply modifying the “inputData” parameter passed to the function. Please note, calling setInput on the Variable from this event is not valid. “inputData” param should directly be modified.

 = function(variable, inputData, options) {
    // append/modify fields in the current input data
    inputData.firstname = "Steve";
    inputData.lastname = "Rogers";
};

2: Input data can also be modified by returning a new set of input data (object having key-value pair of input data)

 = function(variable, inputData, options) {
    // return a new set of input data (old one is discarded)
    var new\_data = {
        "firstname": "Steve",
        "lastname": "Rogers"
    };
    return new\_data;
};

3: If the call to the target service is to be blocked due to any validation failure, return false

 = function(variable, inputData, options) {
    // Validation Check for mandatory input fields
    // example, block the call if input data does not have fields 'firstname' or 'lastname'
    if (!inputData.firstname || !inputData.lastname) {
        return false;
    }
};

event is triggered as soon as the variable receives a response from the target service. onResult is called whether or not there was an error generated. A additional last argument as the “operation-name” that holds the invoked operation is present for Database CRUD Variables.

event is triggered just before the variable's dataSet property is updated with the data received from the target service (after onResult). This event handler gives you the opportunity to manipulate the data before your variable’s dataSet property is assigned this value. If you want to add rows to a Grid or List or Select, this is a good way to add in extra items into your results before your variable is set and your widget is updated. The new data can be returned from here in order to update the Variable’s dataSet.

**Examples**

1: “data” is the response received from the target service. This event gives a chance to process this data before it is assigned to the Variable’s “dataSet” property.  note, calling setData on the Variable from this event is not valid. Modified “data” should be returned from this event.

 = function(variable, data) {
    // the data has 'firstname' and 'lastname'
    // add a new field 'fullname' into the data
    var new\_data = \[\];
    if (data && data.length) {
        data.forEach(function(datum) {
            datum.fullname = datum.firstname + " " + datum.lastname;
            new\_data.push(datum);
        });

        return new\_data;
    }
};

you to trigger an action when the Variable has completed its life cycle. Any component bound to the resultant dataSet of this Variable will be updated just before this event is triggered. So, If you want to trigger another Variable which is dependent on the dataSet of this Variable, the Variable should be triggered by this event. A additional last argument as the “operation-name” that holds the invoked operation is present for Database CRUD Variables.

event is called if there is an error generated during the Service call. A additional last argument as the “operation-name” that holds the invoked operation is present for Database CRUD Variables.

: WaveMaker supports binding multiple actions to a given event, i.e. a given event can trigger multiple actions.

Few Methods are exposed on Variables which can be used for achieving more control and accessing extra functionality. The methods differ based on the type of Variable, see the respective Variable document for the detailed listing.

< Data Integration

Binding >

6\. Data Integration - Variables

- 6.1 Binding Layer
    - [Overview](/learn/app-development/variables/data-integration/)
- [6.2 Variables and Actions](#)
    - [Overview](#)
    - [Variables](#variables)
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
    - [Error Handling](#error-handling)
    - [Scoping](#scoping)
    - [Variable Events](#events)
    - [Events Implementation](#events-implementation)
    - [Methods](#methods)
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
