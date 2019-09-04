---
title: "Product Walkthrough"
id: "product-walkthrough"
---
---
WaveMaker is a RAD platform to develop and deploy web and mobile applications. This document is intended to be a walkthrough of the WaveMaker RAD platform. It includes:

- [Product Terminology](#product-terminology)
- [Project Dashboard](#project-dashboard)
- [Project Workspace](#project-workspace)
- [Project Canvas](#project-canvas)
- [Project Settings](#project-settings)
- [Project Profile](#project-profiles)

## Product Terminology

Before starting with product walkthrough, let us get familiarized with some of the terms commonly used in Studio parlance.

| **Terms** | **Definition** | **Description** | **Reference** |
| --- | --- | --- | --- |
| **Pages** | App components to organize data display using widgets and to define the workflow through interlinking. | A fully finished page has a Layout and Content. Page Content is based on the placement of widgets or from a Template chosen by you. Page Layout is used to define the common areas across pages. Ideally, new pages should be created for separate business rules. For example, a page can be used to display the employee listing, another for the department details and yet another for department expenditure details. | -[Page Creation](/learn/app-development/ui-design/page-creation/)|
| **Layouts** | Demarcating the page into components. | A layout is HTML Markup defining placeholders for page components such as header, footer, top navigation, left and right panels, and main area. You can choose from the pre-defined set of layout options. The content for each of these components can be defined using partial pages. | -[Reference](/learn/app-development/ui-design/page-concepts/page-layouts/#page-layouts) |
| **Templates** | Re-usable arrangement of one or more widgets in the page content that together capture the purpose of the page. | A template is the structural composition of a page with widgets containing HTML markup and the CSS styles. The widgets within a Template do not have data binding with services, allowing the usage of these templates for different use cases on different pages. You can choose from a list of default templates provided by the platform or create your own template bundle as a collection of templates. For example, a dashboard template is typically created with charts, data table, and other widgets. When a page is created using this dashboard template, these widgets can be bound to Sales or Healthcare database services based on use cases like Sales dashboard or Healthcare dashboard. | -[Reference](/learn/app-development/ui-design/page-concepts/page-templates/) |
| **Template Bundle** | Custom templates built into a bundle. | A template bundle is a collection of templates. Template Bundle can be built like an application sans data binding. Import of the Template Bundle to the Studio workspace ensures that all the templates within the bundle are available across the apps for selection at the time of page creation just like the default templates. | -[Reference](/learn/app-development/ui-design/page-concepts/page-templates/#creating-page-templates) |
| **Widgets** | UI components for user interaction and responsive design. | Widgets are HTML/Bootstrap based UI Components to enable user interaction. Widgets get their data from backend Services through binding to Variables. Widgets can be customized in terms of appearance and behavior as per your use case using the attributes of properties, style, events, and security. For example Button, Text, Label, Data Table, List, Charts etc. | -[Widget Basics](/learn/app-development/widgets/ui-elements/) </br>-[Widget Library](/learn/app-development/widgets/widget-library/) |
| **Prefabs** | Collection of one or more widgets that are bound to API or services. | Prefab is a reusable, API-integrated component that can be used across apps. It encapsulates functionality, interaction & data and as such can be used to build custom widgets. For example, GoogleMap Prefab, QRCode reader or Youtube Prefab. | -[Prefab Basics](/learn/app-development/custom-widgets/custom-widgets/)</br>-[Predefined Prefabs](/learn/app-development/widgets/widget-library/#prefabs)</br>-[Creating Prefabs](/learn/app-development/custom-widgets/creating-prefabs/) |
| **Project Shell** | Foundation for multiple apps in an enterprise. | Project Shell is an app with functionality that is common to multiple apps across the enterprise. This can be used as a starting point in app development. For example, multiple apps in an organization could be using the same database or the same security mechanism. Shell will ensure uniformity and reduce the app development time and effort. |-[Reference](/learn/app-development/ui-design/project-shells/) |
| **Theme** | Colors, fonts, and branding elements (CSS & images) that is applied to all pages within an app. | Themes are style elements which work at the widget or UI component level. Themes help provide a consistent look and feel to your application. Themes can be selected from existing default list or custom built to suit the app needs. | -[Themes Overview](/learn/app-development/ui-design/themes/)</br>-[Creating Themes](/learn/app-development/ui-design/themes/#create-theme) |
| **Variable** | Provides data integration for the widgets | Variable holds the actual data to be rendered by the widgets. It is based on a data model obtained from the API source (from services like database and web-based) and renders the same in the form of a data structure used for binding, with attributes and related objects. | -[Overview](/learn/app-development/variables/variables-actions/) |
| **Variable Types** | Classification of Variables based on the source and purpose. | **Database CRUD** for the basic insert, read and update operation on the Database tables. | -[Reference](/learn/app-development/variables/database-crud/) |
||| **Database API** for accessing the queries and procedures and additional Database functionality. | -[Reference](/learn/app-development/variables/database-apis/) |
||| **Service API** from Web, Java, Security for the service APIs exposed by the Web, Java and Security services. | -[Web Service](/learn/app-development/variables/web-service/)</br>-[Java Service](/learn/app-development/variables/java-services/)</br>-[Security Service](/learn/app-development/variables/security-service/) |
||| **Model Variable** can be used as storage model to store data on the client. | -[Reference](/learn/app-development/variables/model-variable/) |
||| **Device Variable** to access device features in case of mobile applications. | -[Reference](/learn/hybrid-mobile/device-variables/) |
| **Actions** | Implement the business logic, rules and data flow | Actions assist in invoking a backend API, Database operation or navigation to another page when a UI event occurs. Events can be either user-initiated, notification response or as a result of another task being performed. | -[Overview](/learn/app-development/variables/variables-actions/#actions) |
| **Binding** | Connecting variables and widgets | Binding of the Variables to Widgets helps in capturing the data from the user or fetching data from the backend services. | -[Reference](/learn/app-development/variables/variable-binding/) |

## Project Dashboard

Once you have created projects, the **Project Dashboard** page displays all your Projects, Prefabs and Template Bundles along with the latest activity updates. You have the option to create/import project, prefab or template bundle. [![](./assets/project-listing.png)](./assets/project-listing.png)

- _Top Banner_ can be used to:
    - choose what you want to create/work on - Apps, Prefabs or Template Bundles. From Apps tab, you can access Sample Apps, which can be accessed from your account and tinkered with.
    - **Manage Deployed Apps** open the Cloud Portal for managing release pipeline for deployed apps. [Know more](/learn/app-development/deployment/release-management/).
    - **Accounts Access** allows you to view the following details:
        - **Profile** details
        - **Subscription** details allow you to manage the subscriptions. It gives the details of each application in your account, the plan they are under, the status of the plan and option to renew the subscription.
        - **Logout** option.
    - **Tutorial/Activity Panel** gives
        - access to various tutorials
        - recent project activity
    - **Logs** give access to server logs which can be downloaded.
    - **Project Listing** will list all the apps, Prefabs, and template bundles, depending upon the tab you select. Hovering on a given app/prefab/template bundle will allow you to open the same in Studio designer.
    - For each project or Prefab the following information is displayed: [![](./assets/Project-Details.png)](./assets/Project-Details.png)
        - **Provatar** or project avatar, to give a visual image of the type of project. It can be set at the time of project creation by selecting an image from the drop down list.
        - **Project type** of project - web, mobile, prefab, or template bundle
        - **Project Name** provided while creating a project or Prefab.
        - **Project Description**: The description that you provided while creating a project or Prefab.
        - **Modified Timestamp** date and time of the last update.
        - **User role** on the project - owner or contributor
        - **Restore**: Ability to restore a project from the VCS. [See here for project recovery options](/learn/app-development/dev-integration/import-export-update-apps/#project-recovery).
        - **Export:** Ability to export a project as a zip file without opening the project.
        - **Delete**: As an owner/admin of the project, you can delete the same. In case there are multiple Project Admins, each of them has the option to **Leave Project**.
        - **Leave project:** As a member of the project, you have the option to Leave the project, instead of delete.
        - **App Member Details** gives the number of Members working on the project with an option to open the Member details dialog on click. [![](./assets/user_management_add.png)](./assets/user_management_add.png) This dialog allows you to:
            
            - view the project members and their roles;
            - the owner of the project can add or remove members and change the role
            
            For more on Project roles [refer here](/learn/app-development/wavemaker-overview/project-user-management/). For Enterprise version refer to [RBAC Support](/learn/app-development/wavemaker-overview/rapid-rbac-support/#project_roles).

## Project Workspace

When a project from the Project Dashboard is opened, it opens in the Project Workspace. This space is the designer pallet for your app. The various sections of the Project Workspace assist you in building the app.

[![](./assets/project_workspace.png)](./assets/project_workspace.png)

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
3. the Properties Panel displays the properties of the Page [![](./assets/Canvas1.png)](./assets/Canvas1.png)
4. from the Page Structure section, you can see the various elements placed on the Page and their hierarchy
5. you can select the widget from the Page structure
6. selected widget is highlighted on the Canvas
7. selected widget properties like data source, styles, events, device, and security can be set from the Properties Panel
8. Widget hierarchy shows the widget construct and allows you to traverse to the parent container. [![](./assets/Canvas2.png)](./assets/Canvas2.png)

## Project Settings

You can view and change project details and settings from the **Project Settings** dialog.

Project Settings can be accessed from the **Settings**option of the**Secondary Actions**.

[![](./assets/Project_Settings.png)](./assets/Project_Settings.png)

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

## Configuration Profiles

App Configuration is externalized at each service through configuration profiles. Configuration for DB, REST, SOAP, WebSocket servers, Security etc. can be separated for Dev and Deploy environments through Profiles.

The **Configuration Profiles** can be accessed from the **Settings** option of the **Secondary Actions**.

The Configuration Profiles allows one to run the same application under different environments with different configurations. This is in line with _[Maven Configuration Profiles](https://maven.apache.org/guides/mini/guide-building-for-different-environments.html)_. Services used by a Prefab within the app can also be configured.

[Know more about Configuration Profiles from here](/learn/app-development/deployment/configuration-profiles/).

[![](./assets/config_prof_dev.png)](./assets/config_prof_dev.png)

[![](./assets/config_prof_deploy.png)](./assets/config_prof_deploy.png)


