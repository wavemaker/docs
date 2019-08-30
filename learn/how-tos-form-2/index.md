---
title: "How Tos: Form"
id: ""
---

Using Form to trigger an Insert QueryWe will be seeing how to use a Form to insert values into a Employee table of hrdb database using Insert Query:

1. Create a query in database designer with input params
    
    INSERT INTO EMPLOYEE 
    (FIRSTNAME, LASTNAME, STREET, CITY, STATE, ZIP, BIRTHDATE, PICURL, JOBTITLE, TENANTID)
    VALUES (:firstname, :lastname, :street, :city, :state, :zip, :birthdate, :picurl, :jobtitle, :tenantid)
    
2. Provide test values and run and save the query (as InsertEmp).
3. Create a variable using this query operation from variable dialog or dragging and dropping Form widget and using Create new functionality. [![form_query_var](../assets/form_query_var.png)](../assets/form_query_var.png)
4. Select Layout and Configure Fields changing the display name and widget type if needed.
5. Your page will look like this in design mode [![form_query_design](../assets/form_query_design.png)](../assets/form_query_design.png)
6. Run the app, enter the values and SAVE [![form_query_run](../assets/form_query_run.png)](../assets/form_query_run.png)

Using Form as Filter Form can be used as filter for GET type of API’s. Below example is for filtering the data using a query. We will be using the Employee table of hrdb database to filter on city field.

1. Create a query in database designer with input params
    
    SELECT \* FROM EMPLOYEE WHERE CITY = :city
    
2. Provide test values and run and save the query (as EmpByCity).
3. Create a variable using this query operation from variable dialog or dragging and dropping Form widget and using Create new functionality. [![form_filter_var](../assets/form_filter_var.png)](../assets/form_filter_var.png)
4. Select Layout and Configure Fields changing the display name and widget type if needed.
5. Drag and drop a Data Table onto the canvas and bind it to the Service Variable created when configuring Form. Your page will look like this in design mode Note: We have changed the name of the SAVE button to FILTER [![form_filter_design](../assets/form_filter_design.png)](../assets/form_filter_design.png)
6. Run the app, enter the values and FILTER, see the content of the Data Table change. [![form_filter_run](../assets/form_filter_run.png)](../assets/form_filter_run.png)
