---
title: "Standalone Components in Generated Angular apps"
author: "Sivaramakrishnan"
---
---

As we embark on the transition from module-based architecture to standalone components, it's crucial to understand the "why" behind this significant shift. This isn't just a technical tweak; it's a fundamental change that will shape the performance and maintainability of our application for years to come.

<!-- truncate -->

## The Historical Context: Why Modules Were Born

In the early days of Angular (and many other frameworks), modules were introduced to address the growing complexity of applications. As applications expanded, managing dependencies and ensuring code organization became increasingly challenging. 

Modules served as a way to:

- **Encapsulate Functionality** 

Group related components, services, directives, and pipes into logical units.


- **Manage Dependencies**

Declare and import dependencies within a module, ensuring that components have access to the necessary resources.

- **Enable Lazy Loading**

Load modules on demand, improving initial load times for large applications.


However, as Angular evolved, the framework's core capabilities expanded, and the need for explicit module declarations became less critical.

## The Evolution: Standalone Components Emerge

Standalone components represent a paradigm shift, allowing us to build applications without the rigid structure of modules.

### Traditional Approach vs. Standalone Components

**Before standalone components:**

- Every component had to be declared inside an NgModule.
- You needed to import the module wherever you wanted to use the component.

**With standalone components:**

- You can define a component independently, using the standalone: true flag.
- You can import other standalone components or modules directly into the component.

A sample standalone component (observe the standalone: true attribute & direct declarations of dependencies using imports attribute). 

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

This evolution is driven by several factors:

- **Simplified Development - no need for NgModule**

Standalone components eliminate the need to create and manage module declarations, reducing boilerplate code and simplifying the development process.


- **Improved Performance**

By eliminating unnecessary module overhead, standalone components contribute to smaller bundle sizes and faster load times.

- **Enhanced Reusability**

Standalone components are self-contained and can be easily reused across different parts of an application or even in different projects.

- **Tree-Shaking Optimization**

Tree-shaking is a process that eliminates unused code from the final bundle. Standalone components enhance tree-shaking capabilities, further reducing bundle sizes.

- **Simpler Lazy Loading**
No more module juggling - load components directly!

Making Angular Simpler: Module-Based vs. Standalone Components 

![Module Based vs Standalone Components](/learn/assets/module-based-vs-standalone-components.png)

## Tangible Benefits: Performance and Maintainability

### Performance Metrics In Detail

- The 8.9% reduction in bundle size, from 4.16 MB to 3.79 MB, translates to a faster time to interactive (TTI). This is especially crucial for users on slower network connections or devices with limited processing power.
- The 0.37 MB difference may seem small, but in web performance, every kilobyte matters. Smaller bundles lead to faster download times, reduced parsing times, and improved overall performance.
- This reduction comes from migrating modules to standalone components, but some internal modules are still in use. We are actively working to migrate these as well, which will lead to an even greater reduction in bundle size and further performance improvements.

### Maintainability Improvements

- Reduced boilerplate code makes our codebase easier to understand and maintain. Developers can focus on writing business logic rather than managing module declarations.
- Improved code organization and reusability contribute to a more scalable and maintainable application.
- Easier unit testing. Because the components are more self contained, they are easier to isolate and test.

### Developer Experience

- Faster build times. Because the compiler has less to process, build times will improve.
- Less complex code to debug.

## Impact on Generated Applications
The generated angular applications now replaces the modules with the standalone components, hence from Release v11.11 onwards, you will see the following changes in the generated applications.

- There is no app.module file gets generated
- App config file is generated with app dependencies of the application
- There is no page.module generated, hence the no.of files reduced in the application
- Each page component is a standalone component & lazily loaded when routed in the browser.
- Application startup now uses the modern bootstrapApplication() API, leveraging main.ts and app.config.ts for configuration. This aligns with Angular’s latest best practices and eliminates the need for a root AppModule.

## Conclusion
By embracing standalone components, we're laying the foundation for a more performant, maintainable, and scalable application. This architectural shift aligns with the latest best practices and ensures that our application remains competitive in the ever-evolving landscape of web development.

