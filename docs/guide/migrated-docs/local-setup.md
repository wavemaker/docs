## Local Development Setup for WMX Components

Before you start building WMX widgets, you need to prepare your WaveMaker project for local development to use in external IDEs. This allows you to add or edit components directly in your local environment and then synchronize changes back to WaveMaker Studio. =

### 1. Export and Prepare Your Project

First, export your project from WaveMaker Studio so you can work on it locally:

1. In WaveMaker Studio, navigate to **Settings → Export → Export Project as Sources (ZIP)**. 
2. Download and extract the ZIP file to your local system. 
3. Open the extracted project folder in your preferred editor or IDE  

Once opened, you can create, edit, or extend WMX widgets and make other custom modifications. 

---

### 2. Enable Project Sync

To push changes back to Studio (and pull updates), you must enable project synchronization.

#### Prerequisites

Make sure the following tools are installed and configured on your machine:

- Git  
- JDK  
- Maven 

#### Initialize Workspace Sync

From a terminal in the project’s root directory:

```bash
mvn wavemaker-workspace:init
```

Follow the prompts to:

- Confirm initialization  
- Provide your WaveMaker Studio host URL  
- Enter credentials (email/password or token)  
- Select the relevant project number  

> **Note:** Your WaveMaker Studio session must remain active during synchronization.

---

### 3. Syncing with Studio

Once project synchronization is enabled, you can use the following commands:

#### Pull Latest Changes from Studio
```bash
mvn wavemaker-workspace:pull
```
Push Local Changes to Studio

```
mvn wavemaker-workspace:push
```

After pushing, your custom WMX components will be available in WaveMaker Studio and ready to be used within your application.
