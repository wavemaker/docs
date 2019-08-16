---
title: "Web UI Design"
id: ""
---

mentioned in [sections](/learn/app-development/ui-design/design-overview/), a WaveMaker app is a collection of pages. Each page can be designed by selecting a proper layout and arranging widgets within it. The app flow can be achieved using page navigation and events to trigger this navigation.

# Layouts

**Layouts** help you design the structure of the page by demarcating the header, footer, navigation and one or more content columns. Page Layout can be selected from the drop-down on the canvas toolbar. [![](../assets/page_layout.png)](../assets/page_layout.png) A ** Layout** has the following containers - a header, navigation bar, content, and footer. The content can have one, two or three columns. To change the layout of a page, simply click on the desired layout to see it take effect on the design canvas. There are four Page Layout options:

- **Layout** - without any header or a footer.
- **with header, content, and footer**: The content along with a header and a footer.
- **with header, topnav, content and footer**: The content along with a header, a footer, and a top navigation bar.
- **with header, content, leftnav and footer**: The content along with a header, a footer, and a left navigation bar.
- **with header, topnav, leftnav, content and footer**: The content along with a header, a footer and a top and left navigation bar.
- **with header, leftnav, content, rightnav and footer**: The content along with a header, a footer and a left and right navigation bar.
- **with header, topnav, leftnav, content, rightnav and footer**: The content along with a header, a footer and a top, left and right navigation bar.

typical page layout with a header, footer, topnav, leftnav and rightnav has the following structure, as can be seen from the tab on the  **and Services** on the left:

[![](../assets/page_layout_files.png)](../assets/page_layout_files.png)

can be added to the  The widgets in a container can be left-aligned, right-aligned or centered. The header, footer, topnav, left and right panels are partial pages and can be customized using the edit button on each of the panels.

: WaveMaker automatically adjusts the layout rendering for mobile devices.

### Widgets

can use the **Widgets** to arrange the widgets on a web page. [more](/learn/app-development/widgets/widget-library/#container)

# Navigation

There are several ways for the user to move from one page to another. A is triggered when an event occurs. You can change what is displayed when an event occurs, for example:

- click – Use the button’s _click_ event to trigger a move to a new page.
- selection – Use the grid’s _select_ event to trigger a navigation. NavigationCall specifies exactly how the user should move from one page to another when an event occurs.

NavigationCall is a component you can add to your project and provide the following options:

- – Navigates to the specified page.
-  – Navigates to the previous page.
- – Navigates to the specified accordion of the specified page.
- – Navigates to the specified tab of the specified page.

in the application happens using a **Call** Whenever a page is created a corresponding navigation call variable is generated or one can create a call variable manually. [![call_var](../assets/call_var.png)](../assets/call_var.png) Navigation can be to a page or to a component like a tab or accordion pane on a page. Navigation call can be invoked in two ways:

1. the NavigationCall to a Widget event - For example Button click – Use the button’s onClick event to trigger a NavigationCall to move to a new page or view. [![call_event](../assets/call_event.png)](../assets/call_event.png)
2. invoking the NavigationCall used when we want to validate the user action or state of the application before allowing the navigation. For example: Assuming a scenario, allow the navigation only when the user selects a subscriptionType, then the onClick event can trigger a JavaScript function:
    
     = funtion($event, widget){
      //navigate to subscribe page only when subscriptionType is provided
      if (Page.Widgets.subscriptionType.datavalue) {
          Page.Variables.goToPage\_subscription.navigate();
       }
     };
    

provide a way for you to define the actions that take place when something occurs in your application.There are many events that occur within a WaveMaker application. The most common events are user interface events, such as when a user clicks a button. Events are also triggered when an editor's value changes, and even when a **ServiceVariable** gets new data from the server. You have several options for specifying what will happen when a button is clicked. [![event_types](../assets/event_types.png)](../assets/event_types.png) Here are a few examples:

- **Event**: Take no action.
- **Action:** For example, a help dialog automatically displays when a help button is clicked.
- **Variable:** The user clicks a button, and the you select for your event will automatically write its current source data to the database.
- **:** You can write your own event handler in JavaScript, providing unlimited flexibility to define the resulting action.
- **Propagation**:

### Categorization

For sake of convenience, the events are categorized as follows:

- **events** are triggered by multiple types of events. These include , , etc.
- **Events** which capture the mouse activity on your application. These include , _Click_, _Enter_, _Leave_ etc.
- **Events** capture the key strokes. These include _Key Press_, etc.
- **Events** are widget-specific special events. Like _Delete_, _Select_, _Deselect_ for a grid widget; _Records Update_ for Data Navigator; etc.
- **Events** get triggered when running the app on a mobile or tablet or any other smart device. These events include: _Up_, _Down_, _Left_, _Right_, _In_, _Out_, etc.

### Event Handling

supports multi-event handling. One can assign a series of events to be triggered by a single event. Click on the "+" next to the event name to add more events. When you use a series of variables to trigger on an event ensure that you handle eventualities like one callback was a success and other a failure.

[![](../assets/event_multi.png)](../assets/event_multi.png)

1 Web UI Design

- [1.1 Page Layouts](/learn/responsive-web/web-ui-design/#page-layouts)
- [1.2 Page Navigation](#page-navigation)
- [1.3 Events](#events)
    - [Event Categorization](#event-categorization)
    - [Multiple Event Handling](#multiple-events)
