---
title: "Data Modelling"
id: "data-modelling"
---
---
A **data model** describes the structure of the database: the tables, columns, keys, and relationships. The data model for imported databases can be viewed from within the app using **DB Designer**. DB Designer for a specific database can be accessed by selecting the _database_ from the **Databases** Resource option**.**

[![](/learn/assets/db_designer_open.png)](/learn/assets/db_designer_open.png)

## Configuration Settings

**Settings tab** can be used to interact with the database and ensure that the data model is in sync with the database. It shows the connection settings of the selected database.

:::note
- All these options are available **ONLY** for Data Model in **Edit Mode**.
- DB Schemas for HSQL and for databases categorized as "Other Databases" at the time of import cannot be edited and hence are rendered as Read-Only schemas.
:::

From this tab you can:

| Action | Description |
| --- | --- |
|  | **Re-import** enables you to build the data model from the database again. This would bring in changes made to the database and will revert all changes done by the database designer. |
|  | **Export** will move the data model to the database of your choice. You can choose to export to the current database or to a different database. **NOTE: You can only export to the same database system as the original import, you can change the database but not the database system.** |
|  | **Save** Database will save the db in your app workspace, this is the draft copy of the database solely available to your app. |
|  | **Delete** would delete the data model from the app. |

## Advanced Settings

Apart from the basic Database settings like host details, schema name etc., WaveMaker provides some **advanced database configuration options**.

| Setting | Description |
| --- | --- |
| **Java Package** | WaveMaker generates Java classes for you when you import a database. If you want a different Java package name than the default name we generate, type it in here. |

## Database Designer

**Design tab** renders the database components – tables, columns, and relationships. [![](/learn/assets/db_designer_schema.png)](/learn/assets/db_designer_schema.png)

Using this tab, you can:

| Action | Description |
| --- | --- |
| +Table | **Add** tables |
|  | **Delete** tables |
|  | **Search** for tables within the designer |
|  | **Update DB** with the changes made from the DB Designer. A preview dialog will open which will list all the changes made to the DB. Script tab will show the same changes in script format. |
|  | **Revert DB** designer to undo any changes made. **Note** this will not get any changes made to the database, use Re-Import for that. |
|  | **Re-import** enables you to build the data model from the database again. This would bring in changes made to the database and will revert all changes done from the database designer. |
|  | **Save** database will save the changes to your workspace. **Note** to save it to the database use the Update DB option. |
| **Table Modification** upon selecting a table |
| Name | change the name of the tables |
| ADD COLUMN | add columns, [know more](/learn/app-development/services/database-services/working-database-schema/#add-tables-columns) |
| **Primary Key** configuration |
| Type | can be single or composite |
| Select Column | Column (columns in case of composite key) to be set as primary key |
| Generator Type | how the primary key columns gets its values - assigned - user entry or auto increment - for integer type, [know more](/learn/app-development/services/database-services/working-database-schema/#identity-generators) |
| **Unique Constraints** |
| Name | Columns whose values need to be restricted as unique |
| **Column modifications** for selected column |
| Name |  |
| SQL and Java Types | It is advisable to make changes to Java Types rather than SQL Types unless you want the changes to be reflected in the database, in which case you need to export the database. You can review the type conversion from Java to SQL type from this document: [Java Types vs SQL Data Types](/learn/assets/JavaTypesVsDBTypes-Sheet.pdf) |
| Constraints | Nullable or not. NOTE: Primary Key and Unique Kay constraints need to be modified at the Table level. Foreign Key constraint can be modified from the respective Relation |
| **Relations** between tables |
|  | Relations cannot be modified, you need to delete and add a new relation if needed, [know more](/learn/app-development/services/database-services/working-database-schema/#database-relationships). |


:::note
- Any changes made to the database design, needs to be **Exported/Updated** for the changes to be synced with the database. Save alone does not ensure syncing.
- Design changes are restricted to Data Model in Edit Mode. For Read-Only DBs, HsqlDB, DB2 and other databases design modifications are restricted to Java Type changes and virtual relation settings. [Know more about import modes from here](/learn/app-development/services/database-services/database-schema-import-modes/)
:::

