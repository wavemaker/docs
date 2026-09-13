---
title: "List - Basic Usage"
id: "list-basic-usage"
sidebar_label: "Create a List"
---
---

## Creating Employee List

You can use the List widget to list data from a database. This post gives you a basic List usage by building an Employee List.

**Pre-requisites:**

1. Create a web responsive app
2. Create a page to hold the list

**Outcome:**

We will be building the following list:

[![](/learn/assets/list_basic_run.png)](/learn/assets/list_basic_run.png)

## Select Data

There can be different scenarios to deal with when configuring your List Widget with a data source. The data source can be from a service like a Database, web or Java Service or from an another widget on the page.

- **Scenario 1**: You do not have any services available in your project.
    
    - You will be prompted to import a service by either [Database Integration](/learn/app-development/services/database-services/working-with-databases/), or [Web Service Integration](/learn/app-development/services/web-services/web-services/), or [Java Service Integration](/learn/app-development/services/java-services/java-service/). Click the appropriate button to proceed.
    - Once a service is available in your application, you can proceed to bind the widget to data source and follow the same steps as mentioned in scenario 2
    
    [![Screenshot](/learn/assets/list_basic_data1.png)](/learn/assets/list_basic_data1.png)
- **Scenario 2**– There are no variables created for any of the services in your application
    
    - **Retrieve Data From**: Services is selected by default.
    - Select Services option and select the Service Type and Service - here we are using Database CRUD API from hrdb database service.
    - Select the **Table/Entity** of the service which would correspond to the entity in case of database service or a method in case of web/java services [![](/learn/assets/list_basic_data2_1.png)](/learn/assets/list_basic_data2_1.png)
    - **Variable Creation**: Once you select the service and Table/Entity for the service, a default variable will be created for you – see the Variable Name field populated by default which will be holding the dataset of the service. You can also change the Variable name, if required.
    - **Select the Data Node**: You are given the option of choosing either the entire dataset – when you are binding the widget to a data source or any of the fields in the dataset. Select data node tree when binding a single widget or a List item to a field in the dataset.
    - **Data Configuration Options**: You also have the option of setting the following Data Configuration options:
        - **Records per request**: with an option to enter the number of records to be fetched on each request. The default is 20. For this example, we have set it to 5.
        - **Update Data on input change**: which is checked on by default. This means that whenever there is a change in the input parameter or filter field of the variable the data will be fetched from the service. This option will have an impact on the app performance.
        - **Request data on Page Load**: which is checked on by default. This allows for data to be shown when the page is loaded. If this is not checked, you will not be able to view the data when the page gets loaded. Instead, No Data Found message appears on the widget at runtime.
    
    [![](/learn/assets/list_basic_data2_2.png)](/learn/assets/list_basic_data2_2.png)
- **Scenario 3**– If the variables are already created in the project
    
    - **Retrieve Data From**: Select **Existing Variable.**
    - **Select a Variable** from the drop-down list of the variables available in the application. You can select the one needed to bind the List Widget to. You can also search for a specific variable by typing in select variable option. If you are able to find your variable in the drop-down select the same.
    - Once you select the variables, it shows the dataset that it is bound to.
    - As Data Configuration options are already set for this variable, you do not see those options in this scenario.
    
    [![](/learn/assets/list_basic_data3_2.png)](/learn/assets/list_basic_data3_2.png)
- **Scenario 4**: Binding to widget
    
    - **Retrieve Data From**: Select the Retrieve Data From option as Widget that was dragged and dropped onto the canvas of the project.
    - **Select a widget** from the drop-down list. This will list the widgets present on this page, you cannot access the widgets from other pages.
    - You can **select data node** to be the entire widget or the selecteditem node in case of another Data Table or List or Cards or result from a Live Filter
    - As you are not using a Variable the Data Configuration options will not be available.
    
    [![](/learn/assets/list_basic_data4_1.png)](/learn/assets/list_basic_data4_1.png)

## Select Template

In this step, you are expected to select a **template** and **pagination** style suitable for the current use case. For this example, we are choosing _Contact List_ as the template and _Basic_ as pagination style.

[![](/learn/assets/ll_template.png)](/learn/assets/ll_template.png)

[![](/learn/assets/ll_pagin.png)](/learn/assets/ll_pagin.png)

## Binding Data Fields

- The template selected in the previous step provides a set of widgets that need to be bound to the corresponding field from the data source selected in the first step.
- Select the widget and bind to the corresponding properties like Caption etc. to the fields by selecting the field from the drop-down list.

[![](/learn/assets/ll_fields.png)](/learn/assets/ll_fields.png)

## Design View

From the Canvas, you can further enhance the list design by adding/removing widgets, setting properties etc.

[![](/learn/assets/list_basic_design.png)](/learn/assets/list_basic_design.png)

## Run View

Test Run or Preview the App

[![](/learn/assets/list_basic_run.png)](/learn/assets/list_basic_run.png)

[List Use Cases](/learn/app-development/widgets/datalive/list/list-use-cases/)
