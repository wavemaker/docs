---
title: "Chart Tooltips"
id: "chart-tooltip"
sidebar_label: "Chart Tooltips"
---
---

A Chart Tooltip is an element that appears when you hover over or interact with a specific data point or component within a chart. This floating text box provides additional information about the data point, such as its exact value, category, or other relevant details, enhancing user understanding of the chart.

## Configuring Chart Tooltip

You can create a partial as a tooltip for a chart in your application. This approach allows you to reuse the partial with the tooltip across the application in any number of instances. To use a tooltip for a specific chart, you need to:

- Create a Tooltip as a Partial page and bind it to the chart.
- Style the default Tooltip using the relevant classes.

## Creating Partial for Tooltip and Binding it to Chart

### Creating Partial Page

1. Create a new page and designate it as a partial page. This page will serve as the tooltip for your chart.
2. Add an item parameter to the partial page. This parameter will contain the selected item information, including the index, which is bound to the labels displayed in the Tooltip.
3. Drag and Drop the necessary widgets like, labels or container to the partial page to display the information from the selected item.
4. Bind the item parameter to these widgets to ensure the tooltip displays the correct data.

### Binding Partial to Chart

1. Navigate to the Script section of the page where the Chart widget is used.
2. To bind, use the following syntax to bind the partial to the chart as its tooltip.

```javascript
Page.Widgets.{chartname}.setTooltipTemplate({partialname});
```

Replace `{chartname}` with the name of your Chart widget and `{partialname}` with the name of your Partial page.