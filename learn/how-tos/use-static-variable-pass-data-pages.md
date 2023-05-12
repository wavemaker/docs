---
title: "Use Static Variable to pass data between pages"
id: "use-static-variable-pass-data-pages"
---
---

Apart from using [Page Parameters](/learn/app-development/ui-design/page-concepts/), data can be passed between pages using app-level variables. In this section, we see how to use Model Variable to pass data between pages.

## Use Case

- A page displaying a List of Customers.
- On Click of a List Item should navigate to another page with the selected list item values.

## Solution

- Create a app-scoped variable with desired structure (we are creating a Model Variable based on Employee entity)
- Populate the above variable before navigating to next page.

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQpVPAdWUFq4nn4-f3sbyG4d038IBKrpM5m61Lh6dFYitEU8EEJPbZAhGIZ1ojaaOBVvb72wph6VTjV/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
