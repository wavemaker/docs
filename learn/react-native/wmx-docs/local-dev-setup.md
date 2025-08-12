---
title: "Local Dev Setup"
id: "local-dev-setup"
sidebar_label: "Local Dev Setup"
---
---

Currently, WaveMaker Studio does not provide a direct UI for adding custom components.  
Therefore, before developing a WMX Widget, you need to set up your project locally so you can add the component directly into the WaveMaker project files. Once added, you can push your changes back to Studio and start using the new WMX Widget in your app.

## 1. Set Up the Project Locally

1. In **WaveMaker Studio**, go to:  **Settings → Export → Export Project as Sources (ZIP)**  

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/nmSiCcLJYxKDwobxXxQ88q"
    title="Steps to Export WaveMaker Project"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

2. Download and extract the ZIP file to your local system.  
3. Open the extracted folder in your preferred an Editor/IDE (e.g., Visual Studio Code).  
4. You can now create or edit WMX Widgets and make other custom modifications locally.

---

## 2. Enable Project Sync

To push your local changes to Studio (and pull updates from Studio), you need to set up **[Project Sync](https://docs.wavemaker.com/learn/how-tos/synchronizing-wavemaker-apps-ides-beta/)**.

### Prerequisites

Following software must be installed and configured on your system.
- [**Git**](https://git-scm.com/downloads)
- [**JDK**](https://www.oracle.com/in/java/technologies/downloads/)
- [**Maven**](https://maven.apache.org/download.cgi)

### Initialize Workspace Sync
1. Open a terminal in your project’s root directory.  
2. Run:
   ```bash
   mvn wavemaker-workspace:init
   ```
3. When prompted, provide:
    - WaveMaker Studio Host URL
    - Your login credentials using Email & Password or a Token (Token can be generated at `https://<WaveMaker_Studio_Host>/studio/services/auth/token`)

4. Keep your WaveMaker Studio session open until the sync completes.
<!-- 5. When prompted, select the correct project number. -->

## 3. Sync Commands

- Pull changes from Studio:
```bash
mvn wavemaker-workspace:pull
```
- Push changes to Studio:
```bash
mvn wavemaker-workspace:push
```

Once your custom component is added, use the `push` command to upload it to Studio and start using it in your project.