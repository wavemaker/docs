---
title: "Announcing WaveMaker 11.6 release - What's new"
author: Vibhu Singhal
---

As part of our endeavor to get better and use the best of the tech stack available, we have upgraded the underlying framework of WaveMaker Studio from AngularJS to latest version of Angular. During this rewrite we also improved the overall user experience of the studio user.

:::note
The new studio will be rolled out in a phased manner, see the [bottom](#rollout-plan) of this page to know more.
:::

<!-- truncate -->

## Performance improvements
With the underlying framework upgrade, we have used some of the best features available to keep the studio code footprint lighter at all times. With these implementations, you will see the project loading faster when opened in the new studio.

Some of the actions taken in this direction are:
### Lazy loading modules
By modularising all the major workspaces and using the lazy loading concept in angular, we have decreased the bundle size and kept it to the minimum that is required to initially load the studio.
### Project updates
The project updates are now pushed in the background and do not come in the way of the project load. This decreases the time taken for a developer to resume work in their branch. No more will you be asked to update all the prefabs used in the project every time you load your project. You can simply resume the work you left previously without any distractions.

## What's new?
Along with the tech upgrade and the performance improvements, there are a few visible changes to the studio as well. Some of these are:

### Introducing ProjectsHub
The projects listing page is completely redesigned and is now called ProjectsHub. Dogfooding our own software, the new ProjectsHub is built using WaveMaker platform itself.
### Refreshing overall studio look
The overall look and feel of the studio has changed. We have reduced clutter in the toolbars and improved the way icons, text look.
### A better version controlling
When you work in a team, It's important to stay updated with the latest work being done by other team members. A powerful code diff viewer becomes crucial for such an environment. Based on the developer feedback, we've revamped the code diff editor in the studio.
- the code diff editor now shows only the changes made in a file, so you can focus on the same and not scroll through a big file to view what changes are. The unchanged lines of code are by default collapsed, which can still be expanded and viewed.
- the line diff now clearly highlights the diff literal by literal, so it's easier to view the actual change.
- you can navigate through the changes with the next and previous diff buttons

![diff_editor](/learn/assets/wm-11.6/diff_editor.png)

### Powerful 3-way merge screen
Power packed with all the diff features mentioned above, the 3-way merge screen used in case of merge conflicts boosts the developer productivity as developers can focus on just the conflict areas and resolve them quicker.

### New settings workspace
  Multiple project level configuration options in the studio have been collated into one place simply called as Settings. All project level settings that you would generally configure in a project and visit not too frequently are placed here. These configuration options will vary based on the project type. For example:
- General settings
- Profile configuration
- Security
- Artifacts
- Prefab configuration (Prefab project)

With this change, the studio header becomes lighter and less complicated. The features that are more frequently used in the day to day developer activities are all still placed in the studio header.

![settings](/learn/assets/wm-11.6/settings_security.png)

### New project updates section
All the updates to a project are now pushed in the background and collated in the project updates section present in the studio header. Few examples of updates to a project are:
- Changes pushed to the project by other developers.
- Availability of new version of artifacts used in the project (prefab, theme, etc)

![project_updates](/learn/assets/wm-11.6/project_updates.png)

### Updated APIs workspace
All the APIs imported in a project are now placed at a single place, the APIs workspace. These include the individual REST API endpoints as well as the OpenAPI (swagger) bundle imported in the project.

### A new (yet familiar) playground for APIs
The APIs workspace now uses the standard OpenAPI UI plugin as the playground to view and test all the APIs in your project in WaveMaker studio. Since this plugin provides exactly the same UI and experience as you would see on the official swagger editor portal, it would feel much more familiar while testing the APIs in WaveMaker studio as well.

![project_updates](/learn/assets/wm-11.6/api_ws.png)

### New code editor
We are now using monaco as the code editor in the studio, the editor that powers VS Code. The new code editor comes with a new set of rich functionalities provided by monaco, such as better intellisense, code lens feature that makes it easier to navigate through a large file, etc

## Rollout plan
To facilitate a smooth transition, we will be rolling out access to the new version of Studio in a phased manner. This approach allows us to closely monitor performance, address any unforeseen issues, and provide necessary support to users as they familiarize themselves with the updated interface and features.

Here is an overview of the phased rollout plan:

#### Phase 1: Internal rollout 
All WaveMaker email accounts will get access to the new ProjectsHub and Studio.
This phase will help us identify any potential issues and gather valuable insights for optimization.

#### Phase 2: Selected WMOnline customers
Access to the new version will be extended to selected WMOnline customers.
These are the customers who provide valuable feedback on the platform stability on a regular basis.

#### Phase 3: All teams on WMO + WME
All of the online and Enterprise customers will be moved to the new version of the platform.
