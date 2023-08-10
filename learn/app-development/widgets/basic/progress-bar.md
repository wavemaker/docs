---
title: "Progress Bar"
id: "progress-bar"
---

**Progress Bar** widget can be used to show the status of any given event. It can be used to represent the completion progress of a task. Progress may be either indeterminate — meaning it is unclear how much work remains before the task is complete (e.g., the task is waiting for a response from a remote host) — or a numeric value between 0 and a given maximum, explicitly specifying the fraction of work that has so far been completed

## Features

<iframe width="100%" height="400" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ProgressBar">Progress Bar</iframe>

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for progress bar widget. |
| Type | Indicates the format you want to use to display the progress bar. Choose from   - _default_,   - _default-striped_,   - _success_,   - _success-striped_,   - _info_,   - _info-striped_,   - _warning_,   - _warning-striped_,   - _danger_,   - _danger-striped_.    |
| **Accessibility** |
| Hint | Any text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.     NOTE: In Safari browsers, by default, Tab highlights only text fields.   To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Dataset** |
| Value | Set this property to a variable to populate the list of values to display. |
| **Default Value** |
| Value | This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. |
| Minimum Value | Enter minimum number for the Progress bar. |
| Maximum Value | Enter a maximum number for the Progress bar. |
| **Behavior** |
| Poll Interval | Time interval in milliseconds to poll the service. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Display Format | Format in which the progress needs to be displayed. You can choose from a list of decimal options like 9, 9.9, 9.99 etc. If the progress bar's data value is 30.7056 and the selected display format is: -  9.9 then label will be rounded as 30.7 -  9.999% then label will be rounded to 30.706% |
| Caption placement | Placement of progress bar value can be   - inside or   - hidden    |

## Events

| **Event** | **Description** |
| --- | --- |
| **Mouse Events** |
| On click | This event handler is called whenever the click event is triggered on a widget. |
| On double click | This event handler is called whenever the double click event is triggered on a widget. |
| On mouse enter | This event handler is called whenever the mouse enters the widget. |
| On mouse leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On Tap | This event handler is called whenever the tab event is triggered on a widget. |
| On Double Tap | This event handler is called whenever the double tap event is triggered on a widget. |
| On Long Tap | This event handler is called whenever the long tap event is triggered on a widget. <br/>Note: Long Tap event is only supported in React Native applications.|
| **Callback Events** |
| On start | This event handler is called on start of the progress. |
| On complete | This event handler is called on complete of the progress. |
| On before update | This event handler is called on before update of the progress. |

