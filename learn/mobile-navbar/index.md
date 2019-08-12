---
title: "Mobile Navbar"
date: "2016-09-26"
---

**Navbar** is created specifically for hybrid apps to construct page header. It contains an icon, title and a list of actions on left and right sides.

**:**

- Navbar comes as part of the page when the page layout with top navbar is selected. It is not available as a ‘drag n drop’ widget.
- cannot be dropped on the mobile navbar.

[![](../assets/Navbar_struct.jpg)](../assets/Navbar_struct.jpg)

**Navbar** always comes at the top of the page. Mobile Navbar has two views:

1. View - the default view, and
2. View - can be selected as the Default view. It is also activated when the search button (enabled at design time using the Show search button property) is clicked at run-time. When the search is the main action on the page (for example, a search page) then change the default view as search-view.

### View

action view, the widget area is divided into 3 sections:

1. **Section**:  section is reserved for 2 buttons.
    - _button_ will be visible if there is a left panel in the page. It is used to toggle the left panel. Icon of left panel button can be configured in the properties panel.
    - _button_ is by default acts as a button that takes the user to the last visited page. Following properties for this button are configurable
        - Back Button
        - Button icon class
        - Button label
2. **Section:** Middle section holds icon and title.
    - for icon can be specified from the _source_ property. Icon size is 32 x 32 (px) and images of that size can be set as an icon for the navbar.
    - title can be set from the Title property either static content or bound to another Widget property or a Variable field.
3. **Section**:  the Right section, widgets can be added using _Widgets_ button. _Widgets_ provides a widget  (like Anchor, Menu, Popover, Button) to be added. Depending upon the widgets added various properties can be set:
    - : can have a to specify the destination link, where the linked document should be opened.
    - : can specify the , , and – combination. [here for more on menu usage.](http://www.wavemaker.com/learn/dropdown-menu/)
    - : can set the _source_ and for further action. [here for Popover usage](http://www.wavemaker.com/learn/popover-widget/)
    - : _click event_ can be set for page navigation
4. is also **button** available on Mobile Navbar which appears at extreme right. Search text is exposed as an outbound property on Mobile Navbar as ‘query’.

### View

search view of the mobile navbar, there is a button for navigating from search view to action-view and a text area for the user to enter the search text.

the title of the widget.

name is a unique identifier for the Navbar. Special characters and spaces are not allowed in widget name.

Widget

action button allows you to add widgets within the Navbar. The available options are Anchor, Menu, Popover, or Button.

height of your widget can be specified in px or % (i.e 50px, 75%).

Source

property specifies the source for the brand image. The source can be either a file or a URL: File: enter the directory and filename for the image to display (supported file types include .jpg, .gif and .png). By default, WaveMaker looks for images in the src/main/webapp directory of the project. Every WaveMaker project has a data directory under src/main/webapp, so this is a good place to put pictures. URL: enter a URL to any internet-accessible image. To display the file, foo.jpg, in the project directory src/main/webapp/resources/images/imagelists/, enter the following into the source property:resources/images/imagelists/foo.jpg or simply foo.jpg

View

property shows the action bar if set to action-view and shows the search bar if set to search view.

determines whether or not a component is visible. It is a bindable property.

Nav Panel Icon Class

property sets the icon class for Left nav panel toggle button.

Back Button

button is displayed only when this property is set.

Button Label

property sets the back button label.

Search Button

button is displayed only when this property is set.

# Events

1. **Search** -- This event handler to call when the user clicks  ‘enter’ button in the search text box.
2. **back button click** -- This event handler to call when the user clicks the back button in action view of Mobile Navbar. If no event handler is specified, then upon clicking the back button, user will be navigated to the last visited page.

# Cases

### 1

[![](../assets/navbar_usage1.png)](../assets/navbar_usage1.png)

1. a page with ‘Two column with top nav’ layout.
2. the mobile navbar and go to properties panel.
3. ‘App Name’ as title
4. ‘show search button’.
5. anchor widget using ‘Add Widgets’
6. the anchor from the canvas.
7. ‘camera-enhance’ as icon in the anchor properties

### 2

[![](../assets/navbar_usage2.png)](../assets/navbar_usage2.png)

1. a page with a ‘One column with top nav’ layout.
2. the mobile navbar and go to properties panel
3. ‘App Name’ as the title.
4. ‘show back button’.
5. anchor widget using ‘Add Widgets’
6. the added anchor from the canvas.
7. the Icon Class to either ' _wi-done_' or ' _fa-check_'. You can choose from the list of icons by clicking the search icon next to the Icon Class property

1. [to use search widget within leftnav](/learn/how-tos/using-search-widget-within-navbar/)
2. [to add sliding leftnav](/learn/how-tos/sliding-leftnav-mobile-app/)

2 Mobile UI Design

- 2.1 Mobile Page Concepts
    - [Page Layouts](/learn/hybrid-mobile/mobile-page-concepts/#page-layouts)
    - [Page Navigation & Actions](/learn/hybrid-mobile/mobile-page-concepts/#page-navigation-actions)
    - [Page Transitions & Gestures](/learn/hybrid-mobile/mobile-page-concepts/#page-transitions-gestures)
- 2.2 Mobile Tabbar
    - [Features](/learn/hybrid-mobile/mobile-tabbar/#features)
    - [Properties](/learn/hybrid-mobile/mobile-tabbar/#properties)
    - [Events](/learn/hybrid-mobile/mobile-tabbar/#events)
    - [Use Cases](/learn/hybrid-mobile/mobile-tabbar/#use-cases)
- [2.3 Mobile Navbar](#)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](#use-cases)
- 2.4 Mobile & Device Widgets
    - [Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
    - [Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
    - [Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
    - [Camera](/learn/app-development/widgets/mobile-widgets/camera/)
- 2.5 Gesture Support
    - [Swipe Gesture](/learn/hybrid-mobile/gesture-support/#swipe)
    - [Limitations](/learn/hybrid-mobile/gesture-support/#limit)
