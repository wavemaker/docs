---
title: "Data Modelling"
id: "data-modelling"
---
---
A **data model** describes the structure of the database: the tables, columns, keys, and relationships. The data model for imported databases can be viewed from within the app using **DB Designer**. DB Designer for a specific database can be accessed by selecting the _database_ from the **Databases** Resource option**.**

[![](/learn/assets/db_designer_open.png)](/learn/assets/db_designer_open.png)

## Configuration Settings

**Settings tab** can be used to interact with the database and ensure that the data model is in sync with the database. It shows the connection settings of the selected database.

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
| **Primary Key** configuration |
| Type | can be single or composite. It is not editable.|
| Select Column | Column (columns in case of composite key) to be set as primary key. It is not editable. |
| Generator Type | how the primary key columns gets its values - assigned - user entry or auto increment - for integer type, [know more](/learn/app-development/services/database-services/working-database-schema/#identity-generators-for-primary-keys). It is not editable.|
| **Unique Constraints** |
|  | Columns whose values need to be restricted as unique. It is not editable. |
| **Column modifications** for selected column |
| Name | Holds the name of the column.  It is not editable. |
| SQL and Java Types | It is advisable to make changes to Java Types. And SQL Types is holds the data type and cannot be edited. |
| Constraints | Nullable or not. NOTE: The contraints against the coloumn value like Primary Key and Unique Key are turned on and the not applicable constraints are turned off. This cannot be edited |


:::note
- Any changes made to the database design, needs to be **Exported/Updated** for the changes to be synced with the database. Save alone does not ensure syncing.
:::

