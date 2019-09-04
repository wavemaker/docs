---
title: "Navigation Action"
id: ""
---

**Navigation Action** provides navigation capabilities to help in navigating from one page or view to another. By default, for every page added to the app, a navigation action is created with the name **goToPage\__<pagename>. _**You can choose to create a new Navigation Action.

# Action Creation

**Navigation Action** can be used to redirect the user to another page.

1. There are two ways of creating a Navigation Action:
    - Select the Action option from Variables on the Workspace Toolbar [![](../assets/action_sel.png)](../assets/action_sel.png)and click New Action from the Actions dialog. [![](../assets/action_new.png?v=20)](../assets/action_new.png?v=20)
    - or, as a New Action event on any widget [![](../assets/action_new1.png)](../assets/action_new1.png)
2. In both the cases, a **New Action** wizard will open.
    1. Choose **Navigation** Type
    2. Set the **Navigation Target** to:
        - _Previous Page_ to navigate to last visited page
        - _Page_ to navigate to the page as selected in the Page Name field
        - _Accordion_ to navigate to the specified Accordion pane created the selected Page
        - _Tab_ to navigate to the specified Tab pane created on the selected Page
    3. **Name** - set by default which can be modified
    4. **Owner** - the scope of the Action being created. By default it is set to Page, you can change it to Application if you want this action to be available across the app.
    5. Click **Done** to complete the action creation process
3. You will be directed to the Actions dialog, with the new action listed. As you can see:
    1. a Navigation Action is created,
    2. with the selected target,
    3. the properties tab contains Page Name.

# Properties

| **Property** | **Description** |
| --- | --- |
| **Inputs** |
| Page Name | The page name to navigate to. This option will not appear for goToPreviousPage Operation. |
| Tab/Accordion Name | The tab/accordion pane’s name to navigate to if the operation is selected. This option will not appear for goToPreviousPage and goToPage Operation. |

# Methods

<table class="reference notranslate"><tbody><tr><td><a href="#invoke">invoke</a></td><td><a href="#setData">setData</a></td></tr></tbody></table>

## invoke(options)

This method invokes the navigation action

_Parameters_:

**options**(object): This object can include fields like:

- **data: the** key-value pair of data to be passed via the variable to the other page in the form of URL params

_Return Value_: None

_Example:_

  // Example 1: Navigate to TestPage
Page.Actions.goToPage\_TestPage.invoke();

// Example 2: Navigate to TestPage with url params
Page.Actions.goToPage\_TestPage.invoke({
     data: {
         'param1': "param value",
         "param2": "param value 2"
     }
});

## setData(object)

This method sets the input fields on the Navigation Action.

_Parameters_: object or key-value pair of data to be passed via the variable to the other page in the form of URL params

_Return Value_: None

_Example:_

// Example 1: Navigate to TestPage
Var nv = Page.Actions.goToPage\_TestPage;
nv.setData({
   'param1': "param value",
   "param2": "param value 2"
});
nv.invoke();

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
        - [i. Navigation](#)
            - [○ Overview](#)
            - [○ Action Creation](#creation)
            - [○ Properties](#properties)
            - [○ Methods](#methods)
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
