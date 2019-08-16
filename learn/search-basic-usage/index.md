---
title: "Search - Basic Usage"
id: ""
---

WaveMaker allows you to add search capability via the **widget** Following are the steps in using the same. We will use the search widget to search the [**database from the sample HRDB imported earlier**](/learn/app-development/services/database-services/working-with-databases/#integrating-database) and display the department id and name.

[![](../assets/search_run1.png)](../assets/search_run1.png)

[![](../assets/search_run2.png)](../assets/search_run2.png)

[![](../assets/search_run3.png)](learn/wp-content/uploads/search_run3.png)

1. and drop a , and four widgets on a page. We have used the grid layout here. [![](../assets/search_design.png)](../assets/search_design.png)
2. [the sample database](http://[supsystic-show-popup id=106]) [a Variable](http://[supsystic-show-popup id=105]) based on the database CRUD APIs auto-generated when the database is imported. [![](../assets/search_lv.png)](../assets/search_lv.png)
3. the dataset property of the search widget to the department variable created in the previuos step. [![](../assets/search_bind.png)](../assets/search_bind.png)
4. the **key** and **Value** properties to the column name you want to search by, in this case, : The Search Key, Label Value, and Image Source are bindable. For example, the Label Value can be bound in this case to 'deptcode+name', using the expression option from the binding dialog. [![](../assets/search_props.png)](../assets/search_props.png)

You can capture the result of the Search widget in two ways:

1. the **properties** of **value** - which contains the dataset returned by the search to be bound to the list or Data Table, \- search text entered by the user and [![](../assets/search_outbound.png)](../assets/search_outbound.png)
2. \- From the event tab, set the event to JavaScript. [![](../assets/search_event.png)](../assets/search_event.png) In the Script the following function will be created The selected item can be accessed by '$event.data.item' property as follows: Here we have set the labels to the department name and id returned by the search widget. NOTE: The label names might vary in your project.
    
    1Submit = function($event, widget) {
            Page.Widgets.label3.caption = $event.data.item.deptid;
            Page.Widgets.label4.caption = $event.data.item.name;
        };
    
3. and run the application.
4. page will display the search widget along with the labels.

[4\. Basic Widgets](/learn/app-development/widgets/widget-library/#basic)

- [4.1 Anchor](/learn/app-development/widgets/basic/anchor/)
- [4.2 Audio](/learn/app-development/widgets/media-widgets/)
- [4.3 HTML](/learn/app-development/widgets/basic/html/)
- [4.4 Icon](/learn/app-development/widgets/basic/icon/)
- [4.5 Iframe](/learn/app-development/widgets/basic/iframe/)
- [4.6 Label](/learn/app-development/widgets/basic/label/)
- [4.7 Message](/learn/app-development/widgets/basic/message/)
- [4.8 Picture](/learn/app-development/widgets/media-widgets/)
- [4.9 Progress Bar](/learn/app-development/widgets/basic/progress-bar/)
- [4.10 Richtext Editor](/learn/app-development/widgets/basic/richtext-editor/)
- [4.11 Search](/learn/app-development/widgets/basic/search/)
    - [Properties](/learn/app-development/widgets/basic/search/#properties)
    - [Events](/learn/app-development/widgets/basic/search/#events)
    - [Use Cases](/learn/app-development/widgets/basic/search-basic-usage/)
- [4.12 Spinner](/learn/app-development/widgets/basic/spinner/)
- [4.13 Tree](/learn/app-development/widgets/basic/tree/)
- [4.14 Video](/learn/app-development/widgets/media-widgets/)
