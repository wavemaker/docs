---
title: "API Composer Toolkit"
id: "api-composer-toolkit"
sidebar_label: "API Composer"
---
---

API Composer Toolkit simplifies the designing and developing of an API. It generates Java code for each imported service, producing its methods and services into a package that Java understands, i.e., Service and Model.

WaveMaker makes it easy to access these generated packages: service and model into the backend API designer. You can discover these dependencies and enable them with a single click, which automatically generates the Java code for you to @Autowire the Service class of that particular entity. You can then extend or use the service APIs or methods based on business logic.


## How it works

When you import a service; for example, a REST API. These are packaged into dependencies and can be accessed when you create a Java Service.


### Supported Services

- REST Service, Swagger
- Database
- Java Service

## Discover Dependencies

You can discover dependencies and enabled the method from the right panel, as shown in the image below.

![api composer discover dependencies](/learn/assets/api-composer-discover-dependencies.png)

To use the rendered services and model, expand the desired service by clicking the service. 

![api composer disover methods](/learn/assets/api-composer-discover-method.png)

Select the required method, which automatically adds the autowired annotation in the Java Service.

![api composer method added](/learn/assets/api-composer-method-added.png)

Apply custom business logic to the autowired annotation, and then use the API to integrate it with the UI layer, including widgets.

