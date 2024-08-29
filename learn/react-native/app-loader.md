---
title: "Application Loader"
id: "app-loader"
sidebar_label: "App Loader"
---
---

An application loader is a component that helps in the loading and execution of an application. It typically handles tasks such as loading necessary resources, managing dependencies, and preparing the application to run smoothly. There are two types of Application Loaders that WaveMaker supports.

[Skeleton Loader](#skeleton-loader)  
[Progress Loader](#progress-loader)

## Skeleton Loader

A Skeleton is an animated placeholder that mimics the structure of the content that will eventually load when an long running operations such as, API call. It creates an animation of the page structure, such as blocks, images, text, and other UI elements. This enables a seamless transition between the page and data, preparing users to get an idea of the page format in advance.

**Use Case**

When scrolling through any social media platform, you might notice gray bars in place of text, or blank squares where images will load. As the content is fetched, these placeholders are smoothly replaced with the actual content.

**Supported Widgets**

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

## Configuration of Skeleton Loader

Skeleton Loader configuration includes enabling it in the application and customizing the style, color, display time, and animation.

### Enabling Skeleton Loader

Skeleton Loader can be enabled when creating an application. To apply the Skeleton Loader, go to the **Project Settings** dialog and choose **Skeleton Loader** as the Application Loader.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/4tzkn2vjCNnJUZaXi5xYUK"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

:::note

Skeleton Loader gets applied across the application only if a [service variable](/learn/app-development/variables/web-service) is available for the application and the [Spinner Context](/learn/app-development/variables/web-service/#properties) is also set as Page.

:::

### Customizing Skeleton Loader

Skeleton Loader uses the widget's size and style to match the theme. Furthermore, you can customize the display time, style, and color through code.

Below, you can find code examples to use during Skeleton Loader customization.

#### Hide/Show Skeleton Loader for Specific Widget

In the following example, the Skeleton Loader is applied to the widgets available within `widgetName` and shown for 5 seconds.

```js
    Page.widgets.submit.showskeleton = true; 
    setTimeout(()=>{
        Page.widgets.widgetName.showskeleton = false; 
    }, 5000)
```

#### Change Skeleton Colors

You can customise the color, width, and other properties of Skeleton Loader . These changes can be applied at three levels:

- [Page level](#apply-style-to-page)
- [Widget level](#apply-style-to-widget)
- [Class level](#apply-style-to-class)

##### Skeleton Loader Classes

During Skeleton customization, Skeleton Loader is categorized into three classes that can help you to create the Shimmer effect in the Skeleton Loader.

1. `skeleton`: It is the outer container of the Skeleton component.
2. `skeleton-gradient-foreground`: It is to provide the shadow effect to the Skeleton.
3. `skeleton-gradient`: It is the center part that shows the shimmer or moving effect in the Skeleton Loader.

![Skeleton-Loader-Gradient](/learn/assets/skeleton.png)

##### Apply Style to Page

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

##### Apply Style to Widget 

Using the following example, you can customise background color, border width of Skeleton and other properties for a specific widget in the page.

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

##### Apply Style to Class

Using the following example, you can customise background color, border width of Skeleton, and other properties for a specific class inside a widget in the page.

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

#### Skeleton Loader in Container Type Widgets

Now, Skeleton Loader can be applied to Container type widgets. This would include, Skeleton loader on the parent and additional show/hide customization on child widgets. The list of Container type widgets in studio are,

- Grid Layout
- Flex Layout
- Accordion
- Tabs
- Wizard
- Panel
- Container
- Tile

The widgets in this category have child widgets on which the Skeleton Loader is not applied by default. To apply it on the child widgets within the Container type widget, set **`showskeletonchildren`** property as `true` in Markup script.

For example, add the following code in the Container widget,

```markup
<wm-container name="container1" showskeletonchildren="false">
                <wm-button class="btn-default" caption="Button" type="button" name="button1"></wm-button>
            </wm-container>
```

![Skeleton Loader in Container](/learn/assets/skeleton-loader-container.png)

#### Customization using Lottie Animation

In Page, Prefab and [Partial](/learn/how-tos/create-prefab-with-partials/#partial-for-mobile), the user can override the default skeleton appearance using [Lottie Animation](/learn/app-development/widgets/basic/lottie/). This helps in adding the custom Skeleton layout without showing the actual components used in a Page, Prefab, and Partial.

The **`animationResource`** property can be used in Markup script to provide the location of the Json file as Lottie Animation resource file. The location of json file given as an [resource](/learn/app-development/services/3rd-party-libraries/#including-resource-files), renders the animation through application's Lottie widget. It can be added at three levels

- [Page](#custom-animation-at-page-level)
- [Prefab](#custom-animation-at-prefab-level)
- [Partial](#custom-animation-at-partial-level)

:::note
It is required to use Lottie widget in the application to implement the above.
:::

##### Custom Animation at Page Level

To apply the custom animation to the Page content, use the below code in the Markup section of the specific Page.

```markup
 <wm-page-content columnwidth="12" name="page_content1" animationresource="resources/images/anim_1.json">
```

##### Custom Animation at Prefab Level

The custom animation can be added to the components available in a specific Prefab by adding the below Markup code within the Prefab.

```markup
<wm-prefab prefabname="StepperList" name="StepperList1" animationresource="resources/images/anim_1.json"></wm-prefab>
```

##### Custom Animation at Partial Level

The custom animation can be applied to the components available in a Partial. Use the below code within a Partial,

```markup
<wm-container name="container1" content="SkeletonPartial" animationresource="resources/images/anim_2.json"></wm-container>
```

### Debugging Skeleton Loader

Skeleton Loader can be applied on different levels, Application, Page, Prefab, Partial, and Widget. You can always check the correctness of Skeleton Loader at different levels using the **`showskeleton`** property. For example, you can debug using the below code at page level and widget level.

:::note
By default when the Skeleton Loader is selected, it applies across application.
:::

#### Page Level

To customize Skeleton Loader at Page level, **`showskeleton`** property is set to true. Add the following code in the `onready` method of a page. This applies it to all the components available in the Page.

```js
Page.Widgets.page_content1.showskeleton = true
```

#### Widget Level

You can apply Skeleton Loader for only a Specific widget instead of applying it to the whole page. For this, use the **`showskeleton`** property.

![showskeleton](/learn/assets/showSkeleton.gif)

## Progress Loader

Use Progress Loaders such as spinners while the app data is being fetched from an API. WaveMaker provides four types of Progress Loaders to choose. The styling for the Progress Loader is generated from the default theme or the applied theme.

This will show the selected spinner animation, while the data is loading, which creates an overlay on top of the page and the colors of the spinner change based on the theme.

**Use Case**

In case of cloud storage application like Google Drive, the users upload files. The uploading of large files can take some time depending on the file size and network speed. During this process, it's crucial to inform users about the status of their upload to keep them engaged and to avoid confusion.

### Enabling Progress Loader

Skeleton Loader can be enabled when creating an application. To apply the Skeleton Loader, go to the **Project Settings** dialog and choose **Skeleton Loader** as the Application Loader.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/91V6g5TKcWZD77JPv9aAYR"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Configuring Progress Loader

In WaveMaker service calls, to fetch data, these are abstracted as [Variables](/learn/app-development/variables/). When these calls are made the [App Loaders](#application-loader) are displayed.

To set a Progress Loader for an API call, the Progress Loader is bound to a variable available in the page and the Spinner Context is set at Page level.

![variable spinner context](/learn/assets/variable-spinner-context.png)

:::note

When the Owner in the Variables Page is set as Application, the variable bound to the Progress Loader can be reused across the application. And if the Owner is set as Page, the variable is page restricted and needs to be created and bound to the Progress Loader to be used in the different page.

:::
