---
title: "What's New in wm-reactnative-cli 1.9.17: Faster Sync, Access Tokens, Upgrade Prompts and Usage Logs"
author: "Raaj Vamsy Rayavarapu"
---

The latest release of [wm-reactnative-cli](https://www.npmjs.com/package/@wavemaker/wm-reactnative-cli) makes local React Native development with WaveMaker Studio faster and simpler. Your Studio changes now reach your app in about a second, you sign in with a per-project access token, the CLI tells you when you need to upgrade, and it sends a usage log that helps us fix problems faster.

<!-- truncate -->

Install or upgrade with:

```bash
npm install -g @wavemaker/wm-reactnative-cli@1.9.17
```

## Faster Sync

Before, a change saved in Studio could take 10 to 15 seconds to show up in `wm-reactnative sync`, because the CLI waited for Studio's preview build before pulling.

Now the CLI asks Studio for new changes every second. It pulls a change as soon as you save, so it reaches your app in about a second. When nothing has changed, the CLI does no other work: it skips the pull, the code generation and the log output.

Studio versions older than 11.4 (except WaveMaker AI platforms) are checked every 5 seconds instead.

## Access Tokens for Sync and Preview

`sync` and every `run` preview command (`expo`, `web-preview`, `android`, `ios`) now sign in with a project access token:

1. In Studio, open the project and go to **Settings → Access Tokens**.
2. Generate a token with the **Sync Plugin** scope.
3. Paste it when the CLI asks, or add it to the preview URL after `#`:

```bash
wm-reactnative sync "<preview_url>#<token>"
```

The CLI checks that the token is valid and belongs to the project. If it's missing, expired, revoked or for another project, the CLI tells you why and asks for a new one.

After a token you typed works, the CLI asks whether to save it. Saved tokens are kept per Studio host and project in `auth.json` inside the CLI folder, which only your user can read. A saved token that Studio later rejects is removed, and `--clean` doesn't remove saved tokens.

## A Prompt to Upgrade to the Required Version

When a newer CLI version is required, for example to match a platform release, the CLI tells you before running your command:

```
! You're on CLI v1.9.12. Release v1.9.17 is required:
? Upgrade to 1.9.17 and run your command again? (Y/n)
```

- If you answer **Yes**, the CLI installs the required version and runs your command again on it.
- If you answer **No**, the CLI shows the install command and stops.
- To run on the version you have anyway, add `--ignoreUpgrade`.
- In CI and other non-interactive shells, the CLI prints the upgrade command and exits instead of waiting for an answer.

The check takes at most a few seconds. If the CLI can't reach npm, it skips the check and runs your command.

## Usage Logs

When a command ends, including when it fails or you stop it with Ctrl+C, the CLI sends its log to WaveMaker. Each log includes:

- the command, its result and how long it took
- the platform host and project name
- the codegen, runtime, Expo and React Native versions
- the versions of Node, npm, yarn, git, Java, Gradle and CocoaPods installed on your machine

This tells us which environment and versions a failure happened in, so we can fix problems without asking you for logs.

Before sending, the CLI removes home folder paths (which include your username), access tokens and cookies. The log is sent in the background after the command finishes, so it never slows your command down.

To turn usage logs off:

```bash
export WM_CLI_TELEMETRY=off
```

## Summary

| Change | What you get |
|---|---|
| Faster sync | Studio changes reach your app in about a second |
| Access tokens | Per-project tokens from **Settings → Access Tokens**, with optional saving |
| Upgrade prompt | One answer to upgrade to the required version and rerun your command |
| Usage logs | Faster fixes, with private data removed and an opt-out |

Upgrade to 1.9.17 to get all of these changes.
