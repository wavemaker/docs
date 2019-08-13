---
title: "Select Locale"
id: "select-locale"
---

refers to the tools, techniques, and steps taken to enable your application to run in other languages. WaveMaker allows you to create a  dictionary of localized messages so that users can change the language of the application to experience the application in their language.

are three ways that Localization comes into effect:

1. automatically detects the user's preferred locales (from the browser) and renders the application with the locale of the user's preference if the application supports. If not, displays the application in the default language configured in application settings.
2. user can be given a choice to select the language using the Select Locale widget.
3. can also choose to trigger the language switch through user events like button click from JavaScript, the following snippet changes language to English:
    
    ({'datavalue': 'en'})
    

name is a unique identifier for Select Locale widget.

placeholder is text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

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

this property to a variable to populate the list of values to display. By default, it is bound to the supportedLocale variable which gets created when [](/learn/how-tos/localization-wavemaker-apps/ "Localization")enabled.

field

property sets the dataValue to be returned by a select editor when the list is populated using the dataSet property.

field

property sets the displayValue to show in the select editor when the list is populated using the dataSet property.

Expression

is an advanced property that gives more control over what is displayed in the drop-down select list. A Display Expression uses a Javascript expression to format exactly what is shown.

by

allows for multiple selections for ordering the display of rows based on fields in asc or desc order - up arrow for asc and down arrow for desc

required editor in wm.LiveForm may refuse to save without a required field.

Focus

property makes the element get focused automatically when the page loads.

Only

this checkbox property prevents the user from being able to change the data value of a widget.

/Disable to switch between Multiple/Single File Upload Widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

event handler is called each time your element's value changes. By default, it is set to invoke

1. which would change the language rendered in the application; and
2. event which will reload the app to enable rendering. _you do not want the app to reload whenever the locale changes remove the reloadApp event._

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

**key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

key Trigger

Explorer

\[Alt\] + shortcut key

\[Alt\] + shortcut key (_/Linux_)

\[Control\] \[Alt\] + shortcut key ()

\[Alt\] \[Shift\] + shortcut key (_/Linux_)

\[Control\] \[Alt\] + shortcut key ()

# Cases

- [Usage Scenario](/learn/app-development/widgets/form-widgets/select-locale-usage/)
- [of Error Messages](/learn/how-tos/localization-error-messages/)

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
- [3.16 Select Locale](#)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](#use-cases)
- [3.17 Slider](/learn/app-development/widgets/form/slider/)
- [3.18 Switch](/learn/app-development/widgets/form/switch/)
- [3.19 Text](/learn/app-development/widgets/form/text/)
- [3.20 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form/toggle/)
