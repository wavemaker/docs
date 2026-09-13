---
title: "Accessing Script"
id: "script-access"
---

## Partial from Parent Page
---
### Accessing the Widgets and Variables of Partial from Parent Page through Scripting

The Widgets and Variables inside a partial page can be accessed from the parent page script through the 'Widgets' and 'Variables' property exposed in the scope of the partial container widget. **Example:** To access variables and widgets of a partial page loaded in a page named "Main" use following scripts in Main page controller:

```js
/** to set the "caption" of a label widget (eg label1) of a partial page loaded as a content of panel widget (eg panel1) **/
Page.Widgets.panel1.Widgets.label1.caption = "New Caption";

/** to access partial page's Variable (say staticVariable1) in the parent page 'Main' **/:
Page.Widgets.panel1.Variables.staticVariable1.dataSet = {"dataValue": "new value"};
```

## Parent Page from Partial Page
---
### Accessing the Widgets and Variables of Parent Page from Partial Page through Scripting

We can access the Widgets and Variables of parent page from the partial page script through the 'Widgets' and 'Variables' property exposed in the scope of parent page controller. The parent page scope can be accessed through the $parent property of the partial scope. **Example:** To access variables and widgets of parent page from the partial page named "MyPartial" use following scripts in partial page controller:

```js
/** to set the "caption" of a label widget (eg label1) of parent page **/
Partial.App.activePage.Widgets.label1.caption = "New Caption";

/** to access parent page's Variable (say staticVariable1) in the parent page 'Main' **/:
Partial.App.activePage.Variables.staticVariable1.dataSet = {"dataValue": "new value"};
```

## Partial Page within a Container in a Page
---
### Accessing the Widgets and Variables of Partial Page within a Container in a Page

We can access the Widgets and Variables of a partial page set as content to a tab/panel within a page

```js
Page.Widgets.[container_name].Variables.[variable_name];
Page.Widgets.[panel_name].Variables.[variable_name];
Page.Widgets.[tab_content_name].Variables.[variable_name];
```

In the above scripting format, the partial page variables would be available for the panel and default tab in tabs widget as only the panel and default/first tab will have its widgets and variables ready on parent page load. For tab panes other than default tab, the variables and widgets of the respective partial page content would get loaded only on clicking/opening the other tab panes.Linking Variables through Scripting

## Example

Scenario: Update of a Service Variable should trigger an update of a Live Variable:

```js
Page.Variables.serviceVariable1.update((),
 function successHandler (dataSet) {
	//updating second variable’s dataset if first variable’s updation is success 
        Page.Variables.liveVariable1.update();
        },
 function errorHandler(errMsg) {
			//logging error in console if updation on variable fails
       console.log(errMsg);
        });
```

:::note
The above-specified example is for Page. For Partial, you will need to replace the word **Page** with a **Partial**.
:::

```js
Partial.Variables.serviceVariable1.update((),
 function successHandler (dataSet) {
	//updating second variable’s dataset if first variable’s updation is success 
        Partial.Variables.liveVariable1.update();
        },
 function errorHandler(errMsg) {
			//logging error in console if updation on variable fails
       console.log(errMsg);
        });
```