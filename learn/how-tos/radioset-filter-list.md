---
title: "Radioset to Filter a List"
id: "radioset-filter-list"
---

WaveMaker offers three ways of allowing user to choose from given options:

- Select: Select widget lets the user to select values from an available list of options. The options are given in the form of a drop-down list from which the user can choose one option.
- **Radioset** and Checkboxset are used when there are multiple values belonging to a single group to choose from. In case we have a yes/no or true/false scenario, we can use the Checkbox widgets.

Here we will see how to Filter a List using a Radioset Widget

Follow the below steps to Filter a List by taking the input from the Radioset:

**Step1:** Create a webResponsive App.

**Step2:** Create a Page with name RadioSetFilterPage.

**Step3:** Import Hrdb into the App.

**Step4:** Create a Databasecrud variable with name radioSetDataValue for the entity Department from Hrdb.

![image](/learn/assets/radio_setfilter_variable.png)

**Step5:** Drag and drop a RadioSet widget into the canvas and bind the datavalue of radioset widget to the databasecrud variable radioSetDataValue which is created in step4,set datafield to deptId and also displayfield to deptId as shown below.

![image](/learn/assets/radio_setfiltervariable_properties.png)

**Step6:** Create another databasecrud variable with name HrdbEmployeeList for the entity Employee from Hrdb.

![image](/learn/assets/hrdb_listvariable.png)

**Step7:** Now go to events tab of Radioset widget and set the onchange event to Javascript as shown below.

![image](/learn/assets/radioset_button_onchnage_jsmethod.png)

**Step8:** Add below javascript code to the  radioset1Change method.
```js
Page.radioset1Change = function($event, widget, newVal, oldVal) {
    var hrdbEmployeeVar = Page.Variables.HrdbEmployeeListVariable;
    var radioSetdataValue = Page.Widgets.radioset1.datavalue;

    hrdbEmployeeVar.listRecords({
        filterFields: {
            "deptId": {
                "value": radioSetdataValue,

                "matchMode": "LESS_THAN_OR_EQUALS"
            }
        }
    });
};

```
**Step9:** preview the app , if you select deptId from radioset this will filter and display the employee records in a list whos deptId is lessthanorequalsto selected deptId.

Sample output when deptId selected as 1

![image](/learn/assets/radioset-output-image.png)

sample output when deptId selected as2

![image](/learn/assets/radioset-output-image2.png)

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vT1qf-jqh1-M6cdn4hWduOxlMKpvoRwzLTz5luQf6LG-vktjB4vcL7II09YOuSIDH32p7V9F-VlvHnc/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
