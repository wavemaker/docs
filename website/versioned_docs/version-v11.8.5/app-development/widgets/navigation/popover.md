---
title: "Popover Overview and Properties"
id: "popover"
sidebar_label: "Popover Overview"
---
---

**Popover Widget** can be used to display a list of items on click event. An example of this would be the Notifications displayed on the Facebook page.

Popovers are an interactive way to provide a secondary form of navigation in many different locations outside the dedicated areas. This UI pattern has the advantage of providing a lightweight and straightforward way of viewing additional information or taking a particular action, but they do so without pulling the user out of their current activity.

Popovers “pop-up” when the user performs a certain action or gets to a specific place in the app, showing the relevant information/controls associated with that particular action/place in the UI. The original content or place in the app is still visible in the background, but the popover gives you the option of tweaking certain things or learning about what comes next. The popover gets the user’s attention and provides important notifications where needed. At the same time, however, users can easily dismiss the popover and return back to whatever they were originally doing by simply tapping or swiping the screen.

## Properties

| **Property** | **Description** |
| --- | --- |
| Caption | The caption is the text that the end user sees on Popover. |
| Title | The Title is the text that the end user sees on Popover. |
| Name | The name is a unique identifier for Popover. |
| Badge Value | Value to be displayed in the badge span for Popover |


### Accessibility

| **Property** | **Description** |
| --- | --- |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab Index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    **NOTE**: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| Shortcut Key | The shortcut key property specifies a shortcut key to activate/focus an element. The way of accessing the shortcut key is varying in different browsers    - Internet Explorer - [Alt] + shortcutkey,   - Chrome - [Alt] + shortcutkey (Windows/Linux) [Control] [Alt] + shortcutkey (MAC),   - Firefox - [Alt] [Shift] + shortcutkey (Windows/Linux) [Control] [Alt] + shortcutkey (MAC),   - Safari - [Alt] + shortcutkey (Windows) [Control] [Alt] + shortcutkey (MAC)  |

### Layout

| **Property** | **Description** |
| --- | --- |
| Width | The width of your widget can be specified in `px` or `%` i.e `50px, 75%`. |
| Height | The height of your widget can be specified in `px` or `%` i.e `50px, 75%`. |
| Popover Width | This property defines the width of the popover. |
| Popover Height | This property defines the height of the popover. |

### Content

| **Property** | **Description** |
| --- | --- |
| Content Source | Can be inline or partial. |
| Content | In case the source is selected as    - inline enter the HTML code for the same.   - Partial source, choose from the available list of partial pages. |
| Partial Param | In case the above set Partial page requires parameters. |

### Behavior

| **Property** | **Description** |
| --- | --- |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand   (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Interaction | This property defines which action should trigger the Popover to open or close. You can choose from the following options:    - **Click**: Popover opens on click and closes on click anywhere on the document.    - **Hover**: Popover opens on hover and closes on hover out.    - **Click and Hover** (Default): Popover opens and closes on both click or hover. |
| Auto Close | This property defines when to close the popover.    **Outside Click**: popover will close when user clicks anywhere outside the popover content.    **Always**: the popover will close when user clicks anywhere on the page.    **Disabled**: popover will close only when user clicks on the popover link.|
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |


### Popover Behavior

| **Property** | **Description** |
| --- | --- |
| Popover Placement | This property defines the placement of the popover. Choose from    - bottom,   - left,   - right or   - top.  |
| Popover Arrow | This property defines the arrow for the popover. |

### Graphics

| **Property** | **Description** |
| --- | --- |
| Icon Class | This property defines the class of the icon that is applied to the button. |
| Icon Url | This optional property allows you to add an icon to the left side of your button. You can give URL of the image. |
| Icon Width | Optional property; but you will need this if you are using the button's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Height | Optional property; but you will need this if you are using the button's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Margin | Optional property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text. |
| Icon position | Optional property; Property to set the position of the icon in the widget. Can be set to left, top or right. |


### Format

| **Property** | **Description** |
| --- | --- |
| Horizontal Align | This property specifies how the elements should be aligned horizontally. |

## See Also

[Using Popover Widget](/learn/app-development/widgets/navigation/popover-basic-usage)