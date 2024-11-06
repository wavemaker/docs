---
title: "Skeleton Loader"
id: "skeleton-loader"
sidebar_label: "Skeleton Loader"
---
---

A Skeleton is an animated placeholder that mimics the structure of the content that will eventually load when an long running operations such as, API call. It creates an animation of the page structure, such as blocks, images, text, and other UI elements. This enables a seamless transition between the page and data, preparing users to get an idea of the page format in advance.

**Use Case**

When scrolling through any social media platform, you might notice gray bars in place of text, or blank squares where images will load. As the content is fetched, these placeholders are smoothly replaced with the actual content.

![Skeleton Loader Example](/learn/assets/skeleton-loader-example.gif)


## Key Features

Skeleton Loader offers the following benefits.

- **Flexibility**: You can apply them to entire page or individual UI components.
- **Customizability**: Modify the appearance (colors, animation speed) to suit your app’s design.

## Prerequisites

Before implementing the Skeleton Loader, the following steps are to be taken.

### Enabling at Application Level

Skeleton Loader is enabled at application level when creating an application. To apply the Skeleton Loader, go to the **Project Settings** dialog and choose **Skeleton Loader** as the Application Loader. This applies the Skeleton Loader to all the available pages in an application along with all the [supported widgets](#skeleton-supported-widgets).

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/4tzkn2vjCNnJUZaXi5xYUK"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

:::note

Skeleton Loader gets applied across the application only if a [service variable](/learn/app-development/variables/web-service) is available for the application and the [Spinner Context](/learn/app-development/variables/web-service/#properties) is also set as Page.

:::

### Uploading Animation Resource File

If you want to apply the custom animation resource using Lottie, you need to first download and upload the animation resource Json file.

1. Go to File Explorer > click **+** icon to add new resource.
2. Click **Upload Files** the required resources under animation in resources folder. You can also view it in the studio.

<iframe width="560" height="315" src="https://www.loom.com/embed/eff9de7b0e4845a297841532941bfb92?sid=7354a60d-2d13-4355-bfe9-fc6a3a6fd960" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>


## Implementing Skeleton Loader

We can apply Skeleton Loader at different levels like Page, Prefab, and Partial level.

### Page Level

Skeleton Loader gets internally applied at Page level by default when it is enabled at application level. To apply the Skeleton Loader at application level, refer [Enabling at Application Level](#enabling-at-application-level).

### Prefab and Partial Level

In case of Prefabs and Pratials, it is recommended to use the Lottie animation as Skeleton Loader as few of the components are yet to have Skeleton support. Using Lottie animation would ensure no failure and proper implementation.

To use Lottie animation, it is necessary to first [upload the animation resource file](#uploading-animation-resource-file). You can apply the custom animation to a specific Partial by using the `Skeleton Animation Resource` property in the Properties panel.

1. Drag and drop the components and select Content as **PartialScenario**.
2. Navigate to the `Skeleton Animation Resource` property in Properties panel.
3. Click bind icon and go to Resource section in the Bind dialog.
4. Select **partial_skeleton.json** file. Click Bind to apply the custom animation to the Partial components.

In the below video we can see how the Skeleton Loader appears after using the animation resource in a Container widget set as Partial.

<iframe width="560" height="315" src="https://www.loom.com/embed/e35c9643370e4120b14e77817fab7768?sid=1007db93-b7d2-4586-a40d-af8780644716" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Customizing Skeleton Loader

You can customise the color, width, and other properties of Skeleton Loader . These changes can be applied at three levels:

- [Page level](#apply-style-to-page)
- [Widget level](#apply-style-to-widget)
- [Class level](#apply-style-to-class)

### Skeleton Loader CSS Classes

During Skeleton customization, Skeleton Loader is categorized into three classes that can help you to create the Shimmer effect in the Skeleton Loader.

1. `skeleton`: It is the outer container of the Skeleton component.
2. `skeleton-gradient-foreground`: It is to provide the shadow effect to the Skeleton.
3. `skeleton-gradient`: It is the center part that shows the shimmer or moving effect in the Skeleton Loader.

![Skeleton-Loader-Gradient](/learn/assets/skeleton.png)

### Apply Style to Page

In the following example, you can customise background color and other properties in the page.

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

![Page Level Skeleton Loader](/learn/assets/page-level-customisation.gif)


### Apply Style to Widget 

Using the following example, you can customise background color, border width of Skeleton and other properties for a specific widget in the page.

```css
.app-label-skeleton .app-skeleton {
    background-color: green;
}

.app-label-skeleton .app-skeleton-gradient {
    background-color: yellow;
}

.app-label-skeleton .app-skeleton-gradient-foreground {
    background-color: white;
}
```

![Widget Level Skeleton Loader](/learn/assets/widget-level-customisation.gif)

### Apply Style to Class

Using the following example, you can customise background color, border width of Skeleton, and other properties for a specific class inside a widget in the page.

```css
className: some-class
.some-class .app-label-skeleton .app-skeleton {
    background-color: green;
}

.some-class .app-label-skeleton .app-skeleton-gradient {
    background-color: yellow;
}

.some-class .app-label-skeleton .app-skeleton-gradient-foreground {
    background-color: white;
}
```

![Class Level Skeleton Loader](/learn/assets/class-level-customisation.gif)

## Using Lottie Animation as Skeleton Loader

To add more dynamic animations, you can integrate Lottie. The uploaded custom animation can be applied to the Page using the `Skeleton Animation Resource` property in the Properties panel.

1. Click on the page components.
2. Navigate to the `Skeleton Animation Resource` property in Properties panel.
3. Click bind icon and go to Resource section in the Bind dialog.
4. Select **pagecontent_skeleton.json** file. Click Bind to apply the custom animation to all components at the Page level.

In the below video we can see how the Skeleton Loader appears after using the animation resource.

<iframe width="560" height="315" src="https://www.loom.com/embed/982a7b46bce846068cacd889d1f771bd?sid=a5481fa2-2d05-49be-9c8b-e372444ee63f" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Widgets with Skeleton Loader Support

<details><summary>List of Widgets to which the Skeleton Loader can be applied</summary>

Below is the list of widgets that are supported in the Skeleton Loader.

- ButtonGroup
- Icon
- Label
- Picture
- Tab
- Form
- Radioset
- Carousel
- List
- Card
- Anchor
- Button
- Custom
- Container

</details>
