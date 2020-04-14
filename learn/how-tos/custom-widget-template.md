---
title: "How to apply Custom Template for Widgets"
id: ""
sidebar_label: "Custom Template for Widgets"
---
---

Apply custom template for widget, including Search, Radioset, Checkboxset widgets.

You can use this feature to change the look and feel of the list type templates. For example, customize the UI in the dropdown for each item of Search or Autocomplete widget, as shown in the image below.

![search template](/learn/assets/search-template.png)

## Creating a template

1. Create a [partial page](/learn/app-development/ui-design/page-concepts/partial-pages) from the page creation dialog, and select a template from the predefined **List Templates**.

![creating a partial](/learn/assets/creating-partial.png)

2. Select the Table/Entity of the service and bind the template fields. Fields display based on the selected template.

![select table](/learn/assets/select-table.png)

Alternatively, when you select the Search widget on the canvas, you can see the template icon on the toolbar.

![template icon on toolbar](/learn/assets/template-icon-toolbar.png)

4. Click the template icon. It opens a template creation dialog.

![select widget template](/learn/assets/select-widget-template.png)

4. It automatically selects the entity/table as a widget bound type.

![widget binding](/learn/assets/widget-template-bind.png)

## Notify the Widget

Notify the search widget to use the custom UI template, instead of the default template.

### Search Widget

```
Page.Widgets.search1.setTemplatePartial('<templatename>');
```

## Reusability 

Similarly, you can reuse the created-template for widgets, including search, checkboxset and radioset by simply notifying the widget to use the custom UI template.

### Checkboxset Widget

```js
Page.Widgets.checkboxset1.setTemplatePartial('<templatename>');
```

### Radioset Widget

```js
Page.Widgets.radioset1.setTemplatePartial('<templatename>');
```

