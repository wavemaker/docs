---
title: "Connect To AWS Redshift Database"
id: ""
---

## Introduction

The document explains the steps to connect to an existing database in AWS RedshiftDB from the WaveMaker application. A Redshift Database is a cloud-based, big data warehouse solution offered by Amazon. The platform provides a storage system that lets companies store petabytes of data in easy-to-access “clusters” that can be queried in parallel


## Prerequisites

- RedshiftDB connection details such as
    - JDBC URL
    - DB name
    - DB Credentials aka username and password
- Allow connections from WaveMakerOnline (reach out to support@wavemaker.com for the Gateway IP)
- Download the driver jar
    - The required driver can be download from the below page https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-download-driver.html
    - The above link contains two options, to download the driver along with dependent libraries or to only download the driver. Here we will only need the driver jar **redshift-jdbc42-2.0.0.0.jar**.



## Steps :

1. Navigate to the Databases section and click on the plus icon to add the database to the project. From the popup, choose “Connect To a DB” option.


[![](/learn/assets/redshift-add-db.png)](/learn/assets/redshift-add-db.png)

[![](/learn/assets/redshift-connect-db.png)](/learn/assets/redshift-connect-db.png)

2. In the next step, we will need to choose the database provider, here select “Other”.

[![](/learn/assets/redshift-choose-db.png)](/learn/assets/redshift-choose-db.png)

3. The above popup will open the wizard to configure the DB. In the first step we will need to upload the driver jar for RedShiftDB. Click on ‘Choose File’ and upload the above downloaded driver jar **redshift-jdbc42-2.0.0.0.jar**

[![](/learn/assets/redshift-choose-driver.png)](/learn/assets/redshift-choose-driver.png)

4. In the next step, we will need to enter the below details of the RedshiftDB.
    - Username & Password - DB Credentials.
    - Database Name - name of the Database to connect.
    - Port  - Port on which Redshift is configured (default is 5439).
    - JDBC URL - JDBC connection string of the DB.
    - Driver Class - the driver's Class name. In this case it is **com.amazon.redshift.jdbc42.Driver**.
    - Dialect - The SQL Dialect to be used while querying the db. As Redshift is a postgres based DB the dialect in this case will be **com.wavemaker.runtime.data.dialect.WMPostgresSQLDialect**.

[![](/learn/assets/redshift-provide-details.png)](/learn/assets/redshift-provide-details.png)

5. Test the connection and click on the next button.

6. Select the desired tables to be imported and click on the next button. This will now automatically generate the CRUD APIs for the select entities. The imported tables can be viewed from the DB designer.

[![](/learn/assets/redshift-select-tables.png)](/learn/assets/redshift-select-tables.png)

[![](/learn/assets/redshift-db-designer.png)](/learn/assets/redshift-db-designer.png)
