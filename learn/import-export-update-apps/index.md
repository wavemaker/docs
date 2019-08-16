---
title: "Import, Export & Update Apps"
id: ""
---

[development](/learn/app-development/dev-integration/developer-collaboration/) experience can be extended to include developers outside your network by using the following options:

- ,
- , and

##  Export Project

- Project allows you to create a ZIP or a WAR file including the project along with the resources used. The projects are [compliant](/learn/app-development/dev-integration/extending-application-using-ides/ "Extending the Application")
- we will be using the ZIP option. WAR option can be used for deployment to a Web Server, [here for more](/learn/app-development/deployment/deployment-web-server/) [![](../assets/export_project1.png)](../assets/export_project1.png)
- can also use the ZIP icon from the Project Dashboard to export the project without opening the same. [![](../assets/export_project3.png)](../assets/export_project3.png)
- a ZIP file is created you can download it to your machine.

**:** For security reasons, the export project option is restricted to the projects you own. **:** In case the project is using a database, only the data model is exported, data is not included in the export.

##  Import Project

can import a project or a prefab in the ZIP format using the  the Project Dashboard. Choose the file from the import dialog and click on Import. These are the files that were created from the Export option of WaveMaker Studio as discussed above.

- the **Dashboard**, click the button. [![](../assets/import_project1.png)](../assets/import_project1.png)
- the ZIP file from your machine to import and give it an appropriate name. You can retain the original name or change it.
- this project will be available on your Project Dashboard for selection.

##  Updating Projects

will use this option when you want to incorporate the changes made to the project after export i.e. when you want to "re-import" the project.

- the Project that you want to update.
- **Source** option from the **Utilities.** [![](../assets/update_project1.png)](../assets/update_project1.png)
- the location of the ZIP file with the updates. Keep in mind, this operation will overwrite the project source file from your local copy.

## Recovery

the previous section, we have seen how WaveMaker provides options to export the project as zip using menu and provides _Source_ option to update the project sources back. Sometimes projects may fail to open because of conflicts or some corrupt files. In such cases, Export & Update Source options without opening the project itself come in handy. This will help to export the project in conflict/corrupt state, fix the project outside of WaveMaker using an IDE and update the content.

### Details

Each project tile in the **Dashboard** shows

-  option for exporting the project as zip, and
-   option further provides the following options:
    - from the Previous Snapshot
    - from Project zip
-   option to delete the project

We will be looking at each of these options in the following sections.

### Project

option downloads project as a ZIP file. Using this option you can export the project (.zip) without opening the project and make changes if any required by [on it using an IDE](/learn/app-development/dev-integration/extending-application-using-ides/#steps) of your choice and [the project](#update-project) with new changes.

[![](../assets/export_project3.png)](../assets/export_project3.png)

### Project options

[![](../assets/restore_project1.png)](../assets/restore_project1.png) Restore opens a dialog with two sub-options:

- to last stable state
- from project ZIP

#### to last stable state

last stable state is picked from the snapshot of the project. This option will work only if there is a previous snapshot available, i.e. when there is a VCS conflict. Every time user makes a [pull request](/learn/app-development/dev-integration/developer-collaboration/#pull-changes), WaveMaker takes a snapshot of the project content before making a pull request. If the pull is successful (i.e no conflicts after the pull), the snapshot will be deleted, thus there will not be any previous snapshots for certain cases. Also if there are conflicts the snapshot will be deleted after resolving all conflicts. In such cases, you will get a message to the effect. After applying the Restore from the previous snapshot, your source may be behind the VCS status. In such case, you need to pull the changes again from the VCS to be in sync with the latest status of the VCS server.

#### from project ZIP

selecting this option you will be asked to upload the zip file (exported from export option) to update the project sources with the zip file content. The entire content in the project workspace will be updated with the new content thus losing any changes done post the export.

prepare the zip file for upload, we recommend using the “mvn clean install” command which prepares the zip for uploading in the “target/export” directory of the project sources where you extracted the zip file that you downloaded through Export option.

option also clears the VCS conflict state if any. But any changes to the files (added/deleted/modified) will be reflected in the VCS status.

< App Preview

Control >

8\. Developer Integrations

- 8.1 Test(Preview) and Run Apps
    - [Overview](/learn/dev-integration/developer-tools/)
    - [Preview](/learn/dev-integration/developer-tools/#preview)
    - [Run](/learn/dev-integration/developer-tools/#run)
- [8.2 Import, Export & Update App](#)
    - [Overview](#)
    - [Export](#export-project)
    - [Import](#import-project)
    - [Update](#update-project)
    - [Project Recovery](#project-recovery)
        - [Export](#export)
        - [Restore](#restore-project)
- 8.3 Developer Collaboration
    - [Overview](/learn/app-development/dev-integration/developer-collaboration/)
    - [Project Sharing](/learn/app-development/dev-integration/developer-collaboration/#project-sharing)
    - [Code Sharing - VCS](/learn/app-development/dev-integration/developer-collaboration/#vcs)
        - [Checkout](/learn/app-development/dev-integration/developer-collaboration/#checkout)
        - [Pull Changes](/learn/app-development/dev-integration/developer-collaboration/#pull-changes)
        - [Push Changes](/learn/app-development/dev-integration/developer-collaboration/#push-changes)
        - [View Changes](/learn/app-development/dev-integration/developer-collaboration/#view-changes)
        - [Commit History](/learn/app-development/dev-integration/developer-collaboration/#commit-history)
        - [Merge Conflicts](/learn/app-development/dev-integration/developer-collaboration/#merge-changes)
        - [Push to External Repo](/learn/app-development/dev-integration/developer-collaboration/#push-to-external-repo)
- 8.4 Debugging
    - [Overview](/learn/app-development/dev-integration/debugging/)
    - [Debugging using Log Files](/learn/app-development/dev-integration/debugging/#logs)
    - [Debugging through JavaScript](/learn/app-development/dev-integration/debugging/#javascript)
- 8.5 App Extensions
    - [Overview](/learn/dev-integration/extending-application-using-ides/)
    - [Working with IDEs](/learn/dev-integration/extending-application-using-ides/#steps)
    - [Integrating with Jenkins](/learn/dev-integration/extending-application-using-ides/#jenkins)
