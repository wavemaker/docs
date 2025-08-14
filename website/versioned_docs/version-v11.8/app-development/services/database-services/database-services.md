---
title: "Database Services Overview"
id: "database-services"
---
---

A database is the most common form of data storage for any enterprise and apps that need to interact with these databases to define the workflow.

[![](/learn/assets/db_new.png)](/learn/assets/db_new.png)

WaveMaker makes it easy to create web-based forms that are connected to an underlying database. To access a database from your WaveMaker application, you first create a new data model or import an existing data model into the project.

Import or creation of database within a WaveMaker app results in the generation of REST APIs. Each of the services integrated into your app is converted to a RESTful service and is consumed through their respective REST APIs. These REST APIs are exposed via the [API Designer](/learn/assets/API_Access.png) and can be tested and reconfigured as per the application needs.             


## Database Integration Process

The following figure gives an overview of the Database integration process within WaveMaker App.[![](/learn/assets/db_concepts.png)](/learn/assets/db_concepts.png)

1. Database Schema from an external RDBMS is imported into the app. This import includes the Data Model consisting of Tables, Columns, Relationships between tables and Constraints.
2. An ORM layer is auto-generated from the above DB Schema using Hibernate and JPA. A service layer is also auto-generated using Spring.
3. You, as an App Developer, can access the Entities from the ORM Layer, write custom queries, procedures and Java Services to extend the database functionality.
4. For each entity, query, procedure and Java service, a REST API is auto-generated using Spring-REST and Swagger.
5. Variables need to be created to interact with the REST API layer to access the database services. These variables will, in turn, be bound to Widgets to allow user interaction with the data.

## Database Workflow

When you integrate your WaveMaker app with any database, you set up the connection details and enable your app to interact with the Database. There are two forms of Database interaction:

- during design time to generate files for use within the app, and
- during runtime to access the data and work with it.

[![](/learn/assets/db_integrate_process.png)](/learn/assets/db_integrate_process.png) **Design Time Studio App behavior**: From the WaveMaker app:

1. when you add DB to WaveMaker app, it results in a request for metadata to the corresponding external Database, based upon the connection settings,
2. the external Database returns the metadata,
3. this returned metadata is used to generate files which will be used within the app.

:::note
The database is not replicated or copied into the Studio.
:::

### Run Time Studio App behavior
During the run mode, when database call is triggered by user interaction:

1. a database call in the form of a CRUD operation is made by the app
2. the call is forwarded to the external Database with the help of the generated files

For more understanding of the ORM generated layers, their functionality and code generated for the Database Integration, see [ORM Artifacts](/learn/app-development/services/database-services/orm-artifacts/).

## Supported Databases and Versions

WaveMaker supports the following databases and versions and the same can be used within your app.

| Database Name | Version | Driver Jar |
| --- | --- | --- |
|[![](/learn/assets/MariaDB.png)](/learn/assets/MariaDB.png)| 10.2.8 | Available in Maven Repo. The dependency is automatically added in the pom.xml file. |
|[![mysql](/learn/assets/mysql.png)](/learn/assets/mysql.png)|- 5.7 - 8.0.21 | Available in Maven Repo. The dependency is automatically added in the pom.xml file. |
|[![PostgreSQL](/learn/assets/PostgreSQL.png)](/learn/assets/PostgreSQL.png) PostgreSQL |- 9.6 - 10  - 11  - 12  - 13 | Available in Maven Repo. The dependency is automatically added in the pom.xml file. |
| [![Oracle](/learn/assets/Oracle.png)](/learn/assets/Oracle.png) |- 12c  - 18c  - 19c |Refer [recommended JDBC driver versions here](/learn/app-development/services/database-services/download-jdbc-driver-jar#oracle).|
| [![SQLServer](/learn/assets/SQLServer.png)](/learn/assets/SQLServer.png) SQL Server | - 2016   - 2017   - 2019   - Azure SQL [Connect to Azure](/learn/how-tos/connect-azure-sql-server/) | Refer [recommended JDBC driver versions here](/learn/app-development/services/database-services/download-jdbc-driver-jar#sqlserver).|
| [![DB2](/learn/assets/DB2.png)](/learn/assets/DB2.png) |- 10.5   - 11.1   - 11.5|Refer [recommended JDBC driver versions here](/learn/app-development/services/database-services/download-jdbc-driver-jar#db2).  |
| [![Redshift](/learn/assets/Redshift.png)](/learn/assets/Redshift.png) |- 8.0.2 | Available in Maven Repo. The dependency is automatically added in the pom.xml file.  |
| [![SAP HANA](/learn/assets/SAP_HANA.png)](/learn/assets/SAP_HANA.png) |- 4 | Available in Maven Repo. The dependency is automatically added in the pom.xml file.  |
| [![HSQLDB](/learn/assets/HSQLDB.png)](/learn/assets/HSQLDB.png) |- 2.4.1   - 2.5.1 | Available in Maven Repo. The dependency is automatically added in the pom.xml file.  |

