---
title: "Customize an Existing Theme"
id: "customize-existing-theme"
last_update:
  author: "Author Name"
---
---
Themes are used to provide consistent usage of font, color, border, and layout throughout the application. WaveMaker provides sample themes that you can apply to your app. If needed you can make changes to the same. This How-To talks about customizing an existing WaveMaker theme. The steps include:

1. Apply Theme to WaveMaker app,
2. Make changes to the WaveMaker theme from Grunt,
3. Build the Theme and Import to apply to the app.

## Steps to apply Theme

1. In the Project Toolbar bar, select the Themes option.

Image: theme_change.png

2. It opens the theme window.
3. Select the desired theme or search the theme name and click on Apply button.

Image: Themes.png

4. Run the project, by clicking on Run button in the menu bar. The theme will be applied to all the pages present in the project.

## Customize WaveMaker Theme

:::note
Before customizing the WaveMaker theme set-up the theme repository following instructions from here.
:::

To customize the existing theme in WaveMaker, perform the following steps:

1. From the File Explorer, under themes, expand the desired theme.
2. Open the style.less and variable.less file. 

  !theme customize
3. Download both the files
4. Replace the corresponding files in the Theme repository with the downloaded files.
5. Make desired changes as required. For instance, change the background color or font color.
6. In the style.less file, edit the following path- `@import url(**"../../../components/bootstrap/less/bootstrap.less"**` to `@import url(**"../../components/bootstrap/less/bootstrap.less"**)`
7. Build the theme by using commands given here.
8. Import and apply the theme to your app.

## See Also

How to change background of an application  
How to use web fonts in theme  
How to style app components  

