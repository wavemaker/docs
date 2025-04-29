---
title: "Blob Support for Queries and Procedures"
id: "blob-support-queries-procedures"
sidebar_label: "Blob Queries and Procedures"
---
---

BLOB datatype being large in size and amorphous in nature need to be handled separately.

In WaveMaker, the Database services generated for each table provides an additional API for downloading the content for each BLOB column in the table and this support has been extended to Queries and Procedures post 8.5 release.

## Use Cases for BLOB

The following use cases are discussed in this section:

- Uploading BLOB data as a query parameter
- Handling BLOB content in query results
- Uploading the BLOB data as procedure parameter
- Handling BLOB content as output parameter of a procedure

## Limitations

- Procedures returning more than one response field and simultaneously containing BLOB field are not supported. In other words, if Blob exists in response, then no other fields should be returned.
- HQL queries with the response containing Blob columns are not supported.
- Blob response in CURSOR fields is ignored for procedures.

## Uploading the BLOB data as a query parameter

- A new param type "Blob" can be found in the Parameter section of the Query Editor.

:::note
This Blob type is enabled only for Insert and Update queries.
:::

- Each Blob type column supports single file upload, i.e. not as a list. However, there can be multiple Blob params for a single query. 

[![](/learn/assets/blob_query_param.png)](/learn/assets/blob_query_param.png)

- When a Blob parameter exists in a query, then the generated API for such query will accept Multipart data and POST method is used irrespective of query type.

## Handling Blob content in query results (single or paginated results)

- When query tested in design mode has resultant data with Blob content it is depicted as a file icon and the content is not visible or available for download.
- Queries returning a PAGINATED response containing Blob field should provide **Identifier** while saving the query
    - An identifier is required to uniquely identify the column in the query result.
    - You can select multiple columns as Identifier.

:::note 
You cannot save the query without Identifier. 
:::

[![](/learn/assets/blob_query_save.png)](/learn/assets/blob_query_save.png)

- Separate API will be generated for each Blob field with a _Downloadable_ return type in addition to the executeQueryAPI. The response of the execute query's Blob field's value will contain the absolute URL to the Blob content. It will be null for the rows which do not have a value for that field. 

[![](/learn/assets/blob_query_api.png)](/learn/assets/blob_query_api.png)

:::note
- Identifier is not required for Queries returning SINGLE response.
- HQL queries are  not  supported if they contain Blob fields in response.
:::

## Support for uploading the blob data as Procedure Param

- A typical procedure with Blob input is as shown below: 

[![](/learn/assets/blob_proc_param.png)](/learn/assets/blob_proc_param.png)

- When param type of Blob is IN in a procedure, then the generated API for such procedure will be accepted as multipart data and the remaining fields are expected as one part with the content type `application/json`. There can be multiple Blob inputs parameters.

## Handling Blob content as output param of a procedure

- Procedures returning more than one response field and simultaneously containing BLOB field are not supported. In other words, if Blob exists in response, then no other fields should be returned.
- Blob response is supported only for OUT parameters. If Blob field exists in Cursor data, then it is ignored.
- If procedure consists of BLOB field in OUT param, then the generated API will return _Downloadable_ response otherwise &lt;procedureName&gt; Response object.

