---
title: "Live Filter - Data Source"
id: ""
---

The first step in configuring a Live Filter is to define the data that needs to be filtered upon. This data can be in the form of a Variable or another Widget.

### Variable Source

Variable binding will allow you to obtain filter fields from a database through Database CRUD Variables.

You can either create a variable or use existing variables. The behavior of data displayed will be defined by the Variable/Data Configuration properties. These properties are at the Variable level, you can configure them only when creating a service; for existing variables, the properties set at the time of variable creation will be used. To modify these, you will have to go to [variable dialog](http://[supsystic-show-popup id=105]) and make changes. Of particular interest are:

- _Records per request_ - this is the number of records that will be displayed on a page. Configure the Pagination property to enable user navigation to various pages of data;
- _Update data on input change_ - this property defines when the data displayed will be refreshed. When enabled the data is reloaded whenever the input to the Variable in the form of filter fields changes;
- _Request data on page load_ - enabling this property will ensure that the data within the data table is loaded at the time of page load.

### Widget Source

Widgets can be a source of data in some cases. For example, you might want to display the results from a Live Filter or more details of a selected row/item from a Data Table or List. Widget option will allow you to achieve this. Selecting Widget as the data source will display the various options available. Widget binding will allow you to show 1-many relationships eg Employees of a selected Department list item.

