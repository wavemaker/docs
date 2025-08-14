---
title: "Customize Slider"
id: "customize-slider"
sidebar_label: "Customize Slider"
---
---

import CustomizeSlider from '/learn/assets/customize-slider.png';

In this documentation, we will see how we can customize the slider widget.

## Add Marker Text

:::note
To use Market Text property, `Showmarkers` should be set to true.
:::

There are three ways to add marker text to the slider:

1. Put labels separated by commas.
<img src={CustomizeSlider} alt="Customize Slider" style={{width:"30%"}}/>

2. Bind a modal variable having a list of labels.
3. Bind a modal variable having a list of objects, having property ***title*** and ***position***.

:::note
`position` property only accepts `up` or `down` as values, defaults to `up`.
:::
