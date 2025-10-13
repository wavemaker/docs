---
title: "Connect To SAP Hana Cloud Database"
id: "configuring-sap-hana-clouddb"
---
---

## Introduction

This document provides the steps to connect to SAP HANA Cloud Database and configure the relational Database schema in WaveMaker. SAP HANA Cloud is a fully managed in-memory cloud Database as a Service (DBaaS) offered by SAP. It helps manage your data storage and integration while running powerful applications.

## Prerequisites

- SAP HANA Cloud connection details such as:
  - Host
  - DB name
  - DB Credentials
- Allow connections from WaveMakerOnline (reach out to [support](mailto:support@wavemaker.com) for the Gateway IP)

## Steps

1. Navigate to the Databases section and click on the plus icon to add the Database to the project. From the popup, choose **Connect To a DB** option.


[![](/learn/assets/saphanacloud-add-db.png)](/learn/assets/saphanacloud-add-db.png)

[![](/learn/assets/saphanacloud-connect-db.png)](/learn/assets/saphanacloud-connect-db.png)

2. In the next step, choose the Database provider. Select **SAP HANA**.

[![](/learn/assets/Import-DB.png)](/learn/assets/Import-DB.png)

3. In the next step, enter the details of the SAP HANA Cloud Database.
    - Database Info:
        - **Username and Password**: DB Credentials.
        - **Database Name**: Provide the name of the Database to connect.
        - **Host**: Hostname of the Database to connect.
        - **Schema Filter**: List of schema names to be imported in the WaveMaker.
    - Advanced Settings:
        - **Port**: Port on which SAP HANA is configured (default is 443).
        - **JDBC URL**: JDBC connection string of the DB.
    (Example: `**jdbc:sap://< hostname>:< port>/?encrypt=true&validateCertificate=false&nonBlockingIO=false**`)

[![](/learn/assets/saphanacloud-provide-details.png)](/learn/assets/saphanacloud-provide-details.png)

4. Test the connection and click on the Next button.

5. Select the desired tables to be imported and click on the Next button. This will now automatically generate the CRUD APIs for the select entities. The imported tables can be viewed from the DB designer.

[![](/learn/assets/saphanacloudselect-tables.png)](/learn/assets/saphanacloudselect-tables.png)

[![](/learn/assets/saphanacloud-db-designer.png)](/learn/assets/saphanacloud-db-designer.png)
