---
title: Internationalization  (i18n) Agent
last_update: { author: "Swetha Kundaram" }
---

The **Internationalization (i18n) feature** enables developers to localize application pages by automatically translating UI text elements into a selected target language. It simplifies the process of adapting applications for different regions without requiring manual updates to each label or text field.

This feature focuses on automating page-level localization for user interface elements and helps reduce the effort involved in translating large pages with multiple text components.

## What the i18n Feature Is Used For

The i18n feature is designed to support multilingual applications by converting visible UI text into another language. It is particularly useful for pages that contain a large number of text elements, such as labels, captions, titles, and placeholders.

For example, a page with 50 or more labels can be localized in a single workflow instead of manually editing each element.

## How It Works

To localize a page, you first select the page you want to translate. You then choose a target language, such as Spanish or Telugu. Once the language is selected, the system automatically converts the existing UI text elements on that page into the chosen language.

The current implementation focuses specifically on text elements within the user interface. A planned enhancement aims to expand this capability by using deeper page structure analysis for more advanced localization scenarios.

## Supported UI Elements

The i18n feature currently applies to visible text elements within a page, including:

* Labels
* Captions
* Titles
* Placeholders

All existing content in these elements is converted as part of the localization process.

## Current Limitations

The i18n feature is limited to UI-level text. It does not translate:

* Database-stored content
* Dynamic data retrieved from external sources

Only static text elements defined within the page’s UI structure are supported.

## How It Helps You as a Developer

By automating UI-level localization, the i18n feature reduces manual translation effort and speeds up the process of preparing applications for multilingual audiences. It is especially valuable for pages with many text components, where manual updates would be time-consuming and error-prone.

The feature allows developers to quickly adapt user interfaces for different languages while maintaining consistency across the page.

The Internationalization (i18n) feature exists to answer one core question:

**“Can I localize this page’s UI text into another language quickly?”**

If your goal is to translate labels, captions, titles, and placeholders at the page level, this feature provides a streamlined and automated solution.

