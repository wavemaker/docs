---
title: "Partial Page"
id: "partial-pages"
---
---
A part of the page which is common across the app like a header or a left navigation can be implemented as a single partial and used across all app pages. These partial pages have to be associated with a component within a page. Here we will be seeing where partial pages can be used, how to create the same and the various types of partial pages available.

The partial pages are loaded asynchronously on the page. Partial pages are loaded on-demand when the content is required to be rendered. For example, if the tabs are loading partial content, then the partial content will be loaded only on the visible tab.

**Partials** are useful for the following reasons:

- In selecting a template which is designed for a particular purpose. For example, header template can be used for header type of partial.
- In allowing us to select a partial for a component/widget. For example, a left panel can include only partial of type leftnav.
- In styling the components specific to the context. For example, links in the left panel should look different from the ones in the right panel.

Partial Pages are created like Pages and can be designed similar to any other Page.

**Step-1**: Choose the template for partial.
[![](/learn/assets/partial_page_step1.png)](/learn/assets/partial_page_step1.png)

**Step-2**: Name your partial and create.
[![](/learn/assets/partial_page_step2.png)](/learn/assets/partial_page_step2.png)

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

