---
title: "3rd Party REST Services"
id: ""
---

While REST stands for Representational State Transfer, which is an architectural style for networked hypermedia applications, it is primarily used to build Web services that are lightweight, maintainable, and scalable. A service based on REST is called a RESTful service. REST is not dependent on any protocol, but almost every RESTful service uses HTTP as its underlying protocol.

Here we will look at:

- various [configuration](#configure-API) options
- [testing](#test-API) the configuration before import
- [configuring service](#configure-REST-service)
- [invoking service](#REST-service-usage)

WaveMaker allows configuring the following fields while importing a REST Service:

- **Method**: can be GET, POST, PUT, HEAD, PATCH, or DELETE
- **Url**: the service URL hosting the REST service
- **Use Proxy:**
    1. For _Web Applications_, while importing the service, Use Proxy flag can be turned off if you do not want to hit the service through the proxy server. **Note**: while testing the REST API without proxy if a CORS related issue is observed, you will be notified of the same and you can proceed only by enabling proxy.
    2. For _Mobile Applications_, there is no option to configure proxy settings. By default, the request made to the target REST service will be a direct hit. However, while testing the service in the WaveMaker, a direct call is made. If a CORS failure is encountered, then the call is made through proxy behind the scenes and the service is imported with the proxy as true for WEB. In the mobile app, however, the call will be a direct one.
- **Authorization**
    - **HTTP Authentication** can be set to
        - None is the default setting
        - Basic can be used for basic authentication using a User Name and Password
        - OAuth 2.0 will allow you to integrate with an OAuth Provider. WaveMaker provides support for most OAuth providers. By selecting from the list, a semi-populated Configuration dialog is displayed. Complete the Configuration by giving the Client Id, Client Secret, etc. You can add a new provider too. [Know more](/learn/app-development/services/web-services/oauth-2-0-rest-services/).
- **REST Configuration:** Usually, the publisher of a REST service provides information on the input and output of the REST service. You can use that information to configure the REST service definition.
    1. The _query parameters_ will be set as per the requirement of the REST service within curly brackets eg ?_param = value_ and multiple query params separated by _&_, in the below example the origin and destination;
    2. The path param can be set by adding the parameter at the end of the URL within curly brackets ie _{path\_param}_, and
    3. The _header param_ can be set by adding the appropriate details like the parameter name and type. **Note**: These parameters can be seen as the _Input Fields_ in the _data_ section of the service variable when created and can be bound appropriately.
- **Response **format can be edited to suit your app needs.

Following are the steps to import and use a REST web service within a WaveMaker app.

## Test REST Service API

1. From **Resources** choose **Web Services** and click on **+**. [![](../../../assets/Web_Service1.png)](../../../assets/Web_Service1.png)
2. From the **Web Service** dialog, select **REST** icon.
3. **Test**:
    
    1. Enter the REST service URL,
    2. Configure to set the HTTP Authentication and click **Test** to verify the response, proceed with the default setting of NONE.
    3. Configure the Headers for the name and test value parameters for the same
    4. Configure the query, path and header parameters etc. if needed.
    5. Click **Import** to proceed. **Note**: IMPORT button will be activated only on the success of the TEST.
    
    [![](../../../assets/rest_import.png)](../../../assets/rest_import.png)

## Configure REST Service

1. The new service created can be accessed from the **Web Services** under _Rest Service_ section.
2. Click on the service name listed under the _Web Service_ section and the **Service Settings** are displayed.
3. You can make changes to the service settings. Once you make the changes, **Test** the changes before **saving** them. This is particularly helpful when the REST service has undergone any changes or when it needs additional input parameters. You can see the Response Format from the REST service in the JSON format as required by the platform. _Post ver 9.1 release_, you can make changes to the Authentication option, too. [![](../../../assets/rest_settings.png?v=20)](../../../assets/rest_settings.png?v=20)

### REST Services with Input Data

When importing REST Service which requires string or file as input, set the **Content Type** from Body tab to _multipart/form-data_ to see the options for the Request Body parameters. The type of these parameters can be set to:

- - File for file or blob type data (Provision is there to upload a test file).
    - Text for string type data.
    - Text (text/plain) and JSON (application/json) for invoking WaveMaker generated internal REST APIs.

[![](../../../assets/rest_formdata.png?v=20)](../../../assets/rest_formdata.png?v=20)

## REST Service Usage

To use the Service data within the app, you need to create a Variable. [Variable Access](http://[supsystic-show-popup id=105])We have seen how a 3rd Party REST service can be imported and used within a WaveMaker app.

< Web Services Overview

REST services using OAuth 2.0 >

Variables for the Web Services >

SOAP Services >

WebSocket Services >

5\. Creating Backend Services

- 5.1 Overview
    - [i. Accessing Data](/learn/app-development/services/creating-backend-services/#accessing-data)
        - [○ Life-cycle of data](/learn/app-development/services/creating-backend-services/#life-cycle)
    - [ii. Manipulating Data](/learn/app-development/services/creating-backend-services/#manipulating-data)
        - [○ Life-cycle of Events](/learn/app-development/services/creating-backend-services/#life-cycle-events)
    - [iii. REST APIs](/learn/app-development/services/creating-backend-services/#rest-apis)
- [5.2 Web Services](/learn/app-development/services/web-services/web-services/)
    - [i. Overview](/learn/app-development/services/web-services/web-services/#overview)
    - [ii. Variables for Invocation](/learn/app-development/services/web-services/web-services/#service-variable)
    - iii. Working with SOAP Services
        - [○ Overview](/learn/app-development/services/web-services/working-with-soap-services/)
        - [○ SOAP Service Setup](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-setup)
        - [○ SOAP Service Settings](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-settings)
        - [○ Generated REST APIs](/learn/app-development/services/web-services/working-with-soap-services/#generated-rest-apis)
        - [○ SOAP Service Usage](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-usage)
    - [iv. Working with REST Services](#)
        - [○ Overview](#)
        - [○ Test REST Service](#test-API)
        - [○ Configure REST Service](#configure-REST-service)
        - [○ REST Service Usage](#REST-service-usage)
        - [○ REST Services Using OAuth 2.0](/learn/app-development/services/web-services/oauth-2-0-rest-services/)
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
