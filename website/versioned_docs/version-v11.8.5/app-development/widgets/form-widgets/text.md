---
title: "Text"
id: "text"
---
---

**Text widget** is an editor widget that accepts single-line text input. 

## Using Text Widget
Using Text widget, you can do the following:

1. Limit the input text by applying maximum character length
2. Apply regular expressions to validate client side text

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for Text widget. |
| Type | This property specifies the type of the variable. It can be of type:  - color  - date, datetime-local, time  - email  - number, month, week  - password - search, text, tel, url |
| Placeholder   (only for alphanumeric type) | A placeholder is a text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user. |
| **Accessibility** |
| Hint | Any text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.     **Note**: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from ```Preferences -> Advanced -> Accessibility``` set the option "Press Tab to highlight each item on a webpage". |
| Shortcut key | The shortcut key property specifies a shortcut key to activate/focus an element. (*[See below for details](#shortcut)). |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Default Value** |
| Value | This is the default value to display value for an editor widget.     **Note** that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. |
| **Validation** |
| Required | A required editor in _wm.LiveForm_ may refuse to save without a required field. |
| Regular Expression | Enter any regular expression to be used to validate user input for client-side input validation. |
| Maximum Characters | Defines the maximum number of characters that can be entered in the editor.     **Note**: Not available for color, date, time, month, week types.|
| Minimum value | Enter minimum number. This property applies when the type is a number.    **Note**: Only for numeric, date, time, week, month types. |
| Maximum value | Enter maximum number. This property applies when the type is a number.    **Note**: Only for numeric, date, time, week, month types.  |
| Step | Use the stepper to increment/decrement the input value by the specified step interval.    Example: if step='3', legal numbers could be -3, 0, 3, 6, etc.    **Note**: Only for numeric, date, time, week, month types. |
| **Behavior** |
| Auto Focus | This property makes the element get focused automatically when the page loads. |
| Read Only | Selecting this checkbox property prevents the user from changing the data value of a widget. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand  | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.    **Note**: Visible only when show property is bound to a variable. |
| Disabled | If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only. |
| Auto Complete | Checking this box turns on auto-completion in the editor. As the user types into the pull-down select editor, the choices change dynamically. |
| Display Format | The keys in display format represent the special tokens/characters used to delimit acceptable ranges of inputs. For example, we use '9' here to accept any numeric values for a phone number: displayformat='(999) 999-9999'. The values associated with each token are regexen. Each regex defines the ranges of values that will be acceptable as inputs in the position of that token. When placeholder and default value are both provided for a widget, the default value takes precedence. Upon focusing on the widget, the display format will be shown to make the user input easy. Tokens:   - A Any letter.   - 9 Any number.   - * Any letter or number.   - ? Make any part of the mask optional.   |
| Show Display Format On | This property decides when to show the display format on the widget.   **Always**: the provided display format will always be shown.   **On keypress**: the provided display format will be shown when user starts typing in the widget. |
| Update value on | If the selected value is `blur`: data value will be updated on blur event, `default`: data value will be updated on key up. |
| Update delay | The amount of delay in milliseconds to update the data value. |

## Events

| Event | Description |
| --- | --- |
| Change | This event handler is called each time your element's value changes. |
| On focus | This event handler is called each time your element is focused. |
| On blur | This event handler is called each time your focus leaves your element. |
| **Mouse Events** |
| On click | This event handler is called whenever the click event is triggered on a widget. |
| On mouse enter | This event handler is called whenever the mouse enters the widget. |
| On mouse leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On tap | This event handler is called whenever the tap event is triggered on a widget. |
| **Keyboard Events** |
| On key down | This event handler is called whenever a key is pressed down. |
| On key press | This event handler is called whenever a key is pressed. |
| On key up | This event handler is called whenever a key is released. |

**Shortcutkey**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

| Browser | Shortcutkey Trigger |
| --- | --- |
| Internet Explorer | [Alt] + shortcutkey |
| Chrome | [Alt] + shortcutkey (Windows/Linux) |
|  | [Control] [Alt] + shortcutkey (MAC) |
| Firefox | [Alt] [Shift] + shortcutkey (Windows/Linux) |
|  | [Control] [Alt] + shortcutkey (MAC) |

## See More
[Form Widgets](/learn/app-development/widgets/widget-library/#form)  
[Number](/learn/app-development/widgets/form-widgets/number/)  
[Textarea](/learn/app-development/widgets/form-widgets/textarea/)