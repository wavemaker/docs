---
title: "Page Cache"
id: "page-cache"
---
---

When the user navigates away from a page, the page usually gets destroyed. Instead of destroying the page, if the page instance is stored in Cache, then the page instance can be used when the user revisits the same URL. This will make page rendering instantaneous in case of revisits.

In the [10.6.0 release](/learn/wavemaker-release-notes/v10-6-0), WaveMaker implemented this strategy and introduced a new property called Cache at the page level. By default, the Cache property is disabled. Below, the Cache feature is explained in detail with a use case.

## Usecase

Let's take the case where an app has two pages:

1) `Page1` 
2) `Page2`

For example, Cache is enabled on `Page1`, and Cache is disabled on `Page2`. As the user navigates in the app, states of page instances are depicted in the following table.

### Labels

**Initialized**: a new page instance is created.  
**Attached**: a page instance is taken out from Cache and attached to dom.  
**Detached**: a page instance is removed from DOM and is stored in the Cache for future use.  
**Destroyed**: a page instance is destroyed completely.  
**Page1 - n**: nth instance of page1.  
**Page2 - n**: nth instance of page2.  

|Step|User navigated to|Initialized|Attached|Detached|Destroyed|
|-|-|-|-|-|-|
|1|#/Page1?param=value1| Page1 - 1 ||||
|2|#/Page2| Page2 - 1 | |Page1 - 1 ||
|3|#/Page1?param=value2| Page1 - 2 | | |Page2 - 1 |
|4|#/Page2| Page2 - 2 | | Page1 - 2| |
|5|#/Page1?param=value1| | Page1 - 1 | | Page2 - 2|
|6|#/Page1?param=value2| | Page1 - 2 |Page1 - 1||

- In Cache, a page instance is mapped against the page name and its parameters (the order of parameters is not considered). As param value is changed in steps 1 and 2, two different instances of the same page are created.
- As the user moves from Page1, Page1 instances are added to the Cache (see steps 2, 4, 6). When the user comes back to the same Page1 URL, the cached page1 instance corresponding to the URL is rendered (see steps 5, 6).
- As Cache is disabled on Page2, Page2 instances are destroyed when the user navigates from the Page2 (see steps 3, 5).

## Page Instance Lifecycle

[![marked in red](/learn/assets/page-cache/page-lifecycle.png)](/learn/assets/page-cache/page-lifecycle.png)

## How to Enable Cache

1. Open the page in Design mode.
2. Select the page element. the page element can be selected by pressing 'ESC' button or from Page Structure, or from the bread crumb at the bottom of the WYSWYG editor.
3. Cache flag is shown in the properties panel on the right side.

[![marked in red](/learn/assets/page-cache/page-cache.png)](/learn/assets/page-cache/page-cache.png)

## Events

Two events including **On Attach** and **On Detach** are added. The **On Attach** event gets triggered when a page instance is retrieved from Cache and added to the DOM tree. The **On Detach** event gets triggered when a page instance is removed from DOM and added to the Cache.

In Studio, these events are visible on the page level, only if *Cache* is enabled. In case of partial or prefab, these events are always visible.

:::note
`onPageReady` is triggered only when a page instance is initialized. **On Destroy** is triggered when the page instance gets destroyed. The same applies to Partial and Prefab.
:::

## Data refresh

A cached page may have data that needs to be refreshed. You can use the following options to refresh data.

1. A property **Refresh data on attach** is added at the page level. If this flag is true, and the cached page instance is shown, then all start-up variables that have enabled **load data on page startup** of the page are invoked. If there are partials and prefabs in a page, then startup variables of partials and prefabs are also invoked. By default, this flag is set to true.

2. You can use **On Attach** event to refresh data by invoking the required variables.

## Cache Characteristics

1. A page instance is stored in the cache for a maximum of 30 minutes. Age of page instance is reset to zero after each revisit.
2. Cache can store a maximum of *10-page* instances. When the Cache is full and a new instance is added, then the page instance of the longest age is removed.
3. When the user logs out, or session expires, all cached page instances are destroyed.

## Recommended Usage

As page instances are stored in memory, the memory usage of the app increases. Eventually, the app may not respond and may crash. So, there is a limit of 10 (which can be changed in the future) page instances to store in Cache. So, you should enable cache, only on those pages that their app user frequently revisits. After enabling Cache, you should check about data getting refreshed on revisit. If required, make appropriate changes as explained in the [Data Refresh](#data-refresh) section.
