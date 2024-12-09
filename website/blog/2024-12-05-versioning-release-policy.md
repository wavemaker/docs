---
title: "WaveMaker Studio Versioning and Release Policy"
author: "Neha Shailendra"
---
---

WaveMaker Studio delivers consistent, predictable updates to provide users with an evolving, secure, and feature-rich experience. This document outlines our release schedule, versioning practices, and support lifecycle for both online and enterprise versions of WaveMaker Studio.

## Versioning Scheme

- WaveMaker Studio Release versions indicate the level of changes that are introduced by the release. WaveMaker Studio release versions have three parts: major.minor.patch.

- For example, version 11.8.5 indicates Major version 11, minor version 8 and patch level 5. 
    - **Major version** includes platform-level upgrades or significant architectural changes
    - **Minor version** includes feature updates, improvements
    - **Patch version** includes bug fixes, minor enhancements, and security patches

- Each release type (major, minor, and patch) has a specific purpose and cadence.

<!-- truncate -->

## Release Frequency

WaveMaker Studio provides consistent release updates based on the following schedule. The Cadence specified below is for general guidance and is subject to change from release to release.

- **Patch Releases**
    - Cadence: Every **2 weeks**
    - Purpose: Address critical bug fixes, security vulnerabilities, and minor enhancements
- **Major/Minor Releases**
    - Cadence: Every **3 months**
    - Purpose: Introduce new features, enhancements, and improvements that are compatible with recent major releases
    - Backward Compatibility: The Platform automatically upgrades existing applications to the latest version and all migrations are taken care of wherever possible.

## Support Policy and Lifecycle

- WaveMaker Studio provides **support for the latest 3 major/minor versions (upto 12 months approximately from the release date)** to ensure stability and security.
- **End-of-Support Notification**: Customers are notified when their version is nearing end-of-support. Notifications are sent via email to encourage timely upgrades.
- **Long-Term Support (LTS)**: Selected major releases may be designated as LTS, where they receive extended support, focusing on critical fixes and security patches only.

:::note
End-of-Support Notification and LTS are applicable only to **Enterprise customers (WME)**.
:::

## Release Status Definitions

- **Active Support**: The version currently receives regular updates, including bug fixes and security patches.
- **End of Life (EOL)**: Versions that are more than 3 releases (Major/Minor) behind the latest major/minor release are considered EOL and no longer receive support or updates. Users on EOL versions are strongly encouraged to upgrade to a supported release.

For instance, when we release 11.9, versions prior to 11.6 are considered EOL. Customers on versions 11.8 ,11.7 and 11.6 will continue to receive support/updates.

:::note
Release definitions are applicable exclusively to **Enterprise customers (WME)**. For **WMO customers**, the latest version is deployed automatically as soon as it becomes available.
:::

## Actively Supported Versions

We offer tentative dates as general guidance which are subject to change. Users are recommended to make timely upgrades before the end of LTS.

For example, below are the dates for our latest 11.9.x and prior releases.

| Version | Status | Released | Active Support Ends | Long Term Support (LTS) Ends/EOL|
| ------- | ------ | -------- | ------------------- | ------------------------------- |
| 11.9.x  | Active | Nov 2024 | Feb 2025 | Nov 2025 |
| 11.8 | LTS | July 2024 | Nov 2024 | July 2025 |
| 11.7 | LTS | April 2024 | July 2024 | April 2025 |
| 11.6 | LTS | Mar 2024 | June 2024 | Mar 2025 |

:::note
Patch is provided on the latest version in that particular series.
:::

## Best Practices for Staying Updated

- **Regular Upgrades**: Users are encouraged to stay updated with the latest minor and patch releases to benefit from security patches and feature improvements.
- **Testing and Staging**: Always test major and minor releases in a staging environment before deploying to production to ensure compatibility and stability.
- **Support Channels**: Contact customer support for help with any upgrade issues or compatibility questions.

## Conclusion

WaveMaker Studio’s versioning and release policy ensures users have access to a stable and secure platform while benefiting from regular improvements and new features. By following the outlined recommendations and adhering to the release lifecycle, users can make the most of WaveMaker Studio while minimizing disruptions during updates.
