---
title: "Tree Use Case - Dynamic Tree"
id: "tree-use-case-dynamic-tree"
sidebar_label: "Tree using Dynamic Tree"
---
---

Using the Tree widget, you can build a folder-file structure, and user can decide how many folder and files to include in a tree. 

1. Drag and drop a Tree widget, and add two buttons including **Add File** and **Add Folder**.

[![](/learn/assets/tree_dynamic_design.png)](/learn/assets/tree_dynamic_design.png)

2. Select the **Tree** widget. Go to **Value** property and click the bind icon under the **Dataset** section. Go to the **Use Expression** tab and set the script variable as `treeData`.

[![](/learn/assets/tree_dynamic_use-expression.png)](/learn/assets/tree_dynamic_use-expression.png)

3. From the Script tab, use the following script for treeData:

```js
// should be an array of objects consisting of label, icon, children keys
    // populate the initial data
Page.treeData = [{
        "label": "folder1",
        "icon": "fa fa-folder",
        "children": []
    }, {
        "label": "folder2",
        "icon": "fa fa-folder",
        "children": []
    }];
```    

4. Select JavaScript for the `onSelect` event of the tree widget as following:

```js
Page.activeTreeElement = $item;
```

5. For the buttons **Add File** and **Add Folder**, select JavaScript for the `onClick` events, and add the following code:

```js
Page.addfileClick = function ($event, widget) {
    // add file
    if (Page.activeTreeElement) {
        if (_.isArray(Page.activeTreeElement.children)) {
            Page.activeTreeElement.children.push({
                "label": "new file",
                "icon": "fa fa-file"
            });

        }
    }
//tree1 is the tree widget name
Page.Widgets.tree1.redraw();
};

Page.addfolderClick = function ($event, widget) {
    // add folder
    if (Page.activeTreeElement) {
        if (_.isArray(Page.activeTreeElement.children)) {
            Page.activeTreeElement.children.push({
                "label": "new folder",
                "icon": "fa fa-folder",
                "children": []
            });

        }
    }
//tree1 is the tree widget name
Page.Widgets.tree1.redraw();
};
```

6. Preview the page and see two folders available by default. Select one node and click **Add File** to add files, or **Add Folder** to a add folder.

## See Also

[Tree Widget Cases](/learn/app-development/widgets/basic/tree/)  
[How to build a tree from static variable](/learn/how-tos/tree-use-case-static-variable/)  
[How to build tree from java service](/learn/how-tos/tree-use-case-java-service/)  
