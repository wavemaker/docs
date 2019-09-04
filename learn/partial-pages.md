---
title: "Partial Pages"
id: ""
---

A part of the page which is common across the app like a header or a left navigation can be implemented as a single partial and used across all app pages. These partial pages have to be associated with a component within a page. Here we will be seeing where partial pages can be used, how to create the same and the various types of partial pages available.

The partial pages are loaded asynchronously on the page. Partial pages are loaded on-demand when the content is required to be rendered. For example, if the tabs are loading partial content, then the partial content will be loaded only on the visible tab.

**Partials** are useful for the following reasons:

- In selecting a template which is designed for a particular purpose. For example, header template can be used for header type of partial.
- In allowing us to select a partial for a component/widget. For example, a left panel can include only partial of type leftnav.
- In styling the components specific to the context. For example, links in the left panel should look different from the ones in the right panel.

Partial Pages are created like Pages and can be designed similar to any other Page.

[![](./assets/partial_page.png)](./assets/partial_page.png)

# Types of Partials

Partials can be further sub-categorised as:

- **Default** comes without any layout;
- **Header** which can be used to include logo, app name, search bar;
- **Topnav** which can be used for navigation purpose to be placed at the top of the page, below header;
- **Leftnav** which can be used for navigation purpose to be placed on the left of the page;
- **Rightnav** which can be used for navigation purpose to be placed on the right of the page;
- **Footer** to have the copyright and other information at the bottom of page;
- **Popover** to be used to display notifications on click of an anchor widget.
- For Hybrid Mobile, the available options are - partial or default, leftnav and popover.

We have seen how common parts of pages can be developed using Partial pages. Learn how [page layouts](/learn/app-development/ui-design/page-concepts/page-layouts/) help associate these with a component within the pages.

< Page Creation

Page Basics >

 2. Design UI

- 2.1 Overview
    - [i. App UI Design](/learn/app-development/ui-design/design-overview/#app-ui-design)
    - [ii. Responsive Design](/learn/app-development/ui-design/design-overview/#responsive-design)
    - [iii. UI Development](/learn/app-development/ui-design/design-overview/#ui-development)
- [2.2 Page Concepts](/learn/app-development/ui-design/page-concepts/)
    - [i. Single Page Apps](/learn/app-development/ui-design/page-concepts/)
    - [ii. Page Life Cycle](/learn/app-development/ui-design/page-concepts/#page-lifecycle)
    - [iii. Page Creation](/learn/app-development/ui-design/page-creation/)
    - [iv. Parameter Passing](/learn/app-development/ui-design/page-creation/#page-parameters)
    - [v. Partial Pages](#)
    - vi. Page Basics
        - [○ Page Layouts](/learn/app-development/ui-design/page-concepts/page-layouts/#page-layouts)
        - [○ Page Navigation](/learn/app-development/ui-design/page-concepts/page-layouts/#page-navigation)
        - [○ Events](/learn/app-development/ui-design/page-concepts/page-layouts/#events)
            - [● Event Categorization](/learn/app-development/ui-design/page-concepts/page-layouts/#event-categorization)
            - [● Multiple Event Handling](/learn/app-development/ui-design/page-concepts/page-layouts/#multiple-events)
    - [vii. Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/)
        - [○ Custom Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/#creating-page-templates)
    - [viii. Use Cases](/learn/app-development/ui-design/use-cases-ui-design/)
- [2.3 Project Shell](/learn/app-development/ui-design/project-shells/)
- 2.4 Page Artefacts
    - [i. Overview](/learn/app-development/ui-design/page-artefacts/)
    - [ii. Markup](/learn/app-development/ui-design/page-artefacts/#page-markup)
    - [iii. Script](/learn/app-development/ui-design/page-artefacts/#page-script)
    - [iv. Style](/learn/app-development/ui-design/page-artefacts/#page-style)
- 2.5 Themes
    - [i. Overview](/learn/app-development/ui-design/themes/)
    - [ii. Applying Theme](/learn/app-development/ui-design/themes/#apply-theme)
    - [iii. Importing Theme](/learn/app-development/ui-design/themes/#import-theme)
    - [iv. Creating Themes](/learn/app-development/ui-design/themes/#create-theme)
        - [○ Creating Web Theme](/learn/app-development/ui-design/themes/#create-theme-web)
        - [○ Creating Web Theme using Bootswatch](/learn/app-development/ui-design/themes/#create-theme-bootswatch)
        - [○ Creating Mobile Theme](/learn/app-development/ui-design/themes/#create-theme-mobile)
    - [v. Building Theme](/learn/app-development/ui-design/themes/#build-theme)
    - [vi. Testing Theme](/learn/app-development/ui-design/themes/#test-theme)
