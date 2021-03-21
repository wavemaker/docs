---
title: "Partials Support in Prefabs"
author: Nikhilesh K V
---

[Prefabs](/learn/app-development/custom-widgets/prefabs-overview) are reusable application parts that can be easily integrated into your applications. To learn how Prefabs can be created in WaveMaker, refer [this link](/learn/app-development/custom-widgets/creating-prefabs).

<!--truncate-->

## Understanding the Problem

Until now, we did not allow users to create [partials](/learn/app-development/ui-design/page-concepts/partial-pages) inside Prefabs. The only page you have access to is the Main Page where all code exists. Due to this, the following problems can be seen:
* Difficulty in maintainability and collaboration with others due to conflicts as and when the Prefab size keeps increasing.
* Same Prefab can be used in both Web and Mobile applications, so wouldn't it be better to have a clear segregation between both of them ?
* Use cases like [Data Table with Row Expansion](/learn/how-tos/how-to-configure-row-expansion-in-a-data-table) and [Page Dialogs](/learn/app-development/widgets/modal-dialogs/modal-windows-dialogs#page-dialog) are not possible in Prefabs.

## Solution

We are excited to announce that as of Wavemaker 10.6.9, we have added support for Partials to be created inside Prefab projects. This allows Users to create even more powerful Prefabs. The following types of Partial Pages can be created.

![PartialTypes](/learn/assets/partialTypes.png)

As you can see, we only allow creation of Partials and Widget Templates. Partials can be created to be used with widgets such as Containers, Popovers, Page Dialogs etc. [Widget Templates](/learn/how-tos/custom-widget-template) can be created to be used with widgets such as Search, Radioset, Checkboxset widgets to customize the look and feel.

[Template bundles](/learn/app-development/ui-design/page-concepts/creating-template-bundles) containing Partials and Widget Templates can be imported into a Prefab Project. Since a Prefab can be used in both web and mobile applications, we can choose the Platform Type while using an imported template to create a Partial/Widget Template.

## Accessing Prefab Properties inside Partials

Main Page already has access to the Prefab properties. Let us see how Partials can access these properties.

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

## Conclusion
As more and more Prefabs are being built on WaveMaker, this feature allows us to create even more powerful Prefabs than ever before. Different partials can be created for different viewports and then be included in the Main page with `Show in device` configuration.
