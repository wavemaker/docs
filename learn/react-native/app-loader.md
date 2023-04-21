---
title: "Application Loader"
id: "app-loader"
sidebar_label: "App Loader"
---
---

:::note
WaveMaker 11.3 brings some new design capabilities to include in your React Native mobile app. 
:::

Using Application Loader, you can show page loading animation in your React Native app. Application Loaders render at the time of loading application data, i.e., when the app triggers an API call. There are two types of Application Loaders that WaveMaker supports. 

1. [Skeleton Loader](#skeleton-loader)
2. [Progress Loader](#progress-loader)

## Skeleton Loader

Skeleton Loader is an animated placeholder that automatically adapts to the page layout and content. When API call is made, Skeleton Loader creates an animation of the page structure, such as blocks, images, text, and more. This enables seamless transition on the page and data, preparing users get idea of the page format when data loads.

Skeleton Loader uses Widget's size and styles to match with the theme. Furthermore, you can customize Skeleton Loader styles and colors through code.

Skeleton Loader is enabled by default when creating an application. To change the loader type, go to the **Project Settings** dialog and choose a different type of **Application Loader**, as shown in the image below.

![Application-Loader](/learn/assets/appLoaders.gif)

### Variable Settings

When the Variable Spinner context is selected as a Page, all Widgets on the page show a Skeleton Loader type. 

Initially, the feature displays animation for variables used on the Main Page . Thereafter, pages will show animation for the Page-level Variables spinner context option. 

### Adding Skeleton Loader to a Widget

You can apply Skeleton Loader for only a Specific widget instead of applying it to the whole page. For this, use the **`showskeleton`** property.

![showskeleton](/learn/assets/showSkeleton.gif)

### Customize Skeleton Loader using Code

In the following documentation, find code examples explaining multiple scenarios that you can use for Skeleton Loader.

#### Skeleton Loader Timeout Setting

In the following example, apply child Widgets of `widgetName` to show the Skeleton Loader and hide it in 5 seconds.

```js
    Page.widgets.submit.showskeleton = true; 
    setTimeout(()=>{
        Page.widgets.widgetName.showskeleton = false; 
    }, 5000)
```

#### Change Skeleton Colors

You can control Skeleton Loader colors using styles.

![Skeleton-Loader-Gradient](/learn/assets/skeleton.png)

#### Page 

In the following example, you can apply style on the page.

```css
.app-skeleton{
    background-color: #292753;
    opacity: 1;
}
.app-skeleton-gradient{
    background-color: #ffffff;
    opacity: 1;
}
.app-skeleton-gradient-foreground{
    background-color: #292753;
}
```

#### Widget 

- Using the following example, apply style for a specific Widget on the Page.

```css
.app-label .app-skeleton{
    background-color: #c1c1c1;
    border-width: 0px;
    opacity: 1;
}
.app-label .app-skeleton-gradient{
    background-color: #ffffff;
    opacity: 1;
}
.app-label .app-skeleton-gradient-foreground{
    background-color: #292753;
}
```

- You can use a class name of the widget for a specific widget if needed.

```css
className: headerLabel
.headerLabel .app-label .app-skeleton{
    background-color: #c1c1c1;
    border-width: 0px;
    opacity: 1;
}
.headerLabel .app-label .app-skeleton-gradient{
    background-color: #ffffff;
    opacity: 1;
}
.headerLabel .app-label .app-skeleton-gradient-foreground{
    background-color: #292753;
}
```

## Progress Loader

Use Progress Loaders such as spinners while the app data is being fetched from an API. WaveMaker provides four types of Progress Loaders to choose. The styling for the progress loader is generated from the default theme or the applied theme.


This will show the selected spinner animation, while the data is loading (It will create an overlay on top of the page) and the colors of the spinner are changed based on the theme.

:::note
If Page cache is enabled then it will show the spinner for the first load only.
:::

![Progress-Loader](/learn/assets/progressLoaders.gif)
