---
title: "Project Shells"
id: "project-shells"
---
---

**Project Shells** can be used as a starting point in app development and used as a foundation for multiple apps within an enterprise. In this document, we will be talking about:

- the benefits of using a project shells,
- [default project shell](#default-shell),
- how to [create a project shell](#creating-shell), and
- how to [publish a project shell](#publishing-shell).

Basically, a Project Shell is an app with functionality included. This functionality can be used as is or with some changes/enhancements, across multiple apps.

For example, multiple apps in an organization could be using the same database or the same security mechanism. You can create an app with the database imported or the security applied and save as shell. Use this shell when you develop other apps, use this shell. Project Shell will ensure uniformity at the same time reducing the app development time and effort.

You can select the project shell to apply when you create an application. **NOTE**: You will not be given an option to select a project shell unless you create and save (or publish to EDN for Enterprise Edition) a project as a shell within your workspace. The default project shell that comes with the platform will be applied.

[![project_shell_apply](/learn/assets/project_shell_apply.png)](/learn/assets/project_shell_apply.png)

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
2. Once you have created the app, Export it as Project Shell. [![](/learn/assets/Publish_shell_ws.png)](/learn/assets/Publish_shell_ws.png)
3. This shell will be available for selection when you create an app from your workspace. [![project_shell_apply](/learn/assets/project_shell_apply2.png)](/learn/assets/project_shell_apply2.png)

## Publishing Project Shell

##### Enterprise Version post 10.0 release

In order for the Project Shell to be available for all developers within the enterprise, it needs to be published to the EDN and approved by the EDN Admin. Refer to [Artifacts Publishing Mechanism](/learn/app-development/wavemaker-overview/artifacts-repository/#publishing) for more details. [![](/learn/assets/Publish_shell.png)](/learn/assets/Publish_shell.png)

Export as Shell to EDN will prompt you to enter the following details:

- **Category**: this will be used for grouping purpose. Categories are typically defined by EDN Admin and developers associate the artifact with a given category at the time of publishing.
- **Version Number**: Each artifact is associated with a version (automatic versioning) at the time of the publishing process.
- **Change Log**: These include the comments that the developer needs to add before publishing the artifact.
- **Tag**: this will be useful for searching, each artifact can have multiple tags.

[![](/learn/assets/shell_publish_edn.png)](/learn/assets/shell_publish_edn.png)

- After Admin's approval, the Shell is listed in the artifact repository listing. [![](/learn/assets/Artifacts_shell_list.png)](/learn/assets/Artifacts_shell_list.png)
- To use the Shell, the app developer needs to select the Shell at the time of App creation. [![project_shell_apply](/learn/assets/project_shell_apply2.png)](/learn/assets/project_shell_apply2.png)

In this document, we have seen how Project Shell can be used as a foundation for multiple applications without replicating the effort.

