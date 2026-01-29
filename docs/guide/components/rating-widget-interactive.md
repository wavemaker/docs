---
title: "Building an Interactive Rating Widget"
id: "rating-widget-interactive"
last_update: { author: "WaveMaker" }
---
---
You can change the Rating widget style at the runtime, using the **Change** event. Using the example from the [previous section with Variable data](./building-rating-widget-using-variable.md), here we will see how.

1. Add **Javascript** to the **Change** event of the Rating widget. 

[![](./assets/img/rating_usage_statvar_event.png)](./assets/img/rating_usage_statvar_event.png)

2. Enter the following script. This script captures the rating value as changed by the user, and changes the color of the widget appropriately. 

:::note
Use the rating widget name from your app in place of _rating1_ in the following code.
:::

```js    
Page.rating1Change = function ($event, widget, newVal, oldVal) {
    if (widget.datavalue == '1') {
        Page.Widgets.rating1.color = 'red';
    } else if (widget.datavalue == '2') {
        Page.Widgets.rating1.color = 'blue';
    } else if (widget.datavalue == '3') {
        Page.Widgets.rating1.color = 'blue';
    } else if (widget.datavalue == '4') {
        Page.Widgets.rating1.color = 'green';
    } else if (widget.datavalue == '5') {
        Page.Widgets.rating1.color = 'green';
    }
};
``` 
3. Preview the app, based upon the rating selection see the color change.

## See Also

[Rating Widget Use Cases](../../user-interfaces/web/components/angular-components/form-widgets/rating-widget.md)  
[How to build Rating widget from static data](./rating-widget-using-static-data.md)  
[How to build Rating widget from variable data](./building-rating-widget-using-variable.md)  

