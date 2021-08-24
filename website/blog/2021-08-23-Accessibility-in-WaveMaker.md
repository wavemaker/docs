---
title: "Accessibility support in WaveMaker"
author: Lovin Ahmed
---

**Accessibility** is essential for individuals and organizations that want to create high-quality websites and applications. It enables people with disabilities to use different Assistive Technologies and Adaptive Strategies, for the business benefits of Web Accessibility. WaveMaker also focuses on enabling their product with international standards for Web Accessibility from W3C - including **Web Content Accessibility Guidelines(WCAG)**, and **WAI-ARIA** for **Accessible Rich Internet Applications**  - and the first step in applying them. 



<!-- truncate -->

## Why Accessibility?

Accessibility though is designed for people with disabilities but it does help nearly everyone. Accessibility promotes usability generally: everyone benefits from clear instructions, opportunities to correct form errors, simple visual layouts, high color contrast, and the option to read a transcript or captions to a video or audio recording.

In the IT world, accessibility often describes hardware and software designed to help those who experience disabilities. 


**Features of Accessibility Websites**

* Good use of HTML headings.
* Accessible with keyboard.
* Accessible images.
* Accessible menus.
* Accessible forms.
* Accessible tables.
* Effective use of color.
* Meaningful link text.




## How does it work?

To make components accessible it is important that all the text on a web page should be unique with its captions and roles. To make it possible we have introduced **aria-abels** attributes for all the *wm-widgets* which are configurable and certain [Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) to identify each and every component as per their standard behavior. This ARIA "roles" and "attributes" will benefit the group of people using Assistive Technology Readers to read the text and the purpose of the widget loud for the users.  

WaveMaker Accessibility enhancements will cover **WCAG “A” and “AA”** compliance for all non-text content, including:

Name Role & Value, Info and Relationships, Meaning Sequence, Sensory Characteristics, Identify Input Purpose, Non-Text Contrast, Page Titled, Headings and Labels, , Label in Name, Language of Page, Status Messages, Error Prevention.




### **Steps to follow:**

**Labels**

* On Every Drag & Drop of widget check for the Accessibility section. 
* Copy or Bind the captions of the label widgets to the **Hint** property in the properties tab below Accessibility Section. 

![Accessibility Section](/learn/assets/accessibility-section.png)

:::note
All labels and texts will have a default hint value as "Label text" already added from the system. 
:::

* Manipulating the *hint* will result in a "tooltip text" onhover and "**aria-label**" attribute visible in the browser preview URL that only AT screen readers can understand.
* The "**aria-label**" attribute will be added to all the widgets wherever text is binded from the *hint* property.



**Images**

* Add proper description for the images used on a page under the **Hint** parameter. 
* Modifying *hint* property with meaningful caption will add **aria-label** to make it accessible.


There are other widgets which are taken care off to make them accessible easier and faster with "aria-labels" like, **Page layouts**, **Dialogs**, **Form Fields**, **Anchors** & **Live Forms**, etc.



### Good use of Headings

To make a good use of headings on a page, add CSS classname from the *Style properties tab*, for example .h1, .h2, .h3,  etc. On using any of the above heading classname an attribute **"aria-level"** will be assigned to the HTML Structure to make the Screen readers understand the text specificty while scanning a page. The heading caption can be copied to the *hint* property to make it ARIA accessible.
 

:::note
Classname with .h1 will set the *aria-level="1"*, and .h2 will set *aria-level="2"* attribute following the rest. 
:::


### Keyboard navigation

To navigate well within a form make use of **Tab Index** property from the *Properties Tab*.

![Tab Index property](/learn/assets/tab-index-property.png)


:::warning 
For form inputs in a live form the *hint* text will not only add **"aria-label"** attribute but also a "Help Text" below the input field. 
:::



### Others

Effective use of color contrast is also an important aspect to make your app accessible. WCAG 2.0 level "AA" requires a contrast ratio of at least **4.5:1** for normal text and **3:1** for large text. WCAG 2.1 requires a contrast ratio of at least **3:1** for graphics and user interface components (such as form input borders). WCAG Level "AAA" requires a contrast ratio of at least **7:1** for normal text and **4.5:1** for large text. [Check](https://webaim.org/resources/contrastchecker/) the color contrast ratio before designing or developing any application.





