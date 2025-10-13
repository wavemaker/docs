---
title: "List - Behavior Settings"
id: "behavior-settings"
sidebar_label: "Behavior Settings"
---
---

## Selection Limit
This property sets the maximum items that can be chosen at run-time. It also determines whether the list can have single or multiple items selected. This property can be bound to a variable to determine the selection limit at run-time.

## Multiselect
Multiselect will enable users to select multiple list items at runtime. These items can be captured via the _selecteditem_ which will be an array of objects. See Usage Scenarios for more details.

## Item Reordering
**Enabling reorder** will enable users to reorder the list items at run-time.

## Disable Item
This property will disable all the events on the item and other widgets present it.

[![](/learn/assets/cards_behav1.png)](/learn/assets/cards_behav1.png)

## Touch Events

Tap, Double Tap, and Long Tap events allow you to set actions associated with the touch events.

## Selection Limit Exceed

This event is bound with the **Selection Limit** property that gets invoked when you exceed the count of the maximum items that can be selected in the list.  
