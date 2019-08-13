---
title: "Page Concepts"
id: "page-concepts"
---

WaveMaker apps are a collection of pages. This document talks about

- WaveMaker apps are [\-page applications](#single-page-apps)
- a typical [life cycle](#page-lifecycle) is within the app.

## as a Single Page Application

\-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app. This is achieved through a clear separation of front-end and backend through AJAX Service, thus cutting full roundtrip to the server to retrieve new presentation content (HTML) which is common to traditional page life cycle.

[![](../assets/spa_arch.png)](../assets/spa_arch.png)

WaveMaker application is a single page application(SPA). Though an app is composed of multiple pages, these pages are loaded asynchronously on demand. At a given point of time, a single page is loaded in the browser for the user to see and interact. The structure of the page i.e. header, footer, left nav is retained across pages, causing no jitter.

A be composed of:

- , which are loaded as part of the page, or
- _pages_ as the content of container widgets like Panel, Tabs, Accordion, etc.

# Life Cycle

the request for a page is made, it goes through the following life-cycle:

1. network request for the page content is made and the Markup, CSS, JavaScript and Variables for the page are loaded.
2. Markup is then processed and compiled. During Markup compilation, if any Container widget with partial as content is found, then
    1. resources corresponding to that partial are loaded,
    2. callback method in the _script_ is invoked. By this time the Widgets and Variables in the partial are loaded and can be accessed in the script. : the app scoped variables are loaded when the app starts, here we are referring to the page scoped variables alone.
3. above step is repeated for all the partials and Prefabs found within the page.
4. all the partials are loaded, the callback method in the _script_ is invoked. At this point, all the Widgets and Variables in the page are ready.
5. , in the page and in the loaded partials, with _data on page load_ set to true are triggered at this point. The Variables will not have any data at this point. They are only loaded in memory. The data fetched by these Variables can be accessed in their respective callback methods (, , etc.).

### Diagrams

**without any partials or Prefabs** [![page-life-cycle](../assets/Page-Life-Cycle.png)](../assets/Page-Life-Cycle.png) ** with partials and Prefabs** [![page-life-cycle-full](../assets/Page-Life-Cycle-full.png)](../assets/Page-Life-Cycle-full.png)

We have seen the page life cycle within a WaveMaker app. Work with pages by [creation](/learn/app-development/ui-design/page-creation/), [layouts](/learn/app-development/ui-design/page-concepts/page-layouts/), and [templates](/learn/app-development/ui-design/page-concepts/page-templates/)

< Design Overview

Creation >

2\. Design UI

- 2.1 Overview
    - [App UI Design](/learn/app-development/ui-design/design-overview/#app-ui-design)
    - [Responsive Design](/learn/app-development/ui-design/design-overview/#responsive-design)
    - [UI Development](/learn/app-development/ui-design/design-overview/#ui-development)
- [2.2 Page Concepts](#)
    - [Single Page Apps](#)
    - [Page Life Cycle](#page-lifecycle)
    - [Page Creation](/learn/app-development/ui-design/page-creation/)
    - [Parameter Passing](/learn/app-development/ui-design/page-creation/#page-parameters)
    - [Partial Pages](/learn/app-development/ui-design/page-concepts/partial-pages/)
    - vi. Page Basics
        - [Page Layouts](/learn/app-development/ui-design/page-concepts/page-layouts/#page-layouts)
        - [Page Navigation](/learn/app-development/ui-design/page-concepts/page-layouts/#page-navigation)
        - [Events](/learn/app-development/ui-design/page-concepts/page-layouts/#events)
            - [Event Categorization](/learn/app-development/ui-design/page-concepts/page-layouts/#event-categorization)
            - [Multiple Event Handling](/learn/app-development/ui-design/page-concepts/page-layouts/#multiple-events)
    - [Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/)
        - [ Custom Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/#creating-page-templates)
    - [Use Cases](/learn/app-development/ui-design/use-cases-ui-design/)
- [2.3 Project Shell](/learn/app-development/ui-design/project-shells/)
- 2.4 Page Artefacts
    - [Overview](/learn/app-development/ui-design/page-artefacts/)
    - [Markup](/learn/app-development/ui-design/page-artefacts/#page-markup)
    - [Script](/learn/app-development/ui-design/page-artefacts/#page-script)
    - [Style](/learn/app-development/ui-design/page-artefacts/#page-style)
- 2.5 Themes
    - [Overview](/learn/app-development/ui-design/themes/)
    - [Applying Theme](/learn/app-development/ui-design/themes/#apply-theme)
    - [Importing Theme](/learn/app-development/ui-design/themes/#import-theme)
    - [Creating Themes](/learn/app-development/ui-design/themes/#create-theme)
        - [Creating Web Theme](/learn/app-development/ui-design/themes/#create-theme-web)
        - [Creating Web Theme using Bootswatch](/learn/app-development/ui-design/themes/#create-theme-bootswatch)
        - [Creating Mobile Theme](/learn/app-development/ui-design/themes/#create-theme-mobile)
    - [Building Theme](/learn/app-development/ui-design/themes/#build-theme)
    - [Testing Theme](/learn/app-development/ui-design/themes/#test-theme)
