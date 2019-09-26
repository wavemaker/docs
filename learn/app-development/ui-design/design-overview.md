---
title: App UI Design
id: "design-overview"
sidebar_label: "Designing Pages"
---
Learn how to design and navigate across pages and use rich themes to your WaveMaker apps.

---

Get started with designing your app. It involves the following steps:

1. Choosing a **Page Layout** for composition of Widgets or UI Elements.
2. Using **Widgets** for:
    - UI Components
    - Data rendering
    - User interaction and event handling.
    - Page navigation to control the workflow.

:::tip
- To explore WaveMaker widgets, see [Widgets Library](/learn/app-development/widgets/widget-library).
:::

3. **Prefabs** to customize and extend widgets' capability. 
4. Style using **Themes** and **Templates**.  

### Page Elements 

[![UI_design](/learn/assets/UI_design.png)](/learn/assets/UI_design.png)

## How it works

WaveMaker Pages are built using the drag-n-drop approach, by placing widgets in the corresponding responsive layout grids.  

[![](/learn/assets/UI_design-1.png)](/learn/assets/UI_design-1.png)


## Page Structure

A page is divided automatically into different areas, with the content of all areas except the main area, repeated across all pages of the app. This helps achieve UI consistency throughout the app, easily.

[![Page_responsive](/learn/assets/Page_responsive.png)](/learn/assets/Page_responsive.png) 

### Responsiveness 
WaveMaker supports responsive design, i.e. the apps are rendered automatically based upon the device they are viewed on. 

### Grid Layout 
The responsiveness of apps is achieved using the 12-column grid layout defined by bootstrap. For more information, see [Grid Layout](/learn/app-development/widgets/container/grid-layout/). 

[![Page_grid](/learn/assets/Page_grid.png)](/learn/assets/Page_grid.png)

### Page Layout
Based on the Page construction system WaveMaker provides different options for Page Layouts, which can be picked based on the interaction required for the app. Depending upon the app platform the layout will differ.

Page Layout can be set at the time of [Page Creation](./page-creation.md) or can be changed from the Workspace Toolbar.

[![](/learn/assets/layout_change.png)](/learn/assets/layout_change.png)

### Web Responsive

Each page can be designed by selecting an appropriate layout and arranging widgets in it which is suitable for web apps. For more information, see [Responsive Web Page Layout](/learn/responsive-web/web-ui-design/).

[![page_layout](/learn/assets/page_layout.png)](/learn/assets/page_layout.png)

### Hybrid Mobile

Similarly for Mobile apps, each page can be designed by selecting an appropriate layout and arranging widgets in it. For more information, see [Hybrid Mobile Page Layout](/learn/hybrid-mobile/mobile-page-concepts/).

[![page_layout_mobile](/learn/assets/page_layout_mobile.png)](/learn/assets/page_layout_mobile.png)

## Reusable Pages

Different page types help achieve consistency and reusability.

### Partial pages

Partial pages are reusable portions of a page and it should be associated with a component within a page. Usually, it is a part of the page which is common across the app like a header or a left navigation, are implemented as a single partial and these can be used across all app pages. For example, profile info, business card, and more. For more information, see [Partial Pages](./page-concepts/partial-pages.md).

### Popover
Popover, also known as pop-up, can be built as a portion of a page, reusable and contains UI elements with data binding (e.g.: drill down details, pop-up menus etc.). These can be built like a partial page, but have pop-up based interaction.

For more information, see [Pages](/learn/app-development/ui-design/page-concepts/).

## Themes 
Themes are style elements which work at the widget or UI component level. For more information, see [Themes](/learn/app-development/ui-design/themes/).

By default, Material Theme is set for Page and can be changed from the Workspace Toolbar.

[![](/learn/assets/theme_change.png)](/learn/assets/theme_change.png)

[![](/learn/assets/theme_concept.png)](/learn/assets/theme_concept.png)

## Templates
Templates are editable pages with content pre-defined for the ease of UI development. For more information, see [Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/).

Templates are selected at the time of Page Creation and cannot be changed later.

[![](/learn/assets/template_concept.png)](/learn/assets/template_concept.png)

## Drag-and-drop development

Pages are designed as a composition of Widgets or UI Elements. Widgets are the building block for any application. Widgets enable users to interact with the App and can get their data (binding) from backend Services.

They can be dropped into the Grids or Containers, making UI well-aligned and ready for consumption. For more information, see [Widgets](/learn/app-development/widgets/ui-elements/).

[![](/learn/assets/widget_concept.png)](/learn/assets/widget_concept.png)





