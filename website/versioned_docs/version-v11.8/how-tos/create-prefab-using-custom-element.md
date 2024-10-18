---
title: "Create Prefab using Angular, React Components"
id: "create-prefab-using-custom-element"
---
---

WaveMaker framework is a pure javascript based runtime, making it compatible with most of the open web standards. The developers can include jquery based ui plugins, visualization libraries or any other javascript based code units to extend or complement the rich component library provided by the WaveMaker framework.

The components developed in one of the js frameworks are normally not compatible with other frameworks and cannot be directly used inside standard HTML markup with framework or build bundles. Inorder to make these components work across web, it needs to be converted into a framework agnostic module. [**Web Components**](https://developer.mozilla.org/en-US/docs/Web/Web_Components) is one of such open standards. It relies on standard browser APIs such as [CustomElements](https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements), [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) enabling its support across [browsers](https://caniuse.com/?search=web%20components) & frameworks. As mentioned earlier, WaveMaker works greatly with Open Standards thus with Web Component/Custom Elements as well. 

Most of the modern javascript frameworks have support for packaging the components as Web Components. WaveMaker supports the use of Web Components inside its projects & recommends its integration through [**Prefabs**](/learn/app-development/custom-widgets/custom-widgets). Its recommended to refer [documentation](/learn/app-development/custom-widgets/creating-prefabs/#build-your-own-prefabs) to know more about Prefabs in detail. 

The developers with **Angular** or **React** based components can leverage them in the WaveMaker project by exporting them as Web Components & importing through Prefabs.This documentation helps you understand the process with the help of Sample Component(_PosterWidget_) developed in both React & Angular. The source code is also shared for reference.


:::note
The shared _PosterWidget_ uses [OMDB](http://www.omdbapi.com/) API to fetch resources. If you are planning to try out the source code of component, please get the API key & replace in the source code before build.
:::
 
## Convert Angular Component into Prefabs
Angular Framework recommends <a href="https://angular.io/guide/elements" target="_blank">**Angular Elements**</a> to export its components as Web Componenets. The <a href="https://angular.io/guide/elements#transforming-components-to-custom-elements" target="_blank"> documentation </a> covers the process in detail with sample <a href="https://angular.io/guide/elements#example-a-popup-service" target="_blank"> code </a>as well. 

### Sample Angular Component 
For this demonstration we will use a `PosterWidget` Component developed with Angular version 9. The code for the component can be found in the <a target="_blank" href="https://github.com/subodhkumarWM/WebComponent-Angular-9">Github repository</a>. The repo has the Angular elements configured for the project. So, on building it generates Web Component artefacts for the `PosterWidget` angular component. 

However, you can [download the artefacts](/learn/assets/webcomponents/poster-widget-angular.zip) directly from here & continue with the rest of the steps. The artefact is a zip file & on extracting it provides following files,
* polyfills-*.js
* vendor-*.js
* runtime-*.js
* styles-*.js
* main-*.js

:::note
Before importing the Angular based Web Component into WaveMaker Prefabs/Projects, please validate that the components have no render issues or errors by including them in an plain HTML files.
:::

### Create Prefab
Once we have the [artefacts](/learn/assets/webcomponents/poster-widget-angular.zip), we can create a Prefab for it with the help of below steps,
* Create a Prefab project using the **Prefab** tab of the Project Dashboard.

[![](/learn/assets/howto_prefab_wc_01.png)](/learn/assets/howto_prefab_wc_01.png)

* Enter a _Name_ and _Description_ for the Prefab

[![](/learn/assets/howto_prefab_wc_02.png)](/learn/assets/howto_prefab_wc_02.png)

* Upload the [artefacts](/learn/assets/webcomponents/poster-widget-angular.zip) into the `Resources` folder of project as shown below. 

[![](/learn/assets/howto_prefab_wc_03.png)](/learn/assets/howto_prefab_wc_03.png)

[![](/learn/assets/howto_prefab_wc_04.png)](/learn/assets/howto_prefab_wc_04.png)

* From the _Project_ Screen, choose **Config Prefab** under **Settings**. In the **Resources** tab, update **Scripts** with the JS file imported in the previous step. 

[![](/learn/assets/howto_prefab_wc_05.png)](/learn/assets/howto_prefab_wc_05.png)

[![](/learn/assets/howto_prefab_wc_06.png)](/learn/assets/howto_prefab_wc_06.png)

* Please ensure the Javascript sction the scripts in the below order
    * `polyfills-*.js`
    * `vendor-*.js`
    * `runtime-*.js`
    * `styles-*.js`
    * `main-*.js`
* Open the `index.html` of the Prefab project and add the below Web Component polyfills to ensure support for all the browsers

```html
...
<head>
    ...
    <!-- WebComponent Polyfills -->
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2/custom-elements-es5-adapter.js"></script>
</head>

...
```
*  Open the markup of `Main` page of Prefab and add the below code to use `poster-widget-angular` Web Component  in the page markup. 

```html
<!-- PREFAB MARKUP -->
<wm-prefab-container name="prefab_container1">
    <div style={{height:"200px", width:"200px"}}>
        <!-- 
        Initialize the webComponent with attributes either in the markup & in the script, 
        The OnPropertyChange can be used to bind the value to attributes
        -->
        <poster-widget-angular title="" html-custom-element="true"></poster-widget-angular>
    </div>
</wm-prefab-container>
```
* Inorder to specify `poster-widget-angular` is a Web Component & not built in components, please add an additional attribute `html-custom-element="true"`. 
* Click on **Preview**, to check if the Web component is rendered without any issues.

[![](/learn/assets/howto_prefab_wc_07.png)](/learn/assets/howto_prefab_wc_07)

* Once the component is rendered, we need to configure the input attribute `title` for the component. 
* Inorder to communicate with web components, Prefab has an option called `Properties` under **Prefab Configurations** as shown below.
* Add a new property named `title` using the interface as shown below.

[![](/learn/assets/howto_prefab_wc_05.png)](/learn/assets/howto_prefab_wc_05)

[![](/learn/assets/howto_prefab_wc_08.png)](/learn/assets/howto_prefab_wc_08)


* This property can be used as a bridge between the external inputs or bindings to dynamically update the attribute of the WebComponent.
* Once the property is added, we can write the script to update the Web Component's attribute on change of the property as shown below.
```js
// PREFAB SCRIPT CODE
...

Prefab.onPropertyChange = function(key, newVal, oldVal) {

    switch (key) {
        case 'title':
            /* Get the container Id */
            let widget_id = Prefab.Widgets.prefab_container1.widgetId;
            /* 
            Get the WebComponent instance & 
            update the new property value to its "title" attribute
            */
            document.querySelector('div[widget-id="' + widget_id + '"]')
                .querySelector('poster-widget-angular')
                .setAttribute('title', newVal);

            break;
    }

};

...

```
* Now test the Prefab using **Preview** option again. Try with updating the `title` value in **Inputs** section of **Properties**. The Web Component should update accordingly.

[![](/learn/assets/howto_prefab_wc_09.png)](/learn/assets/howto_prefab_wc_09)

### Publish Prefab
* **Save** & **Publish** the Prefab. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/prefabs-overview#publishing-prefabs).
* Once approved, the Prefab will be available for use across the Projects. An entry will appear in the Artefacts list from the Developer Utilities on the [Project Workspace.](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) The Prefab needs to be imported before it can be used from the Widget Toolbox.



## Convert React Component into Prefab
Unlike Angular, currently there is no official support from React to develop Web Components. However, there are several community backed projects which can help in achieving it. Alternatively, developers can build Custom Element wrapper classes over existing react components as well. Lots of community blogs are available for both approaches which can be referred.

### Sample React Component
For this demonstration we will use a `PosterWidget` Component developed with React Version 17. The sample React component is converted into a Web Component using Custom Element Wrapper approach in which each lifecycle event of React is mapped to corresponding event in CustomElement. The code for the component can be found in the <a target="_blank" href="https://github.com/subodhkumarWM/WebComponent-React">Github repository</a>. The repo has all the details to build & generate  Web Component artefacts for the `PosterWidget` React component. 

However, you can [download the artefacts](/learn/assets/webcomponents/poster-widget-react.zip) directly from here & continue with the rest of the steps. The artefact is a zip file & on extracting it provides following files,
* `react-poster-widget.min.js`
* `react-poster-custom-element-wrapper.min.js`

:::note
Before importing the React based Web Component into WaveMaker Prefabs/Projects, please validate that the components have no render issues or errors by including them in an plain HTML files.
:::

### Create Prefab
Once we have the [artefacts](/learn/assets/webcomponents/poster-widget-angular.zip), we can create a Prefab for it with the help of below steps,
* Create a Prefab project using the **Prefab** tab of the Project Dashboard.

[![](/learn/assets/howto_prefab_wc_01.png)](/learn/assets/howto_prefab_wc_01.png)

* Enter a _Name_ and _Description_ for the Prefab

[![](/learn/assets/howto_prefab_wc_10.png)](/learn/assets/howto_prefab_wc_10.png)

* Upload the [artefacts](/learn/assets/webcomponents/poster-widget-angular.zip) into the `Resources` folder of project as shown below. 

[![](/learn/assets/howto_prefab_wc_03.png)](/learn/assets/howto_prefab_wc_03.png)

[![](/learn/assets/howto_prefab_wc_11.png)](/learn/assets/howto_prefab_wc_11.png)

* From the _Project_ Screen, choose **Config Prefab** under **Settings**. In the **Resources** tab, update **Scripts** with the JS file imported in the previous step. As we are rendering React elements inside out custom element wrapper, we should import React & React DOM libs as well.

[![](/learn/assets/howto_prefab_wc_12.png)](/learn/assets/howto_prefab_wc_12.png)

[![](/learn/assets/howto_prefab_wc_13.png)](/learn/assets/howto_prefab_wc_13.png)

* Please ensure the Javascript sction the scripts in the below order
    * `https://unpkg.com/react@17/umd/react.production.min.js`
    * `https://unpkg.com/react-dom@17/umd/react-dom.production.min.js`
    * `react-poster-widget.min.js`
    * `react-poster-custom-element-wrapper.min.js`
* Open the `index.html` of the Prefab project and add the below Web Component polyfills to ensure support for all the browsers
```html
...
<head>
    ...
    <!-- WebComponent Polyfills -->
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2/custom-elements-es5-adapter.js"></script>
</head>

...
```

*  Open the markup of `Main` page of Prefab and add the below code to use `poster-widget-react` Web Component  in the page markup. 

```html
<!-- PREFAB MARKUP -->
<wm-prefab-container name="prefab_container1">
    <div style={{height:"200px", width:"200px"}}>
        <!-- 
        Initialize the webComponent with attributes either in the markup & in the script, 
        The OnPropertyChange can be used to bind the value to attributes
        -->
        <poster-widget-react title="" html-custom-element="true"></poster-widget-react>
    </div>
</wm-prefab-container>
```

* Inorder to specify `poster-widget-react` is a Web Component & not built in components, please add an additional attribute `html-custom-element="true"`. 
* Click on **Preview**, to check if the Web component is rendered without any issues.

[![](/learn/assets/howto_prefab_wc_14.png)](/learn/assets/howto_prefab_wc_14)

* Once the component is rendered, we need to configure the input attribute `title` for the component. 
* Inorder to communicate with web components, Prefab has an option called `Properties` under **Prefab Configurations** as shown below.
* Add a new property named `title` using the interface as shown below.

[![](/learn/assets/howto_prefab_wc_12.png)](/learn/assets/howto_prefab_wc_12)

[![](/learn/assets/howto_prefab_wc_15.png)](/learn/assets/howto_prefab_wc_15)


* This property can be used as a bridge between the external inputs or bindings to dynamically update the attribute of the WebComponent.
* Once the property is added, we can write the script to update the Web Component's attribute on change of the property as shown below.
```js
// PREFAB SCRIPT CODE
...

Prefab.onPropertyChange = function(key, newVal, oldVal) {

    switch (key) {
        case 'title':
            /* Get the container Id */
            let widget_id = Prefab.Widgets.prefab_container1.widgetId;
            /* 
            Get the WebComponent instance & 
            update the new property value to its "title" attribute
            */
            document.querySelector('div[widget-id="' + widget_id + '"]')
                .querySelector('poster-widget-react')
                .setAttribute('title', newVal);

            break;
    }

};

...

```
* Now test the Prefab using **Preview** option again. Try with updating the `title` value in **Inputs** section of **Properties**. The Web Component should update accordingly.

[![](/learn/assets/howto_prefab_wc_16.png)](/learn/assets/howto_prefab_wc_16)

### Publish Prefab
* **Save** & **Publish** the Prefab. You can set the version for the Prefab and Publish it. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/prefabs-overview#publishing-prefabs).
* Once approved, the Prefab will be available for use across the Projects. An entry will appear in the Artefacts list from the Developer Utilities on the [Project Workspace.](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace) The Prefab needs to be imported before it can be used from the Widget Toolbox.



## Using Prefab inside the Project
* Open/Create a Project to  use  the Prefabs. 
* Open the `index.html` of the  Project and add the below Web Component polyfills to ensure support for all the browsers

```html
...
<head>
    ...
    <!-- WebComponent Polyfills -->
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.2/custom-elements-es5-adapter.js"></script>
</head>

...
```

* Drag & Drop  `AngularElementPrefab`, `ReactElementPrefab` (names may vary depending on what users have saved their prefabs with) Prefabs onto the page. 

[![](/learn/assets/howto_prefab_wc_17.png)](/learn/assets/howto_prefab_wc_17)

* Drag & Drop a _Select_ widget into the page, & provide static list of movie title as its _Dataset_ value. We will be binding the selected title as the input for Prefabs.

[![](/learn/assets/howto_prefab_wc_18.png)](/learn/assets/howto_prefab_wc_18)

* Bind `Title` property value on the Prefab to value from _Select_ widget.

[![](/learn/assets/howto_prefab_wc_19.png)](/learn/assets/howto_prefab_wc_19)

* **Preview** & **Deploy** the application to validate Prefabs created from Angular & React Components.

[![](/learn/assets/howto_prefab_wc_20.png)](/learn/assets/howto_prefab_wc_20)


## See Also

[Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)  
[Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)  
[Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)  
[Prefab Using D3 Library (DataMaps)](/learn/how-tos/create-prefab-using-d3-library-datamaps/)  