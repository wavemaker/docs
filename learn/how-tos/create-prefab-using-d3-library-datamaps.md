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
3. Select the folder you want the resource to be imported to. For this, select the `resources` folder and upload the `topojson.min.js` and `datamaps.world.min.js` files.

[![](/learn/assets/datamap_resource.png)](/learn/assets/datamap_resource.png)

### Project Configuration

1. Click **Config Prefab** from the **Settings** dropdown.

![prefab project config](/learn/assets/prefab-project-config.png)

2. Reference the uploaded javascript files here. Make sure to add `topojson` first, and then the `datamaps` resource.

[![](/learn/assets/datamap_settings.png)](/learn/assets/datamap_settings.png)

### Designing the UI

1. Drag and drop a **Container Widget** onto the canvas, **Name** it `mapContainer`, and set the **Class Name** as `map-container`.

[![](/learn/assets/prefab_container.png)](/learn/assets/prefab_container.png)

2. Go to the **Script** tab, and add the following code.

[![](/learn/assets/datamap_script-1.png)](/learn/assets/datamap_script-1.png)

:::note
After creating the prefab, inside the script, you can find a few pre-defined functions.

- `[Prefab.onPropertyChange = propertyChangeHandler;]`
- `Prefab.onReady` method will be triggered post-initialization of the prefab. The code should go here:
:::

In this example, we are using world map and India map.

```js
Prefab.onPropertyChange = function(key, newVal, oldVal) {
    switch (key) {
        case 'dataset':
            Prefab.datafield = 'name'; //hardcoded
            Prefab.labelfield = 'customLabel'; //hardcoded

            generateDataset(newVal);

            if (Prefab.map) { //if map has been previously initialized
                Prefab.map.options.customLabelText = {};
                resetLabels();

                Prefab.map.options.fills = Prefab.colormap;
                Prefab.map.updateChoropleth(Prefab.data, {
                    reset: true
                });
                generateLabels();

                if (Prefab.showbubbles)
                    generateBubbles();

                if (Prefab.legend) {
                    $($('.datamaps-legend')).empty();
                    Prefab.map.legend();
                }
            }
            break;
        case 'colormap':
            break;
        default:
            break;
    }
};


Prefab.onReady = function() {
    initDataMap();
};

function initDataMap() {
    var mapCtr = Prefab.Widgets.mapContainer.$element[0];
    // this method will be triggered post initialization of the prefab.
    if (Prefab.scope === 'world') {
        initWorldMap(mapCtr);
    }
    // India map
    if (Prefab.scope === 'india') {
        initIndiaMap(mapCtr);
    }

    //draw bubbles for bombs
    if (Prefab.showbubbles)
        generateBubbles();
    if (Prefab.legend)
        Prefab.map.legend();
}

function initWorldMap(mapCtr) {
    Prefab.map = new Datamap({
        element: mapCtr,
        scope: Prefab.scope,
        fills: Prefab.colormap, //Any fill key, HIGH, LOW, MEDIUM, MAJOR, MINOR
        //height: Prefab.height,
        //width: Prefab.width,
        data: Prefab.data,
        //customTemplate: Prefab.detailstemplate,
        done: function(datamap) {
            //datamap.svg.call(d3.behavior.zoom().on("zoom", redrawMap));
            Prefab.datamap = datamap;
            //Prefab.zoom = d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

            // function redrawMap() {
            //     debugger
            //     console.log("inside refraw----", d3);
            //     datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            // }
            Prefab.datamap = datamap;
        },
        geographyConfig: {
            popupOnHover: Prefab.showdetails,
            //highlightOnHover: Prefab.highlight ? true : false,
            // highlightFillColor: Prefab.highlight,
            highlightBorderColor: Prefab.highlight,
            highlightBorderOpacity: 0.5,
            popupTemplate: function(geography, data) {
                return data["detailstemplate"];
            }
        },
        responsive: true
    });

    generateLabels();
}

function initIndiaMap(mapCtr) {
    Prefab.map = new Datamap({
        element: mapCtr,
        scope: Prefab.scope,
        //height: Prefab.height,
        geographyConfig: {
            popupOnHover: Prefab.showdetails,
            highlightOnHover: true,
            borderColor: '#444',
            borderWidth: 0.5,
            dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json',
            highlightBorderColor: Prefab.highlight,
            highlightBorderOpacity: 0.5,
            popupTemplate: function(geography, data) {
                return data["detailstemplate"];
            }        
        },
        fills: Prefab.colormap,
        data: Prefab.data,
        done: function(datamap) {            
        },
        setProjection: function(element) {
            var lat, lon, scaleval;
            if (window.matchMedia("screen and (max-width: 480px)").matches) {
                lat = 118.9629;
                lon = 23.5937;
                scaleval = 500;
            } else if (window.matchMedia("screen and (max-width: 640px)").matches) {
                lat = 96.9629;
                lon = 23.5937;
                scaleval = 700;
            } else if (window.matchMedia("screen and (max-width: 800px)").matches) {
                lat = 104.9629;
                lon = 23.5937;
                scaleval = 650;
            } else if (window.matchMedia("screen and (max-width: 1200px)").matches) {
                lat = 96.9629;
                lon = 23.5937;
                scaleval = 750;
            } else {
                lat = 84.9629;
                lon = 23.5937;
                scaleval = 1000;
            }
            var projection = d3.geo.mercator()
                .center([lat, lon]) // always in [East Latitude, North Longitude]
                .scale(scaleval);
            var path = d3.geo.path().projection(projection);
            return {
                path: path,
                projection: projection
            };
        },
        responsive: true
    });
    generateLabels();
}

//generate dataset for datamap, call on property init()
function generateDataset(dset) {
    if (Prefab.scope === 'india') {
        Prefab.data = {};
    } else {
        Prefab.data = [];
    }
    Prefab.labeldata = {};
    if (dset && Prefab.datafield) {
        var mainKey = [];
        var field = Prefab.datafield.split('.');
        var lblfield = Prefab.labelfield.split('.');
        _.forEach(dset, function(value, key) {
            mainKey = field.length > 1 ? value[field[0]][field[1]] : value[field[0]];
            Prefab.data[mainKey] = value;
            var labelKey = lblfield.length > 1 ? value[lblfield[0]][lblfield[1]] : value[lblfield[0]];
            if (labelKey)
                Prefab.labeldata[mainKey] = labelKey;
        });
    }
}
```

- Prefab is ready for use.

## DataMaps Prefab Usage - Adding Dataset

1. Save and **Publish** the Prefab.
2. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/custom-widgets/#publishing-prefabs).
3. The Prefab will be available for use across the Projects. You can see the entry in the Artefacts list from the Developer Utilities on the [Project Workspace](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) and in the Widget Toolbox of any Project within your workspace.
4. Open the project where you want to incorporate the Datamap Prefab created earlier
5. You will find the Prefab entry in the Prefab toolbox 

[![](/learn/assets/datamap_toolbar.png)](/learn/assets/datamap_toolbar.png)

6. Drag and drop the Prefab onto the canvas and set the height to 500px.
7. Add the dataset variable.

#### Dataset

For the dataset, create a variable as per requirement ( Ex : crud/ web service/ model). Here we are using a model variable derived from a web service variable.
As an example you can use the following : 

For world map:

```json	
[
  {
    "name": "RUS",
    "fillKey": "RUS",
	"latitude": 61.52401,
	"longitude": 105.318756,
	"radius": 25,
    "customLabel": "2361",
	"detailstemplate": "2361$"
  },
  {
    "name": "IND",
    "fillKey": "IND",
    "latitude": 20.593684,
	"longitude": 78.96288,
	"radius": 25,
    "customLabel": "5456",
	"detailstemplate": "5456$"
  },
  {
    "name": "GBR",
    "fillKey": "GBR",
    "latitude": 55.378051,
	"longitude": -3.435973,
	"radius": 25,
    "customLabel": "123",
	"detailstemplate": "4894$"
  },
  {
    "name": "FRA",
    "fillKey": "FRA",
    "latitude": 46.227638,
	"longitude": 2.213749,
	"radius": 25,
    "customLabel": "145",
	"detailstemplate": "4456$"
  },
  {
    "name": "USA",
    "fillKey": "USA",
    "latitude": 37.09024,
	"longitude": -95.712891,
	"radius": 25,
    "customLabel": "4231",
	"detailstemplate": "4231$"
  }
]
```

For India Map:

```json
{
   "JH":{
      "fillKey":"MINOR",
      "detailstemplate":"2361$"
   },
   "MH":{
      "fillKey":"MINOR",
      "detailstemplate":"5456$"
   }
}
```

:::note
Do not change the structure of the dataset. Use the above formats.
:::

8. Run the app and see the map displayed.

[![datamap_runbasic](/learn/assets/datamap_runbasic.png)](/learn/assets/datamap_runbasic.png)

## DataMaps Prefab - added functionality

Now that we have seen the usage of a basic datamap. Now, let us add some properties to the Prefab which can add bubble and labels.

can be bound from the project containing the Prefab.

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

![bubbles](/learn/assets/bubbles-corona-tracker.png)

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
- To set the properties we will be [creating **two Model Variables**](/learn/assets/var_sel.png) - ColorMap:
        
For colormap create a custom variable that will have color codes for the map.
As an example you can use the following : 


#### Colormap Variable


For world map 

```json
{
  "USA": "#1f77b4",
  "RUS": "#9467bd",
  "IND": "#e377c2",
  "GBR": "#8c564b",
  "FRA": "#d62728",
  "defaultFill": "#EDDC4E"
}
```

For India map

```json
{
  "LOW": "FADCD9",
  "MINOR": "#F8AFA6",
  "MODERATE": "#FE8181",
  "HIGH": "#FE5757",
  "SEVERE": "#FE2E2E",
  "CRITICAL": "#CB2424",
  "defaultFill": "#dddddd"
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
