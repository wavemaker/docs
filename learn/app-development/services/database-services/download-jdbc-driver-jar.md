---
title: "Recommended JDBC Driver versions for databases"
id: ""
---
---

This document provides you with the recommended Java Database Connectivity (JDBC) driver versions for the respective database versions supported for integration in studio.    

## Link for JDBC driver downloads

---

:::important
- The links below will redirect you to an external page i.e., to the JDBC driver download page for the respective database.
- Please ensure that you import any Java 8 compatible jar file.
:::

### Oracle

| Oracle Database Versions | Driver Version | Download |
| ---| --- | --- |
| Oracle 12c | ojdbc7.jar | [link](https://www.oracle.com/database/technologies/jdbc-drivers-12c-downloads.html)|
| Oracle 18c | ojdbc8.jar | [link](https://www.oracle.com/database/technologies/appdev/jdbc-ucp-183-downloads.html)|
| Oracle 19c |ojdbc8.jar | [link](https://www.oracle.com/database/technologies/appdev/jdbc-ucp-19-6-c-downloads.html) |

 ### SQLServer
 
| SQL Server Database Versions | Driver Version | Download |
| --- | --- | --- |
| SQL Server 2016| Driver 9.2 | [link](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-2016)|
| SQL Server 2017| Driver 9.2 | [link](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-2017) |
| SQL Server 2019| Driver 9.2 | [link](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15) |
| Azure SQL | Driver 9.2 | [link](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15) |


### DB2

|DB2 Database Versions| Driver Version | Download |
| --- | --- | --- |
| v10.5 | db2jcc4.jar | [link](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads) |
| v11.1 | db2jcc4.jar | [link](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads) |
| v11.5 | db2jcc4.jar| [link](https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads) |

:::note
 - All the above links will redirect you to an external page where in you can download the respective driver zip.
 - Once the download is complete, extract the downloaded file.
   
   For ex: Select and upload **mssql-jdbc-9.2.1.jre8.jar**
   Located : [your extracted folder] /sqljdbc_9.2/enu/
:::


For more details on the list of suppported database versions for integration in applications, please refer this [link](https://www.wavemaker.com/learn/app-development/services/database-services/database-services#supported-databases-and-versions).
