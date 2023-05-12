---
title: "Data Table Column bound to Query"
id: "data-table-column-bound-query"
---

# Scenario

Data Table is build using a single table from an imported Database. You might want to enable user selection for one column of the Data Table from values of a query result.

This document shows how a column for the editable Data Table can be bound to output from a Query and enabling user selection from that list.

## Set up

1. WaveMaker app
2. Import a Database (for this example we are considering an HR database with Employee and User table)
3. Drag and drop Data Table (editable) using a table, say, Employee, as the data source.
4. Create a Query for retrieving Dept id from the User table.
5. Create a DB API variable for the above Query.

## Procedure

1. Open the Advanced Settings of the Data Table and navigate to the Columns tab.
2. Choose the required column and navigate to the Edit mode section.
3. Choose the widget type as select from the drop-down.
4. Set the Dataset is the variable that is created for the query service. Choose the data field and display field as per your requirement from the drop down.

[![](/learn/assets/DT_query.png)](/learn/assets/DT_query.png)

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
