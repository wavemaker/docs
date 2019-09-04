---
title: "Project Shells"
id: ""
---

**Project Shells** can be used as a starting point in app development and used as a foundation for multiple apps within an enterprise. In this document, we will be talking about:

- the benefits of using a project shells,
- [default project shell](#default-shell),
- how to [create a project shell](#creating-shell), and
- how to [publish a project shell](#publishing-shell).

Basically, a Project Shell is an app with functionality included. This functionality can be used as is or with some changes/enhancements, across multiple apps.

For example, multiple apps in an organization could be using the same database or the same security mechanism. You can create an app with the database imported or the security applied and save as shell. Use this shell when you develop other apps, use this shell. Project Shell will ensure uniformity at the same time reducing the app development time and effort.

You can select the project shell to apply when you create an application. **NOTE**: You will not be given an option to select a project shell unless you create and save (or publish to EDN for Enterprise Edition) a project as a shell within your workspace. The default project shell that comes with the platform will be applied.

[![project_shell_apply](./assets/project_shell_apply.png)](./assets/project_shell_apply.png)

## Default Page Shell

Whenever you create an app using WaveMaker it is based out of a default project shell. This shell contains the following components:

- the Main page,
- a Login page, and
- partials for
    - header, footer,
    - leftnav, rightnav, topnav and
    - common dialogs for login, alert and confirm.

## Creating Project Shell

Like mentioned above, you can create and use your own project shells as per your app development needs. For this follow these steps:

1. Create an app with the functionality, theme, and styles that you want to be applied in common to multiple apps.
2. Once you have created the app, Export it as Project Shell. [![](./assets/Publish_shell_ws.png)](./assets/Publish_shell_ws.png)
3. This shell will be available for selection when you create an app from your workspace. [![project_shell_apply](./assets/project_shell_apply2.png)](./assets/project_shell_apply2.png)

## Publishing Project Shell

##### Enterprise Version post 10.0 release

In order for the Project Shell to be available for all developers within the enterprise, it needs to be published to the EDN and approved by the EDN Admin. Refer to [Artifacts Publishing Mechanism](/learn/app-development/wavemaker-overview/artifacts-repository/#publishing) for more details. [![](./assets/Publish_shell.png)](./assets/Publish_shell.png)

Export as Shell to EDN will prompt you to enter the following details:

- **Category**: this will be used for grouping purpose. Categories are typically defined by EDN Admin and developers associate the artifact with a given category at the time of publishing.
- **Version Number**: Each artifact is associated with a version (automatic versioning) at the time of the publishing process.
- **Change Log**: These include the comments that the developer needs to add before publishing the artifact.
- **Tag**: this will be useful for searching, each artifact can have multiple tags.

[![](./assets/shell_publish_edn.png)](./assets/shell_publish_edn.png)

- After Admin's approval, the Shell is listed in the artifact repository listing. [![](./assets/Artifacts_shell_list.png)](./assets/Artifacts_shell_list.png)
- To use the Shell, the app developer needs to select the Shell at the time of App creation. [![project_shell_apply](./assets/project_shell_apply2.png)](./assets/project_shell_apply2.png)

In this document, we have seen how Project Shell can be used as a foundation for multiple applications without replicating the effort.

< Page Templates

Page Artefacts >

2\. Design UI

- 2.1 Overview
    - [i. App UI Design](/learn/app-development/ui-design/design-overview/#app-ui-design)
    - [ii. Responsive Design](/learn/app-development/ui-design/design-overview/#responsive-design)
    - [iii. UI Development](/learn/app-development/ui-design/design-overview/#ui-development)
- 2.2 Page Concepts
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
    - [vii. Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/#)
        - [○ Custom Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/#creating-page-templates)
    - [viii. Use Cases](/learn/app-development/ui-design/use-cases-ui-design/)
- [2.3. Project Shell](#)
    - [○ Creating Project Shell](#creating-shell)
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
