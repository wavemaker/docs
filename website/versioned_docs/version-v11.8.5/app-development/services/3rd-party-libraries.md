---
title: "Resources and Third-party Libraries"
id: "3rd-party-libraries"
---
---

With the Angular code generation in place, the users can see the generated code in parallel to their application development in the **File Explorer** Section.

## File Explorer

The file explorer contains a folder called the ‘**generated-angular-app**’ folder at the root of the application folder structure.

The ‘**generated-angular-app**’ is Angular 7 compliant project structure of the WaveMaker application as shown in the image below. The content in this section is Read-only.

[![](/learn/assets/Build-start.png)](/learn/assets/Build-start.png)

## Including Resource Files

There will be times when you want to use external resources in your application. These may be in the form of images, audio files, video files, JavaScript files, UI designs etc. WaveMaker understands these needs and facilitates the usage.

[![](/learn/assets/ext_import.png)](/learn/assets/ext_import.png)

[![](/learn/assets/ext_resources.png)](/learn/assets/ext_resources.png)


1. From the **Developer Utilities** option select **File Explorer**. Here you will find the option to import resources to your app.
2. Click **+** to open the **Import Resource** dialog box
3. Select the appropriate folder, and **Upload Files** that need to be imported. You can select multiple files to import. **Note**: Be sure you select the proper folder, this will be used by the binding dialog to filter the files. For example, if you are using an Image widget, you will be selecting the Image type resource and WaveMaker will display only the files from the Images folder. [![](/learn/assets/ext_resources_binding.png)](/learn/assets/ext_resources_binding.png)
4. You can create your own sub-folders. You can also create a nested folder structure by using / as the file separator. For example, to create images sub-folder under style folder in resources, select resources enter _images/style_ under folder name field.
5. Depending upon the resource imported its usage would differ.
    - In the case of media resources like images, audio files or video files, you can bind them to the appropriate widgets.
    - In the case of JavaScript resource, entry into the _index.html_ file and invoking the script function would require some JavaScript knowledge.

