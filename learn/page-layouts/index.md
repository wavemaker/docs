---
title: "Page Layouts"
id: "page-layouts"
---

An app is divided into multiple pages to segregate the functionality of the app. Various aspects of a Page are used to unite these segregated functionalities to form an app flow. In this document we will discuss:

- [Layouts](#page-layouts) tool to demarcate the page into components and give a unified look across pages
- [Navigation](#page-navigation) to aid user to move from one page to another
- [](#events)to capture define actions for user interactions and other incidents.

# Layouts

**Layouts** help you design the structure of the page by demarcating the header, footer, navigation and one or more content columns. Based on the Page construction system WaveMaker provides different options for Page Layouts, which can be picked based on the interaction required for the app. Depending on the app platform - web or mobile, the layout will differ. Here we will be discussing web platform, for mobile platform [here](/learn/hybrid-mobile/mobile-page-concepts/) Page

layout can be selected at the time of Page Creation or later from the Change Layout option on the Workspace Toolbar.

[![](../assets/layout_change.png)](../assets/layout_change.png)

A **Layout** has the following containers - a header, navigation bar, content, and footer. The content can have one, two or three columns. To change the layout of a page, simply click on the desired layout to see it take effect on the design canvas.

[![](../assets/page_layout.png)](../assets/page_layout.png)

There are four Page Layout options:

- **Layout** - without any header or a footer.
- **, content, and footer**: The content along with a header and a footer.
- **, topnav, content and footer**: The content along with a header, a footer, and a top navigation bar.
- **, content, leftnav and footer**: The content along with a header, a footer, and a left navigation bar.
- **, topnav, leftnav, content, and footer**: The content along with a header, a footer and a top and left navigation bar.
- **, leftnav, content, rightnav and footer**: The content along with a header, a footer and a left and right navigation bar.
- **, topnav, leftnav, content, rightnav and footer**: The content along with a header, a footer and a top, left and right navigation bar.

typical page layout with header, footer, topnav, leftnav and rightnav has the following structure, as can be seen from the _Structure_ for the selected page:

[![](../assets/page_layout_files.png)](../assets/page_layout_files.png)

can be added to the  The header, footer, top-nav, left and right panels are partial pages and can be customized using the edit button on each of the panels.

: WaveMaker automatically adjusts the layout rendering for mobile devices.

### Widgets

can use the **Widgets** to arrange the widgets on a web page. [more](/learn/app-development/widgets/widget-library/#container)

# Navigation

There are several ways for the user to move from one page to another. A **Action** is triggered when an event occurs. You can change what is displayed when an event occurs, for example:

- click – Use the button’s _click_ event to trigger a move to a new page.
- selection – Use the grid’s _select_ event to trigger a navigation. Navigation Action specifies exactly how the user should move from one page to another when an event occurs.

Navigation Action is a component you can add to your project and provide the following options:

- – Navigates to the specified page.
- _Page_ – Navigates to the previous page.
- – Navigates to the specified accordion of the specified page.
- – Navigates to the specified tab of the specified page.

in the application happens using a **Action** Whenever a page is created a corresponding navigation action is generated or one can create the action manually. [![](../assets/call_var.png)](../assets/call_var.png) Navigation can be to a page or to a component like a tab or accordion pane on a page. Navigation Action can be invoked in two ways:

1. the Navigation Action to a Widget event - For example Button click – Use the button’s onClick event to trigger a Navigation Action to move to a new page or view. [![](../assets/call_event.png)](../assets/call_event.png)
2. invoking the Navigation Action used when you want to validate the user action or state of the application before allowing the navigation. For example: Assume a scenario, to allow the navigation only when the user selects a subscriptionType, then the onClick event can trigger a JavaScript function:
    
     = funtion($event, widget){
      //navigate to subscribe page only when subscriptionType is provided
      if (Page.Widgets.subscriptionType.datavalue) {
          Page.Actions.goToPage\_subscription.navigate();
       }
     };
    
     

provide a way for you to define the actions that take place when something occurs in your application. There are many events that occur within a WaveMaker application. The most common events are user interface events, such as when a user clicks a button. Events are also triggered when an editor's value changes, and even when a** Variable** gets new data from the server. You have several options for specifying what will happen when a button is clicked.

[![](../assets/event_types.png)](../assets/event_types.png) Here are a few examples:

- **Event**: Take no action.
- **Action:** For example, a help dialog automatically displays when a help button is clicked. Or the user clicks a _Page_ button, and the _Action_ select for your event loads a new page.
- **Variable:** For example, a user clicks a button. A Service is invoked whenever the button is pressed, causing the service to be executed and the data of the corresponding Variable is updated. Or the user clicks a button, and the corresponding Variable you select for your event will automatically write its current source data to the database.
- **:** You can write your own event handler in JavaScript, providing unlimited flexibility to define the resulting action.
- **Propagation:** If applied for an event it stops event propagating to its parent. Ex: - Button is present inside a container. Both 'Container' and 'Button' have click events and you don't want to propagate click of the button to its parent ie. to trigger container click. You can add 'Stop Propagation' after the click of 'Button'. With 'Stop Propagation' only 'Button' click is triggered. Without 'Stop Propagation' both click events will be triggered. One exception is for 'List' widget as click on any widget inside list will trigger first the click of 'List' widget as it is being done in capturing stage.

### Categorization

For sake of convenience, the events are categorized as follows:

- **events** are triggered by multiple actions. These include , , etc.
- **Events** which capture the mouse activity on your application. These include , _Click_, _Enter_, _Leave_ etc.
- **Events** get triggered when running the app on a mobile or tablet or any other smart device. These events include: _Up_, _Down_, _Left_, _Right_, _In_, _Out_, etc.
- **Events** capture the key strokes. These include _Key Press_, etc.
- **Events** are widget-specific special events. Like _Delete_, _Select_, _Deselect_ for a grid widget; _Records Update_ for Data Navigator; etc.

### Event Handling

supports multi-event handling. One can assign a series of actions to be triggered by a single event. Click on the "**+**" next to the event name to add more actions. When you use a series of variables to trigger on an event ensure that you handle eventualities like one callback was a success and other failed.

We have seen how Page Layouts, Navigation, and Events help in defining the flow of the app. Check out these [cases](/learn/app-development/ui-design/use-cases-ui-design/) to further your experience.

< Partial Pages

Templates >

2\. Design UI

- 2.1 Overview
    - [App UI Design](/learn/app-development/ui-design/design-overview/#app-ui-design)
    - [Responsive Design](/learn/app-development/ui-design/design-overview/#responsive-design)
    - [UI Development](/learn/app-development/ui-design/design-overview/#ui-development)
- [2.2 Page Concepts](/learn/app-development/ui-design/page-concepts/)
    - [Single Page Apps](/learn/app-development/ui-design/page-concepts/)
    - [Page Life Cycle](/learn/app-development/ui-design/page-concepts/#page-lifecycle)
    - [Page Creation](/learn/app-development/ui-design/page-creation/)
    - [Parameter Passing](/learn/app-development/ui-design/page-creation/#page-parameters)
    - [Partial Pages](/learn/app-development/ui-design/page-concepts/partial-pages/)
    - [Page Basics](#)
        - [Page Layouts](#page-layouts)
        - [Page Navigation](#page-navigation)
        - [Events](#events)
            - [Event Categorization](#event-categorization)
            - [Multiple Event Handling](#multiple-events)
    - [Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/)
        - [ Custom Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/#creating-page-templates)
    - [Use Cases](/learn/app-development/ui-design/use-cases-ui-design/)
- [2.3 Project Shell](/learn/app-development/ui-design/project-shells/)
- 2.4 Page Artefacts
    - [Overview](/learn/app-development/ui-design/page-artefacts/)
    - [Markup](/learn/app-development/ui-design/page-artefacts/#page-markup)
    - [Script](/learn/app-development/ui-design/page-artefacts/#page-script)
    - [Style](/learn/app-development/ui-design/page-artefacts/#page-style)
- 2.5 Themes
    - [Overview](/learn/app-development/ui-design/themes/)
    - [Applying Theme](/learn/app-development/ui-design/themes/#apply-theme)
    - [Importing Theme](/learn/app-development/ui-design/themes/#import-theme)
    - [Creating Themes](/learn/app-development/ui-design/themes/#create-theme)
        - [Creating Web Theme](/learn/app-development/ui-design/themes/#create-theme-web)
        - [Creating Web Theme using Bootswatch](/learn/app-development/ui-design/themes/#create-theme-bootswatch)
        - [Creating Mobile Theme](/learn/app-development/ui-design/themes/#create-theme-mobile)
    - [Building Theme](/learn/app-development/ui-design/themes/#build-theme)
    - [Testing Theme](/learn/app-development/ui-design/themes/#test-theme)
