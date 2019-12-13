---
title: "All-new WaveMaker docs with a powerful Search"
author: "Swetha Kundaram"
---

We [released](/improve-your-app-development-experience-with-the-new-wavemaker-docs/) the new WaveMaker Docs site on the 14 November 2019 using Docusaurus. Since the release, we continued to make changes and improvements to the site very frequently. This includes, one of the most-waited and most-requested features; which is the search functionality. With this, now you can search for topics from the doc site directly without actually depending on the Google search. 

[![](/learn/assets/search-here.png)](/learn/assets/search-here.png)

## Search solution

Planning and implementing the new documentation site was a different story ([read more](/improve-your-app-development-experience-with-the-new-wavemaker-docs/)), while integrating the search was another one altogether. We went with [algolia](https://www.algolia.com/) community project called 'DocSearch' which offer fast, accurate and robust search results. 

Algolia DocSearch is a popular search API and many open source communities use it, including React, Vue, Bootstrap, Netlify, Paypal, and more. It shows real-time results instantly as you type. We are happy with how it offered the flexibility to make our own customizations and display results in a more readable way possible. 

### With DocSearch

- Algolia crawls documentation every 24 hours and create a search index in its server. 
- It automatically follow internal links to make sure that the content does not go missing, and use the semantics of the HTML structure to construct its records.


## Journey behind the Search Implementation

We admit that the journey behind this implementation was quite interesting, in a good way of course. The integration with algolia DocSearch as a ready-to-use service was pretty smooth. Though, there were few challenges from Docusaurus for fitting the search into the setup it offered. Will start with how it looked straight and what we did to make the search responsive and workable across all devices, and more. 

### How it looked before? 

It did the job. But was it enough? See the screens below.


<!--DOCUSAURUS_CODE_TABS-->
<!--Mobile_View-->

[![](/learn/assets/search-plain.png)](/learn/assets/search-plain.png)

<!--Mobile_View_Stage_two-->

[![](/learn/assets/search-stage-two.png)](/learn/assets/search-stage-two.png)

<!--Web_View-->

[![](/learn/assets/before-search.png)](/learn/assets/before-search.png)


<!--END_DOCUSAURUS_CODE_TABS-->


The documentation is the key source to find solutions instantly and there are hundreds of documents stored in the database. Algolia took care of the technicality, and we took care of the rest. We consulted our UX team and developer to customize the search to suit our theme and display results to access docs with ease, and with responsiveness. 

### What we did? 

Docusaurus does not allow modifying the header. The default search was overlapping the navigation menu in smaller screens. This hampered the user experience of mobile users. 

Thus, we developed a custom script which injects dynamic HTML into the documentation. This means, whenever the documentation page loads, it builds a dropdown menu with options while injecting it into the header as hidden, it also adds event listeners to show and hide the menu items. This dropdown works in mobile view only. We hide the horizontal menu items, whilst we expand the search area for better visibility.

[![](/learn/assets/mobile-view-search.png)](/learn/assets/mobile-view-search.png)

When you access the documentation in mobile view, click the Docs option, it opens the menu vertically without interrupting the user experience. The dropdown menu can be closed by clicking anywhere on the page.

[![](/learn/assets/dropdown-mobile-view.png)](/learn/assets/dropdown-mobile-view.png)

### ta-da! 

The web view is improvised, too!

[![](/learn/assets/new-search-wavemaker.png)](/learn/assets/new-search-wavemaker.png)


If you are interested to learn more on how we implemented this, see the pull request [details]().

We hear our customers' feedback. We are focused on improving the documentation and we are working on it one after another. If you notice something broken, please report to us here. 








