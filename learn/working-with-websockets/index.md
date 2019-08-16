---
title: "Working with WebSockets"
id: ""
---

represent the next evolution of web communications a full-duplex, bidirectional communications channel that operate through a single socket over the Web. It provides a true standard that you can use to build scalable, real-time web applications. It provides full-duplex communication channels over a single TCP connection. Its only relationship to HTTP is that its handshake is interpreted by HTTP servers as an Upgrade Request.

WaveMaker you can integrate any third-party WebSocket Service into your app and build real-time apps. Just like a REST service, you can import a **Service** and create a    with the service. The data received from the service at the client is held by the Variable, which can be further used to bind to Widgets like Charts, Data Table, Lists, etc and have them reflect data in real-time.

returned from the WebSocket Service can be handled in three different ways:

1. **data snapshot**: By choosing to the WebSocket service variable, you will be dealing with the latest data returned by the service. This option can be used when you want to deal the latest information.
2. **data**: By choosing to _as last record_, you can append the data to the variable dataset. In such cases for performance and UI optimization, it is advisable to set a  on the size of the data held by the variable. This option can be used when displaying tracking information in a chart format like stock performance, heart rate monitor graph, etc..
3. **data**: By choosing to _as first record_, you can prepend the data to the variable dataset. In such cases for performance and UI optimization, it is advisable to set a  on the size of the data held by the variable. This option can be used when displaying the data in a list or data table format, with the latest entry on the top of the list, like match scores or weather reports.

## a WebSocket service in a WaveMaker App

like any web service, a WebSocket service can be imported into a WaveMaker app.

[![](../assets/Web_Service1.png)](../assets/Web_Service1.png)

 

1. the WebSocket service URL, test the connection and import the service.
2. leverage the full power of the platform, you should provide the sample request and response body while configuring the service. This helps the platform to generate request and response type metadata for the service, which can be utilized while binding the input to the corresponding Variable and the output of the Variable to a widget. [![](../assets/socket_response.png)](../assets/socket_response.png)
3. Service can be further configured by specifying the Query, Path, and Body Parameters as per the app requirements.
4. newly created service will be visible under the Web Service
5. the service name listed under WebSocket Service to access the Service Settings [![](../assets/socket_settings.png)](../assets/socket_settings.png)

WMO is hosted on https, a WebSocket service on _://_ protocol cannot be tested because of security limitations on browsers. To cater this, the platform detects if the URL entered by the user is on _://_ protocol and throws a warning to the user with a message. At this point the TEST button is disabled. You can still proceed, however, by checking the Proceed without Test option. You can check this flag, provide sample Request Body and Sample Response and proceed to config screen without testing.

: It is not recommended to use _://_ URL as it may not work. Best practice is to use _://_ URLs only.

## Data Consumption

use the WebSocket Service within your app, you need to create a Variable. This is the interface for the app developer to interact with a WebSocket Service imported into a WaveMaker app. The Variable has methods to interact with the target service like opening and closing the connection, sending and receiving messages to and from the server. It also holds the data to be sent to the service and the data received from the service. [here to know more](/learn/app-development/variables/websocket-variable/)

< Web Services Overview

for the Web Services >

3rd Party REST Services >

Services >

# Cases

- [Monitor App](/learn/how-tos/websocket-usage-heartrate-monitor/)
- [Room App](/learn/how-tos/websocket-usage-chatroom-app/)

5\. Creating Backend Services

- 5.1 Overview
    - [Accessing Data](/learn/app-development/services/creating-backend-services/#accessing-data)
        - [Life-cycle of data](/learn/app-development/services/creating-backend-services/#life-cycle)
    - [Manipulating Data](/learn/app-development/services/creating-backend-services/#manipulating-data)
        - [Life-cycle of Events](/learn/app-development/services/creating-backend-services/#life-cycle-events)
    - [REST APIs](/learn/app-development/services/creating-backend-services/#rest-apis)
- [5.2 Web Services](/learn/app-development/services/web-services/web-services/)
    - [Overview](/learn/app-development/services/web-services/web-services/#overview)
    - [Variables for Invocation](/learn/app-development/services/web-services/web-services/#service-variable)
    - iii. Working with SOAP Services
        - [Overview](/learn/app-development/services/web-services/working-with-soap-services/)
        - [SOAP Service Setup](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-setup)
        - [SOAP Service Settings](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-settings)
        - [Generated REST APIs](/learn/app-development/services/web-services/working-with-soap-services/#generated-rest-apis)
        - [SOAP Service Usage](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-usage)
    - iv. Working with REST Services
        - [ Overview](/learn/app-development/services/web-services/rest-services/)
        - [ Test REST Service](/learn/app-development/services/web-services/rest-services/#test-API)
        - [ Configure REST Service](/learn/app-development/services/web-services/rest-services/#configure-REST-service)
        - [REST Service Usage](/learn/app-development/services/web-services/rest-services/#REST-service-usage)
    - [Working with Web Sockets](#)
        - [Overview](#)
        - [Service Integration](#import)
        - [Service Consumption](#variable)
        - [Use Cases](#use-cases)
- 5.3 Database Services
    - i. Working with Databases
        - [Overview](/learn/app-development/services/database-services/#working-with-db)
        - [Database Service Architecture](/learn/app-development/services/database-services/#database-architecture)
        - [Supported Databases](/learn/app-development/services/database-services/#supported-databases)
        - [Integrating Database](/learn/app-development/services/database-services/#integrating-database)
        - [Database Actions](/learn/app-development/services/database-services/#database-actions)
    - ii. Data Modelling
        - [Overview](/learn/app-development/services/database-services/data-modelling/)
        - [Configuration Settings](/learn/services/db-services/data-modelling/#configuration-settings)
        - [Database Designer](/learn/services/db-services/data-modelling/#database-designer)
            - [Schema Import Modes](/learn/app-development/services/database-services/database-schema-import-modes/)
        - ○ Working with Database Schema
            - [Overview](/learn/app-development/services/database-services/working-database-schema/)
            - [Adding Tables and Columns](/learn/app-development/services/database-services/working-database-schema/#add-tables-columns)
            - [Working with Relationships](/learn/app-development/services/database-services/working-database-schema/#database-relationships)
            - [Identity Generators for Primary Key Column](/learn/app-development/services/database-services/working-database-schema/#identity-generators)
            - [Column Metadata Configuration](/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration)
            - [Virtual Primary Keys and Relations](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys)
            - [Temporal Support](/learn/app-development/services/database-services/temporal-support/)
    - ii. Databases Access
        - [Overview](/learn/app-development/services/database-access/)
        - ○ Working with Queries
            - [Overview](/learn/app-development/services/database-services/working-with-queries/)
            - [Query Editor](/learn/app-development/services/database-services/working-with-queries/#query-editor)
            - [Types of Queries](/learn/app-development/services/database-services/working-with-queries/#query-types)
            - [Query Creation](/learn/app-development/services/database-services/working-with-queries/#query-creation)
            - [Query Usage](/learn/app-development/services/database-services/working-with-queries/#query-usage)
            - [Parameterised Query Creation](/learn/app-development/services/database-services/working-with-queries/#query-creation-parameterised)
            - [Query Operation Type](/learn/app-development/services/database-services/working-with-queries/#query-op-types)
            - [Query Architecture](/learn/app-development/services/database-services/working-with-queries/#query-architecture)
        - ○ Working with Stored Procedures
            - [Overview](/learn/app-development/services/db-services/working-stored-procedures/)
            - [Procedure Creation](/learn/app-development/services/db-services/working-stored-procedures/#procedure-creation)
            - [Procedure Parameters](/learn/app-development/services/db-services/working-stored-procedures/#proc-params)
            - [Procedure Invocation](/learn/app-development/services/db-services/working-stored-procedures/#procedure-invocation)
            - [Procedure Architecture](/learn/app-development/services/db-services/working-stored-procedures/#procedure-architecture)
        - [Versioning of Queries and Procedures](/learn/app-development/services/database-services/versioning-queries-procedures/)
        - [ Blob Support for Queries and Procedures](/learn/app-development/services/database-services/blob-support-queries-procedures/)
        - [Invoking Queries & Procedures from Java Service](/learn/app-development/services/database-services/invoking-queriesprocedures-java-services/)
        - [ Database Views](/learn/app-development/services/db-services/database-views/)
        - ○ Database Tools
            - [Overview](/learn/app-development/services/database-tools/)
            - [DB Shell](/learn/app-development/services/database-tools/#db-shell)
            - [DB Scripts](/learn/app-development/services/database-tools/#db-scripts)
                - [Import DB](/learn/app-development/services/database-tools/#import-db)
                - [Export DB](/learn/app-development/services/database-tools/#export-db)
    - iv. ORM Artifacts
        - [Database Integration Process](/learn/app-development/services/db-services/orm-artifacts/#database-integration-process)
        - [Layered Architecture](/learn/app-development/services/db-services/orm-artifacts/#layered-architecture)
        - [Generated Files](/learn/app-development/services/db-services/orm-artifacts/#generated-files)
        - [Generated APIs](/learn/app-development/services/db-services/orm-artifacts/#generated-apis)
            - [CRUD APIs](/learn/app-development/services/db-services/orm-artifacts/#crud-apis)
            - [Query APIs](/learn/app-development/services/db-services/orm-artifacts/#query-apis)
            - [Custom Query Syntax](/learn/app-development/services/db-services/orm-artifacts/#custom-query-syntax)
- 5.4 Java Services
    - [ Overview](/learn/app-development/services/java-services/java-service/#overview)
    - [Java Services Framework](/learn/app-development/services/java-services/java-service/#java-services-framework)
    - iii. Integration Services
        - [Current Loggedin User](/learn/app-development/services/java-services/java-integration-services/#loggedin-user)
        - [External Java Libraries](/learn/app-development/services/java-services/java-integration-services/#external-java-libraries)
        - [Database Entities](/learn/app-development/services/java-services/java-integration-services/#db-services)
        - [Named Queries](/learn/app-development/services/java-services/java-integration-services/#query-service)
        - [Imported Web Services](/learn/app-development/services/java-services/java-integration-services/#web-services)
    - [Variables for Invocation](/learn/app-development/services/java-services/variables/)
    - [ Generated REST APIs](/learn/app-development/services/java-services/generated-rest-apis-api-designer/)
- 5.5 API Designer
    - [Overview](/learn/app-development/services/api-designer/api/)
    - [Database Services APIs](/learn/app-development/services/api-designer/database-service-apis/)
    - [Web Services APIs](/learn/app-development/services/api-designer/web-service-apis/)
    - [Java Services APIs](/learn/app-development/services/api-designer/java-service-apis/)
    - [Security Services APIs](/learn/app-development/services/api-designer/security-service-apis/)
- 5.6 3rd Party Libraries
    - [Overview](/learn/app-development/services/3rd-party-libraries/)
    - [Including resource files](/learn/app-development/services/3rd-party-libraries/#resource-files)
    - [Using third-party JavaScript file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-javascript-files/)
    - [Using third-party jar file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-jar-files/)
