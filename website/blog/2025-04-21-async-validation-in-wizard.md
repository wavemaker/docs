---
title: "Enhancing Wizard Navigation with Asynchronous Validation"
author: "Venkatesh Gardas"
---
---

When designing multi-step wizards, controlling navigation between steps is crucial. A common feature in such wizards is the **Next** callback, which allows developers to determine whether the user can proceed to the next step. Typically, returning false within this callback prevents navigation. 

However, a current limitation is that the callback doesn't support promises, making it difficult to handle asynchronous validations like API checks or server-side rules.

<!-- truncate -->

## Simple Use Case of the "Next" Callback

In its simplest form, the "Next" callback is used for synchronous validation:

```
Page.wizardstep1Next = function (widget, currentStep, stepIndex) {
    let isValid;
    /*
         Code block to validate the navigation 
         isValid = condition ? true : false
    */
    return isValid;
};
```

This approach works well for straightforward validations that do not require external data sources. However, it becomes limiting when API-based validation is necessary.

## The Challenge

Many real-world applications require API-based validation before allowing users to proceed to the next step. Since promises are not supported in the **Next** callback, developers face a roadblock when trying to implement asynchronous checks.

## The Solution: Async/Await in Callbacks

To address this limitation, we are providing support for promises using async/await in the "Next" callback, allowing asynchronous validation before deciding whether to proceed.

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

1. The **Next** callback is declared as **async**, allowing it to handle asynchronous operations.
2. The wizard waits for the **promise to resolve** before proceeding using **await**.
3. If the API call succeeds and meets the condition, navigation continues (return **true**).
4. If the API call fails or the condition is not met, navigation is blocked (return **false**).
5. Errors are caught and logged using **try/catch**, preventing unhandled promise rejections.

By implementing this enhancement, developers can seamlessly integrate API-based validation without relying on cumbersome workarounds. This improvement would lead to cleaner, more intuitive, and maintainable code.

## Extended Support for Callbacks

The same approach using async/await works for the **Next**, **Prev**, and **Skip** callback events, ensuring consistent behaviour across all navigation actions.

## Conclusion

Using async/await in the **Next** callback is a necessary enhancement for modern applications that require API-based validation. It simplifies implementation & improves user experience. As applications continue to evolve with asynchronous data fetching and validation needs, this improvement would be a valuable addition to wizard-based navigation workflows.
