---
title: "Popover - Basic Usage"
id: ""
---

will use the popover to display the list of employees of a particular department using the Sample HRDB Database.

1. [Sample HRDB](http://[supsystic-show-popup id=106]) and in the [Editor](http://[supsystic-show-popup id=117]) write two queries - one to obtain **count** for a given department and one for **Picurl** `count(*) from EMPLOYEE where EMPLOYEE.DEPTID = :deptid` `EMPLOYEE.PICURL from EMPLOYEE where EMPLOYEE.DEPTID = :deptid`
2. a **page** and select a blank template.
    1. and drop a onto the canvas space, select the _source_ to the the _\_Picurl_ variable created in the first step and set the _List. [![](../assets/popover_configurelist.png)](../assets/popover_configurelist.png)_ 
    2. the widget to the picurl field of the query variable, delete the label from the list on canvas.
3. the page where you want to have the popover, drag and drop the popover widget. [![](../assets/popover_drag.png)](../assets/popover_drag.png)
    1. the **source** property to the and the as _page_ created in the previous step and bind the value to the _\_Count value_ Content defines the page to be displayed when the popover link is clicked and badge indicates the number of items that will be displayed in the content. [![](../assets/popover_badgevalue.png)](../assets/popover_badgevalue.png)
    2. have added a select widget for the user to select the department for which they want to see the employee list. Drag and drop a **widget** and bind it to _Dataset_ Set the **display field** to , and **field** to
    3. sure you bind the **field of both the query variables** the _widget datavalue_, and set the **Update** to true.
4. the application and see the menu in action.
5. the steps 2 till 3 from above.
    1. the **source** property to be
    2. the as follows, we have used the list HTML from the partial page created in steps 2,3,4
        
        <wm-livelist listclass="media-list" itemclass="media" template="true" dataset="bind:Variables.HrdbExecuteEmpPic.dataSet" name="livelist1">
                <wm-listtemplate layout="media" name="listtemplate1">
                    <wm-container class="media-left media-top" paddingleft="15" name="container1">
                        <wm-picture picturesource="bind:Variables.HrdbExecuteEmpPic.dataSet.PICURL" name="Picture" class="media-object"></wm-picture>
                    </wm-container>
                </wm-listtemplate>
            </wm-livelist>
        
        : Content can be any HTML code or URL to another page. [![](../assets/popover_link2.png)](../assets/popover_link2.png)
6. and see the results

[6\. Navigation Widgets](/learn/app-development/widgets/widget-library/#nav-widgets)

- [6.1 Breadcrumb](/learn/app-development/widgets/navigation/breadcrumb/)
- [6.2 Dropdown Menu](/learn/app-development/widgets/navigation/dropdown-menu/)
- [6.3 Nav](/learn/app-development/widgets/navigation/nav/)
- [6.4 Nav Bar](/learn/app-development/widgets/navigation/nav-bar/)
- [6.5 Popover](/learn/app-development/widgets/navigation/popover/)
    - [Properties](/learn/app-development/widgets/navigation/popover/#properties)
    - [Use Cases](/learn/app-development/widgets/navigation/popover-basic-usage/)
