---
title: "Export Data from Data Table"
id: "export-data-data-table-2"
sidebar_label: "Export Data from Data Table - 2"
---

##### 9.4 release

**Scenario**: To export data from a Data Table to excel or CSV format. We will be using the Export option of Data Table to export data from a Database CRUD Variable.

**Features specific to rel 9.4**

- Earlier the entire contents of the underlying database table were being exported, post rel 9.4, only the contents displayed in the Data Table will be exported.
- Also, for each column selected for display, columns can be customized either by
    - column selection can be done from the Advanced Settings, column show/hide checkbox,
    - configuring the **Export Options** using Value Expressions from the Advanced Settings of the Data Table (NOTE: Value Expression **has** to be set for custom fields), or
    - writing JavaScript code for the **on Before Export** callback event for the Data Table.
- These features are available ONLY for Data Table bound to a Database CRUD variable, Live Filter result, or Query API Variable.

## Prerequisites

1. A WaveMaker Web Application, with a database imported (we are using the sample HR Database).
2. A page with Data Table bound to a Database CRUD variable, here we are using the Employee table from the sample hrdb.

## Steps

1. Open the **Advanced Settings** of the Data Table.
2. From the Data Table tab, scroll down to locate **Export Format** option and select required format. 
[![](/learn/assets/dt_export.png)](/learn/assets/dt_export.png)
3. **Export Data Size** property can be used to specify the number of records to be exported.  By default, the value is set to 100, the maximum export size. To export more than 100 records, the max size in the [profile](http:/#ppsShowPopUp_109) needs to be changed from the Project Configurations menu of [Project Workspace](http:/#ppsShowPopUp_107).
4. Navigate to Columns tab and note that for each column **Export Options** tab is visible. Use this to customize the data to be exported. NOTE: If you have any custom columns, value expression has to be given here, else the export will fail. 
[![](/learn/assets/dt_cols_export.png)](/learn/assets/dt_cols_export.png)
5. Save and close the Advanced Settings.
6. You can further customize the data being exported using the **on Before Export** callback event of the Data Table. 
[![](/learn/assets/dt_export_event.png)](/learn/assets/dt_export_event.png)
7. You can use the following script:

```js
Page.EmployeeTable1Beforeexport = function($data) {

    // Change Export Type
    $data.exportType = 'CSV';

    //Changing the export size
    $data.size = 5;

    //Apply Sorting on fields
    $data.orderBy = "empId desc";

    //updating the header
        $data.columns.firstname.header = ‘Fullname’;

    //updating first name expression
    $data.columns.firstname.expression = firstname + ' ' +lastname;

    //adding new column 
    $data.columns.username = {
        header: ‘Username’,
        expression: firstname + '.' + lastname
    }

    //Deleting the existing column during Export
    delete $data.columns.firstname;
};
```

[Data Table Use Cases](/learn/app-development/widgets/datalive/datatable/data-table-use-cases/)

- [1. Basic Table Usage](/learn/app-development/widgets/datalive/datatable/data-table-basic-usage/)
- [2. How to customise table actions](/learn/how-tos/data-table-actions/)
- [3. How to represent data table columns using widgets](/learn/how-tos/data-table-widget-representations/)
- [4. How to format data table column](/learn/how-tos/data-table-format-options/)
- [5. How to apply styles (generic and conditional) to data table](/learn/how-tos/data-table-styling/)
- [6. How to view master-detail record using a data table](/learn/how-tos/view-master-detail-data-records-using-data-table/)
- [7. How to add master-detail record using a data table](/learn/how-tos/add-master-detail-records-using-data-table/)
- [8. How to export data using a data table](/learn/how-tos/export-data-data-table/)
- [9. How to create a dynamic data table](/learn/how-tos/dynamic-data-tables/)
- [10. How to bind column of a data table to query variable](/learn/how-tos/data-table-column-bound-query/)
