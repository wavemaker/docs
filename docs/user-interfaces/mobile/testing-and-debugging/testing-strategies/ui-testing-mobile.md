---
last_update: { author: "Priyanka Bhadri" }
---

# React Native Testing

Testing is a critical part of building high-quality mobile applications using WaveMaker’s React Native platform. A strong testing strategy ensures applications function correctly, perform efficiently, and provide consistent user experiences across devices and platforms.


WaveMaker supports multiple testing approaches to validate application quality, functionality, usability, and performance.

## Types of Testing

- **Manual Testing**
  - Validates workflows, UI behavior, and real user interactions.
  - Helps identify usability issues and edge cases.

- **Automation Testing**
  - Enables repeatable UI and functional testing.
  - Uses tools like WebDriverIO, Appium, Mocha, and TypeScript.

- **Visual Testing**
  - Detects UI layout or styling regressions.
  - Compares screenshots with baseline images.

- **Accessibility Testing**
  - Ensures applications are usable by people with disabilities.
  - Validates screen reader compatibility and navigation support.

- **Performance Testing**
  - Measures responsiveness, resource utilization, and load handling.

- **Device Compatibility Testing**
  - Ensures application stability across multiple devices, screen sizes, and OS versions.

### Tools and Infrastructure

- Physical devices and emulators
- BrowserStack for cloud device testing
- Appium and WebDriverIO for automation
- Jenkins for CI/CD integration
- Allure Reports for test reporting
- Apptim for performance profiling

---

## Manual Testing

Manual testing helps validate real-world usability and ensures application workflows function correctly.

### Key Validation Areas

- Functional workflows and feature validation
- UI consistency and visual validation
- Cross-device and cross-platform behavior
- Early bug identification

Manual testing should be performed on both simulators and real devices to detect device-specific issues.

---

## Automation Testing

WaveMaker supports automation testing using industry-standard frameworks.

### Supported Tools

- Appium
- WebDriverIO
- Mocha
- TypeScript
- Allure Reports

### Automation Workflow

1. Create test scripts using JavaScript or TypeScript.
2. Execute tests locally or using cloud testing platforms.
3. Integrate automated tests into CI/CD pipelines.
4. Generate detailed reports with logs and screenshots.

### Visual Regression Testing

- Uses screenshot comparison tools such as Pixel Match.
- Helps identify unexpected UI changes.

---

## Performance Testing

Performance testing ensures applications provide smooth user experiences under various conditions.

### Key Performance Areas

- Application launch time
- Screen load and transition performance
- CPU and memory usage
- Network request performance
- Frame rendering stability
- Detection of memory leaks and dropped frames

### Performance Tools

- BrowserStack performance testing
- Apptim for CPU, memory, and resource analysis

### Important Metrics

- Time to Interactive (TTI)
- Screen rendering time
- Frame rate stability
- Resource utilization

---

## Accessibility Testing

Accessibility testing ensures applications are usable by all users, including those using assistive technologies.

### Accessibility Goals

- WCAG compliance validation
- Screen reader compatibility
- Logical navigation and focus order
- Keyboard accessibility support

### Accessibility Features in WaveMaker

Developers can configure accessibility hints in WaveMaker Studio. These hints provide descriptive guidance for screen readers and improve user experience for visually impaired users.

---

## Device Compatibility Testing

Device compatibility testing ensures applications function consistently across different hardware and software environments.

### Testing Objectives

- Validate UI layout across various screen sizes
- Verify behavior on phones and tablets
- Test across multiple Android and iOS versions
- Detect platform-specific functionality issues

### Testing Methods

- Testing on real devices
- Using cloud platforms like BrowserStack
- Testing across different OS versions and resolutions

---

## Summary

WaveMaker’s React Native testing framework provides comprehensive support for:

- Manual and automated testing
- Visual regression validation
- Performance optimization
- Accessibility compliance
- Cross-device compatibility

By combining these testing strategies and tools, developers can build reliable, scalable, and user-friendly mobile applications.

---
