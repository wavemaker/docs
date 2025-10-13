---
title: "Events life cycle in WaveMaker"
id: "events-overview"
---
---

In a typical life-cycle of Events:

1. A user action triggers an event for the variable.
2. The event action talks to the data source via the API call.
3. The result from API call is reflected in the Data which in turn changes the user data view.

[![var_lifecycle](/learn/assets/var_lifecycle.png)](/learn/assets/var_lifecycle.png)

Four actions can be said to be responsible for triggering a variable life-cycle:

- **Request data on page load** is a property that can be set for every variable. This can be used to initialize and fetch Live Variable data during page load.
- **Pagination** - Live Variable results are paginated and page size can be configured based on the app needs.
- **Events** - Widgets are updated/notified by user events like click, submit, or variable events like pre and post update, on error etc..
- **Update data on input change** is a property which configures the ability to auto-reload Variable data, for example, if the data filter value changes dynamically from city = ‘New York’ to city = ‘Boston.

[![var_triggers](/learn/assets/var_triggers.png)](/learn/assets/var_triggers.png)

## Events Implementation

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc.

You can set each of these events to trigger an action like Javascript, another variable, navigation or notification calls or a combination of these.

Based on the application needs, a component can be assigned to these events like calling another Service/Live Variable, or a Call Variable for notification, or a JavaScript function for custom logic, etc.

A typical event flow when a variable is used to update data would be:

[![lsv_eventcycle](/learn/assets/LSV_eventcycle.png)](/learn/assets/LSV_eventcycle.png) 

:::note
The onBeforeUpdate event in the above diagram differs based upon the type of variable as explained in the table below. It is:

- onBeforeListRecords for Database CRUD Variable with READ operation
- onBeforeUpdateRecord for Database CRUD Variable with UPDATE operation
- onBeforeInsertRecord for Database CRUD Variable with INSERT operation
- onBeforeDeleteRecord for Database CRUD Variable with DELETE operation
- onBeforeUpdate for all types of variables except Database CRUD Variable
:::

For more information, see [Events](/learn/app-development/variables/events).