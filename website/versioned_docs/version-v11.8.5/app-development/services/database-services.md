---
title: "Database Services"
id: "database-services"
---
---

A _database_ is the most common form of data storage for any enterprise and apps need to interact with these databases to define the workflow.

WaveMaker makes it easy to create web-based forms that are connected to an underlying database. To access a database from your WaveMaker application, you first create a new data model or import an existing data model into the project.

Import or creation of database within a WaveMaker app results in the generation of REST APIs. Each of the services integrated into your app is converted to a RESTful service and is consumed through their respective REST APIs. These REST APIs are exposed via the [API Designer](/learn/assets/API_Access.png) and can be tested and reconfigured as per the application needs. 

## WaveMaker DB Integration Process

The following figure gives an overview of the Database integration process within WaveMaker App.[![](/learn/assets/db_concepts.png)](/learn/assets/db_concepts.png)

1. Database Schema from an external RDBMS is imported into the app. This import includes the Data Model consisting of Tables, Columns, Relationships between tables and Constraints.
2. An ORM layer is auto-generated from the above DB Schema using Hibernate and JPA. A service layer is also auto-generated using Spring.
3. You, as an App Developer, can access the Entities from the ORM Layer, write custom queries, procedures and Java Services to extend the database functionality.
4. For each entity, query, procedure and Java service, a REST API is auto-generated using Spring-REST and Swagger.
5. Variables need to be created to interact with the REST API layer to access the database services. These variables will, in turn, be bound to Widgets to allow user interaction with the data.

## DB Workflow

When you integrate your WaveMaker app with any database, you set up the connection details and enable your app to interact with the Database. There are two forms of Database interaction:

- during design time to generate files for use within the app, and
- during runtime to access the data and work with it.

[![](/learn/assets/db_integrate_process.png)](/learn/assets/db_integrate_process.png) **Design Time Studio App behavior**: From the WaveMaker app:

1. when you add DB to WaveMaker app, it results in a request for metadata to the corresponding external Database, based upon the connection settings,
2. the external Database returns the metadata,
3. this returned metadata is used to generate files which will be used within the app.

**Note**: The database is not replicated or copied into the Studio.

**Run Time Studio App behavior**: During the run mode, when database call is triggered by user interaction:

1. a database call in the form of a CRUD operation is made by the app
2. the call is forwarded to the external Database with the help of the generated files

For an in-depth understanding of the ORM layers generated, their functionality and code generated for the Database Integration, refer to [ORM Artifacts](/learn/app-development/services/database-services/orm-artifacts/).

## WaveMaker Supported Databases and their Versions

WaveMaker supports the following databases and versions and the same can be used within your app.

| Database Name | Version | Driver Jar |
| --- | --- | --- |
| [![](/learn/assets/MariaDB.png)](/learn/assets/MariaDB.png) | 10.2 | Available in Maven Repo |
| [![mysql](/learn/assets/mysql.png)](/learn/assets/mysql.png) | 5.5 | Available in Maven Repo |
| 5.6 |
| 5.7 |
| [![PostgreSQL](/learn/assets/PostgreSQL.png)](/learn/assets/PostgreSQL.png) PostgreSQL | 9.4 | Available in Maven Repo |
| 9.5 |
| [![Oracle](/learn/assets/Oracle.png)](/learn/assets/Oracle.png) | 11.2 | [download ojdbc6.jar from here](http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html) |
| 12.1 | [download ojdbc7.jar from here](http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html) |
| 12.2 | [download ojdbc8.jar from here](http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html) |
| [![SQLServer](/learn/assets/SQLServer.png)](/learn/assets/SQLServer.png) SQL Server | 2014 | [Steps to Download sqljdbc4.2.jar](/learn/app-development/services/database-services/download-jdbc-driver-jar/)
(you can use JDBC driver 4.2, 6.0, 6.1 or 6.2, ensure that you import  **sqljdbc42.jar** or any Java ver 8 compatible jar file) |
| Azure SQL Database [Connect to Azure](/learn/how-tos/connect-azure-sql-server/) |
| [![DB2](/learn/assets/DB2.png)](/learn/assets/DB2.png) | 10.1 | [db2jcc4.jar](http://www-01.ibm.com/support/docview.wss?uid=swg21363866) |
| 11.1 |
| [![HSQLDB](/learn/assets/HSQLDB.png)](/learn/assets/HSQLDB.png) | 2.3.3 | Available in Maven Repo |
| 2.3.4 |

