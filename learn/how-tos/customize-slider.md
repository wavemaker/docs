---
title: "Customizing Slider Widget"
id: "customize-slider"
sidebar_label: "Customizing Slider Widget"
---
---

import CustomizeSlider from '/learn/assets/customize-slider.png';
import sliderCutomizationExample from '/learn/assets/react-native/sliderCutomizationExample.png';
import sliderLabelPositionExample from '/learn/assets/react-native/sliderLabelPositionExample.png';

The Slider widget allows you to display either numeric values or custom labels at specific points along the slider track. Labels can represent categories, ranges, or meaningful names instead of plain numbers. You can also control whether labels appear above or below the slider.  

<img src={sliderCutomizationExample} alt="Customize Slider Example" style={{maxWidth:"320px"}}/>

_For Example : Here we have configured Slider widget to show three labels `Beginner, Intermediate, Expert`._

## Configuring Labels with Marker Text

Use the **Marker Text** property to define the labels that appear on the slider. It is present in the properties panel for Slider widget.

:::note
- The `Showmarkers` property must be enabled for labels to be displayed.  
- The number of labels provided must match the number of steps in the slider.  
:::

The **Marker Text** property accepts data in two formats:

### 1. Comma-Separated List

- Enter labels directly into the property panel as a comma-separated list. Example: `Beginner, Intermediate, Expert`  

<img src={CustomizeSlider} alt="Marker Text Property" style={{maxWidth:"320px"}}/>

- Alternatively, bind an array of strings to the property. 

```json
["Beginner", "Intermediate", "Expert"]
```

<img src={sliderCutomizationExample} alt="Customize Slider Example" style={{maxWidth:"320px"}}/>

_Slider Widget with configured labels._

### 2. Array of Objects (Labels with Position)

If you want to specify where each label should appear (above or below the slider), bind an array of objects to the Marker Text property. Each object supports:
- `title`: label text
- `position`: "up" or "down" (default is "up")

Example:
```json
[
  { "title": "Cold", "position": "up" },
  { "title": "Warm", "position": "down" },
  { "title": "Hot", "position": "up" }
]
```
<img src={sliderLabelPositionExample} alt="Customize Slider Example with Position customization" style={{maxWidth:"320px"}}/>

