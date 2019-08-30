---
title: "Mobile Navbar"
id: ""
---

**Mobile Navbar** is created specifically for hybrid apps to construct page header. It contains an icon, title and a list of actions on left and right sides.

**Notes:**

- Mobile Navbar comes as part of the page when the page layout with top navbar is selected. It is not available as a ‘drag n drop’ widget.
- Widgets cannot be dropped on the mobile navbar.

[![](../assets/Navbar_struct.jpg)](../assets/Navbar_struct.jpg)

# Features

**Mobile Navbar** always comes at the top of the page. Mobile Navbar has two views:

1. Action View - the default view, and
2. Search View - can be selected as the Default view. It is also activated when the search button (enabled at design time using the Show search button property) is clicked at run-time. When the search is the main action on the page (for example, a search page) then change the default view as search-view.

### Action View

In action view, the widget area is divided into 3 sections:

1. **Left Section**: Left section is reserved for 2 buttons.
    - _First button_ will be visible if there is a left panel in the page. It is used to toggle the left panel. Icon of left panel button can be configured in the properties panel.
    - _Second button_ is by default acts as a button that takes the user to the last visited page. Following properties for this button are configurable
        - Show Back Button
        - Back Button icon class
        - Back Button label
2. **Middle Section:** Middle section holds icon and title.
    - Image for icon can be specified from the _Image source_ property. Icon size is 32 x 32 (px) and images of that size can be set as an icon for the navbar.
    - A title can be set from the Title property either static content or bound to another Widget property or a Variable field.
3. **Right Section**: In the Right section, widgets can be added using _Add Widgets_ button. _Add Widgets_ provides a widget  (like Anchor, Menu, Popover, Button) to be added. Depending upon the widgets added various properties can be set:
    - _Anchor_: can have a _hyperlink_ to specify the destination link, _target_ where the linked document should be opened.
    - _Menu_: can specify the _layout_, _position_, and _value_–_action_ combination. [Click here for more on menu usage.](http://www.wavemaker.com/learn/dropdown-menu/)
    - _Popover_: can set the _content source_ and _content_ for further action. [Click here for Popover usage](http://www.wavemaker.com/learn/popover-widget/).
    - _Button_: _on click event_ can be set for page navigation
4. There is also **search button** available on Mobile Navbar which appears at extreme right. Search text is exposed as an outbound property on Mobile Navbar as ‘query’.

### Search View

In search view of the mobile navbar, there is a button for navigating from search view to action-view and a text area for the user to enter the search text.

# Properties

**Property**

**Description**

Title

Set the title of the widget.

Name

The name is a unique identifier for the Navbar. Special characters and spaces are not allowed in widget name.

Add Widget

This action button allows you to add widgets within the Navbar. The available options are Anchor, Menu, Popover, or Button.

**Layout**

Height

The height of your widget can be specified in px or % (i.e 50px, 75%).

Image Source

This property specifies the source for the brand image. The source can be either a file or a URL: File: enter the directory and filename for the image to display (supported file types include .jpg, .gif and .png). By default, WaveMaker looks for images in the src/main/webapp directory of the project. Every WaveMaker project has a data directory under src/main/webapp, so this is a good place to put pictures. URL: enter a URL to any internet-accessible image. To display the file, foo.jpg, in the project directory src/main/webapp/resources/images/imagelists/, enter the following into the source property:resources/images/imagelists/foo.jpg or simply foo.jpg

**Behavior**

Default View

This property shows the action bar if set to action-view and shows the search bar if set to search view.

Show

Showing determines whether or not a component is visible. It is a bindable property.

Left Nav Panel Icon Class

This property sets the icon class for Left nav panel toggle button.

Show Back Button

Back button is displayed only when this property is set.

Back Button Label

This property sets the back button label.

Show Search Button

Search button is displayed only when this property is set.

# Callback Events

1. **On Search** -- This event handler to call when the user clicks  ‘enter’ button in the search text box.
2. **On back button click** -- This event handler to call when the user clicks the back button in action view of Mobile Navbar. If no event handler is specified, then upon clicking the back button, user will be navigated to the last visited page.

# Use Cases

### Example 1

[![](../assets/navbar_usage1.png)](../assets/navbar_usage1.png)

1. Create a page with ‘Two column with top nav’ layout.
2. Select the mobile navbar and go to properties panel.
3. Mention ‘App Name’ as title
4. Check ‘show search button’.
5. Add anchor widget using ‘Add Widgets’
6. Select the anchor from the canvas.
7. Specify ‘camera-enhance’ as icon in the anchor properties

### Example 2

[![](../assets/navbar_usage2.png)](../assets/navbar_usage2.png)

1. Create a page with a ‘One column with top nav’ layout.
2. Select the mobile navbar and go to properties panel
3. Mention ‘App Name’ as the title.
4. Check ‘show back button’.
5. Add anchor widget using ‘Add Widgets’
6. Select the added anchor from the canvas.
7. Set the Icon Class to either '_wi wi-done_' or '_fa fa-check_'. You can choose from the list of icons by clicking the search icon next to the Icon Class property

1. [How to use search widget within leftnav](/learn/how-tos/using-search-widget-within-navbar/)
2. [How to add sliding leftnav](/learn/how-tos/sliding-leftnav-mobile-app/)

B.2 Mobile UI Design

- 2.1 Mobile Page Concepts
    - [i. Page Layouts](/learn/hybrid-mobile/mobile-page-concepts/#page-layouts)
    - [ii. Page Navigation & Actions](/learn/hybrid-mobile/mobile-page-concepts/#page-navigation-actions)
    - [iii. Page Transitions & Gestures](/learn/hybrid-mobile/mobile-page-concepts/#page-transitions-gestures)
- 2.2 Mobile Tabbar
    - [i. Features](/learn/hybrid-mobile/mobile-tabbar/#features)
    - [ii. Properties](/learn/hybrid-mobile/mobile-tabbar/#properties)
    - [iii. Events](/learn/hybrid-mobile/mobile-tabbar/#events)
    - [iv. Use Cases](/learn/hybrid-mobile/mobile-tabbar/#use-cases)
- [2.3 Mobile Navbar](#)
    - [i. Features](#features)
    - [ii. Properties](#properties)
    - [iii. Events](#events)
    - [iv. Use Cases](#use-cases)
- 2.4 Mobile & Device Widgets
    - [i. Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
    - [ii. Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
    - [iii. Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
    - [iv. Camera](/learn/app-development/widgets/mobile-widgets/camera/)
- 2.5 Gesture Support
    - [i. Swipe Gesture](/learn/hybrid-mobile/gesture-support/#swipe)
    - [ii. Limitations](/learn/hybrid-mobile/gesture-support/#limit)
