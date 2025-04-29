---
title: "Page Events"
id: "page-events"
sidebar_label: "Events"
---
---

Events provide a way for you to define the actions that take place when something occurs in your application. There are many events that occur within a WaveMaker application. The most common events are user interface events, such as when a user clicks a button. Events are also triggered when an editor's value changes, and even when a** Variable** gets new data from the server. You have several options for specifying what will happen when a button is clicked.

[![](/learn/assets/event_types.png)](/learn/assets/event_types.png) 

## Mouse Events On-Click Properties

### No Event
Take no action.

### JavaScript
You can write your own event handler in JavaScript, providing unlimited flexibility to define the resulting action.

### Stop Propagation
If applied for an event it stops event propagating to its parent. Ex: - Button is present inside a container. Both 'Container' and 'Button' have click events and you don't want to propagate click of the button to its parent ie. to trigger container click. You can add 'Stop Propagation' after the click of 'Button'. With 'Stop Propagation' only 'Button' click is triggered. Without 'Stop Propagation' both click events will be triggered. One exception is for 'List' widget as click on any widget inside list will trigger first the click of 'List' widget as it is being done in capturing stage.

### New Variable
For example, a user clicks a _Search_ button. A Service is invoked whenever the button is pressed, causing the service to be executed and the data of the corresponding Variable is updated. Or the user clicks a _Save_ button, and the corresponding Variable you select for your event will automatically write its current source data to the database.

### New Action
For example, a help dialog automatically displays when a help button is clicked. Or the user clicks a _Next Page_ button, and the _Navigation Action_you select for your event loads a new page.

## Event Categorization

The events are categorized as follows:

|Events| Description |
|---|---|
|**Common events** | Triggered by multiple actions. These include _Change_, _Focus_, _Blur_, and more.|
|**Mouse Events** | Capture the mouse activity on your application. These include _Click_, _Double Click_, _Mouse Enter_, _Mouse Leave_, and more. |
| **Touch Events** | Gets triggered when running the app on a mobile or tablet or any other smart device. These events include: _Swipe Up_, _Swipe Down_, _Swipe Left_, _Swipe Right_, _Pinch In_, _Pinch Out_, and more.|
| **KeyBoard Events** | Capture the key strokes. These include _Enter Key Press_, and more.|
| **CallBack Events** | Widget-specific special events. For example, _Record Delete_, _on Select_, _on Deselect_ for a grid widget; _Before Records Update_ for Data Navigator. |

## Multiple Actions on an Event

WaveMaker supports multi-action event handling. This means you can assign a series of actions that can be triggered by a single event. Click on the "**+**" next to the event name to add more actions. When you use a series of variables to trigger on an event ensure that you handle eventualities like one callback was a success and other failed.

We have seen how Page Layouts, Navigation, and Events help in defining the flow of the app. Check out these [use cases](/learn/app-development/ui-design/use-cases-ui-design/) to further your experience.

## See Also

[Page Navigation](/learn/app-development/ui-design/page-concepts/page-navigation)  
[Prevent Leaving Page with Unsaved Changes](/learn/how-tos/prevent-user-leaving-page-unsaved-changes)  
