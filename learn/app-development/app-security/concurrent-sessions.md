---
title: "Concurrent Sessions"
id: ""
---
---
At WaveMaker we are continuously bringing ways to make application secure. Taking advantage of usage of Spring framework in WaveMaker generated application code,    
Spring Security is used to prevent app users from concurrently authenticating to the same application more than a specified number of times. 

## How it works
WaveMaker developer can easily enable maximum concurrent sessions for Spring framework to impose this setting 
and restrict their application users. A policy on what happens when max concurrent sessions has reached can be chosen. One of the policies is to invalidate least recently used session.

Max Concurrent sessions can be any positive number or -1 (For unlimited concurrent sessions) but not a zero.

## Configuring Concurrent Sessions in WaveMaker Apps

Concurrent Sessions feature will be disabled by default and set to -1 for unlimited concurrent sessions.
The number of concurrent sessions can be configured at Security -> Authentication -> Login Configuration -> Max Concurrent Sessions per User

[![concurrent-sessions](/learn/assets/concurrent-sessions.png)](/learn/assets/concurrent-sessions.png)

