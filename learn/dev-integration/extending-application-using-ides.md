---
title: "Extending the Application using IDEs"
id: "extending-application-using-ides"
---

Sometimes you might want to extend and maintain your code. You might want to work on a local machine text editor, make changes and import these changes back into your application. Or you might also want to work on an IDE of your choice and comfort and take advantage of its Java code editing, testing and debugging features. In WaveMaker all this can be achieved easily as a modular client-side code (AngularJS, CSS, and HTML) incorporating industry best practices is generated. In this section, we list the steps for the same.

**NOTE**: Alternatively, you can use the WorkSpace Sync Plugin to ease this process. [See here for details](/learn/how-tos/synchronizing-wavemaker-apps-ides/).

[![](/learn/assets/export_project1.png)](/learn/assets/export_project1.png)

 

[![](/learn/assets/export_project3.png)](/learn/assets/export_project3.png)

# Steps in working with IDEs

1. **Export** your project as a _ZIP_ file.
2. After exporting the project Unzip the downloaded zip file to a folder.
3. Extraction of the files shows you a _pom.xml_ file indicating it is [Maven complaint](http://maven.apache.org/index.html). [![](/learn/assets/Maven_Export.png)](/learn/assets/Maven_Export.png)
4. Open the command shell in extracted file system and install the project using Maven Clean Install, by running the command: mvn clean install [![](/learn/assets/maven_build.png)](/learn/assets/maven_build.png) **NOTE**: You need to have Maven and Java installed in the system. This downloads all external dependencies needed by the project and creates a WAR file. [![](/learn/assets/Maven_Deploy.png)](/learn/assets/Maven_Deploy.png) This war file can be deployed to any web server like Apache Tomcat. [![](/learn/assets/Maven_tomcat_deploy.png)](/learn/assets/Maven_tomcat_deploy.png)
5. After the successful build, open the IDE which you need to import ex: IntelliJ and click on import project and set as Maven. Ref:- [https://www.jetbrains.com/idea/help/importing-project-from-maven-model.html](https://www.jetbrains.com/idea/help/importing-project-from-maven-model.html) Ref:- [http://www.eclipse.org/webtools/jst/components/j2ee/scenarios/MavenEclipseIntegration.html](http://www.eclipse.org/webtools/jst/components/j2ee/scenarios/MavenEclipseIntegration.html)
6. Set Run or Debug configurations as follows: Name: Maven Tomcat Working directory as project directory **Command Line as:** clean package org.apache.tomcat.maven:tomcat7-maven-plugin:2.2:run -Dmaven.tomcat.port=8181 [![](/learn/assets/IDEDebugging.png)](/learn/assets/IDEDebugging.png)
7. Once you run the project in IntelliJ you will get console logs for required maven dependencies and so on. After everything is done you will observe a message as: **\[INFO\] --- tomcat7-maven-plugin:2.2:run (default-cli) @ SampleApp --- \[INFO\] Running war on http://localhost:8181/SampleApp**
8. Now open in browser with URL as http://localhost:8181/ProjectName/services/myJava/sampleJavaOperation
9. To debug any DB/Java service used in the app you need set src folder of DB or Java service which is located in the services section of your project as Mark directory as source root. Similarly, for any service, you need to set src directory as source root and enable debug point and run it. [![](/learn/assets/IDE_debug.png)](/learn/assets/IDE_debug.png)
10. Once you are done with all the changes, run Maven Clean Install which will generate a ZIP file in _target/exports_ folder. [![](/learn/assets/Maven_Export_Target.png)](/learn/assets/Maven_Export_Target.png)
11. This file can be re-imported into Studio using the [**Update Source**](http://[supsystic-show-popup id=104]) option from the project **Developer Utilities** Menu. The changes will be incorporated into your Studio application.

# Integration with Jenkins

Ref for installing Jenkins [https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins) WaveMaker provides two profiles development, production by default. To execute profiles user needs to execute the command as: mvn clean install -Pdevelopment for development configuration and mvn clean install -Pproduction for production configuration. Install Jenkins and create a job and set windows batch command as maven command(mvn clean install -Pdevelopment) [![](/learn/assets/IDE_jenkins.png)](/learn/assets/IDE_jenkins.png)

< Debugging

8\. Developer Integrations

- 8.1 Test Run (Preview) Apps
    - [i. Overview](/learn/dev-integration/developer-tools/)
    - [ii. Preview](/learn/dev-integration/developer-tools/#preview)
    - [iii. Run](/learn/dev-integration/developer-tools/#run)
- 8.2 Import, Export & Update App
    - [i. Overview](/learn/app-development/dev-integration/import-export-update-apps/)
    - [ii. Export](/learn/app-development/dev-integration/import-export-update-apps/#export-project)
    - [iii. Import](/learn/app-development/dev-integration/import-export-update-apps/#import-project)
    - [iv. Update](/learn/app-development/dev-integration/import-export-update-apps/#update-project)
    - [v. Project Recovery](/learn/app-development/dev-integration/import-export-update-apps/#project-recovery)
        - [○ Export](/learn/app-development/dev-integration/import-export-update-apps/#export)
        - [○ Restore](/learn/app-development/dev-integration/import-export-update-apps/#restore-project)
- 8.3 Developer Collaboration
    - [i. Overview](/learn/app-development/dev-integration/developer-collaboration/)
    - [ii. Project Sharing](/learn/app-development/dev-integration/developer-collaboration/#project-sharing)
    - [iii. Code Sharing - VCS](/learn/app-development/dev-integration/developer-collaboration/#vcs)
        - [○ Checkout](/learn/app-development/dev-integration/developer-collaboration/#checkout)
        - [○ Pull Changes](/learn/app-development/dev-integration/developer-collaboration/#pull-changes)
        - [○ Push Changes](/learn/app-development/dev-integration/developer-collaboration/#push-changes)
        - [○ View Changes](/learn/app-development/dev-integration/developer-collaboration/#view-changes)
        - [○ Commit History](/learn/app-development/dev-integration/developer-collaboration/#commit-history)
        - [○ Merge Conflicts](/learn/app-development/dev-integration/developer-collaboration/#merge-changes)
        - [○ Restore Project](/learn/app-development/dev-integration/developer-collaboration/#restore-project)
        - [○ Push to External Repo](/learn/app-development/dev-integration/developer-collaboration/#push-to-external-repo)
- 8.4 Debugging
    - [i. Overview](/learn/app-development/dev-integration/debugging/)
    - [ii. Debugging using Log Files](/learn/app-development/dev-integration/debugging/#logs)
    - [iii. Debugging through JavaScript](/learn/app-development/dev-integration/debugging/#javascript)
- [8.5 App Extensions](#)
    - [i. Overview](#)
    - [ii. Working with IDEs](#steps)
    - [iii. Integrating with Jenkins](#jenkins)
