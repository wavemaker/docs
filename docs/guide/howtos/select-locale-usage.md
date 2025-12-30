---
title: "Localization - using Select Locale"
id: "select-locale-usage"
last_update:
  author: "Author Name"
---

## Step 1: App Messages

1. From the **Secondary Actions Menu**, click on **I18N** option. 

Image: loc_create.png

2. **Localized Messages** dialog shows a list of localized text in the current application. The localized text appears as a dictionary of keys and values in different languages. 

Image: loc_default_msgs.png

3. To Add new language, click on the **Manage Language** button. It opens the Languages window. Click on the desired language and select the Plus icon. Add all the desired languages and click **Save**. 

Image: loc_new_locale.png

4. To add localized messages, select the Language and click on the message to edit. 

Image: loc_edit_msg.png
5. To create a new localized text, click the **Plus icon**. 

Image: loc_new_msg.png

6. Enter a **Message Key** and enter messages for all the Languages added and click **Done** to save. 

Image: loc_new_msg_entry.png

7. You can also set the date and time formats specific to a required locale. This will ensure that the date and time pickers are properly aligned and set to the preferred format. 

Image: loc_edit_formats.png

8. Number format changes can also be implemented by using the Number widget. This will change the format based upon the selected or browser locale. (click here to know more).

## Step 2: Binding

- WaveMaker creates a **.json** file for each of the locales. You can find the list of files when you select _Locale_ in the **File Explorer** section from the Developer Utilities Menu. You can edit, save and delete these files in the Code Editor 

Image: loc_json.png

- To display the messages, select the Label and using the **Properties Panel**, you can bind the _Caption_ or any other relevant property to any of the application messages of the project. Once you have bound all the relevant widgets to the messages, you need to enable the application to show the message based on the user's locale. 

Image: loc_binding.png

## Step 3: Application

Let us see how we can add localization to our applications.

- Drag and drop a **Select Locale** widget on the project. This widget is bound by default to the **supportLocale** variable created when the locales were added in the previous step. Use a label bound to the Localized Message created in the previous step. 

Image: loc_design.png

- Save and run the application. From the Select widget choose a language and see the text change in the Label widget
- When the user selects a _Language_ on your application or when you set the _default language_ of the app from the Project Settings dialog, WaveMaker applies the relevant locale settings to show the messages as per its value for that locale.
