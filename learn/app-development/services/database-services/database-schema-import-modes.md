---
title: "DataBase Schema Import Modes"
id: "database-schema-import-modes"
sidebar_label: "DataBase Schema Modes"
---
---
## Introduction

When importing a database into WaveMaker, it connects to database, reads the schema, generates the sources and shows all the tables/views along with their relations in the Database Designer.

There are cases where the database schema has to be managed outside of the WaveMaker by a DBA or someone else. In such cases, the DB designer should not allow the changes to the Database. To ensure the read-only schema behavior for the imported database, WaveMaker provides an option to import the schema in READ-ONLY mode.

## Read-Only Mode

Read-Only is the default mode for all the newly imported databases. In this mode, the DB designer does not permit any schema changes that affect the database.

:::note
The credentials (password) that is used while importing DB schema is encoded using WaveMaker specific algorithm and is saved to the development profile.
:::

[![](/learn/assets/db_import_readonly.png)](/learn/assets/db_import_readonly.png)

However, there are certain features that are allowed that do not affect the underlying schema such as but are reflected in the code generation:

- Virtual Primary key
- Java Type Changes etc.

### Limitations

- Import schema mode is given for avoiding accidental changes to the database.
- WaveMaker does not allow editing of the imported database such as HQL, DB2, and any other custom database. For those databases, the default mode is READ-ONLY and cannot be changed.

