---
title: "Asset Management App"
id: ""
---

document provides step by step for building **Management Application** WaveMaker Rapid Application Development Platform

**\-Requisite**: You are advised to understand the [App Development Essentials](/learn/jump-start/#app-essentials) before starting to build the app.

following concepts are covered in building this application.

1. **Basic Application**
2. **the UI – Layouts, Templates and Widgets**
3. **an SQL Database**
4. **Variables to access database**
5. **Variables to access queries**

7. **the App**
8. **the App**
9. **the App**

Overview

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTbTGYsGvR-h2powLU1XZCG0VQZpPpfMcuZtcpB2BWeYt5fMHxD3jPdqukBPRUlnIxBhLOHSxOoyFaN/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 Steps - Page Creation, Page Navigation, Create Database **File for Database Import**: Download and extract the zip file for use in this step: [](../assets/AssetsDB.zip)

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTgttevcfKuDJCr_EwW_hcL1zXd1LJLPMbfdNynqm54VCFg7u8It13mwGAL4PR5dAQln1GAR1R76EFf/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

Pages - Browse Catalog, View Device Inventory & Review Requests

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vSYjNYR_WcLhBdMawKjf1P0fgNsgfQyCM-sOR9YeNTuhz7BKVsKVoqYZh12Ty6Gw10Iel8_tfyblPTK/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 App

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQeKWKTyeK2SeKlsEY1eWbgQOGJ7lEpaj4X9VFSRAOzhU7E8Ly2jhsWXddxKdOaqWTa5umyr6aM680p/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

 - Request Device & Assign Devices needed in this step:

1. :
    
     REQUESTED, DEVICE\_INVENTORY 
       SET REQUESTED.ASSIGNED=true, REQUESTED.ASSIGNED\_QTY = REQUESTED.ASSIGNED\_QTY + 1,
       REQUESTED.REQUESTED\_QTY = REQUESTED.REQUESTED\_QTY - 1, 
       DEVICE\_INVENTORY.QTY = DEVICE\_INVENTORY.QTY - 1 
    where DEVICE\_INVENTORY.\`DEVICE ID\` = :devID and REQUESTED.ID = :id
    

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vT9_mghB0YOrulQlqGxZF-aF-rBFfKuRqLLnMCy1zfnAi5B5MF43ncxbq9uPDZ1fWVzDdsLuqYjqm67/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

using Charts

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQdumr6267zxYYHUNOA-8RNGKOBTHCMGnT3AdOTT6Rd9dbfAd8Owsc8ADBZSvIL9kgbMqwH53wucivI/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

- [1\. Leave Management App](/learn/tutorials/leave-management-app/)
- [2\. Asset Management App](/learn/tutorials/asset-management-app/)
    - [Introduction](#AM-intro)
    - [App Overview](#AM-overview)
    - [First Steps](#AM-step1)
    - [Building Pages](#AM-step2)
    - [Securing App](#AM-step3)
    - [Workflows](#AM-step4)
    - [Dashboard & Deployment](#AM-step5)
