---
title: "Notification Action"
id: ""
---

**Action** is an action to show UI notifications in the app in the form of a toaster, alert or a confirmation box. It provides message capabilities, a way for the app to notify the end users. Based on the operation selected app can notify the user through an Alert/Confirm dialog or a simple toaster message. This action can be useful in cases like error handling, confirm user action, etc.

# Creation

1. are two ways of creating a Notification Action:
    - the Action option from Variables on the Workspace Toolbar [![](../assets/action_sel.png)](../assets/action_sel.png) click New Action from the Actions dialog. [![](../assets/action_new.png?v=20)](../assets/action_new.png?v=20)
    - , as a New Action event on any widget [![](../assets/action_new1.png)](../assets/action_new1.png)
2. both the cases, a **Action** wizard will open.
    1. Type. It can be
        1. , you can further specify:
            1. : Message to be displayed
            2. : for the alert pop-up
            3. button text: message on the button to dismiss the alert pop-up
            4. Type: to be set to error, information, success or warning.
        2. , you can further specify:
            1. : Message to be displayed
            2. : for the alert pop-up
            3. button text: message on the button to dismiss the alert pop-up
            4. button text: message on the button to dismiss the alert pop-up
        3. , you can further specify:
            1. : Message to be displayed can be inline or from a partial page
            2. /Page: Message to be displayed/Partial page containing the message to be displayed
            3. : number of milliseconds for which the toaster should be displayed
            4. : type of toast message in case of inline content, can be success, error, warning or info
            5. position: where the message should be displayed – a combination of top, center, bottom, left, right
    2. \- set by default which can be modified
    3. \- the scope of the Action being created. By default it is set to Page, you can change it to Application if you want this action to be available across the app.
    4. to complete the action creation process
3. will be directed to the Actions dialog, with the new action listed. As you can see:
    1. Notification Action is created,
    2. the selected target,
    3. properties tab containing the inputs ( [more](#properties))
    4. events tab containing the events that can be customised ( [more](#events))

type of notification to be performed through the Action. Options are:

- \- a dialog with a message and button;
- \- a dialog with a message and two buttons (for positive and negative confirmations);
- \- a toaster box with a message

_upon the operation selected following properties are available_:

**operation**

text message to be shown in the dialog. It can be a static text or can be bound to a component for dynamic behavior.

’s header title

button text

to be displayed on the OK button of the dialog

type

type of the dialog. Available options are information, success, error and warning

**operation**

text message to be shown in the dialog. It can be a static text or can be bound to a component for dynamic behavior.

’s header title

button text

to be displayed on the OK button of the dialog. This button is to receive the positive response from the end user. E.g. “YES”, “YES, I AGREE”, “CONTINUE”, etc.

button text

to be displayed on the CANCEL button of the dialog. This button is to receive the negative response from the end user. E.g. “NO”, “NO, I DON’T AGREE”, “GO BACK”, etc.

**operation**

of content to be displayed in the toaster. It can be:

- – plain text can be provided or bound for dynamic text;
- – a partial page can be loaded into the toaster area. This is for more customized display.

if “Content” property is selected as inline. Text to be displayed in the toaster

if “Content” property is selected as the page. Partial page to be loaded into the toaster area.

time period (in milliseconds) after which the toaster should fade away once it is shown. Select 0 if the toaster should stay.

the display type of toaster. Available options are success, error, warning, info.

Position

where to display the toaster in the app. Available options are a combination of top, center, bottom, left, center, right.

#### Action Events

Based on the operation different events are available for a Notification Action.

- :
    1. : The event is fired on click of the OK button of the alert dialog. The event receives action and data as params. This data can be useful in some validation where the dialog is opened from various places. [here](#invoke) for an example of passing data through invoke method and receiving it in the event of the action.
- :
    1. : The event is fired on click of the OK button of the confirm dialog. Please note, this event takes the positive response from the user.
    2. : The event is fired on click of the CANCEL button of the confirm dialog. Please note, this event takes the negative response from the user.
    3. : The event is fired on the close of the confirm dialog.
- :
    1. : The event is fired on click of the toaster box.
    2. : The event is fired on the hide of the toaster box.

## (options)

This method invokes the notification action

:

- (object): This object can have optional fields like:
    
    - **: ** data can be passed from here, which will be received in events like onOk, onCancel, onClose, onHide
    
    - specific toaster type action include
        - **\-** text to be displayed in the toaster.
        - **\- ** to display the toaster. Possible values:
            - "top left"
            - "top center"
            - "top right"
            - "center left"
            - "center center"
            - "center right"
            - "bottom left"
            - "bottom center"
            - "bottom right"
        - **\- ** of toaster. Possible values:
            - ‘success’
            - ‘error’
            - ‘Info’
            - ‘warning’

_Value_: None

_:_

// Example 1: Notify with default set properties
Page.Actions.notificationAction1.invoke();

// Example 2: Notify with dynamic properties
Page.Actions.notificationAction1.invoke({
    "class": "info",
    "message": "My custom message",
    "position": "bottom right"
});

// Example 3: Passing data through alert type notification action
Page.Actions.notificationAction1.invoke({
    "data": {“mode”: “edit}
});

// the data will be passed to the action events onOk, onCancel, onClose, onHide
Page.notificationAction1onOk = function(variable, data) {
    console.log('data: ', data)
    // Output:
    data: {“mode”: “edit}
};

< Variables & Actions

6\. Data Integration - Variables

- 6.1 Binding Layer
    - [Overview](/learn/app-development/variables/data-integration/)
- [6.2 Variables and Actions](/learn/app-development/variables/variables-actions/)
    - [Overview](/learn/app-development/variables/variables-actions/#)
    - [Variables](/learn/app-development/variables/variables-actions/#variables)
        - a. Database CRUD
            - [Overview](/learn/app-development/variables/database-crud/)
            - [Variable Creation](/learn/app-development/variables/database-crud/#creation)
            - [Properties](/learn/app-development/variables/database-crud/#properties)
            - [Events](/learn/app-development/variables/database-crud/#events)
            - [Methods](/learn/app-development/variables/database-crud/#methods)
        - b. Database API
            - [Overview](/learn/app-development/variables/database-apis/)
            - [Variable Creation](/learn/app-development/variables/database-apis/#creation)
            - [Properties](/learn/app-development/variables/database-apis/#properties)
            - [Events](/learn/app-development/variables/database-apis/#events)
            - [Methods](/learn/app-development/variables/database-apis/#methods)
        - c. Web Service
            - [Overview](/learn/app-development/variables/web-service/)
            - [Variable Creation](/learn/app-development/variables/web-service/#creation)
            - [Properties](/learn/app-development/variables/web-service/#properties)
            - [Events](/learn/app-development/variables/web-service/#events)
            - [Methods](/learn/app-development/variables/web-service/#methods)
        - d. Java Service
            - [Overview](/learn/app-development/variables/java-services)
            - [Variable Creation](/learn/app-development/variables/java-services/#creation)
            - [Properties](/learn/app-development/variables/java-services/#properties)
            - [Events](/learn/app-development/variables/java-services/#events)
            - [Methods](/learn/app-development/variables/java-services/#methods)
        - e. Security Service
            - [Overview](/learn/app-development/variables/security-service/)
            - [Variable Creation](/learn/app-development/variables/security-service/#creation)
            - [Properties](/learn/app-development/variables/security-service/#properties)
            - [Events](/learn/app-development/variables/security-service/#events)
            - [Methods](/learn/app-development/variables/security-service/#methods)
        - f. Model
            - [Overview](/learn/app-development/variables/model-variable/)
            - [Variable Creation](/learn/app-development/variables/model-variable/#creation)
            - [Properties](/learn/app-development/variables/model-variable/#properties)
            - [Events](/learn/app-development/variables/model-variable/#events)
            - [Methods](/learn/app-development/variables/model-variable/#methods)
        - g. Device Variables
            - [Overview](/learn/hybrid-mobile/device-variables/#)
            - [Services](/learn/hybrid-mobile/device-variables/#services)
            - [Operations](/learn/hybrid-mobile/device-variables/#operations)
            - [Events](/learn/hybrid-mobile/device-variables/#events)
            - [Methods](/learn/hybrid-mobile/device-variables/#methods)
            - [Usage](/learn/hybrid-mobile/device-variables/#usage)
    - [Actions](/learn/app-development/variables/variables-actions/#actions)
        - i. Navigation
            - [Overview](/learn/app-development/variables/navigation-action/#)
            - [Action Creation](/learn/app-development/variables/navigation-action/#creation)
            - [Properties](/learn/app-development/variables/navigation-action/#properties)
            - [Methods](/learn/app-development/variables/navigation-action/#methods)
        - ii. Login
            - [Overview](/learn/app-development/variables/login-action/)
            - [Action Creation](/learn/app-development/variables/login-action/#creation)
            - [Properties](/learn/app-development/variables/login-action/#properties)
            - [Data](/learn/app-development/variables/login-action/#data)
            - [Events](/learn/app-development/variables/login-action/#events)
        - iii. Logout
            - [Overview](/learn/app-development/variables/logout-action/)
            - [Action Creation](/learn/app-development/variables/logout-action/#creation)
            - [Properties](/learn/app-development/variables/logout-action/#properties)
            - [Events](/learn/app-development/variables/logout-action/#events)
        - iv. Timer
            - [Overview](/learn/app-development/variables/timer-action/)
            - [Action Creation](/learn/app-development/variables/timer-action/#creation)
            - [Properties](/learn/app-development/variables/timer-action/#properties)
            - [Events](/learn/app-development/variables/timer-action/#events)
            - [Methods](/learn/app-development/variables/timer-action/#methods)
        - [Notification](#)
            - [Overview](#)
            - [Action Creation](#creation)
            - [Properties](#properties)
            - [Events](#events)
            - [Methods](#methods)
    - [Scoping](/learn/app-development/variables/variables-actions/#scoping)
    - [Variable Events](/learn/app-development/variables/variables-actions/#events)
    - [Error Handling](/learn/app-development/variables/variables-actions/#error-handling)
- 6.3 Variable Binding
    - [Overview](/learn/variables/variable-binding/#)
    - [Data Binding](/learn/variables/variable-binding/#data-binding)
    - [Widget Binding](/learn/variables/variable-binding/#widget-binding)
    - [Binding Options](/learn/variables/variable-binding/#binding-options)
- 6.4 JavaScript Access
    - [Overview](/learn/variables/accessing-elements-via-javascript/#)
    - [Widget Controllers](/learn/variables/accessing-elements-via-javascript/#widget-controllers)
    - [Page Scripting](/learn/variables/accessing-elements-via-javascript/#page-scripting)
    - [Script Access](/learn/variables/accessing-elements-via-javascript/#script-access)
