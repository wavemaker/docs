---
title: "Leave Management App"
id: ""
---

document provides step by step for building **Management Application** WaveMaker Rapid Application Development Platform

**\-Requisite**: You are advised to understand the [App Development Essentials](/learn/jump-start/jump-start-app-essentials/) before starting to build the app.

following concepts are covered in building this application.

1. **Basic Application**
2. **the UI – Layouts, Templates and Widgets**
3. **to Database**
4. **Variables to access database**
5. **Variables to access queries**

7. **the App**
8. **the App**

Overview

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vT2tIX29Z688IlfCE-xpnv0aZf2MaY7ZGIqU8K5kBXvDAnUnI0WEPrH2IvonipeLMHgy-afGWf6wBo8/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 Steps - Page Creation, Page Navigation, Connect to Database

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vR1v9lsjgM5zWqCt44rSpP1RFigovXOtNsBjNXkTHBSNKSzd0Wkm1PTc5W6XoWKVazv2joxSwXTefrE/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 Employee List Page

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQS7Y3laeclt2nyE0IN7SuJ4210a08CVXL2kbobc15TPsZo4kWiVJq6KtWqJIM9h1zrtPUxrh02-kFh/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 App

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTsoEKCdjv0uCRLkiPkoglC4pSPN55bCw5jO6eMR5vnAV7Htb1U7mlelGQ7I2KknpP4K5qqb10MRcYT/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 Secure Pages - Profile, My Leaves

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vRqW0c9DYHkbW6tnDy_lW4t_82X2teXa4gHSJMg2vdJRTtXbSkm_3IiiBLFg3la--AcSFMcFlcnXS1z/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 - Apply Leave, Approve/Reject Leaves needed in this step:

1. :
    
     e.firstname,e.lastname,e.picurl,e.birthdate,e.job\_title,e.city, v.\* from employee e,vacation v where e.emp\_id=v.emp\_id and manager\_id=:data and status='Pending'
    
2. :
    
     Vacation set status = :status where id =:id
    

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTYTUbbITPwWJaYJX79A5VRTp0H0w3fDGMxHPQCut5DSE03EZMBI7adnjWmtyJuYUFqSe3EC6YSQJKi/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

using Charts

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vThl2s3B4fLWJm_u-9JedHpHAh580ZdyKpInahn0VoXbIyBh2mAIKY5iEk4VafaY_felI2-IsllQUUx/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

- [1\. Leave Management App](/learn/tutorials/leave-management-app/)
    - [Introduction](#LM-intro)
    - [App Overview](#LM-overview)
    - [First Steps](#LM-step1)
    - [Building Pages](#LM-step2)
    - [Securing App](#LM-step3)
    - [Secure Pages](#LM-step4)
    - [Workflows](#LM-step5)
    - [Dashboard](#LM-step6)
- [2\. Asset Management App](/learn/tutorials/asset-management-app/)
