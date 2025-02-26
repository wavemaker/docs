---
title: "Data Table - Data Source"
id: "data-source"
sidebar_label: "Data Source"
---

The first step in configuring a data table is to define the data that needs to be displayed. This data can be in the form of Services, Exiting Variable or another Widget.

### Variable Source

Variable binding will allow you to

- Perform CRUD operations on a database through database CRUD Variables.
- List the results from a Web Service, Java Service or a Query through Variables based on the APIs exposed by the services (edit options are not available for Data Table bound to such service),
- List values stored in a Custom or Model Variables (edit options are not available in this case, too).

You can either create a new variable or use existing variables. The behavior of data displayed will be defined by the Variable/Data Configuration properties. These properties are at the Variable level, you can configure them only when creating a new variable; for existing variables, the properties set at the time of variable creation will be used. To modify these, you will have to go to [variable dialog](/learn/assets/var_sel.png) and make changes. Of particular interest are:

- _Records per request_ - this is the number of records that will be displayed on a page. Configure the Pagination property to enable user navigation to various pages of data;
- _Update data on input change_ - this property defines when the data displayed will be refreshed. When enabled the data is reloaded whenever the input to the Variable (in the form of filter fields for Live and parameter values for Service Variable) changes;
- _Request data on page load_ - enabling this property will ensure that the data within the data table is loaded at the time of page load.

### Widget Source

Widgets can be a source of data in some cases. For example, you might want to display the results from a Live Filter or more details of a selected row/item from a List or another Data Table. Widget option will allow you to achieve this. Selecting Widget as the data source will display the various options available. Widget binding will allow you to show 1-many relationships eg Employees of a selected Department list item.

[![](/learn/assets/dt_data.png)](/learn/assets/dt_data.png)

