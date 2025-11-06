---
title: "Maintaining and Extending Generated Angular Code Outside WaveMaker Studio"
author: "Sagar Vemala"
---
---

WaveMaker is a scalable accelerator platform that enables developers to rapidly build enterprise-grade applications with minimal coding while maintaining control over the generated code. Unlike other low-code platforms, WaveMaker allows developers to hyper-customize components and seamlessly extend functionality.

WaveMaker generates reusable Angular code that follows best practices, such as:

- **Component-Based Structure**: Each page is generated as an Angular component with an isolated scope.
- **Security & Performance**: Auth guards, tree-shaking, and minification are applied to keep the code efficient and secure.
- **Custom Extensions**: Developers can add custom or third-party Angular components to extend the generated ones.
- **Easy Deployment**: The frontend code can be deployed separately as static assets to a CDN.

This document guides you on running, editing, and extending the generated Angular code for the web after detaching it from WaveMaker Studio. It also outlines our roadmap for improving this experience.

<!-- truncate -->

## Running WaveMaker-Generated Code Locally

### Steps to Run
1. Extract the downloaded project ZIP file from WaveMaker Studio.
2. Open the project in a code editor (e.g., VS Code).
3. Navigate to the project directory:
   ```sh
   cd generated-angular-app
   ```
4. Install dependencies:
   ```sh
   npm install
   ```
5. Build the application:
   ```sh
   npm run build
   ```
6. Serve the application:
   ```sh
   npx http-server dist
   ```

:::note
You can also use the Angular CLI to serve and test the app locally.

   ```sh
   ng serve --open
   ```
:::

### Common Issues & Fixes

#### Acorn Issue
If you encounter an acorn-related issue, delete `package-lock.json` before running `npm install`:
```sh
rm package-lock.json
npm install
```

## Editing & Customizing Generated Angular Code

WaveMaker creates a standard Maven-compliant project, enabling developers to manage and extend the codebase independently. To modify the code without WaveMaker Studio, developers must grasp the project’s file structure. UI-related adjustments for a web application primarily occur within the `src/app/pages/` folder, where each page functions as a component containing its associated files.

Typical tasks include:
- Altering existing layouts
- Incorporating new components
- Making API calls
- Implementing data and event binding
- Creating pages and adding their routes

This comprehension ensures efficient maintenance and customization of the application outside the studio.

### Modifying UI on an Existing Page
When developers modify the UI on existing pages, they primarily work with components and bind data to them. To implement specific functionalities, they must write business logic and handle event binding.

Since it is generated Angular code, developers have full freedom to either use the components provided by WaveMaker runtime (which is open-sourced) or use any other libraries like Angular Material.

### Working with WaveMaker Components
WaveMaker Angular generates templates that include markup for widgets and input bindings.

![](/learn/assets/generated-angular-data-binding.png) 

- **Data binding**: WaveMaker relies on an abstraction called **Variables**, which holds metadata for calling APIs and binding with components. Angular services code is not generated or exposed as of today.

![](/learn/assets/generated-angular-text-widget.png)

- **Attribute binding**: Developers must follow the WaveMaker-defined method for attribute binding while working with its components.

![](/learn/assets/generated-angular-attribute-binding.png)

- **Event binding**: A similar pattern applies to event binding. Developers must write JavaScript methods in the corresponding `{component}.script.js` file.

![](/learn/assets/generated-angular-event-binding.png)

### Working with Third-Party Components

Since it is now a free angular project, developers have flexibility to easily add other angular component libraries directly and work with them to take development forward. For example: Below is the sample that shows how they can add material components to existing pages and do data binding and event binding in a regular way.

![](/learn/assets/generated-angular-working-with-third-party-components.png)

![](/learn/assets/generated-angular-traditional-way-third-party.png)

## Creating New Pages and Working with APIs
Beyond working with existing pages, developers often need to create new pages and link them to existing flows/menus. They may also need to use new APIs for these flows.

### Working in the WaveMaker Way
Since developers understand the WaveMaker page component structure, they can continue to create new pages and variables.

#### New Pages
1. In the same folder with the existing file structure, create new pages as components.
2. Register them in `app.routes.ts`.
3. Link them in the existing left navigation.

![](/learn/assets/generated-angular-create-component.png)

![](/learn/assets/generated-angular-add-page-object.png)

![](/learn/assets/generated-angular-configure-new-added-page.png)

#### New APIs
1. In the relevant component’s file structure, add a new **Variable** object in `variables.ts`.

![](/learn/assets/generated-angular-new-api-variable-object.png)

### Working in the Angular Way
This is the regular approach Angular developers follow.

#### New Pages

```sh
ng generate component newpage
```

Add the new component to `app-routes.ts`.

#### New APIs
Developers can write regular Angular services to manage API interactions.

![](/learn/assets/generated-angular-write-service.png)

## Roadmap
We are working towards enhancing this experience, especially for developers who choose WaveMaker and libraries to maintain the code further. Below are a few planned improvements:

- **Provide a CLI for Page and Variable creation**
- **Generate services code as well to provide developers more flexibility**


