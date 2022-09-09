---
title: "WaveMaker App as Micro Frontend Module"
id: ""
sidebar_label: "Micro Frontend App"
---
---

[WaveMaker](https://www.wavemakeronline.com/) is a low-code platform enabling users to develop high-quality apps swiftly. Micro Frontends is a design practice that enables the users to scale their development and produce composable independent modules that can serve in building a new app or progressively integrate features into an existing app. 

To support our customers' phased modernization methods, we wanted to build support for this cutting-edge design pattern in the microservices world.
 
WaveMaker is the only low code platform to support Micro Frontend modules extending low-code benefits to Micro Frontend development. It adopts the runtime integration approach for Micro Frontends and works with the **Single-spa** framework. 

[Single-spa](https://single-spa.js.org/) is a JavaScript framework for frontend microservices, with support for multiple framework modules. Compatible artifacts must be generated and integrated for any app to work with **Single-spa**.

:::note
Read our developer's blog about how [Micro Frontend modules work and how it fits](/learn/blog/2020/02/25/wavemaker-micro-front-end-support) in your low-code development approach.
:::

## WaveMaker Single SPA Framework

WaveMaker has developed a node-based CLI to generate **Single-spa** compatible artifacts for a WaveMaker app.

The CLI requires the exported project location, deployed URL as its input. The CLI and details are available in the below link.

:::note
#### [**@wavemaker/wm-sspa-cli**](https://www.npmjs.com/package/@wavemaker/wm-sspa-cli)
:::

[![screenshot](/learn/assets/wm-sspa-cli.png)](/learn/assets/wm-sspa-cli.png)

## Generate Single-spa Artifact

Follow the steps below to generate the **Single-spa** artifacts for a WaveMaker application.

1. Ensure the node >v10.15 is installed on the machine.
2. Login to [**WaveMaker**](https://www.wavemakeronline.com/), Deploy the project, and note the deployed URL
3. Export the project from WaveMaker as a Zip, extract it into a folder, and note the location.

### Invoke CLI

1. Open the terminal and invoke CLI from the below command

```js
 npx @wavemaker/wm-sspa-cli
 ``` 

- npx downloads the CLI and prompts for the location of the WaveMaker project, deployed URL and SSPA deployed URL.
- The usage of npx ensures the execution of the latest version of CLI.
- You can also provide the above info as parameters.

```js
 npx @wavemaker/wm-sspa-cli -p <project_path> -d <deployed_url> -s <sspa_deployed_url>
```

- The CLI validates the inputs before triggering the process. 
- Once the valid params are provided, the CLI generates **Single-spa** compatible artifacts and presents users with its location.
- Apart from the above params, wavemaker sspa cli provides few more custom params with which we can avail more customizations on the artifacts.

```js
   npx @wavemaker/wm-sspa-cli -p <project_path> -d <deployed_url> -s <sspa_deployed_url> -l <library_target> -c <true/false> -m <true/false> -r <true/false>
  ```
- **Library Target(-l)**: This parameter helps in building library with specified module format. By default **umd** format is considered while generating artifacts. Wavemaker sspa cli supports **umd** and **system** formats.
- **Split Styles(-c)**: This parameter when set to **true** will generate **Base**, **Theme** & **App styles** separately(styles,wm-theme-styles,wm-app-styles). By default **false** is set on this parameter.
- **Mount Styles(-m)**: If you want to handle the mounting/unmounting of styles then set **false** value for the parameter. By default **true** is set on this parameter.
- **Resource Hashing(-r)**: If this parameter is set to **true**, it will enable hashing for **js** and **css** files in generated artifacts. By default **false** is set on this parameter.

### Generated Artifacts

The artifacts generated include: 

 - **main.[hash].js** : the application code and need to be used for app registration.
 - **scripts.[hash].js**: the global scripts modules required for the WaveMaker app.

:::note
**Single-spa** needs the deployed location of all the artifacts, so ensure the files are hosted.
:::

1. Once the artifacts are generated, you can use the artifacts to register it as an application in the **Single-spa** shell.
2. Validate the changes using the [**Single-spa shell project**](https://github.com/joeldenning/coexisting-angular-microfrontends).

### Configure Script

1. Once the project is downloaded, open the `index.html` in the folder *[folder-location]/root-html-file*
2. Include the script below in the head section of the `index.html`.

```html
<!-- 
 Example: 
 [APP_DEPLOYED_URL]: http://localhost:8080/TestProject 
 [ARTIFACTS_DEPLOYED_URL]: http://localhost:8081/
-->
 <script src="[ARTIFACTS_DEPLOYED_URL]/scripts.[HASH].js"></script>
```

3. Update one of the app target URLs in import maps as highlighted below in `index.html`.

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

4. Add a `.wm-app` class to the parent element of the route in `index.html`.

```html
 <template id="single-spa-layout">
      <single-spa-router>
         ---
          <div class="wm-app">
            <route path="app2" >
              <application name="app2"></application>
            </route>
          </div>
         
        ---
      </single-spa-router>
    </template>
```

Once the changes are done in `index.html`, follow the instructions in the `README.md` of the [**Single-spa shell project link**](https://github.com/joeldenning/coexisting-angular-microfrontends) to start.

