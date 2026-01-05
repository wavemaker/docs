---
last_update: { author: "Priyanka Bhadri" }
---

# Import Open API - Swagger

WaveMaker provides built-in support for importing REST APIs defined using **Swagger/OpenAPI specifications** (JSON or YAML). This feature allows developers to quickly integrate external services into their applications without manual coding.

When a Swagger/OpenAPI file is imported, WaveMaker automatically generates:

- **Service metadata** – Endpoints, request/response models, and parameters.  
- **Data models** – Classes representing API payloads.  
- **UI bindings** – Ready-to-use structures for building forms, tables, and other components.

This approach simplifies API integration, ensures consistency with the external service, and accelerates application development. Many modern backend frameworks, such as **Spring Boot**, automatically generate Swagger/OpenAPI documentation, making their APIs immediately consumable within WaveMaker.

<!-- --- -->

<!-- ## Supported Widgets for Imported APIs

WaveMaker can generate ready-to-use UI elements for services imported from Swagger/OpenAPI definitions:

- **Web**: DataTable, Form, Cards (read-only), List (read-only)  
- **Mobile**: List with Form 

These widgets help you build UI screens with minimal code by binding REST API data directly to visual components. -->

---
# API Workspace

WaveMaker provides a dedicated **API Workspace** that serves as the central hub for all API-related activities.

From the API Workspace, you can:

- Connect to third-party APIs  
- Browse endpoints, request/response models, and parameters  
- Import API specifications (Swagger/OpenAPI)  
- Automatically generate services and data models  

A short video in this section walks through the API Workspace UI and demonstrates how developers can visually explore and integrate APIs.

**Learn more:** [API Workspace](#)

---

## Importing a Swagger/OpenAPI Definition

To bring an external REST API into your WaveMaker project:

1. Go to the **APIs** section in WaveMaker Studio.  
2. Select **Imported APIs**.  
3. Choose how you want to import:
   - **From File** – Upload a local `.json` or `.yaml` OpenAPI/Swagger file.  
   - **From URL** – Provide the URL where the API definition is hosted.

Both JSON and YAML formats are supported. 

For example, to import the public Petstore API:

```
https://petstore.swagger.io/v2/swagger.json
```

![alt text](assets/swagger-import-auth.png)

---




## Entities and Endpoints

After importing the Swagger definition:

- WaveMaker groups related endpoints into **Entities** based on the API structure.  
- Each Entity may contain multiple endpoints; for example, a set of CRUD operations for a resource.
- CRUD endpoints are automatically mapped to common operations:

| HTTP Method | Operation | Swagger Mapping |
|-------------|-----------|-----------------|
| POST | Create | CREATE |
| GET | Read/List | LIST |
| PUT | Update | UPDATE |
| DELETE | Delete | DELETE |

Once imported, you can view all identified entities on the left side navigation. Clicking an entity displays its endpoints — organized as CRUD operations and other custom endpoints. You can modify these groupings if needed before finalizing the import.

![alt text](assets/swagger-import-config.png)

**Note:** If a particular path doesn't map to an entity, it will appear under an **Others** category. These endpoints can still be used via service variables, but CRUD operations aren't automatically generated.

---

## Configuring API Authentication

Once the Swagger API is selected and its metadata is verified:

- You can configure authentication for the API.
- Swagger definitions may include support for **[OAuth 2.0]()**.
- If OAuth is required, click **OAuth Provider** in the import dialog and enter the relevant values such as:
  - Access Token URL
  - Client ID
  - Client Secret

Authentication settings allow WaveMaker to communicate securely with protected APIs. For more detailed steps on configuring OAuth providers, refer to the [OAuth Provider Configuration]().

![alt text](assets/test-imported-api.png)
<!-- ![alt text](assets/websocket-configuration.png) -->

---

<!-- ## Using Imported REST Services

After successful import and authentication configuration:

- You can drag and drop supported components (like DataTable, Form, List, etc.) onto pages and bind them to the REST API operations.
- This enables CRUD-style interaction with the imported API without writing manual HTTP client code.

--- -->


## Summary

Importing Swagger/OpenAPI definitions in WaveMaker allows you to:

- Bring external REST APIs into your application with minimal effort.
- Automatically generate UI components and service metadata from the API spec.
- Configure authentication and secure API access.
- Use CRUD and service variables to integrate REST operations into your pages and widgets.
- Accelerate development by leveraging standardized API descriptions.

This feature lets you combine the power of external services with WaveMaker's low-code UI and binding framework, enabling rapid development of data-driven applications.
