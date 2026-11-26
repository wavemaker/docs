---
title: "Timer Action"
id: "timer-action"
---

**Timer action** can be used to trigger events repeatedly at timed intervals.

## Action Creation

1. To create a Timer Action:
    - Select the Action option from Variables on the Workspace Toolbar [![](/learn/assets/action_sel.png)](/learn/assets/action_sel.png)and click New Action from the Actions dialog. [![](/learn/assets/action_new.png?v=20)](/learn/assets/action_new.png?v=20)
2. A **New Action** wizard will open.
    1. Choose **Timer **Type
    2. **Name** - set by default which can be modified
    3. **Owner** - the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app.
    4. You can set the **Properties** ([know more](#properties))
    5. Click **Done** to create the Action
3. You will be directed to the Actions dialog, with the new action listed. [![](/learn/assets/action_timer.png)](/learn/assets/action_timer.png) As you can see:
    1. a Timer Action is created,
    2. the properties tab contains the _behavior_ properties. [Know more about properties](#properties).
    3. the events tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Properties

Timer Variables are special variables that can be used to trigger a particular event at regular time intervals.

| **Property** | **Description** |
| --- | --- |
| **Behavior** |
| Trigger on page load | Selecting this option will ensure that the timer starts at page load. |
| Trigger after a delay | Defines the time delay, in milliseconds, before triggering the specified event. |
| Repeat after delay | Specifies whether the timer is one-time or a repeating event. |

# Events

Once a Timer Action is triggered, if it is Page scoped, then the action (and its repeating event) is destroyed when you navigate away from the page. If it is App scoped, it has to be manually stopped through _cancel_ method.

1. **on Timer Fire**: This event will be triggered on the completion of the timer. If the _Delay_ property on the Timer Action is set then the event is invoked after the milliseconds of time supplied in ‘delay’ property of the timer action. The event is invoked once if ‘_repeating_’ flag is off and repetitively after every ‘delay’ milliseconds if ‘repeating’ flag is on. The repeating Timer Action event can be stopped in either of the two ways:
    
    1. Calling the _cancel_ method on the Timer Action through the script at any point in time.
    2. If it is Page scoped, the action (and its repeating event) is destroyed once you navigate away from the page. If it is App scoped, it has to be manually stopped through the above step.
    
    **Usage Examples:**
    
    You can assign a Variable (or multiple Variables) or a Javascript method with custom logic in for dynamic behavior as required.

1. Call a Variable that fetches the updates from Employee database with the latest after every 30 seconds. [![](/learn/assets/var_timer_props.png)](/learn/assets/var_timer_props.png) [![](/learn/assets/var_timer_event.png)](/learn/assets/var_timer_event.png)
2. A Variable that gives Facebook-like feeds after a certain timestamp. Assign Javascript to the onTimerFire event and write following logic. Once the Timer Action is triggered, if repeating property is set, then the variable will be invoked after every delay milliseconds.
    
    Page.timerAction1onTimerFire = function(variable, data){
        // set the dynamic input on the variable
        Page.Variables.WebServiceVariabe.setInput('timestamp', Date.now());
        Page.Variables.WebServiceVariabe.invoke();
    };
    
     

# Methods

<table class="reference notranslate"><tbody><tr><td><a href="#invoke">invoke</a></td><td><a href="#cancel">cancel</a></td></tr></tbody></table>

## invoke(object, success callback, error callback)

This method invokes the timer variable

_Parameters_:

- options: object with no fields, an empty object has to be passed
- success: callback
- error: callback

_Return Value_: None

_Example:_

  Page.Actions.timerAction1.invoke();

## cancel()

This method aborts the timer variable.

_Parameters_: none

_Return Value_: none

_Example:_

Page.Actions.timerAction1.cancel();

< Variables & Actions

6. Data Integration - Variables

- 6.1 Binding Layer
    - [i. Overview](/learn/app-development/variables/data-integration/)
- [6.2 Variables and Actions](/learn/app-development/variables/variables-actions/)
    - [i. Overview](/learn/app-development/variables/variables-actions/#)
    - [ii. Variables](/learn/app-development/variables/variables-actions/#variables)
        - a. Database CRUD
            - [○ Overview](/learn/app-development/variables/database-crud/)
            - [○ Variable Creation](/learn/app-development/variables/database-crud/#creation)
            - [○ Properties](/learn/app-development/variables/database-crud/#properties)
            - [○ Events](/learn/app-development/variables/database-crud/#events)
            - [○ Methods](/learn/app-development/variables/database-crud/#methods)
        - b. Database API
            - [○ Overview](/learn/app-development/variables/database-apis/)
            - [○ Variable Creation](/learn/app-development/variables/database-apis/#creation)
            - [○ Properties](/learn/app-development/variables/database-apis/#properties)
            - [○ Events](/learn/app-development/variables/database-apis/#events)
            - [○ Methods](/learn/app-development/variables/database-apis/#methods)
        - c. Web Service
            - [○ Overview](/learn/app-development/variables/web-service/)
            - [○ Variable Creation](/learn/app-development/variables/web-service/#creation)
            - [○ Properties](/learn/app-development/variables/web-service/#properties)
            - [○ Events](/learn/app-development/variables/web-service/#events)
            - [○ Methods](/learn/app-development/variables/web-service/#methods)
        - d. Java Service
            - [○ Overview](/learn/app-development/variables/java-services)
            - [○ Variable Creation](/learn/app-development/variables/java-services/#creation)
            - [○ Properties](/learn/app-development/variables/java-services/#properties)
            - [○ Events](/learn/app-development/variables/java-services/#events)
            - [○ Methods](/learn/app-development/variables/java-services/#methods)
        - e. Security Service
            - [○ Overview](/learn/app-development/variables/security-service/)
            - [○ Variable Creation](/learn/app-development/variables/security-service/#creation)
            - [○ Properties](/learn/app-development/variables/security-service/#properties)
            - [○ Events](/learn/app-development/variables/security-service/#events)
            - [○ Methods](/learn/app-development/variables/security-service/#methods)
        - f. Model
            - [○ Overview](/learn/app-development/variables/model-variable/)
            - [○ Variable Creation](/learn/app-development/variables/model-variable/#creation)
            - [○ Properties](/learn/app-development/variables/model-variable/#properties)
            - [○ Events](/learn/app-development/variables/model-variable/#events)
            - [○ Methods](/learn/app-development/variables/model-variable/#methods)
        - g. Device Variables
            - [○ Overview](/learn/hybrid-mobile/device-variables/#)
            - [○ Services](/learn/hybrid-mobile/device-variables/#services)
            - [○ Operations](/learn/hybrid-mobile/device-variables/#operations)
            - [○ Events](/learn/hybrid-mobile/device-variables/#events)
            - [○ Methods](/learn/hybrid-mobile/device-variables/#methods)
            - [○ Usage](/learn/hybrid-mobile/device-variables/#usage)
    - [iii. Actions](/learn/app-development/variables/variables-actions/#actions)
        - i. Navigation
            - [○ Overview](/learn/app-development/variables/navigation-action/#)
            - [○ Action Creation](/learn/app-development/variables/navigation-action/#creation)
            - [○ Properties](/learn/app-development/variables/navigation-action/#properties)
            - [○ Methods](/learn/app-development/variables/navigation-action/#methods)
        - ii. Login
            - [○ Overview](/learn/app-development/variables/login-action/)
            - [○ Action Creation](/learn/app-development/variables/login-action/#creation)
            - [○ Properties](/learn/app-development/variables/login-action/#properties)
            - [○ Data](/learn/app-development/variables/login-action/#data)
            - [○ Events](/learn/app-development/variables/login-action/#events)
        - iii. Logout
            - [○ Overview](/learn/app-development/variables/logout-action/)
            - [○ Action Creation](/learn/app-development/variables/logout-action/#creation)
            - [○ Properties](/learn/app-development/variables/logout-action/#properties)
            - [○ Events](/learn/app-development/variables/logout-action/#events)
        - [iv. Timer](#)
            - [○ Overview](#)
            - [○ Action Creation](#creation)
            - [○ Properties](#properties)
            - [○ Events](#events)
            - [○ Methods](#methods)
        - v. Notification
            - [○ Overview](/learn/app-development/variables/notification-action/)
            - [○ Action Creation](/learn/app-development/variables/notification-action/#creation)
            - [○ Properties](/learn/app-development/variables/notification-action/#properties)
            - [○ Events](/learn/app-development/variables/notification-action/#events)
            - [○ Methods](/learn/app-development/variables/notification-action/#methods)
    - [iv. Scoping](/learn/app-development/variables/variables-actions/#scoping)
    - [v. Variable Events](/learn/app-development/variables/variables-actions/#events)
    - [vi. Error Handling](/learn/app-development/variables/variables-actions/#error-handling)
- 6.3 Variable Binding
    - [i. Overview](/learn/variables/variable-binding/#)
    - [ii. Data Binding](/learn/variables/variable-binding/#data-binding)
    - [iii. Widget Binding](/learn/variables/variable-binding/#widget-binding)
    - [iv. Binding Options](/learn/variables/variable-binding/#binding-options)
- 6.4 JavaScript Access
    - [i. Overview](/learn/variables/accessing-elements-via-javascript/#)
    - [ii. Widget Controllers](/learn/variables/accessing-elements-via-javascript/#widget-controllers)
    - [iii. Page Scripting](/learn/variables/accessing-elements-via-javascript/#page-scripting)
    - [iv. Script Access](/learn/variables/accessing-elements-via-javascript/#script-access)
