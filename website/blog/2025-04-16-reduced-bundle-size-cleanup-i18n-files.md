---
title: "Smaller Bundles, Faster Apps: Cleaning Up Unused i18n files in WM Angular App"
author: "Naga Mahesh Reddy Bonamukkala"
---
---

Large Angular application bundles can slow down load times, especially on slower networks. A common cause is unused localization files from libraries like **Moment.js**, **@angular/global**, and **FullCalendar**. 

These libraries often include support for multiple languages by default, but many applications only require a subset of them. Including all locales unnecessarily increases the bundle size and degrades performance. By removing these unused files, developers have achieved significant reductions in bundle size—up to 35% for Moment.js and 98% for @angular/global—resulting in faster load times and an improved user experience.

<!-- truncate -->

WaveMaker-generated Angular applications previously included unnecessary language files from libraries like **Moment.js**,** @angular/global**, and **FullCalendar**, leading to larger bundles and slower load times. We've optimized these libraries to include only the needed locales, reducing bundle size and improving performance.

## Approaches to Reduce Bundle Size 

We focused on two main approaches:

### 1. Using Webpack To Keep Required Locales

Instead of bundling all available locales, we identified the specific languages our application needed and used `moment-locales-webpack-plugin` to include only required locales in the build. This significantly reduced the bundle size by eliminating unused locale files.

Below table shows the difference before and after moment-locales-webpack-plugin  in node modules

![](/learn/assets/before-after-node-modules.png)

The Moment module size was reduced by 65.7% (from 102 KB to 35KB, Gzipped) compared to the original build.

### 2. Keeping Only Required Locales in AngularJSON Script

In Angular applications, @angular/global comes with all language files by default. Previously, the dynamic script loading of the build process copied every available locale, unnecessarily increasing the final build size by several megabytes.

A **Pre-Build Script** to add or update **Locales assets in angular.json** was used. The pre-build script,

- Included only the supported languages when Language Bundle Sources are static from the project.
- Taking a copy of the existing angular.json asset.
- Alter based on existing assets to restrict the glob to only language.js files.

```
{
   "glob": "{de.js,fi.js}",
   "input": "libraries/locales/angular/global",
   "output": "/locales/angular/global"
}
```


Disk usage of existing and updated apps are shown below 

![](/learn/assets/disk-size-optimization.png)


This change resulted in a 98% reduction (from 2.3MB to 12KB) in Angular and 272KB to 4KB in full calendar.
 
## Removal of Global Script Declaration

We removed the global script declarations for Moment.js, Moment-Timezone, and FullCalendar since these libraries are already included in the node_modules, eliminating redundant bundles.​

After this change, if you need to use Moment.js in your Page or App scripts, you must explicitly import it. Add the following import statement at the top of your script:

```
import * as moment from 'moment';
```

:::note
For using moment in pagescript importModule() is been exposed

Example:

```
var moment = App.importModule('moment');
console.log(moment("2025-03-26", "YYYY-MM-DD").isValid());

// Supports timezone:
moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');
moment.tz.setDefault('America/Los_Angeles');
console.log(moment().format());
```

:::

## Performace Test

Before hard reload deployment:

![](/learn/assets/before-bundlesize-optimization.png)


After hard reload deployment:

![](/learn/assets/after-bundlesize-optimization.png)

In the after implementation image, 2 script calls are removed, reducing the finish time by 25% reduce and the load time by 35% reduce in our test with network as Fast 4G.

## Result: A Faster, Lighter Angular Application:

We've optimized our Angular applications by:​

- Reducing Moment.js size by up to 65.7% by including only selected locales via Webpack.​
- Eliminating redundant locales from @angular/global using a pre-build script, achieving up to a 98% reduction in the locales directory.​
- Enabling direct ESM module imports in page scripts to prevent duplicate inclusions.​

These improvements have significantly reduced bundle sizes and enhanced application performance.