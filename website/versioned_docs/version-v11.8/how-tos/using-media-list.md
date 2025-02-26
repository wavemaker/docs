---
title: "Using Media List"
id: "using-media-list"
---

### Overview

Media List can be used to display images in a Hybrid Mobile App.

In this post we will be creating a page with Media List to display employee’s pictures. We will be using the Sample HRDB for this example. [![medialist_run](/learn/assets/medialist_run.png)](/learn/assets/medialist_run.png)

1. Open or Create a Hybrid Mobile App.
2. From the **Main Menu**, using the **Import -> Connect to Datbase** option import the sample hrdb. [![bs_dbimport](/learn/assets/bs_dbimport.png)](/learn/assets/bs_dbimport.png)
3. Create a live variable with source as ‘hrdb’, type as ‘employee’ and operation as read. [![medialist_lv](/learn/assets/medialist_lv.png)](/learn/assets/medialist_lv.png)

1. Drag and drop _Media List_ widget on the page.
2. Bind the _dataset value_ property of Medial List to ‘employees’ live variable dataset created in the previous step. [![medialist_bind](/learn/assets/medialist_bind.png)](/learn/assets/medialist_bind.png)
3. From the Properties panel set _Thumbnailurl_ and _Mediaurl_ to the _picurl_ property of the Live Variables to Thumbnailurl and media url. **NOTE**: In this example, we are using the original picture for both Thumbnail and Media. [![medialist_props](/learn/assets/medialist_props.png)](/learn/assets/medialist_props.png)

1. Click **Run** to preview the Media List. [![medialist_run](/learn/assets/medialist_run.png)](/learn/assets/medialist_run.png)
