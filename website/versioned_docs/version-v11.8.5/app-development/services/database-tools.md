---
title: "Database Tools"
id: "database-tools"
---
Learn what database tools you can use to work with database services in WaveMaker. 

---
WaveMaker provides database tools to connect to your development and deployment database servers in the cloud. You can execute scripts and run the commands supported by the database server. To access the database tools, click on DB Tools located at the bottom of your project workspace, when in the Databases Resource page.

[![](/learn/assets/db_tools.png)](/learn/assets/db_tools.png)

## DB Shell

DB Shell is one of the database tools which simplify the management of your development and deployment databases. DB Shell is a command-line interface to execute DDL (Data Definition Language) and DML (Data Modification Language) commands supported by the database server.

:::note
DB Shell can be used only for the database hosted on Cloud supporting MariaDB ver 10.2.
:::

Upon clicking DB Tools from Databases Resource page, you will be shown the DB Shell- MariaDB Cloud tab which connects to the development database server and displays a command-line interface to execute database commands.

[![](/learn/assets/dbtools_shell.png)](/learn/assets/dbtools_shell.png)

## DB Scripts

WaveMaker also makes it simple to execute SQL scripts on your database servers. 

1. From the **DB Tools** dialog, click the **Script** tab. 
2. You can either **Import** or **Export** DB. 

:::note
Script execution does not work on IE9 browsers
:::

[![](/learn/assets/dbtools_script.png)](/learn/assets/dbtools_script.png)

## Import Database

Import Database can be used to import an external data source into the WaveMaker and work with it. A data source will be replicated within WaveMaker. Importing an existing database will result in overwriting of the WaveMaker copy with the original data source, i.e. any changes made to the database within WaveMaker will be lost. In order to retain the changes made within WaveMaker, an export is essential.

:::note
Note that once you run the script, you need to physically Import the Database from the **Databases Resource + icon** or use the link from the success screen. 
:::

### Things to be aware of
Key things to note while importing databases include:

- WaveMaker supports major SQL data types. In case the imported database uses any other data type, those will be converted to the closest matching data type.
- Sequence-generated primary key columns will not be mapped during database import. It will be converted to assigned generator type. To retain the original sequence-generation, you need to manually change the generator type to sequence; give a generator name, save and re-import the database.
- The configuration fields should be entered based on the type of database used.

## Script Execution 

Click on the **Import** tab and use the following steps to execute a script:

1. Select the database server on which the script needs to be executed by selecting from the options in the **Host** field. Currently, the only server option is _MariaDB Cloud_ database server.
2. Enter the **Database Name**.   

:::note
A database with this name must exist in the selected database server. You can create one using the DB Shell if the database doesn't exist.
:::

3. Click **Choose File** to locate and upload the script file to be executed. Make sure you choose a valid script file.
4. Click on the **Execute** button. After the script executes, the status of the script execution is displayed.
5. Once you have executed the script, the database is ready for import. Import the Database from the **Databases Resource + icon** or use the link from the success screen.

## Export Database

Export Database can be used to export the database within WaveMaker to an external data source. Click on the **Export** tab and use the following steps to execute a script:

1. Select the database server on which the script needs to be executed by selecting from the options in the **Host** field. Currently, the only server option is _MariaDB Cloud_ database server.
2. Enter the **Database Name**. Select from the list provided.
3. Select **Schema Only** to export the Schema without data. To get the data and schema – do not check Schema only option – click GET Data Dump will get the schema and data.
4. Click on the **Get Data Dump** button. After the script executes, the status of the script execution is displayed.

