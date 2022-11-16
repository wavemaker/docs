---
title: "Synchronizing WaveMaker Apps with IDEs Beta"
id: "synchronizing-wavemaker-apps-ides"
---

In scenarios where you want to work on WaveMaker apps and use IDE for editing Java code, synchronizing the two can be a challenge.

In this post, we will introduce a Maven plugin - wavemaker-workspace Plugin, which updates project changes between WaveMaker and IDE on your local machine. Topics covered are:

- [an overview of the plugin](#overview),
- [prerequisites needed for the plugin](#prereq),
- [set up instructions for the plugin](#setup),
- [usage instructions the plugin](#usage), and
- [limitations of the plugin](#limits).

## WaveMaker WorkSpace Sync Plugin

When working on a project using an IDE, earlier you had to export the project from WaveMaker, import into IDE, make changes, build and re-import the project into WaveMaker ([see here for details](/learn/app-development/dev-integration/extending-application-using-ides/)). This was a time-taking and tedious process.

**WaveMaker WorkSpace Sync Plugin** provides a communication channel between the IDE and Studio Workspace. You can directly push the changes made to the project from IDE to Studio Workspace without any overhead of copying and pasting the code. It solves the problem of synchronization between IDE and Studio Workspace without re-exporting the project. It also helps in getting the latest changes from Studio Workspace to IDE directly.

## Prerequisites

Git has to be installed on your local machine where you want to run this plugin.

## How to use this plugin

**Initialize the plugin**: This is a one-time setup configuration. **NOTE**: In this step, all changes made to the project in IDE will be replaced with the Studio source.

1. Either from the terminal of your IDE or from the command shell on your local machine (from the project folder) and run the following command:
    
    mvn wavemaker-workspace:init
    
2. Upon running the above Maven command, you will be prompted to enter:
    - the Studio **hostUrl**
3. Next, you need to enter the Authentication credentials. It can be either
    - Username & Password which would require:
        - **user email** - WaveMaker account which has access to the required project and
        - **password **of the WaveMaker account.
    - Token - For this, you need to have an active WaveMaker session. Use the URL <https://www.wavemakeronline.com/studio/services/auth/token> to obtain 
    token value and enter it at the prompt. Do not log out of the WaveMaker session till you complete the complete the synchronization.
    
**[![](/learn/assets/InitFlow.jpg)](/learn/assets/InitFlow.jpg)**

4. Once the login is authenticated, you will be presented with a list of projects existing within the Studio Workspace. Choose and enter the Project Number when prompted.
5. _Build Success_ message will indicate that the project is now available for use from your IDE.

## How to synchronize your project

There are three scenarios wherein you will be dealing with once you start using the IDE: NOTE: For all three below-mentioned commands, you will be prompted for a password, enter your WaveMaker account password.

1. **pull**: This command can be used to pull the latest changes made to project in Studio are applied to IDE code. This
 includes both the latest commits made in Studio and uncommitted changes. If the same file is modified in both IDE and Studio Workspace, a **merge conflict** occurs and the process terminates. You have to resolve the conflicted files and rerun the command to pull changes from Workspace.
    
    mvn wavemaker-workspace:pull
**[![](/learn/assets/PullChangesFlow.jpg)](/learn/assets/PullChangesFlow.jpg)**
    
2. **push**: All the IDE changes are pushed to Studio Workspace. If the same file is modified in both IDE and Studio 
Workspace, a **merge conflict** occurs and the process terminates. You have to resolve the conflicted files and rerun the command to push IDE changes to Workspace.
    
    mvn wavemaker-workspace:push
**[![](/learn/assets/PushChangesFlow.jpg)](/learn/assets/PushChangesFlow.jpg)**    

3. **sync**:
    This command works in two steps:
    - _Pull latest changes from Studio WorkSpace_: In this step, the latest changes made to project in Studio are applied to IDE code. This includes both the latest commits made in Studio and uncommitted changes. This makes sure that both IDE and Studio are in the same state. If the same file is modified in both IDE and Studio Workspace, a **merge conflict** occurs and the process terminates. You have to resolve the conflicted files and rerun the command to push IDE changes to Workspace.
    - _Push IDE changes to Studio Workspace_: If there are no conflicts in step 1, all the IDE changes are pushed to Studio Workspace.
    
     mvn wavemaker-workspace:sync
    **[![](/learn/assets/SyncChangesFlow.jpg)](/learn/assets/SyncChangesFlow.jpg)**

## Limitations

1. Creation of pages and services need to be done from WaveMaker platform. Use IDE for editing and debugging purposes alone.
2. There is no provision to make new commits to VCS from IDE. All changes have to be committed from Studio Workspace.
3. Binary files cannot be pulled or pushed.

## Troubleshoot

1. In case there are any major issues with the code in the IDE, like unresolvable conflicts, it is recommended to run the init command again.
    
    mvn wavemaker-workspace:init
