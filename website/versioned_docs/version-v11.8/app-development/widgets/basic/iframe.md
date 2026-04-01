---
title: "Iframe"
id: "iframe"
---

![](/learn/assets/laptop.png)  **NOTE**: Iframe is available only for web responsive apps.

An inline frame (**Iframe**) is used to embed another document within the current HTML document. Frames allow a visual HTML Browser window to be split into segments, each of which can show a different document. The iframe element represents a nested browsing context.

# Properties

| Property | Description |
| --- | --- |
| Name | The name is a unique identifier for iFrame widget. |
| Source | This property can be used to define the source attribute of the iframe. Example Source: '//bing.com' **Note**: The implementation of iFrame requires the source to be of _http://_ type and also the _run Url_ of your app should be _http://_ and NOT _https://_ |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Encode URL | Check this if you want the provided URL to be encoded at the run time. Enabling this property will encode the special characters in the URL and enable rendering of the page which otherwise might fail. By default, it is set to false. |

