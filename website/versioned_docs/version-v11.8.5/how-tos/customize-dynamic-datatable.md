---
title: "Customize Dynamic Data Table"
id: "customize-dynamic-datatable"
sidebar_label: "Customize Dynamic Datatable" 
---
---

Dynamic Datatable should be used where the datasource is dynamic i.e., number of columns, its types and column names etc. change depending on a specific condition.

## Making Dynamic Datatable as Editable table

For making dynamic datatable to work as editable datatable, then add below code in the markup.

```js
<wm-table-action widget-type="button" key="addNewRow" display-name="New" iconclass="wi wi-plus" show="true" class="btn-primary" action="addNewRow()" shortcutkey=""></wm-table-action>
<wm-table-row-action key="updaterow" display-name="" title="Edit" iconclass="wi wi-pencil" show="true" class="btn-transparent" action="editRow($event)"></wm-table-row-action>
<wm-table-row-action key="deleterow" display-name="" title="Delete" iconclass="wi wi-trash" show="true" class="btn-transparent" action="deleteRow($event)"></wm-table-row-action>
```

Add these add New, edit, delete actions in markup of the `<wm-table >{CodeHere}</wm-table>` tags.

## Customize Column Names

If the column names has any special chars, then the special characters will be removed for the column name by default. If one wants to display the column name as it is, then write the below code in onBeforedatarender event.

**Example:**
If the column name is **0-100** then for the datatable the column name in the header will look like **0100** by default. To override this behaviour use below code.

```js
Page.dynamicdataTable1Beforedatarender = function(widget, data, columns) {
    //The below code will iterate all the columns and sets the column caption same as key
    for (const key in columns) {
        columns[key].caption = key;
    }
};
```

## Styling Cell in the datatable

To apply conditional style for the cell based on the row data then write the below code in onBeforedatarender event.

```js
Page.dynamicdataTable1Beforedatarender = function(widget, data, columns) {
    //Applying conditional class for the column with column Name: '500-600'
    if (widget.columns['500-600']) {
        widget.columns['500-600']['col-ng-class'] = "{'mystyle':row['500-600']=='Rejected'}";
    }
};
```
In the given example, if the cell value is `Rejected` then we are applying below styles.
```js
.rowstyle{
    background-color: red
}
```
**Example:**
[![](/learn/assets/dynamictable/dynamictablecellstyle.png)](/learn/assets/dynamictable/dynamictablecellstyle.png)

## Apply Conditional Styles for row

To apply conditional styles for the row data then write the below code in onBeforedatarender event.

```js
Page.dynamicdataTable1Beforedatarender = function(widget, data, columns) {
    //Applying conditional class for complete row
    widget.rowngclass = "{'warning':row.CITY=='New York', 'danger':row.CITY=='Atlanta'}";
};
```

[![](/learn/assets/dynamictable/conditionalrow.png)](/learn/assets/dynamictable/conditionalrow.png)

## Customize Edit Mode widgets

As the metadata will be dynamic for the dynamic datatable, the edit mode widgets will be text boxes by default. If we want to customise the widgets as date or number widgets etc., based on the data the below code should be added in onBeforedatarender event.

```js
Page.dynamicdataTable1Beforedatarender = function(widget, data, columns) {
    //Changing the widget in edit mode for column '0-100'
    if (widget.columns['0-100']) {
        widget.columns['0-100']['edit-widget-type'] = "date";
    }
    //Changing the widget in edit mode for column Street
    if (widget.columns.STREET) {
        widget.columns.STREET['edit-widget-type'] = "textarea";
    }
};
```

## Apply View Mode Customizations

To apply customizations on the view mode data in the dynamic datatable, add below code in onBeforedatarender event.

**Example:**

For Numeric data `98988.909` to be displayed as `98,988.91`(apply 2 decimal fractions and also display data as number).

For data `1973-10-21` to be displayed as `1973, Oct 21`.

```js
Page.dynamicdataTable1Beforedatarender = function(widget, data, columns) {
    //Applying display formats for columns in view mode
    if (widget.columns.BUDGET) {
        widget.columns.BUDGET].formatpattern = "numberToString";
        widget.columns.BUDGET.fractionsize = 2;
    }

    if (widget.columns.BIRTHDATE) {
        widget.columns.BIRTHDATE.formatpattern = "toDate";
        widget.columns.BIRTHDATE.datepattern = "yyyy, MMM dd";
    }
};
```

[![](/learn/assets/dynamictable/customiseviewmode.png)](/learn/assets/dynamictable/customiseviewmode.png)