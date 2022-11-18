---
title: "Switch MariaDB to MySQL connector"
id: "switch-mariadb-to-mysql-connector"
---
---

## Introduction

- WaveMaker applications use JDBC Connectors to communicate with Databases. 
- To communicate with the MySQL/MariaDB database we use MySQL Connector.
- Due to licensing issues, we are introducing the MariaDB JDBC connector in place of MySQL Connector. MariaDB  JDBC Connector is Apache 2.0 Licensed.
## Previous Model

 MySQL and MariaDB(Workspace DB) are using MySQL Connector for the JDBC connection

 ## New Model

- Existing Apps will continue to use MySQL Connector
- New apps will get Maria DB connector for both
    - Workspace database and MySQL database

## Steps for Changing MySql Connector for workspace DB

- Navigate to File explorer and modify the following properties in the **properties files**
```
db.userdb.url=jdbc:mysql://<HOST>:<PORT>/<DB_NAME>?useUnicode=yes&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull
db.userdb.driverClass=com.mysql.jdbc.Driver
```

## Steps for Changing connector for the MySql database

- Change while importing new database
- Change for existing Imported database
- Add  MySql Connector Dependency to **pom.xml**
    - Navigate to the **pom.xml** file. Under the **<dependencies>** section Add the following dependencies as specified below.
```
<dependency>
 <groupId>com.mysql</groupId>
 <artifactId>mysql-connector-j</artifactId>
 <version>8.0.30</version>
</dependency>
```
- Navigate to the Database section, import a database and before the test connection click on advanced settings and edit the Connection(JDBC) URL and DriverClass as shown below.
#### Change Connection URL  
```
jdbc:mysql://<HOST>:<PORT>/<DB_NAME>?useUnicode=yes&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull
```
#### Change Driver Class
```
com.mysql.jdbc.Driver
```

### Test Connection 
[![](/learn/assets/advanced-settings.png)](/learn/assets/advanced-settings.png)


