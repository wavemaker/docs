---
title: "Creating Cards"
id: "card-basic-usage"
sidebar_label: "Creating a Card"
---
---
### Creating Employee Cards

**Cards** represents view of items that are rendered responsively across a wide range of mobile devices and screen sizes.

[![](/learn/assets/cards_basic_run.png)](/learn/assets/cards_basic_run.png)

To bind the Cards to your back-end services data, drag and drop the Cards Widget onto the canvas. [![](/learn/assets/cards_sel.png)](/learn/assets/cards_sel.png)

## STEP-1: Select Data

There can be different scenarios to deal with when configuring your Cards Widget with a data source. The data source can be in the form of a service - database, web or Java; or from an another widget on the page.

## Example 1: When No Service or a Variable is Created
You do not have any service available in your project. In this scenario, you cannot create variable because there are no services available in your project yet. 
    
### `Retrieve Data From` 
1. Select the **Services** option. 
2. You will be prompted to **[Import Database](/learn/app-development/services/database-services/working-with-databases)** or **[Import Web Services](/learn/app-development/services/web-services/web-services)** or **[Create Java Service](/learn/app-development/services/java-services/java-service/)**. Click the appropriate option to proceed.
2. When the service is available in your application, proceed by selecting the service and follow the same steps as mentioned in [example-2](#example-2-with-an-existing-service).  
    
[![](/learn/assets/cards_basic_data1.png)](/learn/assets/cards_basic_data1.png)  

## Example 2: With an Existing Service 
When you have a service integrated in your app, for example, [Database](/learn/app-development/services/database-services/working-with-databases/), [Web Service](/learn/app-development/services/web-services/web-services), or [Java Service](/learn/app-development/services/java-services/java-service/).

### `Retrieve Data From` 
The Services option is selected by default.  

### `Select Service Type` 
Select **Database CRUD** from the dropdown. Retrieving the data From Database CRUD service.
### `Select a Service`
Select a service from the drop-down which lists the services available in your application. 

[![](/learn/assets/cards_basic_data2_1.png)](/learn/assets/cards_basic_data2_1.png)

### `Variable Name`

Once you select the service and Table/Entity for the service, a default variable will be created for you – see the Variable Name field populated by default which will be holding the dataset of the service. You can change the Variable name.
### `Select data node`

You are given the option of choosing either the entire dataset – when you are binding the widget to a data source or any of the fields in the dataset. Select data node tree when binding a single widget or a List item to a field in the dataset.

### Data Configuration Options
You also have the option of setting the following **Data Configuration** options.

[![](/learn/assets/cards_basic_data2_2.png)](/learn/assets/cards_basic_data2_2.png)
        
### `Records per request`
Records per request gives an option to enter the number of records that you can fetch on each request. This will define the pagination behavior of the List. The default is 20, for this example, we set it to 3.
### `Update data on input change`
Update Data on input change is checked by default. This means that whenever there is a change in the input parameter or filter field of the variable the data will be fetched from the service. This option will have an impact on the app performance.
### `Request data on page load`
Request data on Page Load is checked by default. This allows for data to be shown when the page is loaded. If this is not checked, you will not be able to view the data when the page gets loaded. Instead, No Data Found message appears on the widget at runtime.
        
## Example 3: With an Existing Variable

If the variables are already created in the project, [Variable Access](/learn/assets/var_sel.png).
    
### `Retrieve Data From` 
Select **Existing Variable**
### `Select a Variable`
From the drop-down list of the variables available in the application. You can select the one needed to bind the List Widget to. You can also search for a specific variable by typing in select variable option. If you are able to find your variable in the drop-down select the same. 

[![](/learn/assets/cards_basic_data3_1.png)](/learn/assets/cards_basic_data3_1.png)

:::important
- When you select the variables, it shows the dataset that it is bound to.
- Data Configuration options are already set for this variable, so you do not see those options in this scenario. 
:::

[![](/learn/assets/cards_basic_data3_2.png)](/learn/assets/cards_basic_data3_2.png)

#### Modify data request configuration

Configure `Records per request`, `Update data on input change`, `Request data on page load` from the variable dialog.

- Select the **Card** item from the page. 
- Navigate to **Card Properties** and go to `Dataset: Value`.
- Click the `Value:link` to open the Variable dialog.
- Update the **Properties** tab and save & close. 

:::tip
For modifying widget data settings, you must modify the data-variable and not the actual widget settings.
::: 

## Example 4: Binding to Widget
    
### `Retrieve Data From`
Select the Retrieve Data From option as Widgets.
`Select a widget`
Select a widget from the drop-down list. This will list the widgets present on this page, you cannot access the widgets from other pages. 

[![](/learn/assets/cards_basic_data4_1.png)](/learn/assets/cards_basic_data4_1.png)

### `select data node`
You can select data node to be the entire widget or the selected item node in case of another Data Table or List or Cards or result from a Live Filter.

:::important
Since you are not using a Variable the Data Configuration options will not be available.
:::
    
[![](/learn/assets/cards_basic_data4_2.png)](/learn/assets/cards_basic_data4_2.png)

## STEP-2: Select Template

### `Select A: template`
In this step, you are expected to select a template suitable for the current use case. 

[![](/learn/assets/Card_template.png)](/learn/assets/Card_template.png)

### `Select B: pagination`
Choose one of the pagination options provided. 

[![](/learn/assets/Card_pag.png)](/learn/assets/Card_pag.png)

## STEP-3: Binding Data Fields

The template selected in the [step-2](#select-a-template) provides a set of widgets that should be bound to the corresponding field from the data source configured in the [step-1](#step-1-select-data). Select the widget and bind to the corresponding properties by selecting the field from the drop-down list. 

|Widget Fields| Caption|
|--|--|
| `Field` -> `department` | `Caption` -> `department` | 


[![](/learn/assets/cards_basic_fields.png)](/learn/assets/cards_basic_fields.png)

## Design

You can add widgets from the canvas, change the properties at the card and at widget level.

[![](/learn/assets/cards_basic_design.png)](/learn/assets/cards_basic_design.png)

## Run

Click on Preview button to test run the app.

[![](/learn/assets/cards_basic_run.png)](/learn/assets/cards_basic_run.png)


## See Also

[Cards Use Cases](/learn/app-development/widgets/datalive/cards/card-use-cases/)  
[Cards Basic Usage](/learn/app-development/widgets/datalive/cards/card-basic-usage/)  
[How to access cards items](/learn/how-tos/capturing-card-items/)  
