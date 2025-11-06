---
title: "Say Hello to ng serve: Run & Debug WaveMaker Angular apps locally!"
author: "Sairama Krishna Bonala"
---
---

We’re excited to share that starting with WaveMaker 11.13, you can now use _ng serve_ with WaveMaker exported Angular apps. This enhancement allows users to locally serve, test, and debug their generated Angular projects outside WaveMaker Studio with greater ease and flexibility.

## How to Use _ng serve_ with Your Exported App 

Follow these steps to get up and running:

### 1. Export your project
* In WaveMaker Studio, Click on Export Project -> Project as an Angular zip.
* Download and extract the ZIP.

### 2. Install dependencies
   ```sh
   cd <exported-angular-app>

   #Use Node.js version recommended by respective WaveMaker Studio Version

   npm install

   ```
### 3. Run the app locally
   ```sh
   ng serve --open
   ```
The app runs locally at http://localhost:4200 similar to standard Angular app. 

At this point, services/APIs will not load yet.

## Configuring Backend Services
The wavemaker application's backend server should be running/hosted either locally or in a remote server. That backend server url should be configured in the proxy configuration file.
1. Open the __proxy.conf.js__ file in the exported app.
2. Update path targets with backend server URL.
3. If required add the paths, based on the app use cases.

Sample proxy.conf.js entries:
   ```js
   module.exports = {
    "/services": {
        target: "https://<your-deployed-app-url>/",
        secure: true,
        changeOrigin: true
    },
    "/j_spring_security_check": {
        target: "https://<your-deployed-app-url>/",
        secure: true,
        changeOrigin: true,
        cookiePathRewrite: "/",
        cookieDomainRewrite: "localhost"
    }
   };
   ```
Then re-run again with new proxy configuration.

   ```sh
   ng serve --open
   ```
Now  app will load APIs and services properly in the browser.

With _ng serve_ working, we can now debug the WaveMaker Angular app locally like any standard Angular application.

:::note
Refer this [documentation](/learn/blog/2025/02/03/maintaining-extending-generated-angular-code-outside-wavemaker-studio) to extend WaveMaker generated Angular applications.
:::