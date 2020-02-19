---
title: "Calender Usage - Google Calendar Integration"
id: ""
---

Google Calendar is one of the most popular ways to manage events, meetings, holidays and anything else that needs to be scheduled. In this document you'll learn how to integrate google calendar events into the WaveMaker calendar widget.

[![](/learn/assets/google_calendar.png)](/learn/assets/google_calendar.png)

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
3. Click "Calendar settings" and go to Access permissions.
4. Check "Make this calendar public".
5. Make sure "Share only my free/busy information" is **unchecked**.
6. Click "Save".

  For more information, please follow this link https://support.google.com/calendar/answer/37083?hl=en.

Obtain your **Google Calendar's ID**

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the downward arrow.
3. A menu will appear. Click "Calendar settings".
4. In the "Calendar Address" section of the screen, you will see your Calendar ID. It will look something like "abcd1234@group.calendar.google.com".

**WaveMaker App Integration**

1. Open a web responsive app
2. Drag and drop a Calendar widget
3. Insert the below function in the Page.onPageReady function of script part of the calendar widget page. Here our calendar name will be the same as that of name attribute of the calendar.
    ```javascript
     Page.Widgets.MyCalendar.addEventSource({
        source: 'google',
        googleCalendarApiKey: '*********', // your google API key.
        googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com' // Your google calendar Id. 
    })
    ```  
4. Now the calendar is successfully configured with google calendar.

[Calendar Cases](/learn/app-development/widgets/form-widgets/calendar/#use-cases)

- [1\. Create an event](/learn/how-tos/calendar-usage-create-event/)
- [2\. Integrate with Google Calendar](/learn/how-tos/calender-usage-google-calendar-integration/)
