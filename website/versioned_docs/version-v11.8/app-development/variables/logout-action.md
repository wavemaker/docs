---
title: "Logout Action"
id: "logout-action"
---
---

A **Logout Action** is automatically created when you [implement Security](/learn/app-development/app-security/app-security) in your application. You can edit the **Properties **and **Events** of the** Logout Action** from the **Actions **dialog.

## Action Creation

**Logout Action** can be used to perform user logout.

1. To create a Logout Action:
    - Select the Action option from Variables on the Workspace Toolbar 
    
    [![](/learn/assets/action_sel.png)](/learn/assets/action_sel.png)
    - and click New Action from the Actions dialog. 
    [![](/learn/assets/action_new.png?v=20)](/learn/assets/action_new.png?v=20)

2. A **New Action** wizard will open.
    - Choose **Logout** Type
    - **Name** - set by default which can be modified
    - **Owner** - the scope of the Action being created. By default it is set to Page, you can change it to Application if you want this action to be available across the app.
    - Click **Done** to create the Action
3. You will be directed to the Actions dialog, with the new action listed. As you can see:
    - a Logout Action is created,
    - the properties tab contains all the properties like _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
    - the events tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** | | 
| Use default success handler | If checked, on successful logout, the user is redirected to the Home/Login page as configured. If custom logic is required, uncheck this property and implement the logic under the onSuccess event of the Action     **NOTE**: If the property is checked, the configured events will not be triggered. |
| In Flight Behavior | This property determines the behavior when a call is fired through the variable with the previous call still pending. Action queues all these calls, waits for the previous call completion and then based on the value of the _inFlightBehavior_ property, decides what to do with all the queued calls:      - doNotExecute - all the queued calls will be discarded,   - executeAll - all the calls will be triggered one by one, or   - executeLast - only the last call is triggered and the rest are discarded, this is the default behavior  |
| Redirect To | Page to be displayed after logout, can be the main page or the login page |
| **Spinner** | |
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner.  |

:::note
If multiple actions are fired then the spinner messages will be displayed as a list below a single spinner.
:::

## Events

During the life cycle of a Variable, a set of events are emitted by the Variable, thus giving you the option to control the behavior of the Variable such as input data validations, data processing, success/error handling, etc. [Know More](/learn/app-development/variables/variables-actions/#events-implementation).

