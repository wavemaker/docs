---
title: "Prefabs as WebComponents: Making your UI run anywhere, everywhere"
author: "Naresh Ravulapalli"
---
---

Web Components are a modern web standard that enable the creation of prebuilt, reusable, and encapsulated custom HTML elements. These components are completely framework-agnostic, making them compatible with any application, whether it's built with Angular, React, Vue, or plain JavaScript. They provide several key advantages:

- **Framework Independence**: Designed to work across different JavaScript frameworks and vanilla web applications
- **Native Browser Support**: Leverage built-in browser technologies
- **Encapsulation**: Provide strong isolation of styles and functionality
- **Reusability**: Create components that can be easily shared and integrated

<!-- truncate -->

## Prefabs in WaveMaker: Evolution to Web Components

Prefabs in WaveMaker are reusable and distributable components specifically designed to work within WaveMaker applications. Prefabs encapsulate functionality and design, allowing developers to add predefined features to their projects with minimal effort.

- Restricted to WaveMaker applications
- Tightly coupled with the WaveMaker ecosystem
- Not easily portable across different development environments

![Prefabs](/learn/assets/prefabs.png)

### The Transformation - Prefab as a Web Component

By converting Prefabs into Web Components, their usability extends beyond WaveMaker applications. These components can now be integrated into any framework or standalone application, fulfilling the promise of true Web Component interoperability. Prefabs as Web Components act as fully-featured, ready-to-use widgets that developers can directly consume, providing a consistent and efficient way to integrate with APIs.

The new approach transforms Prefabs into standard Web Components, breaking these limitations by:

- Enabling cross-framework compatibility
- Providing a standardized integration method
- Allowing standalone component deployment

![Prefab Transformation](/learn/assets/prefab-transformation.png)

## Architecture

This architecture allows for a hybrid approach, where a web application can leverage the capabilities of WaveMaker components while still maintaining independence and flexibility in its overall architecture.

![Prefab as Web Component Architecture](/learn/assets/prefab-as-webcomponent-architecture.png)

WaveMaker Prefabs, pre-built UI components or application modules, offer a powerful way to extend the functionality of existing web applications. These Prefabs can be exported as standard Web Components, encapsulating their logic and presentation. This exported Web Component can then be independently hosted, separate from the WaveMaker development environment. The hosted Web Component is readily embeddable into any third-party web application, regardless of the technologies used to build that application. This integration is seamless, allowing the WaveMaker functionality to become a part of a larger system. 

Alongside the embedded WaveMaker component, the same web page can also incorporate other non-WaveMaker application components, creating a unified user experience. This approach enables a hybrid architecture, where WaveMaker's rapid development capabilities can be leveraged to enhance existing applications without requiring a complete rewrite. The Web Component acts as a bridge, bringing the specific functionality of the Prefab into the broader context of the third-party application. This modularity and reusability are key advantages of the WaveMaker platform.

## Steps to Convert a Prefab into a Web Component

Converting a WaveMaker Prefab into a Web Component is a straightforward process consisting of three steps.

1. Trigger the Job
2. Download & Host the Zip
3. Integrate the Code Snippet


To find the in-depth conversion process, see [Prefab as a Web Component](/learn/how-tos/prefab-as-webcomponent).


## Benefits of Using Prefabs as Web Components

- **Framework Agnosticism**: They work seamlessly with any front-end framework or plain JavaScript applications.
- **Encapsulation**: CSS and JavaScript scoped within the Web Component prevent conflicts with the parent application.
- **Reusability**: Prefabs can be reused across multiple projects and frameworks, reducing development time and effort.
- **Ease of Integration**: Minimal configuration is required to integrate Web Components into existing applications.
- **Dependency Management**: Web Components are designed to operate with minimal reliance on external libraries or frameworks, reducing potential conflicts and easing integration. To ensure compatibility across all target browsers, Web Components include polyfills for older browsers that do not natively support the Web Component specifications. Leveraging modern JavaScript and HTML standards ensures optimal performance and a consistent User experience.
- **Version Control and Updates**: Because Prefabs are self-contained and deployed as independent Web Components, they can be versioned and updated without requiring changes to the parent application. This allows for independent updates and easier maintenance of the component library.
- **Performance Optimization**: Web Components can be loaded only when they are needed (Lazy Loading Capabilities), reducing the initial load time and improving overall performance. Scoped styles and scripts reduce memory consumption by isolating component-specific resources, preventing memory leaks.
- **Documentation**: Auto-generated documentation provides clear instructions for integration and usage.


Thus, Prefab as Web Component acts as a full-fledged feature ready to drop into any application without requiring WaveMaker Studio. These widgets can be directly consumed by developers, enabling a consistent and efficient way to integrate with the APIs.


Additionally, the generated Web Component is **independent**, it operates as a standalone unit without dependencies on the parent application’s technology stack.


## Conclusion

Converting Prefabs to Web Components represents a significant evolution in WaveMaker's component architecture. By embracing web standards, developers gain unprecedented flexibility in component design, deployment, and integration across diverse technological landscapes.

The approach democratizes Prefab usage, transforming them from WaveMaker-specific constructs to universal, portable UI components that can seamlessly integrate into any modern web application.
