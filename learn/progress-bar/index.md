---
title: "Progress Bar"
date: "2016-09-13"
---

**Bar** widget can be used to show the status of any given event. It can be used to r the completion progress of a task. Progress may be either indeterminate — meaning it is unclear how much work remains before the task is complete (e.g., the task is waiting for a response from a remote host) — or a numeric value between 0 and a given maximum, explicitly specifying the fraction of work that has so far been completed

<iframe width="100%" height="400" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ProgressBar">Bar</iframe>

name is a unique identifier for progress bar widget.

the format you want to use to display the progress bar. Choose from

- ,
- _\-striped_,
- ,
- _\-striped_,
- ,
- _\-striped_,
- ,
- _\-striped_,
- ,
- _\-striped_

text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

this property to a variable to populate the list of values to display.

**Value**

is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

Value

minimum number for the Progress bar.

Value

a maximum number for the Progress bar.

Interval

interval in milliseconds to poll the service.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Format

in which the progress needs to be displayed. You can choose from a list of decimal options like 9, 9.9, 9.99 etc. If the progress bar's data value is 30.7056 and the selected display format is: -  9.9 then label will be rounded as 30.7 -  9.999% then label will be rounded to 30.706%

placement

of progress bar value can be

- or

**Events**

click

event handler is called whenever the click event is triggered on a widget.

double click

event handler is called whenever the double click event is triggered on a widget.

mouse enter

event handler is called whenever the mouse enters the widget.

mouse leave

event handler is called whenever the mouse leaves the widget.

**Events**

tap

event handler is called whenever the tab event is triggered on a widget.

double tap

event handler is called whenever the double tap event is triggered on a widget.

**Events**

start

event handler is called on start of the progress.

complete

event handler is called on complete of the progress.

before update

event handler is called on before update of the progress.

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
    - [Properties](#properties)
    - [Events](#events)
- [4.10 Richtext Editor](/learn/app-development/widgets/basic/richtext-editor/)
- [4.11 Search](/learn/app-development/widgets/basic/search/)
- [4.12 Spinner](/learn/app-development/widgets/basic/spinner/)
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
