---
title: "How to Configure Row Expansion in a Data Table"
date: "2019-04-12"
---

this article, you will learn how to configure row expansion on a data table. To use the  [expansion](/learn/app-development/widgets/datalive/datatable/row-expansion-data-table/) feature, you create a  [table](/learn/app-development/widgets/datalive/data-table/) and a [](/learn/app-development/ui-design/page-concepts/partial-pages/); you configure the partial to contain related information of the table item. A partial is a semi page which is a reusable object, and a data table is a data widget configured as a variable. You add page params in the partial page and bind it through the data table settings.

### _Case_

_a department page and display employees of each department when you expand the department ID._

: In the following example, we use the department table which invokes the data from the Employee table. Thus, ensure the hrdb sample database is up. To import the sample database, see  [to a Database](/learn/app-development/services/database-services/working-with-databases/)

## a page

- a Page called Department. To create a page, see  [Creation](/learn/app-development/ui-design/page-creation/)
- and Drop a Data Table on the Department page.
- the Data Table to bind the data source to the  table.
    - Data From → Services.
    - a service type → All.
    - a service → hrdb.
    - /Entity → Department → A variable will be created automatically, for example, HrdbDepartmentData.
    - Records per request, Update data on input change, Request data on page load, and click  

  [![](https://www.wavemaker.com../assets/DataTableConfig.png)](https://www.wavemaker.com../assets/DataTableConfig.png)

- the next window, choose  function, and select  **View Only**
- pagination; for example, basic.
- next, and 

created a department page which displays the department table. Next, you create a Partial to contain employee details. You use a List Widget and configure the List to bind with employee table.

## a partial

- a partial called Employees.
    - **+** from the 
    - a → Partial (select from the dropdown, the default is a page).
    - the partial; for example, Employee.
    - a category → All.
    - blank template, and click  A partial is created.
- the Page Params for the partial to bind the Department table.
    - → deptID.
    - → integer.
    

[![](https://www.wavemaker.com../assets/PageParam-Partial.png)](https://www.wavemaker.com../assets/PageParam-Partial.png)

- the partial, drag and drop the  
- the List widget to bind the data source to the 
    - Data From → Services.
    - a service type → All.
    - a service → hrdb.
    - /Entity → Employee  → A variable will be created automatically, for example, HrdbEmployeeData.
    - Records per request,  check  **data on input change**, and uncheck  **data on page load**, and click 
- the next window, choose an appropriate template type; for example, Contact List, and click 
- pagination, for example, basic.
- the next window, bind the data source for the picture widget and name widget.
    - Widget → Source → picurl (select from the dropdown).
    - Widget → Source → username (select from the dropdown)
    

[![](https://www.wavemaker.com../assets/List-configuration.png)](https://www.wavemaker.com../assets/List-configuration.png)

created a partial which contains employee information and page params.

, set filter criteria in the variables for  to   **equal to** _, _ shown in the image below:

 [![](https://www.wavemaker.com../assets/employeeparambindingdeptid.png)](https://www.wavemaker.com../assets/employeeparambindingdeptid.png) the department page, you bind the Employee (partial) and Page Params and set the row expansion property.

## row expansion property

- the department page, go to Advanced Settings.
- to the Row Detail tab.
- Row Expansion property.

[![](https://www.wavemaker.com../assets/RowExpAdvancedSettings.png)](https://www.wavemaker.com../assets/RowExpAdvancedSettings.png)

- → Employee.
- Params → deptID → click on the  **Property** icon.
- to the Widgets tab → DepartmentTable → selecteditem → deptid **→ **

fills with: :Widgets.DepartmentTable1.selecteditem.deptId

   [![](https://www.wavemaker.com../assets/Bind_tablerow_value_RowExp.png)](https://www.wavemaker.com../assets/Bind_tablerow_value_RowExp.png)

implemented the row expansion feature on the Department page. By expanding the department ID, you can view the employees associated with the department you expand. You can view the changes in the preview mode.
