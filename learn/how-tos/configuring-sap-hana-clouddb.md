---
title: "Connect To SAP Hana Cloud Database"
id: ""
---

## Introduction

This document explains the steps to connect to SAP HANA CLOUD database and configure the relational database schema in WaveMaker.SAP HANA Cloud is a fully managed in-memory cloud database as a service (DBaaS) offered by SAP that helps in managing your data storage and integration while running powerful applications.

## Prerequisites
- WaveMaker Studio Version 10.6 and above.
- SAP HANA CLOUD connection details such as
    - JDBC URL
    - DB name
    - DB Credentials username and password
- Allow connections from WaveMakerOnline (reach out to support@wavemaker.com for the Gateway IP)
- Download the driver jar
    - The required driver **ngdbc-2.6.30.jar** can be download from the below page https://jar-download.com/artifacts/com.sap.cloud.db.jdbc/ngdbc
    

## Steps :

1. Navigate to the Databases section and click on the plus icon to add the database to the project. From the popup, choose “Connect To a DB” option.


[![](/learn/assets/saphanacloud-add-db.png)](/learn/assets/saphanacloud-add-db.png)

[![](/learn/assets/saphanacloud-connect-db.png)](/learn/assets/saphanacloud-connect-db.png)

2. In the next step, we will need to choose the database provider, here select “Other”.

[![](/learn/assets/saphanacloud-choose-db.png)](/learn/assets/saphanacloud-choose-db.png)

3. The above popup will open the wizard to configure the DB. In the first step we will need to upload the driver jar for SAP HANA CLOUD. Click on ‘Choose File’ and upload the above downloaded driver jar **ngdbc-2.6.30.jar**

[![](/learn/assets/saphanacloud-choose-driver.png)](/learn/assets/saphanacloud-choose-driver.png)

4. In the next step, we will need to enter the below details of the SAP HANA CLOUD Database.
    - Username & Password - DB Credentials.
    - Database Name - name of the Database to connect.
    - JDBC URL - JDBC connection string of the DB. 
    (Example: **jdbc:sap://< hostname>:< port>/?encrypt=true**)
    - Driver Class - the driver's Class name. In this case it is **com.sap.db.jdbc.Driver**.
    - Dialect - The SQL Dialect to be used while querying the db.In this case we used dialect for the SAP HANA Cloud column store this will be **org.hibernate.dialect.HANACloudColumnStoreDialect**. 
    - Refer for following link more dialects (https://docs.jboss.org/hibernate/stable/orm/javadocs/org/hibernate/dialect/class-use/AbstractHANADialect.html): 

[![](/learn/assets/saphanacloud-provide-details.png)](/learn/assets/saphanacloud-provide-details.png)

5. Test the connection and click on the next button.

6. Select the desired tables to be imported and click on the next button. This will now automatically generate the CRUD APIs for the select entities. The imported tables can be viewed from the DB designer.

[![](/learn/assets/saphanacloudselect-tables.png)](/learn/assets/saphanacloudselect-tables.png)

[![](/learn/assets/saphanacloud-db-designer.png)](/learn/assets/saphanacloud-db-designer.png)
