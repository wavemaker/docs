---
title: "How to Add Gradient Text for Label Widget"
id: "how-to-add-gradient-text-for-label-widget"
sidebar_label: "Gradient Text"

---
import gradient_equal_spread from '/learn/assets/react-native/gradient_equal_spread.png';
import gradient_custom_spread_percentage from '/learn/assets/react-native/gradient_custom_spread_percentage.png';


# How to Add Gradient Text for Label Widget

In WaveMaker React Native applications, you can apply gradient styles to the Label widget’s text using the `.app-label-text` class.

```css
.app-label-text {
  color: linear-gradient(45deg, #f00, #00f);
}
```

## Linear Gradient Syntax

The Label widget supports two types of linear gradient usage.

### Equal Color Distribution

Colors are spaced equally when no percentages are used.

```css
.app-label-text {
  color: linear-gradient(45deg, #f00, #00f);
}
```
<img src={gradient_equal_spread} style={{ width: 300}} alt="Gradient Equal Spread" />

### Controlling Color Spread with Percentages

Use color stops to control how much space each color takes.

```css
.app-label-text {
  color: linear-gradient(135deg, #f00 40%, #00f 60%);
}
```

Red (#f00) fills 40% of the gradient length; blue (#00f) takes the remaining 60%

<img src={gradient_custom_spread_percentage} style={{ width: 300}} alt="Gradient Custom Spread" />

## Good Practices

When applying gradient text styles, follow these guidelines:

1. **Use Whole Numbers for Angles**
    Always specify angle values as whole numbers.

    ```css
    color: linear-gradient(45deg, #f00, #00f);
    ```
    
2. **Maintain Ascending Order for Percentages**
    Ensure percentage values are in ascending order for correct rendering.

    ```css
    color: linear-gradient(135deg, #f00 40%, #00f 60%);
    ```