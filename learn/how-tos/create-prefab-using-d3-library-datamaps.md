---
title: "Create Prefab Using  D3 Library DataMaps"
id: ""
---
---

**D3.js** is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It uses widely implemented SVG, HTML5, and CSS standards and it is also known as D3 (Data-Driven Documents).

**DataMaps** provides data visualizations based on geographical data, and it mainly relies on the `D3.js` library. DataMaps are designed based on the SVG type; thus, it can scale into any screen size.

In this section, learn how to create a Prefab that displays **Datamaps** and use it in a project.

[![datamap_runbasic](/learn/assets/datamap_runbasic.png)](/learn/assets/datamap_runbasic.png) 

Also, learn how to add some basic properties to edit the functionality.

[![datamap_runadv](/learn/assets/datamap_runadv.png)](/learn/assets/datamap_runadv.png)

## Creating DataMaps Prefab

From the **Project Dashboard**, go to the **Prefab** tab and click **Create** .

![create prefab](/learn/assets/prefab_create.png)

Enter a name and description of the Prefab.

### Download files

1. Go to [DataMaps website](http://datamaps.github.io/) and download the required files from the **Downloads** section.

:::important
We have used the following two files - [topojson min.js](/learn/assets/topojson.min_.zip) and [datamaps world min.js](/learn/assets/datamaps.world_.min_.zip). Extract files from the `downloaded-zip` files.
:::

2. [Import the Resources](/learn/app-development/services/3rd-party-libraries).
3. Select the folder you want the resource to be imported to. For this, select the `resources` folder and upload the `datamaps.world.min.js` file.

[![](/learn/assets/datamap_resource.png)](/learn/assets/datamap_resource.png)

### Project Configuration

1. Click **Config Prefab** from the **Settings** dropdown.

![prefab project config](/learn/assets/prefab-project-config.png)

2. Reference the uploaded javascript files here. Make sure to add `topojson` first, and then the `datamaps` resource.

[![](/learn/assets/datamap_settings.png)](/learn/assets/datamap_settings.png)

### Designing the UI

1. Drag and drop a **Container Widget** onto the canvas, **Name** it `mapContainer`, and set the **Class Name** as `map-container`.

[![](/learn/assets/prefab_container.png)](/learn/assets/prefab_container.png)

2. Go to the **Script** tab, and enter the following code for the `Prefab.onReady` function.

[![](/learn/assets/datamap_script-1.png)](/learn/assets/datamap_script-1.png)

:::note
After creating the prefab, inside the script, you can find few pre-defined functions.

- `[Prefab.onPropertyChange = propertyChangeHandler;]`
- _Prefab.onReady_ method will be triggered post-initialization of the prefab. The code should go here:
:::

```js
Prefab.onReady = function () {
    var mapCtr = Prefab.Widgets.mapContainer.$element[0];
    // this method will be triggered post initialization of the prefab.
    Prefab.map = new Datamap({
        element: mapCtr,
        scope: Prefab.coverage,
        fills: Prefab.colormap,
        data: Prefab.data,
        customTemplate: Prefab.detailstemplate,
        done: function (datamap) {
            datamap.svg.call(d3.behavior.zoom().on("zoom", redrawMap));
            Prefab.datamap = datamap;
            Prefab.zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

            function redrawMap() {
                datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }
            Prefab.datamap = datamap;
        },
        responsive: true
    });

    generateLabelsfromKey();
    if (Prefab.labeldata) {
        //get all keys from the label data
        _.forEach(Prefab.labeldata, function (value, key) {
            labelKeys.push(key);
        });

        _.forEach(Prefab.datamap.worldTopo.objects.world.geometries, function (value) {
            _.includes(labelKeys, value.id) ? countryList[value.id] = Prefab.labeldata[value.id] : countryList[value.id] = ' ';
        });

        Prefab.map.labels({
            'customLabelText': countryList
        });

    }
};

$(window).on('resize', function () {
    Prefab.datamap.resize();
});
```   

- Prefab is ready for use.

## DataMaps Prefab Usage

1. Save and **Publish** the Prefab.
2. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/custom-widgets/#publishing-prefabs).
3. The Prefab will be available for use across the Projects. You can see the entry in the Artefacts list from the Developer Utilities on the [Project Workspace](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) and in the Widget Toolbox of any Project within your workspace.
4. Open the project where you want to incorporate the Datamap Prefab created earlier
5. You will find the Prefab entry in the Prefab toolbox 

[![](/learn/assets/datamap_toolbar.png)](/learn/assets/datamap_toolbar.png)

6. Drag and drop the Prefab onto the canvas and set the height to 500px.
7. Run the app and see the map displayed.

[![datamap_runbasic](/learn/assets/datamap_runbasic.png)](/learn/assets/datamap_runbasic.png)

## DataMaps Prefab - added functionality

Now that we have seen the usage of a basic datamap, let us add some properties to the Prefab which can be bound from the project containing the Prefab.

1. Open the Datamap Prefab created earlier
2. Open the Prefab Settings and add the following properties to it

| Name | Display Value | Data Type | Default Value | Binding Type | Widget Type | Data Options |
| --- | --- | --- | --- | --- | --- | --- |
| coverage | Coverage | string | world |  | select | world,usa |
| colormap | Color Map | object |  | in-bound | text |  |
| dataset | Dataset | object |  | in-bound | text |  |
| datafield | Data Field | string |  | in-bound | select |  |
| usekeys | Use Keys | string |  | in-bound | select |  |
| itemlabel | Item Label | string | world | in-bound | select |  |
| showdetails | Show | boolean | true | in-bound |  checkbox |  |
| detailstemplate | Details Template | list |  | in-bound |  text |  |
| highlight | Highlight | string | #e36000 | in-bound | colorpicker |  |
| height | Height | string | 400 |  |  text |  |
| width | Width | string | 100% |  |  text |  |

[![](/learn/assets/datamap_props.png)](/learn/assets/datamap_props.png)

3. Drag and drop another **container**, **name** - _mapActionContainer_; **class** - _map-action-buttons_
4. Add **three buttons** **named** - _zoomIn, zoomOut and zoomHome_; with **icon class** - _wi wi-zoom-in, wi wi-zoom-out, wi wi-home_; and **Click event** to trigger - _zoomInClick, zoomOutClick, zoomHomeClick_
5. The **Script** needs to be updated to include the functionality to support the properties and button events added. Download the following file for the updated script: [datamaps_additional_script](/learn/assets/datamaps_additional_script.txt)
6. Now the Prefab is ready for consumption

## DataMaps Prefab Usage - added functionality

Now that you have made changes to the Prefab, we have to incorporate these changes in the Project using the Prefab. There are two ways to achieve this - Update in Prefab in Project or Publish Prefab with an updated version.

- **Update Prefab in Project**:
    1. From the Prefab, select Update Prefab in Project under the Export option and select the Project using the Prefab. 
    
    [![](/learn/assets/datamap_update.png)](/learn/assets/datamap_update.png)

    2. Open the Project where Prefab was incorporated earlier
    3. You will see a dialog saying the updated version is available for usage. You can choose to **Revert** to the published version or **Continue** with the updated version. Click **Continue** to see the updated version.
    4. You will see the Prefab in the Toolbox with **MOD** status indicating that it is the modified version
    5. You need to Publish the Prefab to get the updated version in the Artifacts
- **Publish Prefab**:
    1. Publish the Prefab and increment the version number
    2. Open the Project where Prefab was incorporated earlier
    3. You will see a dialog saying the updated version is available for usage. **Update & Reload**.
- You will find new properties displayed in the Properties panel
- To set the properties we will be [creating **two Model Variables**](/learn/assets/var_sel.png) - MapProps and ColorMap:
    1. **MapProps** as a _list JSON format_, we are setting label etc.:

        ```json
        [
          {
            "name": "RUS",
            "fillKey": "RUS",
            "numberOfThings": 1564,
            "customLabel": "2,361$"
          },
          {
            "name": "PRK",
            "fillKey": "PRK",
            "numberOfThings": 2786,
            "customLabel": "2,749$"
          },
          {
            "name": "PRC",
            "fillKey": "PRC",
            "numberOfThings": 13456,
            "customLabel": "3,418$"
          },
          {
            "name": "IND",
            "fillKey": "IND",
            "numberOfThings": 23459,
            "customLabel": "5,456$"
          },
          {
            "name": "GBR",
            "fillKey": "GBR",
            "numberOfThings": 1038,
            "customLabel": "4,894$"
          },
          {
            "name": "FRA",
            "fillKey": "FRA",
            "numberOfThings": 3814,
            "customLabel": "4,456$"
          },
          {
            "name": "PAK",
            "fillKey": "PAK",
            "numberOfThings": 6381,
            "customLabel": "4,196$"
          },
          {
            "name": "USA",
            "fillKey": "USA",
            "numberOfThings": 10381,
            "customLabel": "4,231$"
          }
        ]
        ```

        [![](/learn/assets/mapprops_var.png)](/learn/assets/mapprops_var.png)

    2. **ColorMap** with the following code, where we are defining colors for a few countries:

        ```json
        {
          "USA": "#1f77b4",
          "RUS": "#9467bd",
          "PRK": "#ff7f0e",
          "PRC": "#2ca02c",
          "IND": "#e377c2",
          "GBR": "#8c564b",
          "FRA": "#d62728",
          "PAK": "#7f7f7f",
          "defaultFill": "#EDDC4E"
        }
        ```

        [![](/learn/assets/colormap_var.png)](/learn/assets/colormap_var.png)

- Bind the MapProps Variable to the **Dataset** property and set the rest of the properties; Bind ColorMaps Variable to the **Colormap** Property 

[![](/learn/assets/datamap_bind.png)](/learn/assets/datamap_bind.png)

- Run the app, you can see the countries color coded, along with the labels. You can use the buttons to zoom in, zoom out or return to home settings: 

[![datamap_runadv](/learn/assets/datamap_runadv.png)](/learn/assets/datamap_runadv.png)

## See Also

[Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)  
[Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)  
[Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)  
[Prefab Using JQuery Plugin - showcases using Events and Methods](/learn/how-tos/create-prefab-using-jquery-plugin/)  
