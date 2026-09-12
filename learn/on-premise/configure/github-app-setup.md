---
title: "GitHub App Setup for WaveMaker Enterprise (WME)"
id: "github-app-setup"
sidebar_label: "GitHub App Setup"
---
---

**Author: Chakravarthy Batna**

## Why Create a GitHub App?

In WaveMaker Enterprise, users connect to GitHub by creating a **Code Repository** (a VCS account) in the Team Portal. While creating a Code Repository, the user can authenticate with either a **Personal Access Token (PAT)** or a **GitHub App**.

Unlike WaveMaker Online — which comes with a ready-made, WaveMaker-managed GitHub App — WME is a **self-hosted deployment running in the customer's own environment**. There is no central GitHub App that the platform can ship with, because every WME installation runs under a different domain. The GitHub App's OAuth callback and post-installation URLs must point to that specific WME instance, which only the customer knows.

So before users can pick **GitHub App** as the authentication method in the Team Portal, a WME administrator has to do a **one-time setup**:

1. **Create a GitHub App** on [GitHub](https://github.com) under a personal account or organization, configured with the WME instance's callback URLs and the required permissions.
2. **Register that GitHub App in WME LaunchPad** by providing the App ID, Client ID, Client Secret, and Private Key generated on GitHub.

Once both steps are done, the registered GitHub App becomes available to **all existing and newly created teams** in the Team Portal, and any team can use it to create Code Repositories — without ever generating a PAT.

The rest of this document walks through that one-time admin setup, and then how the GitHub App is used by end-users in the Team Portal.

---

## How to Create a GitHub App

Before connecting WME LaunchPad to GitHub, you need to create a GitHub App and collect the following credentials:

| Field             | Where to find it                            |
|-------------------|---------------------------------------------|
| **App ID**        | GitHub App settings page (auto-generated)   |
| **Client ID**     | GitHub App settings page (auto-generated)   |
| **Client Secret** | Generated once after app creation           |
| **Private Key**   | Generated and downloaded after app creation |

### Step 1 — Open the GitHub App Creation Page

A GitHub App can be created either under your **personal user account** or under an **organization account**. Choose
based on who will own and manage the app.

#### Option A — Create under your Personal Account

Use this if you want the app to be owned by your individual GitHub user account.

> **Profile picture → Settings → Developer settings → GitHub Apps → New GitHub App**

#### Option B — Create under an Organization

Use this if you want the app to be owned by a GitHub organization (recommended for teams and production deployments).

> **Profile picture → Your organizations → Select your organization → Settings → Developer Settings → GitHub Apps → New
GitHub App**

### Step 2 — Fill in Basic Information

![Create GitHub App - Basic Info form](/learn/assets/wme-create-github-app-basic-info-form.png)

| Field               | Value                                                               |
|---------------------|---------------------------------------------------------------------|
| **GitHub App name** | Choose a unique name (e.g., `WaveMaker-Studio-App`)                 |
| **Description**     | *(Optional)* A short description shown to users during installation |
| **Homepage URL**    | Your WME Studio base URL (e.g., `https://<your-wme-domain>`)        |

### Step 3 — Configure Callback URLs

Callback URLs are where GitHub redirects users after they authorize your app via OAuth. WME requires **two** callback
URLs.

![Callback URL configuration](/learn/assets/wme-callback-urls-.png)

Replace `<your-wme-domain>` with your actual WME Studio domain, then click **Add Callback URL** to add each one:

**Callback URL 1:**

```
https://<your-wme-domain>/edn-services/rest/github-apps/oauth/callback
```

**Callback URL 2:**

```
https://<your-wme-domain>/edn-services/rest/github-apps/oauth/default/callback
```

Make sure **Expire user authorization tokens** is **checked** — this enables refresh tokens for long-lived sessions.

### Step 4 — Configure Post Installation URL

![Post installation Setup URL](/learn/assets/wme-post-installation-url.png)

Under the **Post installation** section, set the **Setup URL** to:

```
https://<your-wme-domain>/edn-services/rest/github-apps/installations/callback
```

### Step 5 — Webhook

![Webhook configuration](/learn/assets/wme-webhooks.png)

**Uncheck the Active checkbox** under the Webhook section — WME does not require GitHub webhooks for the LaunchPad
integration.

### Step 6 — Set Repository Permissions

This is the most important step. Under **Permissions → Repository permissions**, set:

![Repository Permissions](/learn/assets/wme-permissions.png)

| Permission         | Access Level       | Why it's needed                                                                            |
|--------------------|--------------------|--------------------------------------------------------------------------------------------|
| **Contents**       | **Read and write** | Allows WME to read and write source code, commits, branches, releases, and perform merges  |
| **Pull requests**  | **Read and write** | Allows WME to create and manage pull requests, comments, labels, and merges                |
| **Administration** | **Read and write** | Allows WME to create and manage repositories, configure settings, teams, and collaborators |

> **Metadata** (Read-only) is automatically granted and mandatory for all GitHub Apps.

### Step 7 — Set Installation Scope

![Installation scope](/learn/assets/wme-installation-scope.png)

At the bottom of the page, choose where this app can be installed:

- **Only on this account** — Restricts the app to your personal account or organization only. Suitable for
  private/internal use.
- **Any account** — Allows any GitHub user or organization to install this app.

### Step 8 — Create the App

Click the green **Create GitHub App** button. GitHub will redirect you to your new app's settings page. The **App ID**
and **Client ID** are shown at the top — **save these values**.

### Step 9 — Generate a Client Secret

![Generate Client Secret](/learn/assets/wme-client-secret.png)

1. On the app settings page, scroll to the **Client secrets** section.
2. Click **Generate a new client secret**.
3. Copy the secret immediately — **GitHub will only show it once**.
4. Store it securely (password manager or secrets vault).

### Step 10 — Generate a Private Key

![Generate Private Key](/learn/assets/wme-private-keys.png)

1. Scroll down to the **Private keys** section.
2. Click **Generate a private key**.
3. A `.pem` file will be automatically downloaded.
4. Keep this file secure — it cannot be retrieved again from GitHub.

---

## Register Credentials in WME LaunchPad

Once you have all four credentials, navigate to:

> **LaunchPad → Identity Providers → GitHub Apps → Register GitHub App**

In the registration form, enter the four credentials you collected — **App ID**, **Client ID**, **Client Secret**, and **Private Key** — and save.

![Register GitHub App in LaunchPad](/learn/assets/wme-register-github-app-launchpad.png)

After saving, the newly registered GitHub App appears in the **GitHub Apps** list in LaunchPad. From here, it becomes available to all existing teams and newly created teams for Code Repository creation.

![GitHub Apps list in LaunchPad](/learn/assets/wme-list-github-apps-launchpad.png)

---

## Using the GitHub App in the Team Portal

After the GitHub App is registered in LaunchPad, it becomes available to **all teams** in the Team Portal. Any team can now create a Code Repository using **GitHub App** as the authentication method — no further setup is required.

The end-user flow (selecting GitHub App, authorizing, installing, choosing repositories, and updating an installation later) is identical to WaveMaker Online. Refer to:

> **[GitHub App Integration in WaveMaker Platform](../../teams/github-app-integration.md)** — covers what a GitHub App is, how to create a Code Repository using GitHub App, and how to update an existing GitHub App installation from the Team Portal.
