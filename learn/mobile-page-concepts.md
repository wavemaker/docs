---
title: "Mobile Page Concepts"
id: ""
---

As mentioned in [UI Design Overview](/learn/app-development/ui-design/design-overview/), a WaveMaker app is a collection of pages. Same is true for Mobile Apps. Each page can be designed by selecting a proper layout and arranging widgets within it. The app flow can be achieved using page navigation and actions to trigger this navigation.

# Page Layouts

**Page Layouts** help you design the structure of the page by demarcating the mobile navbar, tabbar and one or two content columns.

[![](./assets/page_layout_concept_mobile.png)](./assets/page_layout_concept_mobile.png)

Page Layout is set at the time of adding new page to your app or can be changed from the Workspace Toolbar More options [![](./assets/mobile_layout_change.png)](./assets/mobile_layout_change.png) A **Page Layout** has the following containers - mobile navbar, tabbar and content. The content can have one or two. To change the layout of a page, simply click on the desired layout to see it take effect on the design canvas. Following Page Layout options are available: [![](./assets/page_layout_mobile.png)](./assets/page_layout_mobile.png)

- **Blank Layout** - without any mobile navbar or a tabbar.
- **One column Layout** with the top navbar.
- **Two column Layout** with the top navbar.
- **One column Layout** with top navbar and tabbar.
- **Two column Layout** with top navbar and tabbar.

**NOTE:** In the case of a two column layout, a button to toggle left panel appears on left side of the mobile navbar. A typical page layout with mobile navbar, tabbar and content have the following structure, as can be seen from the Files tab on the Files and Services panel on the left: [![](./assets/page_layout_files_mobile.png)](./assets/page_layout_files_mobile.png)

Widgets can be added to the _page\_content._ The widgets in a container can be left-aligned, right-aligned or centered. navbar and tabbar are widgets which can be customized.

### Container Widgets

You can use the **Container Widgets** to arrange the widgets on a web page. [More on Container Widgets](/learn/app-development/widgets/widget-library/#container)

# Page Navigation & Actions

As mentioned in the previous section, default top navbar can be selected as part of the Page Layout. This Navbar can be configured to enable pre-defined controls for left navigation, back button or search. In addition, custom actions like add, edit, delete etc. can also be incorporated. Navbar can have Menu, Popover widgets.

[![](./assets/page_navigation_mobile.png)](./assets/page_navigation_mobile.png)There are several ways for the user to move from one page to another. A **Navigation Action** can be triggered when an event occurs to enable navigation. For example:

- Mobile events - Use _On tap_ event to trigger a navigation
- Widget events – Use, say, Checkbox_ Change_ event to trigger a navigation.

Navigation Action specifies exactly how the user should move from one page to another when an event occurs. Navigation Action is a component you can add to your project and provide the following options:

- _gotoPage_ – Navigates to the specified page.
- _gotoPreviousPage_ – Navigates to the previous page.
- _gotoAccordion_ – Navigates to the specified accordion of the specified page.
- _gotoTab_ – Navigates to the specified tab of the specified page.
- _gotoSegment_ – Navigates to the specified segment of the specified page.

Navigation in the application happens using a **Navigation Action**. Whenever a page is created a corresponding _gotoPage_ navigation action is generated or one can create a call action manually from the Actions Dialog. Actions Dialog can be accessed by selection Actions from Variables Workspace Toolbar.

[![](./assets/action_sel_mobile.png)](./assets/action_sel_mobile.png)

 

[![](./assets/action_new_mobile.png)](./assets/action_new_mobile.png)

Navigation can be to a page or to a component like a tab or accordion pane on a page. Navigation action can be invoked in two ways:

1. Binding the Navigation Action to a Widget event - For example: Touch Event like on Tap – Use the tap touch event to trigger a Navigation Action to move to a new page or segment. [![](./assets/action_event_mobile.png)](./assets/action_event_mobile.png)
2. Manually invoking the Navigation Action used when we want to validate the user action or state of the application before allowing the navigation. For example: Assuming a scenario, allow the navigation only when the user selects a subscriptionType, then the onClick event can trigger a JavaScript function:
    
    Page.subscribe = funtion($event, widget){
      //navigate to subscribe page only when subscriptionType is provided
      if (Page.Widgets.subscriptionType.datavalue) {
          Page.Actions.goToPage\_subscription.navigate();
       }
     };
    
     

# Page Transitions & Gestures

Transitions for rendering a page can be set as the call variable behavior. These will define the page behavior during navigation. You have the following options:

1. Slide
2. Pop
3. Fade
4. Flip

[![](./assets/call_trans_mobile.png)](./assets/call_trans_mobile.png)Touch Gestures from a mobile device can be bound to actionable events like deleting content, moving out from unread list etc. These gestures include

1. Tap, Double Tap
2. Swipe Up, Swipe Down
3. Swipe Left, Swipe Right
4. Pinch In, Pinch Out

[![](./assets/page_gestures_mobile.png)](./assets/page_gestures_mobile.png) These gestures can be set from the Events property of the concerned Widget. [![](./assets/call_gestures_mobile.png)](./assets/call_gestures_mobile.png)

B.2 Mobile UI Design

- [2.1 Mobile Page Concepts](#)
    - [i. Page Layouts](/learn/hybrid-mobile/mobile-page-concepts/#page-layouts)
    - [ii. Page Navigation & Actions](/learn/hybrid-mobile/mobile-page-concepts/#page-navigation-actions)
    - [iii. Page Transitions & Gestures](/learn/hybrid-mobile/mobile-page-concepts/#page-transitions-gestures)
- 2.2 Mobile Tabbar
    - [i. Features](/learn/hybrid-mobile/mobile-tabbar/#features)
    - [ii. Properties](/learn/hybrid-mobile/mobile-tabbar/#properties)
    - [iii. Events](/learn/hybrid-mobile/mobile-tabbar/#events)
    - [iv. Use Cases](/learn/hybrid-mobile/mobile-tabbar/#use-cases)
- 2.3 Mobile Navbar
    - [i. Features](/learn/hybrid-mobile/mobile-navbar/#features)
    - [ii. Properties](/learn/hybrid-mobile/mobile-navbar/#properties)
    - [iii. Events](/learn/hybrid-mobile/mobile-navbar/#events)
    - [iv. Use Cases](/learn/hybrid-mobile/mobile-navbar/#use-cases)
- 2.4 Mobile & Device Widgets
    - [i. Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
    - [ii. Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
    - [iii. Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
    - [iv. Camera](/learn/app-development/widgets/mobile-widgets/camera/)
- 2.5 Gesture Support
    - [i. Swipe Gesture](/learn/hybrid-mobile/gesture-support/#swipe)
    - [ii. Limitations](/learn/hybrid-mobile/gesture-support/#limit)
