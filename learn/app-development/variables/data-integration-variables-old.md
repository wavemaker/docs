---
title: "Data Integration - Variables Old"
id: ""
---

**Variables** provide data integration for the widgets and provide the ability to control data scoping, managing updates and synchronization to the actual data services in the backend.

While creating an application, you will want to tie specific components, such as widgets, to data objects. For example, you can tie a Data Table widget to a table in a database, or set up a Textarea widget to display a result string from a web service. WaveMaker allows you to achieve this with the help of **Variables and Binding**.

Variables can be created either manually through **Create** variables option from Main Menu or they can be **generated** at the time of drag and drop of **Live Widgets** like **Data Table, Live List, Live Form** and **Live Filter**.

[![Var_create](/learn/assets/Var_create.png)](/learn/assets/Var_create.png)

# Scope of variables

Variables can be classified into two based on the scope of the Variable. The two types of variables are - **Application** and **Page** level variables. While both these types reside at the _client side_, the _application level_ variables share the data across multiple pages, whereas _Page level_ variables share the data within the page where they have been declared/created. Whenever you are switching from one page to another, all the previous page level variables are destroyed. [![var_scope](/learn/assets/var_scope.png)](/learn/assets/var_scope.png) **NOTE**: It is advised to have unique names for any variable to avoid confusion. Whenever you try to create or rename a variable WaveMaker will throw an error if another variable of the same name exists either within the page or at the app level. You can access these variables from the **Files Panel** under the **Resources** or **Page** folders

# Data Storage

A variable can be thought of comprising of four parts: [![var_struct](/learn/assets/var_struct.png)](/learn/assets/var_struct.png)

1. **Data**, as rendered by the widgets, fetched from the data source
2. **Data model** used for binding, with attributes and related objects; this is defined by the underlying data source
3. **API** source from where the model object is obtained (DB, REST API or Java Services); [see here for WaveMaker Services](/learn/app-development/services/creating-backend-services/).
4. **Events & Methods** that provide options to control the interaction between Variables and Widgets.

[![var_def](/learn/assets/var_def.png)](/learn/assets/var_def.png)

# Variable Types

Based upon the data source affected by the variables, they can be:

- **Live Variable** contains the values from a specified database table. Controls such as Live Form require a Live Variable as input. [Know more](/learn/app-development/variables/live-variable/).
- **Service Variable** contains the configuration for calling a query, rest, soap, or java service and storing the results of that call. [Know more](/learn/app-development/variables/service-variable/).
- **Static Variable** store data on the page or at the project level. [Know more](/learn/app-development/variables/static-variable/).
- **Call Variable** can be of two types:
    - **Navigation** Call - provides navigation capabilities ([know more](/learn/app-development/variables/navigation-variable/)), and
    - **Notification** Call - provides messaging capabilities ([know more](/learn/app-development/variables/notification-variable/)).
- **Prebuilt Variables** are static variables that contain commonly used data. WaveMaker offers the following prebuilt variables:
    - Country List,
    - Days,
    - Months, and
    - US States List.
- **Login Variable** is used to log into the application and is created automatically when you [enable Security](/learn/app-development/app-security/app-security/ "Security and roles") in your application. [Know more](/learn/app-development/variables/login-variable/).
- **Logout Variable** is used to log out of the application and is created automatically when you [enable Security](/learn/app-development/app-security/app-security/ "Security and roles") in your application. [Know more](/learn/app-development/variables/logout-variable/).
- **Timer Variable** can be used to trigger events repeatedly at timed intervals. [Know more](/learn/app-development/variables/timer-variable/).
- **Device Variables** are specific to Mobile apps and allow you to access the device features like
    - calendar,
    - camera,
    - contacts,
    - device specific details,
    - file and
    - scan services. [Know more](/learn/hybrid-mobile/device-variables/).

To set up a data source for a component, you need to create a variable and then bind your component to that variable. You can create variables by clicking **Create** and then **Variables** under the **Main Menu**. You can see the list of variables in the **Services** section of **Files and Services Panel**.

# Operations of variables

Based on the functionality a project can include the following types of variables:

- **Service Variable** connects to data from a Service (mostly Web Service). When the App needs custom logic, it can be written as Java code, Rest and SOAP Service or database queries and exposed through a Service Variable. Service Variables operations are restricted by the offerings of the underlying service. The bindings would depend, again, upon the requirements of the service imported. From the [API Designer](/learn/app-development/services/api-designer/api/) pullout panel, you can test the service and get an idea of its capabilities.
- **Live Variable** connects to an individual database entity, through auto generated CRUD API. Live Variable operations include the CRUD operations on the database:
    - **read** which can be used to fetch data from the database;
    - **insert/update** which can be used to insert data to a database, this would require the fields from the data tab bound either to static default values or from widgets capturing and processing the input from the user. **Note** any fields that are not bound will be set to NULL;
    - **delete** which can be used to delete data from the database, the primary key value needs to be bound from the data tab;
    - _Other Variables_ like Static etc. will not have any operations defined.

# Variable Events

In a typical variable lifecycle:

1. A user action triggers an event for the variable.
2. The event action talks to the data source via the API call.
3. The result from API call is reflected in the Data which in turn changes the user data view.

[![var_lifecycle](/learn/assets/var_lifecycle.png)](/learn/assets/var_lifecycle.png)

Four actions can be said to be responsible for triggering a variable lifecycle:

- **Request data on page load** is a property that can be set for every variable. This can be used to initialize and fetch Live Variable data during page load.
- **Pagination** - Live Variable results are paginated and page size can be configured based on the app needs.
- **Events** - Widgets are updated/notified on user events like click, submit, or variable events like pre and post update, on error etc..
- **Update data on input change** is a property which configures the ability to auto reload Variable data, for example, if the data filter value changes dynamically from city = ‘New York’ to city = ‘Boston.

[![var_triggers](/learn/assets/var_triggers.png)](/learn/assets/var_triggers.png)

# Error Handling

WaveMaker Variables dealing with external services like Service Variable, Live Variable, etc. may not always return with a successful response. Sometimes the Variable call may fail due to various reasons like server validation, request timeout, etc. To gracefully handle such scenarios, a default **Notification Variable** (_toaster type_) named _appNotification_ is created in the app. By default, all Service/Live Variables invoke this variable on error response from the target service. [![vars_error](/learn/assets/vars_error.png)](/learn/assets/vars_error.png) In this manner, the app has a central point of error handling. The default appNotification variable can further be customized as per requirement. For example, if you want the app to display errors through an alert dialog, the appNotification variable can be changed to alert type. To suppress the default error handling, simply delete the appNotification variable. [Know more about error handling](/learn/how-tos/error-handling-wavemaker-app/).

5\. Data Integration - Variables

- [5.1 Variables](#)
    - [i. Overview](#)
    - [ii. Scoping](#scoping)
    - [iii. Data Storage](#data-storage)
    - [iv. Variable Types](#variable-types)
        - a. Device Variables
            - [○ Overview](/learn/hybrid-mobile/device-variables/#)
            - [○ Services](/learn/hybrid-mobile/device-variables/#services)
            - [○ Operations](/learn/hybrid-mobile/device-variables/#operations)
            - [○ Events](/learn/hybrid-mobile/device-variables/#events)
            - [○ Methods](/learn/hybrid-mobile/device-variables/#methods)
            - [○ Usage](/learn/hybrid-mobile/device-variables/#usage)
        - b. Live Variables
            - [○ Overview](/learn/variables/live-variable/#)
            - [○ Creation](/learn/variables/live-variable/#creation)
            - [○ Properties](/learn/variables/live-variable/#properties)
            - [○ Events](/learn/variables/live-variable/#events)
            - [○ Methods](/learn/variables/live-variable/#methods)
        - c. Login Variables
            - [○ Overview](/learn/app-development/variables/login-variable/#)
            - [○ Creation](/learn/app-development/variables/login-variable/#creation)
            - [○ Properties](/learn/app-development/variables/login-variable/#properties)
            - [○ Events](/learn/app-development/variables/login-variable/#events)
        - d. Logout Variables
            - [○ Overview](/learn/app-development/variables/logout-variable/#)
            - [○ Creation](/learn/app-development/variables/logout-variable/#creation)
            - [○ Properties](/learn/app-development/variables/logout-variable/#properties)
            - [○ Events](/learn/app-development/variables/logout-variable/#events)
        - e. Service Variables
            - [○ Overview](/learn/app-development/variables/service-variable/#)
            - [○ Creation](/learn/app-development/variables/service-variable/#creation)
            - [○ Properties](/learn/app-development/variables/service-variable/#properties)
            - [○ Events](/learn/app-development/variables/service-variable/#events)
            - [○ Methods](/learn/app-development/variables/service-variable/#methods)
        - f. Static Variables
            - [○ Overview](/learn/app-development/variables/static-variable/#)
            - [○ Creation](/learn/app-development/variables/static-variable/#creation)
            - [○ Properties](/learn/app-development/variables/static-variable/#properties)
            - [○ Methods](/learn/app-development/variables/static-variable/#methods)
        - g. Timer Variables
            - [○ Overview](/learn/app-development/variables/timer-variable/#)
            - [○ Creation](/learn/app-development/variables/timer-variable/#creation)
            - [○ Properties](/learn/app-development/variables/timer-variable/#properties)
            - [○ Events](/learn/app-development/variables/timer-variable/#events)
            - [○ Methods](/learn/app-development/variables/timer-variable/#methods)
        - h. WebSocket Variables
            - [○ Overview](/learn/app-development/variables/websocket-service-variable/#)
            - [○ Lifecycle](/learn/app-development/variables/websocket-service-variable/#lifecycle)
            - [○ Creation](/learn/app-development/variables/websocket-service-variable/#creation)
            - [○ Properties](/learn/app-development/variables/websocket-service-variable/#properties)
            - [○ Events](/learn/app-development/variables/websocket-service-variable/#events)
            - [○ Methods](/learn/app-development/variables/websocket-service-variable/#methods)
        - i. Navigation Variables
            - [○ Overview](/learn/app-development/variables/navigation-variable/#)
            - [○ Creation](/learn/app-development/variables/navigation-variable/#creation)
            - [○ Properties](/learn/app-development/variables/navigation-variable/#properties)
            - [○ Methods](/learn/app-development/variables/navigation-variable/#methods)
        - j. Notification Variables
            - [○ Overview](/learn/app-development/variables/notification-variable/#)
            - [○ Creation](/learn/app-development/variables/notification-variable/#creation)
            - [○ Properties](/learn/app-development/variables/notification-variable/#properties)
            - [○ Events](/learn/app-development/variables/notification-variable/#events)
            - [○ Methods](/learn/app-development/variables/notification-variable/#methods)
    - [v. Operations or APIs](#variable-operations)
    -  [vi. Variable Events](#variable-events)
    - [vii. Error Handling](#error-handling)
- 5.2 Variable Binding
    - [i. Overview](/learn/variables/variable-binding/#)
    - [ii. Data Binding](/learn/variables/variable-binding/#data-binding)
    - [iii. Widget Binding](/learn/variables/variable-binding/#widget-binding)
    - [iv. Binding Options](/learn/variables/variable-binding/#binding-options)
- 5.3 JavaScript Access
    - [i. Overview](/learn/variables/accessing-elements-via-javascript/#)
    - [ii. Widget Controllers](/learn/variables/accessing-elements-via-javascript/#widget-controllers)
    - [iii. Page Scripting](/learn/variables/accessing-elements-via-javascript/#page-scripting)
    - [iv. Script Access](/learn/variables/accessing-elements-via-javascript/#script-access)
