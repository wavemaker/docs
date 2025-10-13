---
title: "Anchor"
id: "anchor"
---
---

**Anchor** widget refers to the visible, clickable words used to link one web page to another.

When inside another widget like nav, the anchor widget will come with some defaults like file icon and with default styling to have a border and background color.

## Features

The following features are available for anchor widget:

- **Caption** - Sets the Name for the anchor widget.
- **Badge** Value - Indicates the small meaning information.
- **Hint** - It contains a text representing advisory information related to the element it belongs to.
- **Shortcut Key**: The shortcut key property specifies a shortcut key to click the link. The way of accessing the shortcut key is varying in different browsers:
    
| Browser | Shortcut Key Trigger |
| --- | --- |
| Internet Explorer | [Alt] +shortcut key |
| Chrome | [Alt] + shortcut key (_Windows/Linux_) |
|  | [Control] [Alt] + shortcut key (_MAC_) |
| Firefox | [Alt] [Shift] + shortcut key (_Windows/Linux_) |
|  | [Control] [Alt] + shortcut key (_MAC_) |
    
**Hyperlink** - Indicates the destination link.  

**Target** - The target property specifies where to open the linked document.  

- **_blank** : Opens the linked document in a new window or tab.
- **_self** : Opens the linked document in the same frame as it was clicked (this is default).
- **_parent** : Opens the linked document in the parent frame.
- **_top** : Opens the linked document in the full body of the window.
  
**Icon** - Aligns the anchor widget with an icon properties

### Anchor Class

From the Style tab of Properties panel,  you can set the Anchor style. You can also use the Conditional Class property to set the class based upon a condition. See here for [How to](/learn/how-tos/use-conditional-class-property/). 

<iframe width="100%" height="300" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Anchors">Anchor Classes</iframe>

## Properties

| Property | Description |
| --- | --- |
| Caption | The caption is the text that the end user sees on your anchor. It can be bound to a variable or another widget. |
| Name | The name is a unique identifier for Anchor widget. Special characters and spaces are not allowed in widget name. |
| Badge Value | Value to be displayed in the badge span for the anchor. |
| **Accessibility** |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    NOTE: In Safari browsers, by default, Tab highlights only text fields.   To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| Shortcut key | The shortcut key property specifies a shortcut key to activate/focus an element. (*[See here for details](#shortcut)) |
| **Layout** |
| Width | The width of your widget can be specified in _em, pt, px or %_ (i.e 50px, 75%). |
| Height | The height of your widget can be specified in _em, pt, px or %_ (i.e 50px, 75%). |
| **Dataset** |
| Hyperlink | The web URL you want to redirect to on clicking the anchor. |
| **Behavior** |
| Target | Defines behavior on click of the link: _blank: Opens the linked document in a new window or tab _self: Opens the linked document in the same frame as it was clicked (this is default) _parent: Opens the linked document in the parent frame _top: Opens the linked document in the full body of the window. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| Encode URL | Check this if you want the provided URL to be encoded at the run time. Enabling this property will encode the special characters in the URL and enable rendering of the page which otherwise might fail. By default, it is set to false. |
| **Graphics** |
| Icon Class | This property defines the class of the icon that is applied to the anchor. |
| Icon Url | This optional property allows you to add an icon to the anchor, it can be an URL of the image |
| Icon Width | Optional property; but you will need this if you are using the anchor's iconUrl. Please enter the width of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Height | Optional property; but you will need this if you are using the anchor's iconUrl. Please enter the height of your icon. WARNING: It's best to specify size in pixels, not percent. |
| Icon Margin | Optional property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text. |
| Icon Position | Optional property; Property to set the position of icon in the widget - can be left, top or right |
| **Format** |
| Horizontal Align | This property specifies how the elements should be aligned horizontally - left, center or right. |

## Events

| Event | Description |
| --- | --- |
| On Focus | This event handler is called each time your element is focused. |
| On Blur | This event handler is called each time your focus leaves your element. |
| **Mouse Events** |
| On Click | This event handler is called whenever the click event is triggered on a widget. |
| On Double Click | This event handler is called whenever the double click event is triggered on a widget. |
| On Mouse Enter | This event handler is called whenever the mouse enters the widget. |
| On Mouse Leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On Tap | This event handler is called whenever the widget is tapped. |
| On Double Tap | This event handler is called whenever the widget is double tapped. |
| On Long tap | This event handler is called whenever the long tap event is triggered on a widget.  <br/>Note: Long Tap event is only supported in React Native applications.|

