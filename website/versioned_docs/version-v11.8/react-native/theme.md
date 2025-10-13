---
title: "Working with Themes in React Native"
id: "theme"
sidebar_label: "Theme"
---
---

You can style React Native apps using a theme. Common (theme) styles will greatly reduce the styling effort of individual apps. The following topics related to a theme are discussed in this article.

1. How to create a theme
2. Theme project structure
3. Customizing a theme
4. Compile a theme
5. Update a theme
6. Import a theme
7. Multiple themes

## Required Software

- Node (18.16.1)
- React Native Codegen:
  Run the below command in the terminal to install React Native Codegen.

```shell
npm install -g @wavemaker/rn-codegen
```

## Creating a Theme

- Open a terminal
- Navigate to a directory where you wish to create a theme project
- Execute the following command

```
wm-rn-codegen theme generate ${theme-name}
```
- A new folder with the given theme name should get created.
- Open **.wmproject.properties** file.
- Provide value to name (required) and other metadata.
- Push the theme project to your VCS (optional).

## Theme Project Structure

Following is the folder structure of a theme project.

- **`$ThemeProject`**
    - **`src`**
        - **`android`** - theme customizations specific to Android
        - **`ios`**  - theme customizations specific to iOS
        - **`common`** - theme customizations that are common to both Android and iOS
    - **`theme.png`** - a picture that represents this theme
    - **`wavemaker`** - This folder contains all the default styles provided by WaveMaker React Native Framework. The WaveMaker platform maintains the contents of this folder. Therefore, avoid any modifications in this folder.

    - **`.wmproject.properties`** - information about the theme

## Customize Theme

To understand customization, let's take the button as an example.

- Go to `$ThemeProject/wavemaker`
- For each widget, there is a `less` file inside the `wavemaker` folder. Copy `button.less` from **`wavemaker/components/basic/button.less`** to **`src/common/components/basic/button.less`** 

:::note
Path structure should be the same in both **`wavemaker`** and **src/common** folders. If you need customizations for a specific platform, copy the file into src/platform_name
:::

- Open the copied file and change or add styles

### Customizing theme colors

- Open **`wavemaker/variables.less`**
- Select the color that requires change.
- Open **`src/common/variables.less`**. For a platform-specific change, open corresponding **`variables.less`** of that platform folder.
- If **`@platformColor`** has to be changed, add a less variable with the name **`@_platformColor`** and assign the desired value. The new variable name must have an underscore between @ and variable name. For example, `@_primaryColor` will override the value of @primaryColor.

![](/learn/assets/rn_theme_variables.png)

## Compile Theme

- Open a terminal
- Navigate to the directory where the theme project is.
- Execute the following command.

```
wm-rn-codegen theme compile
```

- Under the dist folder, the **theme.zip** file should get created after successful compilation.

## Update Theme Project

- Open a terminal
- Navigate to the directory where the theme project is.
- Execute the following command.

```
wm-rn-codegen theme update
```

- Theme project: contents of the **`wavemaker`** folder migrates. 

:::note
When **`@wavemaker/rn-codegen`** is updated, run theme update on the existing theme projects.
:::

## Import Theme into a Project

- You can import the zip generated in the compiled step into a React Native project. For more information, see [import and apply a theme](/learn/app-development/ui-design/themes#import-theme).

## Multi-theme Support

With Multi-theme support, you can choose multiple themes at the same time for an application using the Theme dialog, setting one theme as the default.

### How to Apply Multiple Themes

1. In WaveMaker Studio after [importing themes](#6-import-theme-into-a-project) using the Theme dialog.
2. Select multiple themes from the themes available in the Themes window to be part of the application.
![Theme dialog](/learn/assets/react-native/theme/theme-dialog.png)

### Get Theme Information

- To know the names of the themes available in an application, use `App.themes`.
- To check the name of the active theme in an application, use `App.activeTheme`.
- For example, use the below code to construct a Select UI using the above values

### Markup

```xml
<wm-select name="select1" 
    dataset="bind:App.themes" datafield="All Fields" 
    datavalue="bind:App.activeTheme" 
    on-change="select1Change($event, widget, newVal, oldVal)">
</wm-select>
```

### Script

```javascript
Page.select1Change = function($event, widget, newVal, oldVal) {
    App.activeTheme = newVal;
};
```

