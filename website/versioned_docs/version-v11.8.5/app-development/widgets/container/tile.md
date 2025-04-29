---
title: "Tile"
id: "tile"
---

**Tile** is a container for other widgets used to present a set of objects. Tile widget lets you to directly add an image, text box, video, or web code to user dashboard. Functions _similar to the container_ but it comes with some default styling which makes it different from a container. Users cannot create partials using tile.

Tiles can be used while creating Dashboard like UI where you need to show analytics data.

When to use Tile:

- Unlike other containers, its size is limited, and it is not recommended to place too many widgets and/or complex widgets.

![](/learn/assets/tile_design-1.png)

## Properties

You can also use the Conditional Class property from the Style tab to set the class based upon a condition. See here for [How to](/learn/how-tos/use-conditional-class-property/).

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for tile. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| **Format** |
| Horizontal Align | Set text alignment horizontally. |

## Events

| **Event** | **Description** |
| --- | --- |
| **Mouse Events** |
| On click | This event handler is called whenever the click event is triggered on a widget. |
| On double click | This event handler is called whenever the double click event is triggered on a widget. |
| On mouse over | This event fires when the mouse hovers over this widget. |
| On mouse out | This event fires when the mouse moves away from this widget. |
| On mouse enter | This event handler is called whenever the mouse enters the widget. |
| On mouse leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On Tap | This event handler is called whenever the tap event is triggered on a widget. |
| On Double Tap | This event handler is called whenever the double tap event is triggered on a widget. |
| On Long Tap | This event handler is called whenever the long tap event is triggered on a widget. <br/>Note: Long Tap event is only supported in React Native applications.|
| On swipe up | This event handler is called whenever a swipeup event is triggered. |
| On swipe down | This event handler is called whenever a swipe down event is triggered. |
| On swipe left | This event handler is called whenever a swipeleft event is triggered. |
| On swipe right | This event handler is called whenever a swiperight event is triggered. |
| On pinch in | This event handler is called whenever pinch event is triggered. |
| On pinch out | This event handler is called whenever pinch out event is triggered. |
| **Keyboard Events** |
| On enter key press | When the user hits ENTER/Return while the focus is in this editor, execute the specified event handler. |

