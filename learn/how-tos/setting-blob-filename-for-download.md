---
title: "How to Set the Filename for Downloading a Blob"
id: ""
sidebar_label: "Setting Blob Filename for Download"
---
---

Learn how to set the filename for downloading a blob in a Data Table widget with the same name as the uploaded file.

:::note
In this example, we have created a simple table to describe this use-case.
:::

## Add an Extra Column in the Table

1. Go to the table which contains the blob file.

2. Add an extra column in the table. For example, name the extra column as `filename`. This field stores the uploaded blob's filename.

3. Once the filename column is added into the database, save the table and go to the Data Table.

## Filename settings in the Data Table

4. Drag and drop data table with Inline Editable layout and in the table, column section and uncheck the filename column. This hides the column and would not display in the Data Table.

5. For data table widget "On Before Record Insert" and "On Before Record Update" event select javascript from the dropdown individually.

6. Now, go to the script tab of the page and for the above-created events add the script as below:

```js
if (row.<BlobFieldName>) {row.<filenameFieldName> = row.<BlobFieldName>.name;}
```

7 Now, go to the Advanced settings of the datatable widget and navigate to columns tab. In columns tab, select blobtype column and for "Value Expression" change the hyperlink property as below and add the `download="true"` property to it and save.

```js
hyperlink="bind:row.getProperty('<BlobFieldName>') + '?
filename='+row.getProperty('<filenameFieldName>')"
```

The completed-expression should look as shown below:

```js
<wm-anchor caption="" hyperlink="bind:row.getProperty('blobdata') + '?
filename='+row.getProperty('filename')" target="_blank" iconclass="wm-icon wm-icon24 
wi wi-file" class="col-md-9" download="true" show="bind:row.getProperty('blobdata')!= null">
</wm-anchor>
```

8. Now, preview the application and check the functionality.