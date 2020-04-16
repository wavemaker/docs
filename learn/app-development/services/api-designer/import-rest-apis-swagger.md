---
title: "Import REST APIs via Swagger"
id: ""
sidebar_label: "Swagger Import"
---
---

Develop a WaveMaker app by importing REST APIs that have Swagger/OpenAPI support. Import REST services via Swagger to get access to the required information to consume and integrate with your app, and create a variable to perform CRUD operations.

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

After verifying the details in the **Import APIs** dialog, click **Import**. 

## Configuring Authentication

Swagger supports OAuth 2.0. For more information, see [REST Services using OAuth 2.0](/learn/app-development/services/web-services/oauth-2-0-rest-services)

![oauth config for swagger](/learn/assets/oauth-swagger-congif.PNG)

- **Provider ID** is the OAuth 2.0 Service Provider, selected from the list or enter the name if you are adding your own.
- **Callback URL** is pre populated by WaveMaker and is not editable. You can copy this link and use it to as the callback URL in OAuth Provider app settings page.
- **Authorization URL** and **Access Token URL** of the OAuth service provider for obtaining the authorization and access to the service. These fields are auto-populated in case of the selected providers, else you need to enter them manually.
- Client Credentials issued once your app is registered with the Provider. It will be in the form of **Client ID** and **Client Secret**.
- **Send Access Token As** Header or Query. Usually, the OAuth providers need the access token to be sent as a part of Header, few might require it as a Query parameter. Check with your OAuth provider and select the appropriate option. It is set to Header by default.
- **Scope** defines what the access token can do and what resources it can access. For the listed Providers the popular Scopes are listed for you to select. Check with the selected OAuth 2 service provider to understand how to further configure this field.

## Integrating Imported REST Services

When you successfully import the REST service, you can drag-and-drop data widgets to perform CRUD operations. Or, create a service variable, and integrate it with widgets to perform a single operation at once.

### Supported Widgets

**Web**: DataTable, Form, Cards (read-only), List (read-only)

**Mobile**: List with Form

### Creating CRUD Variables

Create CRUD variables by drag-and-drop of widgets.

![datatable crud variable](/learn/assets/datatable-crud-variable.png)

For more information about using CRUD variable, see [CRUD Variable](/learn/app-development/variables/crud-variable)

### Creating Service Variable

1. Select **Variable** from the workspace toolbar.

![variable creation](/learn/assets/var_sel.png)

2. Click **New Variable** from the Variable Dialog.
3. Select **Web Services** as *a target action for Variable*.

![select web services](/learn/assets/select-web-services.PNG)

:::important
The data source for the Variable comes from imported Services.
:::

![swagger variable](/learn/assets/swagger-variable.png)

- **Service**: Select the service name from imported services.
- **Method**: If the API exposes multiple services, you can choose from the list.
- **Name**: Set by default, but you can modify it.
- **Owner**: The scope of the Variable. Page is the default option. You can choose Application to make it available across the app.