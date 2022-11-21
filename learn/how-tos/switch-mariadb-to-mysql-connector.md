---
title: "Switch MariaDB to MySQL connector"
id: "switch-mariadb-to-mysql-connector"
---
---

WaveMaker applications use JDBC Connectors to communicate with Databases. When you import a MySQL database, WaveMaker uses MariaDB Connector to communicate with the MySQL database. 

We introduced the MariaDB JDBC connector in place of the MySQL Connector: MariaDB JDBC Connector is Apache 2.0 Licensed. 

:::note
This change is introduced in [v11.2](/learn/wavemaker-release-notes/v11-2-0).

- Existing Apps will continue to use MySQL Connector
- New apps will get Maria DB connectors, including workspace and MySQL databases.
:::

To use MySQL drivers in the backend, you should configure the MySQL connector instead of the default MariaDB connector.

## Changing MySql Connector for Workspace DB

- Navigate to File explorer and modify the following properties in the **properties files**.

```
db.userdb.url=jdbc:mysql://<HOST>:<PORT>/<DB_NAME>?useUnicode=yes&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull
db.userdb.driverClass=com.mysql.jdbc.Driver
```

## Changing the Connector for the MySql Database

You can change connectors when importing a new database and an existing imported database. For this, you must add a MySql Connector Dependency to **pom.xml**.

- Go to the **pom.xml** file. 
- Under the **<dependencies>** section, add the following dependencies, as specified below.

```
<dependency>
 <groupId>com.mysql</groupId>
 <artifactId>mysql-connector-j</artifactId>
 <version>8.0.30</version>
</dependency>
```

- Go to the Database section. Import a database.
- Before testing the connection, click **Advanced Settings**, and edit the **Connection URL** (JDBC) and **DriverClass**, as shown in the image below.

[![](/learn/assets/advanced-settings.png)](/learn/assets/advanced-settings.png)

### Change Connection URL 
 
```
jdbc:mysql://<HOST>:<PORT>/<DB_NAME>?useUnicode=yes&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull
```

### Change Driver Class

```
com.mysql.jdbc.Driver
```
- Test Connection. 

