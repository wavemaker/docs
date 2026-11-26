---
title: "DataBase Schema Import Modes"
id: "database-schema-import-modes"
sidebar_label: "DataBase Schema Modes"
---
---
## Introduction

When importing a database into WaveMaker, it connects to database, reads the schema, generates the sources and shows all the tables/views along with their relations in the Database Designer. Apart from displaying, the DB designer has a provision to make changes to the schema and update the underlying Database.

There are cases where the database schema has to be managed outside of the WaveMaker by a DBA or someone else. In such cases, the DB designer should not allow the changes to the Database. To ensure the read-only schema behavior for the imported database, WaveMaker provides an option to import the schema in READ-ONLY mode.

## Schema Import Modes

There are two modes in which the database schema can be imported:

- Read-Only Mode
- Editable Mode

You can import the database in any mode according to the requirement. Read-Only is the default mode for all the newly imported databases. However, you have an option to set the mode at the time of DB import or change it at a later time from the settings tab.

:::note
The credentials (password) that is used while importing DB schema is encoded using WaveMaker specific algorithm and is saved to the development profile.
:::

### Read-Only Mode

Once the database is imported in this mode, the DB designer will be opened in the read-only and will not permit any schema changes that affect the database.

[![](/learn/assets/db_import_readonly.png)](/learn/assets/db_import_readonly.png)

However, there are certain features that are allowed that do not affect the underlying schema such as but are reflected in the code generation:

- Virtual Primary key
- Virtual Relations
- Java Type Changes etc.

### Editable Mode

In this mode, the database designer will allow the developer to make changes to the imported schema and these changes are captured. If there are any changes that are local (not reflected in the database), a message will be displayed prompting you to update the DB.

When the DB designer has some changes in the draft, then you have two options:

#### 1. Update the Database
If you choose the **Update** the database with the draft changes, it will list all the changes done by the user and also shows the SQL script that will get executed. You can review the changes before update.

#### 2. Revert the changes
On clicking **Revert** the draft changes will be discarded and the DB designer & source code will be in sync with the database schema.

## Changing schema mode post import

For databases in Edit Mode, the schema mode can be changed anytime from the settings tab after importing the database and then click on save to enable the Database Designer in the selected mode.

### Limitations

- Import schema mode is given for avoiding accidental changes to the database. Any user either owner/developer can change the mode at any point of time from the **Settings** tab as shown in the previous section.
- There are certain databases for which WaveMaker itself does not allow editing of the importing database such as HQL, DB2, and any other custom database. For those databases, the default mode is READ-ONLY and cannot be changed.

