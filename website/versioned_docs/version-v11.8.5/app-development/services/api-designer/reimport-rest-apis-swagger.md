---
title: "Re-import API Services"
id: "reimport-rest-apis-swagger"
sidebar_label: "Re-import APIs"
---
---

API Re-import and Impact Analysis streamlines the process of reimporting REST APIs into the application. It evaluates potential issues when you are reimporting the API itself. This real-time analysis identifies potential problems and offers solutions for immediate rectification, ensuring a smoother and more stable development experience.

## Impact Analysis

The API re-import and Impact analysis feature is to assist developers in identifying potential issues that could affect their projects when re-importing an API service. By using this feature, you can proactively identify and resolve potential problems before they lead to application disruptions. This ensures smoother development processes and enhances the overall stability of your applications.

There are two ways to access the impact analysis report:

1. **At the time of re-importing the API.** For more information, see [Re-importing API - Swagger/OAS](#re-importing-api---swaggeroas)
2. **Go to the More option (three dots).** Navigate to the **API Issues** tray to view issues of specific pages and variables. For more information, see [Viewing API Impact on Pages and Variables](#viewing-api-impact-on-pages-and-variables).

:::info
**Limitation**: Currently, API re-import impact analysis focuses on identifying issues related to UI development, such as design and variables.
:::

:::note
Issue evaluation generates an impact analysis report that shows the number of identified problems. To ensure an accurate report for large applications, it's recommended to disable the **Enable API Composition** option in **Settings**.
:::

![Import Swagger](/learn/assets/enable-api-composition.png)

## Re-importing API - Swagger/OAS

Following procedure describes re-importing an API using Swagger. It allows you to view changes before importing the API and access application breaking issues once you agree to import the API.

1. Go to the **APIs** section, and click **Re-import API** at the screen's top right to re-import the selected API service.

![Import Swagger](/learn/assets/api-reimport.png)

2. Import the updated Swagger using either the URL option or the File option and click **Next**.

- **File**: Supports `.json`,`.yaml` . 
- **URL**: The service URL that hosts the REST service.  

![Import Swagger with URL or File](/learn/assets/url-file-next.png)

### Changed API Endpoints and Application Breakages

Upon uploading the Swagger, you can view the count of changes in Swagger Endpoints and any Application Breakages that were caused because of these changed endpoints.

1. After verifying the details in the **Re-Import API** dialog, click **Next**.
   
![Reimport Swagger URL](/learn/assets/api-endpoints-next.png)

### Confirming Re-import

1. Click **Re-import** to go ahead with re-importing the API.
   
![Reimport Swagger URL](/learn/assets/confirm-reimport-api.png)

You can view the application breakage issues within the **API Issues** tray.

![Reimport Swagger URL](/learn/assets/api-issues-tray.png)

## Viewing API Impact on Pages and Variables

View API impact and identify application failure issues associated with specific pages and variables.

1. To view API issues, navigate to the Issues framework within the project's **More** options menu, represented by three dots in the bottom left corner.

:::note
Also, after reimporting the Swagger, you will be redirected to the inspection framework of the selected API swagger automatically.
:::

2. To start the inspection framework, access the More options menu and navigate to the **Issues** tab to view all issues related to the reimported API.

![Reimport Swagger URL](/learn/assets/api-issues-tray.png)

### Selecting API Service

Upon selecting the API, the issue location dropdown will be filtered to display affected page names.

![Reimport Swagger URL](/learn/assets/apiselection-issues-tray.png)

### Selecting Page

1. Choose the page name from the issue location dropdown list to view issues specific to that page.

![Reimport Swagger URL](/learn/assets/pageselection-api-issues-tray.png)
