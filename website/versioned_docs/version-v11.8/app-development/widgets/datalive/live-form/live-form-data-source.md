---
title: "Live Form - Data Source"
id: "live-form-data-source"
sidebar_label: "Data Source"
---
---

The first step in configuring a Live Form is to define the data that needs to be displayed. This data can be in the form of a Variable or another Widget.

## Variable Source

Variable binding will allow you to

### `Database CRUD`

Perform CRUD operations on a database through `Database CRUD` variables. 

You can either create a new variable or use existing variables. The behavior of data displayed will be defined by the Variable/Data Configuration properties. These properties are at the Variable level, you can configure them only when creating a new variable. For existing variables, the properties set at the time of variable creation will be used. To modify these, go to the variable dialog and make changes. 

## Modifying the Variable

### `Records per request` 
This is the number of records that will be displayed on a page. Configure the Pagination property to enable user navigation to various pages of data.
### `Update data on input change`
This property defines when the data displayed will be refreshed. When enabled the data is reloaded whenever the input to the Variable (in the form of filter fields for Live and parameter values for Database API Variable) changes;
### `Request data on page load`
Enabling this property will ensure that the data within the data table is loaded at the time of page load.

### Binding 
Under the Data tab of a Variable, you can:

- Bind input fields with values for `insert`, `delete` and `update`.
- Bind Filter fields with values for `read`.

[![](/learn/assets/lf_scenario2.png)](/learn/assets/lf_scenario2.png)

## Widget Source

Widgets can be a source of data in some cases. For example, you might want to display the results from a Live Filter or more details of a current item/selected row/item from a Data Table or List. Widget option will allow you to achieve this. Selecting Widget as the data source will display the various options available. Widget binding will allow you to show 1-many relationships, for example- Employees of a selected Department list item.

[![](/learn/assets/lf_data.png)](/learn/assets/lf_data.png)

