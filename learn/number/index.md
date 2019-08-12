---
title: "Number"
date: "2018-10-25"
---

##### 10.0 release

**widget** is an editor widget that accepts numeric input. You can:

1. be used in conjunction with the selected app Locale to display the number in the appropriate format.
2. the input by applying maximum character length.
3. regular expressions to validate client side number.

: Number widget applies the number formatting as per the Locale automatically. In case you do not wish to change the app behavior as per the Locale, use the Text widget with Number Type ( [here for more](/learn/app-development/widgets/form-widgets/text/))

name is a unique identifier for Number widget.

placeholder is a text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

key

shortcut key property specifies a shortcut key to activate/focus an element. (\* [below for details](#shortcut))

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

**Value**

is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

required editor in may refuse to save without a required field.

Expression

any regular expression to be used to validate user input for client-side input validation.

value

minimum value user is allowed to enter.

value

maximum value user is allowed to enter.

the stepper to increment/decrement the input value by the specified step interval. Example: if step='3', legal numbers could be -3, 0, 3, 6, etc.

Focus

property makes the element get focused automatically when the page loads.

Only

this checkbox property prevents the user from changing the data value of a widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

value on

the selected value is \`blur\`: data value will be updated on blur event, \`default\`: data value will be updated on key up.

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

**Events**

key down

event handler is called whenever a key is pressed down.

key press

event handler is called whenever a key is pressed.

key up

event handler is called whenever a key is released.

: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

Trigger

Explorer

\[Alt\] + shortcutkey

\[Alt\] + shortcutkey (_/Linux_)

\[Control\] \[Alt\] + shortcutkey ()

\[Alt\] \[Shift\] + shortcutkey (_/Linux_)

\[Control\] \[Alt\] + shortcutkey ()

[3\. Form Widgets](/learn/app-development/widgets/widget-library/#form)

- [3.1 Button](/learn/app-development/widgets/form/button/)
- [3.2 Button Group](/learn/app-development/widgets/form/button-group/)
- [3.3 Calendar](/learn/app-development/widgets/form/calendar/)
- [3.4 Checkbox](/learn/app-development/widgets/form/checkbox/)
- [3.5 Checkboxset](/learn/app-development/widgets/form/checkboxset/)
- [3.6 Chips](/learn/app-development/widgets/form-widgets/chips/)
- [3.7 Color Picker](/learn/app-development/widgets/form/color-picker/)
- [3.8 Currency](/learn/app-development/widgets/form/currency/)
- [3.9 Date](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.10 Datetime](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.11 File Upload](/learn/app-development/widgets/form/file-upload/)
- [3.12 Number](#)
    - [Properties](#properties)
    - [Events](#events)
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
