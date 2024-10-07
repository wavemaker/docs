---
title: "Skeleton Loader"
id: "skeleton-loader"
sidebar_label: "Skeleton Loader"
---
---

A Skeleton is an animated placeholder that mimics the structure of the content that will eventually load when an long running operations such as, API call. It creates an animation of the page structure, such as blocks, images, text, and other UI elements. This enables a seamless transition between the page and data, preparing users to get an idea of the page format in advance.

**Use Case**

When scrolling through any social media platform, you might notice gray bars in place of text, or blank squares where images will load. As the content is fetched, these placeholders are smoothly replaced with the actual content.

## Skeleton - Required and Not Required

Skeleton Loader can be applied on the widgets listed under the [Skeleton required](#skeleton-required). And for the widgets that cannot have Skeleton Loader applied are listed under [Skeleton not required](#skeleton-not-required).

### Skeleton Required

<details><summary>Skeleton Required</summary>

- Login
- Video
- Switch
- Checkbox
- Floating Label
- Currency
- Number
- Rating
- Text
- Textarea
- Textinput
- Checkboxset
- Radioset
- Chips
- Toggle
- Legend
- Select
- Audio
- Appnavbar
- Leftpanel
- Date
- Time
- Datetime
- Pagecontent
- Card
- Layoutgrid
- Linearlayout
- Container
- Panel
- List
- Tabs
- Partial
- Prefab
- Accordion
- Calendar
- Wizard
- Anchor
- Button
- Buttongroup
- Custom
- Icon
- Label
- Tooltip
- Picture
- Search

</details>

### Skeleton Not Required

<details><summary>Skeleton Not Required</summary>

- Progress Bar
- Lottie
- Progress Circle
- Spinner
- Dialog
- Confirm Dialog
- Alert Dialog
- Form
- Dropdown Menu
- Live Form
- Message
- Barcode Scanner
- Camera
- FileUpload
- Slider
- Popover

</details>

## Already Supporting and Not Supporting Widgets

WaveMaker provides many components within the studio that can be used in applucation developement. Skeleton Loader can be configured using the default configuration for the widgets listed under [supported widgets](#skeleton-supported-widgets). And the widgets that cannot be configured using the default configuration steps can use Lottie animation to show custom Skeleton Loader for the widgets listed under [not supported widgets](#skeleton-not-supported-widgets)

### Skeleton Supported Widgets

<details><summary>List of Widgets that can be configured using WaveMaker default configuration to apply Skeleton</summary>

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

### Skeleton Not Supported Widgets

<details><summary>List of Widgets that cannot be configured using WaveMaker default configuration to apply Skeleton</summary>

- Login
- Video
- Switch
- Checkbox
- Currency
- Number
- Rating
- Chips
- Toggle
- Select
- Audio
- Appnavbar
- Date
- Datetime
- Calendar
- Anchor

</details>

## WaveMaker Default vs Lottie Animation

|  | WaveMaker Default | Lottie Animation |
| --- | --- | --- |
| Widgets | [Skeleton Supported Widgets](#skeleton-supported) | [Lottie at Page level](#custom-animation-at-page-level) |
| Prefab/Partial | [Skeleton Supported Widgets](#skeleton-supported) | [Lottie at Prefab/Partial level](#custom-animation-at-prefab-level) |
| Charts | Not Applicable | Only Lottie Animation |


## Implementation

We can apply Skeleton Loader at different levels like Page, Prefab, Partial, and Widget level. For the widgets available on our platform,  Skeleton Loader can be applied in two ways.

- [Using WaveMaker Default Configuration](#using-wavemaker-default-configuration)
- [Using Lottie Animation Configuration](#using-lottie-animation-configuration)

We can find an example here that can help you understand scenarios where to use WaveMaker default or Lottie animation.

### Using WaveMaker Default Configuration

In this case, the widgets that are already supported on our platform for WaveMaker default configuration are used in this application. You can apply the Skeleton Loader using default configuration at Application, Page, Prefab, and Widget level.

#### Application Level

Skeleton Loader can be enabled when creating an application. To apply the Skeleton Loader, go to the **Project Settings** dialog and choose **Skeleton Loader** as the Application Loader. This applies the Skeleton Loader to all the available pages in an application along with all the [supported widgets](#skeleton-supported-widgets).

<iframe width="560" height="315" src="https://embed.app.guidde.com/playbooks/4tzkn2vjCNnJUZaXi5xYUK"   frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

:::note

Skeleton Loader gets applied across the application only if a [service variable](/learn/app-development/variables/web-service) is available for the application and the [Spinner Context](/learn/app-development/variables/web-service/#properties) is also set as Page.

:::

#### Page Level

You can apply the Skeleton Loader at Page level programatically by using the `showskeleton` property. For example, to enable the Skeleton Loader for a Page under `onready` method.

1. Go to Script tab of the Page.
2. Under the `onready` method, add the `showskeleton` property.
3. Set the `showskeleton` property as `true` to apply it to all the components. You can set it `false` to disable the Skeleton Loader for the specific page components. Use the below code.

```js
Page.Widgets.page_content1.showskeleton = true
```

#### Prefab/Partial Level

You can apply the Skeleton Loader at Prefab/Partial level programatically using the `showskeleton` property under `onready` method.

1. Go to Script tab of the Page.
2. Under the `onready` method, add the `showskeleton` property.
3. Set the `showskeleton` property as `true` to apply it to all the components. You can set it `false` to disable the Skeleton Loader for the specific page components. Use the below code.

```js
Page.Widgets.page_content1.showskeleton = true
```

In case of Prefabs and Partials, the child widgets used within it can be hidden or shown using **`showskeletonchildren`** property. **`showskeletonchildren`** property is set as `true` by default and can be set as `false` in Markup script to hide the child widgets and only apply the Skeleton Loader to the parent.

This is also applicable to other container type widgets.

- Grid Layout
- Flex Layout
- Accordion
- Tabs
- Wizard
- Panel
- Container
- Tile

#### Widget Level

You can apply the Skeleton Loader at Widget level programatically using the `showskeleton` property under the `onready` method.

1. Go to Script tab of the Page.
2. Under the `onready` method, add the `showskeleton` property.
3. Set the `showskeleton` property as `true` to apply it to all the components. You can set it `false` to disable the Skeleton Loader for the specific page components. Use the below code.

```js
Page.Widgets.button3.showskeleton = true;
```

#### Skeleton Loader Configuration

Skeleton Loader uses the widget's size and style to match the theme. Furthermore, you can configure the display time, style, position and color through code.

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

![Page Level Skeleton Loader](/learn/assets/page-level-customisation.gif)

##### Apply Style to Widget 

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

##### Apply Style to Class

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

### Using Lottie Animation Configuration

In Page, Prefab and [Partial](/learn/how-tos/create-prefab-with-partials/#partial-for-mobile), the user can override the default skeleton appearance using [Lottie Animation](/learn/app-development/widgets/basic/lottie/). This helps in adding the custom Skeleton layout without showing the actual components used in a Page, Prefab, and Partial.

Lottie Animation can be used in cases where the widgets used in the application are not supported to be configured using WaveMaker default configurations.

#### Uploading Custom Animation Resource

To use any custom Skeleton Loader animation to ovveride the default Skeleton Loader, you can first upload the file as resource.

1. Go to File Explorer > click **+** icon to add new resource.
2. Click **Upload Files** the required resources under animation in resources folder. You can also view it in the studio.

<iframe width="560" height="315" src="https://www.loom.com/embed/eff9de7b0e4845a297841532941bfb92?sid=7354a60d-2d13-4355-bfe9-fc6a3a6fd960" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

#### Applying Custom Animation Resource

The **`animationResource`** property can be used in Markup script to provide the location of the Json file as Lottie Animation resource file. The location of json file given as an [resource](/learn/app-development/services/3rd-party-libraries/#including-resource-files), renders the animation through application's Lottie widget. It can be added at three levels

- [Page](#custom-animation-at-page-level)
- [Prefab](#custom-animation-at-prefab-level)
- [Partial](#custom-animation-at-partial-level)

:::note
It is required to use Lottie widget in the application to implement the above.
:::

#### Custom Animation at Page Level

To apply the custom animation to the Page, `Skeleton Animation Resource` property is added to the Properties panel.

1. Click on the page components.
2. Navigate to the `Skeleton Animation Resource` property in Properties panel.
3. Click bind icon and go to Resource section in the Bind dialog.
4. Select **pagecontent_skeleton.json** file. Click Bind to apply the custom animation to all components at the Page level.

In the below video we can see how the Skeleton Loader appears after using the animation resource.

<iframe width="560" height="315" src="https://www.loom.com/embed/982a7b46bce846068cacd889d1f771bd?sid=a5481fa2-2d05-49be-9c8b-e372444ee63f" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

#### Custom Animation at Prefab Level

The custom animation can be added to the components available in a specific Prefab by adding the below Markup code within the Prefab.

```xml
<wm-prefab prefabname="StepperList" name="StepperList1" animationresource="resources/images/anim_1.json"></wm-prefab>
```

In the below video we can see how the Skeleton Loader appears after using the animation resource in the Prefab section.

<iframe width="560" height="315" src="https://www.loom.com/embed/0d9e63827ff0421cbb444ce5fd191db3?sid=ae7e2408-4a9d-4de8-812b-d509587625e1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>

#### Custom Animation at Partial Level

To apply the custom animation to a specific Partial, `Skeleton Animation Resource` property is added to the Properties panel.

1. Drag and drop the components and select Content as **PartialScenario**.
2. Navigate to the `Skeleton Animation Resource` property in Properties panel.
3. Click bind icon and go to Resource section in the Bind dialog.
4. Select **partial_skeleton.json** file. Click Bind to apply the custom animation to the Partial components.

In the below video we can see how the Skeleton Loader appears after using the animation resource in a Container widget set as Partial.

<iframe width="560" height="315" src="https://www.loom.com/embed/e35c9643370e4120b14e77817fab7768?sid=1007db93-b7d2-4586-a40d-af8780644716" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
