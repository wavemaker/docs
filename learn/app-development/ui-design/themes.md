---
title: "Themes"
id: "themes"
---
---

**Themes** are style elements which work at the widget or UI component level. Themes help you provide a consistent look and feel to your application. Theme mainly contains the following styling for all the elements on the page:

1. _color_ - background, text color, border color, hover/active/focus colors etc.
2. _properties_ for text like text-align, text-decoration, font-size, font-weight etc.
3. _layout_ like margin, padding, border-radius etc.

In this document the following concepts are elaborated upon:

- [applying themes](#apply-theme) to WaveMaker app,
- [importing custom themes](#import-theme),
- [creating themes](#create-theme) for WaveMaker [web apps](#create-theme-web), [using Bootswatch](#create-theme-bootswatch), and for [mobile apps](#create-theme-mobile),
- [building](#build-theme) a WaveMaker app,
- [testing](#test-theme) or changing theme temporarily,
- [publishing](#publish-theme) the Theme to EDN, and
- WaveMaker [theme package structure](#theme-packaging).

## Applying Theme

To **change the theme** of the page, simply click on the **Themes** option from the _Workspace Toolbar:_

[![](../../assets/theme_change.png)](../../assets/theme_change.png)

This will open a Theme dialog with a list of available themes to choose from.

[![](../../assets/Themes.png)](../../assets/Themes.png) **NOTE**: WaveMaker provides a few default themes that can be applied to your apps. From time to time, these Themes might undergo changes and you might be asked to update the theme when you open the project. **Remember** that the updates will re-write any changes you made directly to the CSS styles of the corresponding theme.

## Importing Theme

You can use your own theme by importing it into your app. [See below to know how to create Theme](#create-theme).

(**NOTE**: For Enterprise version, the custom themes will be available once they are published to the EDN and approved by the EDN Admin, WITHOUT any need for Import)

From the above Themes dialog, choose the **Import Theme **button for a pop-up window which will allow you to select a WaveMaker theme zip file. Once imported, the Theme will appear in the _Theme dialog_. To apply the theme, select the imported theme and **Re-Apply**.

# Creating Theme for WaveMaker Apps

WaveMaker app (Web & Mobile) theme is based on the BootStrap CSS markup. Creation of a theme requires a working knowledge of HTML, CSS, LESS and Grunt.

**Prerequisites**: Before creating a Theme, make sure you have the following installed on your system:

- [Nodejs](https://nodejs.org/)
- [GIT](https://www.git-scm.com/)

**Setup**:

1. Open GIT Bash prompt
2. Install **grunt** using the following command:
    
    npm install -g grunt-cli
    
    For more information on grunt [click here](https://gruntjs.com/getting-started)
3. Install **bower** using the following command:
    
    npm install -g bower
    
    For more information on bower [click here](https://www.npmjs.com/package/bower)
4. Setup the **WaveMaker Theme repository**
    
     git clone https://github.com/wavemaker/grunt-wavemaker-theme.git
     cd grunt-wavemaker-theme
     npm install
    
    Follow the instructions given [at the GIT repository](https://github.com/wavemaker/grunt-wavemaker-theme)
5. After setting up the repository, under the **src** folder you will find the following files that can be modified as per your needs: [![theme-web](../../assets/theme-web.png)](../../assets/theme-web.png) **NOTE**: Themes for Web and Mobile(Android/iOS) apps are different, use the appropriate theme source file to generate the theme bundle.

**Directory Structure**

1. **Fonts** folder: The web fonts can be copied here and referenced in the theme. There will be references to Roboto regular fonts in the variables.less (src/web), to avail them please download Roboto regular fonts and paste them in fonts directory (src/web/fonts).
2. **.wmprojects.properties**: This contains essential properties required to identify the theme
    - **_name:_** for the theme,
    - **_version:_** of the theme. Updated version will be used to replace the existing theme in the project.
    - _**description**_: a short meaningful _description_ of the theme,
    - **_type:_** THEME (DO NOT CHANGE THIS), and
    - _**author**_: name of the author for the theme.
3. **theme.png**: Used to visually identify the Theme in the Theme dialog. The size of the image should be 160 x 120 px.
4. **style.less:** This less file includes styles for components like header, footer, leftnav, calendar etc., which are not defined in the bootstrap CSS. These components can be further customized in this file by using the variables defined at the beginning of the file eg header background color can be changed using the @wm-header-bg-color variable.
5. **_variables.less: _**This less file includes the styles defined by bootstrap. The values defined in this file are used by the widgets like buttons, links, textbox etc. Refer [Bootstrap documentation](http://getbootstrap.com/customize/) on LESS variables for more details.

## Creating WaveMaker Theme for Web Apps

Following are steps for creating a theme for a web app:

1. After [setting up theme repository](#create-theme), navigate to the **web** folder.
2. Open _style.less_ and _variables.less_ in the editor of your choice.
3. To use the **web fonts** in the theme, copy the web fonts (.ttf,.eot,woff) in the font folder and include the font definition in _variables.less_:
    
    @font-face {
     font-family: 'robotoregular';
     src: url('fonts/Roboto-Regular-webfont.eot');
     src: url('fonts/Roboto-Regular-webfont.eot?#iefix') format('embedded-opentype'),
     url('fonts/Roboto-Regular-webfont.woff') format('woff'),
     url('fonts/Roboto-Regular-webfont.ttf') format('truetype'),
     url('fonts/Roboto-Regular-webfont.svg#robotoregular') format('svg');
    }
    
4. The _variables.less_ contain variables which are used while building the bootstrap CSS.  For example, `@brand-primary` value change will affect all the styles using this specific property value. More information on variables at the [Bootstrap site](http://getbootstrap.com/customize/).
    
    //## Gray and brand colors for use across Bootstrap.
    @brand-primary:         #551C2B;
    @brand-success:         #088362;
    
    [More on Styling App Components](/learn/how-tos/customizing-theme/)
5. Replace the theme.png with your image in the web folder
6. Update the .wm-properties to [provide theme information](#dir-struct)
7. [Build the theme](#build-theme).
8. The theme will be saved under _grunt-wavemaker-theme/dist_ as **web.zip**
9. [Import](#import-theme) and [Apply](#apply-theme) the Theme to your app.

## Creating WaveMaker Theme for Web apps using Bootswatch

Bootswatch provides bootstrap themes that can be integrated into your WaveMaker web apps. The prerequisites and setup for building WaveMaker theme are the same as mentioned in the [previous section](#create-theme).

1. Select a theme from [Bootswatch](https://bootswatch.com/3/).
2. Download the _variables.less_ and _bootswatch.less_ files for the selected theme.
3. After [setting up theme repository](#create-theme), navigate to the **bootswatch** folder.
4. Copy _bootswatch.less_ and _variables_.less files to  _grunt-wavemaker-theme/src/bootswatch_ folder. [![bootswatch_folder](../../assets/bootswatch_folder.png)](../../assets/bootswatch_folder.png) **NOTE**: The variable files downloaded from bootswatch will fail if placed in any other theme folders like mobile or web.
5. You can further customize the theme in style.less specific to the header, footer, leftnav etc. [See here for details](#create-theme-web).
6. Replace the theme.png with your image in the bootswatch folder
7. Update the .wm-properties to [provide theme information](#dir-struct)
8. [Build the theme](#build-theme).
9. The theme will be saved under _grunt-wavemaker-theme/dist_ as **bootswatch.zip**
10. [Import](#import-theme) and [Apply](#apply-theme) the Theme to your app.

## Creating WaveMaker Theme for Mobile Apps

Mobile Apps come in two flavors - Android and iOS. The theme renders differently on these platforms and as such the theme needs to be packaged differently.

For example, below is the rendering of a Live Form within List on Android and [![theme-diff-android](../../assets/theme-diff-android.png)](../../assets/theme-diff-android.png) iOS device:

[![theme-diff-ios](../../assets/theme-diff-ios.png)](../../assets/theme-diff-ios.png)

As mentioned in the [previous section](/learn/app-development/ui-design/themes/#create-theme), WaveMaker provides two folders for Mobile Themes - Android and iOS. The structure is replica of that for Web with the content tailored for the specific platform. When building theme for Mobile Apps, make sure that you use the appropriate files and make the same changes to both sets. DO NOT replicate the files, make changes where needed.

## Building WaveMaker Theme

Once you have incorporated all your changes to the Theme files, you need to build it.

1. From the command prompt, build the themes using the following commands:
    
    cd grunt-wavemaker-theme
    grunt themes
    
2. A **zip file** (web.zip/mobile.zip/bootswatch.zip) for the theme will get generated in the **grunt-wavemaker-theme/dist** folder.
3. You can [import the theme](#import-theme) and [apply](#apply-theme) it to your application.

## Testing a Custom Theme

You can test the custom theme, before import, by copying the _style.css_ file directly into your app. From the left _Developer Utilities_, open _File Explorer_ and you will find the _style.css_ file under **webapps -> current theme folder**. Save and run the app. **Notes**:

- These changes are temporary, for permanent change you have to import the Theme.
- If you make changes to the default theme _style.css_ file and do not import it as your custom theme, updating the theme will erase those changes.

[![](../../assets/theme-css-folder.png)](../../assets/theme-css-folder.png)

## Publishing a Custom Theme

##### Enterprise Version post 10.0 release

In order to make a custom theme available to developers across the enterprise, it needs to be published. Following are the steps to publish a Theme:

1. Once you have created a custom theme, import and test it in your application.
2. From the **Project Configurations**, under **Export** select the **Theme to EDN** option. [![](../../assets/Theme_publish.png)](../../assets/Theme_publish.png)
3. Theme publishing wizard with three steps will appear:
    
    1. 1. **Information** regarding the **Category**, **Version**, **Description** and **Change Log**.
        2. **Configuration** allows you to add **Tags** for search and tracking purposes and also includes the **Metadata** populated automatically.
        3. **Summary** for a review before Publishing.
    
    [![](../../assets/Theme_publish_dialog.png)](../../assets/Theme_publish_dialog.png)
4. Note that the current Theme applied to the application will be selected for Publishing.
5. Once the EDN Admin approves the Theme, the same will be available in the Artifacts listing and the Themes dialog for other developers to select and apply.

## WaveMaker Theme Package Structure

### Web Responsive

For creating a custom theme for WaveMaker application, you need to understand the package structure. The theme package contains the following files:

<table><tbody><tr><td>Name</td><td>Description</td><td></td></tr><tr><td>Fonts</td><td>Folder containing web-based fonts used in the app.</td><td>Required</td></tr><tr><td>.wmproject.properties</td><td>Containing essential properties required to identify the theme which includes the <em>name</em> of the theme, <em>version</em> of the theme, a short meaningful <em>description</em> of the theme, the <em>type</em> should be THEME (DO NOT CHANGE THIS), and the name of the <em>author</em> for the theme.</td><td>Required</td></tr><tr><td>style.css</td><td>Containing styles related to the theme.</td><td>Required</td></tr><tr><td>theme.png</td><td>Theme icon.</td><td>Required</td></tr><tr><td>variables.less</td><td>LESS variables to define colors, sizes and more.</td><td>Required</td></tr></tbody></table>

## Hybrid Mobile

In a hybrid app mobile theme, there can be different flavors for android and ios systems. Hence, in a theme bundle, there are different folders for android and ios.

Following is the package structure:

<table><tbody><tr><td>Sub-Folder</td><td>Name</td><td>Description</td><td></td></tr><tr><td>none</td><td>.wmproject.properties</td><td>Containing essential properties required to identify the theme which includes the <em>name</em> of the theme, <em>version</em> of the theme, a short meaningful <em>description</em> of the theme, the <em>type</em> should be THEME (DO NOT CHANGE THIS), and the name of the <em>author</em> for the theme.</td><td>Required</td></tr><tr><td>none</td><td>theme.png</td><td>Theme icon.</td><td>Required</td></tr><tr><td>Android</td><td>Fonts</td><td>Folder containing web-based fonts used in the app.</td><td>Required</td></tr><tr><td></td><td>style.css</td><td>Containing styles related to the theme.</td><td>Required</td></tr><tr><td></td><td>variables.less</td><td>LESS variables to define colors, sizes and more.</td><td>Required</td></tr><tr><td>ios</td><td>Fonts</td><td>Folder containing web-based fonts used in the app.</td><td>Required</td></tr><tr><td></td><td>style.css</td><td>Containing styles related to the theme.</td><td>Required</td></tr><tr><td></td><td>variables.less</td><td>Less variables to define colors, sizes and more.</td><td>Required</td></tr></tbody></table>

We have learned how WaveMaker themes work and how we can build, import and apply custom themes.

< Page Artefacts

2\. Design UI

- 2.1 Overview
    - [i. App UI Design](/learn/app-development/ui-design/design-overview/#app-ui-design)
    - [ii. Responsive Design](/learn/app-development/ui-design/design-overview/#responsive-design)
    - [iii. UI Development](/learn/app-development/ui-design/design-overview/#ui-development)
- 2.2 Page Concepts
    - [i. Single Page Apps](/learn/app-development/ui-design/page-concepts/)
    - [ii. Page Life Cycle](/learn/app-development/ui-design/page-concepts/#page-lifecycle)
    - [iii. Page Creation](/learn/app-development/ui-design/page-creation/)
    - [iv. Parameter Passing](/learn/app-development/ui-design/page-creation/#page-parameters)
    - [v. Partial Pages](/learn/app-development/ui-design/page-concepts/partial-pages/)
    - vi. Page Basics
        - [○ Page Layouts](/learn/app-development/ui-design/page-concepts/page-layouts/#page-layouts)
        - [○ Page Navigation](/learn/app-development/ui-design/page-concepts/page-layouts/#page-navigation)
        - [○ Events](/learn/app-development/ui-design/page-concepts/page-layouts/#events)
            - [● Event Categorization](/learn/app-development/ui-design/page-concepts/page-layouts/#event-categorization)
            - [● Multiple Event Handling](/learn/app-development/ui-design/page-concepts/page-layouts/#multiple-events)
    - [vii. Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/)
        - [○ Custom Page Templates](/learn/app-development/ui-design/page-concepts/page-templates/#creating-page-templates)
    - [viii. Use Cases](/learn/app-development/ui-design/use-cases-ui-design/)
- [2.3 Project Shell](/learn/app-development/ui-design/project-shells/)
- 2.4 Page Artefacts
    - [i. Overview](/learn/app-development/ui-design/page-artefacts/)
    - [ii. Markup](/learn/app-development/ui-design/page-artefacts/#page-markup)
    - [iii. Script](/learn/app-development/ui-design/page-artefacts/#page-script)
    - [iv. Style](/learn/app-development/ui-design/page-artefacts/#page-style)
    - [v. Variables](/learn/app-development/ui-design/page-artefacts/#page-variables)
- [2.5 Themes](#)
    - [i. Overview](#)
    - [ii. Applying Theme](#apply-theme)
    - [iii. Importing Theme](#import-theme)
    - [iv. Creating Themes](#create-theme)
        - [○ Creating Web Theme](#create-theme-web)
        - [○ Creating Web Theme using Bootswatch](#create-theme-bootswatch)
        - [○ Creating Mobile Theme](#create-theme-mobile)
    - [v. Building Theme](#build-theme)
    - [vi. Testing Theme](#test-theme)
    - [vii. Publishing Theme](#publish-theme)
