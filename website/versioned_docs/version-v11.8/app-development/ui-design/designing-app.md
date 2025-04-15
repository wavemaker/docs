---
title: "Pages Overview"
id: "designing-app"
sidebar_label: "Pages Overview"
---
---

WaveMaker app is a collection of pages. Pages load asynchronously on demand. Each page is composed of different UI elements and [widgets](/learn/app-development/widgets/widget-library). These UI elements enable user interaction and get data from the backend services. You can set navigation and interaction rules across pages.

:::tip
To learn about page life cycle and architecture, see [Page Concepts](/learn/app-development/ui-design/page-concepts). To learn about widgets, see [Widgets Library](/learn/app-development/widgets/widget-library).
:::

Navigate to the pages section to create a page. By default, the project generates a **Main** automatically.  

![Pages introduction in WaveMaker](/learn/assets/pages_introduction.png)

## Main page

The Main page comes with header, footer, top nav, left nav and right nav layout. You can change the layout can as per your needs. For more information, see [Layouts](/learn/app-development/ui-design/page-concepts/page-layouts).

Each element of the page layout - header, footer, topnav, leftnav and rightnav can be edited and customized. The change will reflect in all pages that use the same element. Thus, it gives a unified look across all pages in the app.

When you are editing, WaveMaker effectively generates the HTML code. You can access the code from the markup tab.

[![screenshot](/learn/assets/page_layout_edit.png)](/learn/assets/page_layout_edit.png)

## Types of Pages

There are two types of pages that can be created in an application:

1. **Page** – which can be loaded independently in the application. These act as a route within the application when associated with navigation events.
2. **Partial** - these have to be associated with a component within a page. Usually, a part of the page which is common across the app like a header or a left navigation, are implemented as a single partial and used across all app pages.
3. **Popover** - Popover, also known as pop-up, can be built as a portion of a page, reusable and contains UI elements with data binding (e.g.: drill down details, pop-up menus etc.). These can be built like a partial page, but have pop-up based interaction.

## Page Title

By default, WaveMaker provides the Main Page. When you add additional pages, it titles the pages as Page1, Page2, and so on. You can use the Page Title property to set the Page Title.

[![screenshot](/learn/assets/page_title.png)](/learn/assets/page_title.png)

You can use Page.pageTitle to change and access the page title. You can set the Page Title from Script tab using: Page.pageTitle = 'Profile'. Once set through Script any binding from the properties will be invalidated.

## Page Operations

You can duplicate, rename and delete a page using the page operations. These can be accessed from the more options against a given page or a partial page.

[![page_operations](/learn/assets/page_operations.png)](/learn/assets/page_operations.png)

- **Renaming** a page or a partial page leads to the page name being renamed, with the new name given by you. All the references are also renamed.
- **Duplicating** a page leads to a copy of the page or partial page being created, with the new name given by you. A new goTo action for that page is also created.
- **Deleting** a page removes all references to the selected page from the project.
