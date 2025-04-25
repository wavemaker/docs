---
title: "Enhancing Wizard Navigation with Asynchronous Validation"
author: "Venkatesh Gardas"
---
---

​WaveMaker has enhanced its [Wizard](/learn/app-development/widgets/container/wizard/) component to better handle steps that require checking information from a server before moving forward. In general, **Next** callback allows developers to determine whether the user can proceed to the next step.

<!-- truncate -->

> The **Next** callback method typically validates the current step (e.g., checks if all required fields are filled), fetches data from a server before proceeding, and prevents navigation to the next step if certain conditions are not met.

## The Challenge

Many real-world applications require API-based validation before allowing users to proceed to the next step. Since [promises](/learn/app-development/widgets/datalive/field-validator/#setasyncvalidators) are not supported in the **Next** callback, developers face a roadblock when trying to implement asynchronous checks.

## The Solution: Async/Await in Callbacks

To address this limitation, we are providing support for promises using **async/await** in the **Next** callback, allowing asynchronous validation.

```
Page.wizardstep1Next = async function (widget, currentStep, stepIndex) {
    try {
        await Page.Variables.reqresVar.invoke();
        if (Page.Variables.reqresVar.dataSet.data.length) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('API validation failed', error);
        return false;
    }
};
```

## How It Works

1. The **Next** callback is defined as asynchronous using **async**.
2. The wizard waits for the **promise to resolve** before proceeding using **await**.
3. If the API call succeeds and meets the condition, navigation continues (return **true**).
4. If the API call fails or the condition is not met, navigation is blocked (return **false**).
5. Errors are caught and logged using **try/catch**, preventing unhandled promise rejections.

​Integrating API-based validation using **async/await** in the **Next** callback in wizard navigation simplifies code and enhances maintainability.

This improvement also applies to the **Previous** and **Skip** buttons, ensuring a smoother and more reliable experience across all navigation actions.

## Conclusion

Using **async/await** in the **Next** callback is a necessary enhancement for modern applications that require API-based validation. It simplifies implementation & improves user experience.
