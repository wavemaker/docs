---
sidebar_position: 4
title: How to Build a Custom Widget
description: Extending the platform with custom UI widgets.
---

# How to Build a Custom Widget

When the out-of-the-box widgets aren't enough, build your own.

## Prerequisites

*   Knowledge of HTML, CSS, and JavaScript.
*   Understanding of Angular (since WaveMaker 11 is based on Angular).

## Steps

1.  Use the **Artifacts** dialog to create a new **Formatters** or **Directive**.
2.  For complex UI, it's recommended to wrap a 3rd party library as a **Prefab**.
3.  Alternatively, use the DOM manipulation in the `onPageReady` script (not recommended for reusability).

## Using 3rd Party Libraries

You can import external JS and CSS files via **Project Settings** > **Resources**.
