---
title: "Data Table Column bound to Query"
id: "data-table-column-bound-query"
last_update: { author: "WaveMaker" }
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

[![](./assets/img/DT_query.png)](./assets/img/DT_query.png)

[Data Table Use Cases](../../user-interfaces/web/components/angular-components/datalive/datatable/data-table-use-cases.md)

- [1. Basic Table Usage](../../user-interfaces/web/components/angular-components/datalive/datatable/data-table-basic-usage.md)
- [2. How to customise table actions](./data-table-actions.md)
- [3. How to represent data table columns using widgets](./data-table-widget-representations.md)
- [4. How to format data table column](./data-table-format-options.md)
- [5. How to apply styles (generic and conditional) to data table](./data-table-styling.md)
- [6. How to view master-detail record using a data table](./view-master-detail-data-records-using-data-table.md)
- [7. How to add master-detail record using a data table](./add-master-detail-records-using-data-table.md)
- [8. How to export data using a data table](./export-data-data-table.md)
- [9. How to create a dynamic data table](./dynamic-data-tables.md)
- [10. How to bind column of a data table to query variable](./data-table-column-bound-query.md)
