---
title: "Product Walkthrough"
id: "product-walkthrough"
sidebar_label: "Walkthrough"
---
---
WaveMaker is a RAD solution for developing web and mobile applications. In this document, learn WaveMaker terminologies and get familiar with the product dashboard.  

## Product Terminology

Following are some of the terms commonly used in Studio parlance.

| **Terms** |**Description** | **See this document** |
| --- | --- | --- |
| **Pages** | Pages contain app components. You can organize data by using widgets and define a workflow by interlinking them. | [Creating a Page](/learn/app-development/ui-design/page-creation/)|
| **Layouts** |  Demarcating the page into sections.  | [Page Layouts](/learn/app-development/ui-design/page-concepts/page-layouts) |
| **Templates** | Re-usable arrangement of one or more widgets in the page content put together. <br>  | [Templates](/learn/app-development/ui-design/page-concepts/page-templates/) |
| **Template Bundle** | Custom templates built into a bundle.   |[Template Bundle](/learn/app-development/ui-design/page-concepts/#creating-template-bundles) |
| **Widgets** | UI components for user interaction and responsive design.  |[Widgets Overview](/learn/app-development/widgets/ui-elements/) |
||List of Widgets.|[Widget Library](/learn/app-development/widgets/widget-library/) |
| **Prefabs** |Collection of one or more widgets that are bound to API or services. <br> <details><summary>Read more</summary> Prefab is a reusable, API-integrated component that can be used across apps. It encapsulates functionality, interaction & data and as such can be used to build custom widgets. For example, GoogleMap Prefab, QRCode reader or Youtube Prefab. |[Prefab Basics](/learn/app-development/custom-widgets/custom-widgets/)|
||List of prefabs that are already created.|[Predefined Prefabs](/learn/app-development/widgets/widget-library/#prefabs)|
||Build your own Prefab. |[Creating Prefabs](/learn/app-development/custom-widgets/creating-prefabs/) |
| **Project Shell** | Foundation for multiple apps in an enterprise.  |[Project Shells](/learn/app-development/ui-design/project-shells/) |
| **Theme** | Colors, fonts, and branding elements (CSS & images) that is applied to all pages within an app.  |[Themes Overview](/learn/app-development/ui-design/themes/)|
||Create your own custom theme.|[Creating Themes](/learn/app-development/ui-design/themes/#create-theme) |
| **Variable** | Provides data integration for the widgets. <br> <details><summary>Read more</summary>  Variable holds the actual data to be rendered by the widgets. It is based on a data model obtained from the API source (from services like database and web-based) and renders the same in the form of a data structure used for binding, with attributes and related objects. |[Variables Overview](/learn/app-development/variables/variables-actions/) |
|  |**Variable Types**|| 
|**Database CRUD** | For the basic insert, read and update operation on the Database tables. |[Database CRUD](/learn/app-development/variables/database-crud/) |
| **Database API** | For accessing the queries and procedures and additional Database functionality. | [Database API](/learn/app-development/variables/database-apis/) |
|  |**Service API** ||
|**Web Services**|From Web for the service APIs exposed by the Web services. |[Web Service](/learn/app-development/variables/web-service/)|
|**Java Services**|Service API from Java for the service APIs exposed by the Java services.|[Java Service](/learn/app-development/variables/java-services/)|
|**Security Services**|Service API from Security for the service APIs exposed by the Security services.|[Security Service](/learn/app-development/variables/security-service/) |
|**Model Variable**| It can be used as storage model to store data in the client-side. |[Model Variable](/learn/app-development/variables/model-variable/) |
|**Device Variable**|  To access device features in case of mobile applications. |[Device Variable](/learn/hybrid-mobile/device-variables/) |
| **Actions** | Implement the business logic, rules and data flow. <br> <details><summary>Read more</summary>  Actions assist in invoking a backend API, Database operation or navigation to another page when a UI event occurs. Events can be either user-initiated, notification response or as a result of another task being performed. |[Actions](/learn/app-development/variables/actions) |
| **Binding** | Connecting variables and widgets. <br> <details><summary>Read more</summary>  Binding of the Variables to Widgets helps in capturing the data from the user or fetching data from the backend services. |[Variable Binding](/learn/app-development/variables/variable-binding/) |

## Project Dashboard
---
Once you have created projects, the **Project Dashboard** page displays all your Projects, Prefabs and Template Bundles along with the latest activity updates. You have the option to create/import project, prefab or template bundle. [![](/learn/assets/project-listing.png)](/learn/assets/project-listing.png)

### Top Banner 
Top banner can be used to:
- **Apps, Prefabs or Template Bundles** - choose what you want to create/work on.   
From Apps tab, you can access Sample Apps, which can be accessed from your account and tinkered with.
- **Manage Deployed Apps** open the Cloud Portal for managing release pipeline for deployed apps. [Know more](/learn/app-development/deployment/release-management/).
- **Accounts Access** allows you to view the following details:
    - **Profile** details
    - **Subscription** details allow you to manage the subscriptions. It gives the details of each application in your account, the plan they are under, the status of the plan and option to renew the subscription.
    - **Logout** option.
- **Tutorial/Activity Panel** gives
    - access to various tutorials
    - recent project activity
### Logs Access
Logs give you access to server logs, which can be downloaded.
### Project Listing
It will list all the **Apps, Prefabs, and Template bundles**, depending on what you select from the **Top Banner** tab. Clicking on any app/prefab/template bundle from your dashboard will open it in the Studio designer.

### Projects
You can see the following information for each project or Prefab listed in your dashboard. 

[![](/learn/assets/Project-Details.png)](/learn/assets/Project-Details.png)  
- **Project Name** provided while creating a project or Prefab.
- **Project Type** of project - web, mobile, prefab, or template bundle.
- **Provatar** or project avatar, to give a visual image of the type of project. It can be set at the time of project creation by selecting an image from the drop down list.
- **Project Description**: The description that you provided while creating a project or Prefab.
- **Modified Timestamp** date and time of the last update.
- **User role** on the project - owner or contributor
- **Restore**: Ability to restore a project from the VCS. [See here for project recovery options](/learn/app-development/dev-integration/import-export-update-apps/#project-recovery).
- **Export:** Ability to export a project as a zip file without opening the project.
- **Delete**: As an owner/admin of the project, you can delete the same. In case there are multiple Project Admins, each of them has the option to **Leave Project**.
- **Leave project:** As a member of the project, you have the option to Leave the project, instead of delete.
- **App Member Details** gives the number of Members working on the project with an option to open the Member details dialog on click. 
    
    [![](/learn/assets/user_management_add.png)](/learn/assets/user_management_add.png) 
    
    This dialog allows you to:
            
    - view the project members and their roles;
    - the owner of the project can add or remove members and change the role
    
    For more information about Project roles, see [Project User Management](/learn/app-development/wavemaker-overview/project-user-management/).  
    For Enterprise version, see [RBAC Support](/learn/app-development/wavemaker-overview/rapid-rbac-support/#project_roles).

## Project Workspace

When a project from the Project Dashboard is opened, it opens in the Project Workspace. This space is the designer pallet for your app. The various sections of the Project Workspace assist you in building the app.

[![](/learn/assets/project_workspace.png)](/learn/assets/project_workspace.png)

- **Project Actions** give a quick access to recently used resources, preview and deploy the app
- **Project Configurations** helps secure, export, internationalize and version control the app. Also, the Configuration Profiles, Project Settings, and Studio Settings can be accessed from here.
- Resources are building blocks of an App like Page, Database, APIs etc.
    - **Resources Panel** gives access to various resources categories - a group or category of resources of the same type such as Pages, Databases, Web Services, Java Services, and APIs.
    - **Resource Explorer** lists all the resources of the selected resource category
    - Resource Elements constituting a selected a resource can be viewed within the **Canvas** along with the appropriate **Resource Toolbar**
    - For the **Pages Category**
        - the Resource Explorer includes **Widgets**, **Prefabs, Page Structure** and **Variables** which aid in designing and building the Page
        - **Workspace Toolbar** helps in defining runtime functionality of the Page in terms of Variables, Themes, Layout etc..
        - **Widget Breadcrumb** giving the relative path to the selected element on the Page
    - **Properties Panel** gives the settings for the selected Resource Element
- **Developer Utilities** gives access to the
    - Files generated for the app through **File Explorer**,
    - **Logs** - server and client with download option and
    - miscellaneous functions like:
        - manage various project artefacts like Templates, Themes, Prefabs etc.,
        - save project shell,
        - update project source,
        - edit access to frequently used files like app.css and app.js.

## Project Canvas

Once you create a project, the Main Page is created by default. You can add pages to the app, by using the **+** button next to the Page on Resource Explorer. On selection of a page, Canvas is provided:

1. you can select the page to design/edit from the Pages resource category
2. the selected page UI is displayed in the Canvas
3. the Properties Panel displays the properties of the Page [![](/learn/assets/Canvas1.png)](/learn/assets/Canvas1.png)
4. from the Page Structure section, you can see the various elements placed on the Page and their hierarchy
5. you can select the widget from the Page structure
6. selected widget is highlighted on the Canvas
7. selected widget properties like data source, styles, events, device, and security can be set from the Properties Panel
8. Widget hierarchy shows the widget construct and allows you to traverse to the parent container. [![](/learn/assets/Canvas2.png)](/learn/assets/Canvas2.png)

## Project Settings

You can view and change project details and settings from the **Project Settings** dialog.

Project Settings can be accessed from the **Settings**option of the**Secondary Actions**.

[![](/learn/assets/Project_Settings.png)](/learn/assets/Project_Settings.png)

- **Type** indicates whether it is an application - web or mobile; or a prefab. For Prefabs, an additional [Prefab Settings](/learn/app-development/custom-widgets/creating-prefabs/ "Projects and Templates") tab is displayed.
- **Project Name** non-editable field giving the name of the project.
- **Description** giving a brief description of the project as entered at the time of project creation which can be modified.
- **Package prefix** defines the default package for the generated code across all services. The package prefix is generated by concatenating the _com_ and _project name_. This can be modified as per your requirements.
- The **copyright** information is generated by default, which can be modified.
- **Provatar** or project avatar is an icon depicting the nature of the project, editable set from the selection from the drop-down menu.
- **Version** number can take any format as per your company standards.
- **Default Language** can be set for the project. This works in conjunction with the [Localization](/learn/app-development/widgets/datalive/form/select-locale/ "Localization"). The developer has to provide the Language Bundle via the App Messages, translation facility is not provided by this feature. In case the Language Bundle is not provided the application will run in English, which is the default language. The browser language preference of the user can be captured. If the user running the WaveMaker app has language preference set in their browser and that language is supported by the app (i.e. available in the language bundle) then the app will be rendered in that language instead of the default language of the app.
- **Home Page** defines the initial or the first page for the app at run-time. It is set to the Main page by default. **NOTE**: Few things that you need to be aware of regarding the Home Page
    - In case the app is not secure, the user is redirected to the Home page configured in the project settings
    - In case the [app is secure](http://[supsystic-show-popup id=111]) but the Home Page is not ([permission set to everyone](/learn/app-development/app-security/access-levels-permissions/#setting-permissions)), the user is redirected to the Home page configured in the project settings
    - In case the app and Home Page are secure([permission set to specific user role](/learn/app-development/app-security/access-levels-permissions/#setting-permissions)), the user is redirected to the [configured login page](/learn/app-development/app-security/login-configuration/#login-page#login) as per the user role
- **Display Format** can be used to set the display format for all the date/time fields in the app. The Configure Formats link directs you to the localization dialog where the date and time formats can be set. ([click here to know more](/learn/app-development/widgets/form-widgets/select-locale-usage/))
- **Project Shell** used in building the app, non-editable
- **Created date** is the project creation timestamp, non-editable.
- **Last Accessed** date is the timestamp of last project modification, non-editable.