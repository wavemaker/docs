---
title: "Radioset to Filter a List"
id: "radioset-filter-list"
---

WaveMaker offers three ways of allowing user to choose from given options:

- Select: Select widget lets the user to select values from an available list of options. The options are given in the form of a drop-down list from which the user can choose one option.
- **Radioset** and Checkboxset are used when there are multiple values belonging to a single group to choose from. In case we have a yes/no or true/false scenario, we can use the Checkbox widgets.

Here we will see how to Filter a List using a Radioset Widget

The following is the JavaScript function used as the callback event for on before update:

 Page.NorthwindProductsDataonBeforeUpdate = function(variable, data) {
        data.standardCost = {
            'value': Page.Widgets.radioset1.datavalue,
            'filterCondition': 'LESS_THAN_OR_EQUALS',
            'type': 'INTEGER'
        }
    };

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vT1qf-jqh1-M6cdn4hWduOxlMKpvoRwzLTz5luQf6LG-vktjB4vcL7II09YOuSIDH32p7V9F-VlvHnc/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
