---
title: "Using Tree Widget"
id: "using-tree-widget"
---

We will build a tree using a simple static structure

1. Drag and drop a tree widget in your canvas. Tree widget comes with multiple nodes [![tree_dnd]
2. [Create a static variable](/learn/app-development/variables/variables) giving the structure of the data to be displayed in the tree. Ensure that the _IsList_ check box is selected.
3. In the _Text Editor_ enter the following code:

```json   
[
    {
    "label": "item1",
    "icon": "fa fa-align-left"
    },
    {
    "label": "item2",
    "icon": "glyphicon glyphicon-music",
    "children": [
        {
        "label": "item2.1",
        "icon": "glyphicon glyphicon-bookmark",
        "children": [
            {
            "label": "item2.1.1",
            "icon": "glyphicon glyphicon-headphones",
            "children": [
                {
                "label": "item2.1.1.1",
                "icon": "glyphicon glyphicon-euro"
                }
            ]
            }
        ]
        }
    ]
    },
    {
    "label": "item2.2",
    "icon": "glyphicon glyphicon-euro"
    }
]
```    
In this code we are specifying the node structure - the _label_ on each node, _icon_ to be displayed at each node and any _child-level nodes_. Icons can be [halflings from glyphicons](http://getbootstrap.com/components/) or [font awesome](https://fortawesome.github.io/Font-Awesome/cheatsheet/) icons. 

:::note
If you follow this structure, the label, icon, link and children tags are picked automatically. If you are using different tag names, then you need to specify them while binding. 
:::

[![tree_statvar](/learn/assets/tree_statvar.png)](/learn/assets/tree_statvar.png)

1. Next, bind the dataset value property of the tree widget to the dataset under the static variable created in the previous step. [![tree_bind] You can see the preview on the canvas. 

[![tree_design]](/learn/assets/tree_design.png)

1. Run the application and see the menu in action. 

[![tree_run1](/learn/assets/tree_run1.png)](/learn/assets/tree_run1.png)

[![tree_run2](/learn/assets/tree_run2.png)](/learn/assets/tree_run2.png)

Tree can be bound to a Java Service which returns an arraylist of Label, icon and has its own pojo as children. We will address one such scenario here.

## Step 1: Create Source - Java Service

1. Create a **Java Service** by name _TreeData_ [![tree_JS]
2. The following code needs to be added to the Java service:

3. import the ArrayList utility:

```java        
import java.util.ArrayList;
import java.util.List;
```        
2. add the following array structure:

```java        
public String label;
public String icon;
public List<TreeData> subItems;
```        
3. add the following methods:

```java        
public TreeData() {

    }

    public TreeData(String label, String icon) {
        this.label = label;
        this.icon = icon;
    }

    public List<TreeData> getTreeNodesList() {
        return this.subItems;
    }

    public void setTreeNodesList(List<TreeData> children) {
        this.subItems = children;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
```  

4. and the following main method:

```java        
public List<TreeData> sampleJavaOperation(String name) {
        String result = null;
        try {
            TreeData TreeData1 = new TreeData("C:", "test1");
            TreeData TreeData2 = new TreeData("Program Files", "glyphicon glyphicon-star");
            TreeData TreeData3 = new TreeData("System 32", "glyphicon glyphicon-ok");
            TreeData TreeData4 = new TreeData("D:", "test4");
            TreeData TreeData5 = new TreeData("My Documents", "glyphicon glyphicon-chevron-right");
            TreeData TreeData9 = new TreeData("Songs", "glyphicon glyphicon-music");
            TreeData TreeData10 = new TreeData("Movies", "glyphicon glyphicon-film");
            TreeData TreeData6 = new TreeData("Pictures", "glyphicon glyphicon-picture");
            TreeData TreeData7 = new TreeData("Pic1", "glyphicon glyphicon-picture");
            TreeData TreeData8 = new TreeData("Pic2", "glyphicon glyphicon-picture");
            List<TreeData> children = new ArrayList();
            children.add(TreeData2);
            children.add(TreeData3);
            List<TreeData> children1 = new ArrayList();
            children1.add(TreeData5);
            children1.add(TreeData6);
            List<TreeData> children2 = new ArrayList();
            children2.add(TreeData1);
            children2.add(TreeData3);
            TreeData1.setTreeNodesList(children);
            TreeData4.setTreeNodesList(children1);
            List<TreeData> children3 = new ArrayList();
            children3.add(TreeData7);
            children3.add(TreeData8);
            TreeData6.setTreeNodesList(children3);
            List<TreeData> children4 = new ArrayList();
            children4.add(TreeData9);
            children4.add(TreeData10);
            TreeData5.setTreeNodesList(children4);
            List<TreeData> allTrees = new ArrayList();
            allTrees.add(TreeData1);
            allTrees.add(TreeData4);
            return allTrees;
        } catch (Exception e) {
            logger.error("Sample java service operation has failed", e);
            throw e;
        }
    }
}
```        

## Step 2: Binding

1. [Create a Service Variable](/learn/app-development/variables/variables) using the Java Service created in the earlier step 


2. Drag and drop a tree widget onto the canvas and bind the dataset value to the Service Variable created in the above step 
3. Set the properties of Node Label, Icon and Children respectively 


## Step 3: Test Run

1. Run the app and see the tree in action.


If you have a requirement, whereby the user decides the structure of the tree. For example, you are building a folder-file structure and the user decides how many folders and files are to be present in a tree. This section deals with such a situation.

## Step 1: Create Source - Script Variable

1. Drop a Tree widget and 2 buttons (Add File, Add Folder) onto the canvas 

[![tree_dynamic_design](/learn/assets/tree_dynamic_design.png)](/learn/assets/tree_dynamic_design.png)

2. Select the Tree widget and specify a _Script Variable_ as **dataset** property, "_treeData_" Use the following for treeData in the Script:

```js    
// should be an array of objects consisting of label, icon, children keys
    // populate the initial data
$scope.treeData = [{
        "label": "folder1",
        "icon": "fa fa-folder",
        "children": []
    }, {
        "label": "folder2",
        "icon": "fa fa-folder",
        "children": []
    }];
```

3. Select JavaScript for the onSelect event of the tree widget as:

```js    
$scope.activeTreeElement = $item;
```    

## Step 2: Event Mapping

1. Select JavaScript for the click event of the buttons, Add File and Add Folder
2. Code for the click events would be:

- For Add File:

```js    
$scope.addFile = function($event, $isolateScope) {
        // add file
        if ($scope.activeTreeElement) {
            if (WM.isArray($scope.activeTreeElement.children)) {
                $scope.activeTreeElement.children.push({
                    "label": "new file",
                    "icon": "fa fa-file"
                });
            }
        }
    };
``` 
- For Add Folder:

```js    
$scope.addFolder = function($event, $isolateScope) {
        // add folder
        if ($scope.activeTreeElement) {
            if (WM.isArray($scope.activeTreeElement.children)) {
                $scope.activeTreeElement.children.push({
                    "label": "new folder",
                    "icon": "fa fa-folder",
                    "children": []
                });
            }
        }
    };
```   

## Step 3: Test Run

1. Run the application and see the tree in action.
