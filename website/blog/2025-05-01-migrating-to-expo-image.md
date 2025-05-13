---
title: "Migrating Picture Component to Expo Image"
author: "Ankur Jyoti Das"
---
---

When building modern mobile apps, image handling plays a crucial role in user experience and performance. Whether it's a social feed, media gallery, or product listing—rendering images efficiently can make or break your app’s smoothness.

In this post, we’ll compare and understand why Enhanced Picture Component over the Old Picture Component. 

<!-- truncate -->

**Old Picture Component:** Based on React Native's built-in Image component.
**Enhanced Image Component:** Built on Expo’s expo-image, a high-performance image solution introduced by Expo.

## Why This Matters

The old Picture component works well for basic use cases. However, as your app grows, you may start to notice slow rendering, janky scrolling, and limited caching capabilities. That’s where the Enhanced Image Component comes in—offering native-level performance, smarter caching, and better memory efficiency.

Below is a comparison of the Old and Enhanced Picture components across key areas:

- Caching
- Memory Usage
- Performance


### Caching

**Old Picture Component**

- Offers minimal caching.
- May result in repeated downloads, increasing data usage.

**Enhanced Picture Component**

- Supports configurable caching strategies: memory, disk, memory-disk.
- Supports blurhash/thumbhash placeholders for low-res previews during loading. 

:::impact

Up to 60% reduction in network requests thanks to smart disk caching.

:::


### Memory Usage

**Old Picture Component**

- Limited memory management.
- May cause memory spikes or crashes in image-heavy apps.

**Enhanced Picture Component**

- Proactive memory management with automatic cache purging.
- Optimized for FlatList and virtualized lists.

:::impact

 Up to 40% lower memory footprint observed in production apps.

:::


### Performance

**Old Picture Component**
- Relies heavily on the JavaScript thread for image decoding and rendering.
- Causes UI lag when rendering many or large images.

**Enhanced Picture Component**

- Offloads decoding to native modules like SDWebImage (iOS) and Glide (Android).
- Enables smooth, consistent rendering even in image-heavy interfaces.

:::impact

Apps using expo-image report 30–50% faster image rendering in lists and galleries, especially on mid-range Android devices.

:::



## Old Picture Component vs New Picture Component

To understand better, you can find the quick comparison between Old and New Picture component below.

| Feature | Old Component | New Component |
| ----- | ---- | --- |
| Performance | Moderate, JS-thread bound | Native-level, smooth |
| Caching | Minimal, non-configurable | Memory / Disk, configuration will be made available in subsequent releases |
| Memory Usage | High in image-heavy apps | Optimized with auto cleanup |
| Platform Consistency | Inconsistent | Uniform across iOS, Android, Web |

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/6fopi62kubEkcEt5idSJ67"
    title="Migrating to Expo Image"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

## Summary

If your app involves displaying a lot of images—be it a media feed, marketplace, or messaging app—the Enhanced Image Component is a clear upgrade. It’s not just about faster load times, it’s about a better user experience, lower memory consumption, and reduced data usage.

With the enhanced image component in WaveMaker, you can deliver a snappier, more reliable image experience, especially on lower-end devices or slower networks.