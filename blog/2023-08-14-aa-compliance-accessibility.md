---
title: "AA Compliant Website Accessibility through WaveMaker Platform"
author: Bhargavi Gunda
---

Enabling AA Compliance for web apps built with WaveMaker requires a concerted effort to implement various accessibility standards across our 100+ widget collection. By following WCAG guidelines, using semantic markup, prioritizing keyboard accessibility, ensuring color contrast, providing alternative text for images, and implementing ARIA attributes, developers can create an inclusive and accessible platform for users of all abilities. Continuous testing, documentation, and training further contribute to the platform's commitment to accessibility and enable a seamless and enriching experience for all users.

Although Accessibility is designed for people with disabilities, it helps everyone in general. Accessibility promotes usability. Everyone, in general, can benefit from clear instructions, opportunities to correct form errors, simple visual layouts, high color contrast, and the option to read a transcript or captions to a video or audio recording.
Accessibility often describes hardware and software designed to help those who experience disabilities.

<!-- truncate -->

## Standard practices to ensure AA compliance

**WCAG 2.1 Guidelines**: The Web Content Accessibility Guidelines (WCAG) 2.1 provide the most widely recognized and accepted accessibility standards. These guidelines define criteria for making web content more accessible to users with disabilities.

**Keyboard Accessibility**: All components and interactions should be operable and fully functional using only the keyboard. This ensures that users who rely on keyboard navigation or assistive devices can access all functionalities without barriers.
Proper focus management is crucial for keyboard accessibility. 

Ensuring that focus is clearly visible and moves in a logical order through interactive elements improves the overall accessibility web apps built with the platform.
All modals/dialogs with custom HTML or widgets like date, datetime made accessible by trapping the focus inside them i..e, when a user hits _Tab_ or _Shift+Tab_ or clicks around, they can't escape a certain cycle of focusable elements like anchor/button/input inside the dialog.
The only way to escape the focus on dialog is to close it or press _Escape_ key.


**Semantic/native HTML**: Using these HTML elements is essential to create a well-structured and accessible user interface. This includes using proper heading tags, lists, form elements, and semantic roles to convey the meaning and relationships of content to assistive technologies.

**Form Accessibility**: Forms on the platform should be designed with clear labels, error messages, and properly associated input fields. This ensures that users can understand and complete forms using assistive technologies.
ARIA (Accessible Rich Internet Applications): Implementing ARIA attributes can enhance the accessibility of dynamic and interactive components on the website. ARIA roles and properties provide additional context and information to assistive technologies.

**Testing and Validation**: Regular accessibility testing and validation should be conducted during the development process. Automated testing tools, as well as manual testing with users with disabilities, can help identify and address potential accessibility issues.

**Documentation and Training**: Providing comprehensive accessibility documentation and training for web app developers and users helps ensure that accessibility is consistently maintained throughout the development lifecycle.

### A Holistic Approach to Embrace AA Compliance: 

Accessibility is not an afterthought; it's an integral part of our WaveMaker’s DNA. From the initial planning stages to the final implementation, we adopted a holistic approach to accessibility, ensuring that apps built with WaveMaker cater to everyone.
Aligning with the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards, our team worked tirelessly to address host of issues with AA compliance in our widgets. Clear and consistent navigation, keyboard operability, and color contrast optimization were among the many key aspects we prioritized to create a seamless browsing experience.

**1.The Power of Semantic Markup**: Recognizing that an accessible app goes beyond mere compliance, we fully embraced the potential of semantic markup. By using appropriate HTML elements with meaningful structure, we enable all users, including those with assistive technologies, to comprehend the content's context and organization effortlessly.

**2.Empowering Users with Semantic Elements**: Semantic headings play a crucial role in guiding users through our website’s content. By employing a logical heading hierarchy, we empower screen readers to provide users with a comprehensive outline of the information, ensuring easy navigation and comprehension.

**3.Enhanced Interactive Elements**: Our commitment to inclusivity extended to interactive elements, which received special attention. Every button, link, and form field is equipped with descriptive labels, ensuring that users, irrespective of their abilities, can fully grasp the purpose and functionality of each element.

**4.The Impact of ARIA Roles**: Incorporating ARIA roles judiciously, we elevated the accessibility of our platform’s dynamic components. Navigation menus, landmark elements, and live regions were thoughtfully annotated, providing users with valuable context through assistive technologies.

**5.Unlocking the Power of Data Tables**: When presenting data in tabular format, we embraced best practices for table accessibility. Meaningful table headers and descriptive captions not only aid screen readers in properly interpreting the information but also offer a seamless experience to all users.

**6.Form Filling Made Accessible**: We understood the importance of form accessibility, as it directly affects users' ability to interact with our services. With clear validation messages and error handling, we created a smooth form filling experience for everyone


### Accessibility attributes added to different widgets in WaveMaker

By incorporating many of these recommendations with a focus on accessibility and semantic markup, we aim to create a seamless and inclusive browsing experience for all users, regardless of their abilities. 

**Data Table**:
Implemented proper table headers and captions for screen readers to interpret data correctly.
Ensured that data cells are logically organized, making navigation easier for keyboard users.
Incorporated ARIA attributes to convey additional information about the table structure.

**Typography**:
Utilized appropriate heading tags (e.g., h1, h2, etc.) to maintain a clear content hierarchy.
Ensured sufficient contrast between text and background for readability.
Made font size adjustable using browser settings to accommodate users with low vision.
Added descriptive and meaningful text labels for buttons and anchor links.
Provided keyboard focus styling to indicate active elements for keyboard users.
Included ARIA roles and states to communicate button states to screen readers.

```
<label for="name">Full Name:</label>
<input type="text" id="name" name="name" aria-required="true" />
```

**Cards**:
Made card content accessible to screen readers by using proper semantic elements.
Ensured focus order inside the card for keyboard navigation.
Made card structures consistent and straightforward for easy comprehension.

**Iframe**:
Added descriptive titles to iframes, conveying their purpose to assistive technologies.
Ensured that the iframe content is accessible and adheres to WCAG guidelines.

**Lists and Pagination**:
Utilized semantic list elements (e.g., ul, ol) to provide clear content structure.
Added ARIA attributes to indicate the list role and state to screen readers.

**Live Filter**:
Provided accessible feedback to screen readers when filtering results dynamically.
Ensured that the filter function is keyboard operable and fully functional without a mouse.

**Forms**:
Implemented form labels, legends, and placeholders to describe form elements clearly.
Ensured proper validation messages for screen readers to identify and correct errors.

```
<button type="submit" aria-label="Submit Form">Submit</button>
```
**Form Widgets**:
Ensured form widgets (e.g., input fields, dropdowns) are accessible and operable with a keyboard.
Provided appropriate labels and instructions for assistive technologies.

**Carousel**:
Implemented ARIA roles and states to indicate the current slide and navigate the carousel.
Made navigation buttons and indicators accessible with proper labeling.

**Date Widget**:
Provided ARIA live regions to announce dynamic notifications to screen readers.
Ensured that notifications are perceivable by users with visual and hearing impairments.

```
<label for="eventDate">Select Event Date:</label>
<input type="date" id="eventDate" name="eventDate" aria-label="Event Date" />
```
**Progress Bar**:
Implemented ARIA roles and states to communicate the progress status to screen readers.
Made the progress bar keyboard accessible and focusable.

**Messages**:
Ensured that messages, such as alerts and feedback, are accessible with descriptive text.
Used ARIA roles to convey important information to assistive technologies.

**Panel, Tile, Accordion, Tabs, Dialog, Wizard, Media**:
Ensured that all interactive elements within these widgets are keyboard accessible.
Provided proper labeling and ARIA attributes for enhanced screen reader support.


### Different tools used to test Accessibility
In our quest to ensure accessibility compliance across our WaveMaker’s diverse range of widgets, we employ various tools and techniques to test and validate the accessibility of each element. Below are some of the tools we leverage to ensure that every widget on our platform is accessible to all users:

**Screen Readers (e.g., NVDA/AssistiveLabs and VoiceOver)**: We test all widgets using popular screen readers like NVDA (NonVisual Desktop Access) and VoiceOver to experience the website as users with visual impairments would. This helps us identify issues and optimize our widgets for smooth navigation and comprehension.

**Keyboard Navigation Testing**: We conduct extensive keyboard navigation testing to ensure that users can access and interact with all widgets using only the keyboard, without relying on a mouse.

**ARIA Validation Tools**: We use ARIA (Accessible Rich Internet Applications) validation tools to verify the appropriate use of ARIA attributes and roles in our widgets, enhancing their compatibility with assistive technologies.

**Form Accessibility Testing**: Our forms undergo rigorous accessibility testing to ensure they are easily navigable and usable with screen readers, providing descriptive labels, and handling errors effectively.

**Automated Accessibility Testing Tools (e.g., Axe, Pa11y)**: We utilize automated testing tools like Axe and Pa11y to scan our widgets and identify potential accessibility issues. These tools help us streamline the testing process and catch common problems quickly.

**Browser Developer Tools**: The built-in accessibility inspection tools within modern web browsers assist us in identifying and rectifying accessibility issues for each widget.

**User Testing and Feedback**: Real-world testing by users with disabilities is a crucial aspect of our accessibility evaluation process. We seek feedback from diverse user groups to gain valuable insights and address any usability challenges.

**Continuous Monitoring**: We continuously monitor our WaveMaker’s accessibility to ensure that any new updates or content additions maintain the same high level of accessibility compliance.

By combining these testing methods and tools, we offer excellent platform to build rich web applications that are accessible, inclusive, and easy to use for all users, regardless of their abilities or assistive technologies. Our commitment to accessibility remains an ongoing journey, and we are dedicated to providing an inclusive experience for users of every app built using WaveMaker.

