---
title: "Data Table - Data Source"
id: ""
---

The first step in configuring a data table is to define the data that needs to be displayed. This data can be in the form of Services, Exiting Variable or another Widget.

### Variable Source

Variable binding will allow you to

- Perform CRUD operations on a database through database CRUD Variables.
- List the results from a Web Service, Java Service or a Query through Variables based on the APIs exposed by the services (edit options are not available for Data Table bound to such service),
- List values stored in a Custom or Model Variables (edit options are not available in this case, too).

You can either create a new variable or use existing variables. The behavior of data displayed will be defined by the Variable/Data Configuration properties. These properties are at the Variable level, you can configure them only when creating a new variable; for existing variables, the properties set at the time of variable creation will be used. To modify these, you will have to go to [variable dialog](http://[supsystic-show-popup id=105]) and make changes. Of particular interest are:

- _Records per request_ - this is the number of records that will be displayed on a page. Configure the Pagination property to enable user navigation to various pages of data;
- _Update data on input change_ - this property defines when the data displayed will be refreshed. When enabled the data is reloaded whenever the input to the Variable (in the form of filter fields for Live and parameter values for Service Variable) changes;
- _Request data on page load_ - enabling this property will ensure that the data within the data table is loaded at the time of page load.

### Widget Source

Widgets can be a source of data in some cases. For example, you might want to display the results from a Live Filter or more details of a selected row/item from a List or another Data Table. Widget option will allow you to achieve this. Selecting Widget as the data source will display the various options available. Widget binding will allow you to show 1-many relationships eg Employees of a selected Department list item.

[![](../../../../assets/dt_data.png)](../../../../assets/dt_data.png)

< Overview

Layouts >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
    - [i. Data Source](/learn/app-development/widgets/datalive/datatable/data-source/)
        - [○ Variable Source](#variable-source)
        - [○ Widget Source](#widget-source)
    - [ii. Layouts](/learn/app-development/widgets/datalive/datatable/layouts/)
        - [○ Editable with Form as Dialog](/learn/app-development/widgets/datalive/datatable/layouts/#efd)
        - [○ Editable with Form given below the Table](/learn/app-development/widgets/datalive/datatable/layouts/#efb)
        - [○ Inline Editable](/learn/app-development/widgets/datalive/datatable/layouts/#edi)
        - [○ Quick Edit](/learn/app-development/widgets/datalive/datatable/layouts/#edq)
        - [○ Read-Only with details given below](/learn/app-development/widgets/datalive/datatable/layouts/#rof)
        - [○ Read-only Simple View](/learn/app-development/widgets/datalive/datatable/layouts/#ros)
    - [iii. Table Configuration](/learn/app-development/widgets/datalive/datatable/table-configuration/)
        - [○ Search & Filter](/learn/app-development/widgets/datalive/datatable/table-configuration/#search-n-filter)
        - [○ Sorting](/learn/app-development/widgets/datalive/datatable/table-configuration/#sorting)
        - [○ Selection](/learn/app-development/widgets/datalive/datatable/table-configuration/#selection)
        - [○ Pagination](/learn/app-development/widgets/datalive/datatable/table-configuration/#pagin)
        - [○ Export Data](/learn/app-development/widgets/datalive/datatable/table-configuration/#export-data)
        - [○ Message](/learn/app-development/widgets/datalive/datatable/table-configuration/#message)
        - [○ Row Styling](/learn/app-development/widgets/datalive/datatable/table-configuration/#row-style)
    - [iv. Field Configuration](/learn/app-development/widgets/datalive/datatable/field-configuration/)
        - [○ Column Grouping](/learn/app-development/widgets/datalive/datatable/field-configuration/#grouping)
        - [○ View Mode](/learn/app-development/widgets/datalive/datatable/field-configuration/#view-mode)
        - [○ Edit Mode](/learn/app-development/widgets/datalive/datatable/field-configuration/#edit-mode)
    - [v. Actions](/learn/app-development/widgets/datalive/datatable/actions/)
        - [○ Table Specific Actions](/learn/app-development/widgets/datalive/datatable/actions/#table-actions)
        - [○ Row Specific Actions](/learn/app-development/widgets/datalive/datatable/actions/#row-actions)
        - [○ Actions Visibility](/learn/app-development/widgets/datalive/datatable/actions/#actions-visibility)
        - [○ Actions Layout](/learn/app-development/widgets/datalive/datatable/actions/#actions-layout)
    - [vi. Events & Methods](/learn/app-development/widgets/datalive/datatable/datatable-events-methods/)
        - [○ Events](/learn/app-development/widgets/datalive/datatable/datatable-events-methods/#events)
        - [○ Methods](/learn/app-development/widgets/datalive/datatable/datatable-events-methods/#methods)
    - [vii.Use Cases](/learn/app-development/widgets/datalive/datatable/data-table-use-cases/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
