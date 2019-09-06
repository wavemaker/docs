---
title: "Charts - Basic Usage"
id: ""
---

**Step 1: Datasource & Type**

Once the data is imported and is ready to use follow these steps for chart creation.

1. Go to the page layout of your application and drag-and-drop the required chart widget. Here, we are creating a column chart.                                                                                                                                 ![](https://www.wavemaker.com../../../assets/chart_usage1.png)
2. Bind the chart to the appropriate data source.
3. Click on the _link _icon next to the _Value_ Property and choose the appropriate variable for data binding. In this example, we are using the transformed data from a web service, Quandl imported earlier.

**Step 2: Properties**

1. Select the values to be depicted on the x-axis and the y-axis. You can select multiple columns for the y-axis. You can add a caption for the axis, else by default the column names from the database table is taken as the caption. **Note**: You can not use string data for plotting on the y-axis. **Note**: For **Donut and Pie Charts**, you can specify the Label and Value Data fields for representation instead of x- and y-axis.![](https://www.wavemaker.com../../../assets/chart_properties.png)
2. Run your application to see the data represented in the chart format.

**Step 3: Aggregation & Group by**

We will see how to use this functionality using the in-built **HSQL Database** which ships with WaveMaker Studio. Let us plot the number employees working in each city from the database.

1. In the _Aggregation_ property select _count_ and select _eid_ as the _Aggregation_ column and _state_ for _Group by_. You can also use the _Order By_ property to set the column by which the data needs to be sorted. By default, it will be set to the Group by column selected.
2. The values to be depicted on x- and y-axis are set to _state_ and _eid_ columns respectively. These are the _group by_ and _aggregation columns_ respectively.
3. Run the application to see the chart.

[5\. Chart Widgets](/learn/app-development/widgets/widget-library/#chart)

- [i. Chart Types](/learn/app-development/widgets/chart/chart-widget/#chart-types)
    - [○ Line Chart](/learn/app-development/widgets/chart/chart-widget/#line)
    - [○ Area Chart](/learn/app-development/widgets/chart/chart-widget/#area)
    - [○ Column Chart](/learn/app-development/widgets/chart/chart-widget/#column)
    - [○ Bar Chart](/learn/app-development/widgets/chart/chart-widget/#bar)
    - [○ Line Chart](/learn/app-development/widgets/chart/chart-widget/#line)
    - [○ Pie Chart](/learn/app-development/widgets/chart/chart-widget/#pie)
    - [○ Donut Chart](/learn/app-development/widgets/chart/chart-widget/#donut)
    - [○ Bubble Chart](/learn/app-development/widgets/chart/chart-widget/#bubble)
- [ii. Features](/learn/app-development/widgets/chart/chart-widget/#features)
    - [○ Data Source](/learn/app-development/widgets/chart/chart-widget/#data)
    - [○ Layout](/learn/app-development/widgets/chart/chart-widget/#layout)
    - [○ Data Aggregation & Grouping](/learn/app-development/widgets/chart/chart-widget/#data-aggregation)
    - [○ User Interaction](/learn/app-development/widgets/chart/chart-widget/#user-interaction)
    - [○ User Selection](/learn/app-development/widgets/chart/chart-widget/#user-selection)
- [iii. Use Cases](/learn/app-development/widgets/widget-library/#use-cases)
