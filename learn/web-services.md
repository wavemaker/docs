---
title: "Web Services"
id: ""
---

# Overview

A Web service is a software system designed to support interoperable machine-to-machine interaction over a network. It has an interface described in a machine-processable format (specifically WSDL). Other systems interact with the Web service in a manner prescribed by its description using SOAP-messages, typically conveyed using HTTP with an XML serialization in conjunction with other Web-related standards ([Web Services Glossary](https://www.w3.org/TR/2004/NOTE-ws-gloss-20040211/#webservice)).

WaveMaker makes it easy to integrate external web services within your app. You need to import and configure a web service and invoke the same using a variable which can be bound to a widget for data rendering.

You can use the following types of web services:

- **REST services:** A REST (Representational State Transfer) web service is composed of resources accessed through unique URLs (requests) and returned as XML or JSON responses. An XML Schema typically defines the structure of those XML responses.
- **SOAP services:** SOAP (Simple Object Access Protocol) is a standard XML protocol for exposing and calling web services. A SOAP service is described by a Web Services Definition Language (WSDL) document, often available through a URL from the service itself.
- **WebSocket services:** WebSockets represent the next evolution of web communications a full-duplex, bidirectional communications channel that operate through a single socket over the Web. It provides a true standard that you can use to build scalable, real-time web applications. It provides full-duplex communication channels over a single TCP connection. Its only relationship to HTTP is that its handshake is interpreted by HTTP servers as an Upgrade Request.

[![](./assets/web_types.png)](./assets/web_types.png)

# Variables for invocation

After importing a web-service, a **Variable** needs to be created manually for each method of the service, which actually triggers the service in the RUN mode of the app and stores the data returned by the service in its _dataSet_ property (_variableName.dataSet_). You can use this _dataSet_ as any other variable. While binding a widget with a variable’s _dataSet_, it is assumed that the binding chain is following pure JSON structure and there is no array on any of the nodes. Any deviations to this structure need to be addressed from the markup manually. In some cases, modification with _dataSet_ may be required, which needs to be done at the variable level.

[Know more about Variables from here](/learn/app-development/variables/variables-actions/#).

[Know how to create Variables for web service from here](/learn/app-development/variables/web-service/).[![](./assets/Var_create.png)](./assets/Var_create.png)[![](./assets/soap_var.png)](./assets/soap_var.png)WaveMaker supports various types of web services and these services can be invoked and results captured through Variables.

< Backend Services Overview

3rd Party REST >

SOAP >

WebSocket >

5\. Creating Backend Services

- 5.1 Overview
    - [i. Accessing Data](/learn/app-development/services/creating-backend-services/#accessing-data)
        - [○ Life-cycle of data](/learn/app-development/services/creating-backend-services/#life-cycle)
    - [ii. Manipulating Data](/learn/app-development/services/creating-backend-services/#manipulating-data)
        - [○ Life-cycle of Events](/learn/app-development/services/creating-backend-services/#life-cycle-events)
    - [iii. REST APIs](/learn/app-development/services/creating-backend-services/#rest-apis)
- [5.2 Web Services](#)
    - [i. Overview](#overview)
    - [ii. Variables for Invocation](#service-variable)
    - iii. Working with SOAP Services
        - [○ Overview](/learn/app-development/services/web-services/working-with-soap-services/)
        - [○ SOAP Service Setup](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-setup)
        - [○ SOAP Service Settings](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-settings)
        - [○ Generated REST APIs](/learn/app-development/services/web-services/working-with-soap-services/#generated-rest-apis)
        - [○ SOAP Service Usage](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-usage)
    - iv. Working with REST Services
        - [○ Overview](/learn/app-development/services/web-services/rest-services/)
        - [○ Test REST Service](/learn/app-development/services/web-services/rest-services/#test-API)
        - [○ Configure REST Service](/learn/app-development/services/web-services/rest-services/#configure-REST-service)
        - [○ REST Service Usage](/learn/app-development/services/web-services/rest-services/#REST-service-usage)
    - v. Working with Web Sockets
        - [○ Overview](/learn/app-development/services/web-services/working-with-websockets/)
        - [○ Service Integration](/learn/app-development/services/web-services/working-with-websockets/#import)
        - [○ Service Consumption](/learn/app-development/services/web-services/working-with-websockets/#variable)
        - [○ Use Cases](/learn/app-development/services/web-services/working-with-websockets/#use-cases)
- 5.3 Database Services
    - i. Working with Databases
        - [○ Overview](/learn/app-development/services/database-services/#working-with-db)
        - [○ Database Service Architecture](/learn/app-development/services/database-services/#database-architecture)
        - [○ Supported Databases](/learn/app-development/services/database-services/#supported-databases)
        - [○ Integrating Database](/learn/app-development/services/database-services/#integrating-database)
        - [○ Database Actions](/learn/app-development/services/database-services/#database-actions)
    - ii. Data Modelling
        - [○ Overview](/learn/app-development/services/database-services/data-modelling/)
        - [○ Configuration Settings](/learn/services/db-services/data-modelling/#configuration-settings)
        - [○ Database Designer](/learn/services/db-services/data-modelling/#database-designer)
            - [● Schema Import Modes](/learn/app-development/services/database-services/database-schema-import-modes/)
        - ○ Working with Database Schema
            - [● Overview](/learn/app-development/services/database-services/working-database-schema/)
            - [● Adding Tables and Columns](/learn/app-development/services/database-services/working-database-schema/#add-tables-columns)
            - [● Working with Relationships](/learn/app-development/services/database-services/working-database-schema/#database-relationships)
            - [● Identity Generators for Primary Key Column](/learn/app-development/services/database-services/working-database-schema/#identity-generators)
            - [● Column Metadata Configuration](/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration)
            - [● Virtual Primary Keys and Relations](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys)
            - [● Temporal Support](/learn/app-development/services/database-services/temporal-support/)
    - ii. Databases Access
        - [○ Overview](/learn/app-development/services/database-access/)
        - ○ Working with Queries
            - [● Overview](/learn/app-development/services/database-services/working-with-queries/)
            - [● Query Editor](/learn/app-development/services/database-services/working-with-queries/#query-editor)
            - [● Types of Queries](/learn/app-development/services/database-services/working-with-queries/#query-types)
            - [● Query Creation](/learn/app-development/services/database-services/working-with-queries/#query-creation)
            - [● Query Usage](/learn/app-development/services/database-services/working-with-queries/#query-usage)
            - [● Parameterised Query Creation](/learn/app-development/services/database-services/working-with-queries/#query-creation-parameterised)
            - [● Query Operation Type](/learn/app-development/services/database-services/working-with-queries/#query-op-types)
            - [● Query Architecture](/learn/app-development/services/database-services/working-with-queries/#query-architecture)
        - ○ Working with Stored Procedures
            - [● Overview](/learn/app-development/services/db-services/working-stored-procedures/)
            - [● Procedure Creation](/learn/app-development/services/db-services/working-stored-procedures/#procedure-creation)
            - [● Procedure Parameters](/learn/app-development/services/db-services/working-stored-procedures/#proc-params)
            - [● Procedure Invocation](/learn/app-development/services/db-services/working-stored-procedures/#procedure-invocation)
            - [● Procedure Architecture](/learn/app-development/services/db-services/working-stored-procedures/#procedure-architecture)
        - [○ Versioning of Queries and Procedures](/learn/app-development/services/database-services/versioning-queries-procedures/)
        - [○ Blob Support for Queries and Procedures](/learn/app-development/services/database-services/blob-support-queries-procedures/)
        - [○ Invoking Queries & Procedures from Java Service](/learn/app-development/services/database-services/invoking-queriesprocedures-java-services/)
        - [○ Database Views](/learn/app-development/services/db-services/database-views/)
        - ○ Database Tools
            - [● Overview](/learn/app-development/services/database-tools/)
            - [● DB Shell](/learn/app-development/services/database-tools/#db-shell)
            - [● DB Scripts](/learn/app-development/services/database-tools/#db-scripts)
                - [● Import DB](/learn/app-development/services/database-tools/#import-db)
                - [● Export DB](/learn/app-development/services/database-tools/#export-db)
    - iv. ORM Artifacts
        - [○ Database Integration Process](/learn/app-development/services/db-services/orm-artifacts/#database-integration-process)
        - [○ Layered Architecture](/learn/app-development/services/db-services/orm-artifacts/#layered-architecture)
        - [○ Generated Files](/learn/app-development/services/db-services/orm-artifacts/#generated-files)
        - [○ Generated APIs](/learn/app-development/services/db-services/orm-artifacts/#generated-apis)
            - [● CRUD APIs](/learn/app-development/services/db-services/orm-artifacts/#crud-apis)
            - [● Query APIs](/learn/app-development/services/db-services/orm-artifacts/#query-apis)
            - [● Custom Query Syntax](/learn/app-development/services/db-services/orm-artifacts/#custom-query-syntax)
- 5.4 Java Services
    - [i. Overview](/learn/app-development/services/java-services/java-service/#overview)
    - [ii. Java Services Framework](/learn/app-development/services/java-services/java-service/#java-services-framework)
    - iii. Integration Services
        - [○ Current Loggedin User](/learn/app-development/services/java-services/java-integration-services/#loggedin-user)
        - [○ External Java Libraries](/learn/app-development/services/java-services/java-integration-services/#external-java-libraries)
        - [○ Database Entities](/learn/app-development/services/java-services/java-integration-services/#db-services)
        - [○ Named Queries](/learn/app-development/services/java-services/java-integration-services/#query-service)
        - [○ Imported Web Services](/learn/app-development/services/java-services/java-integration-services/#web-services)
    - [iv. Variables for Invocation](/learn/app-development/services/java-services/variables/)
    - [v. Generated REST APIs](/learn/app-development/services/java-services/generated-rest-apis-api-designer/)
- 5.5 API Designer
    - [i. Overview](/learn/app-development/services/api-designer/api/)
    - [ii. Database Services APIs](/learn/app-development/services/api-designer/database-service-apis/)
    - [iii. Web Services APIs](/learn/app-development/services/api-designer/web-service-apis/)
    - [iv. Java Services APIs](/learn/app-development/services/api-designer/java-service-apis/)
    - [v. Security Services APIs](/learn/app-development/services/api-designer/security-service-apis/)
- 5.6 3rd Party Libraries
    - [i. Overview](/learn/app-development/services/3rd-party-libraries/)
    - [ii. Including resource files](/learn/app-development/services/3rd-party-libraries/#resource-files)
    - [iii. Using third-party JavaScript file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-javascript-files/)
    - [iv. Using third-party jar file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-jar-files/)
