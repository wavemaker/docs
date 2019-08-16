---
title: "Form Usage Scenarios"
id: ""
---

In this document you will find:

- [Usage Scenario](#basic)
- [to trigger an Insert Query](#query)
- [Form as Filter](#filter)

# Usage Scenario

widget has inbuilt functionality to perform  **& GET operations** on the data source it is bound to. A typical Form set up in WaveMaker has the following steps:

1. the **source** that the Form will be working on. This takes the form of a variable based on the APIs exposed by [Service Integration](http://[supsystic-show-popup id=119]) or [Service Integration](http://[supsystic-show-popup id=115])
2. the display of the Form. You can choose from one-column, two-column or a three-column layout.
3. the to be available for the user to interact with. All the fields from the selected data source will be presented for selection and assign the display widget for each.

and drop the widget onto the page. [![](../assets/form_usage_dnd.png)](../assets/form_usage_dnd.png)

#### 1 – SELECT DATA

can be different scenarios to deal with when configuring your Form Widget with a data source. The data source can be in the form of a variable based on the APIs exposed by the imported web, java or query service.

- **1**: You do not have any services available in your project. In this scenario, no variables can be created as there are no services available in your project.
    1. will be prompted to import either a database or web service or create a java service. Click the appropriate button to proceed.
    2. a service is available in your application, you can proceed to bind the widget to data source and follow the same steps as mentioned in scenario 2
- **2** – There are no variables created for any of the services in your application
    1. **Data From**: Services is selected by default. If no widgets are placed in the current page, the widgets option will be disabled.
    2. the **Services** option.
    3. **a Service**: Select a service from the drop-down which lists the services available in your application.
    4. the **/Entity** of the service which would correspond to the functions, methods or queries for DB services respectively.
    5. **Creation**: Once you select the service and Table/Entity for the service, a default variable will be created for you – see the Variable Name field populated by default which will be holding the dataset of the service. You can also change the Variable name.
    6. **Configuration Options**: You can also set the following Data Configuration options:
        - **Data on input change**: which is checked on by default. This means that whenever there is a change in the input parameter or filter field of the variable the data will be fetched from the service. This option will have an impact on the app performance.
        - **data on Page Load**: which is checked on by default. This allows for data to be shown when the page is loaded. If this is not checked, you will not be able to view the data when the page gets loaded. Instead, No Data Found message appears on the widget at runtime.
- **3** – If the database API variables are already created in the project
    1. **Data From**: Services, Existing Variables or Widgets are the options provided to you for choosing the source of data.
    2. **Existing Variable.** Note that you can create a new variable if required.
    3. **a Variable** from the drop-down list of the variables available in the application. You can select the one needed to bind the List Widget to. You can also search for a specific variable by typing in select variable option. If you are able to find your variable in the drop-down select the same.
    4. you select the variables, it shows the dataset that it is bound to.
    5. Data Configuration options are already set for this variable, you do not see those options in this scenario.

[![](../assets/form_usage_var.png)](../assets/form_usage_var.png)

#### 2: Layout and Alignment Configuration

- can choose to have a _1, 2 or 3-column layout_
- can set the _, Position, and Size_ of the for the Form.

[![](../assets/form_usage_layout.png)](../assets/form_usage_layout.png)

#### 3: Field Configuration

- **As** widget to represent the selected field. The widgets applicable to the field based on the field data type, are available for selection from the drop-down box.
- the case of a multi-column layout, you can choose the fields to be displayed in the respective columns. You can use the up and down arrows to arrange the fields.

[![](../assets/form_usage_data.png)](../assets/form_usage_data.png)

# Form to trigger an Insert Query

will be seeing how to use a Form to insert values into an Employee table of the hrdb database using Insert Query:

1. a query in database designer with input params
    
     INTO EMPLOYEE 
    (FIRSTNAME, LASTNAME, STREET, CITY, STATE, ZIP, BIRTHDATE, PICURL, JOBTITLE, TENANTID)
    VALUES (:firstname, :lastname, :street, :city, :state, :zip, :birthdate, :picurl, :jobtitle, :tenantid)
    
2. test values and run and save the query (as InsertEmp).
3. a variable by dragging and dropping Form widget and using Create new functionality or by using this query operation from the variable dialog.
4. Layout and Configure Fields changing the display name and widget type if needed. Note that if the database API Variable underlying the Form, has to have some input fields the same should be done using the Data tab of the Variable.
5. page will look like this in design mode [![](../assets/form_query_design.png)](../assets/form_query_design.png)
6. the app, enter the values and SAVE [![](../assets/form_query_run.png)](../assets/form_query_run.png)

# Form as Filter

form can be used as a filter for GET type of API’s.

example is for filtering the data using a query. We will be using the Employee table of the hrdb database to filter on city field.

1. a query in database designer with input params
    
     \* FROM EMPLOYEE WHERE CITY = :city
    
2. test values and run and save the query (as EmpByCity).
3. a variable using this query operation from the variable dialog or dragging and dropping Form widget and using Create new functionality.
4. Layout and Configure Fields changing the display name and widget type if needed.
5. and drop a Data Table onto the canvas and bind it to the Database API Variable created when configuring Form. Your page will look like this in design mode Note: We have changed the name of the SAVE button to FILTER [![form_filter_design](../assets/form_filter_design.png)](../assets/form_filter_design.png)
6. the app, enter the values and FILTER, see the content of the Data Table change. [![form_filter_run](../assets/form_filter_run.png)](../assets/form_filter_run.png)

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
    - [Data Source](/learn/app-development/widgets/datalive/form/form-data-source/)
    - [Layouts](/learn/app-development/widgets/datalive/form/form-layouts/)
    - [Form Configuration](/learn/app-development/widgets/datalive/form/form-configurations/)
    - [Fields Configuration](/learn/app-development/widgets/datalive/form/form-fields-configuration/)
    - [Events & Methods](/learn/app-development/widgets/datalive/form/form-events-methods/)
    - [Usage Scenarios](/learn/app-development/widgets/datalive/form/form-usage-scenarios/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
