---
title: "WaveMaker Youtube Prefab"
id: ""
sidebar_label: "Youtube"
---
---

![](/learn/assets/youtube-prefab.gif)


## Functionality

**Youtube** prefab ships with WaveMaker and it connects with Youtube player to display a video on the web page.

## How to configure Youtube Prefab

1. Drag and drop the **Youtube** prefab on the page of your application.

![youtube prefab](/learn/assets/youtube-prefab.png)

2. Set the properties for **Youtube URL**, **Width**, **Height** from the **[Properties panel](#properties)**.
    
![youtube properties](/learn/assets/youtube_props.png)

3. **Save** and **Run** the project. You will see that the video is now embedded on the page in a container with specified height and width.

## Properties

|Properties| Description |
|---|---|
|**Name**| The name is a unique identifier for your widget. Each page element and component must be uniquely identified. WaveMaker automatically renames any non-unique element. Special characters and spaces are not allowed in widget name.|
|**Youtube URL** | This property defines the youtube video link url attribute for the youtube prefab. This url specifies the location where the video can be found. |
|**Allow Full Screen** |This property defines whether the video to be displayed in full screen. |
|**Width**| The width of your widget can be specified in px or % (i.e 50px, 75%). |
|**Height** | The height of your widget can be specified in px or % (i.e 50px, 75%). |
|**Show** | Showing determines whether or not a component is visible. A page element that is not showing has its css display style set to none; it is still a part of the DOM model of the page, but no longer affects the layout of other components.  |
|**Animation** | This property controls the animation of an element. The animation is based on the css classes and works only in the run mode. |

## Events Published by prefab

## Download the prefab

Prefab ships with the WaveMaker Studio. Therefore, no download required.
