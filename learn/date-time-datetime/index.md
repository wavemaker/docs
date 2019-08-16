---
title: "Date,  Time and  Datetime"
id: ""
---

**, Time and Datetime** widgets can be used to capture the date and time-related data from the user. Drag and drop of these widgets result in a composite widget along with a label.

The main include

- **Pattern** which defines how the date/time/date time is rendered in the UI, and
- **Pattern** defines the format of output data value returned by these widgets.
- **Step and Minute Step** defines the time picker UI for the time and datetime widgets.
- date and datetime widgets, **Date, Max Date, Exclude Days and Dates** can be set. In this case, the date picker will not have the invalid dates available for selection.

The following tables show the behavior in various scenarios: _Patterns_: [![](../assets/date_patterns.png)](../assets/date_patterns.png)

_Patterns_: [![](../assets/time_patterns.png)](../assets/time_patterns.png)

_Patterns_: [![](../assets/datetime_patterns.png)](../assets/datetime_patterns.png)

: For Time and Datetime widgets the time picker UI based on the time pattern given. For example, if the pattern is ‘hh:mm:ss a’, seconds and AM/PM pattern is displayed in time picker. If the pattern is ‘HH:mm’, 24Hr format is shown. Seconds and AM/PM are not displayed in time picker.

### Properties

name is a unique identifier for Date widget.

placeholder is text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

key

shortcut key property specifies a shortcut key to activate/focus an element. (\* [below for details](#shortcut))

width of your widget can be specified in or _% (_ _50px, 75%)._

**Value**

is the default value to display value for an editor widget, it can be set to current date. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

**Format**

Pattern

pattern lets you override how dates are displayed. Common options are 'dd-MMMM-yyyy', 'yyyy/MM/dd'.

Format

the format of output datavalue returned by the date widget. Default output format is 'yyyy-MM-dd', which returns the equivalent data value. E.g data value for '19/06/2015' is '2015-06-19'. If the output format is given as 'MMM dd, yyyy', widget returns datavalue as 'Jun 19, 2015'.

required editor in wm.LiveForm may refuse to save without a required field.

Date

a minimum date. The dates before this will not be shown in the date picker. The field is bindable.

Date

a maximum date. The dates after this will not be shown in the date picker. The field is bindable.

Days

days which are to be excluded from the selection from the date picker.

Dates

string and a variable containing dates which will be excluded from the selection from the date picker.

DatePicker on

this property you can control the visibility of the Date Picker. You can choose to open it on:

- click and button click (default setting), or
- on button click.

Week Number

set, week number will be displayed in the date picker UI.

Focus

property makes the element get focused automatically when the page loads.

Only

this checkbox property prevents the user from being able to change the data value of a widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

### Properties

name is a unique identifier for Date widget.

placeholder is text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

key

shortcut key property specifies a shortcut key to activate/focus an element. (\* [below for details](#shortcut))

width of your widget can be specified in or _% (_ _50px, 75%)._

**Value**

is the default value to display value for an editor widget, it can be set to current date. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

**Format**

Pattern

pattern lets you override how dates are displayed. Common options are 'dd-MMMM-yyyy', 'yyyy/MM/dd'.

Step

of hours to increase or decrease.

Step

of minutes to increase or decrease.

Format

the format of output datavalue returned by the date time widget. Default output format is 'timestamp', which returns the equivalent timestamp integer. E.g timestamp value for '2012-12-12 12:12 PM' is '1355294520000'. If the output format is given as 'yyyy-MM-dd hh:mm a', widget returns datavalue as '2012-12-12 12:12 PM'.

required editor in wm.LiveForm may refuse to save without a required field.

Date

a minimum date. The dates before this will not be shown in the date picker. The field is bindable.

Date

a maximum date. The dates after this will not be shown in the date picker. The field is bindable.

Days

days which are to be excluded from the selection from the date picker.

Dates

string and a variable containing dates which will be excluded from the selection from the date picker.

DateTimePicker on

this property you can control the visibility of the DateTime picker. You can choose to open it on:

- click and button click (default setting), or
- on button click.

Week Number

set, week number will be displayed in the date picker UI.

Focus

property makes the element get focused automatically when the page loads.

Only

this checkbox property prevents the user from being able to change the data value of a widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

### Properties

name is a unique identifier for Date widget.

placeholder is text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

key

shortcut key property specifies a shortcut key to activate/focus an element. (\* [below for details](#shortcut))

**Value**

is the default value to display value for an editor widget, it can be set to current date. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

**Format**

Pattern

pattern lets you override how time is displayed. Common options are 'hh-mm-ss'.

Step

of hours to increase or decrease.

Step

of minutes to increase or decrease.

Format

the format of output data value returned by the time widget. Default output format is 'timestamp', which returns the equivalent timestamp integer. E.g timestamp value for '10:10:00 AM' is '16800000'. If the output format is given as 'hh:mm a', widget returns data value as '10:10 AM'.

required editor in wm.LiveForm may refuse to save without a required field.

TimePicker on

this property you can control the visibility of the Time picker. You can choose to open it on:

- click and button click (default setting), or
- on button click.

Focus

property makes the element get focused automatically when the page loads.

Only

this checkbox property prevents the user from being able to change the data value of a widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

**key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

key Trigger

Explorer

\[Alt\] + shortcut key

\[Alt\] + shortcut key (_/Linux_)

\[Control\] \[Alt\] + shortcut key ()

\[Alt\] \[Shift\] + shortcut key (_/Linux_)

\[Control\] \[Alt\] + shortcut key ()

### Events

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

### Events

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

### Events

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
- [3.9 Date](/learn/app-development/widgets/form/date/)
    - [Features](#features)
    - [Properties](#date-properties)
    - [Events](#date-events)
- [3.10 Datetime](/learn/app-development/widgets/form-widgets/date-time-datetime/)
    - [Features](#features)
    - [Properties](#datetime-properties)
    - [Events](#datetime-events)
- [3.11 FileUpload](/learn/app-development/widgets/form/file-upload/)
- [3.12 Radioset](/learn/app-development/widgets/form/radioset/)
- [3.13 Rating](/learn/app-development/widgets/form/rating/)
- [3.14 Select](/learn/app-development/widgets/form/select/)
- [3.15 Select Locale](/learn/app-development/widgets/form/select-locale/)
- [3.16 Slider](/learn/app-development/widgets/form/slider/)
- [3.17 Switch](/learn/app-development/widgets/form/switch/)
- [3.18 Text](/learn/app-development/widgets/form/text/)
- [3.19 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.20 Time](/learn/app-development/widgets/form/time/)
    - [Features](#features)
    - [Properties](#time-properties)
    - [Events](#time-events)
- [3.21 Toggle](/learn/app-development/widgets/form/toggle/)
