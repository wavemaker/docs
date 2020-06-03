---
title: "Automation Tests in Kubernetes Environment"
author: Tejaswi M, Harish V
keywords: zalenium, selenium-grid, kubernetes, frequent-releases
---

WaveMaker Engineering team builds multiple environments such as Development, Staging, Production. Alongside, it also builds WME environment setup for our enterprise customers. 

Imagine if a new build is being promoted between Stage-Production environments when automation tests are running on the QA environment. How would the WaveMaker team handle the requests to run test automations in different environments?

WaveMaker Engineering team uses feature branches during development.
During this feature development QA team starts writing automation tests as developers code the feature. Inorder for the feature branch to be merged into the master branch all existing automation tests must pass. New tests must be added to keep the code coverage number higher than what it is on master. 
All these requirements mean that each feature team should be able to execute a full set of automation tests at their beck and call. 

While development in the feature branch is in progress, what if a build is triggered for the Stage/Production environment.
How will we ensure that the automation test cases are run for the environment to be sure of basic sanity?

In the current setup, the WaveMaker team uses a local machine where automation tests can scale only one Job at a time. Alongside, Team observed browser crashing issues when more tests are running on the same machine. Hence, in the above scenarios where automation needs to be run in multiple environments, a request needs to be raised for adding another machine for handling the automation tasks.
Suppose, even after we do that, there is another request for a third environment, then what do we do?
Adding new local machines as requests increase is going to be a time-consuming process.

<!--truncate-->

## Solution
The WaveMaker Team explored Kubernetes Jobs for test execution and it is a completely automated process.

First lets understand often used terms in the Kubernetes world.

**Cluster:** A cluster is a set of node machines for running containerized applications.

**Node:** A Node is a worker machine in Kubernetes and may be either a virtual or a physical machine, depending on the cluster. Each Node is managed by the Master. 

**Pod:** A Kubernetes pod is a group of containers that are deployed together on the same host. 

**Namespace:** Namespaces help pod-to-pod communication using the same namespace

**Job:** The main function of a job is to create one or more pods and track the success of pods.

For every request to run test automation, a K8S spec file is created to launch a job. This is done via a Jenkins task.

Once K8S Job has started, a Node will be created with a pod to execute commands in the K8S spec file given below
Maven command to execute tests
Upload test results to s3.

On completion of above commands, respective Job status will be changed to complete. 

As UI Tests need a browser for test execution, a remote driver is launched in the k8s setup. To launch remote driver Zalenium is used which is a flexible and scalable container based Selenium Grid with video recording & dashboard.  

Based on the number of requests for test execution a new Job will be launched, then the Kubernetes cluster will automatically scale up to two nodes and provide required resources to each of them.
With this approach, we will be able to run automation tests in multiple environments. 

Job|Existing Setup|K8s Setup 
--------|--------------|---------
Sanity Tests Execution time(50 Tests)|45 minutes|20 minutes
Regression Tests Execution time(500 Tests)|7 hours|3 hours
Sanity and Regression in parallel|Not possible|3 hours 









