---
title: "Create Prefab Using  D3 Library (DataMaps)"
id: "create-prefab-using-d3-library-datamaps"
---

**3.js** (or just D3 for Data-Driven Documents) is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of the widely implemented SVG, HTML5, and CSS standards. is intended to provide data visualizations based on geographical data. It is SVG-based and can scale to any screen size. It heavily relies on the D3.js library.

this section we will see how to create a Prefab to display the datamaps and use it in a project of your own. [![datamap_runbasic](../assets/datamap_runbasic.png)](../assets/datamap_runbasic.png) We will be showing how to add some basic properties to manipulate the functionality. [![datamap_runadv](../assets/datamap_runadv.png)](../assets/datamap_runadv.png)

# Prefab Creation

1. on from the tab of the [Dashboard](http://[supsystic-show-popup id=102])
2. a name and description for the Prefab
3. the website for [](http://datamaps.github.io/)and download the required files from the Downloads section. We will be implementing the Basic edition. We have used the following two files - [min.js](../assets/topojson.min_.zip) and [world min.js](../assets/datamaps.world_.min_.zip) (extract from the provided zip files)
4. [the Resources](http://[supsystic-show-popup id=112])
5. the folder you want the resource to be imported to, here we had selected folder. [![](../assets/datamap_resource.png)](../assets/datamap_resource.png)
6. [Configurations](http://[supsystic-show-popup id=107]), choose Config Prefab under Settings:
    - the uploaded script files. Make sure you enter topojson first and then datamaps resource [![](../assets/datamap_settings.png)](../assets/datamap_settings.png)
    - **Design**: Drag and drop a **Widget** onto the canvas, it and set the as _\-container_ [![](../assets/prefab_container.png)](../assets/prefab_container.png)
    - the tab and enter the following code for method [![](../assets/datamap_script-1.png)](../assets/datamap_script-1.png) : After successful creation of the prefab, inside the script, we notice there are few functions pre-defined:
        -  _\[Prefab.onPropertyChange = propertyChangeHandler;\]_
        - method will be triggered post-initialization of the prefab. The code should go here:
            
             = function () {
                var mapCtr = Prefab.Widgets.mapContainer.$element\[0\];
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
                        Prefab.zoom = d3.behavior.zoom().scaleExtent(\[1, 8\]).on("zoom", zoomed);
            
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
                    \_.forEach(Prefab.labeldata, function (value, key) {
                        labelKeys.push(key);
                    });
            
                    \_.forEach(Prefab.datamap.worldTopo.objects.world.geometries, function (value) {
                        \_.includes(labelKeys, value.id) ? countryList\[value.id\] = Prefab.labeldata\[value.id\] : countryList\[value.id\] = ' ';
                    });
            
                    Prefab.map.labels({
                        'customLabelText': countryList
                    });
            
                }
            };
            
            $(window).on('resize', function () {
                Prefab.datamap.resize();
            });
            
    - is ready for use.

# Prefab Usage

1. and the Prefab
2. can set the version for the Prefab and Publish it. Know more about publishing Prefabs from[](/learn/app-development/custom-widgets/custom-widgets/#publishing-prefabs)
3. Prefab will be available for use across the Projects. You can see the entry in the Artefacts list from the Developer Utilities on the [Workspace](http://[supsystic-show-popup id=107]) and in the Widget Toolbox of any Project within your workspace.
4. the project where you want to incorporate the Datamap Prefab created earlier
5. will find the Prefab entry in the Prefab toolbox [![](../assets/datamap_toolbar.png)](../assets/datamap_toolbar.png)
6. and drop the Prefab onto the canvas and set the height to 500px
7. the app and see the map displayed [![datamap_runbasic](../assets/datamap_runbasic.png)](../assets/datamap_runbasic.png)

# Prefab - added functionality

that we have seen the usage of a basic datamap, let us add some properties to the Prefab which can be bound from the project containing the Prefab.

1. the Datamap Prefab created earlier
2. the Prefab Settings and add the following properties to it

Value

Type

Value

Type

Type

Options

,usa

Map

\-bound

\-bound

Field

\-bound

Keys

\-bound

Label

\-bound

\-bound

 checkbox

Template

\-bound

 text

#e36000

\-bound

400

 text

100%

 text

[![](../assets/datamap_props.png)](../assets/datamap_props.png)

3. and drop another , \- ; \- _\-action-buttons_
4. **buttons** \- _, zoomOut and zoomHome_; with **class** - _wi-zoom-in, wi wi-zoom-out, wi wi-home_; and **event** to trigger - _, zoomOutClick, zoomHomeClick_
5. needs to be updated to include the functionality to support the properties and button events added. Download the following file for the updated script: [\_additional\_script](../assets/datamaps_additional_script.txt)
6. the Prefab is ready for consumption

# Prefab Usage - added functionality

Now that you have made changes to the Prefab, we have to incorporate these changes in the Project using the Prefab. There are two ways to achieve this - Update in Prefab in Project or Publish Prefab with an updated version.

- **Prefab in Project**:
    1. the Prefab, select Update Prefab in Project under the Export option and select the Project using the Prefab. [![](../assets/datamap_update.png)](../assets/datamap_update.png)
    2. the Project where Prefab was incorporated earlier
    3. will see a dialog saying the updated version is available for usage. You can choose to to the published version or with the updated version. Click to see the updated version.
    4. will see the Prefab in the Toolbox with status indicating that it is the modified version
    5. need to Publish the Prefab to get the updated version in the Artifacts
- **Prefab**:
    1. the Prefab and increment the version number
    2. the Project where Prefab was incorporated earlier
    3. will see a dialog saying the updated version is available for usage. **& Reload**
- will find new properties displayed in the Properties panel
- set the properties we will be [**Model Variables**](http://[supsystic-show-popup id=105]) - MapProps and ColorMap:
    1. as a _JSON format_, we are setting label etc.:
        
        \[
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
        \]
        
        [![](../assets/mapprops_var.png)](../assets/mapprops_var.png)
    2. with the following code, where we are defining colors for a few countries:
        
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
        
        [![](../assets/colormap_var.png)](../assets/colormap_var.png)
- the MapProps Variable to the property and set the rest of the properties; Bind ColorMaps Variable to the Property [![](../assets/datamap_bind.png)](../assets/datamap_bind.png)
- the app, you can see the countries color coded, along with the labels. You can use the buttons to zoom in, zoom out or return to home settings: [![datamap_runadv](../assets/datamap_runadv.png)](../assets/datamap_runadv.png)

[Use Cases](/learn/app-development/widgets/use-cases-prefabs/)

- [1\. Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)
- [2\. Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)
- [3\. Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)
- [4\. Prefab Using D3 Library (DataMaps)](#)
    - [Creating Prefab](#create)
    - [Using Prefab](#using)
    - [Adding Functionality](#functionality)
    - [Using Updated Prefab](#functionality-using)
- [5\. Prefab Using JQuery Plugin - showcases using Events and Methods](/learn/how-tos/create-prefab-using-jquery-plugin/)
