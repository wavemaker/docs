---
title: "Customising Data Table Row Action"
id: ""
---

: Click of a button in a Data Table row should display a message

- will add a Row Action in a Data Table to display an alert message on click.
- Action will be a JS function as shown below. Here we have written a function to display an alert dialog. **name of the function is the action field entry in the custom button created.**
    
    1\_customRowAction = function($event, row) {
        alert('hello');
    };
    

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vSQ42MhJM2k-T1w_HxfHAyJ8ox_WrY8QOGnmq45R5L5JyI7iH0xI5jwX4HZOZJj8zZMEP0TDklz_yWY/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

[Table Use Cases](/learn/app-development/widgets/datalive/datatable/data-table-use-cases/)

- [1\. Basic Table Usage](/learn/app-development/widgets/datalive/datatable/data-table-basic-usage/)
- [2\. How to customise table actions](/learn/how-tos/data-table-actions/)
- [3\. How to represent data table columns using widgets](/learn/how-tos/data-table-widget-representations/)
- [4\. How to format data table column](/learn/how-tos/data-table-format/)
- [5\. How to apply styles (generic and conditional) to data table](/learn/how-tos/data-table-styling/)
- [6\. How to view master-detail record using a data table](/learn/how-tos/view-master-detail-data-records-using-data-table/)
- [7\. How to add master-detail record using a data table](/learn/how-tos/add-master-detail-records-using-data-table/)
- [8\. How to export data using a data table](/learn/how-tos/export-data-data-table/)
- [9\. How to create a dynamic data table](/learn/how-tos/dynamic-data-tables/)
- [10\. How to bind column of a data table to query variable](/learn/how-tos/data-table-column-bound-query/)
