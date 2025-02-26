---
title: "Slider"
id: "slider"
---
---

**Sliders** are often the UI control of choice for letting users select a value or range from a fixed set of options. Sliders are good to use while:

- setting mobile volumes such as media, alarm clock, and ringtones etc.
- setting screen brightness
- setting price range while purchasing things online

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for slider widget. |
| **Accessibility** |
| Hint | Any text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for _1.5 seconds._ |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    **NOTE**: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| Shortcut key | The shortcut key property specifies a shortcut key to activate/focus an element. (*[See below for details](#shortcut)) |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Default Value** |
| Value | This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. |
| Minimum Value | Enter minimum number. This property applies when the type is a number. |
| Maximum Value | Enter maximum number. This property applies when the type is a number. |
| Step | It is a composite widget with a label and a selector. The user can select from the range specified with the increment as defined by the step value. |
| **Behavior** |
| Read Only | Selecting this checkbox property prevents the user from being able to change the data value of a widget. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Disabled | If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only. |
| **Range** |
| Range | This property can be used to add a range within the Slider Widget. |
| Datatype |  Select the input datatype. This property is to provide the datatype that can be number or dataset  |
| Dataset | This is to provide the input data array |
| Datafield | This property indicates the field (in DataSet) to represent selected value for the range in Slider widget. It should be mapped to an integer field in DataSet. |
| Displayexpression | This is an advanced property that gives more control over what values are to be displayed for the range in the Slider widget. A Display Expression uses a JavaScript expression to format exactly what is shown. For readonly mode, If dataset is null then the caption can be bound directly to display expression. |
| Tooltip expression | This property is used to get and customize the text displayed in the tooltip associated with the range value. |
| Showmarkers | This property can be used to control whether a marker or indicator is displayed on the Slider widget. |
| Showtooltip | Enable this property to show the tooltip for the applied range. |

- Range
- Datatype - number or dataset
- Dataset - to provide a dataset
- Datafield - about the data given in the dataset
- Displayfield - 
- Displayexpression - to add 
- Tooltip expression - value on top of the thumb
- Showmarkers - display the scale 
- Showtooltip - whether to display tooltip or not


**Shortcut key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

| Browser | Shortcut key Trigger |
| --- | --- |
| Internet Explorer | [Alt] + shortcut key |
| Chrome | [Alt] + shortcut key (_Windows/Linux_) |
|  | [Control] [Alt] + shortcut key (_MAC_) |
| Firefox | [Alt] [Shift] + shortcut key (_Windows/Linux_) |
|  | [Control] [Alt] + shortcut key (_MAC_) |

## Events

| Event | Description |
| --- | --- |
| Change | This event handler is called each time your element's value changes. |

