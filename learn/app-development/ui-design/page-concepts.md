---
title: "Page Concepts"
id: "page-concepts"
---
---

WaveMaker apps are a collection of pages. This document talks about

- how WaveMaker apps are [single-page applications](#single-page-apps)
- what a typical [page life cycle](#page-lifecycle) is within the app.

## WaveMaker as a Single Page Application

Single-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app. This is achieved through a clear separation of front-end and backend through AJAX Service, thus cutting full roundtrip to the server to retrieve new presentation content (HTML) which is common to traditional page life cycle.

[![](/learn/assets/spa_arch.png)](/learn/assets/spa_arch.png)

A WaveMaker application is a single page application(SPA). Though an app is composed of multiple pages, these pages are loaded asynchronously on demand. At a given point of time, a single page is loaded in the browser for the user to see and interact. The structure of the page i.e. header, footer, left nav is retained across pages, causing no jitter.

A **page** can be composed of:

- _Widgets_, which are loaded as part of the page, or
- _Partial pages_ as the content of container widgets like Panel, Tabs, Accordion, etc.

# Page Life Cycle

When the request for a page is made, it goes through the following life-cycle:

1. The network request for the page content is made and the Markup, CSS, JavaScript and Variables for the page are loaded.
2. The Markup is then processed and compiled. During Markup compilation, if any Container widget with partial as content is found, then
    1. the resources corresponding to that partial are loaded,
    2. the **onPageReady** callback method in the _partial script_ is invoked. By this time the Widgets and Variables in the partial are loaded and can be accessed in the script. **Note**: the app scoped variables are loaded when the app starts, here we are referring to the page scoped variables alone.
3. The above step is repeated for all the partials and Prefabs found within the page.
4. Once all the partials are loaded, the **onPageReady** callback method in the _page script_ is invoked. At this point, all the Widgets and Variables in the page are ready.
5. Variables, in the page and in the loaded partials, with _Request data on page load_ set to true are triggered at this point. The Variables will not have any data at this point. They are only loaded in memory. The data fetched by these Variables can be accessed in their respective callback methods (_onSuccess_, _onResult_, etc.).

### Flow Diagrams

**Page without any partials or Prefabs** [![page-life-cycle](/learn/assets/Page-Life-Cycle.png)](/learn/assets/Page-Life-Cycle.png) **Page with partials and Prefabs** [![page-life-cycle-full](/learn/assets/Page-Life-Cycle-full.png)](/learn/assets/Page-Life-Cycle-full.png)

We have seen the page life cycle within a WaveMaker app. Work with pages by [page creation](/learn/app-development/ui-design/page-creation/), [page layouts](/learn/app-development/ui-design/page-concepts/page-layouts/), and [page templates](/learn/app-development/ui-design/page-concepts/page-templates/).

< Design Overview

Page Creation >

2\. Design UI

- 2.1 Overview
    - [i. App UI Design](/learn/app-development/ui-design/design-overview/#app-ui-design)
    - [ii. Responsive Design](/learn/app-development/ui-design/design-overview/#responsive-design)
    - [iii. UI Development](/learn/app-development/ui-design/design-overview/#ui-development)
- [2.2 Page Concepts](#)
    - [i. Single Page Apps](#)
    - [ii. Page Life Cycle](#page-lifecycle)
    - [iii. Page Creation](/learn/app-development/ui-design/page-creation/)
    - [iv. Parameter Passing](/learn/app-development/ui-design/page-creation/#page-parameters)
    - [v. Partial Pages](/learn/app-development/ui-design/page-concepts/partial-pages/)
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
