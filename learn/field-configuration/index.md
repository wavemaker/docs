---
title: "Data Table - Field Configuration"
id: ""
---

The following features are available from the **Advanced Settings** property of the Data Table.

### Configure column display options

The columns or fields to be displayed in a Data Table can be further configured:

1. 1. to be displayed based upon the platform i.e. for desktop and mobile. This enables you to keep your mobile display clutter free, you can choose to display only limited columns or fields for mobile platform;
    2. the order can also be specified as different from the underlying data source ordering by using the arrow keys given below the column listing;
    3. group columns under a common heading;
    4. add a custom column;
    5. to choose a representational view based upon the field content, like picture field can be depicted as an _image_ for the picurl field, boolean fields as a _checkbox_ etc.;
    6. to define the display format of the column or field, based upon the content including date, currency, decimal and many more formats;
    7. to style the fields for a better readability and for highlighting a particular value;
    8. to restrict the display based upon the security roles;
    9. filter criteria can be applied to referenced entities for Inline Editable and Quick Edit Data Tables ([see here for usage](http://pm.wavemaker.com/learn/how-tos/using-filter-criteria-for-a-data-and-live-widgets/)).

All the above-mentioned options are available from the **Columns tab** of the **Advanced Settings** property.

[![](../assets/AS_fields.png)](../assets/AS_fields.png)

### Column Grouping

This feature helps you group columns under a heading for better readability and convenience. [![](../assets/group_run.png)](../assets/group_run.png)

1. Use the **Add Group** button under _Columns_ tab of _Advanced Settings_. This will allow you to give a title to the group. [![](../assets/group_new.png)](../assets/group_new.png)
2. **Add columns**  to the group by either
    - using the _drag_ or  _reorder_ option from the column tree on the left panel within the  Advanced Settings dialog, or
    - by selecting the _Group_ from the Basic properties tab [![](../assets/group_add.png)](../assets/group_add.png)
3. You can also have nested groups by selecting the parent group while adding the group or use the drag feature. [![](../assets/group_nested.png)](../assets/group_nested.png) [![](../assets/group_nested_final.png)](../assets/group_nested_final.png)

### View Mode Options

[![](../assets/dt_cols_view.png)](../assets/dt_cols_view.png)

#### Widget Representation

##### Anchor Mode Options

- _Widget Class_ - style class for the entire column
- _Conditional Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Widget Title_ - title to be displayed on the button at run-time, set by default to the column name, can be edited as per the needs
- _Widget Hyperlink_ - link to the page to be opened on click.
- _Value Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

##### Button Mode Options

- _Widget Class_ - style class for the entire column
- _Conditional Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Widget Title_ - title to be displayed on the button at run-time, set by default to the column name, can be edited as per the needs
- _Widget Icon_ - icon name, including the class name, for example, glyphicon glyphicon-home
- _Widget Action_ - method, as defined in Script, to be invoked on the click event of the button. The method will be auto-generated upon the selection of JavaScript option with a parameter set to _selectedItem_.
- _Value Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

##### Checkbox Mode Options

- _Widget Class_ - style class for the entire column
- _Conditional Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Disable_ - code example given to disable the checkbox in the table
- _Value Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

##### Icon Mode Options

- _Widget Class_ - style class for the entire column
- _Conditional Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Widget Title_ - title to be displayed on the button at run-time, set by default to the column name, can be edited as per the needs
- _Widget Icon_ - icon name, including the class name, for example, glyphicon glyphicon-home
- _Icon Position_ - to set the position of the Icon; choose Left (default) or Right
- _Value Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

#####  Image Mode Options

- _Widget Class_ - style class for the entire column
- _Conditional Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Image Source_ - by default it is populated with the column name, it can be replaced with any external source path.
- _Value Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

##### Label Mode Options

- _Widget Class_ - style class for the entire column
- _Conditional Widget Class_ - specify the style class name to be applied to select rows satisfying the given condition.
- _Widget Title_ - title to be displayed on the button at run-time, set by default to the column name, can be edited as per the needs
- _Value Expression_ - You can write a custom expression to change the display setting for a table column. The expression needs to follow AngularJS conventions for binding. A sample expression is given which can be enhanced as per the needs of the application.

[See here for usage example](/learn/how-tos/data-table-widget-representations/)

#### Format Options

[![](../assets/dt_cols_format.png)](../assets/dt_cols_format.png)

**Format** Options enables you to define the display format of the column at runtime. The options include _toDate, toCurrency, prefix, suffix, and srtingtoNumber_. Be aware that these format types selected are only for display purpose. During runtime, edit row will display the values as defined in the data source.

##### Prefix/Suffix Options:

- Prefix/Suffix value can be specified

##### Currency Options:

- Symbol by name can be selected from the drop-down list and the currency symbol will be inserted in the column
- Fraction Size can be set

##### Date Options:

- Date Pattern can be selected from the drop-down list

##### Number Options:

- Fraction Size can be set

[See here for usage example](/learn/how-tos/data-table-format/)

### Edit Mode Options

For _Quick Edit_ and _Inline Editable_ Table, you can specify the Display Format and Validation criteria for the columns (non-primary key) when the row is in **Edit Mode**.

1. **Display options** include:
    
    - - _Widget_ - text, select, datetime etc.,
        - _Placeholder_
        - _Default Value_
        - _Filter on Field_ to set cascading data, i.e., restrict the display values for the current field based on the value of the field set for this property. For example, the values displayed in the city field should depend upon the value selected for state field; then correspondingly for city field, filter on field property should be set to state.
    
    [![](../assets/dt_cols_edit.png)](../assets/dt_cols_edit.png)
2. **Validation options**:
    
    - - **Required**: whether the column entry is mandatory or not;
        - **Validations**: depending upon the data type of the column you have the option to set
            - _maximum character_ for text type,
            - _minimum length_ and _maximum length_ for number fields and
            - _regular expression for validations_ for text and numeric fields.
        - **Validation Message** to be displayed if the field fails the validation specified. in case of validation failure, an error icon is displayed, hovering over which will display the validation message.
    
    [![](../assets/dt_cols_validations.png)](../assets/dt_cols_validations.png)

### Export Options

In the case where the export option is set by selecting the Export Format as EXCEL or CSV, the **Export Options** can be used to customize the export values by setting the Value Expressions. This is particularly useful to display name column as a combined value like 'firstname+lastname' while export.

NOTE: Value Expression **has** to be set for custom fields.

[![](../assets/dt_cols_export.png)](../assets/dt_cols_export.png)

### Filter Mode Options

In the case, Filter Option is set to Row while designing the Data Table, then the **Filter Options** can be enabled or disabled for the specific column.

[![](../assets/dt_cols_filter.png)](../assets/dt_cols_filter.png)

### Styling Options

**Styles** can be used to change the styles for the selected field:

- **Width** for the column which can be specified in terms of the **Width Unit** - _px_ or _%_
- **Text Alignment** of the column content
- **Background** color for the column can be set
- CSS **Class** for styling the field, this needs to be under the Style tab of the Page
- **Conditional Class** for custom styling the column based on a condition

[See here for usage example](/learn/how-tos/data-table-styling/)

### Security Options

**Role-based access** can be set to enforce security at column-level: If the [security has been enabled](http://[supsystic-show-popup id=111]) in your app, then you can define the app role which has access to a specific column.

[![](../assets/dt_security.png)](../assets/dt_security.png)

< Configuration

Actions >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
    - [i. Data Source](/learn/app-development/widgets/datalive/datatable/data-source/)
        - [○ Variable Source](/learn/app-development/widgets/datalive/datatable/data-source/#variable-source)
        - [○ Widget Source](/learn/app-development/widgets/datalive/datatable/data-source/#widget-source)
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
        - [○ Column Grouping](#grouping)
        - [○ View Mode](#view-mode)
        - [○ Edit Mode](#edit-mode)
        - [○ Export Options](#export)
        - [○ Filter Options](#filtering)
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
