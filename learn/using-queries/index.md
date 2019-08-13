---
title: "Using Queries"
id: "using-queries"
---

There will be times when you want to display data from multiple tables or update/insert values to multiple tables. Queries and Stored Procedures come in handy in such instances. In this section, we will be seeing how WaveMaker supports Query usage with the help of an example.

NOTE: This post explains the usage of queries in WaveMaker using the Native SQL code.

In this example, we will build a query to list the number of days vacation availed by employees from each department. We will be using the _sample database_ that ships with the product.In this example, we will build a query to list the number of days vacation availed by employees from each department. We will be using the _sample database_ that ships with the product.

1. the **database** into your project.
2. on from the Service to open the data designer window.
3. on the tab on the **designer** window. [![query_tab](../assets/query_tab.png)](../assets/query_tab.png)
4. **SQL** as the query type and enter the following code in the Query window:
    
     d.NAME, sum(END\_DATE-START\_DATE) as days 
    from VACATION v, EMPLOYEE e, DEPARTMENT d 
    where e.EMP\_ID = v.EMP\_ID and e.DEPT\_ID = d.DEPT\_ID 
    group by d.NAME
    
5. the query and see the results in the result box below the query window. Save the query as _\_days_ [![query_run](../assets/query_run.png)](../assets/query_run.png)

We will see how to use the query results by using a ** Table** display the results:

- and drop a ** Table** widget
    
    1. **of data** to
    2. **service** to be (the database name)
    3. **/Type** as the saved in the previous step
    
    [![query_grid_var](../assets/query_grid_var.png)](../assets/query_grid_var.png)
- the **data on page load** for the Service Variable ensures that the call to the service is triggered whenever the page is loaded. Setting **data on input change** will ensure the service call when the data changes (as seen in the next section). You can also set the to be fetched per request, which by default is set to 20. [![query_grid_props](../assets/query_grid_props.png)](../assets/query_grid_props.png)
- the query is a select query, the layout option available is **Datagrid** You can choose the **style** or go with the default. [![query_grid_layout](../assets/query_grid_layout.png)](../assets/query_grid_layout.png)
- have the option of **the fields** to be displayed in the grid. Here we are retaining the default of displaying all the fields. [![query_grid_fields](../assets/query_grid_fields.png)](../assets/query_grid_fields.png)
- the project and see the results displayed. [![query_grid_run](../assets/query_grid_run.png)](../assets/query_grid_run.png)

The results from a query can be filtered using input parameters. For example, let us modify the query above to accept the department name as input and display the results for the specified department name.

1. a Live Variable for Department entity [![query_param_LV](../assets/query_param_LV.png)](../assets/query_param_LV.png)
2. a widget to the page and bind it to the _Variable dataset_ created in the previous step with the _name_ as the _field_ and _id_ as the This will serve as input to the Query. Know more about [Widget usage](/learn/selection-widgets/) [![query_select](../assets/query_select.png)](../assets/query_select.png)
3. a new query thus:
    
     d.NAME, sum(END\_DATE-START\_DATE) as days 
    from VACATION v, EMPLOYEE e, DEPARTMENT d 
    where e.EMP\_ID = v.EMP\_ID and e.DEPT\_ID = d.DEPT\_ID and d.DEPT\_ID :did
    group by d.NAME
    
4. parameter entry is made in the section.
5. the and enter a _value_ and run the query. Use in case your parameter takes multiple array value, the test values in such a case should be comma-separated values without spaces. For example, in this example if were a list then the test values would be _1,2_ [![query_paramater_input](../assets/query_paramater_input.png)](../assets/query_paramater_input.png)
6. parameters can be set to server side properties like _date, time, id, or username_ For example, you have a query:
    
     firstname 
    from employee where eid = :id
    
    You can enable security using database as service provider and employee as the User table, then setting the id to _id_ will get the firstname of the current logged in user. You need not bind the parameter again, explicitly. [![query_serverprops](../assets/query_serverprops.png)](../assets/query_serverprops.png)

- a Service Variable using the Query created in the previous step [![query_param_sv](../assets/query_param_sv.png)](../assets/query_param_sv.png)
- Service Variable will have **tab** which can be used to bind the input value for the parameter. [![query_paramater_input](../assets/query_paramater_input.png)](../assets/query_paramater_input.png) Here we are binding it to the datavalue of the select widget created in step 1. [![query_param_svdatabind](../assets/query_param_svdatabind.png)](../assets/query_param_svdatabind.png)
- a text box to the page and bind it to the column returned by the Query. [![query_paramater_output](../assets/query_paramater_output.png)](../assets/query_paramater_output.png) NOTE: There is known issue, whereby the direct binding might not work. In such case go to the Use Expression tab and change the bind statement from:

 

\_day\_did.dataSet.DAYS

to:

\_day\_did.dataSet.content\[0\].DAYS

1. app should look like this at design time [![query_param_design](../assets/query_param_design.png)](../assets/query_param_design.png)
2. the project. [![query_paramater_run1](../assets/query_paramater_run1.png)](../assets/query_paramater_run1.png)
3. various departments and see the values change accordingly: [![query_paramater_run2](../assets/query_paramater_run2.png)](../assets/query_paramater_run2.png)[![query_paramater_run3](../assets/query_paramater_run3.png)](../assets/query_paramater_run3.png)
