---
title: "Calender Usage - Google Calendar Integration"
id: "calender-usage-google-calendar-integration"
---

**Prerequisites**:

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
3. Insert the below snippet in the script part of the calendar widget page. Insert the below code in the Page.onPageReady function. Here our calendar name is wmcalendar.
    
     var googleCalendarOptions = {
                googleCalendarApiKey: 'your\_google\_api\_key',
                events: {
                    googleCalendarId: 'your\_calendar\_id',
                    eventDataTransform: function(events) {
                        Page.Widgets.wmcalendar.dataSet = events;
                        return events;
                    }
                }
            };
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.0.1/gcal.js", 
      function(){
         \_.extend(Page.Widgets.wmcalendar.calendarOptions.calendar, googleCalendarOptions);
    });
    
4. Now the calendar is successfully configured with the google.
5. In order to use the data received from the google calendar API, the data will be sent to the _eventDataTransform_ callback which we have assigned earlier in the _googleCalendarOptions_ variable. Use the events parameter sent to the function. The events parameter would contain the data we received from the google calendar API.

[Calendar Cases](/learn/app-development/widgets/form-widgets/calendar/#use-cases)

- [1\. Create an event](/learn/how-tos/calendar-usage-create-event/)
- [2\. Integrate with Google Calendar](/learn/how-tos/calender-usage-google-calendar-integration/)
