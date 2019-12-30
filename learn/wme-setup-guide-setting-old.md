---
title: "WME Setup Guide – Setting up - old"
id: "wme-setup-guide-setting-old"
---

This section talks about Accessing and Setting up the WME. This step comes after you have [Launched and Initialized WME](/learn/installation/wme-setup-guide-launch-initialize/).

## Accessing WaveMaker Enterprise

You can access WaveMaker by one of the following ways:

- Configure the DNS Names in your enterprise routers with help of the IT or,
- Map the IP address and DNS names in the hosts file on the system accessing WaveMaker.

Example of the Host Entries:

<ip address>  wavemaker.\[mycompany\].com 
  qa.wmcloud.\[mycompany\].com
  stage.wmcloud.\[mycompany\].com
  live.wmcloud.\[mycompany\].com

**Note**:

- In the above Host Entries, **mycompany** is used as an example. You may have to replace **mycompany** with your appropriate domain name.
- The IP address in the above Host Entry example is the same IP address that is displayed after successfully completing the WME Network Configuration.

For _Windows_ machine, make the host entries in `C:WindowsSystem32driversetchosts` file as shown in the above example. For _Linux_ machines make the host entries in `/etc/hosts` file as shown in the above example. You may require to get IT assistance for this.

## Setting up WaveMaker Enterprise

To start the WME Setup, access the above-mentioned URL and follow the steps in the WaveMaker Enterprise Setup wizard:

1. **Admin Setup**:
    1. Enter _setup-admin_ as **username** and set a password of your choice.
    2. You will then be redirected to WME login page where you can log in as setup-admin using the password you set.
2. You will be prompted to select the setup type to be Trial or Production based on your requirement and license. Note: Studio Trial setup does not include Monitoring and WaveMaker Cloud Deployment features. Note: You will not be directed to this screen in case installing WaveMaker Cloud. [![](/learn/assets/WME_setup0.png)](/learn/assets/WME_setup0.png)
3. **Domain Setup**: Enter your Enterprise Name. Once you enter the Enterprise Name, domain names for WaveMaker Studio and WaveMaker Built Apps are auto-generated. You may replace these as per your requirement. **Note**: Based on the selection of the setup, the list of required DNS Entries is displayed. [![](/learn/assets/WME_setup1.png)](/learn/assets/WME_setup1.png)
4. **Authentication Setup**: Use the form to create an Admin user, entering the email id, password, first and last name and click Next [![](/learn/assets/WME_setup2.png)](/learn/assets/WME_setup2.png)
5. **Capacity Info**: The capacity allocation is non-editable and fixed based on the type of setup selected. Click Proceed with Installation [![](/learn/assets/WME_setup3.png)](/learn/assets/WME_setup3.png)
6. **Installation**: The installation process initiates and it takes a while to start, configure and run the services. [![](/learn/assets/WME_setup4.png)](/learn/assets/WME_setup4.png)

Once the installation process is completed successfully, click on Apply License to continue further. Make sure the License File is already downloaded to your local machine. **Note**: License File can ALSO be uploaded from the [License section of Launchpad](/learn/installation/wme-setup-guide-configuration/#uploading-license). [![](/learn/assets/WME_setup5.png)](/learn/assets/WME_setup5.png) **Note**: While launching WaveMaker, if installing services fails refer to [Troubleshooting section](/learn/installation/wme-setup-guide-maintenance/#troubleshooting).

## Uploading License

1. Upload the License File from your local machine and click on **Get License Details**. You can review your License details and continue further. [![](/learn/assets/WME_license3.png)](/learn/assets/WME_license3.png)
2. Click **Apply License**. On the bottom right corner, you will get a success message once the license is uploaded successfully. **NOTE**: To avail the full benefits of the License in terms of Developers and Nodes (Apps), instances need to be added appropriately. See [Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/) for more details.
3. Click on **Go To Launchpad**. [![](/learn/assets/WME_license2.png)](/learn/assets/WME_license2.png)

**Note**: Make sure you have the host entry made as mentioned above.

Step 4: Configuring WME from Launchpad

Contents

- [1\. Getting Started](/learn/installation/wavemaker-enterprise-setup-guide/)
- [2\. Launching & Initializing WME](/learn/installation/wme-setup-guide-launch-initialize/)
- [3\. Setting Up WME](#)
    - [i. Accessing WME](#accessing-wme)
    - [ii. Setting up WME](#setting-up-wme)
    - [iii. Uploading License](#uploading-license)
- [4\. Configuring WME](/learn/installation/wme-setup-guide-configuration/)
- [5\. Adding Capacity](/learn/installation/wme-setup-guide-adding-capacity/)
- [6\. Maintaining WME](/learn/installation/wme-setup-guide-maintenance/)
- [7\. Upgrading WME](/learn/installation/wme-setup-guide-upgrading/)
