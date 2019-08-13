---
title: "Tree Use Case - from Java Service"
id: "tree-use-case-java-service"
---

1. the source structure for Tree as a [**Service**](http://[supsystic-show-popup id=119]) by name
2. following code needs to be added to the Java service:
    1. the ArrayList utility:
        
         java.util.ArrayList;
        import java.util.List;
        
    2. the following array structure:
        
            public String label;
            public String icon;
            public List<TreeData> subItems;
        
    3. the following methods:
        
         TreeData() {
        
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
        
    4. the following main method:
        
         List<TreeData> sampleJavaOperation(String name) {
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
        
3. a [Service Variable](http://[supsystic-show-popup id=105]) to invoke the above Java Service
4. and drop a Tree widget, bind the Dataset to the above Java Service Variable
5. the page to see Tree widget in action.

[Widget Cases](/learn/app-development/widgets/basic/tree/)

- [1\. How to build a tree from static variable](/learn/how-tos/tree-use-case-static-variable/)
- [2\. How to build tree from java service](/learn/how-tos/tree-use-case-java-service/)
- [3\. How to build a dynamic tree](/learn/how-tos/tree-use-case-dynamic-tree/)
