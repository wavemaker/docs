---
title: "Connect To Azure SQL Server"
id: "connect-azure-sql-server"
---

- import/connect to SQL Server running in Azure Cloud, you need to have the database driver jar named sqljdbc4.jar available with you. [in download](/learn/app-development/services/database-services/download-jdbc-driver-jar/)
- to Azure Account with permission to edit the firewall rules.
- Server running in Azure with database that you want to import.

## in Azure Integration

1. [to Azure SQL Server by uploading the jar and configuring the connection settings](#instructions)
2. [the WaveMaker connection settings with SQL Server settings](#mapping)
3. [Firewall to access SQL Server](#firewall)

1. /Open the project in which you want to import the SQL Server database.
2. the [Database](http://[supsystic-show-popup id=106]) dialog, select SQL Server database.
3. Database Versions as Azure SQL Database and provide sqljdbc4.jar file as Driver jar and click on upload button. After the JAR imported successfully, click on Next. [![](../assets/azure_dbdriver.png)](../assets/azure_dbdriver.png)
4. Azure SQL server details such as Host, User Name, Password and Database Name, Schema Filter (comma-separated list of schema names to import) in the configure settings step and click on ADVANCED SETTINGS button to review the generated connection url. Note: The mappings between the Azure MS SQL Server and WaveMaker are given in the [section](#mapping) [![](../assets/azure_dbsettings.png)](../assets/azure_dbsettings.png)
5. connection has been successfully established you will be provided with a connection success message and Next button will be enabled. In case you get an error message, check the Firewall settings at Azure as [here](#firewall)
6. on next button to view tables in the database
7. tables and click on import button.

Your Database is imported and ready to use in the application.

## settings Mappings

(NOTE: The screenshots from Azure were current at the time of creation of this document. The actual images might differ)

1. to Azure Dashboard
2. to Microsoft Azure -> SQL databases -> [![](../assets/azure_dbmap1.png)](../assets/azure_dbmap1.png)
3. on show database connection strings [![](../assets/azure_dbmap2.png)](../assets/azure_dbmap2.png)
4. Server name maps to the Host and JDBC link maps to the connection URL in the configuration settings dialog [![](../assets/azure_dbmap3.png)](../assets/azure_dbmap3.png)

## Firewall to access SQL Server

1. Testing Connection with MS SQL Server, it may fail to connect as the firewall does not allow incoming connections from WaveMaker by displaying the message as shown below. [![](../assets/azure_firewall.png)](../assets/azure_firewall.png)
2. the error message, you can **the IP of WaveMaker** and enable firewall for that IP. : This IP address is common to _WaveMakeronline_ users and as such any WaveMakerOnline user will be able to access your server once you enable firewall for the IP. You are strongly advised to take appropriate measures to protect your server.
3. set up firewall in Azure SQL navigate to _Servers-> <your-database-server> -> settings -> firewall settings_
4. _name_, _IP (the IP of WaveMaker, obtained from the error message)_ and _IP (the IP of WaveMaker, obtained from the error message)_ and save [![](../assets/azure_firewall1.png)](../assets/azure_firewall1.png)
