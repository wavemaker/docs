---
title: "Text"
id: ""
---

**Text widget** is an editor widget that accepts single-line text input. You can:

1. Limit the input text by applying maximum character length
2. Apply regular expressions to validate client side text

# Properties

**Property**

**Description**

Name

The name is a unique identifier for Text widget.

Type

This property specifies the type of the variable. It can be of type:

- color,
- date, datetime-local, time
- email,
- number, month, week,
- password,
- search, text, tel, url

Placeholder

(only for alphanumeric type)

A placeholder is a text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

**Accessibility**

Hint

Any text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

Tab index

The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

Shortcut key

The shortcut key property specifies a shortcut key to activate/focus an element. (\*[See below for details](#shortcut))

**Layout**

Width

The width of your widget can be specified in px or % (i.e 50px, 75%).

Height

The height of your widget can be specified in px or % (i.e 50px, 75%).

**Default Value**

Value

This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

**Validation**

Required

A required editor in _wm.LiveForm_ may refuse to save without a required field.

Regular Expression

Enter any regular expression to be used to validate user input for client-side input validation.

Maximum Characters

(not available for color, date, time, month, week types)

Defines the maximum number of characters that can be entered in the editor.

Minimum value

(only for numeric, date, time, week, month types)

Enter minimum number. This property applies when the type is a number.

Maximum value

(only for numeric, date, time, week, month types)

Enter maximum number. This property applies when the type is a number.

Step

(only for numeric, date, time, week, month types)

Use the stepper to increment/decrement the input value by the specified step interval. Example: if step='3', legal numbers could be -3, 0, 3, 6, etc.

**Behavior**

Auto Focus

This property makes the element get focused automatically when the page loads.

Read Only

Selecting this checkbox property prevents the user from changing the data value of a widget.

Show

Showing determines whether or not a component is visible. It is a bindable property.

Load on Demand (visible only when show property is bound to a variable)

When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Disabled

If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

Auto Complete

Checking this box turns on auto-completion in the editor. As the user types into the pull-down select editor, the choices change dynamically.

Display Format

The keys in display format represent the special tokens/characters used to delimit acceptable ranges of inputs. For example, we use '9' here to accept any numeric values for a phone number: displayformat='(999) 999-9999'. The values associated with each token are regexen. Each regex defines the ranges of values that will be acceptable as inputs in the position of that token. Tokens:

- A Any letter.
- 9 Any number.
- \* Any letter or number.
- ? Make any part of the mask optional.

Update value on

If the selected value is \`blur\`: data value will be updated on blur event, \`default\`: data value will be updated on key up.

Update delay

The amount of delay in milliseconds to update the data value.

# Events

Event

Description

Change

This event handler is called each time your element's value changes.

On focus

This event handler is called each time your element is focused.

On blur

This event handler is called each time your focus leaves your element.

**Mouse Events**

On click

This event handler is called whenever the click event is triggered on a widget.

On mouse enter

This event handler is called whenever the mouse enters the widget.

On mouse leave

This event handler is called whenever the mouse leaves the widget.

**Touch Events**

On tap

This event handler is called whenever the tap event is triggered on a widget.

**Keyboard Events**

On key down

This event handler is called whenever a key is pressed down.

On key press

This event handler is called whenever a key is pressed.

On key up

This event handler is called whenever a key is released.

**Shortcutkey**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

Browser

Shortcutkey Trigger

Internet Explorer

\[Alt\] + shortcutkey

Chrome

\[Alt\] + shortcutkey (_Windows/Linux_)

\[Control\] \[Alt\] + shortcutkey (_MAC_)

Firefox

\[Alt\] \[Shift\] + shortcutkey (_Windows/Linux_)

\[Control\] \[Alt\] + shortcutkey (_MAC_)

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
- [3.12 Number](/learn/app-development/widgets/form-widgets/number/)
- [3.13 Radioset](/learn/app-development/widgets/form/radioset/)
- [3.14 Rating](/learn/app-development/widgets/form/rating/)
- [3.15 Select](/learn/app-development/widgets/form/select/)
- [3.16 Select Locale](/learn/app-development/widgets/form/select-locale/)
- [3.17 Slider](/learn/app-development/widgets/form/slider/)
- [3.18 Switch](/learn/app-development/widgets/form/switch/)
- [3.19 Text](#)
    - [i. Properties](#properties)
    - [ii. Events](#events)
- [3.20 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form/toggle/)
