---
title: "Tree Use Case - from Java Service"
id: "tree-use-case-java-service"
sidebar_label: "Tree using Java Service"
---
---

1. Create the source structure for Tree as a [Java Service](/learn/app-development/services/java-services/java-service/) by name _TreeData_.
2. The following code needs to be added to the Java service.

- Import the ArrayList utility:

```java
import java.util.ArrayList;
import java.util.List;
```

- Add the following array structure:

```java
public String label;
public String icon;
public List<TreeData> subItems;
```

- Add the following methods:

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

- Add the following main method:

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

3. Create a [Java Service Variable](/learn/assets/var_sel.png)Service to invoke the above Java Service.
4. Drag and drop a Tree widget, bind the Dataset to the above Java Service Variable.
5. Preview the page to see Tree widget in action.

## See Also

[Tree Widget Cases](/learn/app-development/widgets/basic/tree/)  
[How to build a tree from static variable](/learn/how-tos/tree-use-case-static-variable/)  
[How to build a dynamic tree](/learn/how-tos/tree-use-case-dynamic-tree/)  
