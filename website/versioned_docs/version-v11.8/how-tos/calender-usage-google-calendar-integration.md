---
title: "Calender Usage - Google Calendar Integration"
id: "calender-usage-google-calendar-integration"
---
---

Google Calendar is one of the most popular ways to manage events, meetings, holidays and anything else that needs to be scheduled. In this document you'll learn how to integrate google calendar events into the WaveMaker calendar widget.

[![](/learn/assets/google_calendar.png)](/learn/assets/google_calendar.png)

## Prerequisites

### Obtain Google Calendar API Key

1. Go to the [Google Developer Console](https://console.developers.google.com) and create a new project.
2. Once you are in the project, navigate to **Library** on the sidebar.
3. Search for `Google Calendar API` and **Enable** it.
4. On the overview tab of Google calendar API, click **Create Credentials**.
5. In this step, you should add credentials to your project. Follow the steps below to add credentials.
 - Step 1: For `Which API are using?` choose `Google Calendar API`.
 - Step 2: For `Where will you be calling the API from?` choose `Web Browser(JavaScript)`.
 - Step 3: For `What data you will be accessing?` choose an appropriate option. For example, select **User Data** and continue to "What Credentials do I need?".
6. You can skip the "Set up OAuth consent screen" prompt.
7. For "Create an OAuth 2.0 client ID" enter the domain details to host your calendar. If you do not have the details, leave them blank and go to the **Credentials** tab.

:::tip
You can enter the domain details later if you want.
:::
 
8. The new API key will appear in the credentials section. It can takes a few minutes before it starts working.

### Make your Google Calendar public

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the downward arrow.
3. Click "Calendar settings" and go to Access permissions.
4. Check "Make this calendar public".
5. Make sure "Share only my free/busy information" is **unchecked**.
6. Click "Save".

For more information, please follow this link https://support.google.com/calendar/answer/37083?hl=en.

### Obtain your Google Calendar's ID

1. In the Google Calendar interface, locate the "My calendars" area on the left.
2. Hover over the calendar you need and click the downward arrow.
3. A menu will appear. Click "Calendar settings".
4. In the "Calendar Address" section of the screen, you will see your Calendar ID. It will look something like "abcd1234@group.calendar.google.com".

## WaveMaker App Integration

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

## See Also

[Calendar Cases](/learn/app-development/widgets/form-widgets/calendar/#use-cases)  
[Create an event](/learn/how-tos/calendar-usage-create-event/)
