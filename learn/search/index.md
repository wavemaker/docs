---
title: "Search"
id: "search"
---

allows you to add search capability via the **widget** Data Table widget has the **Search** property which lets you add the search facility to your table.

addition, you can use the widget for flexibility and control.

the Search widget you can set the following properties:

- the dataset property of the search widget to the variable created from a Database or Web Service.
- the **key** and **Value** properties to the column name you want to search by. : The Search Key, Label Value, and Image Source are bindable. For example, the Label Value can be bound to a field 'deptcode' or to a combination such as 'deptcode+name', using the expression option from the binding dialog.
- the as:
    - which would present a dropdown list of values for the user to select from; or
    -  (the default setting) where the filtered list of values is presented based on the user entry
- the **properties:**
    - \- which contains the dataset returned by the search to be bound to Live list or Data Table,
    - \- search text entered by the user
    -  - which contain the list of matches i.e. matches that are displayed in the dropdown while typing (note: the type of result is based on selected datafield, if set to "All Fields" the complete object is returned) and
    
- \- From the event tab, set the event to JavaScript. The selected item can be accessed by '$event.data.item' property

name is a unique identifier for your widget.

of the widget can be set to

- which would present a dropdown list of values for the user to select from; or
-  (the default setting) where the filtered list of values is presented based on the user entry

: All the properties are the same for both types.

placeholder is a text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user.

text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

Key

shortcut key property specifies a shortcut key to activate/focus an element. The way of accessing the shortcut key is varying in different browsers Internet Explorer - \[Alt\] + shortcutkey, Chrome - \[Alt\] + shortcutkey (Windows/Linux) \[Control\] \[Alt\] + shortcutkey (MAC), Firefox - \[Alt\] \[Shift\] + shortcutkey (Windows/Linux) \[Control\] \[Alt\] + shortcutkey (MAC), Safari - \[Alt\] + shortcutkey (Windows) \[Control\] \[Alt\] + shortcutkey (MAC)

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

this property to a variable to populate the list of values to display.

Key

to be searched upon, in the list object.

Value

is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

Source

image which displays along with the Label Value

field

property sets the dataValue to be returned by a select editor when the list is populated using the dataSet property.

by

order

Mode

how to apply the filter on fields. For examples, match the query anywhere (or start or end) in the string.

: , , , end, , anywhere,  and exact.

 matchmode: startignorecase

:

1. start: "Wa" would match "WaveMaker"
2. end: "Maker" would match "WaveMaker"
3. anywhere: "ve" would match "WaveMaker"

**Value**

is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the data value returned by the widget.

**Format**

the search results to be displayed in the auto-complete.

required editor in wm.LiveForm may refuse to save without a required field.

Only

this checkbox property prevents the user from being able to change the data value of a widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred until the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only.

Chars

minimum number of characters to be entered by the user before the search query is triggered. The value should be greater than 0. The default value is 1.

Time

(in ms) after which the query gets triggered when the last character is typed by the user. Default delay is 250 ms. This delay is for performance optimization to reduce multiple network calls.

Width

this property configure the width of the picture that is shown in typeahead results' dropdown. Default value is set to '16px'.

loading message

message will be displayed when waiting for data to load.

complete message

message will be displayed when there is no more data to load.

event handler is called each time your element's value changes.

Focus

event handler is called each time your element is focused.

Blur

event handler is called each time your focus leaves your element.

**Events**

Submit

event handler is called whenever a submit event is triggered.

Select

event handler is called when the tab is selected

Before Service Call

event is triggered before sending the service call for fetching the search results. can be modified in the event.

[4\. Basic Widgets](/learn/app-development/widgets/widget-library/#basic)

- [4.1 Anchor](/learn/app-development/widgets/basic/anchor/)
- [4.2 Audio](/learn/app-development/widgets/media-widgets/)
- [4.3 HTML](/learn/app-development/widgets/basic/html/)
- [4.4 Icon](/learn/app-development/widgets/basic/icon/)
- [4.5 Iframe](/learn/app-development/widgets/basic/iframe/)
- [4.6 Label](/learn/app-development/widgets/basic/label/)
- [4.7 Message](/learn/app-development/widgets/basic/message/)
- [4.8 Picture](/learn/app-development/widgets/media-widgets/)
- [4.9 Progress Bar](/learn/app-development/widgets/basic/progress-bar/)
- [4.10 Richtext Editor](/learn/app-development/widgets/basic/richtext-editor/)
- [4.11 Search](/learn/app-development/widgets/basic/search/)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](/learn/app-development/widgets/basic/search-basic-usage/)
- [4.12 Spinner](/learn/app-development/widgets/basic/spinner/)
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
