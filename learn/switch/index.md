---
title: "Switch"
id: ""
---

**Switch widget** can help switching between 3 or more different options by pressing a single key.

# Properties

Property

Description

Name

The name is a unique identifier for Switch widget.

**Accessibility**

Hint

Any text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

Tab index

The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

**Layout**

Width

The width of your widget can be specified in px or % (i.e 50px, 75%).

Height

The height of your widget can be specified in px or % (i.e 50px, 75%).

**Default Value**

Value

This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. By default, it is set to _yes_.

**Dataset**

Value

Set this property to a variable to populate the list of values to display. By default, it is set to _yes, no, maybe_.

Data field

This property sets the dataValue to be returned by a select editor when the list is populated using the dataSet property.

Display field

This property sets the displayValue to show in the select editor when the list is populated using the dataSet property.

Order by

This allows for multiple selections for ordering the display of rows based on fields in asc or desc order - up arrow for asc and down arrow for desc

**Validation**

Required

A required editor in wm.LiveForm may refuse to save without a required field.

**Behavior**

Show

Showing determines whether or not a component is visible. It is a bindable property.

Load on Demand (visible only when show property is bound to a variable)

When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Disabled

If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

# Events

**Event**

**Description**

Change

This event handler is called each time your element's value changes.

**Mouse Events**

On click

This event handler is called whenever the click event is triggered on a widget.

On mouse enter

This event occurs when the pointer is moved onto a widget.

On mouse leave

The mouse leave event occurs when the mouse pointer leaves a widget.

**Touch Events**

On tap

This event handler is called whenever the tap event is triggered on a widget.

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
- [3.14 Rating](/learn/app-development/widgets/form/rating/)
- [3.15 Select](/learn/app-development/widgets/form/select/)
- [3.16 Select Locale](/learn/app-development/widgets/form/select-locale/)
- [3.17 Slider](/learn/app-development/widgets/form/slider/)
- [3.18 Switch](#)
    - [i. Properties](#properties)
    - [ii. Events](#events)
- [3.19 Text](/learn/app-development/widgets/form/text/)
- [3.20 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form/toggle/)
