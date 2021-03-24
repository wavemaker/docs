---
title: "Prefabs with Partials"
id: ""
sidebar_label: "Prefab with Partials"
---
---

[Prefabs](/learn/app-development/custom-widgets/prefabs-overview) are reusable application parts that you can integrate into applications easily. To learn how to create Prefabs in WaveMaker, see [Creating Prefabs](/learn/app-development/custom-widgets/creating-prefabs).

With Partials inside a Prefab, you can create higher abstraction levels, and reuse functions across the web and mobile projects. You can use several other features, including organizing UI, using form-factor for enabling different screen size compositions. Additionally, benefit from using features like [Data Table with Row Expansion](/learn/how-tos/how-to-configure-row-expansion-in-a-data-table) and [Page Dialogs](/learn/app-development/widgets/modal-dialogs/modal-windows-dialogs#page-dialog) for on-demand content loading.

## Creating Partials

You can create two types of partials, including **Partials** and **Widget Templates**.

1. **Partials**: Use widgets such as Containers, Popovers, Page Dialogs, and more.  

2. **Widget Templates**: Create [Widget Templates](/learn/how-tos/custom-widget-template) with widgets, including Search, Radioset, Checkboxset to customize the look and feel.

![PartialTypes](/learn/assets/partialTypes.png)

You can import [template bundles](/learn/app-development/ui-design/page-concepts/creating-template-bundles) of Partials and Widget Templates into a Prefab Project. Choose the **Platform Type** when using the **Import Template** option to import for web and mobile projects separately.

## Prefab Properties inside Partials

The Main page already has access to the Prefab properties. Let us see how Partials can access these properties.

### Design Tab

The following Prefab has two properties, Prop1 and Prop2.

![PrefabPropertiesDialog](/learn/assets/prefabpropertiesdialog.png)

These properties are available to be used in the Partials created inside the Prefab, as shown below.

![PartialBindDialog](/learn/assets/prefabpropertiesinsidepartial.png)

### Script Tab
Prefab Properties, Events and Methods can be accessed inside the Partial script as shown below.
```js   

Partial.onReady = function () {
    // Prefab object is exposed to the Partial as Partial.Prefab
    console.log(Partial.Prefab);
    // this is how Prefab Properties can be accessed within Prefab Partials
    console.log(Partial.Prefab.prop1);
    // this is how Prefab methods can be accessed within Prefab Partials
    console.log(Partial.Prefab.myMethod());
};
```

### Use Cases

Learn how to use partials in a Prefab.

1. [Partials in Web and Mobile](/learn/how-tos/create-prefab-with-partials#partials-in-web-and-mobile)  
2. [Using Partial for Data Table with Row Expansion](/learn/how-tos/create-prefab-with-partials#data-table-with-row-expansion)