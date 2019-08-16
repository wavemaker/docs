---
title: "Dynamic Data Tables"
id: ""
---

Dynamic Data Tables can be created in the following ways:

1. **service** output bound to a Data Table where the columns' metadata i.e., number of columns, its types and names etc. change depending on a specific condition
2. being returned from **services** is bound to a single grid based on conditions/events

## Dynamic Data Table using Single Service

The dynamic metadata from a single service can be displayed in the Data Table using “The Columns are dynamic” option and checking the “Update Data on Input Change” behavior in the respective variable at the time of Data Table configuration For example, an API may be returning dynamic data at runtime, hence, you will need to [a API based variable](http://[supsystic-show-popup id=105]) for the above API service and choose the option “The columns are dynamic” for the Data Table widget. [here for more details](/learn/app-development/variables/database-apis/)

## Dynamic Data Table using Multiple Services

Here we will see how to create a dynamic grid based on the metadata returned from multiple services. To illustrate the dynamic Data Table implementation, we have taken an example to switch the table data between the sample hrdb’s USER and DEPARTMENT datasets on a button click event. [here to Import the Sample DB](http://[supsystic-show-popup id=106])

1. two [](http://[supsystic-show-popup id=117])\- one to retrieve the data from the DEPARTMENT entity and other to retrieve the data from USER entity. : We have written simple SELECT statements as part of this example. However, you can create queries as per your requirement.
    1. :
        
         \* from DEPARTMENT
        
    2. :
        
         \* from USER
        
2. [a Database API variables](http://[supsystic-show-popup id=105]) for the queries created above. Call them, say DeptData and UserData : Make sure you have checked the **Data on Page Load** option for the variables created above. [![](../assets/dynamic_grid1.png)](../assets/dynamic_grid1.png)
3. and drop two widgets onto the canvas. Set the property as _Department Data_ and _User Data_
4. and drop a **Table** widget on the canvas. While configuring the Data Table, select the option “ _columns are dynamic_”. Also, please note that we have chosen the UserData as the Source Variable. Thus User data will be displayed initially. You can configure it to any variable of your choice. [![](../assets/dynamic_grid2.png)](../assets/dynamic_grid2.png)
5. the Data Table to “SVGrid” or any other valid name as per your scenario (this name is used in the JavaScript code later). [![](../assets/dynamic_grid3.png)](../assets/dynamic_grid3.png)
6. the buttons placed on the canvas, navigate to the Events tab from the properties panel and choose JavaScript as operation for the **Click** event.
7. is an example code snippet to change the grid dataset’s dynamically at runtime.
    
    1Click = function ($event, widget) {
        Page.Widgets.SVGrid.dataset = Page.Variables.DeptData.dataSet;
    };
    
    Page.button2Click = function ($event, widget) {
        Page.Widgets.SVGrid.dataset = Page.Variables.UserData.dataset;
    };
    
    [![](../assets/dynamic_grid4.png)](../assets/dynamic_grid4.png)

Using the above implementation steps, you will be able to successfully change the Data Table at runtime using multiple services.

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
