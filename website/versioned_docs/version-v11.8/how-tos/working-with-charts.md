---
title: "Working with Charts"
id: "working-with-charts"
---
---

Follow these steps for chart creation once the data is imported and is ready to use.

1. Go to the page layout of your application and drag-and-drop the required chart widget. Here, we are creating a column chart.
2. Bind the chart to the appropriate data source.
3. Click on the _link _icon next to the _Value_ Property and choose the appropriate variable for data binding. In this example, we are using the transformed data from a web service, Quandl imported earlier.

## X-axis and Y-axis

Select the values to be depicted on the x-axis and the y-axis. You can select multiple columns for y-axis. You can add a caption for the axis, else by default the column names from the database table is taken as the caption. 

:::note
You can not use string data for plotting on the y-axis.
:::

:::note
For **Donut and Pie Charts**, you can specify the Label and Value Data fields for representation instead of x- and y-axis.
:::

Run your application to see the data represented in the chart format. We will see how to use this functionality using the inbuilt **HSQL Database** which ships with WaveMaker Studio. 

### Plotting numbers

Let us plot the number employees working at each city from the database.
    
1. In the _Aggregation _ property select _count_ and select _eid_ as the _Aggregation_ column and _state_ for _Group by_. You can also use the _Order By_ property to set the column by which the data needs to be sorted. By default it will be set to the Group by column selected.
2. The values to be depicted on x- and y-axis are set to _state_ and _eid_ columns respectively. These are the _group by_ and _aggregation columns_ respectively.
3. Run the application to see the chart.
    
## Displaying User Selection in another Widget
    
Hovering over the chart shows the values corresponding to the nearest datapoint. These datapoints can be captured and used to bind to a widget for further display or computational purposes. Here we will see how:

1. We are using the _Department_ db which ships with the sample DB
2. We have designed the canvas with a _Grid Layout_ with a _Chart widget_, two _Label Widgets_ and a _List_ in each of the three rows.
3. Bind the chart widget to the Department dataset, and set x-axis to deptcode and y-axis to Q1, Q2, Q3 and Q4
4. Bind the Label widget to display the total budget as sum of Q1, Q2, Q3 and Q4 values from the selected item under chart widget using the Use Expression option
5. Run the app and click on one data point and see the total displayed in the label
6. Bind the LiveList to the selected item of the chart widget.
7. Run the and click on one data point and see the complete details displayed in the list.
