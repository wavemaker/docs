---
title: "Page Layout"
id: "page-layouts"
---
---

An app is divided into multiple pages to segregate the functionality of the app. Various aspects of a Page are used to unite these segregated functionalities to form an app flow. In this document we will discuss:

- [Page Layouts](#page-layouts) as tool to demarcate the page into components and give a unified look across pages
- [Page Navigation](#page-navigation) to aid user to move from one page to another
- [Events](#events) to capture define actions for user interactions and other incidents.

## Introduction

**Page Layouts** help you design the structure of the page by demarcating the header, footer, navigation and one or more content columns. Based on the Page construction system WaveMaker provides different options for Page Layouts, which can be picked based on the interaction required for the app. Depending on the app platform - web or mobile, the layout will differ. Here we will be discussing web platform, for mobile platform [refer here](/learn/hybrid-mobile/mobile-page-concepts/). Page

A layout can be selected at the time of Page Creation or later from the Change Layout option on the Workspace Toolbar.

[![](/learn/assets/layout_change.png)](/learn/assets/layout_change.png)

A **Page Layout** has the following containers - a header, navigation bar, content, and footer. The content can have one, two or three columns. To change the layout of a page, simply click on the desired layout to see it take effect on the design canvas.

[![](/learn/assets/page_layout.png)](/learn/assets/page_layout.png)

There are four Page Layout options:

- **Blank Layout** - without any header or a footer.
- **Header, content, and footer**: The content along with a header and a footer.
- **Header, topnav, content and footer**: The content along with a header, a footer, and a top navigation bar.
- **Header, content, leftnav and footer**: The content along with a header, a footer, and a left navigation bar.
- **Header, topnav, leftnav, content, and footer**: The content along with a header, a footer and a top and left navigation bar.
- **Header, leftnav, content, rightnav and footer**: The content along with a header, a footer and a left and right navigation bar.
- **Header, topnav, leftnav, content, rightnav and footer**: The content along with a header, a footer and a top, left and right navigation bar.

A typical page layout with header, footer, topnav, leftnav and rightnav has the following structure, as can be seen from the _Page Structure_ for the selected page:

[![](/learn/assets/page_layout_files.png)](/learn/assets/page_layout_files.png)

Widgets can be added to the _content._ The header, footer, top-nav, left and right panels are partial pages and can be customized using the edit button on each of the panels.

**Note**: WaveMaker automatically adjusts the layout rendering for mobile devices.

### Container Widgets

You can use the **Container Widgets** to arrange the widgets on a web page. [Know more](/learn/app-development/widgets/widget-library/#container).

