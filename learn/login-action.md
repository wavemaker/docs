---
title: "Login Action"
id: ""
---

The purpose of **Login Action **is to authenticate a user at the server. A Login Action is created automatically when you [enable Security](http://[supsystic-show-popup id=111]) in your application. Login Action makes a request to the server where the authentication process takes place, based on the selected Security Provider. On successful login, the user is redirected to the Landing page configured against the user role.

You can edit the **Properties**, **Data** and **Events** of the **Login Action** from the **Actions **dialog.

# Action Creation

**Login Action** can be used to perform user login.

1. To create a Login Action:
    - Select the Action option from Variables on the Workspace Toolbar [![](./assets/action_sel.png)](./assets/action_sel.png)and click New Action from the Actions dialog. [![](./assets/action_new.png?v=20)](./assets/action_new.png?v=20)
2. A **New Action** wizard will open.
    1. Choose **Login** Type
    2. **Name** - set by default which can be modified
    3. **Owner** - the scope of the Action being created. By default it is set to Page, you can change it to Application if you want this action to be available across the app.
    4. You can set the **Properties** ([know more](#properties)) and **Data** fields ([know more](#data)).
    5. Click **Done** to create the Action
3. You will be directed to the Actions dialog, with the new action listed. As you can see:
    1. a Login Action is created,
    2. the properties tab contains all the properties like _behavior_ and _spinner_ behavior. [Know more about properties](#properties).
    3. the data tab will contain the fields serving as input fields,
    4. the events tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

# Properties

| **Property** | **Description** |
| --- | --- |
| **Behavior** |
| Use default success handler | If checked, on successful login, the logged in user will be redirected to the Landing Page configured against the user role (refer to [Login Configuration](/learn/app-development/app-security/login-configuration/) under Security for more info). If a custom logic is required, uncheck this property and implement the logic under the onSuccess event of the Action. |
| Update data on input change | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the Action. |
| Request data on page load | If checked, 'Page' scoped will be triggered on page load while 'Application' scoped will be triggered on application load. |
| In Flight Behavior | This property determines the behavior when a call is fired through the action with the previous call still pending. Action queues all these calls, waits for the previous call completion and then based on the value of the _inFlightBehavior_ property, decides what to do with all the queued calls:
- doNotExecute - all the queued calls will be discarded,
- executeAll - all the calls will be triggered one by one, or
- executeLast - only the last call is triggered and the rest are discarded, this is the default behavior

 |
| **Spinner** |
| Spinner Context | This property specifies on which UI widget the spinner should show. Leave empty if no spinner required. |
| Spinner Message | The message to be displayed below the spinner. Leave empty if no message is required below the spinner. Note: If multiple actions are fired then the spinner messages will be displayed as a list below a single spinner. |

# Data

| Data | Description |
| --- | --- |
| **Input Fields** |
| username | The username that is used to log in when security is enabled. |
| password | The password that is used to log in when security is enabled. |
| rememberme | The cookie used in the request header if it has been enabled. |

# Events

During the life cycle of an Action, a set of events are emitted, thus giving you the option to control the behavior such as input data validations, data processing, success/error handling, etc. [Know More](/learn/app-development/variables/variables-actions/#events-implementation)

< Variables & Actions

6\. Data Integration - Variables

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
        - [ii. Login](#)
            - [○ Overview](#)
            - [○ Action Creation](#creation)
            - [○ Properties](#properties)
            - [○ Data](#data)
            - [○ Events](#events)
        - iii. Logout
            - [○ Overview](/learn/app-development/variables/logout-action/)
            - [○ Action Creation](/learn/app-development/variables/logout-action/#creation)
            - [○ Properties](/learn/app-development/variables/logout-action/#properties)
            - [○ Events](/learn/app-development/variables/logout-action/#events)
        - iv. Timer
            - [○ Overview](/learn/app-development/variables/timer-action/)
            - [○ Action Creation](/learn/app-development/variables/timer-action/#creation)
            - [○ Properties](/learn/app-development/variables/timer-action/#properties)
            - [○ Events](/learn/app-development/variables/timer-action/#events)
            - [○ Methods](/learn/app-development/variables/timer-action/#methods)
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
