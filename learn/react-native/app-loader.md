---
title: "Application Loader"
id: "app-loader"
author: Raajvamsy
---
---

The Application loader shows animation while variables are loading on a page. 

Initially, it will show the animation for Startup Variables then it will show the animation for the Page-level Variables spinner context option. 

By default, the Skeleton loader is selected This can be changed in Project Settings.

![Application-Loader](/learn/assets/appLoaders.gif)

### Skeleton Loader

A skeleton loader is an animated placeholder that simulates the layout of a website while data is being loaded,
When the Variable spinner context is selected as a page, then all the widgets on the page will show a skeleton.

#### Adding skeleton loader to a Widget

We can show the skeleton for a specific widget instead of the whole page through `showskeleton` property

![showskeleton](/learn/assets/showSkeleton.gif)

```
    Page.widgets.submit.showskeleton = true; 
    setTimeout(()=>{
        Page.widgets.widgetName.showskeleton = false; 
    }, 5000)
```
In the above example, all the child widgets of widgetName will show a skeleton and then hide it after 5 seconds.

#### Change Skeleton Colors

We can also control skeleton loader colors with styles

![Skeleton-Loader-Gradient](/learn/assets/skeleton.png)

##### Page 

This will apply style throughout the page

```
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

##### Widget 

This will apply style for the mentioned widget throughout the page

```
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

For a specific widget, we can use the class name of the widget 
```
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

### Progress Loader

This will show the selected spinner animation, while the data is loading (It will create an overlay on top of the page) and the colors of the spinner are changed based on the theme.

**Note:** If Page cache is enabled then it will show the spinner for the first load only.

![Progress-Loader](/learn/assets/progressLoaders.gif)
