---
title: "Setting Time Zone for Datetime widget "
id: "settimezone-method"
last_update: { author: "WaveMaker" }
---
The **setTimezone** method configures a widget to display date and time values based on a specified time zone, ensuring consistent behavior across different user locales and environments.

## Using setTimezone for Datetime Widget

1. Drag and drop a Datetime widget. [Learn more about Datetime](../../user-interfaces/web/components/angular-components/form-widgets/date-time-datetime.md#datetime-properties)

  ![datetime_widget.png](./assets/img/datetime_widget.png)

2. From the properties panel, set default date to **CURRENT_DATE**:

  ![current_date_default_value.png](./assets/img/current_date_default_value.png)

3. From Datetime widget events tab, set **On Before Load** event to JavaScript.

  ![js_event.png](./assets/img/js_event.png)

4. After redirecting to the script, add the below code to set Timezone of the datetime widget to the specified timezone.

```javascript
    Page.datetime1Beforeload = function($event, widget) {
          Page.Widgets.datetime2.setTimezone({
                 'timezone': 'Pacific/Kiritimati'
                });
  };
         
```

![script_screenshot.png](./assets/img/script_screenshot.png)

## Apply Time Zone to Application

In `App.js` write the below script. Using this script, the specified timezone will be used across all time-related widgets within the application.

```javascript
     App.onPageReady = function(activePageName, activePageScope, $activePageEl) {
        App.setTimezone({
        'timezone': 'Pacific/Kiritimati'
          });
}
```

![app_js_script.png](./assets/img/app_js_script.png)
![timedifference.png](./assets/img/timedifference.png)

:::note
The procedure is same for [Date and Time widget](../../user-interfaces/web/components/angular-components/form-widgets/date-time-datetime.md).
:::

:::note
For Date widget, the implementation will work from 11.4.2 version.
:::
