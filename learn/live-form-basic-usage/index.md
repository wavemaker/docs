---
title: "Live Form - Basic Usage"
id: "live-form-basic-usage"
---

**Form** widget has inbuilt functionality for performing **operations** on the data source it is bound to. A typical Live Form set up in WaveMaker has the following steps:

1. the **source** that the Live Form will be working on. This takes the form of a Variable or a selected item from a Widget like a List or a Data Table.
2. the display of the Live Form. You can choose from one-column, two-column or a three-column layout.
3. the to be available for the user to interact with. All the fields from the selected data source will be presented for selection.
4. \- Cancel and Save are provided by default with every Live Form. No need to code these functionalities.

use a form in your app, drag and drop the **Form** widget onto a page. [![](../assets/lf_sel.png)](../assets/lf_sel.png)

#### 1 – SELECT DATA

can be different scenarios to deal with when configuring your Live Form Widget with a data source. The data source can be in the form of database CRUD variables or from an another widget, usually Data Table, on the page.

- **1**: You do not have any databases available in your project. In this scenario, no variables can be created as there are no services available in your project.
    1. will be prompted to import either a database or design data model. Click the appropriate button to proceed.
    2. a service is available in your application, you can proceed to bind the widget to the data source and follow the same steps as mentioned in scenario 2. [![](../assets/lf_scenario1.png)](../assets/lf_scenario1.png)
- **2** – There are no variables created on database CRUD in your application
    1. **Data From** Services is selected by default.
    2. **Type** to Database CRUD, this is the only option available.
    3. **a Service**: Select a service from the drop-down which lists the services available in your application.
    4. **/entity:** Select the desired Table/entity from the drop down list
    5. **Creation**: Once you select the service and Table/entity for the service, a default variable will be created for you – see the Variable Name field populated by default which will be holding the dataset of the service. You can change the Variable name if required.
    6. **the Data Node**: You are given the option of choosing either the entire dataset – when you are binding the widget to a data source or any of the fields in the dataset. Select data node tree when binding a single widget or a List item to a field in the dataset.
    7. **Configuration Options**: You also have the option of setting the following Data Configuration options:
        - **per request**: with an option to enter the number of records to be fetched on each request. The default is 20.
        - **Data on input change**: which is checked on by default. This means that whenever there is a change in the input parameter or filter field of the variable the data will be fetched from the service. This option will have an impact on the app performance.
        - **data on Page Load**: which is checked on by default. This allows for data to be shown when the page is loaded. If this is not checked, you will not be able to view the data when the page gets loaded. Instead, No Data Found message appears on the widget at runtime. [![](../assets/lf_scenario2.png)](../assets/lf_scenario2.png)
- **3** – If the variables are already created in the project
    1. **Data From** to **Variable.**
    2. **a Variable** from the drop-down list of the variables available in the application. You can select the one needed to bind the List Widget to. You can also search for a specific variable by typing in select variable option. If you are able to find your variable in the drop-down select the same.
    3. you select the variables, it shows the dataset that it is bound to.
    4. Data Configuration options are already set for this variable, you do not see those options in this scenario. [![](https://www.wavemaker.com../assets/lf_scenario3.png)](https://www.wavemaker.com../assets/lf_scenario3.png)
- **4**: Binding to widget
    1. **Data From** Select the source of data as Widget that was dragged and dropped onto the canvas.
    2. **a widget** from the drop-down list. This will list the widgets present on this page, you cannot access the widgets from other pages.
    3. can **data node** to be the entire widget or the selecteditem node in case of another Data Table or List or Cards or result from a Live Filter
    4. you are not using a Variable the Data Configuration options will not be available. [![](../assets/lf_data.png)](../assets/lf_data.png)

## 2: Layout and Alignment Configuration

- can choose to have a _1, 2 or 3-column layout_
- can also set the as _ONLY_ or Read only will be used for display purposes alone, while with an Editable form, the user will be allowed to enter or modify values.
- can set the _, Position, and Size_ of the for the Form.

[![](../assets/lf_layout.png)](../assets/lf_layout.png)

## 3: Field Configuration

- the that have to be displayed in the form
- **widget** to represent the selected field. The widgets applicable to the field based on the field data type, are available for selection from the drop-down box.
- case of a multi-column layout, you can choose the fields to be displayed in the respective columns. You can use the up and down arrows to arrange the fields.

[![](../assets/lf_field.png)](../assets/lf_field.png)

[Form Use Cases](/learn/app-development/widgets/datalive/live-form/liveform-use-cases/)

- [1\. Live Form Basic Usage](/learn/app-development/widgets/datalive/live-form/live-form-basic-usage/)
- [2\. How to split live form](/learn/how-tos/live-form-tabbed-form/)
- [3\. How to link live form to another widget](/learn/how-tos/live-form-linking-another-widget/)
- [4\. How to configure related fields in a Live Form](/learn/how-tos/live-form-related-fields/)
- [5\. How to use cascading select and automplete widgets for fields in a Live Form](/learn/how-tos/using-cascading-select-autocomplete-live-form-fields/)
- [6\. How to configure cascading select for fields in a Live Form](/learn/how-tos/using-cascading-select-within-live-form/)
- [7\. How to add master-detail records from the same Live Form](/learn/how-tos/adding-master-detail-records-transaction/)
- [8\. How to use cascaded Live Filter to populate Live Form](/learn/how-tos/using-cascading-filter-populate-live-form/)
- [9\. How to add master-detail records from Live Form using Wizard](/learn/how-tos/using-wizard-master-detail-live-form/)
- [10\. How to progressively add fields to a record using Wizard](/learn/how-tos/using-wizard-progressive-data-entry-live-form/)
- [11\. How to accumulate data over multiple steps in a Wizard and save at the last step](/learn/how-tos/using-wizard-cumulative-data-entry-live-form/)
