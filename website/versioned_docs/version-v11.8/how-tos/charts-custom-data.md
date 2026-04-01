---
title: "Charts - Custom Data"
id: "charts-custom-data"
sidebar_label: "Custom Data"
---
---

**Custom Data Manipulation**: Instead of using the existing columns to be plotted on the x- and y-axis ([see here to know how](/learn/how-tos/charts-displaying-user-selection-another-widget/)), you can plot custom data as an aggregation or sum of the columns. For example, from the Department table of the sample hrdb, we want to plot the chart with average of all four quarters data (Q1, Q2, Q3, and Q4)

1. Drag and drop chart widget, bind the Dataset Value property to the [Database CRUD Variable](/learn/assets/var_sel.png) (say, HrdbDepartmentData) with source as hrdb, and type as Department
2. Enter the following script in the above-mentioned variable _onSuccess_ event. This script will calculate the average of budget value and set it to the chart data set.

```js
App.HrdbDepartmentDataonSuccess = function(variable, data) {
        var aggregatedData = [];

        for (var i = 0; i < data.length; i++) {
            var deptObj = data[i],
                avgBudget = (deptObj.q1 + deptObj.q2 + deptObj.q3 + deptObj.q4) / 4;

            //Constructing aggregated data of all quarters
            aggregatedData[i] = {
                'name': deptObj.name,
                'quaterBudget': avgBudget
            };
        }
        //Update the variable that is bound to chart
        App.Variables.ChartData.dataSet = aggregatedData;
    };
```

## See Also 

[Chart Widget Cases](/learn/app-development/widgets/chart/chart-widget/#use-cases)  
[How to capture user selection](/learn/how-tos/charts-displaying-user-selection-another-widget/)  
[How to handling dynamic data](/learn/how-tos/charts-handling-dynamic-data/)
