---
title: "Using Popover Widget"
id: "popover-basic-usage"
sidebar_label: "Creating a Popover"
---
---

We will use the popover to display the list of employees of a particular department using the Sample HRDB Database.

## 1. Import Database

[Import Sample HRDB](/learn/app-development/services/database-services/working-with-databases/) and in the [Query Editor](/learn/app-development/services/database-services/working-with-queries) write two queries - one to obtain **Employee count** for a given department and one for **Employee Picurl**. 

`Select count(*) from EMPLOYEE where EMPLOYEE.DEPTID = :deptid` `Select EMPLOYEE.PICURL from EMPLOYEE where EMPLOYEE.DEPTID = :deptid`

## 2. Create a **popover page**

Create a popover page and select a blank template.
- Drag and drop a **List** onto the canvas space, select the _data source_ to the _dataset_ of the _Emp_Picurl_ query variable created in the first step and set the _layout_ to _Media List_.

[![](/learn/assets/popover_configurelist.png)](/learn/assets/popover_configurelist.png)

- Bind the _picture_ widget to the picurl field of the query variable, delete the label from the list on canvas.

## 3. Drag and drop Popover Widget

1. Open the page where you want to have the popover, drag and drop the popover widget. 

[![](/learn/assets/popover_drag.png)](/learn/assets/popover_drag.png)

2. Set the **content source** property to the _partial_ and the **content** as _popover page_ created in the previous step and bind the **badge** value to the _Emp_Count value_. Content defines the page to be displayed when the popover link is clicked and badge indicates the number of items that will be displayed in the content. 

[![](/learn/assets/popover_badgevalue.png)](/learn/assets/popover_badgevalue.png)

3. We have added a select widget for the user to select the department for which they want to see the employee list. Drag and drop a **select widget** and bind it to _Department Dataset_. Set the **display field** to _name_, and **data field** to _deptid_.

4. Be sure you bind the **data field of both the query variables** to the _select widget datavalue_, and set the **Auto Update** to true.

## 4. Run the application

Run the application and see the menu in action.

## 5. Configurations and Settings

Repeat the steps 2 till 3 for the following:

- Set the **content source** property to be _inline_
- Set the _content_ as follows, we have used the list HTML from the partial page created in steps 2,3,4

```html
<wm-livelist listclass="media-list" itemclass="media" template="true" dataset="bind:Variables.HrdbExecuteEmpPic.dataSet" name="livelist1">
        <wm-listtemplate layout="media" name="listtemplate1">
            <wm-container class="media-left media-top" paddingleft="15" name="container1">
                <wm-picture picturesource="bind:Variables.HrdbExecuteEmpPic.dataSet.PICURL" name="Picture" class="media-object"></wm-picture>
            </wm-container>
        </wm-listtemplate>
    </wm-livelist>
```

:::note
Content can be any HTML code or URL to another page. 
:::

[![](/learn/assets/popover_link2.png)](/learn/assets/popover_link2.png)
