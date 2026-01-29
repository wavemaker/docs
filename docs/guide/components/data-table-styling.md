---
title: "Custom Styling Data Table Columns & Rows"
id: "data-table-styling"
last_update: { author: "WaveMaker" }
---
**Scenario**: Set the display style of the entire column or row in a Data Table and based upon the value of a particular field. We will customise the Data Table for the following:

- Department Budget column to be displayed in pink color
- Zip column to be in blue when the value is 90028 _(row.zip=='90028')_
- Row to be displayed as warning when the value is New York _(row.city=='New York')_

The following style classes have been defined from the Style tab:

```css
.pink {
    background-color: #F8E0E0;
}
.blue {
    background-color: #CEF6F5;
}
.green {
    background-color: #D8F6CE;
}
```

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTwZeGOaeN9tvLmf-G7QlbIrdRuaig6QgAhoAfR5p9bUZEqkpnJXZXRrQV65JjDbyno75KWSxSCeL2i/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

[Data Table Use Cases](../../user-interfaces/web/components/angular-components/datalive/datatable/data-table-use-cases.md)

- [1. Basic Table Usage](../../user-interfaces/web/components/angular-components/datalive/datatable/data-table-basic-usage.md)
- [2. How to customise table actions](./data-table-actions.md)
- [3. How to represent data table columns using widgets](./data-table-widget-representations.md)
- [4. How to format data table column](./data-table-format-options.md)
- [5. How to apply styles (generic and conditional) to data table](./data-table-styling.md)
- [6. How to view master-detail record using a data table](./view-master-detail-data-records-using-data-table.md)
- [7. How to add master-detail record using a data table](./add-master-detail-records-using-data-table.md)
- [8. How to export data using a data table](./export-data-data-table.md)
- [9. How to create a dynamic data table](./dynamic-data-tables.md)
- [10. How to bind column of a data table to query variable](./data-table-column-bound-query.md)
