---
title: "Live Filter - Field Configuration"
id: ""
---

### Configure filter fields display options

**Filter Fields** can be set from the _Fields_ tab of **Advanced Settings** property. Using this option you can select the columns for display on the Live Filter. Ordering can also be changed by using the buttons at the bottom of the designer window. Further, you can set:

- **Filter on Field** property can be used to set a cascading filter. For example for the values displayed in the city field should depend upon the state value selected, then for city field, filter on field property should be set to state.
- set the **widget** type to be _text, select, checkboxset or radioset_ and much more. For date-type field, the _date widget_ can be set and the _date pattern_ can be selected
- for numeric fields, it can be a **range filter**, in which case the user has to enter the range of values to set the filter on,
- **Conditional Class** can be specified for each field, similar to the way it is done for columns in a data table.
- You create **custom columns** by clicking on the ‘+’ icon. All the above-mentioned properties are available for custom columns.
- For a field of string type, an additional property called **Match Mode** will define how the filter should be applied. The values can be:
    -  _start_ for matching the beginning of the string,
    - _end_ for matching the ending of the string,
    - _anywhere_ for matching any part of the string, or
    - _exact_ for matching the entire string;
- **filter criteria** can be applied to referenced entities for Inline Editable and Quick Edit Data Tables ([see here for usage](http://pm.wavemaker.com/learn/how-tos/using-filter-criteria-for-a-data-and-live-widgets/)).

[![](../assets/filter_fields.png)](../assets/filter_fields.png)

< Configurations

Actions >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
    - [i. Data Source](/learn/app-development/widgets/datalive/livefilter/live-filter-data-source/)
    - [ii. Layouts](/learn/app-development/widgets/datalive/livefilter/livefilter-layouts/)
    - [iii. Configuration](/learn/app-development/widgets/datalive/livefilter/filter-configurations/)
    - [iv. Field Configuration](/learn/app-development/widgets/datalive/livefilter/livefilter-field-configuration/)
    - [v. Actions](/learn/app-development/widgets/datalive/livefilter/livefilter-actions/)
    - [vi. Events & Methods](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/)
        - [○ Events](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/#events)
        - [○ Methods](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/#methods)
    - [vii. Use Cases](/learn/app-development/widgets/datalive/livefilter/livefilter-use-cases/)
