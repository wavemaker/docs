---
title: "Rating Widget"
id: "rating-widget"
---
---

**Rating** widget can be used to display or elicit information about a quantitative or a qualitative attribute in the form of a set of categories.

## Features

- **Icon color** property can be set from the _Styles_ tab of Property Panel
- **Show captions** property can be used to hide or show the captions.
- Default Value can be set for:
    - **Value** to be shown as the initial setting or rating selection
    - **Maximum value** for the highest rating user can select
- **Dataset** property will allow mapping of caption value against the value selected by the user. It can accept:
    - _Comma separated_ string containing the caption values which mapped to rating value in ascending order).
    - An _array of objects_ in the form of a Variable. The structure of the Variable should have an integer field for DataField to be mapped to rating value and a field for DisplayField to be mapped to caption against the rating value
    - This binding will also set the title for rating widget and the caption will change on hover of each element in rating widget.
- In **Read only** mode, if the dataset is null then the caption can be bound through displayexpression.
- **Tab index** selects the widget (focus the widget) and the UP-ARROW and DOWN-ARROW keypress would increase and decrease the rating value.

## Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for Rating widget. |
| **Accessibility** |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.   **NOTE**: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Default Value** |
| Value | Default value (number of active stars) of Rating.It should always be less than or equal to the maximum value of Rating. |
| Maximum Value | Maximum value (number of stars) of Rating.It should be less than or equal to 10. |
| **Dataset** |
| Value | This property is used to map a caption value against the value of the widget. It can accept: 1. Comma separated string containing the caption values (mappped to rating value in ascending order). 2. Array of strings (mapped as above). 3. Array of objects, needs selection of DataField(to map to rating value) and DisplayField(to map to caption against the rating value). |
| Data Field | This property indicates the field (in DataSet) to represent selected value for the rating widget. It should be mapped to an integer field in DataSet. |
| Display Field | This property indicates the field (in DataSet) that represents caption against the selected value(mapped as DataField) of the rating widget. |
| Display Expression | This is an advanced property that gives more control over what values are to be displayed for rating widget. A Display Expression uses a JavaScript expression to format exactly what is shown. For readonly mode, If dataset is null then the caption can be bound directly to display expression. |
| **Behavior** |
| Read Only | Selecting this checkbox property prevents the user from being able to change the data value of a widget. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Show Captions | Captions for Rating widget are shown only when this property is set. |
| **Graphics** |
| Icon Size | This property defines the size of the icon. Value has to be specified along with the units (em or px). |

## Events

| Event | Description |
| --- | --- |
| Change | This event handler is called each time your element's value changes. |

## Use Cases

You can use the Rating widget to capture the input from the user as Widgets.rating1.datavalue or from the direct bind dialog. You can also change the caption according to the user selection.

- [How to build Rating widget from static data](/learn/how-tos/rating-widget-using-static-data/)
- [How to build Rating widget from static variable data](/learn/how-tos/rating-widget-using-static-variable/)
- [how-tos/building-rating-widget-using-variable](/learn/how-tos/building-rating-widget-using-variable)
- [How to build an interactive rating widget](/learn/how-tos/rating-widget-interactive/)

