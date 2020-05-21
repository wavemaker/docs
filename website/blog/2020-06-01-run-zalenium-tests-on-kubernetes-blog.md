---
title: "Automation Tests in Kubernetes Environment"
author: Tejaswi M, Harish V
keywords: zalenium, kubernetes, frequent-releases
---

## Problem 
We identified a couple of challenges for running automation test cases in our existing setup.

Scenario #1: In WaveMaker, we have multiple environments for WaveMaker Online like QA, Stage and production. Alongside, we have the WME environment setup for our enterprise customers. 
Imagine a new build is being promoted between Stage-Production environments when automation tests are running on the QA environment. How would we handle the requests to run more test automations?

Scenario #2: WaveMaker engineering team uses feature branches during development.
During this feature development QA team starts writing automation tests as developers code the feature. Inorder for the feature branch to be merged into the master branch all existing automation tests must pass. New tests must be added to keep the code coverage number higher than what it is on master. 
All these requirements mean that each feature team should be able to execute a full set of automation tests at their beck and call. 

While development in the feature branch is in progress, what if a build is triggered for the Stage/Production environment.
How will we ensure that the automation test cases are run for the environment to be sure of basic sanity?


<!--truncate-->


In the current setup, we have a local machine where we run automation tests which can scale only one Job at a time. Hence, in the above scenarios where automation needs to be run in multiple environments, a request needs to be raised for adding another machine for handling the automation tasks.
Suppose, even after we do that, there is another request for a third environment, let’s say WME setup, then what do we do?
It would not be a feasible idea to keep adding new machines for new requests. Not only is it cumbersome but also a time consuming process.

So how to fix this shortcoming?


## Solution
The solution is to run our automation tests in a kubernetes environment. 

## How would this help?
Along with the other benefits of a Kubernetes managed environment, it would let us autoscale the instances as per the requirement.


Let's consider we got a scenario where we get a request to run automation tests on dev and the capacity of the machine has reached to certain usage say 40 - 60%  and later sometime while executing the current automation tests on dev we are required to run automation tests on stage the machine capacity limit reaches to peak stage where the execution of the code takes time and in meantime, the API calls related to the tests might take some extra time to execute.
So to overcome this scenario we have moved the automation environment to k8s cluster.

For this we need to understand a few terms in Kubernetes such as job, pod, node, namespace.

Job:- The main function of a job is to create one or more pods and tracks about the success of pods. They ensure that the specified number of pods are completed successfully. When a specified number of a successful run of pods is completed, then the job is considered complete

Pod:- A pod is a collection of containers and its storage inside a node of a Kubernetes cluster. It is possible to create a pod with multiple containers inside it. For example, keeping a database container and data container in the same pod.

Node:- A node is a working machine in the kubernetes cluster which is also known as a minion. They are working units which can be physical, VM, or a cloud instance.

Namespace:- Namespaces help pod-to-pod communication using the same namespace.

Whenever we get a request to trigger an automation build we will invoke a jenkins task which will create a kubernetes spec file containing environment and other details and launch a job in kubernetes.Once the jenkins task is done we will get the test report.

Job execution in kubernetes will be having two commands to execute in job 
Maven command to execute tests
Upload test results to s3.
Once the command execution finishes the Job status is being set as completed.

While executing the maven command we will need to launch browsers(in case of UI Tests). We are using zalenium as a load balancer to perform browser actions. 

Zalenium:- A flexible and scalable container based Selenium Grid. 

Once we launch zalenium in kubernetes by default two browser instances will be launched and those will be available to execute tests and it provides browser instances as and when needed. It terminates the browser instances once the task related to the pod is finished. When we run regression tests we need more browser instances to be launched so the k8s cluster management will take care of memory and resource distribution to the Virtual machines and launch required browser-related pods. Let’s consider if the browser instances required are 10 for smoke tests then it will launch one node and provide all resources to it and when we run regression testing we require a lot of browser instances then kubernetes cluster will automatically scale up to two nodes and provide required resources to each of them. This autoscaling is set in the kubernetes configuration settings page. By default we provide one node to be in running condition and based on the requirement the cluster will scale to any no of nodes.

With this approach, we will be able to run automation tests in multiple environments. Also, we can increase the capacity of machines in k8s if we want to run tests in more browsers(or threads) when needed. 











