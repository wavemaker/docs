---
title: "Using Form"
id: "using-form-2"
---

The **Form** widget has built-in functionality for performing **POST & GET operations** on the data source it is bound to. A typical Form set up in WaveMaker has the following steps:

1. Set the **data source** that the Form will be working on. This takes the form of a Service Variable.
2. Select the display **layout** of the Live Form. You can choose from one-column, two-column or a three-column layout.
3. Select the **fields** to be available for the user to interact with. All the fields from the selected data source will be presented for selection and assign the display widget for each.

Drag and drop the **Form** widget on to the page. [![form_usage_dnd](/learn/assets/form_usage_dnd.png)](/learn/assets/form_usage_dnd.png)

#### STEP 1 – SELECT DATA

There can be different scenarios to deal with when configuring your Form Widget with data source. Data source can be in the form of a Service variable created from a web, java or query service.

- **Scenario 1**: You do not have any services available in your project. In this scenario, no service variables can be created as there are no services available in your project.
    1. You will prompted to import either a database. Click the appropriate button to proceed.
    2. Once a service is available in your application, you need to drag and drop the Widget AGAIN on to your canvas to bind the widget to data source and follow the same steps as mentioned in scenario 2
- **Scenario 2** – There are no service variables created for any of the services in your application
    1. **Select Source**: Variables is selected by default. If no widgets are placed in the current page, the widgets option will be disabled.
    2. Select **CREATE NEW**
    3. **Select a Service**: Select a service from the drop-down which lists the services available in your application.
    4. Select the **operation/type** of the service which would correspond to the functions, methods or queries for web, java and db services respectively.
    5. **Variable Creation**: Once you select the service and operation/type for the service, a default variable will be created for you – see the Variable Name field populated by default which will be holding the dataset of the service. You can change the Variable name.
    6. **Data Configuration Options**: You also have the option of setting the following Data Configuration options:
        - **Update Data on input change**: which is checked on by default. This means that whenever there is a change in the input parameter or filter field of the variable the data will be fetched from the service. This option will have an impact on the app performance.
        - **Request data on Page Load**: which is checked on by default. This allows for data to be shown when the page is loaded. If this is not checked, you will not be able to view the data when the page gets loaded. Instead No Data Found message appears on the widget at run-time.
- **Scenario 3** – If the service variables are already created in the project
    1. **Select Source**: Select the source of data for the widget that was dragged and dropped onto the canvas. Variables or Widgets are the options provided to you for choosing the source of data.
    2. Select **Use Existing.** Note that you can create a new variable if you so desire.
    3. **Select a Variable** from the drop-down list of the variables available in the application. You can select the one needed to bind the List Widget to. You can also search for a specific variable by typing in select variable option. If you are able to find your variable in the drop-down select the same.
    4. Once you select the variables, it shows the dataset that it is bound to.
    5. As Data Configuration options are already set for this variable, you do not see those options in this scenario.

[![form_usage_var](/learn/assets/form_usage_var.png)](/learn/assets/form_usage_var.png)

## Layout and Alignment Configuration

- You can choose to have a _1-, 2- or 3-column layout_.
- You can set the _Alignment, Position and Size_ of the **Caption** for the Form.

[![form_usage_layout](/learn/assets/form_usage_layout.png)](/learn/assets/form_usage_layout.png)

## Step 3: Field Configuration

- the **View As** widget to represent the selected field. The widgets applicable to the field based upon the field data type, are available for selection from the drop-down box.
- In case of a multi-column layout you can choose the fields to be displayed in the respective columns. You can use the up and down arrows to arrange the fields.

[![form_usage_data](/learn/assets/form_usage_data.png)](/learn/assets/form_usage_data.png)
