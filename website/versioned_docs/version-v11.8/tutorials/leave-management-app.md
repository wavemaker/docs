---
id: "leave-management-app"
title: "Leave Management App"
---
This topic provides step-by-step instructions for building a Leave Management app using the WaveMaker *Rapid-Application Development* Platform. 

---

This app allows an employee to apply for leave, and it will enable the manager to take action against the leave request. 

**Pre-Requisite**: You are advised to understand the [WaveMaker App Development Essentials](/learn/jump-start/jump-start-app-essentials/) before starting to build the app.

The following concepts are covered in building this application.

1. **Creating Basic Application**
2. **Building the UI – Layouts, Templates and Widgets**
3. **Connecting to Database**
4. **Creating Variables to access database**
5. **Creating Variables to access queries**
6. **Binding**
7. **Securing the App**
8. **Running the App**

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

![App-Flow](/learn/assets/app-flow-leave-management-low-code-project.svg)   


**WM**App Overview

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vT2tIX29Z688IlfCE-xpnv0aZf2MaY7ZGIqU8K5kBXvDAnUnI0WEPrH2IvonipeLMHgy-afGWf6wBo8/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

**WM**First Steps - Page Creation, Page Navigation, Connect to Database

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vR1v9lsjgM5zWqCt44rSpP1RFigovXOtNsBjNXkTHBSNKSzd0Wkm1PTc5W6XoWKVazv2joxSwXTefrE/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

**WM**Building Employee List Page

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQS7Y3laeclt2nyE0IN7SuJ4210a08CVXL2kbobc15TPsZo4kWiVJq6KtWqJIM9h1zrtPUxrh02-kFh/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

**WM**Securing App

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTsoEKCdjv0uCRLkiPkoglC4pSPN55bCw5jO6eMR5vnAV7Htb1U7mlelGQ7I2KknpP4K5qqb10MRcYT/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

**WM**Building Secure Pages - Profile, My Leaves

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vRqW0c9DYHkbW6tnDy_lW4t_82X2teXa4gHSJMg2vdJRTtXbSkm_3IiiBLFg3la--AcSFMcFlcnXS1z/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

**WM**Workflows - Apply Leave, Approve/Reject Leaves**Queries** needed in this step:

1. _tobeApprovedLeaves_:
    
    select e.firstname,e.lastname,e.picurl,e.birthdate,e.job_title,e.city, v.* from employee e,vacation v where e.emp_id=v.emp_id and manager_id=:data and status='Pending'
    
2. _LeaveAction_:
    
    update Vacation set status = :status where id =:id
    

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTYTUbbITPwWJaYJX79A5VRTp0H0w3fDGMxHPQCut5DSE03EZMBI7adnjWmtyJuYUFqSe3EC6YSQJKi/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

**WM**Dashboard using Charts

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vThl2s3B4fLWJm_u-9JedHpHAh580ZdyKpInahn0VoXbIyBh2mAIKY5iEk4VafaY_felI2-IsllQUUx/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>


