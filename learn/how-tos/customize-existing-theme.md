---
title: "Customize an Existing Theme"
id: ""
---

Themes are used to provide consistent usage of font, color, border, and layout throughout the application. WaveMaker provides sample themes that you can apply to your app. If needed you can make changes to the same. This How-To talks about customizing an existing WaveMaker theme. The steps include:

1. Apply Theme to WaveMaker app,
2. Make changes to the WaveMaker theme from Grunt,
3. Build the Theme and Import to apply to the app.

## Steps to apply Theme

1. In the Project Toolbar bar, select Themes option. [![](/learn/assets/theme_change.png)](/learn/assets/theme_change.png)
2. It opens the theme window.
3. Select the desired theme or search the theme name and click on Apply button [![](/learn/assets/Themes.png)](/learn/assets/Themes.png)
4. Run the project, by clicking on Run button in the menu bar. The theme will be applied to all the pages present in the project.

## **Customize WaveMaker Theme**

NOTE: Before customizing the WaveMaker theme set-up the theme repository following [instructions from here](/learn/app-development/ui-design/themes/#create-theme).

To customize the existing theme in WaveMaker, perform the following steps:

1. From the File Explorer, under themes, expand the desired theme.
2. Open the style.less and variable.less file. [![](/learn/assets/theme_customize.png)](/learn/assets/theme_customize.png)
3. Download both the files
4. Replace the corresponding files in the Theme repository with the downloaded files.
5. Make desired changes as required. For instance, change the background color or font color.
6. In the style.less file, edit the following path- `@import url(**"../../../components/bootstrap/less/bootstrap.less"**` to `@import url(**"../../components/bootstrap/less/bootstrap.less"**)`
7. Build the theme by using [commands given here](/learn/app-development/ui-design/themes/#build-theme).
8. [Import](/learn/app-development/ui-design/themes/#import-theme) and [apply](/learn/app-development/ui-design/themes/#apply-theme) the theme to your app.

Customize Themes

- [1\. How to change background of an application](/learn/how-tos/customizing-theme/#background)
- [2\. How to use web fonts in theme](/learn/how-tos/customizing-theme/#web-fonts)
- [3\. How to style app components](/learn/how-tos/customizing-theme/#styling)
- [4\. How to customize existing theme](#)
