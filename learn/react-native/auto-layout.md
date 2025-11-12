---
title: "Auto Layout"
id: "auto-layout"
sidebar_label: "Auto Layout"
---
---

import AutolayoutPlayground from '@site/src/components/autolayout/AutolayoutPlayground';
import addingWidgetsToAutolayout from '/learn/assets/autolayout/web/addingWidgetsToAutolayout.mp4';
import addingWidgetsToContainer from '/learn/assets/autolayout/web/addingWidgetsToContainer.mp4';
import autolayoutWrap from '/learn/assets/autolayout/web/autolayoutWrap.mp4';
import autolayoutDirection from '/learn/assets/autolayout/web/autolayoutDirection.mp4';
import autolayoutWidth from '/learn/assets/autolayout/web/autolayoutWidth.mp4';
import autolayoutAlignment from '/learn/assets/autolayout/web/autolayoutAlignment.mp4';
import autolayoutGap from '/learn/assets/autolayout/web/autolayoutGap.mp4';
import autolayoutRowGap from '/learn/assets/autolayout/web/autolayoutRowGap.mp4';
import autolayoutPadding from '/learn/assets/autolayout/web/autolayoutPadding.mp4';

<AutolayoutPlayground/>

Auto Layout is a smart, flexible system that automatically manages the positioning, sizing, and spacing of widgets. It enables you to create clean, responsive layouts without writing lots of CSS or managing complex hierarchies.

Inspired by principles of modern web layout systems like CSS Flexbox, Auto Layout lets you organize widgets along a main axis—horizontal (row) or vertical (column) and control their alignment, distribution, and spacing through simple, visual configuration options in the Studio.

## A Content-First Approach

Auto Layout enables a content-first way of building layouts. Instead of starting with empty structural containers and then manually placing widgets inside them, you can begin with your content, the widgets themselves and let the layout structure form automatically around it.

Simply select the widgets you want to group and apply Auto Layout with one click. The system wraps them in a clean Container that manages spacing, alignment, and direction for you. This results in:

- Simpler, flatter structures with fewer nested elements, making your widget tree cleaner and easier to maintain
- Responsive behavior without manual CSS adjustments

This approach makes it faster to design, modify, and maintain complex interfaces while keeping your structure intuitive and clutter-free.

## Using Auto Layout

### Content First

<video 
    src={addingWidgetsToAutolayout}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>


### Container First

<video 
    src={addingWidgetsToContainer}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>

## Auto Layout Properties

### Direction

<video 
    src={autolayoutDirection}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>

### Wrap

<video 
    src={autolayoutWidth}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>

### Width & Height

<video 
    src={autolayoutWidth}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>

### Alignment

<video 
    src={autolayoutAlignment}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>

### Gap

<video 
    src={autolayoutGap}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>

### Column/Row Gap

<video 
    src={autolayoutWidth}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>

### Padding

<video 
    src={autolayoutPadding}
    autoPlay 
    loop 
    controls 
    style={{width: "100%", height: "auto"}} 
/>
