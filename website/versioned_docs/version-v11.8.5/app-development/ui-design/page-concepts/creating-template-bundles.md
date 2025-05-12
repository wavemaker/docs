---
title: "Creating Template Bundles"
id: "creating-template-bundles"
sidebar_label: "Create Template"
---
---

Template Bundles let you create and use templates across all applications in your enterprise. You can get a UI designer to design the Template Bundle. This document lists the steps in the creation of a Template Bundle.

1. Select **Template Bundles** tab and select the Create option [![](/learn/assets/Create_TB_create.png)](/learn/assets/Create_TB_create.png)
2. Template bundle can be used on the web or mobile platform. **Choose platform** accordingly.
3. Enter the **Name** and **Description** for the Template Bundle
4. The **Main Page** is created which will be used as a landing page for the Template Bundle and will not be published as part of the Template. You can choose to publish the main page by changing the settings or create a new page for the Template for publishing, from Config Settings as shown in the later steps.
5. You can create and design a new page like any other page of an application. You can use an existing template and make changes. Here we have created a Dashboard page and are making changes to the existing Sales Dashboard template. [![](/learn/assets/Create_TB_template_page.png)](/learn/assets/Create_TB_template_page.png)
6. From the _Secondary Actions_ select **Settings** and then **Config Templates** to open the Template Configuration dialog [![](/learn/assets/template_config_select.png)](/learn/assets/template_config_select.png)
7. Select the page you want to publish. You can:

    - change the **Name** and **Description**
    - specify the **Category** to which the Template belongs, you a can leave it blank
    - select for **Publish**
    - add **Keywords** used for search discovery
    - add a **Thumbnail** to be displayed on the Templates selection dialog, and
    - add **Screenshots** to be shown under Preview. 
    
    [![](/learn/assets/template_config.png)](/learn/assets/template_config.png)

8. You can see the Template Bundle in action using the **Preview** option
9. Export the Template Bundle as a zip file (Enterprise version users, refer to the [publishing section](#publishing-page-templates))[![](/learn/assets/template_export.png)](/learn/assets/template_export.png)
10. Create/Open an application to use this Template
11. From the New Page Dialog, you can **Import Template** and apply it to the page. You can see the Thumbnail and Preview the Template. [![](/learn/assets/template_import.png)](/learn/assets/template_import.png)

## Publishing Template Bundles

##### Enterprise Version post 10.0 release

In order for the Template to be available for all developers within the enterprise, it needs to be published to the EDN and approved by the EDN Admin. 

[![](/learn/assets/Publish_template.png)](/learn/assets/Publish_template.png) 

Refer to [Artifacts Publishing Mechanism](/learn/app-development/wavemaker-overview/artifacts-repository/#publishing) for more details. 

[![](/learn/assets/Publish_template_edn.png)](/learn/assets/Publish_template_edn.png) 

After Admin's approval, the Template Bundle is listed in the artifact repository listing. To use the Template, the app developer needs to select it from the Template Dialog while adding a Page to the app, or by using the Change Template option for an existing app. 

[![](/learn/assets/Artifacts_template_list.png)](/learn/assets/Artifacts_template_list.png)

In this document, we have seen how Page Templates ease page design and how you can create your own templates.

