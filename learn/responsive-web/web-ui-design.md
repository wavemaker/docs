---
title: "Web UI Design"
id: "web-ui-design"
---

As mentioned in [previous sections](/learn/app-development/ui-design/design-overview/), a WaveMaker app is a collection of pages. Each page can be designed by selecting a proper layout and arranging widgets within it. The app flow can be achieved using page navigation and events to trigger this navigation.

# Page Layouts

**Page Layouts** help you design the structure of the page by demarcating the header, footer, navigation and one or more content columns. Page Layout can be selected from the drop-down on the canvas toolbar. [![](/learn/assets/page_layout.png)](/learn/assets/page_layout.png) A **Page Layout** has the following containers - a header, navigation bar, content, and footer. The content can have one, two or three columns. To change the layout of a page, simply click on the desired layout to see it take effect on the design canvas. There are four Page Layout options:

- **Blank Layout** - without any header or a footer.
- **Layout with header, content, and footer**: The content along with a header and a footer.
- **Layout with header, topnav, content and footer**: The content along with a header, a footer, and a top navigation bar.
- **Layout with header, content, leftnav and footer**: The content along with a header, a footer, and a left navigation bar.
- **Layout with header, topnav, leftnav, content and footer**: The content along with a header, a footer and a top and left navigation bar.
- **Layout with header, leftnav, content, rightnav and footer**: The content along with a header, a footer and a left and right navigation bar.
- **Layout with header, topnav, leftnav, content, rightnav and footer**: The content along with a header, a footer and a top, left and right navigation bar.

A typical page layout with a header, footer, topnav, leftnav and rightnav has the following structure, as can be seen from the _Files_ tab on the **Files and Services **panel on the left:

[![](/learn/assets/page_layout_files.png)](/learn/assets/page_layout_files.png)

Widgets can be added to the _mainContent._ The widgets in a container can be left-aligned, right-aligned or centered. The header, footer, topnav, left and right panels are partial pages and can be customized using the edit button on each of the panels.

**Note**: WaveMaker automatically adjusts the layout rendering for mobile devices.

### Container Widgets

You can use the **Container Widgets** to arrange the widgets on a web page. [Know more](/learn/app-development/widgets/widget-library/#container).

# Page Navigation

There are several ways for the user to move from one page to another. A **NavigationCall** is triggered when an event occurs. You can change what is displayed when an event occurs, for example:

- Button click – Use the button’s _On click_ event to trigger a move to a new page.
- Grid selection – Use the grid’s _On select_ event to trigger a navigation. NavigationCall specifies exactly how the user should move from one page to another when an event occurs.

NavigationCall is a component you can add to your project and provide the following options:

- _gotoPage_ – Navigates to the specified page.
- _gotoPreviousPage_ – Navigates to the previous page.
- _gotoAccordion_ – Navigates to the specified accordion of the specified page.
- _gotoTab_ – Navigates to the specified tab of the specified page.

Navigation in the application happens using a **Navigation Call**. Whenever a page is created a corresponding _gotoPage_ navigation call variable is generated or one can create a call variable manually. [![call_var](/learn/assets/call_var.png)](/learn/assets/call_var.png) Navigation can be to a page or to a component like a tab or accordion pane on a page. Navigation call can be invoked in two ways:

1. Binding the NavigationCall to a Widget event - For example Button click – Use the button’s onClick event to trigger a NavigationCall to move to a new page or view. [![call_event](/learn/assets/call_event.png)](/learn/assets/call_event.png)
2. Manually invoking the NavigationCall used when we want to validate the user action or state of the application before allowing the navigation. For example: Assuming a scenario, allow the navigation only when the user selects a subscriptionType, then the onClick event can trigger a JavaScript function:
    
    Page.subscribe = funtion($event, widget){
      //navigate to subscribe page only when subscriptionType is provided
      if (Page.Widgets.subscriptionType.datavalue) {
          Page.Variables.goToPage\_subscription.navigate();
       }
     };
    

# Events

Events provide a way for you to define the actions that take place when something occurs in your application.There are many events that occur within a WaveMaker application. The most common events are user interface events, such as when a user clicks a button. Events are also triggered when an editor's value changes, and even when a **ServiceVariable** gets new data from the server. You have several options for specifying what will happen when a button is clicked. [![event_types](/learn/assets/event_types.png)](/learn/assets/event_types.png) Here are a few examples:

- **No Event**: Take no action.
- **New Action:** For example, a help dialog automatically displays when a help button is clicked.
- **New Variable:** The user clicks a _Save_ button, and the **Variable** you select for your event will automatically write its current source data to the database.
- **JavaScript:** You can write your own event handler in JavaScript, providing unlimited flexibility to define the resulting action.
- **Stop Propagation**:

### Event Categorization

For sake of convenience, the events are categorized as follows:

- **Common events** which are triggered by multiple types of events. These include _Change_, _Focus_, _Blur_ etc.
- **Mouse Events** which capture the mouse activity on your application. These include _Click_, _Double Click_, _Mouse Enter_, _Mouse Leave_ etc.
- **KeyBoard Events** which capture the key strokes. These include _Enter Key Press_, etc.
- **CallBack Events** which are widget-specific special events. Like _Record Delete_, _on Select_, _on Deselect_ for a grid widget; _Before Records Update_ for Data Navigator; etc.
- **Touch Events** which get triggered when running the app on a mobile or tablet or any other smart device. These events include: _Swipe Up_, _Swipe Down_, _Swipe Left_, _Swipe Right_, _Pinch In_, _Pinch Out_, etc.

### Multiple Event Handling

WaveMaker supports multi-event handling. One can assign a series of events to be triggered by a single event. Click on the "+" next to the event name to add more events. When you use a series of variables to trigger on an event ensure that you handle eventualities like one callback was a success and other a failure.

[![](/learn/assets/event_multi.png)](/learn/assets/event_multi.png)

B.1 Web UI Design

- [1.1 Page Layouts](/learn/responsive-web/web-ui-design/#page-layouts)
- [1.2 Page Navigation](#page-navigation)
- [1.3 Events](#events)
    - [i. Event Categorization](#event-categorization)
    - [ii. Multiple Event Handling](#multiple-events)
