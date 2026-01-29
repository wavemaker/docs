---
title: "Customising Data Table Row Action"
id: "data-table-actions"
last_update: { author: "WaveMaker" }
---
**Scenario**: Click of a button in a Data Table row should display a message

- We will add a Row Action in a Data Table to display an alert message on click.
- The Action will be a JS function as shown below. Here we have written a function to display an alert dialog. **The name of the function is the action field entry in the custom button created.**
    
    ```javascript
    Page.EmployeeTable1_customRowAction = function($event, row) {
        alert('hello');
    };
    ```
    

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vSQ42MhJM2k-T1w_HxfHAyJ8ox_WrY8QOGnmq45R5L5JyI7iH0xI5jwX4HZOZJj8zZMEP0TDklz_yWY/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

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
