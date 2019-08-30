---
title: "Select"
id: ""
---

The Select widget provides a way for users to select an item from a drop-down list of choices. The selection can be captured through the _displayValue_ property.

The number of records fetched will be limited by the "Records per Request" property of the underlying Variable to which the Select widget is bound to. Refer to the corresponding Variable to change this value.

# Properties

Property

Description

Name

The name is a unique identifier for Select widget.

Placeholder

A placeholder is text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

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

**Dataset**

Value

Set this property to a variable to populate the list of values to display.

Data field

This property sets the dataValue to be returned by a select editor when the list is populated using the dataSet property.

Display field

This property sets the displayValue to show in the select editor when the list is populated using the dataSet property.

Display Expression

This is an advanced property that gives more control over what is displayed in the drop-down select list. A Display Expression uses a Javascript expression to format exactly what is shown.

Order by

This allows for multiple selections for ordering the display of rows based on fields in asc or desc order - up arrow for asc and down arrow for desc

**Validation**

Required

A required editor in wm.LiveForm may refuse to save without a required field.

**Behavior**

Auto Focus

This property makes the element get focused automatically when the page loads.

Read Only

Selecting this checkbox property prevents the user from being able to change the data value of a widget.

Multiple

Enable/Disable to switch between Multiple/Single File Upload Widget.

Show

Showing determines whether or not a component is visible. It is a bindable property.

Load on Demand (visible only when show property is bound to a variable)

When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Disabled

If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

# Events

Event

Description

Change

This event handler is called each time your element's value changes. By default, it is set to invoke $root.changeLocale which would change the language rendered in the application.

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

**Shortcut key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

Browser

Shortcut key Trigger

Internet Explorer

\[Alt\] + shortcut key

Chrome

\[Alt\] + shortcut key (_Windows/Linux_)

\[Control\] \[Alt\] + shortcut key (_MAC_)

Firefox

\[Alt\] \[Shift\] + shortcut key (_Windows/Linux_)

\[Control\] \[Alt\] + shortcut key (_MAC_)

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
- [3.15 Select](#)
    - [i. Properties](#properties)
    - [ii. Events](#events)
    - [iii. Use Cases](/learn/app-development/widgets/form-widgets/select-use-cases/)
- [3.16 Select Locale](/learn/app-development/widgets/form/select-locale/)
- [3.17 Slider](/learn/app-development/widgets/form/slider/)
- [3.18 Switch](/learn/app-development/widgets/form/switch/)
- [3.19 Text](/learn/app-development/widgets/form/text/)
- [3.20 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form/toggle/)
