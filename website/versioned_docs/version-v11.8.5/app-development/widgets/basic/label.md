---
title: "Label"
id: "label"
---

The **label** represents a caption in a user interface. The label displays text on the page. Common use cases include

- a page header
- a form field label
- a paragraph of text
- a link

[![](/learn/assets/label_struct.jpg)](/learn/assets/label_struct.jpg)

# Features

The following features for Label can be set in the **Class** property from the **Style** tab of the **Properties** Panel.

### Label Types

<iframe width="100%" height="400" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/LabelStyles">Label Types</iframe>

### Label Styles

<iframe width="100%" height="700" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Labels">LabelStyles</iframe>

# Properties

| Property | Description |
| --- | --- |
| Caption | The caption is the text that the end user sees on your label. It can be bound to a variable or another widget. |
| Name | The name is a unique identifier for label widget. |
| **Accessibility** |
| Hint | You can enter any text for this property and it will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. It can be bound to a variable or another widget. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Validation** |
| Required | A required editor in wm.LiveForm may refuse to save without a required field. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. |
| **Format** |
| Horizontal align | This property specifies how the elements should be aligned horizontally. |

# Events

| Event | Description |
| --- | --- |
| **Mouse Events** |
| On click | This event handler is called whenever the click event is triggered on a widget. |
| On double click | This event handler is called whenever the double click event is triggered on a widget. |
| On mouse enter | This event handler is called whenever the mouse enters the widget. |
| On mouse leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On Tap | This event handler is called whenever the tap event is triggered on a widget. |
| On Double Tap | This event handler is called whenever the double tap event is triggered on a widget. |
| On Long Tap | This event handler is called whenever the long tap event is triggered on a widget. <br/> Note: Long Tap event is only supported in React Native applications.|

