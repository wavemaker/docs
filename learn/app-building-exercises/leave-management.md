---
id: leave-management
title: Leave Management App
hide_title: yes
sidebar_label: Leave Management App
---
# Leave Management App

This topic provides step-by-step instructions for building a Leave Management app using the WaveMaker *Rapid-Application Development* Platform. This app allows an employee to apply for leave, and it will enable the manager to take action against the leave request. 

[tomorrow](/includes/tomorrow.md)

## Creating a Basic Application

### App Overview

|Step | Categories  | Description | 
|----|-----|-----|
|1  | Database | A predefined sample database is provided to work with. |
|2  | Profile  | This is an Employee Profile. It contains the list of employees from the same Department.|
|3  | Employee List | View the list of employees within the organisation. Visible to Managers only. |
|4  | Workflows | Keep track of the applied leaves and the statuses. |
|5  | Security | Users get access to view specific pages only depending on the user-permission level.|
|6  | Dashboard | Use charts to depict the leave utilisation of employees.|

### Application Flow

![App-Flow](assets/app-flow-leave-management-low-code-project.svg)   

## Application flow screens

<!--DOCUSAURUS_CODE_TABS-->
<!--My leaves-->
In this screen, employees can view the list of leaves applied by them.  

![User-Flow](assets/myprofile-leave-management-low-code-project.svg)   

<!--Apply Leave-->
Employees can apply for leaves from this page. 

![User-Flow](assets/applyleave-leave-management-low-code-project.svg)  

<!--User Profile-->
Employees can view their profile, as well as the list of employees from the same department. 

<!--Leave Manager-->
Keep track of the applied leaves and its status. 

<!--Employee List-->
Keep track of the applied leaves and their status. 

<!--Dashboard-->
Keep track of the applied leaves and their status. 

<!--END_DOCUSAURUS_CODE_TABS-->

---

## Building the UI – Layouts, Templates and Widgets
## Connecting to Database
## Creating Variables to access database
## Creating Variables to access queries
## Binding
## Securing the App
## Running the App