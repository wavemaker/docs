---
title: "Currency"
id: ""
---

 is a special text widget to input the currency type data. This widget will change the display format based on the currency type.

<iframe width="100%" height="250" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Currency"></iframe>

name is a unique identifier for Currency widget.

placeholder is text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

determines which currency symbol should be shown for the currency widget. Choose from the available list.

text you enter for this property will be shown as a tooltip when the mouse hovers over this widget for _1.5 seconds. _ can be bound to a variable or another widget.

Index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

Key

shortcut key property specifies a shortcut key to activate/focus an element. (\* [below for details](#shortcut))

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

**Value**

is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

Value

minimum number. This property applies when the type is a number.

Value

maximum number. This property applies when the type is a number.

the stepper to increment/decrement the input value by the specified step interval. Example: if step='3', legal numbers could be -3, 0, 3, 6, etc.

required editor in wm.LiveForm may refuse to save without a required field.

Only

this checkbox property prevents the user from being able to change the data value of a widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

**key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

Trigger

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

event handler is called whenever the click event is triggered on a widget.

mouse enter

event handler is called whenever the mouse enters the widget.

mouse leave

event handler is called whenever the mouse leaves the widget.

**Events**

tap

event handler is called whenever the tap event is triggered on a widget.

[3\. Form Widgets](/learn/app-development/widgets/widget-library/#form)

- [3.1 Button](/learn/app-development/widgets/form/button/)
- [3.2 Button Group](/learn/app-development/widgets/form/button-group/)
- [3.3 Calendar](/learn/app-development/widgets/form/calendar/)
- [3.4 Checkbox](/learn/app-development/widgets/form/checkbox/)
- [3.5 CheckboxSet](/learn/app-development/widgets/form/checkboxset/)
- [3.6 Chips](/learn/app-development/widgets/form-widgets/chips/)
- [3.7 Color Picker](/learn/app-development/widgets/form/color-picker/)
- [3.8 Currency](/learn/app-development/widgets/form/currency/)
    - [Properties](#properties)
    - [Events](#events)
- [3.9 Date](/learn/app-development/widgets/form-widgets/date-time-datetime/)
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
