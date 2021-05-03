---
title: "Connect To AWS Redshift Database"
id: ""
---

## Introduction

The document explains the steps to connect to an existing database in AWS RedshiftDB from the WaveMaker application. A Redshift Database is a cloud-based, big data warehouse solution offered by Amazon. The platform provides a storage system that lets companies store petabytes of data in easy-to-access “clusters” that can be queried in parallel.


## Prerequisites

- RedshiftDB connection details such as
    - Host
    - DB name
    - DB Credentials 
- Allow connections from WaveMakerOnline (reach out to support@wavemaker.com for the Gateway IP)


## Steps :

1. Navigate to the Databases section and click on the plus icon to add the database to the project. From the popup, choose “Connect To a DB” option.


[![](/learn/assets/redshift-add-db.png)](/learn/assets/redshift-add-db.png)

[![](/learn/assets/redshift-connect-db.png)](/learn/assets/redshift-connect-db.png)

2. In the next step, we will need to choose the database provider, here select “Amazon Redshift”.

[![](/learn/assets/Import-DB.png)](/learn/assets/Import-DB.png)

3. In the next step, we will need to enter the below details of the RedshiftDB.
    - Database Info : 
        - Username & Password - DB Credentials.
        - Database Name - Name of the Database to connect.
        - Host - Hostname of the database to connect.
        - Schema Filter - List of schema names to be imported in the wavemaker.
    - Advanced Settings : 
        - Port  - Port on which Redshift is configured (default is 5439).
        - JDBC URL - JDBC connection string of the DB.

[![](/learn/assets/redshift-provide-details.png)](/learn/assets/redshift-provide-details.png)

4. Test the connection and click on the next button.

5. Select the desired tables to be imported and click on the next button. This will now automatically generate the CRUD APIs for the select entities. The imported tables can be viewed from the DB designer.

[![](/learn/assets/redshift-select-tables.png)](/learn/assets/redshift-select-tables.png)

[![](/learn/assets/redshift-db-designer.png)](/learn/assets/redshift-db-designer.png)
