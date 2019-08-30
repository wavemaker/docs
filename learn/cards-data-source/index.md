---
title: "Cards - Data Source"
id: ""
---

The first step in configuring a card is to define the data that needs to be displayed. This data can be in the form of a Variable or another Widget.

### Variable Source

Setting the data source to a variable will facilitate following scenarios:

- - List data from Services like a Database, Web Service, Java Service;
    - List values stored in a Custom (Model) Variable.

When you select a service, a variable will be created automatically by the platform. You can use existing or predefined variables, too. The behavior of data displayed will be defined by the Variable/Data Configuration properties. These properties are at the Variable level and can be configured them only when creating a new variable. You can modify the properties from the [variable dialog](http://[supsystic-show-popup id=105]).

Of particular interest are:

- _Records per request_ - this is the number of records that will be displayed on a page. Configure the Pagination property to enable user navigation to various pages of data;
- _Update data on input change_ - this property defines when the data displayed will be refreshed. When enabled the data is reloaded whenever the input to the Variable (in the form of filter fields for Live and parameter values for Service Variable) changes;
- _Request data on page load_ - enabling this property will ensure that the data within the data table is loaded at the time of page load.

### Widget Source

Widgets can be a source of data in some cases. For example, you might want to display the results from a Live Filter or more details of a selected row/item from a Data Table or another List. Widget option will allow you to achieve this. Selecting Widget as the data source will display the various options available.

[![](../assets/cards-data.png)](../assets/cards-data.png)

< Overview

Templates >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
    - [i. Data Source](/learn/app-development/widgets/datalive/cards/cards-data-source/)
        - ○ [Variable Source](#variable-source)
        - ○ [Widget Source](#widget-source)
    - [ii. Templates](/learn/app-development/widgets/datalive/cards/cards-templates/)
        - [○ Profile Cards](/learn/app-development/widgets/datalive/cards/cards-templates/#profile)
        - [○ Feed Cards](/learn/app-development/widgets/datalive/cards/cards-templates/#feed)
        - [○ Product Cards](/learn/app-development/widgets/datalive/cards/cards-templates/#product)
    - [iii. Card Configuration](/learn/app-development/widgets/datalive/cards/card-configuration/)
        - [○ Items per Row](/learn/app-development/widgets/datalive/cards/card-configuration/#items-per-row)
        - [○ Grouping & Ordering](/learn/app-development/widgets/datalive/cards/card-configuration/#grouping-ordering)
        - [○ Pagination](/learn/app-development/widgets/datalive/cards/card-configuration/#pagin)
        - [○ Message](/learn/app-development/widgets/datalive/cards/card-configuration/#message)
    - [iv. Card Behavior Settings](/learn/app-development/widgets/datalive/cards/card-behavior-settings/)
        - [○ Selection Limit](/learn/app-development/widgets/datalive/cards/card-behavior-settings/#selection)
        - [○ Multiselect](/learn/app-development/widgets/datalive/cards/card-behavior-settings/#multiselect)
        - [○ Item Reordering](/learn/app-development/widgets/datalive/cards/card-behavior-settings/#item-reordering)
    - [v. Properties, Events & Methods](/learn/app-development/widgets/datalive/cards/cards-properties-events-methods/)
        - [○ Properties](/learn/app-development/widgets/datalive/cards/cards-properties-events-methods/#properties)
        - [○ Events](/learn/app-development/widgets/datalive/cards/cards-properties-events-methods/#events)
        - [○ Methods](/learn/app-development/widgets/datalive/cards/cards-properties-events-methods/#methods)
    - [vi. Use Cases](/learn/app-development/widgets/datalive/cards/card-use-cases/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
