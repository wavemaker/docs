---
title: "Create Prefab using Web Components or Custom Elements"
id: ""
---
---
In this section, you will learn how to use **Web Components** or **Custom Elements** inside the WaveMaker project through the use of **Prefabs**. We will use an example of integrating _Movie Poster_ Web Component in our application. It involves two steps 
* Creating the Prefab
* Using the Prefab in an project.

## Pre-Requisites
* Download the <a href="/learn/assets/webcomponents/custom-elements.js" download> Movie Poster </a>  Custom Element artefacts file.

## Sample Web Component :  Movie Poster 
* In this example we will be using a Web Component named `app-movie-poster` 
* The component will display the poster for a given movie title
* The component takes the movie title as an input through an attribute `moviename`
* Example usage in the html markup is as below
```
<html>
...
<body>
...
<app-movie-poster moviename="inception"></app-movie-poster>
...
</body>
</html>
```


## Creating Prefab
* Create a Prefab project using the **Prefab** tab of the Project Dashboard.

[![](/learn/assets/howto_prefab_wc_01.png)](/learn/assets/howto_prefab_wc_01.png)

* Enter a Name and Description for the Prefab
* Import the resources needed which is the `javascript` file of the WebComponent

[![](/learn/assets/howto_prefab_wc_02.png)](/learn/assets/howto_prefab_wc_02.png)

* From the Project Screen, choose **Config Prefab** under **Settings**
* In the **Resources** tab update **Scripts** with the JS file imported in the previous step

[![](/learn/assets/howto_prefab_wc_03.png)](/learn/assets/howto_prefab_wc_03.png)

[![](/learn/assets/howto_prefab_wc_04.png)](/learn/assets/howto_prefab_wc_04.png)


* Please open the Prefab markup and add the below code to use `app-movie-poster` Web Component  in the page markup. 

```html
<!-- PREFAB MARKUP -->
<wm-prefab-container name="prefab_container1">
    <div style="height:200px; width:200px">
        <!-- 
        Initialize the webComponent with attributes either in the markup & in the script, 
        The OnPropertyChange can be used to bind the value to attributes
        -->
        <app-movie-poster moviename="" html-custom-element="true"></app-movie-poster>
    </div>
</wm-prefab-container>
```

* Inorder to specify that the `app-movie-poster` tag will refer to a Web Component & not any built in components, please add an additional attribute `html-custom-element="true"`. 

* Click on **Preview**, to check if the Web component is rendered without any issues.

[![](/learn/assets/howto_prefab_wc_06.png)](/learn/assets/howto_prefab_wc_06)

* Once the component is rendered, we need to configure the input attribute `moviename` for the component. 
* Inorder to communicate with web components, Prefab has an option called `Properties` under **Prefab Configurations** as shown below.
* Add a new Property named `MovieName` using the interface as shown below.

[![](/learn/assets/howto_prefab_wc_05.png)](/learn/assets/howto_prefab_wc_05)

* This property can be used as a bridge between the external inputs or bindings to dynamically update the attribute of the WebComponent.
* Once the property is added, we can write the script to update the Web Components' attribute on change of the property as shown below.
```js
// PREFAB SCRIPT CODE
...

Prefab.onPropertyChange = function(key, newVal, oldVal) {

    switch (key) {
        case 'moviename':
            /* Get the container Id */
            let widget_id = Prefab.Widgets.prefab_container1.widgetId;
            /* 
            Get the WebComponent instance & 
            update the new property value to its "moviename" attribute
            */
            document.querySelector('div[widget-id="' + widget_id + '"]')
                .querySelector('app-movie-poster')
                .setAttribute('moviename', newVal);

            break;
    }

};

...

```
* Now test the Prefab using **Preview** option again. Try with updating the `Moviename` value in **Inputs** section of **Properties**. The Web Component should update accordingly.

[![](/learn/assets/howto_prefab_wc_07.png)](/learn/assets/howto_prefab_wc_07)

## Using Prefab

We will use the prefab to display the Posters in an Sample Movie Recommendations app.
* **Save** & **Publish** the Prefab.
* You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/custom-widgets/#publishing-prefabs).
* Once approved, the Prefab will be available for use across the Projects. An entry will appear in the Artefacts list from the Developer Utilities on the [Project Workspace.](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) The Prefab needs to be imported before it can be used from the Widget Toolbox.
* Open/Create a project to see the usage of the above Prefab. Import the Prefab from Artifacts listing dialog. Drag and drop the _MoviePoster_ onto the canvas.
* Add a _Select_ widget & update it with a static list of movies as the Dataset value to it.

[![](/learn/assets/howto_prefab_wc_08.png)](/learn/assets/howto_prefab_wc_08)

* The value chosen from the _Select_ widget can be bound as the input value of the _Moviename_ property of the prefab to display the poster.

[![](/learn/assets/howto_prefab_wc_09.png)](/learn/assets/howto_prefab_wc_09)

* Now **Preview** the application. Try selecting the values in the _Select_ widget, the Prefab will update accordingly.

[![](/learn/assets/howto_prefab_wc_10.png)](/learn/assets/howto_prefab_wc_10)

## See Also

[Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)  
[Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)  
[Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)  
[Prefab Using D3 Library (DataMaps)](/learn/how-tos/create-prefab-using-d3-library-datamaps/)  