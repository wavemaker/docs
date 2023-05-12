---
title: "Connect To Azure SQL Server"
id: "connect-azure-sql-server"
---

## Prerequisites

- To import/connect to SQL Server running in Azure Cloud, you need to have the database driver jar named sqljdbc4.jar available with you. [Steps in download](/learn/app-development/services/database-services/download-jdbc-driver-jar/)
- Access to Azure Account with permission to edit the firewall rules.
- SQL Server running in Azure with database that you want to import.

## Steps in Azure Integration

- [Prerequisites](#prerequisites)
- [Steps in Azure Integration](#steps-in-azure-integration)
- [Instructions](#instructions)
- [Connection settings Mappings](#connection-settings-mappings)
- [Enable Firewall to access SQL Server](#enable-firewall-to-access-sql-server)

## Instructions

1. Create/Open the project in which you want to import the SQL Server database.
2. From the [Add Database](/learn/app-development/services/database-services/working-with-databases/) dialog, select SQL Server database.
3. Select Database Versions as Azure SQL Database and provide sqljdbc4.jar file as Driver jar and click on upload button. After the JAR imported successfully, click on Next. [![](/learn/assets/azure_dbdriver.png)](/learn/assets/azure_dbdriver.png)
4. Provide Azure SQL server details such as Host, User Name, Password and Database Name, Schema Filter (comma-separated list of schema names to import) in the configure settings step and click on ADVANCED SETTINGS button to review the generated connection url. Note: The mappings between the Azure MS SQL Server and WaveMaker are given in the [next section](#mapping). [![](/learn/assets/azure_dbsettings.png)](/learn/assets/azure_dbsettings.png)
5. Once connection has been successfully established you will be provided with a connection success message and Next button will be enabled. In case you get an error message, check the Firewall settings at Azure as [explained here](#firewall).
6. Click on next button to view tables in the database
7. Select tables and click on import button.

Your Database is imported and ready to use in the application.

## Connection settings Mappings

(NOTE: The screenshots from Azure were current at the time of creation of this document. The actual images might differ)

1. Login to Azure Dashboard
2. Navigate to Microsoft Azure -> SQL databases -> [![](/learn/assets/azure_dbmap1.png)](/learn/assets/azure_dbmap1.png)
3. Click on show database connection strings [![](/learn/assets/azure_dbmap2.png)](/learn/assets/azure_dbmap2.png)
4. The Server name maps to the Host and JDBC link maps to the connection URL in the configuration settings dialog [![](/learn/assets/azure_dbmap3.png)](/learn/assets/azure_dbmap3.png)

## Enable Firewall to access SQL Server

1. While Testing Connection with MS SQL Server, it may fail to connect as the firewall does not allow incoming connections from WaveMaker by displaying the message as shown below. [![](/learn/assets/azure_firewall.png)](/learn/assets/azure_firewall.png)
2. From the error message, you can **extract the IP of WaveMaker** and enable firewall for that IP. **Beware**: This IP address is common to _all WaveMakeronline_ users and as such any WaveMakerOnline user will be able to access your server once you enable firewall for the IP. You are strongly advised to take appropriate measures to protect your server.
3. To set up firewall in Azure SQL navigate to _Sql Servers-> &lt;your-database-server&gt; -> settings -> firewall settings_
4. Add _Rule name_, _Start IP (the IP of WaveMaker, obtained from the error message)_ and _End IP (the IP of WaveMaker, obtained from the error message)_ and save [![](/learn/assets/azure_firewall1.png)](/learn/assets/azure_firewall1.png)
