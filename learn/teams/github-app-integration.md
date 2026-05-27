---
title: "GitHub App Integration"
id: "github-app-integration"
sidebar_label: "GitHub App Integration"
---
---

**Author: Chakravarthy Batna**

The WaveMaker Platform supports **GitHub App-based authentication** for connecting your projects to GitHub repositories. This document explains what a GitHub App is, how the integration works in the WaveMaker Platform, and how to use it from the Team Portal.

---

## What is a GitHub App?

A **GitHub App** is an application registered on GitHub and installed into a user account or an organization to interact with GitHub repositories on their behalf. It acts as an independent identity on GitHub — separate from any individual user — and is granted scoped permissions on specific repositories chosen at installation time.

GitHub Apps use short-lived installation tokens that are issued and renewed automatically by GitHub. The application that consumes the GitHub App (in this case, the WaveMaker Platform) uses these tokens to perform repository operations such as cloning code, pushing commits, creating branches, and opening pull requests.

### How it fits in the WaveMaker Platform

Earlier, when a user wanted to create or connect a Code Repository in the Team Portal using GitHub, the only available option was a **Personal Access Token (PAT)**. With a PAT, the user had to:

- Generate a long token (`ghp_...`) from GitHub's **Developer Settings**.
- Provide the token along with their GitHub username while creating the Code Repository.
- Regenerate and reconfigure the token periodically when it expired.

The Team Portal now also supports a **GitHub App** as an authentication method while creating a Code Repository, giving users a credential-free alternative to PAT. The WaveMaker Platform ships with a pre-configured, WaveMaker-managed GitHub App, so users only need to install and authorize it against their own GitHub account or organization.

### Key Features of GitHub Apps

- **Short-lived, auto-rotated credentials.** Installation tokens are issued and renewed by GitHub automatically, removing the need to manually generate or refresh access credentials.
- **Fine-grained repository access.** During installation, the owner can grant access to *all repositories* or only a *selected set*, ensuring the integration only sees what it needs.
- **Granular permissions.** Each GitHub App declares the exact set of repository permissions it requires (e.g., Contents, Pull requests, Administration). These are displayed clearly during installation.
- **Independent of any individual user.** A GitHub App is installed on a user or organization account rather than tied to a specific user's credentials, so the integration continues to work even if team members change.
- **Designed for organization-level workflows.** GitHub Apps fit naturally into team and enterprise setups, where multiple repositories and members need to share the same integration.
- **Clear audit trail.** Actions performed via a GitHub App are attributed to the app itself, making it easy to distinguish platform actions from user actions in the repository history.
- **Simplified user experience.** Users connect their repositories through a guided installation flow on GitHub — no tokens to generate, copy, or store.

---

## How to Integrate GitHub App in Team Portal

In the WaveMaker Platform, users connect to GitHub by creating a **Code Repository** (a VCS account) under:

> **Team Portal → Code Repository**

While creating a Code Repository, the user chooses an authentication method — either **Personal Access Token (PAT)** or **GitHub App** — and can mark it as the **default**. From then on, whenever the user creates a repository, pushes, pulls, or performs any other VCS operation, the platform uses this Code Repository to talk to GitHub.

The WaveMaker Platform ships with a **pre-configured, WaveMaker-managed GitHub App**, so users do **not** need to create or register their own GitHub App. When a user wants to connect to GitHub via a GitHub App, they simply select **GitHub App** as the authentication method while creating the Code Repository, authorize the WaveMaker GitHub App, and pick the repositories it can access.

### Step 1 — Choose GitHub as the VCS Provider

Navigate to:

> **Team Portal → Code Repository → Add Code Repository**

In the **Choose Provider** step, select **GitHub** as the VCS provider.

### Step 2 — Configure Authentication

- Select **Authentication Method** as **GitHub App**.
- Choose the required **Authentication Mode**:
    - **Team Credentials** — shared authorization used for team-wide repository operations.
    - **Developer Credentials** — repository operations are performed using each developer's own GitHub identity.  
note :
- select wmo-code-connect github app
- Click **Install GitHub App**.

![Choose authentication method](/learn/assets/wmo-choose-authentication-method.png)

### Step 3 — Authorize the GitHub App

You will be redirected to GitHub's authorization page, which displays the permissions requested by the WaveMaker GitHub App. Click **Authorize** to continue.

![Authorize the GitHub App](/learn/assets/wmo-authorize-github-app.png)

### Step 4 — Install the GitHub App

After authorization, GitHub redirects you to the GitHub App installation page. Here you can:

- Select the personal GitHub account or organization where the app should be installed.
- Choose whether the app should access **All repositories** or **Only selected repositories**.

> **Note:** If you choose **Only selected repositories**, the WaveMaker Platform will be able to access **only those repositories** — it cannot see or operate on any other repository in your account or organization. To grant access to more repositories later, you must update the GitHub App installation settings on GitHub.

Once the installation is complete, the popup closes automatically and you are returned to the platform.

![GitHub App installation page](/learn/assets/wmo-installation-page.png)

![Choosing repositories](/learn/assets/wmo-choosing-repos.png)

### Step 5 — Select Repository Location

The platform automatically fetches available GitHub App installations. Select the GitHub **account** or **organization** that was previously authorized and installed.

![Select organization](/learn/assets/wmo-select-organization.png)

Once the installation (organization or account) is selected, continue with the remaining steps in the **Add Code Repository** wizard and **save** the Code Repository. The selected installation will be used for repository creation and all subsequent VCS operations.

---

## Updating a GitHub App Installation

If you have unintentionally **uninstalled** the WaveMaker GitHub App from the GitHub user or organization account that was configured in a Code Repository (VCS account), the platform will no longer be able to access those repositories. You can re-install the app and update the existing Code Repository without creating a new one.

To update the installation:

1. Navigate to **Team Portal → Code Repository**.
2. Locate the Code Repository whose installation you want to update.
3. Click the **Credentials** button on that Code Repository.
4. Click **Update GitHub App Installation**.
5. You will be redirected to GitHub to re-install the WaveMaker GitHub App. Choose the same account/organization and repositories as before.
6. Once installation is complete, the Code Repository will be reconnected automatically.

![Update GitHub App Installation](/learn/assets/wmo-update-github-app-installation.png)
