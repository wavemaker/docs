---
last_update: { author: "Priyanka Bhadri" }
---

# Localization

Localization is the process of adapting an application to meet the language, cultural, and regional preferences of users. In WaveMaker, localization enables applications to be rendered in multiple languages and formats, making them more usable and relevant for a global audience. Localization support in WaveMaker is provided at two levels: **Application Localization** and **Platform Localization**. 

---

## Application Localization

Application localization allows you to present the application’s user interface in different languages and formats:

- **Default Language and Locale:**  
  From **Project Settings**, you can configure the default language and locale for an application from settings. This determines the language used as well as regional formats such as date and time when the application loads.

- **Select Locale Widget:**  
  By adding the **Select Locale** widget to a page, end users can choose the language in which the app should be displayed. When a language is selected, WaveMaker applies the corresponding locale settings, updating UI text and regional formats accordingly. 

To support localization within an app, developers typically maintain a **dictionary of localized messages** (keys and translated values) that can be bound to UI components such as labels and messages. 

<!-- ![language](../assets/i18.png) -->

---

## Platform Localization *(Enterprise Only)*

Platform localization allows developers to work within the WaveMaker Studio itself in their preferred language. This feature is available only in the **Enterprise edition** of WaveMaker. 

### Setting Language Preference

- Developers can set a **personal preferred language** by editing their profile in Studio.  
- Administrators can configure a **default language for all users** from the Launchpad. 

### Adding Language Bundles

To enable additional language support in Studio, you must add language bundles:

1. Copy an existing English bundle file (`en.properties` or `en.json`).  
2. Rename it using the target locale identifier (e.g., `de.properties` for German).  
3. Translate the content appropriately.  
4. Add the files to the required resource locations for Launchpad, Studio frontend, and backend modules. 

WaveMaker includes English and German bundles by default. Adding new locales involves placing the language files in specific module directories so that both the Studio UI and backend services can use them.

<!-- ### Updating Build Scripts

Once language bundles are added, the platform build process must be updated:

- Create or update a **Flyway script** to insert the new locale into the platform’s database.  
- For example, insert an entry into the `SUPPORTED_LOCALE` table for the new language.  
- After rebuilding the platform, developers will see the new language option in their Studio profiles.  -->

---

## How Localization Works at Runtime

- When an application supports multiple languages, WaveMaker can detect the user’s preferred locale from the browser or selected language, and render the UI accordingly. 
- The **Select Locale widget** is bound to a locale variable (usually `supportedLocale`). When the user selects a language, localized messages are applied dynamically without requiring a full page reload in many cases. 
- Date, time, number, and currency formats are adjusted based on the selected locale’s regional settings. 

---

## Summary

WaveMaker’s localization capabilities enable applications to support multiple languages, regional formatting, and cultural conventions for a global audience. Application localization focuses on rendering content in various languages at runtime, while platform localization allows developers to interact with the Studio interface itself in different languages. Both levels of localization improve usability and broaden the reach of WaveMaker applications. 
