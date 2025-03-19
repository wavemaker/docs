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
- Customizing the default Tooltip using the relevant classes.

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

### Example

To understand the creation and binding of Chart Tooltip, you can refer the following example. 

1. Use the following dataset for chart.

```javascript
[
  {
    "name": "YTD",
    "value": 5000
  },
  {
    "name": "3M",
    "value": 8000
  },
  {
    "name": "1Y",
    "value": -2500
  },
  {
    "name": "3Y",
    "value": 5500
  },
  {
    "name": "5Y",
    "value": -5000
  },
  {
    "name": "Since \n enrollment",
    "value": 9000
  }
]
```

2. Create a Partial page and use the following code in the Markup section. In this code you can find two label widgets being used.

```xml

<wm-linearlayout direction="row" spacing="4" padding="unset 4px" name="linearlayout1" width="150" height="100" class="tooltip" backgroundcolor="#373434">
    <wm-linearlayoutitem flexgrow="1" name="linearlayoutitem2">
        <wm-linearlayout direction="column" name="linearlayout4">
            <wm-linearlayoutitem flexgrow="1" name="linearlayoutitem7_1">
                <wm-linearlayout direction="column" name="linearlayout2" horizontalalign="center">
                    <wm-linearlayoutitem flexgrow="1" name="linearlayoutitem4" width="80%" borderwidth="unset unset 2px unset" borderstyle="solid" horizontalalign="center" bordercolor="#e7e7e7" padding="unset unset 4px unset">
                        <wm-label padding="unset" name="label1" caption="Total profits" color="#e7e7e7" fontweight="bold"></wm-label>
                    </wm-linearlayoutitem>
                    <wm-linearlayoutitem flexgrow="1" name="linearlayoutitem5">
                        <wm-linearlayout direction="row" name="linearlayout3" verticalalign="center" horizontalalign="left">
                            <wm-linearlayoutitem flexgrow="1" name="linearlayoutitem7" class="item">
                                <wm-container height="10" width="10" backgroundcolor="#e18080" name="container2"></wm-container>
                                <wm-label padding="unset" name="label2" caption="bind:pageParams.item.name === 'YTD' ? &quot;Year to date&quot; : pageParams.item.name === '3M' ? &quot;3 Months&quot; : pageParams.item.name === '1Y' ? &quot;1 Year&quot; : pageParams.item.name === '3Y' ? &quot;3 Years&quot; : pageParams.item.name === '5Y' ? &quot;5 Years&quot; : pageParams.item.name"
                                    color="#e7e7e7" margin="unset unset unset 8px"></wm-label>
                            </wm-linearlayoutitem>
                        </wm-linearlayout>
                    </wm-linearlayoutitem>
                </wm-linearlayout>
            </wm-linearlayoutitem>
            <wm-linearlayoutitem flexgrow="1" name="linearlayoutitem8" horizontalalign="center">
                <wm-label padding="unset" name="label3" caption="bind:&quot;DISCOURSE_PLACEHOLDER_1quot;+pageParams.item.value" color="#e7e7e7"></wm-label>
            </wm-linearlayoutitem>
        </wm-linearlayout>
    </wm-linearlayoutitem>
</wm-linearlayout>

```

3. For using the given dataset for the Chart widget, navigate to the scripts section of the Partial and use the below code.

```javascript
Partial.onReady = function() {
    Partial.Widgets.container2.backgroundcolor = Partial.Variables.colors.dataSet[Partial.pageParams.item.index].dataValue
};

```

4. To set the basic alignment and other customization of the chart and tooltip, use the following code in the Style section.

```css

.tooltip .app-linearlayout {
    border-radius: 20px;
    opacity: 0.8;
}
.item .app-linearlayoutitem {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.app-linearlayoutitem {
    margin-top: 2;
    margin-bottom: 2;
}
.app-column-chart-tooltip-pointer {
    border-bottom-color: #373434;
}

```

5. For binding, navigate to the scripts section of the page where the chart is being used. You can use the below code in the Script section.

```javascript

Page.Widgets.chart1.setTooltipTemplate("Tooltip");

```

#### Preview

![Chart Tooltip Example](/learn/assets/chart-tooltip-parts.png)



## Customizing Tooltip

A Tooltip can be categorized into four segments for customization.

![Chart Tooltip](/learn/assets/chart-tooltip-parts.png)

The following classes can be used in the Style section of the Partial to customize different parts of the default tooltip.

- **Tooltip Container:** 

```css

.app-area-chart-tooltip-container {
  /* Your styles here */
}

```

- **Tooltip Pointer:**

```css

.app-area-chart-tooltip-pointer {
  /* Your styles here */
}

```

- **X-Axis Label:**

```css

.app-area-chart-tooltipx-text {
  /* Your styles here */
}

```

- **Y-Axis Label:**

```css

.app-area-chart-tooltipy-text {
  /* Your styles here */
}

```

### Example

In the below example you can customize the Tooltip pointer of the Chart [mentioned above](#example) using the below code in the Style section of Partial.

```css

.tooltip-pointer {
  position: absolute;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-left-width: 8px;
  border-right-width: 8px;
  border-bottom-width: 12px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #e7f9fd;
  overflow: hidden;
}

```