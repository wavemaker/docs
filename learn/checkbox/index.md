---
title: "Checkbox"
id: ""
---

checkbox is a specific type of two-states button that can be either checked or unchecked. Checkboxes let a user select an option. Examples: " _agree to terms and conditions"_ etc. checked and unchecked options.

caption is the text that the end user sees on the button. This property can be bound to any variable or another widget.

name is a unique identifier for the button. Special characters and spaces are not allowed in widget name.

text you enter for this property will be shown as a tooltip when the mouse hovers over this widget for _1.5 seconds. _ can be bound to a variable or another widget.

Index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

Key

to act as a Shortcut key. The shortcut key property specifies a key to click the button. The way to activate the shortcut key varies from browser to browser ( [below for details](#shortcut)).

width of your widget can be specified in _, pt, px_ or _% (_ _50px, 75%)._

height of your widget can be specified in _, pt, px_ or _% (_ _50px, 75%)._

**Value**

is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

Value

property defines the value of the widget when the element is in the checked state. The default value is boolean value true. If specified, the value will be of string type.

Value

property defines the value of the widget when the element is in the unchecked state.

required editor in wm.LiveForm may refuse to save without a required field.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the widget becomes display-only and user input will not be accepted. It can also set programmatically by binding it to a boolean type variable.

**key**: The shortcut key property specifies a shortcut key to check the checkbox. The way of accessing the shortcut key is varying in different browsers:

key Trigger

Explorer

\[Alt\] + shortcut key

\[Alt\] + shortcut key (_/Linux_)

\[Control\] \[Alt\] + shortcut key ()

\[Alt\] \[Shift\] + shortcut key (_/Linux_)

\[Control\] \[Alt\] + shortcut key ()

event handler is called each time your element's value changes.

focus

event handler is called each time your element is focused.

blur

event handler is called each time your focus leaves your element.

**Events**

click

is an HTML button. It is used to generate a click event. For example, save button.

mouse enter

event handler is called whenever the mouse enters the widget.

mouse leave

event handler is called whenever the mouse leaves the widget.

**Events**

tap

event handler is called whenever the widget is tapped.

[3\. Form Widgets](/learn/app-development/widgets/widget-library/#form)

- [3.1 Button](/learn/app-development/widgets/form/button/)
- [3.2 Button Group](/learn/app-development/widgets/form/button-group/)
- [3.3 Calendar](/learn/app-development/widgets/form/calendar/)
- [3.4 Checkbox](#)
    - [Properties](#properties)
    - [Events](#events)
- [3.5 CheckboxSet](/learn/app-development/widgets/form/checkboxset/)
- [3.6 Chips](/learn/app-development/widgets/form-widgets/chips/)
- [3.7 Color Picker](/learn/app-development/widgets/form/color-picker/)
- [3.8 Currency](/learn/app-development/widgets/form/currency/)
- [3.9 Date](/learn/app-development/widgets/form/date/)
- [3.10 Datetime](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.11 FileUpload](/learn/app-development/widgets/form/file-upload/)
- [3.12 Number](/learn/app-development/widgets/form-widgets/number/)
- [3.13 Radioset](/learn/app-development/widgets/form/radioset/)
- [3.14 Rating](/learn/app-development/widgets/form/rating/)
- [3.15 Select](/learn/app-development/widgets/form/select/)
- [3.16 Select Locale](/learn/app-development/widgets/form/select-locale/)
- [3.17 Slider](/learn/app-development/widgets/form/slider/)
- [3.18 Switch](/learn/app-development/widgets/form/switch/)
- [3.19 Text](/learn/app-development/widgets/form/text/)
- [3.20 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form/toggle/)
