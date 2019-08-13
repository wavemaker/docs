---
title: "Media List"
id: "media-list"
---

![](../assets/phone.png)  : Media List is available only for mobile apps.

**List Widget** can be used for displaying a list of pictures. Initially, a list with thumbnails of the pictures is displayed. When the user clicks on a thumbnail, then the original picture will be displayed.

List has two **options**:

1. _\-row_  where all the thumbnail images are displayed in a single row with horizontal scroll, and
2. _\-row_ where the thumbnail images are displayed in multiple rows.

of a Media List has the following properties:

- **\- An array of objects that has the data for media list.**
- _URL_ - The data property which contains the URL for the picture’s thumbnail URL.
- _URL_ - The data property which contains the URL for the picture.

**template** is a child container in Media List for which the width and height can be set. By default, the thumbnail will be shown in media template. Additional widgets can be added by drag and drop.

name is a unique identifier for the Media List. Special characters and spaces are not allowed in widget name.

text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds.

index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

width of your widget can be specified in px or % (i.e 50px, 75%).

height of your widget can be specified in px or % (i.e 50px, 75%).

property controls how contained widgets are displayed within this widget container - single-row or multi-row.

this property to a variable to populate the list of values to display.

from the above Dataset value that holds the Thumbnail URL.

from the above Dataset value that holds the Media URL.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

# Cases

Media List can be used to display images in a Hybrid Mobile App.

this post, we will be creating a page with Media List to display employee’s pictures. We will be using the Sample HRDB for this example. [![](../assets/medialist_run.png)](../assets/medialist_run.png)

### 1: Data

1. or Create a Hybrid Mobile App.
2. the **section,** Database and click on Add icon. Select Connect to a DB option >> Sample HRDB.
3. create an appropriate variable, select the Variables >>New Variable>> Database CRUD option. In the New Variables window,  select the source as ‘hrdb’, type as ‘employee’ and operation as read. [![](../assets/medialist_lv.png)](../assets/medialist_lv.png)

### 2: Design

1. and drop _List_ widget on the page.
2. the _value_ property of Medial List to ‘employees’ live variable dataset created in the previous step. [![](../assets/medialist_bind.png)](../assets/medialist_bind.png)
3. the Properties panel set and to the property of the CRUD Variable. : In this example, we are using the original picture for both Thumbnail and Media. [![](../assets/medialist_props.png)](../assets/medialist_props.png)

### 3: Preview App

1. to preview the Media List. [![](../assets/medialist_run.png)](../assets/medialist_run.png)

[10\. Mobile & Device Widgets](/learn/app-development/widgets/widget-library/#mobile)

- [10.1 Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
    - [Layouts](#layouts)
    - [Features](#features)
    - [Properties](#properties)
    - [Use Cases](#use-cases)
- [10.2 Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
- [10.3 Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
- [10.4 Camera](/learn/app-development/widgets/mobile-widgets/camera/)
