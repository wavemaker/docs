---
title: "How to Set Name of Blob Type Downloaded from Data Table"
id: "setting-blob-filename"
sidebar_label: "Setting Blob Filename"
---
---

Learn how to set the name for a blob type when downloading it from a Data Table to have the same name when the blob was uploaded.

:::note
In this example, we have created a simple table to describe this use-case.
:::

## Insert New Column in the Table

1. Go to the table which contains the blob file.

2. Add a new column in the table. For example, name the new column as `filename` with a `string` data type. This field stores the uploaded blob's filename.

3. Once the filename column is added into the database, save the table and go to the Data Table page.

## Configure the New Column Properties

:::note
You can use an existing Data Table which contains the blob, or drag and drop a new table on the canvas. In this example, we are creating a new Data Table with an **Inline Editable** layout.
:::

- When you create a Data Table, uncheck the column as below. By doing this, the new `filename` column hides and it would not display in the Data Table.

![uncheck filename column](/learn/assets/uncheck-filename-blob-download.png)

- Or, when you are using an existing Data Table, click the table, go to the **Advanced Settings** of the Data Table and go to the **Columns** section. Uncheck the Blob filename column as shown in the image below.

![hide data table column](/learn/assets/datatable-hide-column.png)

## Configure Events

:::note
Blob file is named as `Profile`.
The newly added column is named as `filename`.
:::

1. Go to the Data Table Events' tab and locate the `On Before Record Insert` event and select `Javascript` from the dropdown. Similarly, go to the `On Before Record Update` event and select `Javascript` from the dropdown.

2. After this, go to the script tab of the page for the events `On Before Record Insert` and `On Before Record Update` and add the following script.

```js
if (row.<BlobFieldName>) {
    row.<blobfilenameFieldName> = row.<BlobFieldName>.name;
    }
```

For example:

```js
Page.UserDetailsTable1Beforerowinsert = function($event, widget, row, options) {
    if (row.profile) {
        row.filename = row.profile.name;
    }
};
```

## Set Blob and Download Properties

1. Now, go to the **Advanced settings** of the Data Table widget and navigate to the **Columns** tab. 
2. In the columns tab, select the **Blob** type column. For example, the `Profile` column.
3. Go to the **Value Expression** property for the blob column and change the `hyperlink` property as shown below.

```js
hyperlink="bind:row.getProperty('<BlobFieldName>') + '?
filename='+row.getProperty('<filenameFieldName>')"
```

4. In the same expression, add the `download="true"` property to it, and click **Save**.

The entire expression for the **Value Expression** property would look as shown below.

```js
<wm-anchor caption="" hyperlink="bind:row.getProperty('profile') + '?
filename='+row.getProperty('filename')" target="_blank" iconclass="wm-icon wm-icon24 
wi wi-file" class="col-md-9" download="true" show="bind:row.getProperty('blobdata')!= null">
</wm-anchor>
```

Preview the application and check the functionality. With this, when downloading a blob from a Data Table will have the same name when the file was uploaded.