---
title: "How to Configure Row Expansion in a Data Table"
id: "how-to-configure-row-expansion-in-a-data-table"
---

In this article, you will learn how to configure row expansion on a data table. To use the [row expansion](/learn/app-development/widgets/datalive/datatable/row-expansion-data-table/) feature, you create a [data table](/learn/app-development/widgets/datalive/data-table/) and a [partial](/learn/app-development/ui-design/page-concepts/partial-pages/); you configure the partial to contain related information of the table item. A partial is a semi page which is a reusable object, and a data table is a data widget configured as a variable. You add page params in the partial page and bind it through the data table settings.

### _Use Case_

_Create a department page and display employees of each department when you expand the department ID._

**Note**: In the following example, we use the department table which invokes the data from the Employee table. Thus, ensure the hrdb sample database is up. To import the sample database, see [Connecting to a Database](/learn/app-development/services/database-services/working-with-databases/).

## Creating a page

- Create a Page called Department. To create a page, see [Page Creation](/learn/app-development/ui-design/page-creation/).
- Drag and Drop a Data Table on the Department page.
- Configure the Data Table to bind the data source to the **Department** table.
    - Retrieve Data From → Services.
    - Select a service type → All.
    - Select a service → hrdb.
    - Table/Entity → Department → A variable will be created automatically, for example, HrdbDepartmentData.
    - Set Records per request, Update data on input change, Request data on page load, and click **Next**.  

  [![](/learn/assets/DataTableConfig.png)](/learn/assets/DataTableConfig.png)

- In the next window, choose **ReadOnly** function, and select **Simple View Only**.
- Choose pagination; for example, basic.
- Click next, and **Done**.

You created a department page which displays the department table. Next, you create a Partial to contain employee details. You use a List Widget and configure the List to bind with employee table.

## Creating a partial

- Create a partial called Employees.
    - Click **+** from the **Pages **tab.
    - Create a → Partial (select from the dropdown, the default is a page).
    - Name the partial; for example, Employee.
    - Choose a category → All.
    - Use blank template, and click **Create**. A partial is created.
- Set the Page Params for the partial to bind the Department table.
    - Name → deptID.
    - Type → integer.
    - Save.

[![](/learn/assets/PageParam-Partial.png)](/learn/assets/PageParam-Partial.png)

- In the partial, drag and drop the **List **Widget.  
- Configure the List widget to bind the data source to the **Employee **table.
    - Retrieve Data From → Services.
    - Select a service type → All.
    - Select a service → hrdb.
    - Table/Entity → Employee  → A variable will be created automatically, for example, HrdbEmployeeData.
    - Set Records per request,  check **Update data on input change**, and uncheck **Request data on page load**, and click **Next**.
- In the next window, choose an appropriate template type; for example, Contact List, and click **Next**.
- Choose pagination, for example, basic.
- In the next window, bind the data source for the picture widget and name widget.
    - Picture Widget → Source → picurl (select from the dropdown).
    - Name Widget → Source → username (select from the dropdown)
    - Click **Done**.

[![](/learn/assets/List-configuration.png)](/learn/assets/List-configuration.png)

You created a partial which contains employee information and page params.

Now, set filter criteria in the variables for _HrdbEmployeeData_ to _deptId_ **Is equal to** _bind.pageParams.deptID, _as shown in the image below:

[![](/learn/assets/employeeparambindingdeptid.png)](/learn/assets/employeeparambindingdeptid.png)In the department page, you bind the Employee (partial) and Page Params and set the row expansion property.

## Configure row expansion property

- In the department page, go to Advanced Settings.
- Navigate to the Row Detail tab.
- Enable Row Expansion property.

[![](/learn/assets/RowExpAdvancedSettings.png)](/learn/assets/RowExpAdvancedSettings.png)

- Content → Employee.
- Partial Params → deptID → click on the **Bind Property** icon.
- Go to the Widgets tab → DepartmentTable → selecteditem → deptid _integer _**→ **click **Bind.**

deptID fills with: bind:Widgets.DepartmentTable1.selecteditem.deptId

   [![](/learn/assets/Bind_tablerow_value_RowExp.png)](/learn/assets/Bind_tablerow_value_RowExp.png)

1. - Click **Save**.  

You implemented the row expansion feature on the Department page. By expanding the department ID, you can view the employees associated with the department you expand. You can view the changes in the preview mode.
