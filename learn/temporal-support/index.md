---
title: "Temporal Support"
id: ""
---

DB2 has an inbuilt support for temporal or time-based data management. The temporal features in the DB2 product enable you to accurately track information and data changes over time and provide an efficient and cost-effective way to address auditing and compliance requirements, without having to specifically code for the same.

WaveMaker extends support for auditing and history using DB2 Temporal. You can seamlessly integrate the temporal functionality within WaveMaker apps and take advantage of DB2’s in-built time-based data management. In this document, we elaborate how WaveMaker achieves this support. For a use case example, [to this document](/learn/how-tos/working-with-temporals/)

# Temporal

Temporal allow the insertion, update, deletion, and query of data in the past, the present, and the future while keeping a complete history of "what you knew" and "when you knew it".

There are three types of temporal tables supported by DB2:

1. **\-period temporal tables** to allow for tracking the updates and deletes to the table rows over a period of time. This is achieved through:
    - master table with a system time period defined - the table includes additional timestamp columns to hold the system time period start and end points and transaction timestamps.
    - associated history table created as a duplicate of the master table.
    - history table is entirely managed by the database to track and manage multiple versions of data from the master table.
    - Temporal are mostly used for scenarios wherein you need to track, say, the policy updates for a vehicle over a period of time.
2. **\-period temporal tables** help in tracking business time i.e. when certain business conditions are, were, or will be valid. This is achieved through:
    - table itself maintains business period information with additional business start and end time columns to track the business times.
    - a need to maintain a separate history table.
    - allowing time range clauses like As Of a given date, Between and From-to two dates on the business period.
    - Temporal can be used to trace, say the interest rates applicable over a period of time in past or future.
3. **tables** manage both system time and business time and combine all the capabilities of system-period and application-period temporal tables.

For more details on DB2 Temporal refer to [matter of time: Temporal data management in DB2 10](https://www.ibm.com/developerworks/data/library/techarticle/dm-1204db2temporaldata/)

## Support in WaveMaker

When a DB2 database is imported, WaveMaker identifies the data tables with Temporals and allows for extraction of history data for those tables.

Two types of APIs are generated for temporal tables:

1. **standard APIs** for CRUD operations and other functionalities like count, find, filter etc. These APIs can be used to deal with data that is valid at the current time i.e. at the time of application run.
2. **period APIs** to fetch data for
    - time different from the current time, or
    - a specific time period.

[![](../assets/dbtemp_apis.png)](../assets/dbtemp_apis.png)

# Designer

- DB designer a table property specifies the table **Type** as:
    
    - Temporal,
    - Temporal, or
    - Temporal
    
    [![](../assets/dbtemp_tables.png)](../assets/dbtemp_tables.png)
- column property, **Column Type**, specifies the temporal type and the period type. The values can be:
    - Period Start
    - Period End
    - Period State
    - Period end
- clock icon will be displayed against columns which are part of temporals. These fields will not be displayed in the query results. You can uncheck the Hidden property in order to view these fields in the UI. [![](../assets/dbtemp_columns.png)](../assets/dbtemp_columns.png)
- default system period columns and transaction id are marked as Database defined. The values need not be entered by the user, they will be auto-populated by the database. [![](../assets/dbtemp_datavalue.png)](../assets/dbtemp_datavalue.png)

# REST APIs

Two types of REST APIs are generated for the DB2 Temporal tables:

1. CRUD and additional functionalities. Following conditions are applied for application temporal tables while requesting database.
    - , count, export, aggregations: Along with the given query filter, the entities AS OF current time are listed.
2. APIs: In addition to the standard APIs generated for the imported databases, the tables with temporals will have an additional period APIs auto-generated. This can be used to access the temporal data.
    - _/periods_ This API returns the history data for the temporal table by applying given filters. Method: GET or POST Parameters:
        1. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 01-01-1901.
        2. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 31-12-9999.
        3. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 01-01-1901.
        4. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 31-12-9999.
        5. \[optional\]: query to filter the history data.
        6. \[optional\]: pagination information. 
    - _/periods/{id} (or) /periods/composite-id_ This Api returns the history data for given id and by applying given filters. Method: GET Parameters:
        1. columns information as specified for normal findById API.
        2. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 01-01-1901.
        3. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 31-12-9999.
        4. \[optional\]: query to filter the history data.
        5. \[optional\]: pagination information.

**& Delete API**: For tables having Application temporals, these APIs will be generated. These API’s will make use of DB2 portion of syntax to update/delete the history.

- _/periods_ Method: PUT This API used to update the history data for Entity with given application temporal clause and q to filter. Parameters:
    
    1. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 01-01-1901.
    2. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 31-12-9999.
    3. \[optional\]: query to filter the history data.
    4. : Body: Entity data to update.
    
    Returns: This API returns IntegerWrapper, with affected rows count. Method: DELETE This API used to delete the history data for Entity with given application temporal clause and q to filter. Parameters:
    1. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 01-01-1901.
    2. \[optional\]: exists in case of system temporal tables; period value should be in Timestamp format, default value: 31-12-9999.
    3. \[optional\]: query to filter the history data.Returns: This API returns IntegerWrapper, with affected rows count.
- _\-id/periods_ Method: PUT This API used to update the history data for Entity with given application temporal clause. Parameters:
    
    1. ’s \[optional\]: Id columns as specified in normal Update API.
    2. : Body: Entity data to update.
    
    Returns: This API returns IntegerWrapper, with affected rows count. Method: DELETE This API used to delete the history data for Entity with given application temporal clause. Parameters:
    1. ’s \[optional\]: Id columns as specified in normal Update API.Returns: This API returns IntegerWrapper, with affected rows count.

# Enhancements

To achieve the above functionality, a **@TableTemporal** annotation is added, specifying the table temporal types on that Entity/Table. This information is used while making the database request. This annotation requires temporal types array. Temporal Types can be:

- \- Tables having System Temporal will be annotated with this annotation.
- \- Tables having Application Temporal will be annotated with this annotation.

[![](../assets/dbtemp_java.png)](../assets/dbtemp_java.png) Though there are no API changes in WMGenericDao, while processing request the above annotation will be used.

1. 2 database is imported as a Read-Only schema. As such, no changes to the table schema is allowed from the platform. Any changes need to be made to the database and the database re-imported for the changes to be reflected in your WaveMaker app.
2. of rows for Portion of a business time period is not currently supported.

< Working with DB Schema

Access >

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
- 5.3 Model Designer
    - [Overview](/learn/app-development/services/model-designer/)
- 5.3 Data Model
    - - [Overview](/learn/app-development/services/data-model/)

- [5.4 Database Services](/learn/app-development/services/database-services/database-services/)
    - [Overview](/learn/app-development/services/database-services/database-services/#)
    - [Supported Databases](/learn/app-development/services/database-services/database-services/#supported-databases)
    - iii. Working with Databases
        - [Overview](/learn/app-development/services/database-services/working-with-databases/#)
        - [Adding Database](/learn/app-development/services/database-services/working-with-databases/#integrating-database)
        - [Database Actions](/learn/app-development/services/database-services/working-with-databases/#database-actions)
    - [Data Modelling](/learn/app-development/services/database-services/data-modelling/)
        - [Overview](/learn/app-development/services/database-services/data-modelling/)
        - [Configuration Settings](/learn/app-development/services/database-services/data-modelling/#configuration-settings)
        - [Database Designer](/learn/app-development/services/database-services/data-modelling/#database-designer)
            - [Schema Import Modes](/learn/app-development/services/database-services/database-schema-import-modes/)
        - [ Working with Database Schema](#)
            - [Overview](/learn/app-development/services/database-services/working-database-schema/)
            - [Adding Tables and Columns](/learn/app-development/services/database-services/working-database-schema/#add-tables-columns)
            - [Working with Relationships](/learn/app-development/services/database-services/working-database-schema/#database-relationships)
            - [Identity Generators for Primary Key Column](/learn/app-development/services/database-services/working-database-schema/#identity-generators)
            - [Column Metadata Configuration](/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration)
            - [User-defined Column Data Validators](/learn/app-development/services/database-services/working-database-schema/#validators)
            - [Virtual Primary Keys and Relations](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys)
            - [Temporal Support](#)
    - v. Databases Access
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
    - vi. ORM Artifacts
        - [Database Integration Process](/learn/app-development/services/db-services/orm-artifacts/#database-integration-process)
        - [Layered Architecture](/learn/app-development/services/db-services/orm-artifacts/#layered-architecture)
        - [Generated Files](/learn/app-development/services/db-services/orm-artifacts/#generated-files)
        - [Generated APIs](/learn/app-development/services/db-services/orm-artifacts/#generated-apis)
            - [CRUD APIs](/learn/app-development/services/db-services/orm-artifacts/#crud-apis)
            - [Query APIs](/learn/app-development/services/db-services/orm-artifacts/#query-apis)
            - [Custom Query Syntax](/learn/app-development/services/db-services/orm-artifacts/#custom-query-syntax)
- 5.6 API Designer
    - [Overview](/learn/app-development/services/api-designer/api/)
    - [Database Services APIs](/learn/app-development/services/api-designer/database-service-apis/)
    - [Web Services APIs](/learn/app-development/services/api-designer/web-service-apis/)
    - [Java Services APIs](/learn/app-development/services/api-designer/java-service-apis/)
    - [Security Services APIs](/learn/app-development/services/api-designer/security-service-apis/)
- 5.7 3rd Party Libraries
    - [Overview](/learn/app-development/services/3rd-party-libraries/)
    - [Including resource files](/learn/app-development/services/3rd-party-libraries/#resource-files)
    - [Using third-party JavaScript file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-javascript-files/)
    - [Using third-party jar file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-jar-files/)
