---
title: "Prefabs - Custom Widgets & Extensions"
id: "prefabs-overview"
sidebar_label: "Prefabs Overview"
---
---
**Prefab** is a reusable, distributable component of an application, which can be tested independently. It can interact with APIs and data on the web. Prefabs can be embedded and integrated into your applications with ease.

[![](/learn/assets/prefab2.png)](/learn/assets/prefab2.png)

In this document the following topics related to Prefabs are covered:

- the [What](#prefabs-example), [Why](#prefab-benefits) and [How](#prefab-anatomy) of a Prefab,
- [various features](#prefab-features) of a Prefab,
- using Prefabs in your application by [publishing](#publishing-prefabs) and [importing](#importing-prefabs), and
- [structure](#files-prefabs) of the Prefab code.

## Understanding Prefabs - An Example

The following example is a document collaboration use case, where multiple users can annotate, comment and collaborate changes to a document. A Prefab can be built which shows all comments made on the document, retrieving them from an API. Prefab can be associated with the context of the document and organization/user to which the document is associated. Within this app or other apps wherever file comments are shown, this prefab could be simply reused.

[![](/learn/assets/prefab_ex1.png)](/learn/assets/prefab_ex1.png)

This Prefab can be made to tightly integrate with specific APIs as shown below. Prefab parameters can be defined to externalize configurations such as email, organization account, etc. to carry the content.

[![prefab_ex2](/learn/assets/prefab_ex2.png)](/learn/assets/prefab_ex2.png)

## Prefabs & API Integration

Prefabs make API integration a lot easier. You can

1. integrate with REST API by importing API as a Service
2. secure the transaction via the built-in OAuth 2.0 handshake without the need to write additional code
3. manipulate the JSON responses by binding them to UI elements or widgets
4. configure input parameters through Prefab settings
5. expose data output and events for client-side integration

[![](/learn/assets/prefab_api.png)](/learn/assets/prefab_api.png)

## Why Prefabs

Benefits of Prefabs are multifold. To list a few:

1. They are reusable, API-integrated components that can be used across apps.
2. Prefabs encapsulate functionality, interaction & data.
3. New widgets can be built by composing from existing widgets – Extensions.
4. New widgets can be built by wrapping 3rd party JavaScript frameworks – jQuery extensions, d3 visualization components etc.
5. Re-usable backend Services can be built leveraging 3rd party Java Libraries – Jasper reports, Apache POI, etc.

## Prefab Anatomy

Prefabs leverage all the features available to a WaveMaker app, completely encapsulating them into one reusable component. Their UI Layer is composed of multiple widgets and acts as a single component, which is integrated with corresponding back-end services and they expose events & methods for integration with the enclosing app.

[![](/learn/assets/prefab_anatomy.png)](/learn/assets/prefab_anatomy.png)

## Prefab Types

Prefabs can be applied in many situations, Broadly, they fall into following categories:

1. **as widget extensions**: they can be built on top of 3rd party JS libraries and extend these libraries' functionality; [![prefab_widget](/learn/assets/prefab_widget.png)](/learn/assets/prefab_widget.png)
2. **as API integrated components**: WaveMaker UI components can be made to interact with the Prefab APIs to customize the Prefab behavior; [![prefab_apicomp](/learn/assets/prefab_apicomp.png)](/learn/assets/prefab_apicomp.png)
3. **as Backend service extensions**: reusable backend services can be built by leveraging 3rd party Java libraries. [![prefab_backent](/learn/assets/prefab_backent.png)](/learn/assets/prefab_backent.png)

## Prefab Features

Prefabs, like any widget, have the following features that can be set:

1. **Properties**: If a Prefab exposes properties, you can set them using the Properties Panel. Depending upon the complexity of the Prefab, you may need to integrate the Prefab into your page using code.
2. **Events**: There are two default events which can be handled - on Load and on Destroy. These events get triggered when the Prefab is loaded or removed, respectively, from the page containing the Prefab. Any other events that have been defined by the Prefab developer will also be listed and these can be handled by the user.
3. **Methods**: Any methods that have been written and exposed by the Prefab developer will be available for invocation by binding them to an event of any widget.

[Know more about Prefab settings](/learn/app-development/custom-widgets/creating-prefabs/#prefab-settings).

[![prefab_frontend](/learn/assets/prefab_frontend.png)](/learn/assets/prefab_frontend.png)

## Publishing Prefabs

Once you have created a Prefab, it needs to be published in order for the apps to use it. [Know more about Publishing Prefabs](/learn/app-development/custom-widgets/creating-prefabs/#publish-prefab).

[![](/learn/assets/prefab_publish.png)](/learn/assets/prefab_publish.png)

## Importing Prefabs

1. To use a prefab for the first time, you should import the Prefab into your app. To import, click the **+** from the **Prefabs** section.

    ![prefabs import](/learn/assets/prefab-import.png)

2. Upload the `.zip` file.

    ![upload zip file](/learn/assets/prefab-zip-import.png)

3. Once imported, you can find the prefab in the **Prefabs** section of the **Pages Resources**. These prefabs are grouped into categories like Basic, Media, Location, and more, as defined in the properties of the Prefab at the time of creation.
4. You can use prefabs in any of your projects by simply dragging and dropping them from the  **Prefabs** section to your page like any other widget. Once, embedded into the page, all the functionality of the prefab becomes a part of that page.
5. You can find the list of available Prefabs from the [Studio Artefacts](/learn/assets/artefacts.png) page.

![artefacts](/learn/assets/artefacts_access.png)

:::note

1. All Published Prefabs will be available under Prefabs, without needing to Import. Just click the refresh icon if you don't find the Prefab.
2. To incorporate any changes made to an already imported prefab, it needs to be re-imported to an updated version of the project. Use the refresh icon for the same.
3. Deleting a prefab already incorporated into a project will not affect the project.
4. When using a Prefab in your applications, ensure that the widget names in the application do not conflict with the widgets names used in the Prefab.
:::

## File Structure for Prefabs

When a prefab is imported into a project, it places the prefab content into the folder: `src/main/webapp/WEB-INF/prefabs/{prefab-name}.` For each Prefab imported a separate folder is created, with the same name as that of the Prefab.

:::note
Deleting this folder will delete the Prefab from the project.
:::

[![](/learn/assets/Prefab_Files.png)](/learn/assets/Prefab_Files.png)

For each Prefab you will find 3 subfolders:

- `config` - consisting of the configuration files
- `lib` - any library files like jar files uploaded while Prefab creation
- `webapp` - contains the pages comprising the Prefab and any resources imported


## See Also
[Predefined Prefabs](/learn/app-development/widgets/widget-library/#prefabs-custom-widgets-extensions)  
[Create your own Prefabs](/learn/app-development/custom-widgets/creating-prefabs/)

