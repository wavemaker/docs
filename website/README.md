WaveMaker Docs Backend
---

You can edit the following files in the website directory. 

1. `sidebars.json` to edit the toc.
2. Go to `blog` directory to add `team blog` feed.  

Website Configuration files - **DO NOT EDIT** these files. 

1. `siteConfig.js` contains website configuration. 
2. `pages` directory contains landing page `index.js`. 
2. `static` directory contains website styling `custom.css` and website images. 

Running integration tests

1. End to end integration tests are written using [cypress](https://docs.cypress.io)
2. You can run these tests by using the command `npm run cy:run`
3. If you like to write a new integration tests, write them in cypress/integration folder



