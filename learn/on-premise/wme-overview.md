---
title: "Welcome to WaveMaker Enterprise Guide"
id: ""
sidebar_label: "Getting started"
---
---

WaveMaker Enterprise (WME) is a on-premise offering of WaveMaker. WME can be installed on an on-premise/private or public cloud. It can be hosted and managed by an organization on their own infrastructure.

## What you'll need

You will hear from us on scheduling a setup call. You should keep the following ready before we start the setup.

### Hardware  requirements

The following hardware requirements are for approximation; these may vary depending on the number of developers and apps.

#### Three Machines

1. **Platform Instance**: 16 GB RAM,  4 Core CPU,  300 GB disk
2. **Studio External Instance**: 16 GB RAM,  4 Core CPU,  300 GB disk
3. **QA Apps External Instance**: 16 GB RAM,  4 Core CPU,  150 GB disk

For more information on prerequisites, see [WaveMaker Enterprise Prerequisites](learn/on-premise/wme-prerequisites)

:::important
You can discuss your concerns on hardware allocation before starting the setup.
:::

### Files needed

- **Launching Platform Instance**: Download the `WME-installer-10.3.1.ee.8273.ova`  and copy it to a location where you can launch instances using this OVA.
- **Launching External Instances**: Download the`WME-ExternalInstance-v24.ova`  and copy it to a location where you can launch instances using this OVA.
- Trial license.

:::note
We will send the trial license link soon before the call.
:::

### Permissions

You should ensure that you have the right permissions to import ova and launch machines.

### Accessibility

- Domain Names which should be mapped to Platform machine IP in your DNS.  
 For example:

```example
wme.dpo.com,  wm-apps.dpo.com
```

- You can skip domain name mapping. In such cases, developers should map it in the `/etc/host` file.
- All the three machines should have static IP addresses, this means that the IP address should not change when you reboot.

### Other

- If you would like to host source code in your own VCS, then you may have to provide details during the setup, such as username, password, access token of the VCS. Currently, we support Bitbucket, Gitlab, Github. WaveMaker ships with Gitlab as Default VCS.
- WaveMaker ships DB based authentication as default. You can configure your own SSO for the platform. Currently, we support OpenID Connect, LDPA, CAS protocols.

## The Process

When you have all the prerequisites ready, as per the schedule, our team will get in touch with you. The setup may take 60-90 minutes approximately.

### Steps

---

#### Step-1: Launch instanaces

#### Step-2: Login to the platform instance

#### Step-3: Start the setup process

#### Step-4: Access URL `http://<platformIP>:8080/`

#### Step-5: Complete the guided setup on setup wizard

#### Step-6: Upload license

#### Step-7: Add external instances from launchpad

#### Step-8: Add external VCS (Advanced)

## What's next

[Get started with WaveMaker Studio](/learn/documentation-reference)

<iframe width="700" height="394" src="https://www.youtube.com/embed/Fhie1OW8SOY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media" allowfullscreen></iframe>
