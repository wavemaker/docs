---
title: "Charts - Basic Usage"
id: "charts-basic-usage"
---

**1: Datasource & Type**

the data is imported and is ready to use follow these steps for chart creation.

1. to the page layout of your application and drag-and-drop the required chart widget. Here, we are creating a column chart.                                                                                                                                 ![](https://www.wavemaker.com../assets/chart_usage1.png)
2. the chart to the appropriate data source.
3. on the  next to the  Property and choose the appropriate variable for data binding. In this example, we are using the transformed data from a web service, Quandl imported earlier.

**2: Properties**

1. the values to be depicted on the x-axis and the y-axis. You can select multiple columns for the y-axis. You can add a caption for the axis, else by default the column names from the database table is taken as the caption. : You can not use string data for plotting on the y-axis. : For **and Pie Charts**, you can specify the Label and Value Data fields for representation instead of x- and y-axis.![](https://www.wavemaker.com../assets/chart_properties.png)
2. your application to see the data represented in the chart format.

**3: Aggregation & Group by**

will see how to use this functionality using the in-built **Database** which ships with WaveMaker Studio. Let us plot the number employees working in each city from the database.

1. the  property select  and select  as the  column and for  _by_ You can also use the _By_ property to set the column by which the data needs to be sorted. By default, it will be set to the Group by column selected.
2. values to be depicted on x- and y-axis are set to  and  columns respectively. These are the _by_ and _columns_ respectively.
3. the application to see the chart.

[5\. Chart Widgets](/learn/app-development/widgets/widget-library/#chart)

- [Chart Types](/learn/app-development/widgets/chart/chart-widget/#chart-types)
    - [Line Chart](/learn/app-development/widgets/chart/chart-widget/#line)
    - [Area Chart](/learn/app-development/widgets/chart/chart-widget/#area)
    - [Column Chart](/learn/app-development/widgets/chart/chart-widget/#column)
    - [Bar Chart](/learn/app-development/widgets/chart/chart-widget/#bar)
    - [Line Chart](/learn/app-development/widgets/chart/chart-widget/#line)
    - [Pie Chart](/learn/app-development/widgets/chart/chart-widget/#pie)
    - [Donut Chart](/learn/app-development/widgets/chart/chart-widget/#donut)
    - [Bubble Chart](/learn/app-development/widgets/chart/chart-widget/#bubble)
- [Features](/learn/app-development/widgets/chart/chart-widget/#features)
    - [Data Source](/learn/app-development/widgets/chart/chart-widget/#data)
    - [Layout](/learn/app-development/widgets/chart/chart-widget/#layout)
    - [Data Aggregation & Grouping](/learn/app-development/widgets/chart/chart-widget/#data-aggregation)
    - [User Interaction](/learn/app-development/widgets/chart/chart-widget/#user-interaction)
    - [User Selection](/learn/app-development/widgets/chart/chart-widget/#user-selection)
- [Use Cases](/learn/app-development/widgets/widget-library/#use-cases)
