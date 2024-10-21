---
title: "Carousel"
id: "carousel"
---

**Carousel** widget is a flexible, responsive way to add a slider to your site. In addition to being responsive, the content is flexible enough to allow images, iframes, videos, or just about any type of content that you might want.

WaveMaker provides you with two types of Carousel:

1. **Dynamic** where the Carousel content will take the form of an array or any repeated list like a dataset. The number of items displayed within the carousel will depend upon the number of rows in the bound variable. **Carousel Template** a subWidget of Carousel holds the slide content.
2. **Static** where the Carousel content can be bound to individual image resources. **Carousel Content** a subWidget of Carousel holds the slide content. By default, Carousel comes with three carousel contents each with a picture widget. You can add more using the **Add Carousel** action property.

[![](/learn/assets/carousel_types.png)](/learn/assets/carousel_types.png)

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for Carousel. |
| Add Carousel (available only for Static Carousel) | Allows you to add carousel content to the carousel widget. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Dataset** (available only for Dynamic Carousel) |
| Value | Set this bindable property to a variable to populate the list of images to display. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Enable Controls | This property allows you to enable the controls in the form of:   - navs - arrows on either side of the images,   - indicators - dots at the bottom of the images,   - both - default or   - none |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode. Can be set to:     - auto   - default or   - none.    |
| Animation Interval | This property defines the animation interval in seconds. |

**Carousel Content** (only for Static Carousel) SubWidget of Carousel to hold a slide content. By default, Carousel comes with three carousel contents each with a picture widget. You can add more using the Add Carousel action button.

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for your widget. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| **Format** |
| Horizontal Align | Set text alignment horizontally, can be left, center or right. |

**Carousel Template** (only for Dynamic Carousel) SubWidget of Carousel to hold a slide content. The number of images displayed will be determined by the values of the variable bound to the Dataset Value property of Carousel.

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for your widget. |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| **Format** |
| Horizontal Align | Set text alignment horizontally, can be left, center or right. |

## Event

| **Event** | **Description** |
| --- | --- |
| Change | This event handler is called each time your element's value changes. |

