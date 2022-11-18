---
title: "API Composer Toolkit"
id: "api-composer-toolkit"
sidebar_label: "API Composer"
---
---

API composer toolkit can be your playground to compose an object using multiple API endpoints. This means you can combine any Service in Java Service and write custom business logic that you can use as a variable and bind to any UI widget.

It generates Java code for each imported service, which contains services and its methods into a package that Java understands, i.e., Service and Model (see image below). WaveMaker makes it easy to access these generated packages: service and model into the backend API designer. 

![api composer](/learn/assets/api-composer.png)

You can discover these dependencies and enable them with a single click, which automatically generates the Java code for you to @Autowire the Service class of that particular entity. You can then extend or use the service APIs or methods based on business logic.

## Supported Services

- REST Service
- Imported APIs
- Database
- Java Service

## How it works

When you create a new WaveMaker project, the user can control whether to enable or disable API Composer, which auto-generates Java code for the Imported APIs and REST Services. You can disable the API Composer flag if you do not want to generate the Java code for the services.

:::note
The default setting is enabled for API Composer when creating a Project.
:::

![](/learn/assets/api-composer-enable-project-creation.png)

## Controlling Existing Projects

For existing projects or after creating a project, you can go to the **Project Settings** dialog and enable or disable API Composer as required. 

![](/learn/assets/api-composer-enable-after-project-creation.png)

After changing these settings, you would require to reload the project and perform the action on the Project Update dialog. 

:::warning
When you already depend on the service, you will get compilation errors if you disable the API composer. 
:::

## Discover Dependencies

When you import a service, for example, a REST API, these are packaged into dependencies and can be accessed when you create a Java Service.

You can discover dependencies and the available methods from the right panel, as shown in the image below.

![api composer discover dependencies](/learn/assets/api-composer-discover-dependencies.png)

To use the rendered services and model, expand the desired service by clicking the service. 

![api composer disover methods](/learn/assets/api-composer-discover-method.png)

Select the method from the service, which then adds an Import statement and the Autowired annotation to the Java Service, as shown in the image below.

![api composer import statement](/learn/assets/api-composer-import.png)

![api composer method added](/learn/assets/api-composer-method-added.png)

We can use the @Autowire variable and their methods to design business logic and then use the API to integrate it with the UI layer, including widgets.