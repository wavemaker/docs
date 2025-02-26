---
title: "Page Navigation"
id: "page-navigation"
sidebar_label: "Navigation"
---
---

There are several ways for the user to move from one page to another. A **Navigation Action** is triggered when an event occurs. You can change what is displayed when an event occurs, for example:

- Button click – Use the button’s _On click_ event to trigger a move to a new page.
- Grid selection – Use the grid’s _On select_ event to trigger a navigation. Navigation Action specifies exactly how the user should move from one page to another when an event occurs.

Navigation Action is a component you can add to your project and provide the following options:

- _Page_ – Navigates to the specified page.
- _Previous Page_ – Navigates to the previous page.
- _Accordion_ – Navigates to the specified accordion of the specified page.
- _Tab_ – Navigates to the specified tab of the specified page.

## Navigation Action

Navigation in the application happens using a **Navigation Action**. Whenever a page is created a corresponding _gotoPage_ navigation action is generated or one can create the action manually. 

[![](/learn/assets/call_var.png)](/learn/assets/call_var.png) 

## Configuration 

Navigation can be to a page or to a component like a tab or accordion pane on a page. Navigation Action can be invoked in two ways:

### Using Widget Properties

Binding the Navigation Action to a Widget event - For example Button click – Use the button’s onClick event to trigger a Navigation Action to move to a new page or view. 

[![](/learn/assets/call_event.png)](/learn/assets/call_event.png)

### Customization
Manually invoking the Navigation Action used when you want to validate the user action or state of the application before allowing the navigation. For example: Assume a scenario, to allow the navigation only when the user selects a subscriptionType, then the onClick event can trigger a JavaScript function:

```    
    Page.subscribe = funtion($event, widget){
      //navigate to subscribe page only when subscriptionType is provided
      if (Page.Widgets.subscriptionType.datavalue) {
          Page.Actions.goToPage_subscription.navigate();
       }
     };
```

## See Also

[Prevent Leaving Page with Unsaved Changes](/learn/how-tos/prevent-user-leaving-page-unsaved-changes)  
[Page Events](/learn/app-development/ui-design/page-concepts/page-events)  