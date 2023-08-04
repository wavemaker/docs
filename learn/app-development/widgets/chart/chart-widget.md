---
title: "Chart Widgets"
id: "chart-widget"
---
---

Use chart widgets to represent data in a pictorial format. Using chart widgets, you can transform data into various chart types. 

## Chart Types

In WaveMaker Studio, you can use the following chart types as specified below.

:::note
This documentation page and charts may take a few seconds longer to load. Wait for the charts to load fully.  
:::

### 1. Line Chart

<iframe width="100%" height="375" style={{backgroundColor: "snow"}} id="line" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Charts">Line Chart</iframe>

### 2. Area Chart

<iframe width="100%" height="375" style={{backgroundColor: "snow"}} id="area" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/AreaChart">Area Chart</iframe>

### 3. Column Chart

<iframe width="100%" height="375" style={{backgroundColor: "snow"}} id="column" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ChartsColBar">Column Chart</iframe>

### 4. Bar Chart

<iframe width="100%" height="375" style={{backgroundColor: "snow"}} id="bar" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/BarChart">Bar Chart</iframe>

### 5. Pie Chart

<iframe width="100%" height="375" style={{backgroundColor: "snow"}} id="pie" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/PieChart">Pie Chart</iframe>

### 6. Donut Chart

<iframe width="100%" height="325" style={{backgroundColor: "snow"}} id="donut" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/DonutChart">Donut Chart</iframe>

### 7. Bubble Chart

<iframe width="100%" height="575" style={{backgroundColor: "snow"}} id="bubble" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/BubbleChart">Bubble Chart</iframe>


## Chart Comparison

The chart type property can be used to portray the data in various forms. Each type has its own advantages and disadvantages. Select the appropriate type depending upon the data and what you want to represent.

- **Comparison of data** is the most common usage of charts. It can be:
    - Comparing quarterly sales figure over a period of 3 years in which case a **column** chart would be best
    - Comparing the sales figures of say 10 different brands of any given product, wherein a **bar** chart would be most ideal
    - Trying to follow a trend like population over a period of time would be best depicted by a **line** chart
- **A composition of data** like types of users for a product can be depicted accurately through a **pie** chart.
- **Bubble** chart can be used to show **three dimensions** in a chart. Apart from the x-axis and y-axis, the size of the bubble can represent the third dimension.

Choose the type according to your need, you might want to try different types before settling for the best.

## Features

Charts are used for graphical display of data  and WaveMaker charts come  with the following features:

- The _Title_, _Sub Heading_, and _Icon_ can be set.
- [Data](#data) can come from various sources like database, web service or another widget and can be accessed through binding to Live or Service Variables
- [The layout](#layout) can be set in terms of themes, positioning, formats for labels, captions, axis etc..
- [Types](#comp) of charts for various purposes.
- [Data aggregation](#data-aggregation) and grouping for displaying summary graphs.
- Run-time [user-interaction](#user-interaction)
- Capturing [user selection](#user-selection)

## Data Sources

Data can come from various sources as listed below:

- From Database,
- From Live Filter,
- From Web Services.

The X-Axis and Y-Axis values can be set to the fields from the data source, the chart is bound to.

[![](/learn/assets/charts_feat1.png)](/learn/assets/charts_feat1.png)

Depending upon the data type of the underlying fields, you can choose the Data Display Format.

[![](/learn/assets/chart_as_yaxis_format.png)](/learn/assets/chart_as_yaxis_format.png)

In the case, when the data source is from Web Services or Web Socket, you can choose the Format Type to be toDate or toNumber.

[![](/learn/assets/chart_as_yaxis_formattype.png)](/learn/assets/chart_as_yaxis_formattype.png) For **Pie** and **Donut charts**, the options include Label and Value fields. You can specify

- the position of the Values - hidden, outside (default) or inside
- the Value to be displayed - as key, value, percent (default) or key-value pair

[![](/learn/assets/chart_as_pievalues-6.png)](/learn/assets/chart_as_pievalues-6.png)

## Layout

- The **theme** for charts can be chosen from a list of options.
- **Custom Colors **can be used to change the set of colors that comes predefined with the selected theme. The values for this property can be
    - comma separated values, eg. red, green, blue
    - bound to a static variable containing the color names or the color hash codes
- The **position** of the chart can be defined in terms of the offset values.
- **Legend** position can be set to be top or bottom.
- Layout of the **values** can be defined in terms of location, value format, caption for line charts  and more

[![](/learn/assets/charts_feat2.png)](/learn/assets/charts_feat2.png)

These options are available from the Advanced Settings of the chart. Apart from these properties, a **Title**, **Sub Heading**, and **Icon** can be assigned for the chart as a whole to be displayed on the top left corner of the Chart. 

<iframe width="100%" height="1150" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ChartsThemes">Chart Themes</iframe>

## Data Representation

This property defines how the data is represented in the chart.

### Datapoint Interpolation

Property determines how data points are joined and represented in the chart. This property is applicable to Line, Area and Cumulative Line Charts. Value can be set to:
    
- Linear,
- Cardinal for smooth curves, or
- Step
    
[![](/learn/assets/chart_interpolation.png)](/learn/assets/chart_interpolation.png)

### Data Arrangement
Data Arrangement Property (available only for Column, Area and Bar Charts) controls whether to show the areas in:
    
- stack,
- stream, or
- expand
    
[![](/learn/assets/chart_arrangement.png)](/learn/assets/chart_arrangement.png)

## Data Aggregation and Grouping

When dealing with charts bound to live variables, you can add additional functionality to these charts. You can order the data, group the data and show the aggregate functions in your chart. The aggregation functions available are _average, count, minimum, maximum and sum_.

- In the _Aggregation_ property and _Group by_ property can be used to set the aggregation functions.
- _Order By_ property can be used to set the column by which the data needs to be sorted. By default, it will be set to the Group by column selected.
- The values to be depicted on x and y-axis are set to the _group by_ and _aggregation columns_ respectively.

[![](/learn/assets/charts_feat3.png)](/learn/assets/charts_feat3.png)

## Interaction

- You can interact with the charts by selecting/unselecting the column names from the legend.
- Hovering mouse over any column displays the values of X and Y-Axis for that data point.
- These data points can be captured and used to bind to a widget for further display or computational purposes from the selected item of the chart widget

## Capturing User Selection

You can capture user selection in two ways:

1. The various outbound properties of a chart are available for binding to other widgets or variables. The fields under _selecteditem_ will be from the underlying dataset used for binding. 

[![](/learn/assets/chart_output.png)](/learn/assets/chart_output.png)

2. These selected values can be accessed via JavaScript

```js
Page.chart3Select = function($event, widgets, selectedItem, selectedChartItem) 
{
    Page.Widgets.key.datavalue = selectedChartItem.key; // key value of selected item
    Page.Widgets.xv.datavalue = selectedChartItem.x; // x value of selected item
    Page.Widgets.yv.datavalue = selectedChartItem.y; // y value of selected item
    Page.Widgets.selectname.datavalue = selectedItem.name; // name field of selected object
    Page.Widgets.selectdept.datavalue = selectedItem.deptcode; // deptcode of selected object
};
```
    
Here we have used the _On select_ event of the chart: 

[![](/learn/assets/chart_events.png)](/learn/assets/chart_events.png)

## Chart Legend Captions

Chart legend caption is the label or description that gets displayed when you hover over the chart legend item in the chart. These labels help you in interpreting the chart by associating each data series or category with a descriptive label.

:::note

WaveMaker internally uses the nvd3 library to load the charts. But with the nvd3 1.0.3 version, the captions are not populating as expected in the chart. You can upgrade to the nvd3 1.8.1 version to fix the caption issues.

:::

To upgrade the nvd3 library version to 1.8.1 you need to provide the below in the **index.html** file.

```js
<script data-require="nvd3@1.8.1" data-semver="1.8.1" src="https://cdn.rawgit.com/novus/nvd3/v1.8.1/build/nv.d3.js"></script>
```

### Populating Chart Legend Captions

In WaveMaker studio, to populate the chart legend captions, you need to add the below specified JavaScript snippet on the chart **On Before Render** event.

1. Create a [Pie Chart](#5-pie-chart).
2. Set the Pie Chart's "On Before Render" property to JavaScript.

[![](/learn/assets/set-javascript.png)](/learn/assets/set-javascript.png)

3. Go to the Script and add the below code snippet in it.

```js 
Page.chart4_1Beforerender = function(widget, chartInstance) {
    var tooltip = nv.models.tooltip();
    tooltip.duration(0);
    chartInstance.legend.dispatch.legendMouseover = function(o) {
        console.log(o);
        if (tooltip.hidden()) {
            var data = {
                series: {
                    key: o.x,
                    value: o.y,
                    color: o.color
                }
            };
            tooltip.data(data)
                .hidden(false);
        }
        tooltip.position({
            top: d3.event.pageY,
            left: d3.event.pageX
        })();
    };
    chartInstance.legend.dispatch.legendMouseout = function(o) {
        tooltip.hidden(true);
    }
};
```

[![](/learn/assets/onbeforerender-code.png)](/learn/assets/onbeforerender-code.png)

## Use Cases

- [Basic Usage](/learn/app-development/widgets/chart/charts-basic-usage/)
- [How to capture user selection](/learn/how-tos/charts-displaying-user-selection-another-widget/)
- [How to handling dynamic data](/learn/how-tos/charts-handling-dynamic-data/)
- [How to displaying custom data](/learn/how-tos/charts-custom-data/)  