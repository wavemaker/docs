---
title: "UI Elements - Widgets & Prefabs"
id: ""
---

In this document, we will learn the basics about the HTML/Bootstrap based widgets or UI Components, with rich interaction and for responsive design. We will also look at the common Widget properties.

# Widget Basics

Pages are constructed as a composition of widgets using the visual drag-n-drop approach. Responsive Layout grid is used for the placement of widgets for automatically making them responsive to all devices.

WaveMaker provides **HTML/Bootstrap based widgets or UI Components**, with rich interaction and for responsive design. Widgets are the building block of any application. They are the tools for exchange of information from the user to the project. Widgets eliminate repeated development and provide consistent behavior across browsers and platforms. Drag and drop action lets you add widgets to your project.

Widgets could simply map to a standard HTML construct like a label or select or could be complex HTML structures like Lists or extended Forms built for responsive design.

[![](/learn/assets/widget_concept.png)](/learn/assets/widget_concept.png)

# Widget Properties

Once you add a widget to your page, click on the widget to see the available actions in the **Properties Panel**. Below are some of the common actions of Widgets.

[![](/learn/assets/widget_props.png)](/learn/assets/widget_props.png)

1. **Basic Attributes**: Define the content to be displayed in a widget by connecting it to a database query, web service, Java method, or another widget. Data binding provides integration with data sources known as ‘Variables’ or any other Widgets. Variables offer the ability to integrate with services such as a database, web service or any other backend service. [More on Variables and Binding](/learn/app-development/variables/data-integration/).
2. **Styling**: Use the **Styles** tab in the **Properties Panel** to define styles. Widget styles for alignment such as margin, padding, text & background, and border styles can be customized as per the required look-n-feel. Advanced users can switch to the Style **Page Mode** to edit the code. [More on Styling](/learn/app-development/ui-design/page-artefacts/#page-style "Markup, Scripting and Styles")
3. **Event Binding**: Use the **Event** tab in the **Properties Panel** to choose the action for specific events. Widgets expose click, mouse enter/leave events, tap and double tap for multiple devices, which can be bound to Variables or methods of Services. [More on Events](/learn/responsive-web/web-ui-design/#events "Events and navigation"). For Mobile app, these take the form of [gestures](/learn/hybrid-mobile/mobile-page-concepts/#page-transitions-gestures).
4. **Device**: Use the **Device** tab in the **Properties Panel** to choose the widget visibility. Manage the widget visibility across device sizes
5. **Access Control**: Define which user roles can access the widget in the **Security** tab of the **Properties Panel**. [More on role-based access](/learn/app-development/app-security/access-levels-permissions/ "Role-based Access Control") and [widget security](/learn/app-development/app-security/access-levels-permissions/#role-based-access).

We have seen the basics of the HTML/Bootstrap based widgets or UI Components and properties.

