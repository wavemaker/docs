---
title: "Migrating Image Component to Expo Image"
author: "Ankur Jyoti Das"
---
---

When building modern mobile apps, image handling plays a crucial role in user experience and performance. Whether it's a social feed, media gallery, or product listing—rendering images efficiently can make or break your app’s smoothness.

In this post, we’ll compare the Old Image Component (React Native's default Image) with the Enhanced Image Component (expo-image)—a high-performance image solution introduced by Expo.

<!-- truncate -->

## Why This Matters

The Old Image Component in React Native works well for simple use cases, but as your app scales, you’ll start noticing slow rendering, janky scrolling, and inconsistent caching. That’s where the enhanced image component steps in—with native-level performance, better caching, and memory efficiency.

### Caching

**Old Image Component**

- Offers minimal caching.
- May result in repeated downloads, increasing data usage.

**Enhanced Image Component**

- Supports configurable caching strategies: memory, disk, memory-disk.
- Supports blurhash/thumbhash placeholders for low-res previews during loading.
Result: Up to 60% reduction in network requests thanks to smart disk caching.


### Memory Usage

**Old Image Component**

- Limited memory management.
- May cause memory spikes or crashes in image-heavy apps.

**Enhanced Image Component**

- Proactive memory management with automatic cache purging.
- Optimized for FlatList and virtualized lists.

:::impact

 Up to 40% lower memory footprint observed in production apps.

:::


### Performance

**Old Image Component**
- Relies heavily on the JavaScript thread for image decoding and rendering.
- Causes UI lag when rendering many or large images.

**Enhanced Image Component**

- Offloads decoding to native modules like SDWebImage (iOS) and Glide (Android).
- Enables smooth, consistent rendering even in image-heavy interfaces.

Key Metric: Apps using expo-image report 30–50% faster image rendering in lists and galleries, especially on mid-range Android devices.



## Quick Comparison

| Feature | Old Component | New Component |
| ----- | ---- | --- |
| Performance | Moderate, JS-thread bound | Native-level, smooth |
| Caching | Minimal, non-configurable | Memory / Disk, configuration will be made available in subsequent releases |
| Memory Usage | High in image-heavy apps | Optimized with auto cleanup |
| Platform Consistency | Inconsistent | Uniform across iOS, Android, Web |

## Summary

If your app involves displaying a lot of images—be it a media feed, marketplace, or messaging app—the Enhanced Image Component is a clear upgrade. It’s not just about faster load times, it’s about a better user experience, lower memory consumption, and reduced data usage.

With the enhanced image component in WaveMaker, you can deliver a snappier, more reliable image experience, especially on lower-end devices or slower networks.