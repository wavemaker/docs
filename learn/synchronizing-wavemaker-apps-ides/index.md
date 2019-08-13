---
title: "Synchronizing WaveMaker Apps with IDEs Beta"
id: "synchronizing-wavemaker-apps-ides"
---

In scenarios where you want to work on WaveMaker apps and use IDE for editing Java code, synchronizing the two can be a challenge.

In this post, we introduce a Maven plugin - WorkSpace Sync Plugin,  syncs project changes between WaveMaker and IDE on your local machine. Topics covered are:

- [overview of the plugin](#overview),
- [needed for the plugin](#prereq),
- [up instructions for the plugin](#setup),
- [instructions the plugin](#usage), and
- [of the plugin](#limits)

## WorkSpace Sync Plugin

When working on a project using an IDE, earlier you had to export the project from WaveMaker, import into IDE, make changes, build and re-import the project into WaveMaker ( [here for details](/learn/app-development/dev-integration/extending-application-using-ides/)). This was a time-taking and tedious process.

**WorkSpace Sync Plugin** provides a communication channel between the IDE and Studio Workspace. You can directly push the changes made to the project from IDE to Studio Workspace without any overhead of copying and pasting the code. It solves the problem of synchronization between IDE and Studio Workspace without re-exporting the project. It also helps in getting the latest changes from Studio Workspace to IDE directly.

Git has to be installed on your local machine where you want to run this plugin.

## to use this plugin

**the plugin**: This is a one-time setup configuration. : In this step, all changes made to the project in IDE will be replaced with the Studio source.

1. from the terminal of your IDE or from the command shell on your local machine (from the project folder) and run the following command:
    
     wavemaker-workspace:init
    
2. running the above Maven command, you will be prompted to enter:
    - Studio
3. , you need to enter the Authentication credentials. It can be either
    - & Password which would require:
        - **email** - WaveMaker account which has access to the required project and
        - the WaveMaker account.
    - \- For this, you need to have an active WaveMaker session. Use the provided URL to obtain token value and enter it at the prompt. Do not log out of the WaveMaker session till you complete the complete the synchronization.
4. the login is authenticated, you will be presented with a list of projects existing within the Studio Workspace. Choose and enter the Project Number when prompted.
5. _Success_ message will indicate that the project is now available for use from your IDE.

## to synchronize your project

There are three scenarios wherein you will be dealing with once you start using the IDE: NOTE: For all three below-mentioned commands, you will be prompted for a password, enter your WaveMaker account password.

1. **latest changes from Studio WorkSpace**: This command can be used to pull the latest changes made to project in Studio are applied to IDE code. This includes both the latest commits made in Studio and uncommitted changes. If the same file is modified in both IDE and Studio Workspace, a **conflict** occurs and the process terminates. You have to resolve the conflicted files and rerun the command to pull changes from Workspace.
    
     wavemaker-workspace:pull
    
2. **IDE changes to Studio Workspace**: All the IDE changes are pushed to Studio Workspace. If the same file is modified in both IDE and Studio Workspace, a **conflict** occurs and the process terminates. You have to resolve the conflicted files and rerun the command to push IDE changes to Workspace.
    
     wavemaker-workspace:push
    
3. **project**: Use the following command:
    
     wavemaker-workspace:sync
    
    This command works in two steps:
    - _latest changes from Studio WorkSpace_: In this step, the latest changes made to project in Studio are applied to IDE code. This includes both the latest commits made in Studio and uncommitted changes. This makes sure that both IDE and Studio are in the same state. If the same file is modified in both IDE and Studio Workspace, a **conflict** occurs and the process terminates. You have to resolve the conflicted files and rerun the command to push IDE changes to Workspace.
    - _IDE changes to Studio Workspace_: If there are no conflicts in step 1, all the IDE changes are pushed to Studio Workspace.

1. of pages and services need to be done from WaveMaker platform. Use IDE for editing and debugging purposes alone.
2. is no provision to make new commits to VCS from IDE. All changes have to be committed from Studio Workspace.
3. files cannot be pulled or pushed.

1. case there are any major issues with the code in the IDE, like unresolvable conflicts, it is recommended to run the init command again.
    
     wavemaker-workspace:init
