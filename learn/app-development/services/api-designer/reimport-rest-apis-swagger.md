---
title: "Re-import API Services"
id: "reimport-rest-apis-swagger"
sidebar_label: "Re-import API"
---
---

API Re-import and Impact Analysis streamlines the process of reimporting REST APIs into the application. It evaluates potential issues when you are reimporting the API itself. This real-time analysis identifies potential problems and offers solutions for immediate rectification, ensuring a smoother and more stable development experience.

## Impact Analysis

The 'API re-import and Impact analysis' feature is to assist developers in identifying potential issues that could affect their projects when re-importing an API service. By using this feature, you can proactively identify and resolve potential problems before they lead to application disruptions. This ensures smoother development processes and enhances the overall stability of your applications.

## Re-importing API - Swagger/OAS

1. Go to the **APIs** section, and click **Re-import API** at the screen's top right to re-import the selected API service.

![import swagger](/learn/assets/reimport-swagger.PNG)

2. Import the updated Swagger using either the URL option or the File option.

- **File**: Supports `.json`,`.yaml`  
- **URL**: The service URL that hosts the REST service.  

![import swagger with url or file](/learn/assets/upload-updated-file-url-swagger.PNG)

### Number of Changed API Endpoints and Application Breakages

1. Upon uploading the Swagger, the system will display the count of changes in Swagger Endpoints and any Application Breakages that were caused because of these changed endpoints.

![reimport swagger url](/learn/assets/reimport-swagger-url.PNG)

2. After verifying the details in the **Re-Import API** dialog, click **Next**.

### Confirming Re-import

1. Once you confirm re-import, you will see application breakage issues within the **API Issues** tray.

![reimport swagger url](/learn/assets/confirm-reimport.PNG)
![reimport swagger url](/learn/assets/API-reimport-tray.PNG)

## Opening API Issues for Specific Page and Specific Variable

1. To look at the issues around API, find the issues framework in the project's More options menu.

:::note
After reimporting the swagger will directly redirect to the inspection framework of selected API swagger.
:::

2. To start the inspection framework, access the More options menu and navigate to the **API Issues** tab to view all issues related to the reimported API.

![reimport swagger url](/learn/assets/API-reimport-tray.PNG)

### Select API Service

1. Upon selecting the API, the issue location dropdown will be filtered to display affected page names.

![reimport swagger url](/learn/assets/APIselection-reimport-tray.PNG)

### Select Page

1. Choose the page name from the issue location dropdown list to view issues specific to that page.

![reimport swagger url](/learn/assets/Pageselection-reimport-tray.PNG)
