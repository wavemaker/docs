---
title: "Page Cache"
id: ""
---

When user navigates away from a page, page gets usually destroyed. Instead of destroying the page, if the page instance is stored in cache, then the page instance can be used when user revisits the same url. This will make page rendering instantaneous in case of revisits. In 10.6.0 release, WaveMaker implemented this strategy and introuced a new property called 'cache' at the page level. By default, cache property is disabled. Below, cache feature is explained in-detail with a usecase. 

<!--truncate-->

## Usecase

Lets take the case where an app has two pages, 1) Page1 and 2) Page2. Let us suppose, cache is enabled on Page1 and cache is disabled on Page2. As user navigates in the app, states of page instances is depicted in the following table.

#### Labels

**Initialized**: a new page instance is created<br>
**Attached**: a page instance is taken out from cache and attached to dom.<br>
**Detached**: a page instance is removed from DOM and is stored in cache for future use.<br>
**Destroyed**: a page instance is destroyed completly.<br>
**Page1 - n**: nth instance of page1.<br>
**Page2 - n**: nth instance of page2.<br>

|step|user navigated to|Initialized|Attached|Detached|Destroyed|
|-|-|-|-|-|-|
|1|#/Page1?param=value1| Page1 - 1 ||||
|2|#/Page2| Page2 - 1 | |Page1 - 1 ||
|3|#/Page1?param=value2| Page1 - 2 | | |Page2 - 1 |
|4|#/Page2| Page2 - 2 | | Page1 - 2| |
|5|#/Page1?param=value1| | Page1 - 1 | | Page2 - 2|
|6|#/Page1?param=value2| | Page1 - 2 |Page1 - 1||

- In cache, a page instance is mapped against the page name and its parmeters (Order of parameters is not considered). As param value is changed in steps 1 and 2, two different instances of the same page are created.
- As user moves from Page1, Page1 instances are added to the cache (see step 2, 4, 6). When user comes back to the same Page1 url, cached page1 instance corresponding to the url is rendered (see step 5, 6).
- As cache is disabled on Page2, Page2 instances are destoyed when User navigates from Page2 (see step 3, 5). 

## Page Instance Lifecycle

[![marked in red](/learn/assets/page-cache/page-lifecycle.png)](/learn/assets/page-cache/page-lifecycle.png)

## How to enable cache
1. Open page in design mode.
2. Select page element. Page element can be selected by pressing 'ESC' button or from Page Structure or from bread crumb at the bottom of WYSWYG editor.
3. Cache flag is shown in the properties panel at the right side.

[![marked in red](/learn/assets/page-cache/page-cache.png)](/learn/assets/page-cache/page-cache.png)

## Events

There are two events 'on attach' and 'on detach' are added. 'On Attach' event gets triggered when a page instance is retrieved from cache and added to the DOM tree. 'On Detach' event gets triggered when a page instance is removed from DOM and added to the cache.

In Studio, these events are visible on page level, only if 'cache' is enabled. In case of partial or prefab, these events are always visible.

**NOTE:** onPageReady is triggered only when a page instance is initialized. 'On Destroy' is triggered when the page instance gets destroyed. Same applies for Partial and Prefab.

## Data refresh

A cached page may have data that needs to refreshed. One can use the following options to refresh data.

1. A property 'Refresh data on attach' is added at the page level. If this flag is true and cached page instance is shown, then all start-up variables (that have 'load data on page startup' turned on) of the page are invoked. If there are partials and prefabs in a page, then startup variables of partials and prefabs are also invoked. By default this flag is set to true.

2. One can use 'on attach' event to refresh data by invoking the required variables.

## Cache characteristics

1. A page instance is stored in the cache for a maximum of 30 minutes. Age of page instance is reset to zero after each revisit.
2. Cache can store a maximum of 10 page instances. When the cache is full and a new instance is added, then the page instance with longest age is removed.
3. When user logs out or session expires, all cached page instances are destroyed.

## Recommended Usage

As page instances are stored in memory, memory usgae of the app increases. Eventually, app may not respond and may crash. So, there is a limit of 10 (may be changed in future) page instances to store in cache. So, one has to enable cache, only on those pages that their app user frequently revisits. After enabling the cache, one has to check for data getting refreshed on revisit. If required, make appropriate changes as explained in data refresh section.
