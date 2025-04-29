---
title: "Pages Concepts"
id: "page-concepts"
---
Introduction to Pages in WaveMaker low-code platform. 

---
An application is a collection of pages. Each page is composed of different UI elements and Widgets. These UI elements enable user interaction with the app and can get data from the backend services. You can be set navigation and interaction rules across pages.

:::tip
To design pages, see the [Design Overview](/learn/app-development/ui-design/design-overview) section.
:::

 You can navigate to the pages section as shown in the image below. 

![Pages introduction in WaveMaker](/learn/assets/pages_introduction.png)

## How Pages work

WaveMaker Pages are built using the drag-n-drop approach, by placing widgets in the corresponding responsive layout grids.  

[![](/learn/assets/UI_design-1.png)](/learn/assets/UI_design-1.png)

## Page Architecture

In this document, you will learn about the following: 

- WaveMaker apps as single-page applications.
- What a typical [page life cycle](#page-life-cycle) of a WaveMaker app looks like.

## WaveMaker as a Single Page Application

Single-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app. This is achieved through a clear separation of front-end and backend through AJAX Service, thus cutting full roundtrip to the server to retrieve new presentation content (HTML) which is common to traditional page life cycle.

[![](/learn/assets/spa_arch.png)](/learn/assets/spa_arch.png)

A WaveMaker application is a single page application(SPA). Though an app is composed of multiple pages, these pages are loaded asynchronously on demand. At a given point of time, a single page is loaded in the browser for the user to see and interact. The structure of the page i.e. header, footer, left nav is retained across pages, causing no jitter.

A **page** can be composed of:

- [Widgets](/learn/app-development/widgets/widget-library) which are loaded as part of the page, or
- [Partial Pages](/learn/app-development/ui-design/page-concepts/partial-pages) as the content of container widgets like Panel, Tabs, Accordion, etc.

## Page Life Cycle

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

## See More
[Creating a page](/learn/app-development/ui-design/page-creation/)  
[Page Cache](/learn/app-development/ui-design/page-concepts/page-cache)  
[Page layouts](/learn/app-development/ui-design/page-concepts/page-layouts/)  
[Templates](/learn/app-development/ui-design/page-concepts/page-templates/)  

