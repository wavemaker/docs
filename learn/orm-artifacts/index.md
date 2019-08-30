---
title: "ORM Artifacts"
id: ""
---

Integration of WaveMaker app with database generates few files, services, and APIs. These are used internally by WaveMaker to achieve the seamless integration. This information is for advanced developers who want more control or need more information for academic interests.

## Layered Architecture

When a database is integrated into a WaveMaker app, it generates the source code for CRUD operations for each entity within the database. In addition to the CRUD APIs, the filter, count, and export APIs are also generated. Associated APIs in the case of related tables are also generated.

The source code is generated with the ORM, Service Layer & REST APIs with each layer having a specific responsibility:

- **Layer 1: REST Controller** is responsible for transporting the data between client and server, authorization of APIs & marshaling and unmarshaling of the model to JSON etc.
- **Layer 2: Service Layer** is responsible for validating the inputs and transaction management
- **Layer 3: DAO Layer** is responsible for interacting with the underlying database

The following diagram depicts the Layered Architecture mentioned above: [![](../assets/db_architecture.png)](../assets/db_architecture.png)

## Generated Files

The folder structure for the generated code is as follows:

1. Controllers generated for entities (one for each entity), queries and procedures: [![](../assets/db_files_controller.png)](../assets/db_files_controller.png)
2. Data Access Objects (DAO) for each of the entities: [![](../assets/db_files_dao.png)](../assets/db_files_dao.png)
3. Service Interfaces and Service Implementations for entities, queries, and procedures [![](../assets/db_files_services.png)](../assets/db_files_services.png)
4. POJOs for each entity [![](../assets/db_files_pojo.png)](../assets/db_files_pojo.png)

Each of the layers performs its function and delegates the call to the next layer in the chain. For example, after the unmarshaling of the JSON data to the model, and authorization checks, the REST layer delegates the call to the service layer etc.**Design time Configuration Files**: It contains files required for designing database.

- _db-connection-settings.json_: it contains connection properties.
- _servicename\_API.json_: Generated API specification (swagger) of given service.
- _servicename\_procedure.json_: contains information regarding procedures for that service.
- _servicename\_query.json_: contains information regarding query for that service.
- _servicename\_published\_datamodel.json_: contains database schema information. It plays a major role while updating DB changes. Whenever you do manual changes in the database you have to re-import to update this file.
- _servicename\_draft\_datamodel.json_: Contains user modifications. It’ll delete when we do update/re-import database.
- _servicedef.xml_: contains types information for this service.

[![](../assets/dbfiles.png)](../assets/dbfiles.png)

# Generated APIs for Database Services

Import or creation of database within a WaveMaker app results in the auto-generation of ORM artifacts from the Database Schema and as such each Schema needs to have a Primary key either single or composite. In case your external database schema comes without a primary key, you need to assign a column(s) as virtual primary key else all the columns are treated as part of a composite primary key. For each entity imported, a REST API is generated for each of the CRUD operations, Filter and Count functionalities. These REST APIs are exposed via the API Designer and can be tested and reconfigured as per the application needs.

[![](../assets/db_apis.png)](../assets/db_apis.png)As an example, we are using the following Employee-Department Database Schema (Sample hrdb that can be imported into Studio) with a unique constraint for Dept\_code on the department table:

[![](../assets/db_apis_db.png)](../assets/db_apis_db.png)

**Request Mapping:** _\[PROJECT\_ID\]/\[PROJECT\_NAME\]/services/\[SERVICE\_NAME\]/\[ENTITY\_NAME\]/_

**Example:**

### CRUD APIs

1. **CREATE** Inserts a record into the table _URL_: / _Request Type_: POST _Path Variables_: None _Request Parameter_: None _Request Body_: object in JSON format _Method Name Example_: createEmployee [![](../assets/db_apis_create.png)](../assets/db_apis_create.png)
2. **READ (primary key based)** Retrieves the data associated with given ID value _URL_: /{id} _Request Type_: GET _Path Variables_: primary key column value _Request Parameter_: None _Request Body_: none _Method Name Example_: getEmployee [![](../assets/db_apis_readpk.png)](../assets/db_apis_readpk.png)
3. **READ (unique key based)** Retrieves the data associated with given unique key value _URL_: /\[UNIQUE\_KEY\]/{unique\_key\_value} _Request Type_: GET _Path Variables_: unique key column value _Request Parameter_: None _Request Body_: none _Method Name Example_: getByDeptCode (unique key for department entity) [![](../assets/db_apis_readuk.png)](../assets/db_apis_readuk.png)
4. **READ (foreign key based)** Retrieves the data associated with given ID value from the related table _URL_: /{id..+}/\[relation\_field\] _Request Type_: GET _Path Variables_: primary key column value _Request Parameter_:
    
    - Page,
    - Size,
    - Sort
    
    _Request Body_: none _Method Name_: findAssociatedEmployees (employee foreign key for department entity) [![](../assets/db_apis_readfk.png)](../assets/db_apis_readfk.png)
5. **READ (foreign key based - self-referential)** Retrieves the data associated with given ID value _URL_: /{id..+}/\[relation\_field\] _Request Type_: GET _Path Variables_: primary key column value _Request Parameter_:
    
    - Page,
    - Size,
    - Sort
    
    _Request Body_: none _Method Name_: findAssociatedEmployeesForManagerId (foreign key) [![](../assets/db_apis_readsr.png)](../assets/db_apis_readsr.png)
6. **UPDATE** Updates entity record associated with the given id value _URL_: /{id} _Request Type_: PUT _Path Variables_: primary key column value _Request Parameter_: None _Request Body_: object in JSON format _Method Name Example_: editEmployee [![](../assets/db_apis_update.png)](../assets/db_apis_update.png)
7. **DELETE** Deletes entity record associated with the given id _URL_: /{id} _Request Type_: DELETE _Path Variables_: primary key column value _Request Parameter_: None _Request Body_: None _Method Name Example_: deleteEmployee [![](../assets/db_apis_delete.png)](../assets/db_apis_delete.png)

### Query APIs

**NOTE**: Though the following APIs are available in POST and GET type, GET APIs might fail if the request URL is longer than 2048. It is advisable to use POST request type.

1. **FILTER** Returns the list of entity instances matching the filter criteria (all values if query is not given) _URL_: /_filter_ _Request Type_: POST/GET _Path Variables_: None _Request Parameter_:
    
    - custom query (optional, see here for [query syntax](#custom-query-syntax)),
    - Page,
    - Size,
    - Sort
    
    _Request Body_: none _Method Name_: findEmployees [![](../assets/db_apis_search.png)](../assets/db_apis_search.png)
2. **COUNT** Returns the count of filtered entity instances (total count if query not given) _URL_: /count _Request Type_: POST/GET _Path Variables_: none _Request Parameter_: custom query (optional, see here for [query syntax](#custom-query-syntax)) _Request Body_: none _Method Name_: countEmployees [![](../assets/db_apis_count.png)](../assets/db_apis_count.png)
3. **EXPORT ** Returns the downloadable file url for the filtered data _URL_: /export _Request Type_: POST _Request Parameter_:
    
    - pageable - pagination and sorting options, [see here for more](http://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/domain/Pageable.html),
        - Size,
        - Sort
    
    _Request Body_:
    
    - ExportOptions (Body)
        - custom query (optional, see here for [query syntax](#custom-query-syntax)),
        - fields list (optional): \[{ “header”:”<column\_display\_name>”, “field”:”<entity\_field\_name>”, “expression”:”<custom\_expression>” (eg: (${field\_name} (or) <any string>)) }\]
        - exportType - data format for export can be EXCEL or CSV
        - fileName: exported file name.
    
    _Method Name Example_: exportEmployees [![](../assets/db_apis_export.png)](../assets/db_apis_export.png)

### Custom Query Syntax

The APIs generated by WaveMaker for all the imported tables will have methods that take a query as input. Here we will look at the usage of such query in APIs.

**APIs that use HQL Queries**: The Filter, Count and Export API in every Table Controller will use the HQL query, which is an optional parameter, for retrieving the data. These APIs can be found in respective tables’ controller class file.

1. **Filter API** This API returns the list of Entity objects that matches the given filter conditions in the query. If query param is empty, API returns all the Entity objects.
2. **Count API** Returns the count of Entities that matches the given filter conditions in the query. For an empty query, it returns the count of all Entity objects.
3. **Export API** Returns a downloadable file with the list of Entities that matches the given filter conditions in the query. For an empty query, we get all the Entity objects.

**Query Composition**: The HQL query mainly consists of four types of parameters.

- Field Name
- Value Expression
- Value
- Logical Expression

**Note**: Aggregate functions (avg(), sum(), min(), max()) in HQL query are currently not supported with these APIs.

**FieldName parameter**

- The fieldName refers to the name of the field associated with the column in the respective table. The field name is derived from the column name in the table and usually camelCased. [![](../assets/db_apis_fields.png)](../assets/db_apis_fields.png)
- The name of the field for a given column can be seen from DB Designer or the respectively generated model class. Field Name of a column can be found in DB designer on the selection of respective column in the properties panel. [![](../assets/db_apis_fieldname.png)](../assets/db_apis_fieldname.png)
- Relational field names - In order to filter values with respect to an entity in relation, fieldname must be given as _entityfield.fieldname_. This is applicable only for ManyToOne and OneToOne Relations. Eg: department.name = ‘Engineering’, the name is the fieldname of Department.java [![](../assets/db_apis_fieldsrel.png)](../assets/db_apis_fieldsrel.png)

**Value Expression parameter** Supported value expression types are listed in below table

**Operation**

**Expression**

**Supported Value Types**

**Result**

**Examples**

equals

\=

Number or String

Values that equals to given value

- empId=1
- firstname=’Eric’

not equals

!= (or) < >

Number or String

Values that are not equal to given value

- zip!=02127
- jobTitle< >‘Engineer’

between

between

Date or Number

Values between given range

- birthdate between '1973-10-21' and '1986-06-18' (using date format - YYYY-MM-DD)
- zip between 14231 and 15922

less than

<

Number

Values less than given value

- empId<6

greater than

\>

Number

Values greater than given value

- deptId>10

less than or equal to

<=

Number

Values less or equal to given value

- empId<=4

greater than or equal to

\>=

Number

Values greater than or equal to given value

- zip>=11

pattern matching

like

String

Values matching the given pattern

- street like ‘4%Houston%’

starts with

like

String

Values starting with the given string

- firstname like ‘E%’

ends with

like

String

Values ending with the given string

- lastname like ‘%e’

containing

like

String

Values containing the given string

- lastname like ‘%e%’

in

in

Number or Date or String

Values in the given set

- zip in (‘14231’, ‘02127’, ‘11212’)
- birthdate in ('1973-10-21' ,'1986-06-18')
- firstname in ( 'Sally' , 'William' , ‘Amanda’ )

null

is null

String

Values satisfying given condition

- role is null

not null

is not null

String

Values satisfying given condition

- date is not null

empty

\=

String

Values satisfying given condition

- lastname = ‘’

not empty

!= (or) <>

String

Values satisfying given condition

- lastname <> ‘’
- lastname != ‘’

**Value parameter** The “Value” parameter is the comparison value for the given field name. The value should be single quoted for non-numeric types. The format for the value of type date is ‘YYYY-MM-DD’.

**Logical Expressions**

- A logical expression in HQL does one of the following:
    - joins two or more conditions to form a complex query
    - alters the logic of the conditions
- Supported logical expressions with examples are listed below
- Order of execution of conditions can be controlled using parenthesis. Eg: (empId=4 AND zip=02127 ) OR (city like 'New York%' OR birthdate between '1991-01-01' and '1999-12-31' )

**Logical Expression**

**Results**

**Examples**

AND/and

Result set satisfying both conditions

empId>5 AND firstname like ‘A%’

OR/or

Result set satisfying either of the conditions

empId=5 OR deptId=1

NOT/not

Result set satisfying negation of the conditions

NOT ( firstname like ‘A%’ AND empId=4)

For further reference to HQL query [http://docs.jboss.org/hibernate/orm/4.3/manual/en-US/html/ch16.html](http://docs.jboss.org/hibernate/orm/4.3/manual/en-US/html/ch16.html)

< DB Access

5\. Creating Backend Services

- 5.1 Overview
    - [i. Accessing Data](/learn/app-development/services/creating-backend-services/#accessing-data)
        - [○ Life-cycle of data](/learn/app-development/services/creating-backend-services/#life-cycle)
    - [ii. Manipulating Data](/learn/app-development/services/creating-backend-services/#manipulating-data)
        - [○ Life-cycle of Events](/learn/app-development/services/creating-backend-services/#life-cycle-events)
    - [iii. REST APIs](/learn/app-development/services/creating-backend-services/#rest-apis)
- 5.2 Web Services
    - [i. Overview](/learn/services/web-services/web-services/#overview)
    - [ii. Variables for Invocation](/learn/services/web-services/web-services/#service-variable)
    - iii. Working with SOAP Services
        - [○ Overview](/learn/app-development/services/web-services/web-services/working-with-soap-services/#SOAP-service-setup)
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
- 5.3 Model Designer
    - [i. Overview](/learn/app-development/services/model-designer/)
- [5.4 Database Services](/learn/app-development/services/database-services/database-services/)
    - [i. Overview](/learn/app-development/services/database-services/database-services/#)
    - [ii. Supported Databases](/learn/app-development/services/database-services/database-services/#supported-databases)
    - iii. Working with Databases
        - [○ Overview](/learn/app-development/services/database-services/working-with-databases/#)
        - [○ Adding Database](/learn/app-development/services/database-services/working-with-databases/#integrating-database)
        - [○ Database Actions](/learn/app-development/services/database-services/working-with-databases/#database-actions)
    - iv. Data Modelling
        - [○ Overview](/learn/app-development/services/database-services/data-modelling/#)
        - [○ Configuration Settings](/learn/app-development/services/database-services/data-modelling/#configuration-settings)
        - [○ Database Designer](/learn/app-development/services/database-services/data-modelling/#database-designer)
            - [● Schema Import Modes](/learn/app-development/services/database-services/database-schema-import-modes/)
        - ○ Working with Database Schema
            - [● Overview](/learn/app-development/services/database-services/working-database-schema/)
            - [● Adding Tables and Columns](/learn/app-development/services/database-services/working-database-schema/#add-tables-columns)
            - [● Working with Relationships](/learn/app-development/services/database-services/working-database-schema/#database-relationships)
            - [● Identity Generators for Primary Key Column](/learn/app-development/services/database-services/working-database-schema/#identity-generators)
            - [● Column Metadata Configuration](/learn/app-development/services/database-services/working-database-schema/#column-metadata-configuration)
            - [● Virtual Primary Keys and Relations](/learn/app-development/services/database-services/working-database-schema/#virtual-primary-keys)
            - [● Temporal Support](/learn/app-development/services/database-services/temporal-support/)
    - v. Databases Access
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
    - [vi. ORM Artifacts](#)
        - [○ Layered Architecture](#layered-architecture)
        - [○ Generated Files](#generated-files)
        - [○ Generated APIs](#generated-apis)
            - [● CRUD APIs](#crud-apis)
            - [● Query APIs](#query-apis)
            - [● Custom Query Syntax](#custom-query-syntax)
- 5.5 Java Services
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
- 5.6 API Designer
    - [i. Overview](/learn/app-development/services/api-designer/api/)
    - [ii. Database Services APIs](/learn/app-development/services/api-designer/database-service-apis/)
    - [iii. Web Services APIs](/learn/app-development/services/api-designer/web-service-apis/)
    - [iv. Java Services APIs](/learn/app-development/services/api-designer/java-service-apis/)
    - [v. Security Services APIs](/learn/app-development/services/api-designer/security-service-apis/)
- 5.7 3rd Party Libraries
    - [i. Overview](/learn/app-development/services/3rd-party-libraries/)
    - [ii. Including resource files](/learn/app-development/services/3rd-party-libraries/#resource-files)
    - [iii. Using third-party JavaScript file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-javascript-files/)
    - [iv. Using third-party jar file](/learn/app-development/services/3rd-party-libraries/using-3rd-party-jar-files/)
