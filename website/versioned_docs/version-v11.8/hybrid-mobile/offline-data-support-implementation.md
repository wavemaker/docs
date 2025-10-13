---
title: "Offline Data Support - Implementation"
id: "offline-data-support-implementation"
sidebar_label: "Implementation"
---
---
WaveMaker is providing **offline data support** as an out-of-the-box feature so that developers can enable offline support to existing components. For more information, see [Offline Data Support Overview](/learn/hybrid-mobile/offline-data-support/).

In this document, learn how to implement the offline data support feature for your mobile app.

## Enabling Offline Mechanism

To [recap](/learn/hybrid-mobile/offline-data-support/), the basic working of offline mechanism involves:

1. Fetching data and saving it on the device for offline usage.
2. When mobile goes offline, use the saved data.
3. Record any changes made by the user while offline.
4. Push the data changes to the server, when the mobile app goes online.

Let us see how it is done within a WaveMaker app.

### Database Configuration

The offline mechanism has to be enabled for the tables you want to work on offline along with related tables in a database. This ensures that synchronization is successful. Follow the steps for these same:

1. Open database designer by clicking the Databases Resource.
2. Select the database (in case your app is dealing with multiple databases)
3. Select the ‘Offline’ tab.
4. You can enable all the tables for offline use or select individual tables.
5. If a table has to be available in offline, select the table and then check the flag ‘**Enable Table for offline use'.**
6. When selecting a dependent table, you will be prompted to enable offline mode for the parent table. [![](/learn/assets/offline_dbenable.png?v=12)](/learn/assets/offline_dbenable.png?v=12)
7. If offline enabled, four **Data Configuration** options are provided to the developer. They are:
    1. Bundle with installer (Read-only)
    2. Bundle with installer + on-demand sync (Read-Write)
    3. Sync data on-demand (Read-Write)
    4. Cache CRUD variable response (Read-only)
8. You can specify the operations that need to be allowed offline - Insert, Update and/or Delete. **Note** this option is not available for Read-only configurations.
9. **Bundle Configuration** (available for Bundle Data with installer configurations): At the time of creation of Cordova zip, data of a Bundled entity will be fetched from the database and added to the zip. Thus, as zip becomes installer through the build process, bundled data will be part of the installer (apk, ipa). When bundling data, all records that match the filter criteria will be fetched.
    - **Delta Field** is a timestamp column in the bundled table that records the time when the record is last modified. Data of bundled entity WILL NOT be fetched in pull operation except when Delta Field is present. In a pull operation for the bundled entity, only modified records are fetched using Delta Field. Along with Delta Field, Maximum Number of Records to be fetched, Page Size, and Order by Fields can be configured for the bundle table.
    - **Filter criteria** can be specified by using the filter section. In this section, when a column is added as part of filter criteria, options to choose operator based on column type are provided. As the data is bundled as a part of the package, the filter value has to be static like 0, ‘SALES’ etc.See Pull Configuration below for more details on the Filter and Delta options.
10. **Pull Configuration:** (available for on-demand Sync configurations): During pull operation, data that matches Filter or Query criteria and sorted in **Order By** criteria, will be fetched and stored in the offline database. By triggering a device variable with ‘DATA SYNC’ as service and ‘PULL’ as operation, a pull operation can be started.
    - **Delta Field**: Delta Field is a timestamp column in the offline-enabled table that records the time when the record is last modified. Given Delta Field, Filter criteria are further enhanced (internally by platform) to fetch only modified records from the pull. This greatly helps in pulling data faster as the number of records to pull are restricted. If an offline-enabled entity has Delta Field, then only modified data will be pulled. Otherwise, the entire offline-enabled entity will be pulled. For example, if there are 10 records matching the filter criteria, then all 10 will be pulled in the first pull for user1. Then say, 1 record matching the filter criteria is added by user2. In second pull for user1, 10 (initial) + 1 (delta or modified) records are fetched. To avoid the 10 records (that are not modified and already present in user1’s device) in second pull, DELTA field is used. Using this field, only the modified records are pulled and not all, in the above case for the second pull only 1 record is fetched as opposed to 11. _Modifications_ will be pulled only if the filter criteria that was applied in the last pull and filter criteria that are going to be applied in the current pull are same. Following table shows an example when only DELTA is pulled for Employees table.
        
    | **Pull No**. | **Filter Criteria** | **Data Pulled** |
    | --- | --- | --- |
    | 1 | where departmentId = 1 | FULL |
    | 2 | where departmentId = 1 | DELTA |
    | 3 | where departmentId = 1 | DELTA |
    | 4 | where departmentId = 2 | FULL |
    | 5 | where departmentId = 2 | DELTA |
        
    - **Maximum Number Of Records** (M): In a pull operation of a table, the maximum number of records to pull can be configured. Suppose, the Filter criteria match 1000 records, but M is specified as 100. Then, only 100 records that match the filter criteria are fetched. If M is specified as a non-positive number (ex: 0, -1), then all records that match the Filter criteria are pulled.
    - **Page Size** (P): If Filter criteria match 1,00,000 and M is specified as 0, then 100000 are fetched (see above). Due to performance reasons, 1,00,000 records cannot be loaded in a single call. So, data is loaded page-wise iteratively until all (1,00,000) records are fetched. If P is specified as 100, then data is fetched in 1,000 calls. NOTE: Make sure that page size value that is specified here is lesser than or equals to the page size value for the database in profiles.
    - **Order By**: Order by criteria plays an important role when the number of records that match the Filter criteria is greater than the Maximum number of records. For example, in the above example when 100 records are fetched as opposed to 1000 matched records, the 1000 records are sorted based on the Order By criteria and then the first 100 are fetched. During pull operation, Primary key field (ascending) is appended internally to the configured order by criteria. This is done to avoid random data being fetched. For example, Employee records are to be fetched in the order of their department. The order clause for the same is ‘order by department’. Platform attaches ‘employeeId’ (assume employeeId is the primary key in Employee Table) as ‘order by department, employeeId’.
    - **Filter**: A filter criteria can be specified by using the filter section. In this section, when a column is added as part of the filter criteria, options to choose operator based on column type are provided. You can specify a static value or bind a runtime value as the filter value (for bundle option only static values are allowed). For binding, only app-level variables are available.
    - **Query** (only for on-demand Sync configurations): Query will be helpful when the filter criteria cannot be expressed in the Filter section. For example, if one needs to fetch employees of department 1, then the HQL query to use is ‘FROM Employee WHERE Department = 1’. But, in query text field, specify only Department = 1. If both filter criteria and query are specified, the query is used.

1. Open database designer by clicking the Database Resource.
2. Select the ‘Offline’ tab.
3. The tables available offline are marked with an icon.
4. If a table has to be available in offline, select the table and then check the flag ‘**Enable data storage when device is offline'.**
5. When selecting a dependent table, you will be prompted to enable offline mode for the parent table. [![](/learn/assets/offline_dbenable_90.png)](/learn/assets/offline_dbenable_90.png)
6. If offline enabled, then the strategy must be chosen for pulling data. There are two options here:
    - **Synchronize data when online** - With this method, data will be pulled during app startup. To limit the number of rows available offline,  ‘_Filter Value_’ can be configured using the table located below the options. Be cautious, if no filter is used, then entire table data will be fetched (application level pagination).  Rows fetched will honor the application limit of maximum records per request. NOTE you will not be able to apply a filter to BLOB data type as these fields are available for upload only and not download.
    - **Bundle the data with the app** - With this method, data will be packaged with the installer. During runtime, a query for the data present in these tables will be answered using the bundled data (either offline or online). ‘Bundle the data’ is helpful only if the table has data that doesn’t change. If there is any change in data, a new version of the app has to be released.

### Variable Configuration

By default, three variables **networkInfo**, **datasyncPush** and **datasyncPull** are created when for any table offline is enabled. They are configured in such a way that whenever the user comes online, offline data changes (if any) are pushed automatically. Using these variables, custom workflows for data push can also be created. You can control the pull behavior through the **datasyncPull** variable's property:

- **Clear offline data before pull** - If checked, then the whole offline data (other than BUNDLED data) will be deleted before the pull. The default is true (i.e. checked). NOTE due to the size of the data, the BLOB type data will not be downloaded, users can upload files offline but not download.

[![](/learn/assets/offline_var.png?v=5)](/learn/assets/offline_var.png?v=5) These are device variables with target as datasync, which has the following three operations. To avail these operation, create a new Device Variable with datasync service and select the needed operation.

| **Operation** | **Behavior** | **Input Data** | **Events** | **Description** |
| --- | --- | --- | --- | --- |
| getOfflineChanges | none | none | On Success On Error | to fetch the changes made when the app was offline Return Values: {**'total'**: 0 **'pendingToSync'**: changeLogSet **'failedToSync'**: changeLogSet} |
| lastPullInfo | Spinner Context and Message - to be displayed while pull is in progress | none | On Success On Error | get the last pull info Return Values: {'**databases**' : [{ '**name**' : 'datbaseName', '**entities**': [{ '**entityName**': '**entityName**', '**pulledRecordCount**': 0 }], '**pulledRecordCount**' : 0 }], '**totalPulledRecordCount**' : 0, '**startTime**' : Date, '**endTime**' : Date} |
| lastPushInfo | Spinner Context and Message - to be displayed while pull is in progress | none | On Success On Error | get the last push info Return Values: {**'completedTaskCount'**: 0 **'endTime'**: 0 **'failedTaskCount'**: 0 **'startTime'**: 0 **'successfulTaskCount'**: 0 **'totalTaskCount'**: 0} |
| pull | Request data on page load - to pull the data when the page is loaded Clear offline data before pull - to delete the whole offline data (other than BUNDLED data) before the pull Spinner Context and Message - to be displayed while pull is in progress | none | On Success On Error On Progress On Before | get the data from the server Return Values: {**'completedTaskCount'**: 0 **'inProgress'**: 0 **'totalTaskCount'**: 0} |
| push | Spinner Context and Message - to be displayed while push is in progress | none | On Success On Error On Progress On Before | send the data to server Return Values: {**'completedTaskCount'**: 0 **'failedTaskCount'**: 0 **'inProgress'**: 0 **'successfulTaskCount'**: 0 **'totalTaskCount'**: 0} |
| exportDB (ver 9.3) | Spinner Context and Message to display during this operation | none | On Success On Error | Offline database is saved as zip in ‘Downloads’ folder in Android. In IOS, zip is stored into ‘Documents’ folder so that one can export from iPhone via iTunes. For the file to be visible in iTunes, File sharing needs to be enabled for the app in iOS preferences.
Location of the file is exposed as an outbound property on this variable. |
| importDB

(ver 9.3) | Spinner Context and Message to display during this operation | none | On Success On Error | Upon invocation, a file browser opens up to choose the zip file to import. |

### Plugin Configuration

The offline module requires ‘Offline DB’ and ‘Network’ plugin. Just make sure these are selected in the plugins list in android build dialog. [![](/learn/assets/offline_plugin.png)](/learn/assets/offline_plugin.png)

### Security Configuration

In offline, last logged-in user session will continue until the user logs out. No special configuration is needed for this.

## Support & Limitations

**What is supported**

1. All variables created from Database CRUD APIs and Select SQL query APIs involving the selected database entities.
2. File upload using file upload service.
3. All Picture widgets with _save for offline _property enabled.

**What is not supported**

1. Date fields in SQL.
2. SQL queries that are of type insert, update and delete.
3. HQL queries
4. DB2 Temporals
5. Web services (REST, SOAP)
6. When you load an entity with any relation, only its first level children are retrived.
7. Only single column primary key is supported.

## Use Cases

Case: A multi-user application for tracking personal tasks is to be created. Tasks created by a user are private to that user. This application has to work when the network is not available.

**Setup** The application with the specified functionality (except offline support) has been created.

1. Import the project into your WaveMaker studio. [todo_90](/learn/assets/ToDo_9_0.zip)
2. Import the attached database. [todo_dump](/learn/assets/ToDo_dump.zip)
3. Run the project.
4. Build an android app and check the application. There are two users _user1/password_, _user2/password_. User1 is having some tasks and user2 has no tasks.
5. Check the app in both online and offline. In offline, the application fails with error ‘server call failed’.

[![](/learn/assets/offline_ex1.png)](/learn/assets/offline_ex1.png)**Solution**

1. Open the app.
2. Open TODO database.
3. Make TODO table to be available in offline. Pull only tasks belongs to the logged-in user during app startup. Save the configuration. [![](/learn/assets/offline_ex2.png?v=5)](/learn/assets/offline_ex2.png?v=5)
4. Two variables, datasyncPush and networkInfo, are automatically created. With these variables in place, the app will push offline data changes whenever the mobile comes online.
5. Click on ‘Build For Android’.
6. Go to plugins section, make sure that ‘Network’ and ‘Offline DB’ are selected.
7. Build an app and run the application on a mobile.
8. Make sure that network is available and login to the app with user1.
9. Now close the app and turn off the network (to simulate offline).
10. user1 should be able to perform actions. That’s how offline capability can be configured to an app.
