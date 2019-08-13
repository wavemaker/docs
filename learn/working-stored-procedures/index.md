---
title: "Working with Stored Procedures"
id: "working-stored-procedures"
---

will be times when you want to display data from multiple tables or update/insert values into multiple tables. Queries and Stored Procedures come in handy in such instances. WaveMaker provides editors for Queries & Procedures for integrating them with the WaveMaker applications. Each query & procedure used in the WaveMaker application will be exposed as a REST API for the UI to consume and render the data.

_procedure_ is a prepared SQL code that you save in your database so you can reuse the code over and over again.

tab from WaveMaker Database Designer can be used to execute procedures that are written in and imported from the database using the command. Execute the procedure calls and save them for the usage within the app [creating Variable using the generated APIs](/learn/app-development/variables/database-apis/)

[![](../assets/db_procs.png)](../assets/db_procs.png)

## Parameters

Procedure will add the specified parameters. You can select the appropriate Parameter Type:

- for input parameter;
- for output parameter; and
- \-OUT for a combination parameter.

**Type**:

- can specify the **type** for each of the parameter. : Some data types might be specific to the underlying database being implemented, for example, cursor data type is available only for Oracle database.
- can also set the parameter type as one of **Side Properties** When you select this option while executing the procedure, the appropriate value is taken from the application rather than from user. Currently supported server defined properties are:
    - in User Id
    - in User Name
    - Date
    - Time
    - Date Time
- [here on how Blob types are handled.](/learn/app-development/services/database-services/blob-support-queries-procedures/)
- can also be set to App Environment Properties which can be configured differently for different runtime environments ( [more](/learn/how-tos/using-app-environment-properties/))

**& Undefined Cursors (Resultset)**

with the configured OUT parameters, procedures can also return ResultSet (cursor), which is referred to as Undefined Cursor. When any procedure is returning Undefined Cursor, in Response an extra property is generated with name Content. A POJO also will be generated for that Response.

supports the execution of procedures/functions written using PL/SQL. You can find out more about [Procedures here](http://www.oracle.com/technetwork/database/application-development/plsql/overview/index.html) In this section, we will be seeing how WaveMaker supports Stored Procedures with the help of an example. We are using a MySQL database.

are two aspects to stored procedure usage - Creation and Invocation:

### of procedures/functions

/Function needs to be created in the database itself. For MySQL DBs, you can use the **Shell** tab of [Tools](http://[supsystic-show-popup id=113]) Any procedures you have in a database that you [](http://[supsystic-show-popup id=106])will be available for use.

1. database we used contains an Employee table with Emp\_ID, Name and City details. Here is the table that we have designed using the [Designer](http://[supsystic-show-popup id=114]) [![](../assets/employee_schema.png)](../assets/employee_schema.png)
2. procedure entered in the DBShell under [Tools](http://[supsystic-show-popup id=113]) would be:
    
     ;;
    CREATE PROCEDURE emp\_in\_out(IN in\_city varchar(255), OUT total integer) 
      BEGIN SELECT COUNT(Emp\_ID) 
            INTO total
            FROM Employee 
            WHERE City = in\_city; 
      END;;
    DELIMITER ;
    
    A function would be:
    
     ;;
    CREATE FUNCTION emp\_in\_out(in\_city varchar(255)) RETURNS integer 
      BEGIN DECLARE emp\_tot INT;
            SELECT COUNT(Emp\_ID) 
               INTO emp\_tot
               FROM Employee 
               WHERE City = in\_city; 
            RETURN emp\_tot;
      END;;
    DELIMITER ;
    

### of procedures/functions from WaveMaker app

created in a DB can be accessed by creating a live service variable and associating it with the invocation of the procedure. Follow the steps given below to do the same: NOTE: This post explains the usage of stored procedures/functions in WaveMaker using the MySQL code. For the usage in different databases [here](#splinvoke)

1. the **Designer,** select the tab, use the following code to invoke the above procedure
    
     emp\_in\_out(:city, :total)
    
    Use the following code to invoke the function:
    
    {{:total = call emp\_in\_out(:city)
    
2. 8.4.1 release, you can use CTRL+space to select from a list of Procedures available in the database
3. will add the parameters. Select the appropriate options - for input parameter; for output parameter; and **\-out** for a combination parameter.
4. the data type for each of the parameter. See [](/learn/app-development/services/database-services/blob-support-queries-procedures/)for handling Blob types. : Some data types might be specific to the underlying database being implemented, for example, cursor data type is available only for Oracle database.
5. the procedure.
6. [a variable](http://[supsystic-show-popup id=105]) using the Database API generated on the save of the procedure. This variable will expose the parameters for binding. [on Variable Creation](/learn/app-development/variables/database-apis/)
7. use the Procedure, create a page with
    - input text box - to accept the city name to be bound to the input parameter of the above procedure and
    - to display the result.
8. parameter is bound to the property of the _box_ from the dialog
9. parameter for display by binding to any widget property variable, here we are binding to the caption of a label.
10. the app.

### specific invocation

- **/DB2** - the above documentation uses MySQL.
- \- same as MySQL. In case, procedures are bundled in a package, need to prefix the package name to the proc\_name.
- \- can be same as above or
    
     proc\_name(:param\_value1, :param\_value2);
    
- ** & SQLServer**\- Invoking Procedures:
    
     \[Schema\_name\].\[proc\_name\](:param\_value1, :param\_value2)
    
    Invoking Functions:
    
     \* from function\_name(:param\_value1, :param\_value2)
    

## Architecture

all queries and procedures, there will be a Rest API generated with the Service layer. Along with the API, depending on the query or procedure type, request and response POJO classes are generated.

**generated Code** _structure_ [![](../assets/queryproc_files.png)](../assets/queryproc_files.png): Both  and  POJO classes are generated as: <procedureName>Request/Response

- classes are generated in a package: <service\_packagegt;.models.procedure
- classes generated for all procedures having at least one return property i.e OUT parameter or cursor. Eg: a procedure with name will generate class with the returned columns.
- Procedures not returning any properties, no POJO is generated, instead, Void is used as return type in the Service layer.
- Procedures returning Cursor(s):
    
    - each cursor new POJO class generated with name Response.
        - example procedure with name with cursor parameter , the POJO generated will be
        - generated type will be used in <procedureResponse> class with given property name. In the above-mentioned case, it will be marked with type
    - the case of Undefined cursor returned i.e cursor not specified in parameters section.
        - the field as the POJO class will be generated as per the above case. [![](../assets/proc_cursor.png)](../assets/proc_cursor.png)
    - classes will be generated for all procedures, with names starting “create”, “build”, “add”, “update”, “edit”, “set”.
    
    :
    
    layer exposes the methods related to the configured query and procedures. Controller layer uses these methods to complete the user requests.
    
    We recommend using methods from this layer in custom Java services.
    
    - with name ProcedureExecutorService is generated in the .service package. For eg: for service hrdb, class name will be HrdbProcedureExecutorService.
    - with name execute<procedureName> will be generated for all configured procedures.
        - mentioned in Models->Procedures naming convention, if Request type generated for that procedure it will expected as argument otherwise all IN parameters expects as arguments.
        - type will be <procedureName>Response. In case of procedure not returning any properties it uses Void
    
    [![](../assets/proc_services.png)](../assets/proc_services.png):
    
    - class with name ProcedureExecutorController in package .controller.
    - API is generated for each configured query and procedure. Generated method signature will be same as service layer method signature.
    
    [![](../assets/proc_controller.png)](../assets/proc_controller.png)
    
    < Working with DB Schema
    
    Artifacts >
    
    5\. Creating Backend Services
    
    - 5.1 Overview
        - [Accessing Data](/learn/app-development/services/creating-backend-services/#accessing-data)
            - [Life-cycle of data](/learn/app-development/services/creating-backend-services/#life-cycle)
        - [Manipulating Data](/learn/app-development/services/creating-backend-services/#manipulating-data)
            - [Life-cycle of Events](/learn/app-development/services/creating-backend-services/#life-cycle-events)
        - [REST APIs](/learn/app-development/services/creating-backend-services/#rest-apis)
    - 5.2 Web Services
        - [Overview](/learn/services/web-services/web-services/#overview)
        - [Variables for Invocation](/learn/services/web-services/web-services/#service-variable)
        - iii. Working with SOAP Services
            - [Overview](/learn/app-development/services/web-services/web-services/working-with-soap-services/#SOAP-service-setup)
            - [SOAP Service Setup](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-setup)
            - [SOAP Service Settings](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-settings)
            - [Generated REST APIs](/learn/app-development/services/web-services/working-with-soap-services/#generated-rest-apis)
            - [SOAP Service Usage](/learn/app-development/services/web-services/working-with-soap-services/#SOAP-service-usage)
        - iv. Working with REST Services
            - [ Overview](/learn/app-development/services/web-services/rest-services/)
            - [ Test REST Service](/learn/app-development/services/web-services/rest-services/#test-API)
            - [ Configure REST Service](/learn/app-development/services/web-services/rest-services/#configure-REST-service)
            - [REST Service Usage](/learn/app-development/services/web-services/rest-services/#REST-service-usage)
        - iii. Working with Web Sockets
            - [Overview](/learn/app-development/services/web-services/working-with-websockets/)
            - [Service Integration](/learn/app-development/services/web-services/working-with-websockets/#import)
            - [Service Consumption](/learn/app-development/services/web-services/working-with-websockets/#variable)
            - [Use Cases](/learn/app-development/services/web-services/working-with-websockets/#use-cases)
    - [5.3 Database Services](/learn/app-development/services/database-services/database-services/)
        - [Overview](/learn/app-development/services/database-services/database-services/#)
        - [Supported Databases](/learn/app-development/services/database-services/database-services/#supported-databases)
        - iii. Working with Databases
            - [Overview](/learn/app-development/services/database-services/working-with-databases/#)
            - [Adding Database](/learn/app-development/services/database-services/working-with-databases/#integrating-database)
            - [Database Actions](/learn/app-development/services/database-services/working-with-databases/#database-actions)
        - iv. Data Modelling
            - [Overview](/learn/app-development/services/database-services/data-modelling/#)
            - [Configuration Settings](/learn/app-development/services/database-services/data-modelling/#configuration-settings)
            - [Database Designer](/learn/app-development/services/database-services/data-modelling/#database-designer)
                - [Schema Import Modes](/learn/app-development/services/database-services/database-schema-import-modes/)
            - ○ Working with Database Schema
                - [Overview](/learn/app-development/services/database-services/working-database-schema/)
                - [Adding Tables and Columns](/learn/app-development/services/database-services/working-database-schema/#add-tables-columns)
                - [Working with Relationships](/learn/app-development/services/database-services/working-database-schema/#database-relationships)
                - [Identity Generators for Primary Key Column](/learn/app-development/services/database-services/working-database-schema/#identity-generators)
                - [Column Metadata Configuration](/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration)
                - [Virtual Primary Keys and Relations](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys)
                - [Temporal Support](/learn/app-development/services/database-services/temporal-support/)
        - [Databases Access](#)
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
            - [Working with Stored Procedures](#)
                - [Overview](#)
                - [Procedure Creation](#procedure-creation)
                - [Procedure Parameters](#proc-params)
                - [Procedure Invocation](#procedure-invocation)
                - [Procedure Architecture](#procedure-architecture)
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
        - vi. ORM Artifacts
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
