---
title: "Recommended JDBC Driver Versions for Databases"
id: "download-jdbc-driver-jar"
---
---

This document provides you with the recommended Java Database Connectivity (JDBC) driver versions for the respective database versions supported for Studio integration.

## Download JDBC Drivers

:::important
- The following download URLs will redirect you to an external page, i.e., the JDBC driver download page for the respective database.
- Please ensure that you import any Java 8 compatible jar file.
:::

### Oracle

| Oracle Database Versions | Download Driver   |
| ---| --- |
| Oracle 12c | [ojdbc7.jar](https://www.oracle.com/database/technologies/jdbc-drivers-12c-downloads.html)|
| Oracle 18c | [ojdbc8.jar](https://www.oracle.com/database/technologies/appdev/jdbc-ucp-183-downloads.html)|
| Oracle 19c |[ojdbc8.jar](https://www.oracle.com/database/technologies/appdev/jdbc-ucp-19-6-c-downloads.html) |

### SQLServer
 
| SQL Server Database Versions | Download Driver  |
| --- | --- |
| SQL Server 2016| [Driver 9.2](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-2016)|
| SQL Server 2017| [Driver 9.2](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-2017) |
| SQL Server 2019| [Driver 9.2](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15) |
| Azure SQL | [Driver 9.2](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15) |


### DB2

|DB2 Database Versions| Download Driver   |
| --- | --- |
| v10.5 | [db2jcc4.jar](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads) |
| v11.1 | [db2jcc4.jar](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads) |
| v11.5 | [db2jcc4.jar](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads) |

:::note
- All the above download URLs will redirect you to an external page to download the respective driver zip.
- Once you download them, extract the downloaded file.
   
For example, select and upload **`mssql-jdbc-9.2.1.jre8.jar`**
Typically, located in: `<your extracted folder>/sqljdbc_9.2/enu/`
:::

Please see the [document](/learn/app-development/services/database-services/database-services#supported-databases-and-versions) to learn about the supported database versions to integrate them into your application.
