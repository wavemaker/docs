---
id: "working-with-autocode-plugin"
title: "Welcome to Figma Autocode"
sidebar_label: "Figma Autocode"
---
---

# WaveMaker AutoCode - Design to Code Figma Plugin

WaveMaker AutoCode is a Figma plugin that converts Figma designs which are made using Material 3.0 UI Kit or WaveMaker UI Kit into WaveMaker-compatible frontend code, accelerating the design-to-development process. The generated code can be easily edited in WaveMaker Studio, where you can bind it to backend APIs and customize pages with business logic effortlessly.

Video

The following steps are demonstrated in the video to convert a Figma design into code using the WaveMaker AutoCode plugin.

1. Search for **WaveMaker AutoCode** in the **Figma Community Marketplace**. Or click this [link|https://figma.com/@wavemaker.com]
2. Open your design file or use the sample design file provided with the plugin.
3. Launch the plugin and select the pages you want to convert into code.
4. Click **Run AutoCode Plugin** to start processing the selected pages.
5. Once processing is complete, preview the developed screens.
6. To edit the generated code, click **Edit in WaveMaker**.
7. Log in to your WaveMaker account.
8. Enter a project name in the project creation dialog.
9. A new project with the generated code will be created in the WaveMaker studio, where you can make the necessary changes.

## Key Features
1. Generated code uses the enterprise ready and battle tested WaveMaker UI component library.
2. Maps Figma variables to CSS variables. The modes (light, dark color schemes) present in Figma are also captured. 
3. Translates Figma's on-click navigation and overlay prototyping into functional click actions in the generated code.

## Prerequisite
1. This is a **Dev Mode plugin**, so you must have **access to Figma Dev Mode**, which requires a **paid Figma account**. 
2. Currently, the plugin supports only **Material 3.0** and **WaveMaker UI Kit**. 
3. Works on both the Figma browser and desktop application.

## Download plugin

The plugin is available in the **Figma Community Marketplace** and can be opened in the design file you wish to use. You can also access it from the **Plugins tab in Dev Mode**. 

## Steps to Use the Plugin

1. **Switch to Dev mode**

    At the bottom of the Figma design canvas, toggle the last button in the toolbar to switch to Dev Mode.

    ![switching to dev mode](/learn/assets/autocode/switch_to_dev.png)

2. **Open the Plugin**

    In the **right panel**, go to the **Plugins tab**

    ![switching to plugins tab](/learn/assets/autocode/switch_to_plugins.png)

    Search for **WaveMaker Autocode Plugin** and click **Run**.
    
    ![launch plugin](/learn/assets/autocode/search_plugin.png)

3. **Generate Code**

    Select the pages you want to process and click **Run Autocode Plugin**. The plugin will process the selected pages.

    ![select pages and run plugin](/learn/assets/autocode/select_pages.png)

4. **Preview Developed Screens**

    Once processing is complete, click **Preview Developed Screens** to view the output. This button will be enabled after processing a few pages. You can preview completed pages while the remaining ones continue processing.

    ![ready for preview](/learn/assets/autocode/preview_complete.png)

    Clicking Preview Developed Screens will open your default browser, where you can view the output. The preview screen will display the generated design along with the corresponding code in the code tab.

    ![output preview](/learn/assets/autocode/preview_screens.png)

    ![code preview](/learn/assets/autocode/preview_code.png)

## Editing generated code in WaveMaker Studio

To edit the generated code, you must have a WaveMaker account. Follow these steps:

1. On the AutoCode preview screen, click **Edit in WaveMaker**.

    ![locate edit in WaveMaker button](/learn/assets/autocode/edit_in_wm.png)

2. If you are not logged in, you will be redirected to the WaveMaker studio login screen. After logging in, enter a project name in the project creation dialog and click **Open Project**.

    ![creating project](/learn/assets/autocode/create_project.png)

3. This will create the project in WaveMaker Studio and redirect you to it, where you can edit the code.

    ![WaveMaker project](/learn/assets/autocode/project_in_studio.png)
















