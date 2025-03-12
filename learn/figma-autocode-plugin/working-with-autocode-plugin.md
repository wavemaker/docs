---
id: "working-with-autocode-plugin"
title: "Welcome to Figma Autocode"
sidebar_label: "Figma Autocode"
---
---

# Wavemaker AutoCode - Design to Code Figma Plugin

Wavemaker AutoCode is a Figma plugin that converts Figma designs using popular UI kits like Material 3.0 into Wavemaker-compatible frontend code, accelerating the design-to-development process. The generated code can be easily edited in Wavemaker Studio, where you can bind it to backend APIs and customize pages with business logic effortlessly.

VEDIO

The following steps are demonstrated in the video to convert a Figma design into code using the Wavemaker AutoCode plugin.

1. Search for **WaveMaker AutoCode** in the **Figma Community Marketplace**.
2. Open it in your design file or use the sample design file provided with the plugin.
3. Launch the plugin and select the pages you want to process.
4. Click **Run AutoCode Plugin** to start processing the selected pages.
5. Once processing is complete, preview the developed screens.
6. To edit the generated code, click **Edit in WaveMaker**.
7. Log in to your WaveMaker account.
8. Enter a project name in the project creation dialog.
9. A new project with the generated code will be created in the WaveMaker studio, where you can make the necessary changes.

## Key Features
1. Supports most web application components.
2. Maps Figma variables to CSS variables. 
3. Creates separate themes for each Figma variable modes.
4. Translates Figma's on-click navigation and overlay prototyping into functional click actions in the generated code.

## Prerequisite
1. This is a **Dev Mode plugin**, so you must have **access to Figma Dev Mode**, which requires a **paid Figma account**. 
2. Currently, the plugin supports only **Material 3.0** and **Wavemaker UI Kit**. 
3. It works on both the Figma browser and desktop application.

## Download plugin

The plugin is available in the **Figma Community Marketplace** and can be opened in the design file you wish to use. You can also access it from the **Plugins tab in Dev Mode**. 

## Steps to Use the Plugin

1. **Switch to Dev mode**

    At the bottom of the Figma design canvas, toggle the last button in the toolbar to switch to Dev Mode.

    ![switching to dev mode](/learn/assets/switch_to_dev.png)

2. **Open the Plugin**

    In the **right panel**, go to the **Plugins tab**

    ![switching to plugins tab](/learn/assets/switch_to_plugins.png)

    Search for **Wavemaker Autocode Plugin** and click **Run**.
    
    ![launch plugin](/learn/assets/search_plugin.png)

3. **Generate Code**

    Select the pages you want to process and click **Run Autocode Plugin**. The plugin will process the selected pages.

    ![select pages and run plugin](/learn/assets/select_pages.png)

4. **Preview Developed Screens**

    Once processing is complete, click **Preview Developed Screens** to view the output. This button will be enabled after processing a few pages. You can preview completed pages while the remaining ones continue processing.

    ![ready for preview](/learn/assets/preview_complete.png)

    Clicking Preview Developed Screens will open your default browser, where you can view the output. The preview screen will display the generated design along with the corresponding code in the code tab.

    ![output preview](/learn/assets/preview_screens.png)

    ![code preview](/learn/assets/preview_code.png)

## Editing generated code in WaveMaker Studio

To edit the generated code, you must have a Wavemaker account. Follow these steps:

1. On the AutoCode preview screen, click **Edit in Wavemaker**.

    ![locate edit in wavemaker button](/learn/assets/edit_in_wm.png)

2. If you are not logged in, you will be redirected to the WaveMaker studio login screen. After logging in, enter a project name in the project creation dialog and click **Open Project**.

    ![creating project](/learn/assets/create_project.png)

3. This will create the project in Wavemaker Studio and redirect you to it, where you can edit the code.

    ![wavemaker project](/learn/assets/project_in_studio.png)
















