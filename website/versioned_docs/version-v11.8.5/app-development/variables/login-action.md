---
title: "Login Action"
id: "login-action"
---
---

The purpose of **Login Action** is to authenticate a user at the server. A Login Action is created automatically when you [enable Security](/learn/app-development/app-security/app-security) in your application. Login Action makes a request to the server where the authentication process takes place, based on the selected Security Provider. On successful login, the user is redirected to the Landing page configured against the user role.

You can edit the **Properties**, **Data** and **Events** of the **Login Action** from the **Actions** dialog.

## Action Creation

**Login Action** can be used to perform user login.

1. To create a Login Action:
    - Select the Action option from Variables on the Workspace Toolbar 

[![](/learn/assets/action_sel.png)](/learn/assets/action_sel.png)

- and click New Action from the Actions dialog. 

[![](/learn/assets/action_new.png?v=20)](/learn/assets/action_new.png?v=20)

2. A **New Action** wizard will open.
    - Choose **Login** Type
    - **Name** - set by default which can be modified
    - **Owner** - the scope of the Action being created. By default it is set to Page, you can change it to Application if you want this action to be available across the app.
    - You can set the **Properties** ([know more](#properties)) and **Data** fields ([know more](#data)).
    - Click **Done** to create the Action.

3. You will be directed to the Actions dialog, with the new action listed. As you can see:
    - a Login Action is created,
    - the properties tab contains all the properties like _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
    - the data tab will contain the fields serving as input fields,
    - the events tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** ||
| Use default success handler | If checked, on successful login, the logged in user will be redirected to the Landing Page configured against the user role (refer to [Login Configuration](/learn/app-development/app-security/login-configuration/) under Security for more info). If a custom logic is required, uncheck this property and implement the logic under the onSuccess event of the Action. |
| Update data on input change | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the Action. |
| Request data on page load | If checked, 'Page' scoped will be triggered on page load while 'Application' scoped will be triggered on application load. |
| In Flight Behavior | This property determines the behavior when a call is fired through the action with the previous call still pending. Action queues all these calls, waits for the previous call completion and then based on the value of the _inFlightBehavior_ property, decides what to do with all the queued calls:   - doNotExecute - all the queued calls will be discarded,   - executeAll - all the calls will be triggered one by one, or   - executeLast - only the last call is triggered and the rest are discarded, this is the default behavior |
| **Spinner** ||
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple actions are fired then the spinner messages will be displayed as a list below a single spinner. |

## Data

| Data | Description |
| --- | --- |
| **Input Fields** ||
| username | The username that is used to log in when security is enabled. |
| password | The password that is used to log in when security is enabled. |
| rememberme | The cookie used in the request header if it has been enabled. |

## Events

During the life cycle of an Action, a set of events are emitted, thus giving you the option to control the behavior such as input data validations, data processing, success/error handling, etc. [Know More](/learn/app-development/variables/variables-actions/#events-implementation)

