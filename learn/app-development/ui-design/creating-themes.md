---
title: "Creating Themes"
id: ""
sidebar_label: "Create Themes"
---
---

WaveMaker themes (Web & Mobile) is based on the Bootstrap CSS markup. For creating a theme, you should know HTML, CSS, LESS, Grunt. There are two ways to create themes in Wavemaker  
1. The first approach is by using the Theme Editor tool 
2. The second approach is by manually installing the entire setup.

## Editor tool
**Theme Builder** is a new Wavemaker application that allows you to build a theme by changing **colors**, **typography**, and **styles** of the components and elements.

Following are the steps to build a theme:

1. Go to https://apps.wavemakeronline.com/Theme_Builder/#/Dashboard
2. Click on the **Explore/Create** themes

[![](/learn/assets/theme-builder.png)](/learn/assets/theme-builder.png)


3. On the Editor page, you can customize the existing #HEX values with custom hex, rgba, rgb colors, Choose font-family and sizes, Select different styles for the component and elements in simple steps 

### Step 1

Change the existing **"#HEX"** values with custom colors from the color picker for primary, secondary, and additional colors you want to modify for the pages - 

1. **`Colors`**: Global colors for components and elements
2. **`LeftNav`**: Colors for left navigation
3. **`Header`**: Colors to change the header styles
4. **`More options`**: Disable and alert state colors for the application

[![](/learn/assets/theme-builder-step1.png)](/learn/assets/theme-builder-step1.png)


### Step 2

Customize the typography of the body text, captions, and headings. Choose available **"font-family"** values from the dropdown.

1. **`Heading font`**: Change font-family for headings like H1, H2, H3, H4, H5, H6
2. **`Body font`**: Change font-famliy for body and captions 
3. **`More options`**: Modify font weight, font-size, case

[![](/learn/assets/theme-builder-step2.png)](/learn/assets/theme-builder-step2.png)


### Step 3

Change the variation of theme style as per the aesthetics. Switching between themes will allow you to preview the relative changes

    - Material Line
    - Flat Outline 
    - Gradient Fill

[![](/learn/assets/theme-builder-step3.png)](/learn/assets/theme-builder-step3.png)
  

:::note
Step 4 Change the behavior of icons (coming soon)
:::

4. **Click done**, and your changes are ready to download.
5. **Name** your theme from the dialog and click the download theme button.

[![](/learn/assets/theme-builder-rename.png)](/learn/assets/theme-builder-rename.png)

6. **Import** and **apply** the downloaded theme into any of your WaveMaker applications.



## Manual approach

### Prerequisites 
Before creating a theme, make sure you have installed the following on your machine:

- [Nodejs](https://nodejs.org/)
- [GIT](https://www.git-scm.com/)

### Setup

1. Open GIT Bash prompt
2. Install **grunt** using the following command:
```    
npm install -g grunt-cli
``` 
For more information, see [Grunt](https://gruntjs.com/getting-started).

3. Install **bower** using the following command:
```
npm install -g bower
```  
For more information on bower [click here](https://www.npmjs.com/package/bower)
4. Setup the **WaveMaker Theme repository**. 
> For Git clone, see [Grunt Wavemaker Theme](https://github.com/wavemaker/grunt-wavemaker-theme.git).
```     
cd grunt-wavemaker-theme
```
```
npm install
``` 
Follow the instructions given at the [Git repository](https://github.com/wavemaker/grunt-wavemaker-theme).

5. After setting up the repository, under the **src** folder you will find the following files that can be modified as per your needs:  

[![theme-web](/learn/assets/theme-web.png)](/learn/assets/theme-web.png) 

:::note
Themes for Web and Mobile (Android/iOS) apps are different, use the appropriate theme source file to generate the theme bundle.
:::

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
5. **`variables.less`**: This less file includes the styles defined by bootstrap. The values defined in this file are used by the widgets like buttons, links, textbox etc. Refer [Bootstrap documentation](http://getbootstrap.com/customize/) on LESS variables for more details.

## Creating WaveMaker Theme for Web Apps

Following are steps for creating a theme for a web app:

1. After [setting up theme repository](#create-theme), navigate to the **web** folder.
2. Open `style.less` and `variables.less` in the editor of your choice.
3. To use the **web fonts** in the theme, copy the web fonts (.ttf,.eot,woff) in the font folder and include the font definition in `variables.less`:
```    
@font-face {
    font-family: 'robotoregular';
    src: url('fonts/Roboto-Regular-webfont.eot');
    src: url('fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
    url('fonts/Roboto-Regular-webfont.woff') format('woff'),
    url('fonts/Roboto-Regular-webfont.ttf') format('truetype'),
    url('fonts/Roboto-Regular-webfont.svg#robotoregular') format('svg');
}
```    
4. The `variables.less` contain variables which are used while building the bootstrap CSS.  For example, `@brand-primary` value change will affect all the styles using this specific property value. More information on variables at the [Bootstrap site](http://getbootstrap.com/customize/).
```    
//## Gray and brand colors for use across Bootstrap.
@brand-primary:         #551C2B;
@brand-success:         #088362;
```    
[More on Styling App Components](/learn/how-tos/customizing-theme/)
5. Replace the theme.png with your image in the web folder
6. Update the .wm-properties to [provide theme information](#dir-struct)
7. [Build the theme](#build-theme).
8. The theme will be saved under `grunt-wavemaker-theme/dist` as **web.zip**
9. [Import](#import-theme) and [Apply](#apply-theme) the Theme to your app.

## Creating WaveMaker Theme for Web apps using Bootswatch

Bootswatch provides bootstrap themes that can be integrated into your WaveMaker web apps. The prerequisites and setup for building WaveMaker theme are the same as mentioned in the [previous section](#create-theme).

1. Select a theme from [Bootswatch](https://bootswatch.com/3/).
2. Download the `variables.less` and `bootswatch.less` files for the selected theme.
3. After [setting up theme repository](#create-theme), navigate to the **bootswatch** folder.
4. Copy `bootswatch.less` and `variables`.less files to  `grunt-wavemaker-theme/src/bootswatch` folder. 

[![bootswatch_folder](/learn/assets/bootswatch_folder.png)](/learn/assets/bootswatch_folder.png)

:::note
The variable files downloaded from bootswatch will fail if placed in any other theme folders like mobile or web.
:::

5. You can further customize the theme in style.less specific to the header, footer, leftnav etc. [See here for details](#create-theme-web).
6. Replace the theme.png with your image in the bootswatch folder
7. Update the .wm-properties to [provide theme information](#dir-struct)
8. [Build the theme](#build-theme).
9. The theme will be saved under `grunt-wavemaker-theme/dist` as **bootswatch.zip**
10. [Import](#import-theme) and [Apply](#apply-theme) the Theme to your app.

## Creating WaveMaker Theme for Mobile Apps

Mobile Apps come in two flavors - Android and iOS. The theme renders differently on these platforms and as such the theme needs to be packaged differently.

For example, below is the rendering of a Live Form within List on Android and [![theme-diff-android](/learn/assets/theme-diff-android.png)](/learn/assets/theme-diff-android.png) iOS device:

[![theme-diff-ios](/learn/assets/theme-diff-ios.png)](/learn/assets/theme-diff-ios.png)

As mentioned in the [previous section](/learn/app-development/ui-design/themes/#create-theme), WaveMaker provides two folders for Mobile Themes - Android and iOS. The structure is replica of that for Web with the content tailored for the specific platform. When building theme for Mobile Apps, make sure that you use the appropriate files and make the same changes to both sets. DO NOT replicate the files, make changes where needed.

## Building WaveMaker Theme

Once you have incorporated all your changes to the Theme files, you need to build it.

1. From the command prompt, build the themes using the following commands:
    
    cd grunt-wavemaker-theme
    grunt themes
    
2. A **zip file** (web.zip/mobile.zip/bootswatch.zip) for the theme will get generated in the **grunt-wavemaker-theme/dist** folder.
3. You can [import the theme](#import-theme) and [apply](#apply-theme) it to your application.

## Testing a Custom Theme

You can test the custom theme, before import, by copying the `style.css` file directly into your app. From the left `Developer Utilities`, open `File Explorer` and you will find the `style.css` file under **webapps -> current theme folder**. Save and run the app. **Notes**:

- These changes are temporary, for permanent change you have to import the Theme.
- If you make changes to the default theme `style.css` file and do not import it as your custom theme, updating the theme will erase those changes.

[![](/learn/assets/theme-css-folder.png)](/learn/assets/theme-css-folder.png)

## Publishing a Custom Theme

##### Enterprise Version post 10.0 release

In order to make a custom theme available to developers across the enterprise, it needs to be published. Following are the steps to publish a Theme:

1. Once you have created a custom theme, import and test it in your application.
2. From the **Project Configurations**, under **Export** select the **Theme to EDN** option. 

[![](/learn/assets/Theme_publish.png)](/learn/assets/Theme_publish.png)

3. Theme publishing wizard with three steps will appear:
    
    1. **Information** regarding the **Category**, **Version**, **Description** and **Change Log**.
    2. **Configuration** allows you to add **Tags** for search and tracking purposes and also includes the **Metadata** populated automatically.
    3. **Summary** for a review before Publishing.
    
    [![](/learn/assets/Theme_publish_dialog.png)](/learn/assets/Theme_publish_dialog.png)

4. Note that the current Theme applied to the application will be selected for Publishing.
5. Once the EDN Admin approves the Theme, the same will be available in the Artifacts listing and the Themes dialog for other developers to select and apply.

## WaveMaker Theme Package Structure

### Web Responsive

For creating a custom theme for WaveMaker application, you need to understand the package structure. The theme package contains the following files:

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

We have learned how WaveMaker themes work and how we can build, import and apply custom themes.

