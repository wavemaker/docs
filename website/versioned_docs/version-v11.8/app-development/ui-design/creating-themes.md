---
title: "Creating Themes using the Manual Setup"
id: "creating-themes"
sidebar_label: "Manual Theme"
---
---

Themes are used to apply a style to the entire application. WaveMaker app (web, and mobile) themes are based on the BootStrap CSS markup and it requires you to know HTML, CSS, LESS, and Grunt.

### Styling Elements

Mainly, themes contain the following styling for all the elements on a page.

1. **Color**: Background, text color, border color, hover/active/focus colors, and more.
2. **Properties**: For text like text-align, text-decoration, font-size, font-weight, and more.
3. **Layout**: Includes margin, padding, border-radius, and more.

:::tip
You can also develop themes instantly without needing to code; you can do this by using WaveMaker theme builder. For more information, see the [Theme Builder Editor Tool](/learn/app-development/ui-design/theme-builder).
:::

## Using the Manual Setup

In this document, see how to develop themes in WaveMaker using the manual approach which requires you to install the whole setup into the local environment.

### Prerequisites

Before creating a theme, make sure you have installed the following on your machine:

- [Nodejs](https://nodejs.org/)
- [GIT](https://www.git-scm.com/)

### Setup

1. Open GIT Bash prompt
2. Install **grunt** using the following command

    ```shell
    npm install -g grunt-cli
    ```

    For more information, see [Grunt](https://gruntjs.com/getting-started).

3. Install **bower** using the following command:

    ```shell
    npm install -g bower
    ```

    For more information on bower, see [click here](https://www.npmjs.com/package/bower).

4. Setup the **WaveMaker Theme repository**.

    - For Git clone, see [Grunt WaveMaker Theme](https://github.com/wavemaker/grunt-wavemaker-theme.git).

    ```shell
    cd grunt-wavemaker-theme
    ```

    ```shell
    npm install
    ```

    Follow the instructions given at the [Git repository](https://github.com/wavemaker/grunt-wavemaker-theme).

5. After setting up the repository, under the **src** folder you will find the following files that can be modified as per your needs.

    [![theme-web](/learn/assets/theme-web.png)](/learn/assets/theme-web.png)

:::note
Themes for Web and Mobile (Android/iOS) apps are different, use the appropriate theme source file to generate the theme bundle.
:::

## Theme Package Structure

### Directory Structure

1. **`Fonts`** folder: The web fonts can be copied here and referenced in the theme. There will be references to Roboto regular fonts in the variables.less (src/web), to avail them please download Roboto regular fonts and paste them in fonts directory (src/web/fonts).
2. **`.wmprojects.properties`**: This contains essential properties required to identify the theme.

    **`.wmprojects.properties`**
    - **`name:`** for the theme,
    - **`version`**: of the theme. Updated version will be used to replace the existing theme in the project.
    - **`description`**: a short meaningful `description` of the theme,
    - **`type:`** THEME (DO NOT CHANGE THIS), and
    - **`author`**: name of the author for the theme.

3. **`theme.png`**: Used to visually identify the Theme in the Theme dialog. The size of the image should be 160 x 120 px.
4. **`style.less`**: This less file includes styles for components like header, footer, leftnav, calendar etc., which are not defined in the bootstrap CSS. These components can be further customized in this file by using the variables defined at the beginning of the file eg header background color can be changed using the @wm-header-bg-color variable.
5. **`variables.less`**: This less file includes the styles defined by bootstrap. The values defined in this file are used by widgets like buttons, links, textbox, and more. For more information, see [Bootstrap documentation](http://getbootstrap.com/customize/) on LESS variables.

### Web Responsive

For creating a custom theme for a WaveMaker application, you need to understand the package structure. The theme package contains the following files:

| Name | Description |  |
| --- | --- | --- |
| Fonts | Folder containing web-based fonts used in the app. | Required |
| .wmproject.properties | Containing essential properties required to identify the theme which includes the name of the theme, version of the theme, a short meaningful description of the theme, the type should be THEME (DO NOT CHANGE THIS), and the name of the author for the theme. | Required |
| style.css | Containing styles related to the theme. | Required |
| theme.png | Theme icon. | Required |
| variables.less | LESS variables to define colors, sizes and more. | Required |

### Hybrid Mobile

In a hybrid app mobile theme, there can be different flavors for android and ios systems. Hence, in a theme bundle, there are different folders for android and ios.

Following is the package structure:

| Sub-Folder | Name | Description |  |
| --- | --- | --- | --- |
| none | .wmproject.properties | Containing essential properties required to identify the theme which includes the name of the theme, version of the theme, a short meaningful description of the theme, the type should be THEME (DO NOT CHANGE THIS), and the name of the author for the theme. | Required |
| none | theme.png | Theme icon. | Required |
| Android | Fonts | Folder containing web-based fonts used in the app. | Required |
|  | style.css | Containing styles related to the theme. | Required |
|  | variables.less | LESS variables to define colors, sizes and more. | Required |
| ios | Fonts | Folder containing web-based fonts used in the app. | Required |
|  | style.css | Containing styles related to the theme. | Required |
|  | variables.less | Less variables to define colors, sizes and more. | Required |

## Creating Theme for Web Apps

Follow the steps below for creating a theme for a web app.

1. After setting up the theme repository, navigate to the **web** folder.
2. Open `style.less` and `variables.less` in the editor of your choice.
3. To use the **web fonts** in the theme, copy the web fonts (.ttf,.eot, .woff) in the font folder and include the font definition in `variables.less`.

    ```css
    @font-face {
        font-family: 'robotoregular';
        src: url('fonts/Roboto-Regular-webfont.eot');
        src: url('fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
        url('fonts/Roboto-Regular-webfont.woff') format('woff'),
        url('fonts/Roboto-Regular-webfont.ttf') format('truetype'),
        url('fonts/Roboto-Regular-webfont.svg#robotoregular') format('svg');
    }
    ```

4. The `variables.less` contain variables which are used while building the bootstrap CSS.  For example, `@brand-primary` value change will affect all the styles using this specific property value. For more information on variables, see [Bootstrap customization](http://getbootstrap.com/customize/).

    ```css
    //## Gray and brand colors for use across Bootstrap.
    @brand-primary:         #551C2B;
    @brand-success:         #088362;
    ```

    For more information, see [Styling App Components](/learn/how-tos/customizing-theme/).

5. Replace the `theme.png` with your image in the web folder.
6. Update the `.wm-properties` to [provide theme information](#directory-structure).
7. [Build the theme](#build-theme).
8. The theme will be saved under `grunt-wavemaker-theme/dist` as **`web.zip`**.
9. [Import](/learn/app-development/ui-design/themes/#import-theme) and [Apply](/learn/app-development/ui-design/themes/#apply-theme) the Theme to your app.

## Creating Theme for Web Apps - Bootswatch

Bootswatch provides bootstrap themes that can be integrated into your WaveMaker web apps. The [prerequisites](#prerequisites) and [setup](#setup) for building the WaveMaker theme are the same as above.

1. Select a theme from [Bootswatch](https://bootswatch.com/3/).
2. Download the `variables.less` and `bootswatch.less` files for the selected theme.
3. After [setting up theme repository](#using-the-manual-setup), navigate to the **bootswatch** folder.
4. Copy `bootswatch.less` and `variables`.less files to  `grunt-wavemaker-theme/src/bootswatch` folder.

[![bootswatch_folder](/learn/assets/bootswatch_folder.png)](/learn/assets/bootswatch_folder.png)

:::note
The variable files downloaded from bootswatch will fail if placed in any other theme folders like mobile or web.
:::

5. You can further customize the theme in `style.less` specific to the header, footer, leftnav, etc. [See here for details](#creating-theme-for-web-apps).
6. Replace the `theme.png` with your image in the bootswatch folder.
7. Update the `.wm-properties` to [provide theme information](#directory-structure).
8. [Build the theme](#build-theme).
9. The theme will be saved under `grunt-wavemaker-theme/dist` as **`bootswatch.zip`**
10. [Import](/learn/app-development/ui-design/themes/#import-theme) and [Apply](/learn/app-development/ui-design/themes/#apply-theme) the Theme to your app.

## Creating Theme for Mobile Apps

Mobile Apps come in two flavors - Android and iOS. The theme renders differently on these platforms and as such the theme needs to be packaged differently.

For example, below is the rendering of a Live Form within the List.

### For Android

[![theme-diff-android](/learn/assets/theme-diff-android.png)](/learn/assets/theme-diff-android.png) 

### For iOS

[![theme-diff-ios](/learn/assets/theme-diff-ios.png)](/learn/assets/theme-diff-ios.png)

As mentioned earlier in the [setup structure](#using-the-manual-setup), WaveMaker provides two folders for Mobile Themes - Android and iOS. The structure is a replica of that for Web with the content tailored for the specific platform. When building a theme for Mobile Apps, make sure that you use the appropriate files and make the same changes to both sets. DO NOT replicate the files, make changes only where needed.

## Build Theme

Once you have incorporated all your changes to the Theme files, you'll need to build it.

1. From the command prompt, build the themes using the following commands:

    ```shell
    cd grunt-wavemaker-theme
    grunt themes
    ```

2. A **`zip file`** `(web.zip/mobile.zip/bootswatch.zip)` for the theme will get generated in the **`grunt-wavemaker-theme/dist`** folder.
3. You can [import the theme](/learn/app-development/ui-design/themes/#import-theme) and [apply](/learn/app-development/ui-design/themes/#apply-theme) it to your application.

## Testing the Theme

You can test the custom theme, before import, by copying the `style.css` file directly into your app. From the left `Developer Utilities`, open `File Explorer` and you will find the `style.css` file under **`webapps -> current theme folder`**. Save and run the app. 

:::note
These changes are temporary, for the permanent change, you have to [import](/learn/app-development/ui-design/themes/#import-theme) the Theme.
:::

:::warning
If you make changes to the default theme `style.css` file, and if you do not import it as your custom theme, updating the theme will erase those changes.
:::

[![](/learn/assets/theme-css-folder.png)](/learn/assets/theme-css-folder.png)

## Publishing the Theme

:::important
Applies for Enterprise Version from [10.0 release](/learn/wavemaker-release-notes/v10-0-ga).
:::

In order to make a custom theme available to developers across the enterprise, it needs to be published. Follow the steps below to publish a Theme.

1. Once you have created a custom theme, import and test it in your application.
2. From the **Project Configurations**, under **Export** select the **Theme to EDN** option.
  ![publish theme](/learn/assets/Theme_publish.png)
3. The theme publishing wizard with three steps will display as below.

    - **Information** regarding the **Category**, **Version**, **Description** and **Change Log**.
    - **Configuration** allows you to add **Tags** for search and tracking purposes and also includes the **Metadata** populated automatically.
    - **Summary** for a review before Publishing.

    [![theme publish dialog](/learn/assets/Theme_publish_dialog.png)](/learn/assets/Theme_publish_dialog.png)

4. Note that the current Theme applied to the application will be selected for Publishing.
5. Once the EDN Admin approves the Theme, the same will be available in the Artifacts listing in the **Themes** dialog for other developers to select and apply.

## See Also

[Apply and Import Theme](/learn/app-development/ui-design/themes/)  
[Customize an Existing Theme](/learn/how-tos/customize-existing-theme/)  
[How to Customize Themes](/learn/how-tos/customizing-theme/)  
