---
title: "Automatically Import your Website Branding Styles into a Theme"
author: Lovin Ahmed
---



[Theme Builder](https://apps.wavemakeronline.com/Theme_Builder/#/Dashboard) app has introduced a new feature for recognizing a website color palette by inserting the website URL. With this, you can discover the colors used in a website and use them to build a theme. It will essentially make the theme-building process much easier by allowing you to choose the discovered colors, fonts, and more from an existing website. Furthermore, you can preview and design WaveMaker components by assigning colors, and download the theme when ready. For more information about creating a theme without any coding, see [Creating a Theme using Theme Builder](/learn/app-development/ui-design/theme-builder).

<!-- truncate -->

With WaveMaker 10.6 release, we have fixed a few bugs. [Know more details here](/learn/wavemaker-release-notes/v10-6-0).

## Input URL

***New feature Step-2 unlocked for Generating Theme Colors***

Introduced a new flow to identify the colors of a website using the **Input URL** option. Follow the steps below to use this feature.

1. Go to the Dashboard page of the [Theme builder](https://apps.wavemakeronline.com/Theme_Builder/#/Dashboard) app.
2. Click ***Input URL** and generate*.

![theme builder dashboard tile2](/learn/assets/theme-builder-dashboard-tile2.png)

3. Enter a website URL. For example, `https://www.google.com/`, and click **Search URL** to generate the color palette of the website.

![theme builder import theme](/learn/assets/theme-builder-import-theme.png)

4. A prompting message displays on the **Editor** page with the generated colors with a maximum of six colors that are highlighted. However, the preview application continues to use the default colors of the existing Material theme.


![theme builder color list](/learn/assets/theme-builder-dynamic-color-list.png)

5. You can design WaveMaker components with the new colors and preview them right away.

:::note
The generated colors are available for all the input fields. Choose the colors from the dropdown as per your branding needs.
:::

6. When ready, download the theme.

:::note
For information on how to import a theme, see [Importing Theme](/learn/app-development/ui-design/themes#import-theme).
:::

## Bug Fixes

1. The list widget data is now replaced with the real data in the preview application.
2. A new page template called `Dashboard1` is newly included for the preview application. You can navigate it from the left navbar.
3. Added **Panel Secondary** to the preview application to check the color changes for the secondary theme color.
4. Fixed issue related to gradient background that was not consistent for widgets when previewing the application switching to gradient theme for UI elements, including Nav, List, Panel backgrounds, Checkboxes, and Radio buttons.
5. Changed the default option for the **Spacing** property in **General Settings** from `default` to `comfortable` to match the default Material-2.0 theme.
6. Fixed issue related to Border radius panels that were not consistent when changing from none, less, and more.
7. Fixed the list item active state that did not match the color selected for the gradient theme in the left navigation.
8. Fixed the state colors that did not reflect the tiles widget.

That's all for now. See you soon with more updates.