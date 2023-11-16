---
title: "Setting TimeZone for Date, DateTime and Time"
id: "timezone-date-datetime-time"
---

setTimezone enables the adjustment of time information to specific time zones for accurate and consistent date and time displays.

## Steps to use setTimeZone for Date time widget

- Drag and drop a DateTime widget
- Set default date to current_date:

  ![current-date-default-value.png](/learn/assets/current-date-default-value.png)
- From Datetime widget events tab, set “On Before Load“ event to JavaScript.

   ![JS-event.png](/learn/assets/JS-event.png)
- In script, add the below code.
   ```
    Page.datetime1Beforeload = function($event, widget) {
          Page.Widgets.datetime2.setTimezone({
                 'timezone': 'Pacific/Kiritimati'
                });
  };
         
   ```
   For App Level, in App.js write the below script:

   ```
     App.onPageReady = function(activePageName, activePageScope, $activePageEl) {
        App.setTimezone({
        'timezone': 'Pacific/Kiritimati'
          });
}
   ```   

     
      
       

 Using this script, the specified timezone will be used across all time-related widgets within the app.
- Output
   

   
![timedifference.png](/learn/assets/timedifference.png)




The procedure is same for Date and Time widget.

Note: For Date widget the implementation will work from 11.4.2 version.