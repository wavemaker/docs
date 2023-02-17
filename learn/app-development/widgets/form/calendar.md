---
title: "Calendar"
id: "calendar"
---

The **Calendar** widget is the most popular solution for scheduling events on a full-sized calendar in a web application. This widget can be used to show agenda. The calendar will be automatically switched to the Web or Mobile version, based on the device it is being viewed on.

[![](/learn/assets/calendar_feats.png)](/learn/assets/calendar_feats.png)

# Features

## Display Events in the Calendar

For displaying events in the Calendar widget you need a variable of type _Array_ or an object with single event data. The data **must** contain a field corresponding to Start property, other properties are optional. The expected date format for the value of Start property is a Date Object - ‘YYYY/MM/DD’ or ‘MM/DD/YYYY’ or ‘DD MMMM YYYY’.

1. Drag and drop a Calendar widget onto the canvas
2. Bind the variable consisting the data to the **Dataset Value** property of the widget.
3. Set the properties _Title_, _Start_, _End_, _All day_, _Class name_ to the keys of the variable bound. **Note**: Start property is a must, other properties are optional.
4. **Enable controls** There are five different types of controls on the calendar that can be enabled to:
    - navigate between the months, weeks and days, depending on the calendar view
    - select current day
    - switch the view to Month
    - switch the view to Week
    - switch the view to Day.
5. **Type** Type can be:
    - set as _basic_ - will show the events in a single row, or
    - set as Agenda - will show the complete day agenda with hours included.

## Capturing Events in the Calendar

The following are the outbound properties of a Calendar widget that can be captured. These values can be captured from JavaScript to be triggered by any Calendar event like _on Select_:

- _currentview_: gives the start and end values of the current calendar view
- _selecteddata_: gives the entire dataset corresponding to the selected item within the calendar
- _selecteddates_: gives the user selection on the calendar.

## Configurations for Calendar

**Views** Calendar comes in three views - Month, Week and Day.

- The _Month_ view of the Calendar displays all the days in the month. 
    
    <iframe width="100%" height="715" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/CalendarMonthView">Calendar Month View</iframe>
    
- The _Week_ view of the Calendar displays all the days in the week. 
    
    <iframe width="100%" height="715" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/CalendarWeekView">Calendar Week View</iframe>
    
- The _Day_ view of the Calendar displays all the events on the day. 
    
    <iframe width="100%" height="715" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/CalendarDayView">Calendar Day View</iframe>
    

# Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for the Calendar. Special characters and spaces are not allowed in widget name. |
| **Accessibility** |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.
NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in _em, pt, px_ or _% (_i.e _50px, 75%)._ |
| Height | The height of your widget can be specified in _em, pt, px_ or _% (_i.e _50px, 75%)._ |
| **Default Value** |
| Value | This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. |
| **Dataset** |
| Value | Set this property to a variable to populate the list of values to display. |
| **Events Data** |
| Title | Title for the Event, set from the Dataset fields. |
| Start | Start date or date time for the event, set from the Dataset fields. |
| End | End date or date time for the event, set from the Dataset fields. |
| All day | Whether it is an All day event or not |
| Class name | Display Class to be applied to that event. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Type | This property allows you to set the type of the calendar widget:

- agenda, or
- basic (default).

 |
| Enable Controls | This property allows you to enable the header controls for calendar widget. These include

- navigation - to navigate previous/next month/week/day(depending upon the display) on the calendar,
- today - go to today's location on the calendar,
- month - to display entire month,
- week - to display entire week,
- day - to display entire day.

All these controls on the calendar are used to navigate between the months and switch the view to _Month_(or) _Week_ (or) _Day._

**Note:-** _This property is shown only for the Web version of the Calendar._ |
| View | This property allows you to set the default view of the calendar widget:

- month (default),
- week or
- day.

 |
| Selection Mode | This property can be used to control the user selection of the dates using a simple mouse drag operation. The values can be:

- _None_: no selection, the calendar is just there to present data, not to be selected
- _Single_: only one row can be selected at a time
- _Multiple_: many rows can be selected at a time.

 |

# Events

| Event | Description |
| --- | --- |
| **Callback Events** |
| On Select | This event is triggered when a user selects one or more dates. |
| On View Render | This event handler is triggered when the calendar view is changed. |
| On Event Drop | This event handler is triggered when dragging of an event in calendar stops and the event has moved to a different day/time. |
| On Event Resize | This event handler is triggered when resizing of the event in calendar stops and the event has changed in duration. |
| On Event Click | This event handler is triggered when an event is clicked in the calendar. |
| On Event Render | This event handler is triggered when an event is rendered. |

# Methods

To set the properties of the calendar widget through the script, access the properties on the calendar as (consider the calendar with name ‘wmcalendar’) Page.Widgets.wmcalendar.propertyname and change or assign the values accordingly. For example:

- To set the first day of the month view [Default: 0 (Sunday)]: Page.Widgets.wmcalendar.calendarOptions.calendar.firstDay = 0;
- To hide the all day slot of the agenda view [Default: true]: Page.Widgets.wmcalendar.calendarOptions.calendar.allDaySlot= false;
- To set the text of the all-day slot in the agenda view [Default: ‘all-day’]: Page.Widgets.wmcalendar.calendarOptions.calendar.allDayText= ‘all-day’;

Other properties which can be set using the similar methods: For more information on Calendar, properties [see here.](https://fullcalendar.io/docs/)

| Method | Description |
| --- | --- |
| allDaySlot | Determines if the title ("all-day") slot is displayed at the top of the calendar. When false, all-day events will not be displayed in agenda views. |
| allDayText | The text for title ("all-day") slot at the top of the calendar. |
| slotDuration | The frequency for displaying time slots. Default: '00:30:00' (30 minutes) |
| slotLabelFormat | Determines the time-text that will be displayed on the vertical axis of the agenda views. default: 'h(:mm)a' The default English value will produce times that look like "5pm" and "5:30pm". |
| slotLabelInterval | Determines how often the time-axis is labeled with text displaying the date/time of slots. |
| snapDuration | If not specified, this value is automatically computed from slotDuration. With slotDuration's default value of 30 minutes, this value will be 1 hour. |
| scrollTime | Determines how far down the scroll pane is initially scrolled down. default: '06:00:00' (6am). The user will be able to scroll upwards to see events before this time. If you want to prevent users from doing this, use the minTime option instead. |
| minTime | Determines the starting time that will be displayed, even when the scrollbars have been scrolled all the way up. default: "00:00:00" The default "00:00:00" means the start time will be at the very beginning of the day (midnight). |
| maxTime | Determines the end time (exclusively) that will be displayed, even when the scrollbars have been scrolled all the way down. default: "24:00:00" The default "24:00:00" means the end time will be at the very end of the day (midnight). |
| slotEventOverlap | Determines if timed events in agenda view should visually overlap. default: true. When set to true (the default), events will overlap each other. At the most half of each event will be obscured. When set to false, there will be absolutely no overlapping. |
| selectDate() | It highlights the default date given for the calendar.
```
<table class="reference notranslate"><tbody><tr><td><p style={{textAlign: "left"}}><em>Case 1 - datavalue (data/string):</em> If the default value is date object, then that particular date will be highlighted. For example: To select 1st June 2017</p><div></div><pre class="lang:js decode:true">Page.Widgets.calendar.datavalue = '01/0/2017';
Page.Widgets.calendar.selectDate();</pre></td></tr></tbody></table>

<table class="reference notranslate"><tbody><tr><td><p style={{textAlign: "left"}}><em>Case 2 - datavalue (Object): </em>If the default value is Object, then the particular dates from start to end date will be highlighted. For example: To select dates from 1st Jan to 10th Jan 2017</p><div></div><pre class="lang:js decode:true">Page.Widgets.calendar.datavalue = {start:'01/01/2017', end:'10/01/2017'};
Page.Widgets.calendar.selectDate();</pre></td></tr></tbody></table>
```
 |
| gotoDate() | 

It shows the calendar view to default date given for the calendar. For example, to go to a specific date - 1st Jan 2107

Page.Widgets.calendar.datavalue='01/01/2017';
Page.Widgets.calendar.gotoDate();

 |
| gotoMonth(int) | 

This method renders the present view (i.e. year view will be the same) for the specified month. For example: To view the February month.

Page.Widgets.calendar.gotoMonth(2);

 |
| gotoNextMonth() | 

This method renders the present view (i.e. year view will be the same) for the next month. For example: To view the next month

Page.Widgets.calendar.gotoNextMonth();

 |
| gotoPrevMonth() | 

This method renders the present view (i.e. year view will be the same) for the prev month. For example: To view the prev month

Page.Widgets.calendar.gotoPrevMonth();

 |
| gotoNextYear() | 

This method renders the present view (i.e. month/week view will be the same) for the next year. For example: To view the next year

Page.Widgets.calendar.gotoNextYear();

 |
| gotoPrevYear() | 

 It renders the present view (i.e. month/week view will be the same ) for the previous year. For example: To view the previous year

Page.Widgets.calendar.gotoPrevYear();

 |
| rerenderEvents() |  It rerenders the events from the dataset. For example, to get events on the calendar, we use:

Page.Widgets.calendar.rerenderEvents();

 |

# Use Cases

- [How to create an event and save it in a Database](/learn/how-tos/calendar-usage-create-event/)
- [How to integrate with Google Calendar](/learn/how-tos/calender-usage-google-calendar-integration/)

[3. Form Widgets](/learn/app-development/widgets/widget-library/#form)

- [3.1 Button](/learn/app-development/widgets/form-widgets/button/)
- [3.2 Button Group](/learn/app-development/widgets/form-widgets/button-group/)
- [3.3 Calendar](#)
    - [i. Features](#features)
        - [○ Display Events](#display-events)
        - [○ Capturing Events](#capture-events)
        - [○ Calendar Configuration](#configuration)
    - [ii. Properties](#properties)
    - [iii. Events](#events)
    - [iv. Methods](#methods)
    - [v. Use Cases](#use-cases)
- [3.4 Checkbox](/learn/app-development/widgets/form-widgets/checkbox/)
- [3.5 CheckboxSet](/learn/app-development/widgets/form-widgets/checkboxset/)
- [3.6 Chips](/learn/app-development/widgets/form-widgets/chips/)
- [3.7 Color Picker](/learn/app-development/widgets/form-widgets/color-picker/)
- [3.8 Currency](/learn/app-development/widgets/form-widgets/currency/)
- [3.9 Date](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.10 Datetime](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.11 FileUpload](/learn/app-development/widgets/form-widgets/file-upload/)
- [3.12 Number](/learn/app-development/widgets/form-widgets/number/)
- [3.13 Radioset](/learn/app-development/widgets/form-widgets/radioset/)
- [3.14 Rating](/learn/app-development/widgets/form-widgets/rating-widget/)
- [3.15 Select](/learn/app-development/widgets/form-widgets/select/)
- [3.16 Select Locale](/learn/app-development/widgets/form-widgets/select-locale/)
- [3.17 Slider](/learn/app-development/widgets/form-widgets/slider/)
- [3.18 Switch](/learn/app-development/widgets/form-widgets/switch/)
- [3.19 Text](/learn/app-development/widgets/form-widgets/text/)
- [3.20 Textarea](/learn/app-development/widgets/form-widgets/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form-widgets/toggle/)
