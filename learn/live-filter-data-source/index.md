---
title: "Live Filter - Data Source"
id: "live-filter-data-source"
---

first step in configuring a Live Filter is to define the data that needs to be filtered upon. This data can be in the form of a Variable or another Widget.

### Source

binding will allow you to obtain filter fields from a database through Database CRUD Variables.

can either create a variable or use existing variables. The behavior of data displayed will be defined by the Variable/Data Configuration properties. These properties are at the Variable level, you can configure them only when creating a service; for existing variables, the properties set at the time of variable creation will be used. To modify these, you will have to go to [dialog](http://[supsystic-show-popup id=105]) and make changes. Of particular interest are:

- _per request_ - this is the number of records that will be displayed on a page. Configure the Pagination property to enable user navigation to various pages of data;
- _data on input change_ - this property defines when the data displayed will be refreshed. When enabled the data is reloaded whenever the input to the Variable in the form of filter fields changes;
- _data on page load_ - enabling this property will ensure that the data within the data table is loaded at the time of page load.

### Source

can be a source of data in some cases. For example, you might want to display the results from a Live Filter or more details of a selected row/item from a Data Table or List. Widget option will allow you to achieve this. Selecting Widget as the data source will display the various options available. Widget binding will allow you to show 1-many relationships eg Employees of a selected Department list item.

< Overview

\>

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
    - [Data Source](/learn/app-development/widgets/datalive/livefilter/live-filter-data-source/)
    - [Layouts](/learn/app-development/widgets/datalive/livefilter/livefilter-layouts/)
    - [Configuration](/learn/app-development/widgets/datalive/livefilter/filter-configurations/)
    - [Field Configuration](/learn/app-development/widgets/datalive/livefilter/livefilter-field-configuration/)
    - [Actions](/learn/app-development/widgets/datalive/livefilter/livefilter-actions/)
    - [Events & Methods](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/)
        - [Events](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/#events)
        - [Methods](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/#methods)
    - [Use Cases](/learn/app-development/widgets/datalive/livefilter/livefilter-use-cases/)
