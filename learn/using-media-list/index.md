---
title: "Using Media List"
id: ""
---

Media List can be used to display images in a Hybrid Mobile App.

this post we will be creating a page with Media List to display employee’s pictures. We will be using the Sample HRDB for this example. [![medialist_run](../assets/medialist_run.png)](../assets/medialist_run.png)

1. or Create a Hybrid Mobile App.
2. the **Menu**, using the **\-> Connect to Datbase** option import the sample hrdb. [![bs_dbimport](../assets/bs_dbimport.png)](../assets/bs_dbimport.png)
3. a live variable with source as ‘hrdb’, type as ‘employee’ and operation as read. [![medialist_lv](../assets/medialist_lv.png)](../assets/medialist_lv.png)

1. and drop _List_ widget on the page.
2. the _value_ property of Medial List to ‘employees’ live variable dataset created in the previous step. [![medialist_bind](../assets/medialist_bind.png)](../assets/medialist_bind.png)
3. the Properties panel set and to the property of the Live Variables to Thumbnailurl and media url. : In this example, we are using the original picture for both Thumbnail and Media. [![medialist_props](../assets/medialist_props.png)](../assets/medialist_props.png)

1. to preview the Media List. [![medialist_run](../assets/medialist_run.png)](../assets/medialist_run.png)
