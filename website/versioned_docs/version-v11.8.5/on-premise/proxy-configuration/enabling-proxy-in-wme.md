---
title: "Enabling Proxy in WaveMaker Enterprise"
id: "enabling-proxy-in-wme"
sidebar_label: "Enabling Proxy in WaveMaker Enterprise"
---

Proxy servers can be used to configure any device or software to route its traffic through a proxy server instead of connecting directly to websites or services.

You can enable the Proxy settings by creating and configuring the **http-proxy.env** file in WaveMaker Enterprise (WME). This enables the integration of proxy settings, enhancing network security and facilitating communication with external resources. By following the steps outlined in this document and referencing the provided examples, you can seamlessly incorporate proxy configurations into your WaveMaker environment.

### Prerequisites

- Access to the WaveMaker Enterprise environment.
- Access to LaunchPad portal.
- Administrative privileges or access to create files in the WaveMaker directory.

## Enabling Proxy in WME

1. Create a new file named **http-proxy.env**. This is to create the file that contains Configuration details.
2. Open the newly created **http-proxy.env** file using a text editor of your choice and add the following configuration based on your proxy setup. For example,

```

HTTP_PROXY=http://user:pass@192.168.1.100:8080
HTTPS_PROXY=https://proxy.example.com:8443
NO_PROXY=wavemakerdoamin.com, 10.192.10.121, 10.192.10.131

```

:::note

Replace these examples with your actual proxy configuration, ensuring accurate syntax and providing authentication credentials if necessary.

:::

:::info

Make sure to incorporate the following compulsory line, replacing the placeholders with actual values:

```
NO_PROXY=<wavemakerdomain.com>,<all private IPs used in WME setup>, <platform_ip>
```

:::

| Property | Description |
| ---- | ---- |
| HTTP_PROXY | Specifies the HTTP proxy server for HTTP connections. Requests sent over the HTTP protocol will use this proxy. |
| HTTPS_PROXY | Specifies the HTTPS proxy server for HTTPS connections. Requests sent over the HTTPS protocol will use this proxy. |
| ALL_PROXY | Specifies a proxy server for both HTTP and HTTPS connections. This is a general proxy configuration for all protocols. |
| NO_PROXY | Specifies a comma-separated list of domains or IP addresses that should bypass the proxy. Requests to these addresses will be made directly without using the proxy. |

3. After adding the proxy configuration, save the changes to the **http-proxy.env** file and place in below mentioned locations respectively.
   - Platform Instance: /wm-runtime/system-env
  ![wm-runtime/system-env](/learn/assets/wm-runtime-system-env.png)
   - External User Workspace Studio (Can be multiple based on Infra): /data/system-env
  ![data/system-env](/learn/assets/data-system-env.png)

4. Connect to the platform instance and restart edn-services and jobs-worker by using the below set of commands 
   
   ```
    docker restart edn-services
    docker restart jobs-worker
   ```
5. Now, log in to LaunchPad and navigate to Developer Workspace.
   ![Developer Workspace](/learn/assets/developer-workspace.png)
6. Run the instance patch by clicking on the Patch button available on all external user workspace instances. Repeat for all external developer workspace instances and wait for the instance’s  STATUS to change to STARTED.
   ![Status Started Patch](/learn/assets/status-started-patch.png)
7. Once the **http-proxy.env** file is created and configured, verify that the proxy settings are correct by testing connectivity to external resources within your WaveMaker applications.
