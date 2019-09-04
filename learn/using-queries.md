---
title: "Using Queries"
id: ""
---

There will be times when you want to display data from multiple tables or update/insert values to multiple tables. Queries and Stored Procedures come in handy in such instances. In this section, we will be seeing how WaveMaker supports Query usage with the help of an example.

NOTE: This post explains the usage of queries in WaveMaker using the Native SQL code.

In this example, we will build a query to list the number of days vacation availed by employees from each department. We will be using the _hrdb sample database_ that ships with the product.In this example, we will build a query to list the number of days vacation availed by employees from each department. We will be using the _hrdb sample database_ that ships with the product.

1. Import the **sample database** into your project.
2. Click on **hrdb** from the **DataModel** Service to open the data designer window.
3. Click on the **Query** tab on the **data designer** window. [![query_tab](./assets/query_tab.png)](./assets/query_tab.png)
4. Select **Native SQL** as the query type and enter the following code in the Query window:
    
    select d.NAME, sum(END\_DATE-START\_DATE) as days 
    from VACATION v, EMPLOYEE e, DEPARTMENT d 
    where e.EMP\_ID = v.EMP\_ID and e.DEPT\_ID = d.DEPT\_ID 
    group by d.NAME
    
5. **Run** the query and see the results in the result box below the query window. Save the query as _vacation\_days_. [![query_run](./assets/query_run.png)](./assets/query_run.png)

We will see how to use the query results by using a **Data Table**to display the results:

- Drag and drop a **Data  Table** widget
    
    1. set **Source of data** to _service_
    2. **Select service** to be _hrdb_ (the database name)
    3. **Operation/Type** as the _query_ saved in the previous step
    
    [![query_grid_var](./assets/query_grid_var.png)](./assets/query_grid_var.png)
- Setting the **Request data on page load** for the Service Variable ensures that the call to the service is triggered whenever the page is loaded. Setting **Update data on input change** will ensure the service call when the data changes (as seen in the next section). You can also set the **Records** to be fetched per request, which by default is set to 20. [![query_grid_props](./assets/query_grid_props.png)](./assets/query_grid_props.png)
- Since the query is a select query, the layout option available is **Readonly Datagrid**. You can choose the **Pagination style** or go with the default. [![query_grid_layout](./assets/query_grid_layout.png)](./assets/query_grid_layout.png)
- You have the option of **choosing the fields** to be displayed in the grid. Here we are retaining the default of displaying all the fields. [![query_grid_fields](./assets/query_grid_fields.png)](./assets/query_grid_fields.png)
- Run the project and see the results displayed. [![query_grid_run](./assets/query_grid_run.png)](./assets/query_grid_run.png)

The results from a query can be filtered using input parameters. For example, let us modify the query above to accept the department name as input and display the results for the specified department name.

1. Create a Live Variable for Department entity [![query_param_LV](./assets/query_param_LV.png)](./assets/query_param_LV.png)
2. Add a **Select** widget to the page and bind it to the _Live Variable dataset_ created in the previous step with the _department name_ as the _display field_ and _department id_ as the _datafield_. This will serve as input to the Query. Know more about [Select Widget usage](/learn/selection-widgets/). [![query_select](./assets/query_select.png)](./assets/query_select.png)
3. Create a new query thus:
    
    select d.NAME, sum(END\_DATE-START\_DATE) as days 
    from VACATION v, EMPLOYEE e, DEPARTMENT d 
    where e.EMP\_ID = v.EMP\_ID and e.DEPT\_ID = d.DEPT\_ID and d.DEPT\_ID :did
    group by d.NAME
    
4. The parameter entry is made in the **Paramaters** section.
5. Select the _type_ and enter a _test value_ and run the query. Use _List_ in case your parameter takes multiple array value, the test values in such a case should be comma-separated values without spaces. For example, in this example if _did_ were a list then the test values would be _1,2_. [![query_paramater_input](./assets/query_paramater_input.png)](./assets/query_paramater_input.png)
6. The parameters can be set to server side properties like _current date, time, id, or username_. For example, you have a query:
    
    select firstname 
    from employee where eid = :id
    
    You can enable security using database as service provider and employee as the User table, then setting the id to _current id_ will get the firstname of the current logged in user. You need not bind the parameter again, explicitly. [![query_serverprops](./assets/query_serverprops.png)](./assets/query_serverprops.png)

- Create a Service Variable using the Query created in the previous step [![query_param_sv](./assets/query_param_sv.png)](./assets/query_param_sv.png)
- The Service Variable will have **data tab** which can be used to bind the input value for the parameter. [![query_paramater_input](./assets/query_paramater_input.png)](./assets/query_paramater_input.png) Here we are binding it to the datavalue of the select widget created in step 1. [![query_param_svdatabind](./assets/query_param_svdatabind.png)](./assets/query_param_svdatabind.png)
- Add a text box to the page and bind it to the _Days_ column returned by the Query. [![query_paramater_output](./assets/query_paramater_output.png)](./assets/query_paramater_output.png) NOTE: There is known issue, whereby the direct binding might not work. In such case go to the Use Expression tab and change the bind statement from:

 

Variables.HrdbVacation\_day\_did.dataSet.DAYS

to:

Variables.HrdbVacation\_day\_did.dataSet.content\[0\].DAYS

1. Your app should look like this at design time [![query_param_design](./assets/query_param_design.png)](./assets/query_param_design.png)
2. Run the project. [![query_paramater_run1](./assets/query_paramater_run1.png)](./assets/query_paramater_run1.png)
3. Select various departments and see the values change accordingly: [![query_paramater_run2](./assets/query_paramater_run2.png)](./assets/query_paramater_run2.png)[![query_paramater_run3](./assets/query_paramater_run3.png)](./assets/query_paramater_run3.png)
