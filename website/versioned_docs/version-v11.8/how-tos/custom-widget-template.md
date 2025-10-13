---
title: "How to apply Custom Template for Widgets"
id: "custom-widget-template"
sidebar_label: "Custom Template for Widgets"
---
---

Apply custom template for widget, including Search, Radioset, Checkboxset widgets.

You can use this feature to change the look and feel of the widgets that represent repetitive data. For example, customize the UI in the dropdown for each item of Search or Autocomplete widget, as shown in the image below.

![search template](/learn/assets/search-template.png)

## Choosing Template from Canvas

1. Drag and drop a Search Widget, and [bind the widget](/learn/app-development/variables/variable-binding#binding-to-widgets) to a dataSet.

2. When you select the **Search** widget on the canvas, you can see the template icon on the toolbar. Click the **template** icon.

![template icon on toolbar](/learn/assets/template-icon-toolbar.png)

3. It opens a **New Widget Template** dialog. From the left navigation, click **Widget Template**, and select a template.

![select widget template](/learn/assets/select-widget-template.png)

4. Click **Next**, it automatically selects the Table/Entity to which the widget is bound to.

5. Provide a name for the template, which will be used to notify in the next steps. 

6. Bind the template fields. The fields display based on the template you select, and click **Create**.

![widget binding](/learn/assets/field-template-bind.png)

7. Now, [notify the widget](#notify-the-widget) to use the template from the page script tab.

## Creating Template from Page Creation Dialog

1. Click the **+** to create a new page.

![create new page](/learn/assets/page_new.png)

2. From the left navigation, click **Widget Template**, and select a template.

![select widget template](/learn/assets/select-widget-template.png)

3. Provide a name for the template, which will be used to notify in the next steps.

4. Select the Table/Entity of the service. Bind the template fields. The fields display based on the template you select, and click **Create**.

![select table](/learn/assets/select-table.png)

5. Now, [notify the widget](#notify-the-widget) to use the template from the page script tab.

## Notify the Widget

Notify the search widget to use the custom UI template, instead of the default template.

### Search Widget

```js
Page.Widgets.search1.setTemplate('<templatename>');
```

## Reusability 

Similarly, you can reuse the created-template for widgets, including search, checkboxset and radioset by simply notifying the widget to use the custom UI template.

### Checkboxset Widget

```js
Page.Widgets.checkboxset1.setTemplate('<templatename>');
```

### Radioset Widget

```js
Page.Widgets.radioset1.setTemplate('<templatename>');
```

