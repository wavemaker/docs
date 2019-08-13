---
title: "Using Live Filter"
id: "using-live-filter"
---

Live Filter provides data filtering UI and functionality. Live Filter can be bound to a Live Variable and returns filtered results which in turn can be bound to any widget

Drag-and-drop the  **Filter** widget. [![lftr_sel](../assets/lftr_sel.png)](../assets/lftr_sel.png)

#### 1 – SELECT DATA

There can be different scenarios to deal with when configuring your Live Filter Widget with data source. Data source can be in the form of a Live variable created from a database or web service or from an another widget on the page.

- **1**: You do not have any databases or web services available in your project. In this scenario, no live variables can be created as there are no services available in your project.
    1. will prompted to import a database. Click the appropriate button to proceed.
    2. a service is available in your application, you need to drag and drop the Widget AGAIN on to your canvas to bind the widget to data source and follow the same steps as mentioned in scenario 2
- **2** – There are no live variables created for any of the services in your application
    1. **Source**: Variables is selected by default. If no widgets are placed in the current page, the widgets option will be disabled.
    2. **NEW**
    3. **a Service**: Select a service from the drop-down which lists the services available in your application.
    4. the **/type** of the service which would correspond to the entity in case of database service or a method in case of web/java services
    5. **Creation**: Once you select the service and operation/type for the service, a default variable will be created for you – see the Variable Name field populated by default which will be holding the dataset of the service. You can change the Variable name.
    6. **the Data Node**: You are given the option of choosing either the entire dataset – when you are binding the widget to a data source or any of the fields in the dataset – from Select data node tree when binding a single widget or a List item to a field in the dataset.
    7. **Configuration Options**: You also have the option of setting the following Data Configuration options:
        - **per request**: with an option to enter the number of records to be fetched on each request. Default is 20.
        - **Data on input change**: which is checked on by default. This means that whenever there is a change in the input parameter or filter field of the variable the data will be fetched from the service. This option will have an impact on the app performance.
        - **data on Page Load**: which is checked on by default. This allows for data to be shown when the page is loaded. If this is not checked, you will not be able to view the data when the page gets loaded. Instead No Data Found message appears on the widget at run-time.
- **3** – If the live/service variables are already created in the project
    1. **Source**: Select the source of data for the widget that was dragged and dropped onto the canvas. Variables or Widgets are the options provided to you for choosing the source of data.
    2. **Existing.** Note that you can create a new variable if you so desire.
    3. **a Variable** from the drop-down list of the variables available in the application. You can select the one needed to bind the List Widget to. You can also search for a specific variable by typing in select variable option. If you are able to find your variable in the drop-down select the same.
    4. you select the variables, it shows the dataset that it is bound to.
    5. Data Configuration options are already set for this variable, you do not see those options in this scenario.
- **4**: Binding to widget
    1. **Source**: Select the source of data to Widget.
    2. **a widget** from the drop-down list. This will list the widgets present on this page, you cannot access the widgets from other pages.
    3. can **data node** to be the entire widget or the selecteditem node in case of another Data Table or List or Cards or result from a Live Filter
    4. you are not using a Variable the Data Configuration options will not be available.

[![lftr_data](../assets/lftr_data.png)](../assets/lftr_data.png)

## and Alignment Configuration

Select the Live Filter from _\-column, two-column or three-column_ You can also specify the _, Position and Size_ [![lftr_layout](../assets/lftr_layout.png)](../assets/lftr_layout.png)

## Selection

Once the datasource and layout are selected, you can set the filter You can choose the fields to be displayed on the filter by selecting from the list and set the appropriate widget for the fields. Click on the button. Now your filter is ready. [![lftr_fields](../assets/lftr_fields.png)](../assets/lftr_fields.png)

### to Apply Live Filter to a Data Table/Chart

1. and drop  _Table or Chart_ widget on the page.
2. the Data Table/Chart widget to the filter created by clicking on the  _variable_ button next to the  Property in the section of the Data Table/Chart widget.
3. the  of the filter you just created from the  tab on the  dialog box. [![lftr_apply_bind](../assets/lftr_apply_bind.png)](../assets/lftr_apply_bind.png)
4. the x-axis and y-axis values for the chart. (in case of Data Table, select the columns to be displayed at the time of [](/learn/using-datatable-widget/#fields)or from [Settings](/learn/howtos-datatable/#intro)) [![lftr_apply_chart](../assets/lftr_apply_chart-1024x576.png)](../assets/lftr_apply_chart.png)
5. the application.
6. a value in the filter and click on  button and see the values change in the table/chart.[![lftr_apply_run1](../assets/lftr_apply_run1-1024x576.png)](../assets/lftr_apply_run1.png)
