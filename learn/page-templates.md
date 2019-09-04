---
title: "Page Templates"
id: ""
---

Templates are editable pages with the layout and content defined. These can be used by the developer as a foundation on which the application pages can be built. Here we will be talking about:

- [the default templates](#default-page-templates) provided by WaveMaker platform,
- [how you can build](#creating-page-templates) your own custom templates, and
- [how you can publish](#publishing-page-templates) your own custom templates (only for Enterprise versions).

## Default Page Templates

WaveMaker provides some default Templates for the ease of app development process. The templates are categorized under various heads like Travel, Sales, Healthcare, Finance, Human Resources etc.. Binding the various widgets on these templates to the various data sources will provide the required functionality. For Hybrid Mobile Apps these templates are categorized as a card, chart, dashboard, menu etc.

- Page Templates are available for _selection_ when adding a new page to an application.
- A _preview_ of each template can be seen by hovering over the template and clicking on the **Preview** button.
- For developer convenience, the Templates are _categorized_ as Travel, Basic, Sales, Healthcare, General, Finance, Human Resources, Social, Admin, and E-Commerce. For Hybrid Mobile Apps these templates are categorized as a card, chart, dashboard, menu etc.
- Each of the Templates has default values set, so the developer can get an idea of how the page would look like. Each of the content and widgets on the canvas _needs to be bound_ to live data for actual rendering of the page.

Web ResponsiveHybrid Mobile

## Creating Template Bundles

Template Bundles let you create and use templates across all applications in your enterprise. You can get a UI designer to design the Template Bundle. This document lists the steps in the creation of a Template Bundle.

1. Select **Template Bundles** tab and select the Create option [![](./assets/Create_TB_create.png)](./assets/Create_TB_create.png)
2. Template bundle can be used on the web or mobile platform. **Choose platform** accordingly.
3. Enter the **Name** and **Description** for the Template Bundle
4. The **Main Page** is created which will be used as a landing page for the Template Bundle and will not be published as part of the Template. You can choose to publish the main page by changing the settings or create a new page for the Template for publishing, from Config Settings as shown in the later steps.
5. You can create and design a new page like any other page of an application. You can use an existing template and make changes. Here we have created a Dashboard page and are making changes to the existing Sales Dashboard template. [![](./assets/Create_TB_template_page.png)](./assets/Create_TB_template_page.png)
6. From the _Secondary Actions_ select **Settings** and then **Config Templates** to open the Template Configuration dialog [![](./assets/template_config_select.png)](./assets/template_config_select.png)
7. Select the page you want to publish. You can:
    1. change the **Name** and **Description**
    2. specify the **Category** to which the Template belongs, you a can leave it blank
    3. select for **Publish**
    4. add **Keywords** used for search discovery
    5. add a **Thumbnail** to be displayed on the Templates selection dialog, and
    6. add **Screenshots** to be shown under Preview. [![](./assets/template_config.png)](./assets/template_config.png)
8. You can see the Template Bundle in action using the **Preview** option
9. Export the Template Bundle as a zip file (Enterprise version users, refer to the [publishing section](#publishing-page-templates))[![](./assets/template_export.png)](./assets/template_export.png)
10. Create/Open an application to use this Template
11. From the New Page Dialog, you can **Import Template** and apply it to the page. You can see the Thumbnail and Preview the Template. [![](./assets/template_import.png)](./assets/template_import.png)

## Publishing Template Bundles

##### Enterprise Version post 10.0 release

In order for the Template to be available for all developers within the enterprise, it needs to be published to the EDN and approved by the EDN Admin. [![](./assets/Publish_template.png)](./assets/Publish_template.png) Refer to [Artifacts Publishing Mechanism](/learn/app-development/wavemaker-overview/artifacts-repository/#publishing) for more details. [![](./assets/Publish_template_edn.png)](./assets/Publish_template_edn.png) After Admin's approval, the Template Bundle is listed in the artifact repository listing. To use the Template, the app developer needs to select it from the Template Dialog while adding a Page to the app, or by using the Change Template option for an existing app. [![](./assets/Artifacts_template_list.png)](./assets/Artifacts_template_list.png)In this document, we have seen how Page Templates ease page design and how you can create your own templates.

< Page Basics

Project Shells >

UI Design Use Cases >

2\. Design UI

- 2.1 Overview
    - [i. App UI Design](/learn/app-development/ui-design/design-overview/#app-ui-design)
    - [ii. Responsive Design](/learn/app-development/ui-design/design-overview/#responsive-design)
    - [iii. UI Development](/learn/app-development/ui-design/design-overview/#ui-development)
- [2.2 Page Concepts](/learn/app-development/ui-design/page-concepts/)
    - [i. Single Page Apps](/learn/app-development/ui-design/page-concepts/)
    - [ii. Page Life Cycle](/learn/app-development/ui-design/page-concepts/#page-lifecycle)
    - [iii. Page Creation](/learn/app-development/ui-design/page-creation/)
    - [iv. Parameter Passing](/learn/app-development/ui-design/page-creation/#page-parameters)
    - [v. Partial Pages](/learn/app-development/ui-design/page-concepts/partial-pages/)
    - vi. Page Basics
        - [○ Page Layouts](/learn/app-development/ui-design/page-concepts/page-layouts/#page-layouts)
        - [○ Page Navigation](/learn/app-development/ui-design/page-concepts/page-layouts/#page-navigation)
        - [○ Events](/learn/app-development/ui-design/page-concepts/page-layouts/#events)
            - [● Event Categorization](/learn/app-development/ui-design/page-concepts/page-layouts/#event-categorization)
            - [● Multiple Event Handling](/learn/app-development/ui-design/page-concepts/page-layouts/#multiple-events)
    - [vii. Page Templates](#)
        - [○ Custom Page Templates](#creating-page-templates)
    - [viii. Use Cases](/learn/app-development/ui-design/use-cases-ui-design/)
- [2.3 Project Shell](/learn/app-development/ui-design/project-shells/)
- 2.4 Page Artefacts
    - [i. Overview](/learn/app-development/ui-design/page-artefacts/)
    - [ii. Markup](/learn/app-development/ui-design/page-artefacts/#page-markup)
    - [iii. Script](/learn/app-development/ui-design/page-artefacts/#page-script)
    - [iv. Style](/learn/app-development/ui-design/page-artefacts/#page-style)
- 2.5 Themes
    - [i. Overview](/learn/app-development/ui-design/themes/)
    - [ii. Applying Theme](/learn/app-development/ui-design/themes/#apply-theme)
    - [iii. Importing Theme](/learn/app-development/ui-design/themes/#import-theme)
    - [iv. Creating Themes](/learn/app-development/ui-design/themes/#create-theme)
        - [○ Creating Web Theme](/learn/app-development/ui-design/themes/#create-theme-web)
        - [○ Creating Web Theme using Bootswatch](/learn/app-development/ui-design/themes/#create-theme-bootswatch)
        - [○ Creating Mobile Theme](/learn/app-development/ui-design/themes/#create-theme-mobile)
    - [v. Building Theme](/learn/app-development/ui-design/themes/#build-theme)
    - [vi. Testing Theme](/learn/app-development/ui-design/themes/#test-theme)
