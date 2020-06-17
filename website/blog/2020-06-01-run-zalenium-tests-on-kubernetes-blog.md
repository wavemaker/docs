---
title: "Automation Tests in Kubernetes Environment"
author: Tejaswi M, Harish V
keywords: zalenium, selenium-grid, kubernetes, frequent-releases
---

WaveMaker is a RAD platform containing an application development studio and the product itself is integrated with many API’s. As part of maintaining product quality WaveMaker QA Team works on both UI and API automation.  
        
        * UI Tests based on ------- Selenium
        * API Tests based on ----- RestTemplate 

For ensuring product quality, Team will execute both API and UI test cases on every environment.

WaveMaker Engineering team builds multiple environments such as Development, Staging, Production.It builds WME environment setup for our enterprise customers. 
Alongside, it uses feature branches during development. Inorder for the feature branch to be merged into the master branch all existing automation tests must pass.
All these requirements mean that each feature team should be able to execute a full set of automation tests at their beck and call. 

Imagine if a new build is being promoted between Stage-Production environments when automation tests are running on the Development environment or 
what if a build request is raised to trigger tests in the feature branch at the same time while tests are running in some environment?
How would the WaveMaker team handle the requests to run test automations in different environments? 

Previously, the WaveMaker team used a server machine where automation tests can scale only one Job at a time. Alongside, Team observed browser crashing issues when more tests are running on the same machine.
Due to this, when automation needs to run in multiple environments, a request needs to be raised for adding another machine for handling the automation tasks. 
Adding new machines as requests increase is going to be a time-consuming process.

<!--truncate-->

## Solution

The WaveMaker Team explored Kubernetes Jobs for test execution and it is a completely automated process.

First lets understand often used terms in the Kubernetes world.

**Cluster:** A cluster is a set of node machines for running containerized applications.

**Node:** A Node is a worker machine in Kubernetes and may be either a virtual or a physical machine, depending on the cluster. Each Node is managed by the Master. 

**Pod:** A Kubernetes pod is a group of containers that are deployed together on the same host. 

**Namespace:** Namespaces help pod-to-pod communication using the same namespace

**Job:** The main function of a job is to create one or more pods and track the success of pods.

## Test Environment Provisioning

WaveMaker has created a kubernetes cluster with default two nodes for the test execution environment. In the kubernetes cluster, the image source of the test case execution is being pushed to the kubernetes registry once a commit has been merged into master.
Before the image is being pushed to the registry pre-compilation task is being executed in the Jenkins task to avoid pushing the image with compilation errors.

The team creates two namespaces for running API and UI Tests. For every request to run test automation, a Jenkins task will be started that creates a K8S spec file and launches a job.

Once K8S Job has started, a Node will be created with a pod to execute commands in the K8S spec file given below

    * Maven command to execute tests
    * Upload test results to s3.

On completion of above commands, respective Job status will be changed to complete. 

Based on the number of requests for test execution a new Job will be launched. If there is a need to create new pods then kubernetes engine checks for the resource availability in the running node. If node is fully utilized then the kubernetes engine will launch a new node and launch the pod from it. After the pod execution is done kubernetes engine will perform a health check and close the node if no resources are being utilized.

## Remote Driver and setup challenges

As UI Tests run on a browser, Team observed browser crashing issues when more tests are running on the same machine. To avoid this problem, test execution has to be distributed onto multiple machines. 
If tests need to run in multiple machines, each machine needs to have a browser node which has to be registered to a remote driver in the master. This involves lots of manual configuration.

Instead of doing the manual configuration, the WaveMaker QA team explored a tool called Zalenium which was built on a remote-driver where the dynamic nodes are being launched based on the requests being sent to a remote-driver. After using Zalenium, Team does not observe any more memory or performance issues on the machines when a huge number of requests are made for browser instances.

With this approach, we will be able to run automation tests in multiple environments. 

Job|K8s Setup Execution Time Decrement 
--------|----------------------------
Sanity Tests Execution|55%
Regression Tests Execution|60%
Sanity and Regression as parallel Jobs|60%









