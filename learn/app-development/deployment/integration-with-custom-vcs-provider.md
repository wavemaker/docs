---
title: "Integration with Custom VCS provider"
id: "integration-with-custom-vcs-provider"
sidebar_label: "Custom VCS Integration"
---
---

:::note
Integration with custom VCS provider is only available for [WaveMaker Online Teams](/learn/teams/overview) (WMOT) and WaveMaker Enterprise (WME) users. It is not available for WaveMaker Online (WMO) single users.
:::

## Custom VCS integration in WMO Teams

In WMO, the custom VCS integration is available for [WMOT plan](/pricing/). During the time of app development in collaborative-development, tracking code changes and synchronizing the changes are essential. WaveMaker provides Version Control Services for this purpose. By default, WaveMaker Studio comes with a version control system that is based on Gitlab. In WMOT, you can integrate your Own VCS as Code Repository. For adding custom VCS in the code repository section, select **Add Code Repository**.

## Supported Providers

- [Gitlab](https://about.gitlab.com/)
- [Bitbucket](https://bitbucket.org/product)
- [Github](https://github.com/)
- [Azure](https://azure.microsoft.com/en-us/services/devops/repos/)

- Select the TEAM PORTAL section on the top right corner.  

[![wmo-launchpad-teams](/learn/assets/wmo-launchpad-teams.png)](/learn/assets/wmo-launchpad-teams.png)

- Select on Setup Team.

[![wmo-wavemaker-team-portal](/learn/assets/wmo-wavemaker-team-portal.png)](/learn/assets/wmo-wavemaker-team-portal.png)

- Select on Next.

[![wmo-launchpad-team-profile-configure](/learn/assets/wmo-launchpad-team-profile-configure.png)](/learn/assets/wmo-launchpad-team-profile-configure.png)


- Select Code Repository that you want to store all your code and provide the required details. Select Save to save the changes. 

[![wmo-configure-code-repo](/learn/assets/wmo-configure-code-repo.png)](/learn/assets/wmo-configure-code-repo.png)

- After selecting **Add Code Repository**, select the repository type and provide the required details for adding the repository. As default providers, WaveMaker supports Gitlab, Bitbucket, Github and Azure for external VCS configuration. Select Save to save the changes. 

[![wmo vcs](/learn/assets/wmo-adding-vcs-repo.png)](/learn/assets/wmo-adding-vcs-repo.png)

## Custom VCS configuration in WME

WME also supports External VCS as code repository. For confguring your own VCS, see [VCS configuration in WME](/learn/on-premise/configure/config-vcs).
