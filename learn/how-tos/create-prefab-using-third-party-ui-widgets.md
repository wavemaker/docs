---
title: "Create Prefab using Third Party UI Widgets"
id: ""
---

In this section, you will learn how to use third-party UI widgets in Studio. We do this with the help of Prefabs. We will use the example of integrating Lightbox image viewer in our application. It involves two steps – creating prefab and using the same. [![](/learn/assets/lbprefab_run2-1024x524.png)](/learn/assets/lbprefab_run2-1024x524.png)**Pre-Requisites**:

- Download the resources needed from [Lightbox image viewer](http://lokeshdhakar.com/projects/lightbox2/) and unzip the file.

# Creating Prefab

1. Click on **Create** from the _Prefab_ tab of the [Project Dashboard](http://[supsystic-show-popup id=102])
2. Enter a name and description for the Prefab
3. [Import the resources](http://[supsystic-show-popup id=112]) needed
4. Create **folder lightbox** with **three sub-folders css, js and images**
5. Upload the following files to their respective folders - **lightbox.min.js, lightbox.min.css and four images**. You will find these files in the respective folders from the extracted folder _lighbox2-master/dist_ folder. [![](/learn/assets/lbprefab_resource.png)](/learn/assets/lbprefab_resource.png)
6. From [Project Configurations](http://[supsystic-show-popup id=107]), choose Config Prefab under Settings:
    - **Resources** - delete the _Main.css_ from _Styles_ and add the following:
        - Styles: include the css file imported in the above step
        - Scripts: include the js file imported in the above step [![](/learn/assets/lbprefab_settings.png)](/learn/assets/lbprefab_settings.png)
    - **Properties**: any properties you want to expose to the user of this prefab. Here we have set two properties _pic_ and _title_, both being _in-bound_.

| Name | Display Name | Data Type | Default Value | Binding Type | Widget Type |
| --- | --- | --- | --- | --- | --- |
| pic | Picture | string | http://lokeshdhakar.com/projects/ lightbox2/images/image-1.jpg | in-bound | text |
| title | Title | string | Image | in-bound | text |

[![](/learn/assets/lbprefab_props.png)](/learn/assets/lbprefab_props.png)

7. You can set the group and icon to be associated with the Prefab from the Packaging section. This will be displayed in the Widget toolbox of the apps after Publishing the Prefab (next section). [![](/learn/assets/lbprefab_package.png)](/learn/assets/lbprefab_package.png)
8. Next we need to design the Prefab UI.
    - Drag and drop an **Anchor** widget onto the canvas.
    - Set Caption property to blank and bind the Prefab Properties defined in the previous step as follows:
        - **Hint** to the Prefab Property title, [![](/learn/assets/lbprefab_pic_props.png?v=20)](/learn/assets/lbprefab_pic_props.png?v=20)
        - **Hyperlink** to the Prefab Property pic and
        - **Icon Url** to the Prefab Property pic. Set Icon Width and Height to 100 [![](/learn/assets/lbprefab_pic_props2.png?v=20)](/learn/assets/lbprefab_pic_props2.png?v=20)
9. As per Lightbox requirement, in the _Markup_ add attribute _data-lightbox _to the _anchor_ widget tag as shown below: NOTE: Be aware that the names might change as per your app specifics.
    
    <wm-prefab-container name="page1">  
        <a href="{{pic}}" data-lightbox="image-1" data-title="{{title}}"></a> 
        <wm-anchor data-lightbox="image-1" margin="unset 0.5em" name="anchor1" caption="" hint="bind:title" hyperlink="bind:pic" iconurl="bind:pic" iconwidth="100" iconheight="100"></wm-anchor>  
    </wm-prefab-container>
    
10. You can test the Prefab using the **Preview** option from the Main Menu, this will take the values provided in the Default Values section of Properties. You can change the In-bound property and see the change.

# Using Prefab

We will use the Prefab to display the image in an app.

1. Save and Publish the Prefab.
2. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/custom-widgets/#publishing-prefabs).
3. Once approved, the Prefab will be available for use across the Projects. An entry will appear in the Artefacts list from the Developer Utilities on the [Project Workspace.](http://[supsystic-show-popup id=107]) The Prefab needs to be imported before it can be used from the Widget Toolbox.
4. Open/Create a project to see the usage of the above Prefab. Import the Prefanb from Artifacts listing dialog. Drag and drop the _Imageviewer_ onto the canvas.
5. Set the Title and Picture property. Here we are binding the Picture property to an image resource already imported into the app. [![](/learn/assets/lbprefab_dnd.png?v=20)](/learn/assets/lbprefab_dnd.png?v=20)
6. Run the project, the image will be displayed.
7. Hover the mouse over the image and see the name displayed in the hint field.
8. Click on one image to set Lightbox in motion, the image is displayed in the center of the page.

[Prefab Use Cases](/learn/app-development/widgets/use-cases-prefabs/)

- [1\. Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)
- [2\. Prefab using 3rd Party UI Widgets](#)
    - [i. Creating Prefab](#create)
    - [ii. Using Prefab](#using)
- [3\. Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)
- [4\. Prefab Using D3 Library (DataMaps)](/learn/how-tos/create-prefab-using-d3-library-datamaps/)
- [5\. Prefab Using JQuery Plugin - showcases using Events and Methods](/learn/how-tos/create-prefab-using-jquery-plugin/)
