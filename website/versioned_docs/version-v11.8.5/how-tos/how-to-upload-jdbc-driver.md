---
title: "How to Upload JDBC Driver"
id: "how-to-upload-jdbc-driver"
sidebar_label: "How to Upload JDBC Driver"
---

Java Database Connectivity (JDBC) drivers are the set of classes and methods used in Java applications to connect and interact with databases.

## Why Upload JDBC Driver

In WaveMaker, various databases like MySQL, Oracle, Microsoft SQL Server, etc., are supported. Different databases have unique features and use database-specific SQL queries and syntax to perform, retrieve, update, insert, and delete operations on the database within the application.

JDBC driver is uploaded to allow WaveMaker integration with the necessary database. JDBC driver version details ensure that the driver contains the required classes and methods to maintain the compatibility of the chosen database with WaveMaker studio.

To find the recommended version of the JDBC driver for your database, see [Recommended JDBC Driver Versions for Databases](https://docs.wavemaker.com/learn/app-development/services/database-services/download-jdbc-driver-jar/).

## How to Upload JDBC Driver

For example, to upload the JDBC driver for ORACLE DATABASE, find the following steps.

1. Go to **Databases** and click on '+' to add a new database.

[![](/learn/assets/jdbc-database.png)](/learn/assets/jdbc-database.png)

2. Select **Connect to a DB**.

[![](/learn/assets/jdbc-connect-database.png)](/learn/assets/jdbc-connect-database.png)

3. Select the **ORACLE DATABASE**.

[![](/learn/assets/jdbc-oracle-database.png)](/learn/assets/jdbc-oracle-database.png)

4. In the **Import Driver** window, select a suitable JDBC driver version.

[![](/learn/assets/jdbc-import-driver.png)](/learn/assets/jdbc-import-driver.png)

5. Upload the Driver Jar and click **Next**. For further configuration details, see [Connect to Database](https://docs.wavemaker.com/learn/jump-start/jump-start-db-essentials/#connect-to-database).
