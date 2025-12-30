---
title: "Capturing Card Items"
id: "capturing-card-items"
last_update:
  author: "Author Name"
---

1. **currentItem & currentItemWidgets**: These bind objects can be used to bind the current item of the list to any form widget placed within the list template. The currentItemWidgets can be accessed as the fourth argument of the events for widgets within the List. For example, button click event within List will result in the following code will capture the caption property of the Name label within a List:
    
    Page.button1Click = function($event, widgets, item, currentItemWidgets) {
            alert(currentItemWidgets.Name.caption);
        };
    
2. **selecteditem & selectedItemWidgets**: These bind objects can be used to capture the selected item of the list when selection is enabled for the List. The return type would be array in case of multi-select List. Both selecteditem and selectedItemWidgets can be accessed through the script as follows, the click of a button will capture the selected item firstname and the caption of widget Name:
    
    Page.button1Click = function($event, widgets, item, currentItemWidgets) {
            alert(Page.Widgets.livelist1.selecteditem.firstname);
            alert(Page.Widgets.livelist1.selectedItemWidgets.Name.caption);
        };
    

Image: list_bind.png

Cards Use Cases

- 1. Cards Basic Usage
- 2. How to access cards items
