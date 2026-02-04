---
last_update: { author: "Priyanka Bhadri" }
---

#  Testing Strategies

Testing is a critical part of the software development lifecycle in WaveMaker applications. It ensures that the application meets functional requirements, performs reliably under load, provides a user-friendly interface, and complies with accessibility standards. 
Testing strategies focus on:

- **Functionality Validation:** Ensuring features work as designed  
- **Stability:** Ensuring the application works across environments and devices  
- **Usability:** Providing a smooth and accessible user interface  
- **Integration:** Verifying communication between frontend, backend, and APIs  
- **Performance:** Identifying and resolving bottlenecks under load  
- **Traceability:** Maintaining documented test cases, results, and defect history  


---

## Writing Test Cases

Writing test cases helps ensure that features and functionalities are validated and work as expected. Before creating test cases, clarify requirements with developers or stakeholders to avoid ambiguities and ensure comprehensive coverage.

### Test Case Structure

- **Test Scenario:** A brief description of what is being tested.  
- **Test Description:** Detailed explanation of the objective of the test.  
- **Test Case Steps:** Step-by-step actions to perform the test.  
- **Test Data:** Inputs or conditions required for testing.  
- **Expected Result:** The result anticipated if the application works correctly.  
- **Actual Result:** The observed outcome during test execution.  
- **Status:** Pass or Fail based on comparison with expected results.  
- **Assignee:** The person responsible for executing the test.  
- **Execution Date:** The date when the test was executed.  

Clear and well-documented test cases make it easier to track defects, support regression testing, and maintain application quality.

> To learn more about writing automated test cases and best practices, refer [Unit Testing](#).


---

##  Types of Testing
Testing ensures that an application meets its requirements, performs reliably, and provides a good user experience. Different testing types focus on specific aspects of quality, from functionality and user interface to performance and accessibility.


### Functional Testing

Functional testing focuses on validating the core functionality of an application. It ensures that each feature operates as expected, all user interactions work correctly, and the application meets its specified requirements.


### Regression Testing

Regression testing is performed on every new build to ensure that recent changes, including defect fixes and enhancements, do not introduce new issues. It covers the entire application, not just the updated features, to maintain stability and consistency.

**Key Points:**
- Conducted for each new build containing fixes or enhancements  
- Applied across all modules, not limited to changed functionality  
- New test cases are added to the existing suite to ensure comprehensive coverage  
- Helps identify unintended side effects of code changes  


### UI Testing
- Validates the user interface elements.
- Includes buttons, textboxes, headings, icons, images, selection fields, checkboxes, and dropdowns.

**UI Testing Checklist:**
- Buttons and links perform the intended actions  
- Input fields accept and validate data correctly  
- Dropdowns and checkboxes operate as expected  
- Layout, alignment, and visual elements match the design  
- Icons, images, and other visual components display correctly  


### Accessibility Testing

Accessibility testing ensures that the web application is usable by people with disabilities, including vision, hearing, or motor impairments. The goal is to provide an inclusive user experience and comply with accessibility standards.

#### Accessibility Checklist for Web

- Users can navigate the application easily using keyboard or assistive technologies  
- Text inputs and interactive elements can be added, edited, and interacted with  
- Screen readers convey content and element purpose accurately  
- All interactive elements have proper labels (ARIA attributes)  
- Notifications, alerts, and popups are announced correctly  
- Users can explore all elements using keyboard navigation  
- Focus order and tab navigation are logical and consistent  
- Double-tap or click-to-select functionality works for interactive elements  

#### Keyboard Accessibility

- **Tab:** Move focus forward through links, buttons, and form controls  
- **Shift + Tab:** Move focus backward  
- **Enter:** Activate links or buttons  
- **Space:** Interact with checkboxes, radio buttons, or dropdowns  
- **Arrow Keys (↑ ↓ ← →):** Navigate lists or scroll content  
- **Escape:** Close dialogs, popups, or modals  

> **Tip:** Test accessibility using browser-based screen readers (e.g., NVDA, VoiceOver) and keyboard-only navigation to ensure compliance with WCAG standards.

To Learn more  [Accessiblity](../../enterprise-capabilities/accessibility.md)


### API Testing

API testing validates the communication between different layers of the application, including UI, business logic, and database layers. It ensures that data is exchanged accurately, securely, and efficiently.

**Key API Testing Checks:**
- Verify the accuracy and correctness of data returned by APIs  
- Measure response times and performance under expected loads  
- Ensure no missing or duplicate functionality  
- Validate authorization and authentication mechanisms  
- Test multi-threaded or concurrent API requests  
- Check for security vulnerabilities and proper error handling  
- Confirm correct error codes and messages are returned  
- Assess reliability and consistency across repeated calls  



### Performance Testing

Performance testing measures how the application behaves under various load and stress conditions. It helps ensure that the system remains stable, responsive, and scalable when handling expected or peak usage.

**Key Focus Areas:**
- Response times under normal and peak load conditions  
- Application stability and ability to scale  
- Resource utilization, including CPU, memory, and network  
- Behavior during high-traffic or stress scenarios  

---



<!-- ## Server-Side Logs

WaveMaker records log files that provide insight into what is happening in both the design and runtime layers of your application. These logs help track the behavior of the platform and the application, making debugging and issue resolution easier.

**Server Logs** contain backend messages generated by the WaveMaker platform during development. They are particularly useful when errors occur, such as failures in importing or updating database schemas, or when backend services fail. For instance, if a database import fails, the stack trace and root cause are captured in the server logs.

**Application Logs** capture output generated by your application during runtime. They help trace execution, monitor backend behavior, and review how the application is performing during usage.

Both types of logs can be accessed from the footer area of the project workspace. The logs panel includes a **download icon**, allowing you to save logs locally for offline review, share with teammates, or submit to support for deeper analysis.

> **Tip:** Ensure that the log level is set to `debug` during development to capture detailed diagnostic information.





--- -->

### Bug Reporting

To ensure consistent tracking and resolution of issues, it is recommended to use collaborative tools such as **Jira** or **Asana**. These platforms allow testers, developers, and stakeholders to interact directly, track progress, and manage defects efficiently.

**Bug Reporting Process:**
- Report issues as they are discovered during testing, providing a clear description and steps to reproduce.  
- Include relevant details such as expected vs. actual behavior, severity, priority, and environment.  
- Assign the bug to the responsible developer and track its status until resolution.  
- QA verifies the fix and updates the ticket with the outcome.  
- Use comments and attachments (screenshots, logs) to facilitate clear communication.  


---

## Summary

This guide outlines a structured approach to ensure application quality through testing, logging, and bug management.

- **Test Cases:** Written after clarifying requirements, using a consistent template for scenarios, steps, test data, results, and responsibilities.  
- **Testing Types:**  
  - **Functional:** Verifies features work as expected  
  - **Regression:** Ensures new changes do not break existing functionality  
  - **UI:** Checks interface elements and visual consistency  
  - **Accessibility:** Ensures usability for all users, including those with disabilities  
  - **API:** Validates data accuracy, security, and performance  
  - **Performance:** Measures responsiveness, stability, and scalability  
 
- **Bug Reporting:** Use a standardized template to report issues clearly with reproduction steps, severity, and assigned responsibility.  

> Following these strategies helps maintain high-quality, reliable applications.



