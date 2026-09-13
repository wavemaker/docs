---
title: "Passing Parameters to Partial Page"
id: "passing-parameters-partial-page"
---
---

We will see how page params can be used to pass data to partial page. We will be using the Department and Employee datasets from the sample hrdb that has been imported.

## Use Case

The app should consist of:

1. Department page listing the departments in a Data Table and Employees from the selected department in a List,
2. Employee details as a partial page listing the employees from a given department in a List.

[![](/learn/assets/ppp_run.png)](/learn/assets/ppp_run.png)

## Solution

The solution includes the following steps:

1. Create the page for Department and a partial page for Employee.
2. Use Data Table widget for Department details and List for Employee details.
3. Since Employee details have to be filtered based upon the selected Department, create a page parameter for the Employee partial page. Use this parameter to filter the list items.
4. Bind the page parameter to the selected department id.

## Implementation

1. Create a Partial Page called emp
2. Drag and drop a List widget, and set the source of data to variable created from Employee entity
3. We have used the Contact List template setting the Picture widget to picurl, Name to firstname+lastname (from Use Expressions tab) and added another label bound to jobtitle
4. Select the partial page node from the left Page Structure under Pages Resources.
5. **Page Parameter**: Under Properties add page param - deptid of type integer. 

[![](/learn/assets/ppp_emp_param.png)](/learn/assets/ppp_emp_param.png)

6. **Filter Employee List**: Next, we need to set the filter on List to display employee details for the department passed to this page. Select the List and locate the Value property under Dataset, click it to open the Employee Variable dialog. You can access it directly from the [Variable Dialog](/learn/assets/var_sel.png). Under Filterl Criretia, set deptid field Is equals to and click the bind icon to set the value 

[![](http://pm.wavemaker.com../assets/ppp_emp_lvdata.png)](http://pm.wavemaker.com../assets/ppp_emp_lvdata.png)

7. From the Page Params tab, select deptid to be set as the department filter. Notice the deptid being passed to the page as parameter. 

[![](/learn/assets/ppp_emp_lvbind.png)](/learn/assets/ppp_emp_lvbind.png)

8. Create a page called Department
9. Use Grid Layout to design the page into two columns
10. Drag and drop Data Table widget onto the first-row first column, and set the source of data to variable created from department entity. We have chosen Simple View Readonly template for this example
11. Drag and drop a Container in the second grid column and set the content to the partial page created 

[![](/learn/assets/ppp_design.png)](/learn/assets/ppp_design.png)

12. **Passing Parameter**: Now we need to pass the selected row deptid to the emp partial page. Click the bind icon next to the deptid
13. From the Widgets tab, select the deptid from the selectedItem of the grid 

[![](/learn/assets/ppp_parambind.png)](/learn/assets/ppp_parambind.png)

14. **Preview**: Run the app and see the Department listing. Click on any department and see the employees from that department being displayed 

[![ppp_run](/learn/assets/ppp_run.png)](/learn/assets/ppp_run.png)

## See Also

[Design UI Cases](/learn/app-development/ui-design/use-cases-ui-design/)   
[How to pass parameters to pages](/learn/how-tos/passing-parameters-pages/)  
[How to use static variable to pass data between pages](/learn/how-tos/use-static-variable-pass-data-pages/)  

