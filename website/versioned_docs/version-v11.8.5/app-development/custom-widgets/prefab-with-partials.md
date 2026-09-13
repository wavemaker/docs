---
title: "Prefabs with Partials"
id: "prefab-with-partials"
sidebar_label: "Prefab with Partials"
---
---

[Prefabs](/learn/app-development/custom-widgets/prefabs-overview) are reusable application parts that you can integrate into applications easily. [Partial](/learn/app-development/ui-design/page-concepts/partial-pages) is a part of a page associated with components within a page. It can be implemented as a single Partial and used across all app pages. To learn how to create Prefabs, see [Creating Prefabs](/learn/app-development/custom-widgets/creating-prefabs).

With Partials inside a Prefab, you can create higher abstraction levels, and reuse functions across the web and mobile projects. You can use several other features, including organizing UI, using form-factor for enabling different screen size compositions. Additionally, benefit from using features like [Data Table with Row Expansion](/learn/how-tos/how-to-configure-row-expansion-in-a-data-table) and [Page Dialogs](/learn/app-development/widgets/modal-dialogs/modal-windows-dialogs#page-dialog) for on-demand content loading.

## Creating Partials

You can create two types of Partials, including **Partials** and **Widget Templates**.

1. **Partials**: Use widgets such as Containers, Popovers, Page Dialogs, and more.  

2. **Widget Templates**: Create [Widget Templates](/learn/how-tos/custom-widget-template) with widgets, including Search, Radioset, Checkboxset to customize the look and feel.

![PartialTypes](/learn/assets/partialTypes.png)

You can import [template bundles](/learn/app-development/ui-design/page-concepts/creating-template-bundles) of Partials and Widget Templates into a Prefab Project. Choose the **Platform Type** when using the **Import Template** option to import for web and mobile projects separately.

## Prefab Properties in Partial

Like how you can access Prefab properties from the Main Page, you can access them from Partials. To create a property, go to the Config Prefab section and add them, as shown below.

1. Go to **Settings** -> select **Config Prefab** -> switch to the **Properties** tab.
2. From the **UI Properties**, add new properties. To learn more, see [How to add Prefab Properties](/learn/app-development/custom-widgets/creating-prefabs/#properties).
3. The following Prefab example contains two properties, Prop1 and Prop2.

![PrefabPropertiesDialog](/learn/assets/prefabpropertiesdialog.png)

4. When you create a Partial, you can use these properties when binding it to an object.  

For example, add a Label widget. From the **Properties** section, go to **Caption** and click *Bind Property* to open the following dialog, and find all the created **Prefab Properties**, as shown below.

![PartialBindDialog](/learn/assets/prefabpropertiesinsidepartial.png)

## Script Tab

Prefab Properties, Events, and Methods can be accessed inside the Partial script as shown below.

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

## Use Expression Tab

When you declare a JavaScript function in the `Main.js` file, access it from the **Use Expression** tab.

```js
Prefab.myJSFunction()
```

![prefab partial use expression](/learn/assets/use-expression-partial.png)


## Use Cases

Learn how to use Partials in a Prefab.

1. [Partials in Web and Mobile](/learn/how-tos/create-prefab-with-partials#partials-in-web-and-mobile)  
2. [Using Partial for Data Table with Row Expansion](/learn/how-tos/create-prefab-with-partials#data-table-with-row-expansion)
