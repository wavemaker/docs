---
title: "Integrate Azure File Storage into WaveMaker App"
id: "azure-file-storage-connector"
sidebar_label: "Integrate Azure File Storage"
---
---

Learn how to implement upload file, download file from stroage, delete file in storage account using Azure file storage connector.

## Azure File Storage Service

In the Azure file storage structure, the first thing we need is to have an Azure storage account. Azure file storage is offered under the Azure storage account. And once we have created an Azure storage account, we should have a file share created.

We can create an unlimited number of file shares within a storage account. Once we create a file share, then we can create directories, just like folders, and then we can upload files into it.

The process shows how to upload, download or delete file in storage account:

1. Upload Data to the file.
2. List Files.
3. Download File from storage.
4. Delete file present in file storage

:::note
 As the directories or files cannot be created under storage account directly we have to create share first.
:::

## Step 1: Importing the azure-file-storage-connector to project

1. Download the latest azurefilestorage connector zip [here](https://github.com/wavemaker/azure-file-storage-connector/releases)
2. Import the downloaded azurefilestorage connector zip into your app using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the **Connector** folder.

## Step 2: Configure azurefilestorage properties in profiles
1. By default externalized connector properties are added in the project profiles.
2. Connector externalized properties are prefixed with **connector.${connectorName}**

`
connector.azurefilestorage.default.azure.connectionString=
`

:::important
To work with azure file storage connector build **connectionString** after creating azure storage account.
:::

## 1: Upload Data to file in Azure File Storage

Upload file to the storage account. Make sure the specified share exists in the storage account.

Import statements required.
```Java
import  org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;
import java.io.ByteArrayInputStream;
```

```Java
public void uploadFile(String shareName, String filePath, MultipartFile file){
    try{
            azureFileStorageConnector.createShare(shareName); // Creates Share if not exists
            InputStream inputStream=new ByteArrayInputStream(file.getBytes());
            azureFileStorageConnector.upload(shareName, filePath,inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }
}
```

## 2. List Files from Azure File Storage.
List the files and directories present in the specified directory path.

```Java
import com.wavemaker.connector.azurefilestorage.model.AzureFile;
import java.util.List;
```

```Java
public List<AzureFile> listFiles(String shareName, String directoryPath){
    return azureFileStorageConnector.listFiles(shareName,directoryPath);
}
```

## 3: Download File from Azure File Storage

Download file from the storage account from the given filepath in azure share.

Import Statements required.
```Java
import com.wavemaker.runtime.file.model.DownloadResponse;
import java.io.ByteArrayInputStream;
```

```Java
public DownloadResponse downloadFile(String shareName, String filePath){
    azureFileStorageConnector.createShare(shareName); // Creates Share if not exists
    AzureFileResponse data= azureFileStorageConnector.downloadFileWithProperties(shareName,filePath);
    DownloadResponse downloadResponse=new DownloadResponse();
    downloadResponse.setContents(new ByteArrayInputStream(data.getOutputStream().toString().getBytes()));
    downloadResponse.setInline(false);
    downloadResponse.setFileName(data.getFileId());
    downloadResponse.setContentType(data.getContentType());
    return downloadResponse;
}
```

## 4. Delete File from Azure File Storage
Delete the file from the given file path from the given share.

```Java
public void deleteFile(String shareName, String filePath){
    azureFileStorageConnector.deleteFile(shareName,filePath);
}
```

:::note
 The filepath should be specified as either '/' or 'File.seperator' if the file is inside the directory. If the file is present in the share then give the file name directly.
:::