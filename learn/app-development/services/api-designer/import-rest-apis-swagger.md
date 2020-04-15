---
title: "Import REST APIs via Swagger"
id: ""
sidebar_label: "Swagger Import"
---
---

Develop a WaveMaker app by importing REST APIs that have Swagger/OpenAPI support. Import REST services via Swagger to get access to the required information to consume and integrate with your app, and create a service variable to perform CRUD operations.

![import swagger](/learn/assets/import-swagger.png)

## Importing Swagger

Import Swagger from a URL or a File.

**File**: Supports `.json`  

**URL**: The service URL that hosts the REST service.  

For example, see [Swagger Petstore Project](http://petstore.swagger.io/).  
`https://petstore.swagger.io/v2/swagger.json`  

![import swagger with url or file](/learn/assets/upload-file-url-swagger.png)

### Entity and Endpoints

When you import an API, all endpoints group into Entities. 
An Entity contains multiple endpoints. For example, CRUD endpoints, including Create, Read, Update, and Delete methods group into a single entity.

|HTML Verb |CRUD | Swagger |
|---|---|---|
|POST|Create |CREATE|
|GET|Read| LIST|
|PUT |Update |UPDATE|
|DELETE|Delete|DELETE|

From the left navigation, view all the identified **Entities**. Click the Entity name to see its endpoints, which categorize as **CRUD endpoints** and **Other endpoints**. You can modify these if needed.

![import swagger url](/learn/assets/import-swagger-url.png)

:::note
If you cannot find an entity for a path, look for the **Others** entry from the **Entities** list. You can use them as a Variable; however, it does not support CRUD operations.
:::

### Supported Widgets

When you have successfully imported the entities, you can create a service variable and integrate it with data widgets to perform CRUD operations.

**Desktop Supported**: DataTable, Form, Cards (read-only), List (read-only)

**Mobile**: List with Form

## Creating Service Variable for Entities

1. Select **Variable** from the workspace toolbar.

![variable creation](/learn/assets/var_sel.png)

2. Click **New Variable** from the Variable Dialog.
3. Select **Web Services** as *a target action for Variable*.

![select web services](/learn/assets/select-web-services.png)

:::important
The data source for the Variable comes from imported Services.
:::

![swagger variable](/learn/assets/swagger-variable.png)

- **Service**: Select the service name from imported services.
- **Method**: If the API exposes multiple services, you can choose from the list.
- **Name**: Set by default, but you can modify it.
- **Owner**: The scope of the Variable. Page is the default option. You can choose Application to make it available across the app.