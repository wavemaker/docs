---
title: "Introduction to Variables"
id: ""
sidebar_label: "Variables"
---
Learn about Variables in WaveMaker low-code platform. See how it works and how to use them as services.

---

Variables and Actions form the glue between the frontend UI and the backend services. While Variables provide data integration for the widgets, Actions implement the business logic, rules and data flows.

In this document, we give an overview of how Variables work and the types of Variables in WaveMaker.

## How it works

Variables function by invoking the associated REST APIs on the server-side, invoking the client-side JavaScript events that are associated or bound by configuration, after the response is obtained. Variables play a significant role in binding the UI and the backend services layer together through configuration and events, eliminating the necessity to write a lot of code.

Variables can be represented using a block with 3 faces, as in the picture below, representing the APIs invoked, events processed and the Model or Entity objects returned by the APIs.

[![variable representation](../../assets/var_representation.png)](../../assets/var_representation.png)

## Variable Types

Variables can be categorized based on the target action:

|No.|Variable Types|See|
|---|---|---|
|1.|**Database CRUD** | [Database CRUD](/learn/app-development/variables/database-crud/) |
|2.|**APIs** |- [Database APIs](/learn/app-development/variables/database-apis/)<br> - [Web Services](/learn/app-development/variables/web-service/)<br> - [Java Services](/learn/app-development/variables/java-services/) <br> - [Security Services](/learn/app-development/variables/security-service/)|
|3.|**Other Services**|- [Model Variable](/learn/app-development/variables/model-variable/) <br> - [Device Variable](/learn/hybrid-mobile/device-variables/)|


## 1. Database CRUD
The basic insert, read, update and delete operations on an imported database entities can be performed using the default CRUD APIs generated at the time of import by the platform. For more information, see [Database CRUD](/learn/app-development/variables/database-crud/).

## 2. APIs
Variables can be created to be based upon the various APIs exposed by the services integrated within the app. These can be further classified as as following. 

### Database APIs
Database import generates several APIs for functionalities like Count, Filter, Get by field name, Get associated table data etc. apart from the default CRUD APIs and can be used for more control over the database. These Database APIs also include those corresponding to Queries and Procedures created within the data model. For more information, see [Database APIs](/learn/app-development/variables/database-apis/).

### Web Services
Variable can be created to access the APIs exposed by the imported web service. For more information, see [Web Services](/learn/app-development/variables/web-service/).

### Java Services
For every Java Service created within WaveMaker, its REST API contract is auto-generated and the same can be accessed through a Variable. For more information, see [Java Services](/learn/app-development/variables/java-services/). 

### Security Services
In case security is enabled for the app, you have access to various security-related data. For more information, see [Security Services](/learn/app-development/variables/security-service/).

## Other Services

### Model
To store data on the client side. For more information, see [Model Variable](/learn/app-development/variables/model-variable/).

### Device
For Mobile Apps, the various device information can be used to access the respective devices like camera, contacts, and more. For more information, see [Device Variable](/learn/hybrid-mobile/device-variables/).

## Scope of Variables

Variables and Actions can be classified into two based on the scope of the Variable. The two types of variables are - **Application** and **Page** level variables. While both these types reside at the _client side_, the _application level_ variables share the data across multiple pages, whereas _Page level_ variables share the data within the page where they have been declared/created. Whenever you are switching from one page to another, all the previous page level variables are destroyed.  

[![var_scope](../../assets/var_scope.png)](../../assets/var_scope.png) 

:::note
It is advised to have unique names for any variable to avoid confusion. Whenever you try to create or rename a variable WaveMaker will throw an error if another variable of the same name exists either within the page or at the app level.
:::

## See More

- 6.1 Binding Layer
    - [i. Overview](/learn/app-development/variables/data-integration/)
- [6.2 Variables and Actions](#)
    - [i. Overview](#)
    - [ii. Variables](#variables)
        - a. Database CRUD
            - [○ Overview](/learn/app-development/variables/database-crud/)
            - [○ Variable Creation](/learn/app-development/variables/database-crud/#creation)
            - [○ Properties](/learn/app-development/variables/database-crud/#properties)
            - [○ Events](/learn/app-development/variables/database-crud/#events)
            - [○ Methods](/learn/app-development/variables/database-crud/#methods)
        - b. Database API
            - [○ Overview](/learn/app-development/variables/database-apis/)
            - [○ Variable Creation](/learn/app-development/variables/database-apis/#creation)
            - [○ Properties](/learn/app-development/variables/database-apis/#properties)
            - [○ Events](/learn/app-development/variables/database-apis/#events)
            - [○ Methods](/learn/app-development/variables/database-apis/#methods)
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
    - [iv. Error Handling](#error-handling)
    - [v. Scoping](#scoping)
    - [vi. Variable Events](#events)
    - [vii. Events Implementation](#events-implementation)
    - [viii. Methods](#methods)
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
