---
title: "Concurrent Sessions"
id: ""
---
---
Spring Security is able to prevent a user from concurrently authenticating to the same application more than a specified number of times. By configuring max concurrent sessions

## How it works
If user enables concurrent session and configures max-sessions then internally spring before creating a new session checks this configured max-sessions value 
and restricts user or invalidates least recently used session if exceeds max-sessions.

Max Concurrent sessions can be any positive number or -1 (For unlimited concurrent sessions) but not zero.

## Configuring Concurrent Sessions in WaveMaker Apps

Concurrent Sessions feature will be enabled by default and set to -1 for unlimited concurrent sessions if the security is enabled in the WM application.
The number of concurrent sessions can be configured at Security -> Authentication -> Login Configuration -> Max Concurrent Sessions per User

[![concurrent-sessions](/learn/assets/concurrent-sessions.png)](/learn/assets/concurrent-sessions.png)

