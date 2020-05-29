---
title: "Data Table - Summary Row Function"
id: ""
sidebar_label: "Summary Row" 
---
---

When creating a data table, Summary Row Function can be used to add summary at the bottom of the table. This summary can be computed on the client side or on the server side.

Using Summary Row Function, you can summarize any number of columns. A table can also include more than one summary row. Visibility of the summary row is governed by the visibility rules set upon the columns being summarised. To calculate the summary inbuilt javascript functions like sum, minimum, maximum, or custom logic can be used or another javascript function can be supplied.

You can set summary row using the below exposed function on a column in Beforedatarender event callback:

- `setSummaryRowData`

## setSummaryRowData

WaveMaker provides aggregate functions which can be referenced and used in the setSummaryRowData method for using inbuilt aggregate functions for DataTable columns. This method accepts a single or an array of:

- Plain values and Built in aggregation functions
- Custom Functions with aggregation logic
- Objects for custom styling

### Plain Values and Built in aggregation functions

#### Single Summary Row
Call **setSummaryRowData** on the column where you want to set the summary row data

```js
Page.GroceriesTable1Beforedatarender = function(widget, data, columns) {
    columns.item.setSummaryRowData('Net Total');
    columns.netAmount.setSummaryRowData('670');
};
```
[![](/learn/assets/datatable_summaryrow1.png)](/learn/assets/datatable_summaryrow1.png)

#### Multiple Summary Rows
Call **setSummaryRowData** on the column where you want to set the summary rows data and pass an array of values.

```js
Page.GroceriesTable1Beforedatarender = function(widget, data, columns) {
    columns.item.setSummaryRowData([
        'Net Total',
        'Discount'
    ]);
    columns.netAmount.setSummaryRowData([
        '670',
        '2%'
    ]);
};
```
[![](/learn/assets/datatable_summaryrow2.png)](/learn/assets/datatable_summaryrow2.png)

#### Summary Row with Aggregate Function and Variables
Create an aggregate function instance and call the inbuilt aggregate functions on the column **setSummaryRowData**.

```js
Page.GroceriesTable1Beforedatarender = function(widget, data, columns) {
    const DISCOUNT = Page.Variables.Discount.dataSet.dataValue;
    const netAmountAggregate = columns.netAmount.aggregate;

    columns.item.setSummaryRowData([
        'Net Total',
        'Discount'
    ]);
    columns.netAmount.setSummaryRowData([
        netAmountAggregate.sum(),
        DISCOUNT + '%'
    ]);
};
```
[![](/learn/assets/datatable_summaryrow2.png)](/learn/assets/datatable_summaryrow2.png)

#### Built In Aggregate functions

Column contains the below built in aggregate functions which can be used in summary rows.

| Function | Parameters |
|----|----|
| sum | NA |
| average | NA |
| count | NA |
| minimum | NA |
| maximum | NA |
| percent | Total value to calculate percentage |

The above aggregate functions can be accessed using the `aggregate` object on the columns as shown below.

```js
Page.<TableName>Beforedatarender = function(widget, data, columns) {
    const columnAggregate = columns.<columnName>.aggregate;
    columns.<columnName>.setSummaryRowData(columnAggregate.sum());
};
```

### Custom Functions with aggregation logic

#### Summary Row Custom Function
Call custom function and return data in **setSummaryRowData** on the column where you want to set the summary row data.

```js
Page.GroceriesTable1Beforedatarender = function(widget, data, columns) {
    const DISCOUNT = Page.Variables.Discount.dataSet.dataValue;
    const netAmountAggregate = columns.netAmount.aggregate;

    columns.item.setSummaryRowData([
        'Net Total',
        'Discount',
        'Total'
    ]);
    columns.netAmount.setSummaryRowData([
        netAmountAggregate.sum(),
        DISCOUNT + '%',
        calculateTotal()
    ]);

    function calculateTotal() {
        let total = netAmountAggregate.sum();
        return total - ((total / 100) * DISCOUNT);
    }
};
```
[![](/learn/assets/datatable_summaryrow3.png)](/learn/assets/datatable_summaryrow3.png)

### Styling the Summary row

Return an object with keys value and class to display data and add styles associated to that class in **setSummaryRowData** on the column where you want to set the summary row data.

```js
Page.GroceriesTable1Beforedatarender = function(widget, data, columns) {
    const DISCOUNT = Page.Variables.Discount.dataSet.dataValue;
    const netAmountAggregate = columns.netAmount.aggregate;

    columns.item.setSummaryRowData([
        'Net Total',
        'Discount',
        {
            value: 'Total Budget',
            class: 'bold-class'
        }
    ]);
    columns.netAmount.setSummaryRowData([
        netAmountAggregate.sum(),
        DISCOUNT + '%',
        {
            value: calculateTotal(),
            class: 'bold-class'
        }
    ]);

    function calculateTotal() {
        let total = netAmountAggregate.sum();
        return total - ((total / 100) * DISCOUNT);
    }
};
```
[![](/learn/assets/datatable_summaryrow4.png)](/learn/assets/datatable_summaryrow4.png)

#### Summary Row Custom Asynchronous Function

Javascript function that calculates the summary can invoke an API to return result of calculation executed on the server side. This API could be application's business logic. For example, when calculating Discount being applied, business logic may assign the discount value based on the loggedin user or amount money spent etc. In such a case, the javascript function will return a ```Promise``` after calling the API.

Here is an example of custom javascript function that invokes an API and returns promise to the ```setSummaryRowData```

```js
Page.GroceriesTable1Beforedatarender = function(widget, data, columns) {
    const DISCOUNT = Page.Variables.Discount.dataSet.dataValue;
    const netAmountAggregate = columns.netAmount.aggregate;

    columns.item.setSummaryRowData([
        'Net Total',
        'Discount',
        'Total'
    ]);
    columns.netAmount.setSummaryRowData([
        netAmountAggregate.sum(),
        DISCOUNT + '%',
        calculateTotal()
    ]);

    function calculateTotal() {
        return new Promise(function(resolve, reject) {
            Page.Variables.Total.invoke().then((data) => {
                resolve(JSON.parse(data.body).budget);
            });
        });
    }
};
```
[![](/learn/assets/datatable_summaryrow5.gif)](/learn/assets/datatable_summaryrow5.gif)

:::note
The Summary row columns visibility is dependent on the actual columns visibility. If a column is set to not show in mobile/desktop devices the respeective summary row columns will also be hidden. Using authorisation setting in WaveMaker, a column could be hidden for specific roles of users. In this case, the summary row which depends on that column is also not visible.
:::
