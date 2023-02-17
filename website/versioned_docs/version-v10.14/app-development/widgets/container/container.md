---
title: "Container"
id: "container"
---
---

**Container widget** is an empty box for flow content, a collection of more semantically marked-up content that may need to be grouped together with the class, lang and title attributes. It represents its children. The users can either place the content or include the partial pages.

Containers are semantically correct for laying out content. Its most common use will likely be for stylistic purposes — i.e., wrapping some semantically marked-up content in a CSS-styled container.

## Properties

You can also use the Conditional Class property from the Style tab to set the class based upon a condition. For more information, see the [How-to](/learn/how-tos/use-conditional-class-property/) doc.

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for the container widget. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| **Content** |
| Content | This bindable property, defines the content to be displayed within the container:    - Inline Content - HTML content,   - Page Content - in the form of Partial Pages, choose from the list provided    |
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
| On tap | This event handler is called whenever the tap event is triggered on a widget. |
| On double tap | This event handler is called whenever the double tap event is triggered on a widget. |
| On swipe up | This event handler is called whenever the swipeup event is triggered. |
| On swipe down | This event handler is called whenever swipe down event is triggered. |
| On swipe left | This event handler is called whenever a swipeleft event is triggered. |
| On swipe right | This event handler is called whenever a swiperight event is triggered. |
| On pinch in | This event handler is called whenever pinch event is triggered. |
| On pinch out | This event handler is called whenever pinch out event is triggered. |
| **Keyboard Events** |
| On enter key press | When the user hits ENTER/Return while the focus is in this editor, execute the specified event handler. |

