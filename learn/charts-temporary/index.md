---
title: "Charts Temporary"
id: ""
---

"A picture is worth a thousand words". To this end, WaveMaker gives you a tool to present your data in a pictorial form using the chart widgets. Using these widgets you can transform your data into either a line chart, column chart, pie chart, area chart, cumulative line chart, bar chart or a donut Chart. [![chart_run](../assets/chart_run-1024x640.png)](../assets/chart_run.png)

# Types

Following are the various charts offered by WaveMaker - Area, Bar, Bubble, Column, Cumulative Line, Donut, Line, and Pie

## Comparison

The chart type property can be used to portray the data in various forms. Each type has its own advantages and disadvantages. Select the appropriate type depending upon the data and what you want to represent.

- **of data** is the most common usage of charts. It can be:
    - quarterly sales figure over a period of 3 years in which case a chart would be best
    - the sales figures of say 10 different brands of any given product, wherein a chart would be most ideal
    - to follow a trend like population over a period of time would be best depicted by a chart
- **of data** like types of users for a product can be depicted accurately through a chart.
- chart can be used to show **dimensions** in a chart. Apart from the x-axis and y-axis, the size of the bubble can represent a third dimension.

Choose the type according to your need, you might want to try different types before settling for the best. 

<iframe width="100%" height="375" style="background-color: snow;" id="line" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Charts"> Chart</iframe>

<iframe width="100%" height="375" style="background-color: snow;" id="area" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/AreaChart">Chart</iframe>

<iframe width="100%" height="375" style="background-color: snow;" id="column" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ChartsColBar">Chart</iframe>

<iframe width="100%" height="375" style="background-color: snow;" id="bar" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/BarChart">Chart</iframe>

<iframe width="100%" height="375" style="background-color: snow;" id="pie" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/PieChart">Chart</iframe>

<iframe width="100%" height="325" style="background-color: snow;" id="donut" allowtransparency="true" src="http://e1d52cdd9823.cloud.wavemakeronline.com/documentation_snippets/#/DonutChart">Chart</iframe>

<iframe width="100%" height="575" style="background-color: snow;" id="bubble" allowtransparency="true" src="http://e1d52cdd9823.cloud.wavemakeronline.com/documentation_snippets/#/BubbleChart">Chart</iframe>

Charts are used for graphical display of data  and WaveMaker charts come  with the following features:

- , _heading_ and can be set.
- [](#data)can come from various sources like database, web service or another widget and can be accessed through binding to Live or Service Variables
- [](#layout)can be set in terms of themes, positioning, formats for labels, captions, axis etc..
- [](#comp)of charts for various purposes.
- [aggregation](#data-aggregation) and grouping for displaying summary graphs.
- \-time [\-interaction](#user-interaction)
- [selection](#user-selection)

## Sources

Data can come from various sources as listed below

- Database,
- Live Filter,
- Web Services.

The x-axis and y-axis values can be set to the fields from the datasource, the chart is bound to. [![charts_feat1](../assets/charts_feat1.png)](../assets/charts_feat1.png)

Depending upon the data type of the inderlying fields, you can choose the Data Display Format. [![chart_as_yaxis_format](../assets/chart_as_yaxis_format.png)](../assets/chart_as_yaxis_format.png)

In case of Service and WebSocket Variables you can choose the Format Type to be toDate or toNumber. [![chart_as_yaxis_formattype](../assets/chart_as_yaxis_formattype.png)](../assets/chart_as_yaxis_formattype.png)

Note: For Pie and Donut charts, the options include Label and Value fields.

- for charts can be chosen from list of options.
- **Colors ** be used to change the set of colors that comes predefined with the selected theme. The values for this property can be
    - separated values, eg. red,green,blue
    - to a static variable containing the color names or the color hash codes
- of the chart can be defined in terms of the offset values.
- position can be set to be top or bottom.
- of the can be defined in terms of location, value format, caption for line charts  and more

[![charts_feat2](../assets/charts_feat2.png)](../assets/charts_feat2.png) These options are available from the Advanced Settings of the chart. Apart from these properties, a , ** heading** and  can be assigned for the chart as a whole to be displayed top left corner of the Chart. 

<iframe width="100%" height="400" style="background-color: snow;" allowtransparency="true" src="http://e1d52cdd9823.cloud.wavemakeronline.com/documentation_snippets/#/ChartsThemes"> Themes</iframe>

## Representation

This property defines how the data is represented in the chart.

- **Interpolation** Property determines how data points are joined and represented in the chart. This property is applicable to Line, Area and Cumulative Line Charts. Value can be set to:
    
    - ,
    - for smooth curves, or
    
    [![](../assets/chart_interpolation.png)](../assets/chart_interpolation.png)
- **Arrangement** Property (available only for Column, Area and Bar Charts) controls whether to show the areas in:
    
    - - ,
        - , or
        
    
    [![](../assets/chart_arrangement.png)](../assets/chart_arrangement.png)

## Aggregation and Grouping

When dealing with charts bound to live variables, you can add additional functionality to these charts. You can order the data, group the data and show the aggregate functions in your chart. The aggregation functions available are _, count, minimum, maximum and sum_

- the  property and  _by_ property can be used to set the aggregation functions.
- _By_ property can be used to set the column by which the data needs to be sorted. By default it will be set to the Group by column selected.
- values to be depicted on x- and y-axis are set to the _by_ and _columns_ respectively.

[![charts_feat3](../assets/charts_feat3.png)](../assets/charts_feat3.png)

- can interact with the charts by selecting/unselecting the column names from the legend.
- mouse over any column displays the values of x- and y-axis for that data point.
- datapoints can be captured and used to bind to a widget for further display or computational purposes from the selected item of the chart widget

## User Selection

You can capture user selection in two ways:

1. 1. various outbound properties of chart are available for binding to other widgets or variables. The fields under selecteditem will be from the underlying dataset used for binding [![chart_output](../assets/chart_output.png)](../assets/chart_output.png)
    2. selected values can be accessed via Javascript
        
        $scope.chart3Select = function($event, $isolateScope, selectedItem, selectedChartItem) {
              $scope.Widgets.key.datavalue = selectedChartItem.key; // key value of selected item
              $scope.Widgets.xv.datavalue = selectedChartItem.x; // x value of selected item
              $scope.Widgets.yv.datavalue = selectedChartItem.y; // y value of selected item
              $scope.Widgets.selectname.datavalue = selectedItem.name; // name field of selected object
              $scope.Widgets.selectdept.datavalue = selectedItem.deptcode; // deptcode of selected object
        };
        
        Here we have used the on select event of the chart: [![chart_events](../assets/chart_events.png)](../assets/chart_events.png)

# Cases

- [Usage](/learn/app-development/widgets/chart/charts-basic-usage/)
- [to capture user selection](/learn/how-tos/charts-displaying-user-selection-another-widget/)
- [to handling dynamic data](/learn/how-tos/charts-handling-dynamic-data/)
- [to displaying custom data](/learn/how-tos/charts-custom-data/)

[5\. Chart Widgets](/learn/app-development/widgets/widget-library/#chart)

- [Chart Types](#chart-types)
    - [Line Chart](#line)
    - [Area Chart](#area)
    - [Column Chart](#column)
    - [Bar Chart](#bar)
    - [Line Chart](#line)
    - [Pie Chart](#pie)
    - [Donut Chart](#donut)
    - [Bubble Chart](#bubble)
- [Features](#features)
    - [Data Source](#data)
    - [Layout](#layout)
    - [Data Representation](#data-rendering)
    - [Data Aggregation & Grouping](#data-aggregation)
    - [User Interaction](#user-interaction)
    - [User Selection](#user-selection)
- [Use Cases](#use-cases)
