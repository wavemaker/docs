---
title: "Deployment to Heroku"
id: "deployment-to-heroku"
---

is a platform as a service (PaaS) that enables developers to build, run, and manage applications entirely in the cloud. Developers can setup a Continuous Integration pipeline for a wide range of technologies.

post demonstrates how you can deploy a WaveMaker app to Heroku. You can also setup auto deploy from an associated GitHub account.

process can be divided into following three steps:

1. [WaveMaker App for Heroku](#configure-app) - which includes
    - Heroku's webapp-runner plugin
    - Heroku's Procfile
    - app in external repo
2. [and Configuring Heroku App](#create-heroku-app) including
    - Heroku app
    - it to the external repo
3. [and Run the App](#deploy-app)

**\-requisites**

- WaveMaker App. [here for a jump start on WaveMaker App Building process](/learn/jump-start/jump-start-app-essentials/)

**Configuration Setup for Heroku**

1. the WavaMaker App you want to deploy to Heroku.
2. _Heroku’s webapp-runner plugin_ -  and add the following (as mentioned in the section “Configure Maven to download Webapp Runner” of  this [](https://devcenter.heroku.com/articles/java-webapp-runner)).
    
           <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-dependency-plugin</artifactId>
                <version>2.3</version>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals><goal>copy</goal></goals>
                        <configuration>
                            <artifactItems>
                                <artifactItem>
                                    <groupId>com.github.jsimone</groupId>
                                    <artifactId>webapp-runner</artifactId>
                                    <version>8.0.30.2</version>
                                  <destFileName>webapp-runner.jar</destFileName>
                                </artifactItem>
                            </artifactItems>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
    
    [![heroku_pom](../assets/heroku_pom.png)](../assets/heroku_pom.png)
3. a Heroku’s to WaveMaker App
    1. the instructions at [your application to Heroku→ Create Procfile](https://devcenter.heroku.com/articles/java-webapp-runner#create-a-procfile) the Procfile as a local file on your machine
    2. it to the root of WaveMaker project using the **\-> Resource** menu [![heroku_import_resource1](../assets/heroku_import_resource1.png)](../assets/heroku_import_resource1.png) [![heroku_import_resource2](../assets/heroku_import_resource2.png)](../assets/heroku_import_resource2.png)
4. up app in External Github Repository
    1. your application to External Repository [![heroku_git_repo1](../assets/heroku_git_repo1.png)](../assets/heroku_git_repo1.png)
    2. changes if prompted [![heroku_git_repo2](../assets/heroku_git_repo2.png)](../assets/heroku_git_repo2.png)
    3. your GitHub credentials and a new repository name. [![heroku_git_repo3](../assets/heroku_git_repo3.png)](../assets/heroku_git_repo3.png)
    4. repository will be created and code will be pushed to your GitHub account. [![heroku_git_repo4](../assets/heroku_git_repo4.png)](../assets/heroku_git_repo4.png)

## and Configure Heroku application

1. a new application in Heroku. [![heroku_create_app](../assets/heroku_create_app.png)](../assets/heroku_create_app.png)
2. Heroku application to GitHub. [![heroku_connect_app1](../assets/heroku_connect_app1.png)](../assets/heroku_connect_app1.png)
3. GitHub project name and connect. [![heroku_connect_app2](../assets/heroku_connect_app2.png)](../assets/heroku_connect_app2.png)
4. Settings Add buildpack [![heroku_buildpack](../assets/heroku_buildpack.png)](../assets/heroku_buildpack.png)
5. Java and Save changes [![heroku_buildpack2](../assets/heroku_buildpack2.png)](../assets/heroku_buildpack2.png)

## and run the application

1. the Deploy tab, Deploy Manually. [![heroku_deploy1](../assets/heroku_deploy1.png)](../assets/heroku_deploy1.png)
2. Heroku application after the deployment is done. [![heroku_deploy2](../assets/heroku_deploy2.png)](../assets/heroku_deploy2.png)
3. app is now running in Heroku
4. , enable auto deployment. Any push to GitHub repository will automatically deploy your application now. [![heroku_deploy3](../assets/heroku_deploy3.png)](../assets/heroku_deploy3.png)

to Heroku

- [1. Configure WaveMaker App for Heroku](#configure-app)
- [2. Create & Configure Heroku App](#create-heroku-app)
- [3. Deploy and Run](#deploy-app)
