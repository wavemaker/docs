---
title: "Skeleton Loader"
id: "skeleton-loader"
sidebar_label: "Skeleton Loader"
---
---

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

Skeleton Loader configuration includes enabling it in the application and customizing it. In studio, you can configure the Skeleton Loader in two ways.

- [Configuration using Project Settings](#configuration-in-project-settings)
- [Configuration using Lottie Animation](#configuration-using-lottie-animation)

## Configuration using Project Settings

Skeleton Loader configuration includes enabling it in the application and customizing the style, color, display time, and animation.

### Enabling Skeleton Loader

Skeleton Loader can be enabled when creating an application. To apply the Skeleton Loader, go to the **Project Settings** dialog and choose **Skeleton Loader** as the Application Loader. This applies the Skeleton Loader to all the available pages in an application.

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/4tzkn2vjCNnJUZaXi5xYUK"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

:::note

Skeleton Loader gets applied across the application only if a [service variable](/learn/app-development/variables/web-service) is available for the application and the [Spinner Context](/learn/app-development/variables/web-service/#properties) is also set as Page.

:::

### Enabling Skeleton Loader at Widget Level

While applying Skeleton Loader at a Widget Level, Page, Prefab and Partial are considered as widgets.  Skeleton Loader can be enabled and disabled at Widget level using the `showskeleton` property under any event.

- Once applied to a Page, the Skeleton Loader gets applied to all components available in the Page.
- Once applied to a Prefab, the Skeleton Loader gets applied to all components available in the Prefab.
- Once applied to a Partial, the Skeleton Loader gets applied to all components available in the Partial.
- Once applied to a Widget, the Skeleton Loader gets applied to the specific widget.

For example, to enable the Skeleton Loader for a Page under `onready` method.

1. Go to Script tab of the Page.
2. Under the `onready` method, add the `showskeleton` property.
3. Set the `showskeleton` property as `true` to apply it to all the components. You can set it `false` to disable the Skeleton Loader for the specific page components. Use the below code.

```js
Page.Widgets.page_content1.showskeleton = true
```

### Enabling Skeleton Loader in Container Type Widgets

Earlier the Skeleton Loader was by default applied to only the child components within a Container type widget. Now, Skeleton Loader can be applied to the Container type widget which can be considered as parent and hide the components within it. The list of Container type widgets in studio are,

- Grid Layout
- Flex Layout
- Accordion
- Tabs
- Wizard
- Panel
- Container
- Tile

By using **`showskeletonchildren`** property, you can show or hide the child widgets within the Container type widget. **`showskeletonchildren`** property is set as `true` by default and can be set as `false` in Markup script to hide the child widgets and only apply the Skeleton Loader to the parent.

For example, add the following code in the Container widget,

```markup
<wm-container name="container1" showskeletonchildren="false">
                <wm-button class="btn-default" caption="Button" type="button" name="button1"></wm-button>
            </wm-container>
```

![Skeleton Loader in Container](/learn/assets/skeleton-loader-container.png)


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

#### Change Skeleton Properties

You can customise the color, width, and other properties of Skeleton Loader . These changes can be applied at three levels:

- [Page level](#apply-style-to-page)
- [Widget level](#apply-style-to-widget)
- [Class level](#apply-style-to-class)

##### Skeleton Loader CSS Classes

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

![Page Level Skeleton Loader](/learn/assets/page-level-skeleton-loader.png)

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

![Widget Level Skeleton Loader](/learn/assets/widget-level-skeleton-loader.png)

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

![Class Level Skeleton Loader](/learn/assets/class-level-skeleton-loader.png)

## Configuration using Lottie Animation

In Page, Prefab and [Partial](/learn/how-tos/create-prefab-with-partials/#partial-for-mobile), the user can override the default skeleton appearance using [Lottie Animation](/learn/app-development/widgets/basic/lottie/). This helps in adding the custom Skeleton layout without showing the actual components used in a Page, Prefab, and Partial.

### Uploading Custom Animation Resource

To use any custom Skeleton Loader animation to ovveride the default Skeleton Loader, you can first upload the file as resource.

1. Go to File Explorer > click **+** icon to add new resource.
2. Click **Upload Files** the required resources under animation in resources folder. You can also view it in the studio.

<iframe width="560" height="315" src="https://www.loom.com/embed/eff9de7b0e4845a297841532941bfb92?sid=7354a60d-2d13-4355-bfe9-fc6a3a6fd960" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

### Applying Custom Animation Resource

The **`animationResource`** property can be used in Markup script to provide the location of the Json file as Lottie Animation resource file. The location of json file given as an [resource](/learn/app-development/services/3rd-party-libraries/#including-resource-files), renders the animation through application's Lottie widget. It can be added at three levels

- [Page](#custom-animation-at-page-level)
- [Prefab](#custom-animation-at-prefab-level)
- [Partial](#custom-animation-at-partial-level)

:::note
It is required to use Lottie widget in the application to implement the above.
:::

#### Custom Animation at Page Level

To apply the custom animation to the Page content, use the below code in the Markup section of the specific Page.

```xml
 <wm-page-content animationresource="resources/images/anim_1.json" columnwidth="12" name="page_content1" >
```

In the below video we can see how the Skeleton Loader appears before and after using the animation resource.

<iframe width="560" height="315" src="https://www.loom.com/embed/bdf837821f184bd8918b114da21b173f?sid=f628f63d-5514-417e-885e-9f6d35588ffa" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>


#### Custom Animation at Prefab Level

The custom animation can be added to the components available in a specific Prefab by adding the below Markup code within the Prefab.

```xml
<wm-prefab prefabname="StepperList" name="StepperList1" animationresource="resources/images/anim_1.json"></wm-prefab>
```

In the below video we can see how the Skeleton Loader appears before and after using the animation resource in the Prefab section.

<iframe width="560" height="315" src="https://www.loom.com/embed/fc7ca38e98f44249bacb58d84c073676?sid=2f3c31e6-56f6-442f-bfc2-50e35467617a" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

#### Custom Animation at Partial Level

The custom animation can be applied to the components available in a Partial. Use the below code within a Partial,

```xml
<wm-container name="container1" content="NavBar" animationresource="resources/images/anim_2.json"></wm-container>
```

In the below video we can see how the Skeleton Loader appears before and after using the animation resource in a container that holds the **NavBar** as Partial.

<iframe width="560" height="315" src="https://www.loom.com/embed/d425496de8ae4a4cb6e175fa2d56c811?sid=23a9df85-7cce-4d54-8342-c317059bf9aa" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
