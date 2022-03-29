---
title: "Deliver WaveMaker Apps as Micro Frontend Modules"
author: Subodh Kumar
---

A real-world application is composed of multiple modules. Changes or upgrades to a given module can impact other modules and add more testing effort to the development timeline. Including a new technology into the existing app might be challenging as the existing app might not include all support, such as the build process. 

:::note
For more information about developing Micro Frontend modules, see [Developing Micro Frontend Modules in WaveMaker](/learn/app-development/sspa/micro-frontend).
::: 

<!-- truncate -->

## What are Micro Frontends

One of the practices which simplify the development and maintenance of such apps is to decompose the application into modules that can be independently developed, tested, and deployed. This is known as the **MicroServices** pattern. 

Adapting these practices to frontend systems enables us to generate independent, composable application modules. Such modules are called [**Micro Frontends**](https://www.martinfowler.com/articles/micro-frontends.html). 

This practice helps teams develop modules in parallel, deliver customer-facing solutions quickly, learn directly from customer feedback and improve the module for better adoption. Organizing teams this way to have a direct customer visible deliverable is a key ingredient in setting smaller teams for success by letting their customers connect with the teacher. Adopting or validating new technology for a new feature or replacing an existing feature can be progressively achieved without affecting other app entities.

For enterprises that want to modernize their applications by adopting micro frontend, the architecture gives them a delivery model where they can start deploying modernized modules into their existing application. 

As the modules are independent of each other, below are the key gains. 

- Reduced development time and testing effort
- Parallel and Incremental addition of features
- Enables using different technology, frameworks for development and delivery
- Ease of integration of new modules into existing systems

## Implementation approaches

There are many approaches to implementing the **Micro Frontend** pattern to an existing or new application. Let's take an example of an 'e-cart' app to explain the approaches to implementing Micro Frontends to an existing monolith app.

A typical 'e-cart' app can be grouped into below listed main modules.

**Catalogue**: The available items are managed.
**User Profile**: The user-related operations are handled, such as his info
**Orders**: The order related info such as history, status are managed
**Payments**: The payment-related info such as mode, status is managed

Each of the above can be built into a deployable module bundle. Below are some of the approaches that can be adopted to compose them and serve as an application using the Micro Frontends pattern.

### Container Application

With this model, there can be one container module that can 

- House common UI elements such as Headers, Footers, etc. 
- Handles common operations such as authentication and navigation. 
- Loads and unloads each 'Micro Frontend' module based on the user action.

### Server Side Composition

With this model, 

- The app is served through an HTML page rendered on the server-side. 
- The page is composed of common elements and placeholders.
- The page uses server-specific plugins to render MicroFront modules in the placeholders of the HTML as per the need.

### Build Time Composition

With this model, 

- Each Micro Frontend module is published as an independent package.
- The container app will include the packages as library dependency and produce a single deployable Bundle on building
- However, a change in any module will require rebuilding the container bundle (in turn, rebuilds all the dependent modules) to be served, making it not a good approach to adopt.

### Run Time Composition

With this model, 

- Each Micro Frontend module is built as an independent script and exposes a global function as its entry point.
- Each Module can also be built as Web Components.
- The container application will have the logic to load required modules on demand and render them into the required DOM node.

With all the approaches and advantages described above, this pattern does come with some costs listed below,

- The approach might cause an increase in Payload size if the modules share dependencies as the modules are built separately with dependencies.
- Increase operational cost as each module might involve a different build and delivery approach.

## Single-spa framework in WaveMaker 

:::note
For more information about developing Micro Frontend modules, see [Delivering WaveMaker Apps as Micro Frontend modules](/learn/app-development/sspa/micro-frontend).
::: 

**Single-spa** framework allows you to compose and serve multi-framework modules into an app by including a compatible JavaScript bundle. When built, a real-world web application will not just generate JS bundles but also produce CSS and other metadata artifacts. Currently, the **Single-spa** framework does not have any specific way of loading non-code, non-JS artifacts. For this reason, the users are requested to add the additional scripts in the steps mentioned above.

WaveMaker is planning to work on a loader script that will load all the artifacts required for a WaveMaker app to work with **Single-spa** without the need for any additional loading scripts and provide seamless integration support in the coming releases.

###  Screenshots of Sample S-spa

#### Home

[![screenshot](/learn/assets/wm-sspa-ss-home.png)](/learn/assets/wm-sspa-ss-home.png)

#### Angular App

[![screenshot](/learn/assets/wm-sspa-ss-ng.png)](/learn/assets/wm-sspa-ss-ng.png)

#### WaveMaker App

[![screenshot](/learn/assets/wm-sspa-ss-wm.png)](/learn/assets/wm-sspa-ss-wm.png)