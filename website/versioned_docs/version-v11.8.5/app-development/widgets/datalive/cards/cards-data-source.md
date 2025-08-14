---
title: "Cards Data Source"
id: "cards-data-source"
sidebar_label: "Data Source" 
---
---
The first step in configuring a card is to define the data that needs to be displayed. This data can be in the form of a Variable or another Widget.

## Variable Source

Setting the data source to a variable will facilitate following scenarios:

- List data from Services like a Database, Web Service, Java Service;
- List values stored in a Custom (Model) Variable.

When you select a service, a variable will be created automatically by the platform. You can use existing or predefined variables, too. The behavior of data displayed will be defined by the Variable/Data Configuration properties. These properties are at the Variable level and can be configured them only when creating a new variable. You can modify the properties from the [variable dialog](/learn/assets/var_sel.png).

Of particular interest are:

- **Records per request** - this is the number of records that will be displayed on a page. Configure the Pagination property to enable user navigation to various pages of data;
- **Update data on input change** - this property defines when the data displayed will be refreshed. When enabled the data is reloaded whenever the input to the Variable (in the form of filter fields for Live and parameter values for Service Variable) changes;
- **Request data on page load** - enabling this property will ensure that the data within the data table is loaded at the time of page load.

## Widget Source

Widgets can be a source of data in some cases. For example, you might want to display the results from a Live Filter or more details of a selected row/item from a Data Table or another List. Widget option will allow you to achieve this. Selecting Widget as the data source will display the various options available.

[![](/learn/assets/cards-data.png)](/learn/assets/cards-data.png)


