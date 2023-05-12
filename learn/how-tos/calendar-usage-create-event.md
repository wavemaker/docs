---
title: "Calendar Usage - Create an Event"
id: "calendar-usage-create-event"
---
---
The procedure to create an event, when a user clicks on a particular date is described in the presentation below.

We will be using the following JavaScript for the on Before Dataset Ready event of the CRUD variable.

```js
Page.event_varonBeforeDatasetReady = function(variable, data) {
        data = data || [];
        data.forEach(function(event) {
            event.startDate = new Date(event.startDate);
            event.endDate = new Date(event.endDate);
        });
    };
```

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQ_wvcYti0_pcX6CQSYhRjaXxC0VeOfIQGm0cGW9AlDUZ_PjcxA0m6ifob35W4IYZ4ERTKfzaQrqG9-/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

[Calendar Cases](/learn/app-development/widgets/form-widgets/calendar/#use-cases)

- [1. Create an event](/learn/how-tos/calendar-usage-create-event/)
- [2. Integrate with Google Calendar](/learn/how-tos/calender-usage-google-calendar-integration/)
