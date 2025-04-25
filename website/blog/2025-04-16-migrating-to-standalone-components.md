---
title: "Standalone Components in Generated Angular apps"
author: "Sivaramakrishnan"
---
---

We have transitioned from Module-based architecture to Standalone components to shape the performance and maintainability of our application for years to come.

> **Module-based setup** – A structure where code is organized into grouped modules.

> **Standalone components** – Independent building blocks in Angular that don't require modules.

## Why Shifting from Modules to Standalone Components

In Angular's early stages, modules were introduced to manage growing application complexity. As Angular evolved, especially with the introduction of Standalone components, the need for explicit module declarations became less necessary, simplifying application architecture.

Now, with standalone components, you don’t need to group everything into modules. This makes the app setup simpler and more flexible.

<!-- truncate -->

Standalone components allows you to build applications without the rigid structure of modules.

### Traditional Approach vs. Standalone Components

**Before standalone components:**

- Every component had to be declared inside an NgModule.
- You need to import the module wherever you want to use the component.

**With standalone components:**

- Components can work on their own.
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
- **Better Performance:** Smaller bundles and faster loading.​
- **Easier Reuse:** Self-contained components can be used across different projects.​
- **Tree-Shaking Optimization:** Removes unused code during build, keeping apps lightweight.​
- **Simpler Lazy Loading:** Components can be loaded directly, simplifying lazy loading.

**Module-Based vs. Standalone Components** 

![Module Based vs Standalone Components](/learn/assets/module-based-vs-standalone-components.png)

## Benefits: Performance and Maintainability

### Performance Improvements

- We reduced the app size by 8.9% (from 4.16 MB to 3.79 MB), which helps it load faster—especially for users with slow internet or older devices.
- The 0.37 MB decreased size of smaller bundles lead to faster download, reduced parsing times, and improved overall performance.

​Migrating to standalone components has already reduced our bundle size. We're continuing to phase out remaining internal modules, which will further improve performance and streamline our codebase.

**Before Moving to Standalone Components**
![](/learn/assets/bundle-size-before.png)

**After Moving to Standalone Components**
![](/learn/assets/bundle-size-after.png)

### Maintainability Improvements

- **Less Repetitive Code:** Reducing boilerplate makes the codebase cleaner and easier to maintain.​
- **Better Organization:** Clearer structure helps in scaling and maintaining the application.​
- **Simplified Testing:** Self-contained components are easier to test individually.

> **Boilerplate** – Repetitive code that's required but not unique or meaningful on its own.

## Impact on Generated Applications

Starting with version 11.11, any new Angular apps you generate will follow this new setup. Here’s what’s different:

- No more `app.module` file.
- A new `app.config` file handles app setup.
- Fewer files in your app since page modules are gone.
- Each page is now a standalone component that loads only when needed.
- The app now uses a new bootstrapping mechanism that initializes directly from `app.config`, eliminating the need for a separate app module. This results in a cleaner structure and faster startup.

## Conclusion

Switching to standalone components makes our apps faster, simpler, and easier to maintain. It also keeps us aligned with the latest Angular improvements making the applications competitive in the ever-evolving landscape of web development.

