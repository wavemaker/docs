---
title: "Deployment to Heroku"
id: "deployment-to-heroku"
---

**[Heroku](https://www.heroku.com/)** is a platform as a service (PaaS) that enables developers to build, run, and manage applications entirely in the cloud. Developers can setup a Continuous Integration pipeline for a wide range of technologies.

This post demonstrates how you can deploy a WaveMaker app to Heroku. You can also setup auto deploy from an associated GitHub account.

The process can be divided into following three steps:

1. [Configuring WaveMaker App for Heroku](#configure-app) - which includes
    - configuring Heroku's webapp-runner plugin
    - adding Heroku's Procfile
    - setting app in external repo
2. [Creating and Configuring Heroku App](#create-heroku-app) including
    - creating Heroku app
    - connecting it to the external repo
3. [Deploy and Run the App](#deploy-app)

**Pre-requisites**

- A WaveMaker App. [See here for a jump start on WaveMaker App Building process](/learn/jump-start/jump-start-app-essentials/).

**App Configuration Setup for Heroku**

1. Open the WavaMaker App you want to deploy to Heroku.
2. _Configure Heroku’s webapp-runner plugin_ - Open _pom.xml_ and add the following (as mentioned in the section “Configure Maven to download Webapp Runner” of  this [article](https://devcenter.heroku.com/articles/java-webapp-runner).).
    
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
    
    [![heroku_pom](/learn/assets/heroku_pom.png)](/learn/assets/heroku_pom.png)
3. Add a Heroku’s _Procfile_ to WaveMaker App
    1. Using the instructions at [Deploy your application to Heroku→ Create Procfile](https://devcenter.heroku.com/articles/java-webapp-runner#create-a-procfile) create the Procfile as a local file on your machine
    2. Upload it to the root of WaveMaker project using the **Import -> Resource** menu [![heroku_import_resource1](/learn/assets/heroku_import_resource1.png)](/learn/assets/heroku_import_resource1.png) [![heroku_import_resource2](/learn/assets/heroku_import_resource2.png)](/learn/assets/heroku_import_resource2.png)
4. Set up app in External Github Repository
    1. Push your application to External Repository [![heroku_git_repo1](/learn/assets/heroku_git_repo1.png)](/learn/assets/heroku_git_repo1.png)
    2. Push changes if prompted [![heroku_git_repo2](/learn/assets/heroku_git_repo2.png)](/learn/assets/heroku_git_repo2.png)
    3. Provide your GitHub credentials and a new repository name. [![heroku_git_repo3](/learn/assets/heroku_git_repo3.png)](/learn/assets/heroku_git_repo3.png)
    4. The repository will be created and code will be pushed to your GitHub account. [![heroku_git_repo4](/learn/assets/heroku_git_repo4.png)](/learn/assets/heroku_git_repo4.png)

## Create and Configure Heroku application

1. Create a new application in Heroku. [![heroku_create_app](/learn/assets/heroku_create_app.png)](/learn/assets/heroku_create_app.png)
2. Connect Heroku application to GitHub. [![heroku_connect_app1](/learn/assets/heroku_connect_app1.png)](/learn/assets/heroku_connect_app1.png)
3. Provide GitHub project name and connect. [![heroku_connect_app2](/learn/assets/heroku_connect_app2.png)](/learn/assets/heroku_connect_app2.png)
4. From Settings Add buildpack [![heroku_buildpack](/learn/assets/heroku_buildpack.png)](/learn/assets/heroku_buildpack.png)
5. Select Java and Save changes [![heroku_buildpack2](/learn/assets/heroku_buildpack2.png)](/learn/assets/heroku_buildpack2.png)

## Deploy and run the application

1. From the Deploy tab, Deploy Manually. [![heroku_deploy1](/learn/assets/heroku_deploy1.png)](/learn/assets/heroku_deploy1.png)
2. Open Heroku application after the deployment is done. [![heroku_deploy2](/learn/assets/heroku_deploy2.png)](/learn/assets/heroku_deploy2.png)
3. Your app is now running in Heroku
4. Finally, enable auto deployment. Any push to GitHub repository will automatically deploy your application now. [![heroku_deploy3](/learn/assets/heroku_deploy3.png)](/learn/assets/heroku_deploy3.png)

Deployment to Heroku

- [1. Configure WaveMaker App for Heroku](#configure-app)
- [2. Create & Configure Heroku App](#create-heroku-app)
- [3. Deploy and Run](#deploy-app)
