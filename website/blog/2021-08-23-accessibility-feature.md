---
title: "Accessibility Support in WaveMaker"
author: Lovin Ahmed
---

**Accessibility** is essential for individuals and organizations that want to create high-quality websites and applications. It enables people with disabilities to use different Assistive Technologies (AT) and Adaptive Strategies for the business benefits of Web Accessibility. WaveMaker also focuses on enabling their product with international standards for Web Accessibility from World Wide Web Consortium (W3C), including Web Content Accessibility Guidelines (WCAG) and Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) as the first step in applying them. 

<!-- truncate -->

## Why Accessibility?

Although Accessibility is designed for people with disabilities, it helps everyone in general. Accessibility promotes usability. Everyone, in general, can benefit from clear instructions, opportunities to correct form errors, simple visual layouts, high color contrast, and the option to read a transcript or captions to a video or audio recording.

In the IT world, Accessibility often describes hardware and software designed to help those who experience disabilities. 


### Features of Accessibility Websites

* Good use of HTML headings
* Accessible with the keyboard
* Accessible images
* Accessible menus
* Accessible forms
* Accessible tables
* Effective use of color
* Meaningful link text

## Accessibility in WaveMaker

To make components accessible, all the text on the web page must be unique, along with its captions and roles. To make it possible, we have introduced **aria-labels** attributes for all the `wm-widgets` which are configurable and certain [Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) to identify every component as per their standard behavior. This ARIA "roles" and "attributes" will benefit the group of people using Assistive Technology Readers (ATR) to read the text and the purpose of the widget aloud to the users. 

WaveMaker Accessibility enhancements will cover Web Content Accessibility Guidelines (WCAG) "A" and "AA" compliance for all non-text content, including the following.

Name Role & Value, Info, Relationships, Meaning Sequence, Sensory Characteristics, Identify Input Purpose, Non-Text Contrast, Page Titled, Headings and Labels, Label in Name, Language of Page, Status Messages, Error Prevention.


### Good Use of Headings

To make good use of headings on a page, add CSS class name from the **Style** properties tab, for example .h1, .h2, .h3, etc. Using any of the above headings class name, an attribute **"aria-level"** will be assigned to the HTML structure to make the screen readers understand the text specificity while scanning a page. You can copy the heading caption to the *hint* property to make it ARIA accessible.
 
For more information on how to use accessibility, see [Accessibility in WaveMaker](/learn/app-development/ui-design/accessibility).