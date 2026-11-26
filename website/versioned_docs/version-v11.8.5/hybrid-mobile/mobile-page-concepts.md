---
title: "Mobile Page Design"
id: "mobile-page-concepts"
sidebar_label: "Mobile Page Design"
---
---

As mentioned in [UI Design Overview](/learn/app-development/ui-design/design-overview/), a WaveMaker app is a collection of pages. Same is true for Mobile Apps. Each page can be designed by selecting a proper layout and arranging widgets within it. The app flow can be achieved using page navigation and actions to trigger this navigation.

## Page Layouts

**Page Layouts** help you design the structure of the page by demarcating the mobile navbar, tabbar and one or two content columns.

[![](/learn/assets/page_layout_concept_mobile.png)](/learn/assets/page_layout_concept_mobile.png)

Page Layout is set at the time of adding new page to your app or can be changed from the Workspace Toolbar More options.
[![](/learn/assets/mobile_layout_change.png)](/learn/assets/mobile_layout_change.png) 

A **Page Layout** has the following containers - mobile navbar, tabbar and content. The content can have one or two. To change the layout of a page, simply click on the desired layout to see it take effect on the design canvas. Following Page Layout options are available: 

[![](/learn/assets/page_layout_mobile.png)](/learn/assets/page_layout_mobile.png)

- **Blank Layout** - without any mobile navbar or a tabbar.
- **One column Layout** with the top navbar.
- **Two column Layout** with the top navbar.
- **One column Layout** with top navbar and tabbar.
- **Two column Layout** with top navbar and tabbar.

:::note
In the case of a two column layout, a button to toggle left panel appears on left side of the mobile navbar. 
:::

A typical page layout with mobile navbar, tabbar and content have the following structure, as can be seen from the Files tab on the Files and Services panel on the left: 

[![](/learn/assets/page_layout_files_mobile.png)](/learn/assets/page_layout_files_mobile.png)

Widgets can be added to the _page_content._ The widgets in a container can be left-aligned, right-aligned or centered. navbar and tabbar are widgets which can be customized.

### Container Widgets

You can use the **Container Widgets** to arrange the widgets on a web page. [More on Container Widgets](/learn/app-development/widgets/widget-library/#container)

## Page Navigation & Actions

As mentioned in the previous section, default top navbar can be selected as part of the Page Layout. This Navbar can be configured to enable pre-defined controls for left navigation, back button or search. In addition, custom actions like add, edit, delete etc. can also be incorporated. Navbar can have Menu, Popover widgets.

[![](/learn/assets/page_navigation_mobile.png)](/learn/assets/page_navigation_mobile.png)

There are several ways for the user to move from one page to another. 

### Using Events

A **Navigation Action** can be triggered when an event occurs to enable navigation. For example:

- Mobile events - Use _On tap_ event to trigger a navigation
- Widget events – Use, say, Checkbox_ Change_ event to trigger a navigation.

Navigation Action specifies exactly how the user should move from one page to another when an event occurs. Navigation Action is a component you can add to your project and provide the following options:

- `gotoPage` – Navigates to the specified page.
- `gotoPreviousPage` – Navigates to the previous page.
- `gotoAccordion` – Navigates to the specified accordion of the specified page.
- `gotoTab` – Navigates to the specified tab of the specified page.
- `gotoSegment` – Navigates to the specified segment of the specified page.

Navigation in the application happens using a **Navigation Action**. Whenever a page is created a corresponding `gotoPage` navigation action is generated or you can create a call to action from the Actions Dialog. Actions Dialog can be accessed by selection Actions from Variables Workspace Toolbar.

[![](/learn/assets/action_sel_mobile.png)](/learn/assets/action_sel_mobile.png)

[![](/learn/assets/action_new_mobile.png)](/learn/assets/action_new_mobile.png)

Navigation can be to a page or to a component like a tab or accordion pane on a page. Navigation action can be invoked in two ways:

### Binding with a Widget Event

Binding the Navigation Action to a Widget event - For example: Touch Event like on Tap – Use the tap touch event to trigger a Navigation Action to move to a new page or segment. 

[![](/learn/assets/action_event_mobile.png)](/learn/assets/action_event_mobile.png)

### Invoking Navigation Action

Manually invoking the Navigation Action used when we want to validate the user action or state of the application before allowing the navigation. For example: Assuming a scenario, allow the navigation only when the user selects a subscriptionType, then the onClick event can trigger a JavaScript function:

```    
Page.subscribe = funtion($event, widget){
    //navigate to subscribe page only when subscriptionType is provided
    if (Page.Widgets.subscriptionType.datavalue) {
        Page.Actions.goToPage_subscription.navigate();
    }
    };
```    

## Page Transitions & Gestures

Transitions for rendering a page can be set as the call variable behavior. These will define the page behavior during navigation. You have the following options:

1. Slide
2. Pop
3. Fade
4. Flip

[![](/learn/assets/call_trans_mobile.png)](/learn/assets/call_trans_mobile.png)

Touch Gestures from a mobile device can be bound to actionable events like deleting content, moving out from unread list etc. These gestures include

1. Tap, Double Tap
2. Swipe Up, Swipe Down
3. Swipe Left, Swipe Right
4. Pinch In, Pinch Out

[![](/learn/assets/page_gestures_mobile.png)](/learn/assets/page_gestures_mobile.png) 

These gestures can be set from the Events property of the concerned Widget. 

[![](/learn/assets/call_gestures_mobile.png)](/learn/assets/call_gestures_mobile.png)
