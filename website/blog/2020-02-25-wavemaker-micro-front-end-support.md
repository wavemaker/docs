---
title: "Deliver WaveMaker Apps as Micro Frontend modules"
author: Subodh Kumar
---



A Real world application is composed of multiple modules. Changes or upgrades to a given module can impact other modules & add more testing effort to the development timeline. Including a new technology into the existing app might be tough as the existing app might not include all support such as the build process. 

<!-- truncate -->

## Introduction to Micro Frontends

One of the practices which simplifies development & maintenance of such apps is to decompose the application into modules which can be independently developed, tested and deployed. This is known as the **MicroServices** pattern. Adapting these practices to front end systems enables us to generate independent composable application modules. Such modules are called [**Micro Frontends**](https://www.martinfowler.com/articles/micro-frontends.html). 

This practice helps teams develop modules in parallel, deliver customer facing solutions quickly, learn directly from customer feedback & improve the module for a better adoption. Organising teams this way so that they have a direct customer visible deliverable is a key ingredient in setting smaller teams for success by letting their customer connection be the teacher. Adoption or Validation of new technology for a new feature or to replace an existing feature can be progressively achieved without affecting other app entities.

For enterprises that want to modernise their applications adopting micro front end architecture gives them a delivery model where they can start deploying modernised modules into their existing application. 

As the modules are independent of each other, below are the key gains 
* Reduced development time & testing effort
* Parallel & Incremental addition of features
* Enables using different technology, frameworks for development & delivery
* Ease of integration of new modules into existing systems

## Implementation approaches
There are many approaches to implement the **Micro Frontend** pattern to an existing or new application. Let's take an example of an ‘e-cart’ app to explain the approaches to implement Micro Frontends to an existing monolith app.

A typical ‘e-cart’ app can be grouped into below listed main modules
* **Catalogue**: The available items are managed.
* **User Profile**: The user related operations are handled such as his info
* **Orders**: The order related info such as history, status are managed
* **Payments**: The payment related info such as mode, status are managed

Each of the above can be built into a deployable module bundle. Below are some of the approaches that can be adopted to compose them & serve as an application using Micro Frontends pattern.

### Container Application
With this model, there can be one container module which can 
* house common UI elements such as Headers, Footers etc.,  
* handles common operations such as authentication & navigation. 
* Loads & unloads each ‘Micro Frontend’ module based on the user action.

### Server Side Composition
With this model, 
* The app is served through a HTML page which is rendered at the server side. 
* The page is composed of common elements & placeholders.
* The page uses server specific plugins to render MicroFront modules in the placeholders of the HTML as per the need.

### Build Time Composition
With this model, 
* Each Micro Frontend module is published as an independent package.
* The container app will include the packages as library dependency & produce single deployable Bundle on building
* However, a change in any module will require rebuilding the container bundle(inturn rebuilds all the dependent modules) for it to be served makes it not a good approach to adopt.

### Run Time Composition
With this model, 
* Each Micro Frontend module is built as an independent script & exposes a global function as its entry point.
* Each Module can also be built as Web Components.
* The container application will have the logic to load required modules on demand & render into the required DOM node.

WIth all the approaches & advantages described above, this pattern does come with some costs listed below,

* The approach might cause an increase in Payload size if the modules share dependencies as  the modules are built separately with dependencies.
* Increase in Operational cost as each module might involve different build  & delivery approach.

## WaveMaker app as a Micro Frontend module

[**WaveMaker**](https://www.wavemakeronline.com/) is a RAD platform enabling users to develop high quality apps swiftly. Micro Frontends is a design practice which enables the users to scale their development & produce composable independent modules which can serve in building a new app or progressively integrate features to an existing app. To support phased modernisation methods our customers are adopting, we wanted to build support for this cutting edge design pattern in the microservices world.
 
WaveMaker is the only low code platform to support Micro Frontend module extending RAD benefits to Micro Frontend development.  It adopts the Runtime integration approach for Micro Frontends & works with **Single-spa** framework. 

[**Single-spa**](https://single-spa.js.org/) is a javascript framework for front-end microservices, with support to multiple framework modules. For any app to work with **Single-spa**, compatible artifacts need to be generated & integrated.

WaveMaker support for Single SPA framework
WaveMaker has developed a node based CLI to generate **Single-spa** compatible artifacts for a given WaveMaker app. 

> ####  [**wm-sspa-cli**](https://www.npmjs.com/package/wm-sspa-cli)

The CLI requires the exported project location, deployed URL as its input. The CLI & details are available in the above link,

[![screenshot](/learn/assets/wm-sspa-cli.png)](/learn/assets/wm-sspa-cli.png)



The below steps can be followed to generate the **Single-spa** artifacts for a given WaveMaker application.

* Ensure the node >v10.15 is installed on the machine.
* Login to [**WaveMaker**](https://www.wavemakeronline.com/), Deploy the project & note the deployed URL
* Export the project from WaveMaker as Zip, extract it into a folder & note the location.
* Open the terminal & invoke CLI from the below command
 ```
 npx wm-sspa-cli
 ```
* npx downloads the CLI and prompts for the location of WaveMaker project & deployed URL
* The usage of npx ensures the execution of the latest version of CLI.
* The user can also provide the above info as parameters
```
 npx wm-sspa-cli -p <project_path> -d <deployed-url>
 ```
* The CLI also validates both the inputs before triggering the process. 
* Once the valid params are provided, the CLI generates **Single-spa** compatible artifacts and presents users with its location.
* The artifacts generated are
    *   **main.[hash].js** : the application code and need to be used for app registration.
    *   **scripts.[hash].js**: the global scripts modules required for the WaveMaker app.
    *  **styles.[hash].js**: the styles required for the WaveMaker app.
* **Single-spa** needs the deployed location of all the artifacts, so ensure the files are hosted. 
* Once the artifacts are generated, Users can use the artifacts to register it as an application in **Single-spa** shell.
* Please validate the changes using the [**Single-spa shell project**](https://github.com/joeldenning/coexisting-angular-microfrontends).
* Once the above project is downloaded & please open the `index.html` in the folder *[folder-location]/root-html-file*
* Include the below in the head section of the `index.html`
```html
<!-- 
    Eg: 
    [APP_DEPLOYED_URL]: http://localhost:8080/TestProject 
    [ARTIFACTS_DEPLOYED_URL]: http://localhost:8081/
-->
 <script src="[APP_DEPLOYED_URL]/services/application/wmProperties.js"></script>
 <script src="[ARTIFACTS_DEPLOYED_URL]/scripts.[HASH].js"></script>
 <link href="[ARTIFACTS_DEPLOYED_URL]/styles.[HASH].css">
```
* Update the one of the app target URL in import maps as highlighted below in index.html
```html
 <script type="systemjs-importmap">
 { "imports": {
       "app1": "http://localhost:4201/main.js",
       "app2": "[ARTIFACTS_DEPLOYED_URL]/main.[HASH].js",
       "navbar": "http://localhost:4300/main.js",
       "single-spa":"https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.3.5/system/single-spa.min.js"
       }
 }
 </script>
 ```
* Once the changes are done in `index.html`, please follow the instructions in the `README.md` of the below link to start the [**Single-spa shell project**](https://github.com/joeldenning/coexisting-angular-microfrontends)

## Next Steps
**Single-spa** framework lets us compose & serve multi framework modules into an app by including compatible Javascript bundle. A real world web application when built will not just generate JS bundles but also produces CSS & other metadata artifacts. The **Single-spa** framework currently does not have any specific way of loading non-code, non-JS artifacts. For this specific reason, the users are requested to add the additional scripts in above mentioned steps.

WaveMaker is planning to work on a loader script which will take care of loading all the artifacts required for a WaveMaker app to work with **Single-spa** without the need of any additional loading scripts and provide seamless integration support in the coming releases.

## Screenshots
* #### Home
[![screenshot](/learn/assets/wm-sspa-ss-home.png)](/learn/assets/wm-sspa-ss-home.png)

* #### Angular App
[![screenshot](/learn/assets/wm-sspa-ss-ng.png)](/learn/assets/wm-sspa-ss-ng.png)

* #### WaveMaker App
[![screenshot](/learn/assets/wm-sspa-ss-wm.png)](/learn/assets/wm-sspa-ss-wm.png)



