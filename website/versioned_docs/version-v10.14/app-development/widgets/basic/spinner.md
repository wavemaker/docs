---
title: "Spinner"
id: "spinner"
---

**Spinner** widget controls the user interaction while the browser is performing some work in the background. It gives a feedback if the page is processing or, frozen, or just not working. This widget displays a loading icon with text.

You can drop a spinner widget on the required page and set the spinner to false at _onPageReady_ which is part of the Script of the current page by using the following code snippet: Page.Widgets.spinner1.show = false;. If you would like to set the spinner till the variable loads, you can set the "_Track Variable_" property of the spinner to that particular variable. Then, the spinner would be shown until the variable gets loaded. You can track multiple variables by selecting the same.

## Properties

| **Property** | **Description** |
| --- | --- |
| Caption | The caption is the text that the end user sees on your label. |
| Name | The name is a unique identifier for spinner widget. |
| Type | This property helps in specifying which type of icon is to be displayed for the spinner. The "Type" property has two options "icon" and "image". Based on the "Type" selected, the properties in the graphics section are changed. The animation property can be applied to both icons and images. |
| Track Variable | This property allows you to bind to the service or live variable for which you want to show the loading dialog. You can select multiple variables to track.  If more than two variables are selected, then spinner would be shown till both variable call requests have been completed/resolved. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Animation | This property controls the animation of an element. The animation is based on the CSS classes. |
| **Graphics** |
| Icon Class | This property defines the class of the icon that is applied to the spinner. |
| Icon Size | This property defines the size of the icon. Value has to be specified along with the units (em or px). |

