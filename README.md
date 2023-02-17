# Welcome to WaveMaker Documentation

To access the WaveMaker documentation, see [WaveMaker Docs](https://wavemaker.com/learn/).

## Contributors Workflow

### Pre requisites 

1.	Node >= 16.x 
2.	Git

### Other things to have
3.	GitHub account. [Sign up](https://github.com/join?), if you do not have an account with GitHub. 
4.	See [Markdown cheat sheet](https://guides.github.com/features/mastering-markdown/) to get familiar with the editor. 
5. See [Mermaid Diagramming Tool](https://mermaid.js.org/intro/)


## Getting Started 
1.	Go to https://github.com/wavemaker/docs

> **Note**  
> If you are already a member of WaveMaker organization, you can skip the Fork step and clone the repo. 

2.	Fork the repo. For more information, see [Fork a repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo). 

3.	Clone the `wavemaker/docs` repo. For more information, see [Cloning a repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

4.	Open Git/GitBash  

    a.	Go to copied location by using the following command:

    ```
    cd <path>/docs/website

    // Example: 
    // cd documents/gitHub/docs/website
    ```
    b.	Install the package to your local machine
    ```
    npm install
    ```
    c.	Run the site using the following command. 
    ```
    npm start
    ```
    The **step-c** launches the website on the local machine automatically with the following URL:

    `http://localhost:3000/learn`

# Editing Content

## Editing an existing docs page

1. Locate the file from the file explorer by navigating to `learn/` to edit the `doc-to-be-edited.md` in your local machine.

> **Note**  
> Ensure the filename is specified against the line `id` (see below example). This information is used to map in sidebar.json.

2. Open the `doc-to-be-edited.md` in any markdown editor. For example, [Visual Studio Code](https://code.visualstudio.com/download). 


```markdown
---
id: "doc-to-be-edited"
title: "Edit this Document"
sidebar_label: "Editing"
---

Edit me...
```

For more information on how to edit docs, click [here](https://docusaurus.io/docs/en/navigation)

# Adding Content

## Adding a new docs page to an existing sidebar

- Create the doc as a new markdown file in `/learn`, example `learn/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

## Adding to Sidebar (TOC)

- Refer to that doc's ID in an existing sidebar in `website/sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": 
  {
    "Getting started": 
    [
        "documentation-reference", 
        "newly-created-doc" // new doc is mapped here  
        {
          "type": "subcategory",
          "label": "App Design",
          "ids": 
            [ 
                "app-development/ui-design/designing-app",            
                "app-development/ui-design/page-creation",            
            ]
        } 
       ...                      
    ]
    ...
  }
}
```

## Adding a Blog

Go to the `blog` directory to add `team blog` feed. 

Create a file within the blog directory with a formatted name of `YYYY-MM-DD-my-blog-post-title.md`. The post date is extracted from the file name.

For example, at `website/blog/2019-11-01-developers-team-blog`: 

```markdown
---
title: "Welcome to the WaveMaker Developers Blog"
author: Samantha Sam
authorURL: http://twitter.com/sam**m
authorFBID: 1212***24
authorTwitter: Sama****am
---

Summary of blog in less than 100 words..

<!--truncate-->

Blog Content..

```
The `truncate` tag in the above content enables to show the blogs in the list view with the summary. Please refer to the existing blogs to check the usage.

## Adding Environment Variables

Do not directly add secrets like passwords, API keys to the sourcecode. Instead add entries in the .env file in the website directory. The values to the keys are picked up from Amplify console per environment/branch. There is a sample .env.sample file with the list of environment variables that are currently in use. Copy all the keys from the .env.sample file to the newly created .env file and populate the keys with required values for local environment testing.

Check the project [dotenv](https://github.com/motdotla/dotenv) for more details

## Editing Release Notes

Add/update the following documents on releasing a new version.

1. Add a new document in the `learn/wavemaker-release-notes` directory with version name. For example, `v10.2.2`. 
2. Edit the release table in the `wavemaker-release-notes` file in the `/learn` directory.  
3. Update the `sidebar.json` file with the new version release notes.
4. Remove the `current` keyword from the previous release notes by changing the `sidebar_label` and make the new document as current. 


## License
[Apache 2.0 License](License)





