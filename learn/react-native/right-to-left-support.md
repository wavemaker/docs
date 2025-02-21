---
title: "Right to Left UI Support"
id: "right-to-left-support"
sidebar_label: "Right to Left Support"
---

---

import basespinner-ltr from '/learn/assets/react-native/basespinner-ltr.png';
import basespinner-rtl from '/learn/assets/react-native/basespinner-rtl.png';

Right-to-left (RTL) UI support refers to designing and developing user interfaces that accommodate languages read from right to left, such as Arabic, Hebrew, and Persian. Implementing RTL support involves mirroring the layout and aligning text and other components to ensure a natural and intuitive experience for users of RTL languages.

### LTR vs RTL Layout

Most of the languages follow Left to Right (LTR) format and therefore the most of the applications by default come with LTR layout. But for RTL languages the application's UI layout along with other alignments need to be changed for RTL users. 

<div>
<img src={basespinner-ltr} style={{width:300,margin:5}} />
<img src={basespinner-rtl} style={{width:300,margin:5}} />
</div>


## Benefits of RTL Support

- **Enhanced User Experience**: Providing an interface that allows RTL language speakers to read the application content and easily follow through the application making it more accessible and user-friendly.  
- **Expanded Market Reach**: Languages like Arabic and Hebrew are widely spoken languages and supporting RTL languages potentially increasing the application reach and broadening the application's appeal.

## Enabling RTL in Application

In studio, RTL can be enabled in any application using two ways.

- Using Select Locale widget
- Selecting Default Language in General Settings

### Using Select Locale Widget

To implement language selection in your application, you can use the Select Locale widget to choose preferred language. You can drag and drop the Select locale widget on the canvas. Once previewed, you can select the required language from the Select locale drop down.

The RTL language binding is an automated process, but you need to ensure that the language is added in the Localised Messages. To know how to add the language, see [Localization Using Select Locale](/learn/app-development/widgets/form-widgets/select-locale-usage).

### Selecting Default Language in General Settings






