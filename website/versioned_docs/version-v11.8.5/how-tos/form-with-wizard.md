---
title: "Create a form with multiple wizard steps"
id: "form-with-wizard"
---

Form with Wizard steps assists with the creation of forms with some sort of form flow. For example, if you had a large form for entering user data, you could use a form with wizard to divide it into a series of related steps. This has the advantage of not overwhelming users with a really long form and also giving them some indication of their progress as they enter their information.

A simple, linear form may not require steps, whereas a complex form may require the use of several steps for better UI experience and also to easily enter data. 

Sometimes it's better to separate a large or complex form into different sections. It’s because your form looks much cleaner and less difficult.

Now let's learn how to create a form with multiple wizard steps in WaveMaker applications.


## Form With Wizard

1. Drag and drop liveform and configure liveform by selecting any of the database entities. [Click here](/learn/app-development/widgets/datalive/live-form/live-form-basic-usage)
2. Click LiveForm Advanced Settings, switch to **Actions** tab and unselect all the actions.
3. Drag and drop Wizard into liveform. [Check here](/learn/app-development/widgets/container/wizard).
4. Now add wizard steps based on your categories(form fields you want to categorize).
5. Move the form fields into the wizard steps (or) cut and paste the form fields into the wizard steps matching the wizard step categories.
6. Select the wizard widget and **onDone** event select save method of the liveform from the dropdown(to save the form on Done button click present on the last step of the widget widget). Check below image for reference.

[![](/learn/assets/form/wizardevent.png)](/learn/assets/form/wizardevent.png)

## Usecase

Consider a usecase where the Employee has to register this details(like personal details, Unique Identification details(like passport or PAN details etc), emergency contact details,address details etc.) after joining the organisation.

**Example:**
Below is the sample database Employee entity.
[![](/learn/assets/form/empdb.png)](/learn/assets/form/empdb.png)

Now perform all the 4 steps explained above at [**Form With Wizard**](/learn/how-tos/form-with-wizard#form-with-wizard).

Preview the app, the preview will look as below with multiple steps and on moving to the next step the previous step will be indicated as done or completed step.

[![](/learn/assets/form/empform.png)](/learn/assets/form/empform.png)


The same can be implemented with Form Widget as well.