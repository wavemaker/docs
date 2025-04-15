---
title: "How to build widget extensions or custom widgets?"
id: "building-widget-extension-custom-widget"
sidebar_label: "Building Widget Extension or Custom Widgets"
---
See the [FAQs](/learn/app-development/wavemaker-app-development-faqs) for WaveMaker app development.      

---

In WaveMaker, widget extensions or custom widgets are built using specialized components known as Prefabs. Prefabs are reusable and distributable components that can be used across applications.

#### Concept of Prefab

Prefabs are like the pieces of the jigsaw puzzle or equivalent of lego blocks, which when put together offer powerful extended features of existing widgets or build an altogether new UI element by integrating with 3rd party libraries.

[![](/learn/assets/prefab_concepts.png)](/learn/assets/prefab_concepts.png)

Prefab may consist of all 3 layers of a WaveMaker App, combining the power of custom widgets with any integrated service, as shown below.

[![](/learn/assets/prefab_layeredarch.png)](/learn/assets/prefab_layeredarch.png)

Prefabs can be used:

- As widget extensions by extending 3rd party JS libraries or UI widgets. For example, DataMaps built on top of d3 library can be used to build new widgets for doing geographic projections which will allow integration of data from any data source or backend service to the DataMaps. Or integrate Lightbox Image Viewer into WaveMaker App to preview images within the App.
- As API integrated components by combining with a WaveMaker UI component to customise built-in behavior. For example, WaveMaker List widget can be combined with Google Maps Prefab to form a composite UI component for marking the location of a selected item from the List.
- As backend service extensions by leveraging 3rd party Java libraries, for example, to work with JasperReports.

## See Also
[FAQs](/learn/app-development/wavemaker-app-development-faqs)  
[Prefab - Custom Widgets](/learn/app-development/custom-widgets/prefabs-overview)   

