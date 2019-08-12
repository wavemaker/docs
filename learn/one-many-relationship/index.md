---
title: "How To: One-to-Many Relationship"
date: "2016-08-02"
---

## \-Child Relationship

Handling one-to-many relation scenarios is very easy within WaveMaker. Going with the example of sample database, we will see how to display Employee details for a selected Department. [![run](../assets/run-1024x576.png)](../assets/run.png)

1. [the Sample HRDB](/learn/jump-start/#db)
2. and drop a [Table](/learn/data-table/)
    1. NEW Variable with as service and as the **/Type** [![dt1_dept_data](../assets/dt1_dept_data.png)](../assets/dt1_dept_data.png)
    2. any of your choice, here we have selected _\-only_ [![dt1_dept_layout](../assets/dt1_dept_layout.png)](../assets/dt1_dept_layout.png)
    3. the , and [![dt1_dept_fields](../assets/dt1_dept_fields.png)](../assets/dt1_dept_fields.png)
3. and drop another **Table** onto the canvas
    1. NEW Variable with as service and as the **/Type**
    2. any of your choice, here we have selected _\-only_
    3. the , and Set the Widget to Image for Picurl column.
4. the canvas, select the second grid and open the hrdbemployee variable. From the Data tab, set the Filter Field on department to the deptid field of the selecteditem of the first grid [![dt2_emp_data_data](../assets/dt2_emp_data_data-1024x576.png)](../assets/dt2_emp_data_data.png) [![dt2_emp_data_bind](../assets/dt2_emp_data_bind-1024x548.png)](../assets/dt2_emp_data_bind.png)
5. the app, click on a department and see the table with employee details displayed

We will extend the [related tables use-case](/learn/one-many-relationship/#datatable), to have an editable employee details. Going with the example of sample database, we will see how to display Employee details for a selected Department and add/update the Employee details.

1. [the Sample HRDB](/learn/jump-start/#db)
2. and drop a [Table](/learn/data-table/)
    1. NEW Variable with as and as the _/Type_
    2. any of your choice, here we have selected _\-only_
    3. the , and
3. and drop another **Table** onto the canvas
    1. NEW Variable with as and as the _/Type_
    2. any of your choice, here we have selected _with Form as Dialog_
    3. the , and Set the Widget to Image for Picurl column.
4. a layout and fields for **Form** We have selected a **2-column layout** with all fields displayed.
5. the canvas, select the second grid and open the hrdbemployee variable. From the Data tab, set the Filter Field on department to the deptid field of the selecteditem of the first grid
6. the department field of the form, for this use the widget tree on the left Files Panel [![dt3_emp_fdept_prop](../assets/dt3_emp_fdept_prop-1024x576.png)](../assets/dt3_emp_fdept_prop.png)

- the default value to the selecteditem of first grid
- the dataset value to hrdbEmployee variable
- data fields to all fields and display field to name
- the app, click on a department and see the table with employee details displayed
- ADD to add a new row, a form dialog will be displayed. Note that the Department is set to the selected department. [![run2](../assets/run2-1024x576.png)](../assets/run2.png)
