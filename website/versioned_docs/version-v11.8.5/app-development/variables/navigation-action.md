---
title: "Navigation Action"
id: "navigation-action"
---
---

**Navigation Action** provides navigation capabilities to help in navigating from one page or view to another. By default, for every page added to the app, a navigation action is created with the name `goToPage__<pagename>`. You can choose to create a new Navigation Action.

## Action Creation

**Navigation Action** can be used to redirect the user to another page.

1. There are two ways of creating a Navigation Action:
    - Select the Action option from Variables on the Workspace Toolbar 
    
    [![](/learn/assets/action_sel.png)](/learn/assets/action_sel.png) 
    
    and click New Action from the Actions dialog. 
    
    [![](/learn/assets/action_new.png?v=20)](/learn/assets/action_new.png?v=20)

    - or, as a New Action event on any widget 
    
    [![](/learn/assets/action_new1.png)](/learn/assets/action_new1.png)

2. In both the cases, a **New Action** wizard will open.

#### Steps in Action Wizard 

- Choose **Navigation** Type
- Set the **Navigation Target** to:
    - _Previous Page_ to navigate to last visited page
    - _Page_ to navigate to the page as selected in the Page Name field
    - _Accordion_ to navigate to the specified Accordion pane created the selected Page
    - _Tab_ to navigate to the specified Tab pane created on the selected Page
- **Name** - set by default which can be modified
- **Owner** - the scope of the Action being created. By default it is set to Page, you can change it to Application if you want this action to be available across the app.
- Click **Done** to complete the action creation process

3. You will be directed to the Actions dialog, with the new action listed. As you can see:
    - a Navigation Action is created,
    - with the selected target,
    - the properties tab contains Page Name.

## Properties

| **Property** | **Description** |
| --- | --- |
| **Inputs** |
| Page Name | The page name to navigate to. This option will not appear for goToPreviousPage Operation. |
| Tab/Accordion Name | The tab/accordion pane’s name to navigate to if the operation is selected. This option will not appear for goToPreviousPage and goToPage Operation. |

## Methods

<table class="reference notranslate"><tbody><tr><td><a href="#invoke">invoke</a></td><td><a href="#setData">setData</a></td></tr></tbody></table>

### invoke(options)

This method invokes the navigation action

**Parameters**:

**options**(object): This object can include fields like:

- **data**: the key-value pair of data to be passed via the variable to the other page in the form of URL params

**Return Value**: None

**Example**:
```
  // Example 1: Navigate to TestPage
Page.Actions.goToPage_TestPage.invoke();

// Example 2: Navigate to TestPage with url params
Page.Actions.goToPage_TestPage.invoke({
     data: {
         'param1': "param value",
         "param2": "param value 2"
     }
});
```
### setData(object)

This method sets the input fields on the Navigation Action.

**Parameters**: object or key-value pair of data to be passed via the variable to the other page in the form of URL params

**Return Value**: None

**Example**:

```
// Example 1: Navigate to TestPage
Var nv = Page.Actions.goToPage_TestPage;
nv.setData({
   'param1': "param value",
   "param2": "param value 2"
});
nv.invoke();
```
