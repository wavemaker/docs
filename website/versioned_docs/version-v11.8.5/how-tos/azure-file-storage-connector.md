---
title: "Integrate Azure File Storage into WaveMaker App"
id: "azure-file-storage-connector"
sidebar_label: "Integrate Azure File Storage"
---
---

Learn how to implement upload, download and delete file operations using Azure file storage connector.

## Azure File Storage Service

Azure file storage service provides a way to store the documents/files in a centralized file storage server and also enables sharing the documents across users. Azure file storage is offered under the Azure storage account and once we have created an Azure storage account, we should have a file **share** created.

We can create an unlimited number of file shares within a storage account. Once we create a file **share**, then we can create directories, just like folders, and then we can upload files into it.

The process shows how to upload, download or delete file in storage account:

1. Upload file to the storage.
2. List files in storage.
3. Download file from storage.
4. Delete file present in file storage.

:::note
 As the directories or files cannot be created under storage account directly we have to create **share** first.
:::

## Step 1: Importing the azure-file-storage-connector to project

1. Download the latest azurefilestorage connector zip [here](https://github.com/wavemaker/azure-file-storage-connector/releases)
2. Import the downloaded azurefilestorage connector zip into your app using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the **Connector** folder.

## Step 2: Configure azurefilestorage properties in profiles
1. By default externalized connector properties are added in the project profiles [Know More](/learn/connectors/connectors-import#externalizing-connector-properties).
2. Connector externalized properties are prefixed with **connector.${connectorName}**

`
connector.azurefilestorage.default.azure.connectionString=
`

:::important
To work with azure file storage connector provide the **connectionString** given by azure.
:::

:::tip
You can find your storage account's connection strings in the [Azure portal](https://portal.azure.com). Navigate to SETTINGS > Access keys in your storage account's menu blade to see connection strings.
:::

## Step3: File Operations in Storage Account.
Autowire the Connector Service into the added JavaService.

Import Statement: 
```Java
import com.wavemaker.connector.azurefilestorage.AzureFileStorageConnector;
```
```Java
@Autowired
private AzureFileStorageConnector azureFileStorageConnector;
```

### 1. Create File Share in Storage Account.

Import Statements Required.
```Java
import javax.annotation.PostConstruct;
```

Create Share in PostConstruct.
```Java
    private static final String shareName="<sharename>";

    @PostConstruct
    public void init(){
        azureFileStorageConnector.createShare(shareName); 
    }
```

### 2: Upload file to Azure File Storage.

Upload file to the storage account. Make sure the specified share exists in the storage account.

Import statements required.
```Java
import  org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.io.InputStream;
import java.io.ByteArrayInputStream;
```

```Java
public void uploadFile(String filePath, MultipartFile file){
    try (InputStream inputStream = new ByteArrayInputStream(file.getBytes())) {
        azureFileStorageConnector.upload(shareName, filePath,inputStream);
        } catch (IOException e) {
            throw new RuntimeException("Exception occurred while uploading file: "+e);
        }
}
```

### 3. List Files from Azure File Storage.
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

### 4: Download File from Azure File Storage

Download file from the storage account from the given filepath in azure share.

Import Statements required.
```Java
import com.wavemaker.runtime.file.model.DownloadResponse;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
```

```Java
public DownloadResponse downloadFile(String filePath){
    String fileName=filePath.substring(filePath.lastIndexOf('/')+1,filePath.length());
    AzureFileResponse data= azureFileStorageConnector.downloadFileWithProperties(shareName,filePath);
    DownloadResponse downloadResponse=new DownloadResponse();
    ByteArrayOutputStream outStream = (ByteArrayOutputStream)data.getOutputStream();
    downloadResponse.setContents(new ByteArrayInputStream(outStream.toByteArray()));
    downloadResponse.setInline(false);
    downloadResponse.setFileName(fileName);
    downloadResponse.setContentType(data.getContentType());
    return downloadResponse;
}
```

### 5. Delete File from Azure File Storage
Delete the file from the given file path from the given share.

```Java
public void deleteFile(String shareName, String filePath){
    azureFileStorageConnector.deleteFile(shareName,filePath);
}
```

:::note
 The filepath should be specified as '/' if the file is inside the directory. If the file is present in the share then give the file name directly.
:::

## Also see how to upload file to Azure storage using File upload widget.
The below process shows how to upload the file using file upload widget to the azure storage.
1. Drop File upload widget.
2. Create Variable for uploadFile added in the Javaservice in Step 3, point 2.
3. Invoke created Variable.

### 1. Drop File upload Widget.
Drag 'n' drop file upload widget on to the canvas.

:::note
 Remove the **FileServiceUploadFile** from the **onSelect** event default added to the file upload widget (removing this because we just want to select the file and upload to azure storage).
:::

### 2. Create Variable for the uploadFile method.
1. Create JavaService variable for the **uploadFile** method (added in Step3, point number2). Uncheck the properties **Update data on input change** and **Request data on page load**.

2. Switch to **Data** tab and bind the required inputs needed for the variable.
    1. click on **file** input bind icon and select the file upload widget selectedFiles.(File upload selectedFiles gives info about the list of selected files)

    **Example:**
    ```Js
    Widgets.fileupload1.selectedFiles[0]
    ```
    2. click on bind icon of the **filePath** input and give the upload directory path of the azure storage along with fileName.

    **Example:**
    ```JS
    "qadir/"+Widgets.fileupload1.selectedFiles[0].name
    ```
    where **qadir** is the directory path in the azure storage.

### 3. Invoke Created Variable.
Drop a button on the canvas and **onClick** event of the button call the created variable.

Now preview the app and select any file, the selected file will be uploaded in the directory of the azure storage.