---
title: "Working with Databases"
id: "working-with-databases"
---
---

## Adding Database

**Databases** can be accessed from the Resource Menu. Clicking the **+** will allow you to add a database to your app.

[![](/learn/assets/db_new.png)](/learn/assets/db_new.png)

There are various ways of adding a database to your app:

[![](/learn/assets/add_db.png)](/learn/assets/add_db.png)

## Connect to a DB

Using this option you can add an external database. You can import the database as Read-Only or as Editable. For more information, see [Schema Import Modes](/learn/app-development/services/database-services/database-schema-import-modes/).   

With Connect to a DB option, you get the following options to work with: 

#### 1. MariaDB
Host a MariaDB database on WaveMaker Cloud. 

#### 2. Sample DB
You can import this database into your app and try various scenarios, it is a great place to get started on DB services. 
This is an HSQL database `hrdb` with four tables:
- **Department** table with `deptid`, `name`, `code`, `location` and `budget figures`.
- **Employee** table with employee details like `id`, `name`, `address`, `picture`, `date of birth`, `job title`, `department id` (foreign key), `manager id` (self-referential key) and `username` and `password`.
- **Vacation** table giving the vacation details like `start date`, `end date`, `leave status` and `type`, and details related to `Employee table` via `empid`.
- **User** table with `name`, `password` and role information.

#### 3. External Database
Connect to an external database. For more information, see [Supported Databases and Version Matrix](/learn/app-development/services/database-services/database-services#supported-databases-and-versions).  

## Upload MySQL files
This option lets you create a database by importing a DB Script. This option is available for hosting the database on WaveMaker Cloud.

## Create your own DB
You can create your own database using the database designer. Using this option you can create MySQL, PostgreSQL, or SQL Server database and host them on WaveMaker Cloud (for MariaDB) or your external database.


### Advanced Settings (only for External Databases)

Apart from the basic Database settings like host details, schema name etc., **advanced database configuration options** need to be provided, when using an External Database. Based upon the basic settings the Advanced Settings are auto-populated but can be modified. Each Database System provides different options so you will see a portion of the options listed below, tailored to the Database System you are using.

:::note 
For connecting to an external database, you need to **Test Connection** before proceeding.
:::

| Setting | Description |
| --- | --- |
| **Service Name** | Name used to reference the imported database. By default, this is same as the Database Name, defined in Database Info section (not available for HSQL). Also,the database service name can only be given at the time of importing the database.|
| **Port** | The port number for the database. Typically this is set automatically when the database type is selected and should not be changed (not available for HSQL and MariaDB). |
| **Connection URL** | When you import a database using the standard configuration options on the Import Database screen, WaveMaker creates a JDBC URL for you. This URL is shown here in the Connection URL field. These are usually specific to the database type. For example with MySQL some character set usage could require adding “?useUnicode=true&characterEncoding=UTF-8” to the URL to characters to display correctly. If you know what you are doing and want to change this JDBC URL, you can do it here. |
| **Java Package** | WaveMaker generates Java classes for you when you import a database. If you want a different Java package name than the default name we generate, type it in here. |
| **Table Filter** | By default WaveMaker imports all the tables in the database. If you want to import only a subset of the tables, type in a comma-delimited list of regular expressions here (not available for HSQL and MariaDB). |
| **Schema Filter** | When you are importing a database that supports schemas, WaveMaker imports only the tables for the default schema. If you want to import tables from other schemas, add the schema names in this field. |
| **Driver Class** | JDBC driver class name. WaveMaker creates a JAR file for each database that uses a specified driver. If you want to use a different JAR file for connecting, specify it here (the JAR file must be in the Application Server’s classpath). |
| **Dialect** | Hibernate dialect. See Hibernate documentation for details, including the list of available dialects. |
| **Naming Strategy** | Most users should leave this blank. Enter the name of a Java class you created for handling the naming strategy (not available for HSQL and MariaDB) |

### Configuring Virtual Primary Key

##### 10.0 release

When connecting to an external Database, if the tables do not have Primary Key, you will be given an option to assign a Virtual Primary Key. 

:::tip
It is strongly recommended that you assign Virtual Primary Key to avoid any runtime issues.
:::

While connecting or importing the Database, select the Configure option to assign Virtual Primary Key.  

[![](/learn/assets/DB_import2.png)](/learn/assets/DB_import2.png) 

You can select column or columns whose values are unique and assign them to be the Virtual Primary Key. This assignment is specific to the app and will not impact the Database. 

:::note
After importing, you can always assign Virtual Primary key from the Database Designer Table properties. For more information, see [Virtual Primary Keys and Relationships](/learn/app-development/services/database-services/working-database-schema#virtual-primary-keys).
:::
  

[![](/learn/assets/DB_import3.png)](/learn/assets/DB_import3.png)

### Map Sequences

For databases that support sequences (Oracle, SQL Server, PostgreSQL, DB2, etc.) for the Primary Key generation, the mapping of Primary Key columns to the respective Sequences can be done at the time of connecting to Database.

You also have the option to change the assigned type to sequence and then assign a sequence to the same.

[![](/learn/assets/map_sequences.png)](/learn/assets/map_sequences.png)

## Database Actions

Once you have your app integrated with a database, schema information will be persisted in the WaveMaker. While you can access the data through Variables, any changes made to the database at the schema level to the local database or external database has to be synced with its counterpart. The various ways to achieve this are:

| Action | Description |
| ---- | --- |
| **Re-Import Database** |Re-Import Database will rewrite the db in your workspace with the actual db thus reverting any changes. It deletes the draft and generates the data model with given database details. |
|**Export Database**  |Export Database will update the db with the changes from your workspace ie the draft database. |
|**Save Database**  |Save Database will save the db in your app workspace, this is the draft copy of the database solely available to your app. |
|**Update Database**  | Update Database will update the db with the changes from your workspace and incorporate changes made by any other collaborator (provided they have exported the changes). <br/> This option is available after you make changes to the database schema from the design tab of the database designer. |
|**Revert Database**  | Revert Database will revert the db and delete the changes from your workspace. This option is available after you make changes to the database schema from the design tab of the database designer. |

## Increasing Database Transaction Timeout

Property in profile profiles - development.properties called ``db.databasename.transactionTimeout`` can be used to increase the timeout for database transaction
