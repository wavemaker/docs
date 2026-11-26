---
title: "WaveMaker App as Micro Frontend Module"
id: "micro-frontend"
sidebar_label: "Micro Frontend App"
---
---

[WaveMaker](https://www.wavemakeronline.com/) is a low-code platform enabling users to develop high-quality apps swiftly. Micro Frontends is a design practice that enables users to scale their development and produce composable independent modules that can serve in building a new app or progressively integrating features into an existing app. 

To support our customers' phased modernization methods, we wanted to build support for this cutting-edge design pattern in the microservices world.
 
WaveMaker is the only low-code platform to support Micro Frontend modules extending low-code benefits to Micro Frontend development. It adopts the runtime integration approach for Micro Frontends and works with the **Single-spa** framework. 

[Single-spa](https://single-spa.js.org/) is a JavaScript framework for frontend microservices, supporting multiple framework modules. Compatible artifacts must be generated and integrated for any app to work with **Single-spa**.

:::note
Read our developer's blog about how [Micro Frontend modules work and how it fits](/learn/blog/2020/02/25/wavemaker-micro-front-end-support) in your low-code development approach.
:::

## WaveMaker Single SPA Framework

WaveMaker has developed a node-based CLI to generate **Single-spa** compatible artifacts for a WaveMaker app.

The CLI requires the exported project location and deployed URL as its input. The CLI and details are available in the link below.

:::note
#### [**@wavemaker/wm-sspa-cli**](https://www.npmjs.com/package/@wavemaker/wm-sspa-cli)
:::

[![screenshot](/learn/assets/wm-sspa-cli.png)](/learn/assets/wm-sspa-cli.png)

## Generate Single-spa Artifact

Follow the steps below to generate the **Single-spa** artifacts for a WaveMaker application.

1. Ensure the node >=v12.22.x is installed on the machine.
2. Login to **[WaveMaker](https://www.wavemakeronline.com/)** and develop a project.
3. Deploy the project, and note the deployed URL.
3. Export the project from WaveMaker as a Zip, extract it into a folder, and note the location.

## Invoke CLI

1. Open the terminal and invoke CLI using the command below.

```js
 npx @wavemaker/wm-sspa-cli
 ``` 

2. npx downloads CLI and prompts for the location of the WaveMaker project, deployed URL, and SSPA deployed URL.

3. Alternatively, you can provide the location of the project, deployed URL, and SSPA deployed URL as parameters.

```js
 npx @wavemaker/wm-sspa-cli -p <project_path> -d <deployed_url> -s <sspa_deployed_url>
```

:::note
- The usage of npx ensures execution of the latest version of CLI.
- The CLI validates the input before triggering the process. 
:::

4. Once the valid parameters are provided, the CLI generates **Single-spa** compatible artifacts and their location.


### Additional Parameters

WaveMaker SSPA CLI provides additional optional parameters for more detailed artifact customization. The following shows how parameters can be passed to the CLI command besides the above-specified commands. 

```js
 npx @wavemaker/wm-sspa-cli -p <project_path> -d <deployed_url> -s <sspa_deployed_url> -l <library_target> -c <true/false> -m <true/false> -r <true/false>
```

#### Library Target

`-l umd` or `-l system` 

Parameter helps build the library with a specified module format. By default, it considers the **umd** format when generating artifacts. WaveMaker SSPA CLI supports **umd** and **system** formats.

#### Split Styles

`-c true` or `-c false` 

When you set this parameter to `true`, it will generate **Base**, **Theme** and **App styles** separately (styles, wm-theme-styles, wm-app-styles respectively). By default, it is set to `false`.

#### Mount Styles

`-m true` or `-m false`

If you want to handle the mounting or unmounting of styles on your own, then set this parameter to `false`. By default, it is set to `true`.

#### Resource Hashing

`-r true` or `-r false`

If this parameter is set to `true`, it will enable hashing for **JS** and **CSS** files in the generated artifacts. By default, it is set to `false`.

## Generated Artifacts

The artifacts generated include: 

- **main-es2015.js** : the application code and need to be used for app registration.
- **scripts.js**: the global scripts modules required for the WaveMaker app.

:::note
**Single-spa** needs the deployed location of all the artifacts, so ensure the files are hosted.
:::

1. Once the artifacts are generated, you can use the artifacts to register it as an application in the **Single-spa** shell.
2. Validate the changes using the [**Single-spa shell project**](https://github.com/joeldenning/coexisting-angular-microfrontends).

## Configure Script

1. Once the project is downloaded, open the `index.html` in the folder *[folder-location]/root-html-file*

2. Include the script below in the head section of the `index.html`.

```html
<!-- 
 Example: 
 [APP_DEPLOYED_URL]: http://localhost:8080/TestProject 
 [ARTIFACTS_DEPLOYED_URL]: http://localhost:8081/
-->
 <script src="[ARTIFACTS_DEPLOYED_URL]/scripts.js"></script>
```

3. Update one of the app target URLs in import maps as highlighted below in `index.html`.

```html
 <script type="systemjs-importmap">
  {
    "imports": 
      {
        "app1": "http://localhost:4201/main.js",
        "app2": "[ARTIFACTS_DEPLOYED_URL]/main-es2015.js",
        "navbar": "http://localhost:4300/main.js",
        "single-spa":"https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.3.5/system/single-spa.min.js"
      }
  }
 </script>
```
:::note
If resource hashing (-r) is enabled, replace the file names with generated hash code. It applies after the sspa build as shown in the example below:

**Example in #2**: `<script src="[ARTIFACTS_DEPLOYED_URL]/scripts.[HASH].js"></script>`  
**Example in #3**: `"app2": "[ARTIFACTS_DEPLOYED_URL]/main-es2015.[HASH].js"`
:::

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

