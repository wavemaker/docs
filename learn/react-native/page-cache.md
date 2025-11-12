---
title: "Page Cache"
id: "page-cache"
sidebar_label: "Page Cache"
---
---

When the user navigates from a page to another, the page usually gets destroyed. Instead of destroying the page, if the page instance is stored in _Cache_, then the page instance can be used when the user revisits the same page. This will make page rendering instantaneous in case of revisits.

## Page Lifecycle with Cache Enabled

- **Initialized**: a new page instance is created.
- **Detached**: a page instance is removed and is stored in the _Cache_ for future use.
- **Attached**: a page instance is taken out from _Cache_ and rendered.
- **Destroyed**: a page instance is destroyed completely.

[![Page Lifecycle](/learn/assets/page-cache/page-lifecycle.png)](/learn/assets/page-cache/page-lifecycle.png)

With Page cache enabled, the lifecycle follows this sequence:
1. The page starts with **Initialized**, to render on screen.
2. Navigating to a new page triggers **Detached**, storing the current page's state in _Cache_.
3. Returning to initial page calls **Attached**, restoring it from cached state.
4. Navigating to a previous page using the _Back Button_ triggers **Destroyed**, which removes the page from the _Cache_. If you navigate back using another method (for example, a custom button), the page is not destroyed. Destruction only occurs when the navigation uses the `wm-mobile-navbar` back button or the device back button (Android).
5. If the page is accessed again after destruction, the cycle restarts with **Initialized**.

When Page cache is disabled, the lifecycle is as below:
1. The page begins with **Initialized**, to render on screen.
2. Navigation to a new page from this page, triggers **Destroyed**, removing the page completely.
3. Each time the user returns to the page, it will be reinitialized from scratch.

## Example Use Case

Consider a shopping app with a product list page and a product detail page. Here's how page cache works:

1. User opens the product list page
   - Page is **Initialized**
   - Products load and user scrolls to item #20
   - Search filters and sort preferences are set
   - All this state is maintained in memory

2. User taps product #20 to view details
   - List page is **Detached**
   - Complete page state (scroll position, filters, sort order) is stored in cache
   - Detail page is **Initialized** and displayed

3. User views details then taps back button
   - Detail page is **Destroyed** (removed from cache)
   - List page is **Attached** from cache
   - Page renders instantly with:
     - Scroll position still at item #20
     - Previous search filters intact
     - Sort preferences preserved
     - No need to reload data or reset UI state

4. Without page cache enabled
   - List page would be **Destroyed** instead of Detached
   - Returning would trigger full **Initialization**
   - All previous state would be lost
   - Data would need to be reloaded
   - User would need to scroll and reapply filters

## Events

When page cache is enabled, two lifecycle events are available on a Page: **On Attach** and **On Detach**.

- **On Attach** — triggered when a cached page instance is restored and re-rendered from cache
- **On Detach** — triggered when a page instance is removed and stored in the cache

:::note
`onPageReady` is triggered only when a page instance is initialized. **On Destroy** is triggered when the page instance gets destroyed. The same applies to Partial and Prefab.
:::

## How to Configure Page Cache

Enable or disable page caching in Studio as follows:

1. Open the page in Design mode.
2. Select the Page element using one of these methods:
   - Press the `Esc` key.
   - Select the Page element in the Page Structure section (left panel).
   - Click the Page in the breadcrumb at the bottom of Studio.
3. In the Properties panel, open the Behavior section and toggle Cache on or off.

Note: Cache is enabled by default for all pages.

[![Page Cache in Studio](/learn/assets/react-native/pageCacheStudio.png)](/learn/assets/react-native/pageCacheStudio.png)





