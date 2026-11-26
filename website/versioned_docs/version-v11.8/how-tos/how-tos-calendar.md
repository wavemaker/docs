---
title: "How Tos: Calendar"
id: "how-tos-calendar"
---
---

## Create an Event using Calendar

You can use Calendar widget to create an event when user clicks on a date. We will be using a Database table to store the created event. We will be using a Design Dialog to capture the event details. We are using a database table with the following structure: 


and the Live Variable created for this table: 


1. Create or open a web responsive app
2. Add a page for the Calendar event, we have used a blank template and layout for the page
3. Drag and drop a Calendar widget onto the page
4. Bind the Dataset Value property to the Live Variable and set the Events Data to the corresponding fields of the Live Variable (event_var) 
5. Drag and drop a Design Dialog on the same page. Note: Design Dialog will be placed in a page view and you can switch between the page and page view using the tab at the bottom of the page.
6. We will be using the Design Dialog to capture the Title, Description and All Day Event data for the event being created. Add two text widgets and a radio button to the dialog. 
7. The Save of Design Dialog should update the database with the event details. For this we will be using a Service Variable triggering the createEvents operation.  The data for create event will be taken from the Calendar and Design Dialog  The On Success event of this service variable should close the design dialog and refresh the Calendar which is achieved by calling the Live Variable bound to the Calendar. 
8. Selecting a date should display the dialog created above. Switch to Page view (from the bottom of the canvas) and select the Event tab from the Calendar Properties panel. For On select event, choose dialog1.open method. 
9. Run the app, click on any date (or multiple dates if Multiselect was checked in the Calendar properties) and the dialog will pop, enter the details and click on save. You will see the new entry in you calendar. 
## Script Access

To set the properties of the calendar widget through script, access the properties on the calendar as (consider the calendar with name ‘wmcalendar’) $scope.Widgets.wmcalendar.propertyname and change or assign the values accordingly. For example:

- To set the first day of the month view [Default: 0 (Sunday)]: 
```
$scope.Widgets.wmcalendar.calendarOptions.calendar.firstDay = 0;
```
- To hide the all day slot of the agenda view [Default: true]:
```
$scope.Widgets.wmcalendar.calendarOptions.calendar.allDaySlot= false;
```
- To set the text of the all day slot in the agenda view [Default: ‘all-day’]: 
```
$scope.Widgets.wmcalendar.calendarOptions.calendar.allDayText= ‘all-day’;
```

Other properties which can be set using the similar methods:

| Method | Description |
| --- | --- |
| allDaySlot | Determines if the title ("all-day") slot is displayed at the top of the calendar. When false, all-day events will not be displayed in agenda views. |
| allDayText | The text for title ("all-day") slot at the top of the calendar. |
| slotDuration | The frequency for displaying time slots. Default: '00:30:00' (30 minutes) |
| slotLabelFormat | Determines the time-text that will be displayed on the vertical axis of the agenda views. default: 'h(:mm)a' The default English value will produce times that look like "5pm" and "5:30pm". |
| slotLabelInterval | Determines how often the time-axis is labelled with text displaying the date/time of slots. |
| snapDuration | If not specified, this value is automatically computed from slotDuration. With slotDuration's default value of 30 minutes, this value will be 1 hour. |
| scrollTime | Determines how far down the scroll pane is initially scrolled down. default: '06:00:00' (6am). The user will be able to scroll upwards to see events before this time. If you want to prevent users from doing this, use the minTime option instead. |
| minTime | Determines the starting time that will be displayed, even when the scrollbars have been scrolled all the way up. default: "00:00:00" The default "00:00:00" means the start time will be at the very beginning of the day (midnight). |
| maxTime | Determines the end time (exclusively) that will be displayed, even when the scrollbars have been scrolled all the way down. default: "24:00:00" The default "24:00:00" means the end time will be at the very end of the day (midnight). |
| slotEventOverlap | Determines if timed events in agenda view should visually overlap. default: true. When set to true (the default), events will overlap each other. At the most half of each event will be obscured. When set to false, there will be absolutely no overlapping. |

Google Calendar Integration**Prerequisites**:

Obtain **Google Calendar API Key**

1. Go to the [Google Developer Console](https://console.developers.google.com/) and create a new project.
2. Once in the project, go to **APIs & auth > APIs** on the sidebar.
3. Find "Calendar API" in the list and turn it ON.
4. On the sidebar, click **Credentials**.
5. In the "Public API access" section, click "Create new Key".
6. Choose "Browser key".
7. If you know what domains will host your calendar, enter them into the box. Otherwise, leave it blank. You can always change it later.
8. Your new API key will appear. It might take second or two before it starts working.

Make your **Google Calendar public:**

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the downward arrow.
3. A menu will appear. Click "Share this Calendar".
4. Check "Make this calendar public".
5. Make sure "Share only my free/busy information" is **unchecked**.
6. Click "Save".

Obtain your **Google Calendar's ID**

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the downward arrow.
3. A menu will appear. Click "Calendar settings".
4. In the "Calendar Address" section of the screen, you will see your Calendar ID. It will look something like "abcd1234@group.calendar.google.com".

**WaveMaker App Integration**

1. Open a web responsive app
2. Drag and drop a Calendar widget
3. Include the following script inside the HEAD tag of _index.html_ in the app (you can locate the index.html file from the left File panel).

```js 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.0.0/gcal.js"></script>
```

4. Insert the below snippet in the script part of the calendar widget page. Insert the below code in the $scope.onPageReady function. Here our calendar name is wmcalendar.

```js    
    var googleCalendarOptions = {
            googleCalendarApiKey: 'your_google_api_key',
            events: {
                googleCalendarId: 'your_calendar_id',
                eventDataTransform: function(events) {
                    $scope.Widgets.wmcalendar.dataSet = events;
                    return events;
                }
            }
        };

_.extend($scope.Widgets.wmcalendar.calendarOptions.calendar, googleCalendarOptions );
```

5. Now the calendar is successfully configured with the google.
6. In order to use the data received from the google calendar API, the data will be sent to the _eventDataTransform_ callback which we have assigned earlier in the _googleCalendarOptions_ variable. Use the events parameter sent to the function. The events parameter would contain the data we received from the google calendar api.
