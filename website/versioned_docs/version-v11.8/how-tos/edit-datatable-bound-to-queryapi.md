---
title: "Edit DataTable records bound to Query API"
id: "edit-datatable-bound-to-queryapi"
sidebar_label: "Edit DataTable records bound to Query API"
---
---

Typically when the Data Table widget is bound to a query API, the Edit and Update operations are not supported by default. However, you can still achieve this functionality by customizing the Edit and Update properties using the following approach.

:::note
In this example, we are using an Employee table from the `HRDB` sample database.
:::

### Create a Query

1. Go to the database design and create a [query](/learn/app-development/services/database-services/working-with-queries#query-creation) to get the employee details.

### Create a Database API Variable

2. To create a **Database API** variable, go to [Variables](/learn/app-development/variables/variables), select **New Variable** and click **Database APIs**.

3. Select the `HRDB` database from the dropdown and choose the **API Type** as **Query APIs**. **Select Query** *[the executed-query](#create-a-query)* from the dropdown. Name the variable and click **Done**.

[![Query-variable-creation](/learn/assets/query-variable-creation.png)](/learn/assets/query-variable-creation.png)

### Create a Data Table

4. Drag and drop the [Data Table](/learn/app-development/widgets/datalive/datatable/data-table-basic-usage#configure-data-table) widget and bind the [Database API variable](#create-a-database-api-variable) created above.

### Configure Actions

5. Go to the Data Table's Advanced Settings, navigate to the **Actions** tab, and check the **Edit** action.

[![check edit action in datatable](/learn/assets/edit-action-check.png)](/learn/assets/edit-action-check.png)

### Create a Database CRUD Variable

6. Create another variable for the Employee table to update the records. To create a **Database CRUD** variable, go to [Variables](/learn/app-development/variables/variables), select **New Variable** and click **Database CRUD**.

7. Select the `HRDB` database from the dropdown and choose the **Employee** table (in this case). And, set the operation as **Update** from the dropdown. Name the variable and click **Done**.

![update record database crud](/learn/assets/update-record-database-crud.png)

### Configuring Events

8. Ensure to click the Data Table and navigate to the Events tab from the Properties panel. Go to the **On Record Update** event, and select *Javascript* from the dropdown.

[![onrecordupdate event](/learn/assets/onrecordupdate-event.png)](/learn/assets/onrecordupdate-event.png)

9. Go to the **Script** tab of the page, and write the following script to update the record in the **On Record Update** method.

:::note
The following example code will update the record.
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

This way, you can customize the update action of the Data Table bound to the query variable.
