---
title: "Configuring edit/update functionality for the datatable that is bound to Query API"
id: ""
sidebar_label: "Edit functionality for the datatable that is bound to Query API"
---
---

When the datatable widget is bound to the query API, by default we do not support edit/update operation. But you can achive this by customizing the edit/update funtionality using this approach.

:::note
In this example, we are using Employee table of the HRDB sample database.
:::

1. Go to the database design and create a query to get the employee data as per your requirement.

2. Create a Database API variable by selecting API Type as Query APIs and selecting the execute query that is created in step1.
[![Query-variable-creation](/learn/assets/query-variable-creation.png)](/learn/assets/query-variable-creation.png)

3. Drag and drop the datatable widget by binding the above created variable.

4. Go to the advanced settings of the datatable widget and navigate to actions tab and check edit action.
[![check edit action in datatable](/learn/assets/edit-action-check.png)](/learn/assets/edit-action-check.png)

5. Click on the datatable and navigate to the events tab in the properties panel and for "On Record Update" event select javascript from the dropdown.
[![onrecordupdate event](/learn/assets/onrecordupdate-event.png)](/learn/assets/onrecordupdate-event.png)

6. Go to the script tab of the page and write the custom code to update the record in the "On Record Update" method created. 

7. Create a update variable for the Employee table to update the records.

:::note
Below is the example code to update the record.
:::

```js
Page.executeGetempdataTable1Rowupdate = function($event, widget, row) {
    // row data is the newly edited data
    // UpdateEmployeeData is the update variable of the employee table
    var lv = Page.Variables.UpdateEmployeeData;
    lv.updateRecord({
        row: {
            "empId": row.empId,
            "firstname": row.firstname,
            "lastname": row.lastname,
            "username": row.username
        }
    }, function(data) {
        // to remove the edit mode of the datatable widget after the edit action is performed. 
        widget.hideEditRow();
    });
};

```

In this way, you will need to cutomize the update action of the datatable bound to the query variable.
