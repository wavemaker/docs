---
title: "Download and Copy Installer"
id: "download-copy-installer"
sidebar_label: "Download and Copy Installer"
---
---

### Download the WME Installer

- #### If you choose to use WaveMaker Images(OVA/VHD/AMI)

  - No need to download the WME installer.
  - OVA/VHD/AMI will have it already.

- #### Ubuntu

  - Download debian package. The link will be shared by WaveMaker team.

  ```bash
    wget  <WME-Installer-Link>
  ```
  
- #### RHEL

  - Download tar package. The link will be shared by WaveMaker team.

  ```bash
    wget  <WME-Installer-Link>
  ```

### Copy The WME Installer

- Copy downloaded file to home location or any location on the Platform Instance.

### Verifying Checksum

You need to verify the WME Installer/OVA/License file (.deb/.ova file communicated to you by the WaveMaker team) using checksum command before installing it.

To verify on Linux

- Using the following command, go to the directory where installer file(deb/tar/ova/vhd) and checksum files are downloaded.

 ``` bash
  cd  <file-location>
 ```

- To verify the file integrity of the deb/tar/ova/vhd, run the following checksum command.

 ```bash
  sha1sum -c [checksum-filename]
 ```

- After running the command, the result should be displayed as OK, which means the checksum is verified and the file is OK.

To verify on Windows

- First, download the FCIV utility package (to download, [follow instructions from here](https://support.microsoft.com/en-us/kb/841290#bookmark-4)).

```bash
  cd <ova-file-location>
```

- After download, from command prompt, run the following command.

 ```bash
 FCIV -sha1 pathfilename.ext
 ```

- In Windows, after running the command, the result should be manually verified with the values present in their respective files (checksum file shared to you by email).

:::note
 (Applicable for both Windows and Linux): Do not proceed further to installation if checksum verification fails. Invalid checksum indicates a likely corrupted download. Try downloading the file again or contact [WaveMaker Support](mailto: support@wavemaker.com).
:::
