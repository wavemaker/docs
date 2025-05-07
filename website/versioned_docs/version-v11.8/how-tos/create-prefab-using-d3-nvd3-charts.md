---
title: "Create Prefab Using D3 & NVD3 Charts"
id: "create-prefab-using-d3-nvd3-charts"
---
---

D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction. The chart widgets which are offered by WaveMaker are based out of NVD3 charts, which are re-usable charts for D3 charts. and as such implementing any of the NVD3 & D3 charts becomes easy. Here we will see two simple examples - [line chart (D3)](#creationd3) and [line plus bar chart (NVD3)](#creationnvd3).

## Implementing D3 Charts

We will see the implementation of a simple d3 line chart using [the following example](http://www.sitepoint.com/creating-simple-line-bar-charts-using-d3-js/).

:::note
This implementation is for D3 version: 3.5.17 charts.
:::

1. Click on **Create** from the _Prefab_ tab of the [Project Dashboard](/learn/app-development/wavemaker-overview/product-walkthrough#dashboard-walkthrough)
2. Enter a name and description for the Prefab
3. **SAVE** the project setting without making any changes
4. Open the **SCRIPT** tab of the Main page
    
    - Add a variable `var data = [];`
    - Add the following code to the **propertyChangeHandler** function. This code is taking the input data in the form of an object and generating the values to be represented on the sale- and year- attributes for the chart. **The input object, according to the below code snippet, is expected to have at least two fields named budget and year**. We are using this since in implementation we will show binding the chart to Department database.
    
    ```js
    function propertyChangeHandler(key, newVal, oldVal) {
        switch (key) {
        case "dataset":
            //                    debugger;
            var year = 2000;
            _.each(newVal.data, function (obj) {
                data.push({
                    "sale": obj.budget / 10000,
                    "year": year
                });
    
                year += 1;
            });
            renderChart();
            break;
        case "prop2":
            // do something with newVal for property 'prop2'
            break;
        }
    }
    /* register the property change handler */
    Prefab.onPropertyChange = propertyChangeHandler;
    ```
    - Enter the following code (you can copy and paste the same). This code is to set up the visual rendering of D3 chart.

    ```js
    function renderChart() {
        var vis = d3.select("#visualisation"),
                WIDTH = 1000,
                HEIGHT = 1000,
                MARGINS = {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 50
                },
                xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([2000, 2004]),
                yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 350]),
                xAxis = d3.svg.axis()
                .scale(xScale),
                yAxis = d3.svg.axis()
            vis.append("svg:g")
                .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
                .call(xAxis);
                    yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");
            vis.append("svg:g")
                .attr("transform", "translate(" + (MARGINS.left) + ",0)")
                .call(yAxis);
            var lineGen = d3.svg.line()
                .x(function(d) {
                    return xScale(d.year);
                })
                .y(function(d) {
                    return yScale(d.sale);
                });
            vis.append('svg:path')
                .attr('d', lineGen(data))
                .attr('stroke', 'green')
                .attr('stroke-width', 2)
                .attr('fill', 'none');
    ```
    
    - Invoke the above function when Prefab loads:

    ```js
    Prefab.onReady = function() {
        renderChart();
    }
    ```   
    
    [![](/learn/assets/d3_js.png)](/learn/assets/d3_js.png)

5. In the **MARKUP** tab add the following code within the _wm-content_ tag: 
    
    [![](/learn/assets/d3_html.png)](/learn/assets/d3_html.png)
    ```
     <svg id="visualisation" width="100%" height="500"></svg>
    ```
    
6. [Import Resource](/learn/app-development/services/3rd-party-libraries), to import the [d3-min js](/learn/assets/d3-min.zip) file (download and extract the file) into the Resource folder of your Prefab. 

[![](/learn/assets/d3_import.png)](/learn/assets/d3_import.png)

7. From [Project Configurations](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace), choose Config Prefab under Settings:
    - From Resources, add the js files 
    
    [![](/learn/assets/d3_resource.png)](/learn/assets/d3_resource.png)
    
:::note
You can expose many properties and set the values as static or dynamic to be bound. For details of the properties that can be exposed refer to the [D3 website](https://d3js.org/).
:::

- **Add Property** - **dataset** with attributes _Widget_ set to **text**, _Type_ set to **object** (type it, if not selectable) and _Bindable_ set to **in-bound** 
    
    [![](/learn/assets/d3_props.png)](/learn/assets/d3_props.png)

8. You can set the display icon and mention the group for Prefab from the Packaging tab
9. You can publish the Prefab to a project for testing or publish it to EDN for making it available across the enterprise.
10. Save and Publish the Prefab. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/prefabs-overview#publishing-prefabs).
11. Once approved by the EDN Admin, the Prefab will be available for use across the Projects. You can see the entry in the Artifacts list from the Developer Utilities on the [Project Workspace](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace). Import it to see the same in the Widget Toolbox of any Project within your workspace.

## Using D3 Charts Prefab

1. Open the app, where you want to incorporate this Prefab.
2. If you have published to the app, in the **Prefab section of the toolbox** on the left, you will see the newly imported Prefab.
3. Drag and drop the Prefab onto the canvas and Bind its dataset property. For this example, we have bound it to the HrdbDepartmentData dataset, which is available on the [import of sample database](/learn/app-development/services/database-services/working-with-databases/) 

[![](/learn/assets/d3_bind.png)](/learn/assets/d3_bind.png)

4. **Preview** the app

## Implementing NVD3 Charts

In the previous section, we have seen a simple implementation using D3 Chart. This section we will see the implementation of NVD3 charts. **NVD3** is wrapper upon D3 which simplifies the implementation when compared to D3. These can also be incorporated easily into WaveMaker applications. In this section, we will see how to implement the Line Plus Bar Chart as [seen here](http://nvd3.org/examples/linePlusBar.html).

:::note 
his implementation is for NVD3 version: 1.8.4 charts.
:::

1. Click on **Create** from the _Prefab_ tab of the [Project Dashboard](/learn/app-development/wavemaker-overview/product-walkthrough#dashboard-walkthrough)
2. Enter a name and description for the Prefab
3. **SAVE** the project setting without making any changes
4. [Import Resource](/learn/app-development/services/3rd-party-libraries) to import the following resource files: [nv-d3-min](/learn/assets/nv-d3-min.zip) & [nv-d3 file](/learn/assets/nv.d3.zip) into the Resource folder of your Prefab (download and extract the files). [![](/learn/assets/nvd3_import.png)](/learn/assets/nvd3_import.png)
5. Open the **SCRIPT** tab of the Main page
6. Enter the following code (you can copy and paste the same). This code generates the sin and cosine values that can be represented on the chart. Note that for the sin values, the bar attribute is set to true, thus the sine values are represented as bar chart while cosine values are represented as line graph. [Click here for the code](/learn/assets/nvd3_linegraph.txt). 

    Enter the following function, too, within **Prefab.onReady** function after the above code. This code is to set up the visual rendering of NVD3 chart. [Click here for the code](/learn/assets/nvd3_onReady.txt)

    [![](/learn/assets/nvd3_js1.png)](/learn/assets/nvd3_js1.png)

7. In the **MARKUP** tab add the following code within the _wm-content_ tag: 

    [![](/learn/assets/nvd3_html.png)](/learn/assets/nvd3_html.png)

```html
<svg id="visualisation" width="100%" height="500"></svg>
```
    
8. **Preview** the app.

    [![](/learn/assets/nvd3_run.png)](/learn/assets/nvd3_run.png) 
    
    Try selecting a part of the graph from the bottom miniature graph and see the UI changes
9. To be used as the Prefab, it would be nice to bind the data to an object in the app using the Prefab instead of static graph display. Next couple of steps will help do the same.

10. From [Project Configurations](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace), choose Config Prefab under Settings:

    - From Resources, include the script and css files imported earlier, you can pick from the drop down list 
    
    [![](/learn/assets/nv_d3_library.png)](/learn/assets/nv_d3_library.png)
    
    OR, You can instead include http url in place of script and style files: https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.4/nv.d3.css https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.4/nv.d3.min.js 
    
    
    
:::note
You can expose many properties and set the values as static or dynamic to be bound. For details of the properties that can be exposed refer to the [NVD3 website](http://nvd3.org/).
:::

- **Add property dataset**, with **text** as _widget_, **array** (type if not selectable) as _type_ and **in-bound** as the _bindable_ attributes. 
    
    [![](/learn/assets/nvd3_props.png)](/learn/assets/nvd3_props.png)

    - Add the following code to the **propertyChangeHandler** function. This function is triggered when the Prefab property changes in the incorporated app. This replaces the data built in the onInitPrefab function. Here, instead of taking static data, we are using the object passed to the Prefab to calculate the values to be represented on the x- and y-axis. **The input object, according to the below code snippet, is expected to have two fields budget and q1**. We are using this since in the app incorporating this Prefab we will see the binding with Department database. Add the following variable declaration:

    ```js    
    var data = [],
        sin = [],
        cos = [];

        switch (key) {
            case "dataset":
                //    debugger;
                _.each(newVal.data, function(obj, index) {
                    sin.push({
                        "y": obj.budget,
                        "x": index
                    });
                    cos.push({
                        "y": obj.q1,
                        "x": index
                    });

                });

                data = [{
                    values: sin,
                    bar: true,
                    key: 'Sine Wave',
                    color: '#ff7f0e'
                }, {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                }];

                break;
            case "prop2":
                // do something with newVal for property 'prop2'
                break;
        }
    }
    ```

    [![](/learn/assets/nvd3_js1.png)](/learn/assets/nvd3_js1.png)

    - You can publish the Prefab to a project for testing or publish it to EDN for making it available across the enterprise.
    - Save and Publish the Prefab. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/prefabs-overview#publishing-prefabs).
    - Once approved by the EDN Admin, the Prefab will be available for use across the Projects. You can see the entry in the Artifacts list from the Developer Utilities on the [Project Workspace](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace). Import it to see the same in the Widget Toolbox of any Project within your workspace.

## Using NVD3 Charts Prefab

1. Open the app, where you want to incorporate this Prefab
2. Since we published the Prefab, in the **Prefab section of the toolbox** on the left, you will see the newly imported Prefab
3. **Drag and drop the Prefab** onto the canvas and bind its **dataset** property. For this example, we have bound it to the _HrdbDepartmentData dataset_, [created from the Database CRUD APIs](/learn/assets/var_sel.png) available on the [import of sample database](/learn/app-development/services/database-services/working-with-databases/) 

[![](/learn/assets/nvd3_bind.png)](/learn/assets/nvd3_bind.png)

4. **Preview** the app.
 
 [![nvd3_app_run](/learn/assets/nvd3_app_run.png)](/learn/assets/nvd3_app_run.png)

## See Also

[Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)  
[Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)  
[Prefab Using D3 Library (DataMaps)](/learn/how-tos/create-prefab-using-d3-library-datamaps/)  
[Prefab Using JQuery Plugin - showcases using Events and Methods](/learn/how-tos/create-prefab-using-jquery-plugin/)
