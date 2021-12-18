---
title: "Invite: Test your WaveMaker Application on the latest UI Framework Angular 11"
author: Swetha Kundaram
---
---

As part of the continuous improvement efforts, we are updating all our front-end frameworks to the Angular major release version 11 in the next WaveMaker release 10.11 (coming soon). 

We invite our customers to test their applications on a staging server to smooth the upgrade process. Please get in touch with our [support](mailto:support@wavemaker.com) team to get stage access. 

<!--truncate-->

## What's new in WaveMaker Angular 11

Some of the significant changes in Angular 11 are as follows:

- Angular 11 uses Typescript 4.0 and above instead of 3.9. This introduces changes like:
    - No public variables inside classes. Use of getters and setters instead.
    - No async keyword for abstract functions
    - Strict typing for promises
- The Angular router does not use routes with String syntax for `loadChildren`. `loadChildren` is a function and uses dynamic imports to load modules. It changes the routes array for applications.

For example: 
```
```
- Lazy module loading shifted from `NgModuleFactoryLoader` and `SystemJsNgModuleLoader` and relies on dynamic imports, and are a similar pattern to the `loadChildren` in the router, used to identify lazy modules. It has effects in a couple of places, including:
    - Attribute lazyModules removed from `angular.json`.
    - The lazy module loader service now uses dynamic imports.
- The Async function in tests has been deprecated. It is changed to waitForAsync to avoid confusion with the async keyword.
- IE 9 and 10 support was deprecated in Angular 10 and removed entirely in Angular 11.

## Performance Improvements 

- Automatic font inlining during build time.
- Improvement in testing components.
- Reporting and logging file sizes after the build.

