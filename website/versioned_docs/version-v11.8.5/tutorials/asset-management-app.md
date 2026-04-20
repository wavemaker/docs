---
title: "Asset Management App"
id: "asset-management-app"
---
This topic provides step-by-step instructions for building an Asset Management app using the WaveMaker *Rapid-Application Development* Platform. 

---

**Pre-Requisite**: You are advised to understand the [WaveMaker App Development Essentials](/learn/jump-start/jump-start-app-essentials) before starting to build the app.

The following concepts are covered in building this application.

1. **Creating Basic Application**
2. **Building the UI – Layouts, Templates and Widgets**
3. **Importing an SQL Database**
4. **Creating Variables to access database**
5. **Creating Variables to access queries**
6. **Binding**
7. **Securing the App**
8. **Running the App**
9. **Deploying the App**

## WM App Overview

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTbTGYsGvR-h2powLU1XZCG0VQZpPpfMcuZtcpB2BWeYt5fMHxD3jPdqukBPRUlnIxBhLOHSxOoyFaN/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## WM First Steps

Page Creation, Page Navigation, Create Database**SQL File for Database Import**: Download and extract the zip file for use in this step: [AssetsDB](/learn/assets/AssetsDB.zip)

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTgttevcfKuDJCr_EwW_hcL1zXd1LJLPMbfdNynqm54VCFg7u8It13mwGAL4PR5dAQln1GAR1R76EFf/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## WM Building Pages

Browse Catalog, View Device Inventory & Review Requests

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vSYjNYR_WcLhBdMawKjf1P0fgNsgfQyCM-sOR9YeNTuhz7BKVsKVoqYZh12Ty6Gw10Iel8_tfyblPTK/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## WM Securing App

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQeKWKTyeK2SeKlsEY1eWbgQOGJ7lEpaj4X9VFSRAOzhU7E8Ly2jhsWXddxKdOaqWTa5umyr6aM680p/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## WM Workflows

Request Device & Assign Devices**Queries** needed in this step:

1. _ReduceQuantityPostAssignment_:

```sql
UPDATE REQUESTED, DEVICE_INVENTORY 
    SET REQUESTED.ASSIGNED=true, REQUESTED.ASSIGNED_QTY = REQUESTED.ASSIGNED_QTY + 1,
    REQUESTED.REQUESTED_QTY = REQUESTED.REQUESTED_QTY - 1, 
    DEVICE_INVENTORY.QTY = DEVICE_INVENTORY.QTY - 1 
where DEVICE_INVENTORY.`DEVICE ID` = :devID and REQUESTED.ID = :id
```

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vT9_mghB0YOrulQlqGxZF-aF-rBFfKuRqLLnMCy1zfnAi5B5MF43ncxbq9uPDZ1fWVzDdsLuqYjqm67/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## WM Dashboard using Charts

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQdumr6267zxYYHUNOA-8RNGKOBTHCMGnT3AdOTT6Rd9dbfAd8Owsc8ADBZSvIL9kgbMqwH53wucivI/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
