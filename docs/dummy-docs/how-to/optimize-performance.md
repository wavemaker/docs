---
sidebar_position: 7
title: How to Optimize Performance
description: Tips for making your WaveMaker app faster.
---

# How to Optimize Performance

## Best Practices

1.  **minimize Prefabs**: Only load what you need.
2.  **Pagination**: Always use pagination for Data Tables and Lists instead of loading all records.
3.  **On-Demand Loading**: Load "heavy" content (like large images or charts) only when they scroll into view.

## Network

*   Enable **GZIP** compression on your server.
*   Use a **CDN** for static assets.
*   Optimize image sizes.
