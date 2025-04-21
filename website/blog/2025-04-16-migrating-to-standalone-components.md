---
title: "Standalone Components in Generated Angular apps"
author: "Sivaramakrishnan"
---
---

We have transitioned from Module-based architecture to Standalone components to shape the performance and maintainability of our application for years to come.

## Why Shifting from Modules to Standalone Components

In Angular's early stages, modules were introduced to manage growing application complexity. As Angular evolved, especially with the introduction of Standalone components, the need for explicit module declarations became less critical, simplifying application architecture.

<!-- truncate -->

Standalone components allows you to build applications without the rigid structure of modules.

### Traditional Approach vs. Standalone Components

**Before standalone components:**

- Every component had to be declared inside an NgModule.
- You need to import the module wherever you want to use the component.

**With standalone components:**

- You can define a component independently, using the standalone: true flag.
- You can import other standalone components or modules directly into the component.

A sample standalone component — the standalone attribute & direct declarations of dependencies using imports attribute. 

```
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Hello, standalone world!</h1>`,
})
export class HelloComponent {}
```

You can use this component directly in routing or import it into other components without having to declare it in a module.

## Evolution of Standalone Components

This evolution is driven by several factors:

- **Simpler Development:** No need for NgModules; components manage their own dependencies.​
- **Better Performance:** Smaller bundles and faster load times due to reduced overhead.​
- **Easier Reuse:** Self-contained components can be used across different projects.​
- **Tree-Shaking Optimization:** Removes unused code during build, keeping apps lightweight.​
- **Simpler Lazy Loading:** Components can be loaded directly, simplifying lazy loading.

**Module-Based vs. Standalone Components** 

![Module Based vs Standalone Components](/learn/assets/module-based-vs-standalone-components.png)

## Benefits: Performance and Maintainability

### Performance Improvements

- The 8.9% reduction in bundle size, from 4.16 MB to 3.79 MB, translates to a faster interactive (TTI). This is helps users on slower network connections or devices with limited processing power.
- The 0.37 MB decreased size of smaller bundles lead to faster download times, reduced parsing times, and improved overall performance.

​Migrating to standalone components has already reduced our bundle size. We're continuing to phase out remaining internal modules, which will further improve performance and streamline our codebase.

**Before Moving to Standalone Components**
![](/learn/assets/bundle-size-before.png)

**After Moving to Standalone Components**
![](/learn/assets/bundle-size-after.png)

### Maintainability Improvements

- Less Repetitive Code: Reducing boilerplate makes the codebase cleaner and easier to maintain.​
- Better Organization: Clearer structure helps in scaling and maintaining the application.​
- Simplified Testing: Self-contained components are easier to test individually.

## Impact on Generated Applications
The generated angular applications now replaces the modules with the standalone components, hence from Release v11.11 onwards, you will see the following changes in the generated applications.

- There is no app.module file gets generated
- App config file is generated with app dependencies of the application
- There is no page.module generated, hence the no.of files reduced in the application
- Each page component is a standalone component & lazily loaded when routed in the browser.
- Application startup now uses the modern bootstrapApplication() API, leveraging main.ts and app.config.ts for configuration. This aligns with Angular’s latest best practices and eliminates the need for a root AppModule.

## Conclusion
By embracing standalone components, we're laying the foundation for a more performant, maintainable, and scalable application. This architectural shift aligns with the latest best practices and ensures that our application remains competitive in the ever-evolving landscape of web development.

