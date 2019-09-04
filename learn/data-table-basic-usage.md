---
title: "Data Table - Basic Usage"
id: ""
---

### Overview

Data Table provides a tabular view for database entities through a database service and allows to Create, Update and Delete (CRUD) operations on the entities. It can also be used to display the response data from a web or java service in a tabular form.

### Configure Data Table

To bind the Data Table Widget to your back-end services data, drag and drop the Data Table Widget onto the canvas. [![](./assets/dt_sel.png)](./assets/dt_sel.png)

#### STEP 1 – SELECT DATA

There can be different scenarios to deal with when configuring your Data Table Widget with a data source. The data source can be in the form of a service like Database or web or Jave service or from an another widget on the page.

- **Scenario 1 -** You do not have any databases or web services available in your project.
    1. You will be prompted to import either a database or a web service. Click the appropriate button to proceed.
    2. Once a service is available in your application, you can proceed to bind the widget to data source and follow the same steps as mentioned in scenario 2
- **Scenario 2** –
    1. **Retrieve Data From**: Services is selected by default.
    2. **Select a Service**: Select a service from the drop-down which lists the services available in your application. Select Database CRUD option for this example.
    3. Select Table of the database or entity in case of web service
    4. **Variable Creation**: Once you select the service and table/Entity for the service, a default variable will be created for you – see the Variable Name field populated by default which will be holding the dataset of the service. You can change the Variable name.
    5. **Select the Data Node**: You are given the option of choosing either the entire dataset – when you are binding the widget to a data source or any of the fields in the dataset. Select the data node tree when binding a single widget or a List item to a field in the dataset.
    6. **Data Configuration Options**: You also have the option of setting the following Data Configuration options:
        - **Records per request**: with an option to enter the number of records to be fetched on each request. The default is 20.
        - **Update Data on input change**: which is checked on by default. This means that whenever there is a change in the input parameter or filter field of the variable the data will be fetched from the service. This option will have an impact on the app performance.
        - **Request data on Page Load**: which is checked on by default. This allows for data to be shown when the page is loaded. If this is not checked, you will not be able to view the data when the page gets loaded. Instead, No Data Found message appears on the widget at runtime.
- **Scenario 3** – If the variables based on database CRUD or web services are already created in the project
    1. **Retrieve Data From**: Select the retrieve data from option as Existing Variable.
    2. **Select a Variable** from the drop-down list of the variables available in the application. You can select the one needed to bind the List Widget to. You can also search for a specific variable by typing in select variable option. If you are able to find your variable in the drop-down select the same.
    3. Once you select the variables, it shows the dataset that it is bound to.
    4. As Data Configuration options are already set for this variable, you do not see those options in this scenario.
- **Scenario 4**: Binding to widget
    1. **Retrieve Data From**: Select the retrieve from data option as widget that was dragged and dropped onto the canvas.
    2. **Select a widget** from the drop-down list. This will list the widgets present on this page, you cannot access the widgets from other pages.
    3. You can **select data node** to be the entire widget or the selecteditem node in case of another Data Table or List or Cards or result from a Live Filter
    4. As you are not using a Variable the Data Configuration options will not be available.

[![](./assets/dt_data.png)](./assets/dt_data.png)

#### Step 2 – Layout Selection

**Selecting the Layout** includes two sub-steps:

1. Selecting a Table Layout: You can choose from:
    1. Editable Table with
        
        - Form as Dialog: This can be used when you would like to have a data entry form shown as a dialog which will save space as the dialog form will be shown in the Table Layout. For Example: Adding Students to a Course with information such as Skill Level, Expertise to be entered on the dialog form.
        - Form Below: This can be used when you want to view data in a Table and edit the selected row from the table using a form. For example, this can be used in use case where editable items are less, for instance, Qty in a shopping cart
        - Inline Editable Table: This can be used when you want to add/edit data in a Table like a table rather than in a form. For example, this can be used in use case to create line items of an order detail table.
        
        [![](./assets/dt_layout1.png)](./assets/dt_layout1.png)
    2. Read-Only Table with
        
        - Details of the selected row displayed below the table: This can be used if you wish to select some specific fields in Data Table and would like to view some special fields in the form below. For Example: Viewing catalog items showing the Basic Tech Specs of each Device in the Data Table and on selecting each row in the grid view the Network and Connectivity related Specs in the Form below.
        - Simple Table view: This Data Table provides for Read Only View of the existing Data when you want to show live data constantly refreshed. For example, Stock Trading Views, Election Results, etc.
        
        [![](./assets/dt_layout2.png)](./assets/dt_layout2.png)
2. Selecting Pagination Style [![](./assets/dt_pagin.png)](./assets/dt_pagin.png)

#### STEP 3 – SELECT DATA TABLE COLUMNS

This step will allow us to select the fields to be shown in Data Table and once done

1. Select your choice of fields to be displayed in Table
2. Reorder the fields for display in Table
3. Change the Title for the field
4. Change the Widget type for the field

**Note:** If the Data Table layout without Form is selected in step 2 DONE button will be provided after this step. Click the DONE button to add the Data Table to the current page. If any other layouts are selected then you have to go through two more steps to select the Form layout and to select the Form fields. [![](./assets/dt_fields.png)](./assets/dt_fields.png)

#### STEP 4 – SELECTING FORM LAYOUT

If you have selected any of the Data Table layouts that include an inline or a dialog Form this step will allow you to select a Form layout for your inline Form or dialog Form.

- You have the option of choosing **1-column, 2-column or 3-column layout**. 3-column layout is selected by default
- You can also set the alignment, position, and size of the **caption** of the Form fields.

[See here for more details](/learn/app-development/widgets/datalive/live-form/liveform-layouts/)

#### STEP 5 – SELECTING FORM FIELDS

Select the fields and set the title and widget property for each field

1. Select the fields to be displayed in the Form
2. Change the title for each field
3. Change the widget type for display of each field value
4. Reorder the fields for display. In case you have selected 2- or 3-column layout, then you can specify the fields to be displayed in each column.

[See here for more details](/learn/app-development/widgets/datalive/live-form/fields-configuration/)

[Data Table Use Cases](/learn/app-development/widgets/datalive/datatable/data-table-use-cases/)

- [1\. Basic Table Usage](/learn/app-development/widgets/datalive/datatable/data-table-basic-usage/)
- [2\. How to customise table actions](/learn/how-tos/data-table-actions/)
- [3\. How to represent data table columns using widgets](/learn/how-tos/data-table-widget-representations/)
- [4\. How to format data table column](/learn/how-tos/data-table-format/)
- [5\. How to apply styles (generic and conditional) to data table columns](/learn/how-tos/data-table-styling/)
- [6\. How to view master-detail record using a data table](/learn/how-tos/view-master-detail-data-records-using-data-table/)
- [7\. How to add master-detail record using a data table](/learn/how-tos/add-master-detail-records-using-data-table/)
- [8\. How to export data using a data table](/learn/how-tos/export-data-data-table/)
- [9\. How to create a dynamic data table](/learn/how-tos/dynamic-data-tables/)
- [10\. How to bind column of a data table to query variable](/learn/how-tos/data-table-column-bound-query/)
