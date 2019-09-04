---
title: "How To: One-to-Many Relationship"
id: ""
---

## Parent-Child Relationship

Handling one-to-many relation scenarios is very easy within WaveMaker. Going with the example of sample database, we will see how to display Employee details for a selected Department. [![run](./assets/run-1024x576.png)](./assets/run.png)

1. [Import the Sample HRDB](/learn/jump-start/#db)
2. Drag and drop a [Data Table](/learn/data-table/)
    1. CREATE NEW Variable with **hrdb** as service and **Department** as the **Operation/Type** [![dt1_dept_data](./assets/dt1_dept_data.png)](./assets/dt1_dept_data.png)
    2. Select any **layout** of your choice, here we have selected _Read-only_ [![dt1_dept_layout](./assets/dt1_dept_layout.png)](./assets/dt1_dept_layout.png)
    3. Select the **Name**, **Deptid** and **Budget** [![dt1_dept_fields](./assets/dt1_dept_fields.png)](./assets/dt1_dept_fields.png)
3. Drag and drop another **Data Table** onto the canvas
    1. CREATE NEW Variable with **hrdb** as service and **Employee** as the **Operation/Type**
    2. Select any **layout** of your choice, here we have selected _Read-only_
    3. Select the **Firstname**, **Lastname** and **Picurl**. Set the Widget to Image for Picurl column.
4. From the canvas, select the second grid and open the hrdbemployee variable. From the Data tab, set the Filter Field on department to the deptid field of the selecteditem of the first grid [![dt2_emp_data_data](./assets/dt2_emp_data_data-1024x576.png)](./assets/dt2_emp_data_data.png) [![dt2_emp_data_bind](./assets/dt2_emp_data_bind-1024x548.png)](./assets/dt2_emp_data_bind.png)
5. Run the app, click on a department and see the table with employee details displayed

We will extend the [previous related tables use-case](/learn/one-many-relationship/#datatable), to have an editable employee details. Going with the example of sample database, we will see how to display Employee details for a selected Department and add/update the Employee details.

1. [Import the Sample HRDB](/learn/jump-start/#db)
2. Drag and drop a [Data Table](/learn/data-table/)
    1. CREATE NEW Variable with **hrdb** as _service_ and **Department** as the _Operation/Type_
    2. Select any **layout** of your choice, here we have selected _Read-only_
    3. Select the **Name**, **Deptid** and **Budget**
3. Drag and drop another **Data Table** onto the canvas
    1. CREATE NEW Variable with **hrdb** as _service_ and **Employee** as the _Operation/Type_
    2. Select any **layout** of your choice, here we have selected _Editable with Form as Dialog_
    3. Select the **Firstname**, **Lastname** and **Picurl**. Set the Widget to Image for Picurl column.
4. Select a layout and fields for **Live Form**. We have selected a **2-column layout** with all fields displayed.
5. From the canvas, select the second grid and open the hrdbemployee variable. From the Data tab, set the Filter Field on department to the deptid field of the selecteditem of the first grid
6. Select the department field of the form, for this use the widget tree on the left Files Panel [![dt3_emp_fdept_prop](./assets/dt3_emp_fdept_prop-1024x576.png)](./assets/dt3_emp_fdept_prop.png)

- bind the default value to the selecteditem of first grid
- bind the dataset value to hrdbEmployee variable
- set data fields to all fields and display field to name
- Run the app, click on a department and see the table with employee details displayed
- Click ADD to add a new row, a form dialog will be displayed. Note that the Department is set to the selected department. [![run2](./assets/run2-1024x576.png)](./assets/run2.png)
