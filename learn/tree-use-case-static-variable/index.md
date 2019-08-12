---
title: "Tree Use Case - from Static Variable"
date: "2016-11-30"
---

We will build a tree using a simple static structure

1. and drop a widget in your canvas. Tree widget comes with multiple nodes
2. [a Model Variable](http://[supsystic-show-popup id=105]), say staticTree, giving the structure of the data to be displayed in the tree. Ensure that the check box is selected.
3. the _Editor_ enter the following code:
    
    \[
      {
        "label": "item1",
        "icon": "fa fa-align-left"
      },
      {
        "label": "item2",
        "icon": "glyphicon glyphicon-music",
        "children": \[
          {
            "label": "item2.1",
            "icon": "glyphicon glyphicon-bookmark",
            "children": \[
              {
                "label": "item2.1.1",
                "icon": "glyphicon glyphicon-headphones",
                "children": \[
                  {
                    "label": "item2.1.1.1",
                    "icon": "glyphicon glyphicon-euro"
                  }
                \]
              }
            \]
          }
        \]
      },
      {
        "label": "item2.2",
        "icon": "glyphicon glyphicon-euro"
      }
    \]
    
    In this code, we are specifying the node structure - the on each node, to be displayed at each node and any _\-level nodes_ Icons can be [from glyphicons](https://getbootstrap.com/docs/3.3/components/) or [awesome](https://fortawesome.github.io/Font-Awesome/cheatsheet/) icons. : If you follow this structure, the label, icon, link, and children tags are picked automatically. If you are using different tag names, then you need to specify them while binding. [![](../assets/tree_statvar.png)](../assets/tree_statvar.png)
4. , bind the **\->**  property of the tree widget to the dataset under the model variable created in the previous step (staticTree -> dataSet). You can see the preview on the canvas. [![](../assets/tree_design.png)](../assets/tree_design.png)
5. the application and see the menu in action. Click on the + before nodes, here item2, to expand the node.

[Widget Cases](/learn/app-development/widgets/basic/tree/)

- [1\. How to build a tree from static variable](/learn/how-tos/tree-use-case-static-variable/)
- [2\. How to build tree from java service](/learn/how-tos/tree-use-case-java-service/)
- [3\. How to build a dynamic tree](/learn/how-tos/tree-use-case-dynamic-tree/)
