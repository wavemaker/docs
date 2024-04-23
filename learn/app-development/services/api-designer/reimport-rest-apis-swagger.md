---
title: "Re-Import REST APIs via Swagger/OAS"
id: "reimport-rest-apis-swagger"
sidebar_label: "Swagger Re-Import and Impact analysis"
---
---

Wavemaker facilitates rapid iteration and prototyping, empowering you to seamlessly re-import REST APIs and assess their impact. This capability streamlines the integration of changes and updates into your projects, ensuring agility in response to evolving requirements.

### Not just reimports

The 'API re-import and Impact analysis' feature is designed to assist developers in identifying potential issues that could affect their projects when re-importing an API service. By leveraging this feature, you can proactively identify and resolve potential problems before they lead to application disruptions. This ensures smoother development processes and enhances the overall stability of your applications.

### Re-Importing Swagger/OAS

Go to **APIs** section, and click on **Re-Imported** at the screen's top right to re-import the selected API service.

![import swagger](/learn/assets/reimport-swagger.PNG)

Import the updated Swagger from either a URL or file.

- **File**: Supports `.json`,`.yaml`  
- **URL**: The service URL that hosts the REST service.  

![import swagger with url or file](/learn/assets/upload-updated-file-url-swagger.PNG)

## Count of both changed swagger endpoints and application breakages

Upon uploading the Swagger, the system will display the count of changes in Swagger endpoints and any application breakages because of these changed endpoints.

![reimport swagger url](/learn/assets/reimport-swagger-url.PNG)

After verifying the details in the **Re-Import API** dialog, click **Next**.

## Confirm Re-import

Once you confirm re-import, you will see application breakage issues within the **API Issues** tray.

![reimport swagger url](/learn/assets/confirm-reimport.PNG)
![reimport swagger url](/learn/assets/API-reimport-tray.PNG)

### Opening API issues for a specific page and specific variable:

To look at the issues around API, find the Issues framework in the project's More options menu.

:::note
After reimporting the swagger will directly redirect to the inspection framework of selected API swagger.
:::

To start the inspection framework, access the More options menu and navigate to the **API Issues** tab to view all issues related to the reimported API.

![reimport swagger url](/learn/assets/API-reimport-tray.PNG)

## Select API Service

Upon selecting the API, the issue location dropdown will be filtered to display affected page names.

![reimport swagger url](/learn/assets/APIselection-reimport-tray.PNG)

## Select Page

Choose the page name from the issue location dropdown list to view issues specific to that page.

![reimport swagger url](/learn/assets/Pageselection-reimport-tray.PNG)