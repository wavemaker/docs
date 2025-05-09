---
title: "Setting Time Zone for Datetime widget "
id: "settimezone-method"
---

The setTimezone method allows precise adjustment of time to specific time zones, ensuring accuracy and consistency in date and time displays.

## Using setTimezone for Datetime Widget

1. Drag and drop a Datetime widget. [learn more about Datetime](/learn/app-development/widgets/form-widgets/date-time-datetime/#datetime-properties)

  ![datetime_widget.png](/learn/assets/datetime_widget.png)  
2. From the properties panel, set default date to **CURRENT_DATE**:

  ![current_date_default_value.png](/learn/assets/current_date_default_value.png)

3.From Datetime widget events tab, set **On Before Load** event to JavaScript.

  ![js_event.png](/learn/assets/js_event.png)

4.After redirecting to the script, add the below code to set Timezone of the datetime widget to the specified timezone.

```javascript
    Page.datetime1Beforeload = function($event, widget) {
          Page.Widgets.datetime2.setTimezone({
                 'timezone': 'Pacific/Kiritimati'
                });
  };
         
```

![script_screenshot.png](/learn/assets/script_screenshot.png)

## Apply Time Zone to Application

In App.js write the below script. Using this script, the specified timezone will be used across all time-related widgets within the application.

```javascript
     App.onPageReady = function(activePageName, activePageScope, $activePageEl) {
        App.setTimezone({
        'timezone': 'Pacific/Kiritimati'
          });
}
```

![app_js_script.png](/learn/assets/app_js_script.png)
![timedifference.png](/learn/assets/timedifference.png)

:::note
The procedure is same for Date and Time widget.
:::

:::note
For Date widget the implementation will work from 11.4.2 version.
:::
