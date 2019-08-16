---
title: "Blob Support for Queries and Procedures"
id: ""
---

- Database services generated for each table provides an additional API for downloading the blob  content for each blob column in the table.
- addition, when the default generated API’s are not enough, the application developer uses the queries /procedures to handle this data. In such cases, there should be an option to upload/download the blob content. Post 8.5 Release, the Database queries and procedures are supporting Blob parameter type.

## **   Use Cases for Blob**

-  for uploading the blob data as a Query param
-  blob content in query results (single or paginated results)
-  for uploading the blob data as Procedure Param
-  blob content as output param of a procedure

### **    Support for uploading the blob data as a Query param**

- new param type "Blob" is introduced in the 8.5 release. The blob type is enabled only for Insert and Update queries.
- can be multiple blob params for a single query. However, each blob supports single file uploading and not as a list.
- query instance with blob input, is as shown in the figure:

###      ![](../assets/blob.png)

- a blob param exists in a query, then the generated API for such query will be accepting Multipart data and POST method is used irrespective of query type.

### **   Return blob content in query results (single or paginated results)**

- query tested in design mode has resultant data with blob content; then the resultant grid is shown as file icon.
- blob content will only be returned for SELECT query.
-  Queries returning PAGINATED response containing Blob field's should provide identifier properties.
    - Identifier properties are required to uniquely identify the column in query result.
    - can select multiple columns of identifier property, but at least one column has to be selected.
    - saving the query a pop-up is shown with all non-blob fields for selecting identifier properties. When the user selects at least one Identifier, then only the SAVE button will be highlighted. (By default, user will be unable to click on SAVE button. Refer below figure)

![](../assets/save_query1.png)

- - properties are useful to retrieve the blob data for the particular row.
    - have to select unique columns, because if unique combination is not selected then in the run-time the blob content will not be retrieved.
    - API will be generated for each blob field that returns _Downloadable_ return type in addition to the executeQueryAPI.
- instance of generated API’s is as shown below. It consists of blob field named as and identifier property.![](../assets/GeneratedAPIs_Query.png)
-  actual response of the execute query’s blob field’s value contains the absolute URL to the  blob content. It will be null for the rows which does not have a value for that field.

**     Note:-**

-  properties not required for Queries returning SINGLE response.
-  queries are ​not​ supported if they contains blob fields in response.

### **  Support for uploading the blob data as Procedure Param **

- param types is now supporting the Blob data. A typical procedure with blob input is as shown below:

![](../assets/blob_for_procedure-1.png)

- param type of blob is IN in a procedure, then the generated API for such procedure will be accepted as multipart data.
-  blob field expected as Blob and remaining fields are expected as one Part with      content type application/json.
-  can be multiple blob inputs for procedures

### **   Return blob content as output param of a procedure**

-  returning more than one response field and simultaneously containing BLOB field are not supported. In other words, if blob exists in response, then no other fields should be returned.
-  response are supported only for OUT parameters. If blob field exists in Cursor data, then it gets ignored.
- procedure consists of BLOB field in OUT param, then the generated API will return response otherwise <procedureName>Response object.

**   Note:-**

-  query response containing blob columns are not supported.
-  response in CURSOR fields are ignored for procedures.
-  cannot have multiple responses, if one of the OUT Parameter contains  blob  type

4.3 Database Services

[Working with Databases ](/learn/app-development/services/db-services/#working-with-db)

[Database Service Architecture](#database-architecture)

[Supported Databases](#supported-databases)

[Integrating Database](#integrating-database)

[Database Actions](#database-actions)

[Data Modelling](/learn/services/db-services/data-modelling/)

[Database Access](/learn/app-development/services/database-access/)

[ORM Artifacts](/learn/app-development/services/db-services/orm-artifacts/)

[Blob Support for Queries and Procedures](/learn/app-development/services/database-services/blob-support-queries-procedures/)
