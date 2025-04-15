---
title: "Callback Event for Charts Widget"
id: "onbeforerender"
sidebar_label: "Callback Event"
---
---

The onBeforeRender method contains 2 parameters.

That includes,

1. Widget
2. chartInstance

## Widget

Widget is the WaveMaker instance of the Chart widget.

## chartInstance

This is the nvd3 chart object which can be used to manipulate the chart by setting properties supported by the nvd3 library.

This method can optionally return an nvd3 chart object to change the complete chart which is being rendered. So in case a chart is not supported by default in WaveMaker and is supported in nvd3 the user can create that charts nvd3 object and return the newly created nvd3 object, this will render the new nvd3 object i.e. the new chart will be rendered.

:::note
To set chart data, use the `widget.setChartData` method.
:::

```
Syntax:
Page.chart1Beforerender = function(widget, chartInstance) {

}
```

## Example

```
Page.chart1Beforerender = function(widget, chartInstance) {
  chartInstance = nv.models.discreteBarChart()
  .x(function(d) {
    return d.x
    })
  .y(function(d) {
    return d.y
    })
   .showValues(true);
   chartInstance
        .xAxis.staggerLabels(true);
   chartInstance.tooltip(true);
   widget.chart = chartInstance;      
}
```
