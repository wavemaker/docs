---
title: "WaveMaker 9.GA - Release date: 20 September 2017"
id: "v9-0-ga"
sidebar_label: "Release v9.GA"
---
*This release includes enhancements to the product.*

## Highlights
---

Platform Enhancements

In keeping with our endeavor to make the user experience simple and easy, the re-designed Studio workspace is focused on learnability and usability.

*   The workspace has been redesigned to increase the canvas area and maintain the app developer focus on the UI design with minimum distractions.
*   Widget accessibility within a page is enhanced through widget breadcrumb and page structure.
*   Introduction of recent items allows switching to different workspaces easily.

<!--DOCUSAURUS_CODE_TABS-->
<!--Canvas Page-1-->
![](/learn/assets/Canvas1.png)  
<!--Canvas Page-2-->
![](/learn/assets/Canvas2.png)  
<!--END_DOCUSAURUS_CODE_TABS-->

For more information, see [Product Walkthrough](/learn/app-development/wavemaker-overview/product-walkthrough/).

*   **Guided Tours** have been introduced to facilitate self-learnable workspace. You will see the guided tour the first time you land on Studio ver 9.0 Project Workspace.
*   Step by step **Tutorials** are self-paced videos which are available from Project Dashboard as well as Project Workspace. You can track the progress and watch these videos at your pace.

<!--DOCUSAURUS_CODE_TABS-->
<!--Guided Tours-->
![](/learn/assets/90_gt.png)

<!--Video Tutorials-->
![](/learn/assets/90_tuts.png)

<!--Revisit Tutorials-->
![](/learn/assets/90_tuts2.png)

<!--END_DOCUSAURUS_CODE_TABS-->


### Variables
**Variable** types are abstracted without the need to create Live, Service or Static types. Variables are now mapped with the back-end services to fetch data and are now categorized by the underlying service. You can create:
    *   variables to perform Database CRUD operations,
    *   variables to invoke 3rd Party Rest Services, external SOAP Service, or call Java Service methods,
    *   variables based on a JSON Model (custom variables), and
    *   variables to access Device features in mobile apps.  

![(/learn/assets/90_variables.png)](/learn/assets/90_variables.png)

### Actions
**Actions** are introduced to define UI interactions bound to events. They can be used to invoke non-service based events like notification, navigation, timer, etc.

![(/learn/assets/90_actions.png)](/learn/assets/90_actions.png)  

For more information, see [Variables](/learn/app-development/variables/variables) and 
[Actions](/learn/app-development/variables/variables-actions)

### OAUTH Rest Integration

REST service integration has been enhanced to support OAUTH 2.0. You can now pick from the list of providers and enter the auth credentials, with minimum configuration. For the supported OAuth providers the configuration is done by the platform. You can add new provider if your preferred OAuth provider is not listed.  

[![](/learn/assets/90_oauth.png)](/learn/assets/90_oauth.png)

For more information, see [OAUTH Rest Services](/learn/app-development/services/web-services/oauth-2-0-rest-services/).

### Google Cloud Deployment

WaveMaker Apps can now be deployed to your Google Cloud account. When configuring the Deployment or Release Pipeline for an app, you can choose Google Cloud as the deployment profile for Live (and Stage for WME users) phase.  

[![](/learn/assets/90_cloud_providers.png)](/learn/assets/90_cloud_providers.png)

For more information, see [Deploy to Google Cloud](/learn/app-development/deployment/deployment-google-cloud/).

### Database Enhancements

**Validators** have been introduced for database fields from the Database Designer. These can be used to enforce _Server Side Validations_ for specific fields to be performed at the time of insert/update of data to the underlying database. These checks include length, a range of values, patterns like email, credit card numbers or any custom defined regular expression patterns. The type of validator depends upon the data type of the data column.

[![](/learn/assets/90_validators.png)](/learn/assets/90_validators.png)

For more information, see [Working with Database Schema](/learn/app-development/services/database-services/working-database-schema/#validators).

## Enhancements
---

### Feature Enhancements

*   **Deployment**: From this release onwards, WaveMaker Runtime Environment and WAR file generation will be using **JDK 1.8+** instead of 1.7, as JDK 1.7 is reaching its end of life. Few things you need to be aware of:
    *   All new apps will be deployed to JDK 1.8 runtime environment.
    *   Apps already deployed to WaveMaker Demo Cloud will be migrated to JDK 1.8 runtime environment, automatically.
    *   Apps already deployed to AWS/Azure will continue to work. These will not be migrated.
    *   Redeployment of apps already deployed to AWS/Azure will require re-configuration of the Live/Stage Phase and a manual migration of data. [See here for more](/learn/app-development/deployment/manage-deployed-apps).
*   **Database**: The default database workspace has been moved to **MariaDB**.

### Widget Enhancements

*   _Filter on Field_ property can be set for **Live Form** fields and for editable fields of **Data Table**. This property can be used used to set a cascading data. For example, if the values allowed for selection in the City field should depend upon the value selected in the State field, then for City field, Filter on Field property should be set to State.
*   **Quick Edit Data Table** functionality has been enhanced. Now in run mode, a new row will be displayed in the table. The position of the new row will depend upon the Form Position property of the Data Table. Also, the row will be saved when the user hits enter key.
*   _Localization_ support has been extended to **Data Table** and **Dialog** widgets.
*   _Event Title_ property of **Calendar** widget is now bindable.
*   Using the _View Type_ property the **Googlemap Prefab** to render the satellite, terrain or roadmap view in the map.

### Mobile Enhancements

*   **Offline**: Blob field support has been extended to the offline mode. Now the users can upload files even when offline. Noe the support is for upload not download, that is to view the blob data field content the user has to be online. [#doc](/learn/app-development/services/database-services/working-database-schema/#validators)
*   Using the _OpenFile_ operation for **Device Variable**, you can allow the user to open files in pdf, document, excel or powerpoint formats. Note for this functionality to work, the device where the app is running should have the app supporting the selected file. [#doc](/learn/hybrid-mobile/device-variables/#operations)

## Bug Fixes
---

1.  The issue with Form not honoring the value in the last form field in case the user does not tap out has been addressed.
2.  The issue with inner Form validations and attributes not being honored by the outer Form has been fixed.

## Known Issues
---

1.  Renaming Actions will not change the associated binding. You have to manually change the bindings.
2.  Deleting a service from a project and if a variable was already created for that service, then the Variable dialog is not responsive. To overcome this you need to create another variable and delete the corresponding variable.
3.  When re-importing a Database service, you may decide not to include few tables included in the earlier import. If you have variables created for those dropped tables, you need to manually delete them from the Variable dialog.
4.  Redeployment of apps already deployed to AWS/Azure will fail until the phase is re-configured and data migrated. [See here for more](/learn/app-development/deployment/manage-deployed-apps).

## Technology Stack
---
### UI Frameworks

| Description | JS Library | Version |
| --- | --- | --- |
| JS Binding | jquery | 2.2.3 |
|  | jquery-ui* | 1.11.4 |
| MVC Framework | angular <td className="versiontdbgcolor"> 1.6.4 -> 1.6.5 </td>|
|  | angular-ui-bootstrap | 2.5.0 |
| Editor | ace-editor | 1.2.2 |
| Styles | bootstrap | 3.3.6 |
| Charting | d3 | 3.5.17 |
|  | nvd3 | 1.8.3 |
| CORS support, prefabs | xdomain | 0.7.5 |
| Built-in functions | lodash <td className="versiontdbgcolor"> 4.16.4 -> 4.17.4 </td>|
| Device support, gestures | hammerjs | 2.0.8 |

*Optimised jQuery-UI library excluding unwanted components like accordion, datepicker, dialog, progressbar, spinner, tabs, and all jQuery-UI Effects.

### Back-end Frameworks

| Description | Java Library | Version |
| --- | --- | --- |
|  | Spring Framework <td className="versiontdbgcolor"> 4.2.0 -> 4.3.9 </td>|
| Security framework | Spring Security | 4.1.2 |
| Java JSON utilities | Gson | 2.2.4 |
| DB Persistence library | Hibernate <td className="versiontdbgcolor"> 4.3.11 -> 5.2.10 </td>|
| Sample database | HSQL | 2.3.3 |
| JSON library | Jackson | 2.6.3 |
| Logging framework | SLF4j | 1.7.12 |
| Http client library | HttpComponents | client-4.5.2,   core-4.3.2,   mime-4.5.2 |
| REST API annotations | Swagger | 1.3.10 |
| Logging framework | Log4j | 1.2.17 |

### Run Time Environment
| Description | Version |
| --- | --- |
| JDK <td className="versiontdbgcolor"> 1.8** </td>|
| Tomcat | 8.5* |
| WebSphere | 8.5.5 |
| JBOSS | 7.1.1 |

**Re-deployment of WaveMaker apps to external cloud providers post 9.0 release need re-configuration of the Live Phase.  
*Though the WaveMaker apps are developed on Tomcat ver 8.5, the generated war files can be deployed to Tomcat versions 6.x, 7.x and 8.x.
