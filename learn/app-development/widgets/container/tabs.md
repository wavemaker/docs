---
title: "Tabs"
id: ""
---

**Tabs** can be used when you need multiple containers within a single window. Tab-based navigation provides an easy and powerful mechanism to handle a huge amount of content within a limited area through separating content into different panes where one pane is viewable at a time. The user can quickly access the content by switching between the panes without leaving the page.

In interface design, a tabbed document interface (TDI) or Tab is a graphical control element that allows multiple documents or panels to be contained within a single window,  using tabs as a navigational widget for switching between sets of documents. It is an interface style most commonly associated with a web browser, web application and text-editor, and preference panes.

[![](/learn/assets/tab_run.png)](/learn/assets/tab_run.png)

# Features

When you drag and drop a Tab widget, it comes with three default three panes. Each pane can have a separate header and content.

### Basic Features - Tabs

1. Add Tab Pane.
2. Tabs Position to change where the tab header will be displayed, with respect to the content.
3. Default Pane Index - to set the tab to be opened by default.
4. Set Tab order for the display order.

### Basic Features - Tab Pane

1. Title - Provide title to the tab
2. Disabled - Not allowing users to view or perform any operation on the tab

When to use tabs:

1. To organize content at a high level
2. To alternate between views within the same context
3. To logically chunk the content behind the tabs
4. When users don't need to see content from multiple tabs simultaneously

[![](/learn/assets/tab_prop1.png)](/learn/assets/tab_prop1.png) [![](/learn/assets/tab_prop2.png)](/learn/assets/tab_prop2.png)

# Methods

Tab has few methods exposed on widget scope which can be accessed via JavaScript. See below for usage example

- to navigate to previous tab pane:
    
    Page.Widgets.tabs1.prev(); //Navigates to previous tab
    
- to navigate to next tab pane:
    
    Page.Widgets.tabs1.next(); //Navigates to next tab
    
- to navigate to a specific tab pane:
    
    Page.Widgets.tabs1.goToTab(2); //Navigates to second tab
    
- to select to a specific tab pane:
    
    Page.Widgets.tabpane1.select(); //selects tabpane1
    

# Script Access

We will see how Tab events can be accessed using the JavaScript. We will be seeing how to access the previous, next and goToTab functions to navigate between the tabbed content. We are using the sample hrdb with Employee table as an example to load the data. **Step 1:- (Prepare data and widgets)**

1. Create three variables of type ‘Employee’ entity and for 1st variable from variables tab select the variable and go to data tab and for deptid keep value as 1, do the same for others also as deptid 4, 2 for respective variables, name these variables as ‘EngineeringEmployeesData’, ‘SalesEmployeesData’, ‘MarketingEmployeesData’. [Learn how to create variables from here](/learn/app-development/variables/database-crud/#menu).
2. Drag n Drop Tab widget. By default, you will see a tab with 3 tab panes.
3. Name ‘Tab’ widget as ‘EmployeesTab’ and name tab panes as ‘engineeringEmpPane’, ‘salesEmpPane’, ‘marketingEmpPane’.
4. Change tab panes titles to ‘Engineering’, ‘Sales’, ‘Marketing’.
5. Drop ‘List’ widget in each of these tabs and bind to respective variables and map template widgets to respective fields.
6. Drop three buttons and name the first button as ‘previousBtn’, the second one as ‘nextBtn’ and last one as ‘goToSalesBtn’ and also change the titles to ‘Previous’, ‘Next’, ‘Go To Sales’.

**Step 2:- (Scripting with tabs)**

1. Select JavaScript for the on click event of ‘previousBtn’ and use the following as javascript function with the following script:
    
    Page.previousbtnClick = function($event, widget) {
    Page.Widgets.EmployeesTab.prev(); //Navigates to previous tab
    };
    
2. Select JavaScript for the on click event for ‘nextBtn’ and use the following script:
    
    Page.nextbtnClick = function($event, widget) {
    Page.Widgets.EmployeesTab.next(); //Navigates to next tab
    };
    
3. Select JavaScript for the on click event for ‘goToSalesBtn’ and use the following script:
    
    Page.gototabbtnClick = function($event, widget) {
    Page.Widgets.EmployeesTab.goToTab(2); //Navigates to sales tab
    };
    

**Step 3:- (Run)**

1. Run the application by default first tab pane is opened by default.
2. Click on ‘nextBtn’ and see the ‘salesPane’ will be opened.
3. Click on ‘previousBtn’ and see the ‘engineeringPane’ will be opened.
4. Click on ‘goToSalesBtn’ and see the ‘salesPane’ will be opened.

# Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for tab. |
| Add Tab Pane | This action allows one to add multiple panes to the Tab. |
| **Layout** |
| Height | The height of tab can be specified in px or % (i.e 50px, 75%). |
| Tab Position | This property determines if the tabs should be displayed on the
- _left_,
- _top (default)_,
- _right_ or
- _bottom_ of the tab content.

 |
| **Behavior** |
| Default Pane Index | This property sets the default active pane on a load of the widget based on the provided index. The tab index is an integer starting from 0, 1, 2 and so on. That is, setting this property to 0 will display the first tab pane; setting to 1 will display the second tab pane. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Transition | This property defines the transition effect to be applied when switching tabs. You can choose from _none_ or _slide_. When the transition property is `slide`, selected tab will be animated into the viewport. `Swipe events` will work only when the transition value is `slide`. |
| **Format** |
| Horizontal Align | Set text alignment horizontally, can be left, center or right. |
| Tab Order | The order of the Tabs can be changed using the arrow icons next to the tab names. |

**Tab Pane**

SubWidget of Tabs, to hold the tab content

| **Property** | **Description** |
| --- | --- |
| Title | This property defines the heading or title for the tab panes. |
| Name | The name is a unique identifier for tab pane. |
| Badge Value | Value to be displayed in the badge span for the tab pane |
| Badge Type | The property controls the color of the badge. These values are: <br> - default, <br> - primary, <br> - success, <br> - info, <br> - warning, or <br> - danger  |
| **Accessibility** |
| Tab Index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Content** |
| Content | Inline content or Partial page's content to be included in the widget. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is bindable. |
| Disabled | If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only. It is bindable. |
| **Graphics** |
| Title Icon Class | This property can assign an icon for the pane. |

## Events

| **Event** | **Description** |
| --- | --- |
| On load | This event handler is called when the widget is loaded. |
| **Callback Events** |
| On select | This event handler is called when the tab is selected. |
| On deselect | This event handler is called when the tab is deselected. |

