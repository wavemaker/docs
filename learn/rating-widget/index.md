---
title: "Rating"
id: "rating-widget"
---

widget can be used to display or elicit information about a quantitative or a qualitative attribute in the form of a set of categories.

- **color** property can be set from the tab of Property Panel
- **captions** property can be used to hide or show the captions.
- Value can be set for:
    - to be shown as the initial setting or rating selection
    - **value** for the highest rating user can select
- property will allow mapping of caption value against the value selected by the user. It can accept:
    - _separated_ string containing the caption values which mapped to rating value in ascending order).
    - _of objects_ in the form of a Variable. The structure of the Variable should have an integer field for DataField to be mapped to rating value and a field for DisplayField to be mapped to caption against the rating value
    - binding will also set the title for rating widget and the caption will change on hover of each element in rating widget.
- **only** mode, if the dataset is null then the caption can be bound through displayexpression.
- **index** selects the widget (focus the widget) and the UP-ARROW and DOWN-ARROW keypress would increase and decrease the rating value.

name is a unique identifier for Rating widget.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

**Value**

value (number of active stars) of Rating.It should always be less than or equal to the maximum value of Rating.

Value

value (number of stars) of Rating.It should be less than or equal to 10.

property is used to map a caption value against the value of the widget. It can accept: 1. Comma separated string containing the caption values (mappped to rating value in ascending order). 2. Array of strings (mapped as above). 3. Array of objects, needs selection of DataField(to map to rating value) and DisplayField(to map to caption against the rating value).

Field

property indicates the field (in DataSet) to represent selected value for the rating widget. It should be mapped to an integer field in DataSet.

Field

property indicates the field (in DataSet) that represents caption against the selected value(mapped as DataField) of the rating widget.

Expression

is an advanced property that gives more control over what values are to be displayed for rating widget. A Display Expression uses a JavaScript expression to format exactly what is shown. For readonly mode, If dataset is null then the caption can be bound directly to display expression.

Only

this checkbox property prevents the user from being able to change the data value of a widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Captions

for Rating widget are shown only when this property is set.

Size

property defines the size of the icon. Value has to be specified along with the units (em or px).

event handler is called each time your element's value changes.

# Cases

You can use the Rating widget to capture the input from the user as 1.datavalue or from the direct bind dialog. You can also change the caption according to the user selection.

- [to build Rating widget from static data](/learn/how-tos/rating-widget-using-static-data/)
- [to build Rating widget from static variable data](/learn/how-tos/rating-widget-using-static-variable/)
- [to build an interactive rating widget](/learn/how-tos/rating-widget-interactive/)

[3\. Form Widgets](/learn/app-development/widgets/widget-library/#form)

- [3.1 Button](/learn/app-development/widgets/form/button/)
- [3.2 Button Group](/learn/app-development/widgets/form/button-group/)
- [3.3 Calendar](/learn/app-development/widgets/form/calendar/)
- [3.4 Checkbox](/learn/app-development/widgets/form/checkbox/)
- [3.5 CheckboxSet](/learn/app-development/widgets/form/checkboxset/)
- [3.6 Chips](/learn/app-development/widgets/form-widgets/chips/)
- [3.7 Color Picker](/learn/app-development/widgets/form/color-picker/)
- [3.8 Currency](/learn/app-development/widgets/form/currency/)
- [3.9 Date](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.10 Datetime](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.11 FileUpload](/learn/app-development/widgets/form/file-upload/)
- [3.12 Number](/learn/app-development/widgets/form-widgets/number/)
- [3.13 Radioset](/learn/app-development/widgets/form/radioset/)
- [3.14 Rating](#)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](#use-cases)
- [3.15 Select](/learn/app-development/widgets/form/select/)
- [3.16 Select Locale](/learn/app-development/widgets/form/select-locale/)
- [3.17 Slider](/learn/app-development/widgets/form/slider/)
- [3.18 Switch](/learn/app-development/widgets/form/switch/)
- [3.19 Text](/learn/app-development/widgets/form/text/)
- [3.20 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form/toggle/)
