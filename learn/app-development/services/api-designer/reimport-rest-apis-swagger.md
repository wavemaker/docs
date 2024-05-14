---
title: "Re-import API Services"
id: "reimport-rest-apis-swagger"
sidebar_label: "Re-import APIs"
---
---

API Re-import and Impact Analysis streamlines the process of reimporting REST APIs into the application. It evaluates potential issues when you are reimporting the API itself. This real-time analysis identifies potential problems and offers solutions for immediate rectification, ensuring a smoother and more stable development experience.

## Impact Analysis

The 'API re-import and Impact analysis' feature is to assist developers in identifying potential issues that could affect their projects when re-importing an API service. By using this feature, you can proactively identify and resolve potential problems before they lead to application disruptions. This ensures smoother development processes and enhances the overall stability of your applications.

To view the impact analysis of the reimported API, you can either,

- Reimport an API
- Open API Issues for Specific Pages and Specific Variable

:::note

- For now, Impact Analysis is done at the Design level.
- Issue Evaluation can be improved by disabling the **Enable API Composition** option by going to application settings.
  ![Import Swagger](/learn/assets/enable-api-composition.PNG)
  
:::

## Re-importing API - Swagger/OAS

In this, you can confirm reimport the API using Swagger and view the changes and application failure issues that were imported with the API

1. Go to the **APIs** section, and click **Re-import API** at the screen's top right to re-import the selected API service.

![Import Swagger](/learn/assets/api-reimport.PNG)

2. Import the updated Swagger using either the URL option or the File option and click **Next**

- **File**: Supports `.json`,`.yaml`  
- **URL**: The service URL that hosts the REST service.  

![Import Swagger with URL or File](/learn/assets/url-file-next.PNG)

### Changed API Endpoints and Application Breakages

Upon uploading the Swagger, you can view the count of changes in Swagger Endpoints and any Application Breakages that were caused because of these changed endpoints.

1. After verifying the details in the **Re-Import API** dialog, click **Next**.
   ![Reimport Swagger URL](/learn/assets/api-endpoints-next.PNG)

### Confirming Re-import

1. Click **Reimport** to confirm API re-import.
![Reimport Swagger URL](/learn/assets/confirm-reimport.PNG)

You can view the application breakage issues within the **API Issues** tray.

![Reimport Swagger URL](/learn/assets/api-issues-tray.PNG)

## API Issues for Specific Pages and Specific Variables

With this, you can view the changes and application failure issues for a particular page and variable.

1. To look at the issues around API, find the issues framework in the project's **More** options menu.

:::note
After reimporting the swagger will directly redirect to the inspection framework of the selected API swagger.
:::

2. To start the inspection framework, access the More options menu and navigate to the **Issues** tab to view all issues related to the reimported API.

![Reimport Swagger URL](/learn/assets/api-issues-tray.PNG)

### Selecting API Service

Upon selecting the API, the issue location dropdown will be filtered to display affected page names.

![Reimport Swagger URL](/learn/assets/apiselection-issues-tray.PNG)

### Selecting Page

1. Choose the page name from the issue location dropdown list to view issues specific to that page.

![Reimport Swagger URL](/learn/assets/pageselection-api-issues-tray.PNG)
