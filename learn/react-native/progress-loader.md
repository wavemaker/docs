---
title: "Progress Loader"
id: "progress-loader"
sidebar_label: "Progress Loader"
---
---

An application loader is a component that helps in the loading and execution of an application. It typically handles tasks such as loading necessary resources, managing dependencies, and preparing the application to run smoothly. There are two types of Application Loaders that WaveMaker supports.

[Skeleton Loader](#skeleton-loader)  
[Progress Loader](#progress-loader)


## Progress Loader

Use Progress Loaders such as spinners while the app data is being fetched from an API. WaveMaker provides four types of Progress Loaders to choose. The styling for the Progress Loader is generated from the default theme or the applied theme.

This will show the selected spinner animation, while the data is loading, which creates an overlay on top of the page and the colors of the spinner change based on the theme.

**Use Case**

In case of cloud storage application like Google Drive, the users upload files. The uploading of large files can take some time depending on the file size and network speed. During this process, it's crucial to inform users about the status of their upload to keep them engaged and to avoid confusion.

### Enabling Progress Loader

Skeleton Loader can be enabled when creating an application. To apply the Skeleton Loader, go to the **Project Settings** dialog and choose **Skeleton Loader** as the Application Loader.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/91V6g5TKcWZD77JPv9aAYR"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Configuring Progress Loader

In WaveMaker service calls, to fetch data, these are abstracted as [Variables](/learn/app-development/variables/). When these calls are made the [App Loaders](#application-loader) are displayed.

To set a Progress Loader for an API call, the Progress Loader is bound to a variable available in the page and the Spinner Context is set at Page level.

![variable spinner context](/learn/assets/variable-spinner-context.png)

:::note

When the Owner in the Variables Page is set as Application, the variable bound to the Progress Loader can be reused across the application. And if the Owner is set as Page, the variable is page restricted and needs to be created and bound to the Progress Loader to be used in the different page.

:::

