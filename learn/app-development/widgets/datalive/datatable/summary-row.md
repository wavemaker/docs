---
title: "Data Table - Summary Row Function"
id: ""
sidebar_label: "Summary Row" 
---
---

When creating a datatable, a Summary Row Function can be used to add summary at the bottom of the table. This summary computed on the client side or on the server side.

Using Summary Row Function, you can summarize any number of columns. A table can also include more than one summary row. These methods to calculate the summary can use inbuilt javascript functions like sum, minimum, maximum, or custom logic can be implemented in another javascript function.

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
Page.DepartmentTable1Beforedatarender = function(widget, data, columns) {
    columns.name.setSummaryRowData('Total Budget');
};
```

#### Multiple Summary Rows
Call **setSummaryRowData** on the column where you want to set the summary rows data and pass an array of values.

```js
Page.StudentAttendenceTable1Beforedatarender = function(widget, data, columns) {
    const classesAggregate = columns.classes.aggregate;

    columns.subject.setSummaryRowData([
        'Total classes attended',
        'Attendence percentage'
    ]);
    columns.classes.setSummaryRowData([
        classesAggregate.sum(),
        classesAggregate.percent(500) + '%'
    ]);
};
```
[![](/learn/assets/datatable_summaryrow1.png)](/learn/assets/datatable_summaryrow1.png)

#### Summary Row with Aggregate Function
Create an aggregate function instance and call the inbuilt aggregate functions on the column **setSummaryRowData**.

```js
Page.DepartmentTable1Beforedatarender = function(widget, data, columns) {
    const budgetAggregate = columns.budget.aggregate;

    columns.name.setSummaryRowData('Total Budget');
    columns.budget.setSummaryRowData(budgetAggregate.sum());
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
Page.DepartmentTable1Beforedatarender = function(widget, data, columns) {
    const budgetAggregate = columns.budget.aggregate;
    columns.budget.setSummaryRowData(budgetAggregate.sum());
};
```

### Custom Functions with aggregation logic

#### Summary Row Custom Function
Call custom function and return data in **setSummaryRowData** on the column where you want to set the summary row data.

```js
Page.DepartmentTable1Beforedatarender = function(widget, data, columns) {
    columns.name.setSummaryRowData('Result');
    columns.result.setSummaryRowData(calculateResult(data));

    function calculateResult(data) {
        let result = 0;
        data.forEach(item => {
            This.result = item.result > 50 ? item.result + this.result : this.result;
        });
        return result;
    }
};
```

#### Summary Row Custom Asynchronous Function
Call custom function and return promise in **setSummaryRowData** on the column where you want to set the summary row data.

```js
Page.DepartmentTable1Beforedatarender = function(widget, data, columns) {
    columns.name.setSummaryRowData('Result');
    columns.result.setSummaryRowData(calculateResult());

    function calculateResult() {
        return new Promise(function(resolve, reject) {
            Page.Variables.result.invoke().then((data) => {
                resolve(JSON.parse(data.body).result);
            });
        });
    }
};
```
[![](/learn/assets/datatable_summaryrow3.gif)](/learn/assets/datatable_summaryrow3.gif)

### Objects for custom styling

#### Summary Row Styling column
Return an object with keys value and class to display data and add styles associated to that class in **setSummaryRowData** on the column where you want to set the summary row data.

```js
Page.DepartmentTable1Beforedatarender = function(widget, data, columns) {
    const budgetAggregate = columns.budget.aggregate;

    columns.name.setSummaryRowData({
        value: 'Total Budget',
        class: 'bold-class'
    });
    columns.budget.setSummaryRowData(budgetAggregate.sum());
};
```
[![](/learn/assets/datatable_summaryrow4.png)](/learn/assets/datatable_summaryrow4.png)
