---
title: "Smaller Bundles, Faster Apps: Cleaning Up Unused i18n files in WM Angular App"
author: "Naga Mahesh Reddy Bonamukkala"
---
---

Optimizing performance and minimizing bundle size are essential for modern Angular applications.  One often-overlooked culprit of bloated bundles is unused localization files from libraries like Moment.js, @angular/global, and FullCalendar.

By default, these libraries include support for multiple languages, but many applications only require a subset of them. Storing and loading all locales inflates bundle size and slows performance.

In this blog, you can find how the bundle size of Moment is reduced 35%, and 98% reduction in @angular/global with faster time to load the application. 

<!-- truncate -->

## Existing Application: Problems We Faced

In ​WaveMaker-generated Angular applications, the bundle size was significantly inflated due to the inclusion of unnecessary locale files from libraries like **Moment.js**, **@angular/global**, and **FullCalendar**. This led to larger bundles, slower load times, and a diminished user experience, particularly on slower networks. Therefore, we have optimized these libraries while maintaining necessary localization support.

## How We Solved 

To resolve these issues, we focused on two main approaches:

### 1. Using Webpack to keep only required locales

Instead of bundling all available locales, we identified the specific languages our application needed and listed them in an array. We then used moment-locales-webpack-plugin to include only those locales in the build. This significantly reduced the bundle size by eliminating unused locale files.

Below table shows the difference before and after moment-locales-webpack-plugin  in node modules

![](/learn/assets/before-after-node-modules.png)

The moment module size was reduced by 65.7% (from 102 KB to 35KB, Gzipped) compared to the original build.

By applying this plugin, we ensured only the necessary locales were bundled, optimising performance without compromising localization support.

### 2. Keeping Only Required Locales with a Pre-Build in update AngularJSON Script

In Angular applications we require @angular/global, which, by default, come with all language files. Previously, the dynamic script loading of the build process copied every available locale, unnecessarily increasing the final build size by several megabytes.

Webpack couldn’t detect and optimise these files as they were not directly under compression but were copied during the Angular build process.

A **Pre-Build Script** to add or update **Locales assets in angular.json**. It was solved by implementing a pre-build script that:

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

Removed the global script declarations for Moment, Moment-Timezone, and FullCalendar, as they are already included in the node_modules. This removed the duplicate bundle of the same libraries.

As the global declaration is removed, if someone need moment in Page/App script, they need to import the moment module explicitly as shown below. (The migration is added to the existing projects).

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

## Performace test

Before hard reload deployment:

![](/learn/assets/before-bundlesize-optimization.png)


After hard reload deployment:

![](/learn/assets/after-bundlesize-optimization.png)

In the after implementation image, 2 scripts calls are removed, reducing the finish time by 25% reduce and the load time by 35% reduce in our test with network as Fast 4G.

## Result: A Faster, Lighter Angular Application:

With these optimizations in place, we have successfully,

- Reduced Moment.js size by upto 65.7 % by including only selected locales via Webpack.
- Eliminated the excessive copying of unused locales from angular/global by using a pre-build script, size tend to fall from 98% in locales dist folder.
- Providing methods for importing ESM modules in page script thus removing the duplicate inclusion.