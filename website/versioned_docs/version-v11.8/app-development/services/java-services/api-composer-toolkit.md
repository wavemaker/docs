---
title: "API Orchestration using API Composition Toolkit"
id: "api-composer-toolkit"
sidebar_label: "API Orchestration"
---

Backend for Frontend Empowered API Orchestration with the API Composition Toolkit

---

API Composition toolkit can be your playground to compose an API or an object using multiple API endpoints. This means you can combine any Service in [Java Service](/learn/app-development/services/java-services/java-service) and write custom business logic that you can use as a variable and bind to any UI widget.

It generates Java code for each imported service, which contains services and its methods into a package that Java understands, i.e., Service and Model (see image below). WaveMaker makes it easy to access these generated packages: service and model into the backend API designer. 

![api composer](/learn/assets/api-composer.png)

You can discover these dependencies and enable them with a single click, which automatically generates the Java code for you to @Autowire the Service class of that particular entity. You can then extend or use the service APIs or methods based on business logic.

## Supported Services

- REST Service
- Imported APIs
- Database
- Java Service

## Discover Dependencies

When you import a service, for example, a REST API, these generated services can be accessed when you create a [Java Service](/learn/app-development/services/java-services/java-service). You can discover dependencies and the available methods from the right panel, as shown in the image below.

![api composer discover dependencies](/learn/assets/api-composer-discover-dependencies.png)

To use the rendered services and model, expand the desired service by clicking the service. 

![api composer disover methods](/learn/assets/api-composer-discover-method.png)

Select the method from the service, which then adds an Import statement and the Autowired annotation to the Java Service, as shown in the image below.

![api composer import statement](/learn/assets/api-composer-import.png)

![api composer method added](/learn/assets/api-composer-method-added.png)

We can use the @Autowire variable and their methods to design business logic and then use the API to integrate it with the UI layer, including widgets.

## Controlling API Composition

You can take control of enabling or disabling the **API Composition** flag if you do not want to generate Java code for the services, these typically auto-generates Java code for the Imported APIs and REST Services.

:::note
The default setting is enabled for **API Composition**.
:::

### API Composition for New Projects

When you create a new WaveMaker project, the user can choose to enable or disable API Composition.

![](/learn/assets/api-composer-enable-project-creation.png)

### API Composition for Existing Projects

For existing projects or after creating a project, you can go to the **Project Settings** dialog and enable or disable API Composition as required. 

1. Click **Settings**
2. Select **Project Settings**—opens the following dialog.
3. Enable or Disable API Composition.

![](/learn/assets/api-composer-enable-after-project-creation.png)

After changing these settings, you would require to reload the project and perform the action on the Project Update dialog. 

:::warning
If you disable API Composition and already depend on the service, you will get compilation errors.
:::