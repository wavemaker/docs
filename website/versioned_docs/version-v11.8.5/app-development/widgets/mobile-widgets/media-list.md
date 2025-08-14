---
title: "Media List"
id: "media-list"
---

![](/learn/assets/phone.png)  **NOTE**: Media List is available only for mobile apps.

**Media List Widget** can be used for displaying a list of pictures. Initially, a list with thumbnails of the pictures is displayed. When the user clicks on a thumbnail, then the original picture will be displayed.

# Layouts

Media List has two **layout options**:

1. _Single-row_  where all the thumbnail images are displayed in a single row with horizontal scroll, and
2. _Multi-row_ where the thumbnail images are displayed in multiple rows.

# Features

**Dataset** of a Media List has the following properties:

- _Value_ **- An array of objects that has the data for media list.**
- _Thumbnail URL_ - The data property which contains the URL for the picture’s thumbnail URL.
- _Media URL_ - The data property which contains the URL for the picture.

**Media template** is a child container in Media List for which the width and height can be set. By default, the thumbnail will be shown in media template. Additional widgets can be added by drag and drop.

# Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for the Media List. Special characters and spaces are not allowed in widget name. |
| **Accessibility** |
| Hint | Any text or HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.
NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| Layout | This property controls how contained widgets are displayed within this widget container - single-row or multi-row. |
| **Dataset** |
| Value | Set this property to a variable to populate the list of values to display. |
| Thumbnailurl | Field from the above Dataset value that holds the Thumbnail URL. |
| Mediaurl | Field from the above Dataset value that holds the Media URL. |
| **Behavior** |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |

# Use Cases

### Overview

Media List can be used to display images in a Hybrid Mobile App.

In this post, we will be creating a page with Media List to display employee’s pictures. We will be using the Sample HRDB for this example. [![](/learn/assets/medialist_run.png)](/learn/assets/medialist_run.png)

### Step 1: Data

1. Open or Create a Hybrid Mobile App.
2. From the **Resources section,** select Database and click on Add icon. Select Connect to a DB option >> Sample HRDB.
3. To create an appropriate variable, select the Variables >>New Variable>> Database CRUD option. In the New Variables window,  select the source as ‘hrdb’, type as ‘employee’ and operation as read. [![](/learn/assets/medialist_lv.png)](/learn/assets/medialist_lv.png)

### Step 2: Design

1. Drag and drop _Media List_ widget on the page.
2. Bind the _dataset value_ property of Medial List to ‘employees’ live variable dataset created in the previous step. [![](/learn/assets/medialist_bind.png)](/learn/assets/medialist_bind.png)
3. From the Properties panel set _Thumbnailurl_ and _Mediaurl_ to the _picurl_ property of the CRUD Variable. **NOTE**: In this example, we are using the original picture for both Thumbnail and Media. [![](/learn/assets/medialist_props.png)](/learn/assets/medialist_props.png)

### Step 3: Preview App

1. Click **Run** to preview the Media List. [![](/learn/assets/medialist_run.png)](/learn/assets/medialist_run.png)

[10. Mobile & Device Widgets](/learn/app-development/widgets/widget-library/#mobile)

- [10.1 Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
    - [i. Layouts](#layouts)
    - [ii. Features](#features)
    - [iii. Properties](#properties)
    - [iv. Use Cases](#use-cases)
- [10.2 Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
- [10.3 Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
- [10.4 Camera](/learn/app-development/widgets/mobile-widgets/camera/)
