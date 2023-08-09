#!/bin/bash
if grep -q googleAnalytics "docusaurus.config.js"; then
    echo "Keys are already added"
else
sed -e "s/\/\/ placeholder={translations.placeholder}/placeholder={translations.placeholder}/" ./src/theme/SearchBar/index.js > data.json && mv data.json ./src/theme/SearchBar/index.js
sed -e "s/\/\/ translations={translations.modal}/translations={translations.modal}/" ./src/theme/SearchBar/index.js > data.json && mv data.json ./src/theme/SearchBar/index.js
sed -e "s/\/\/.*import translations.*$/import translations from '@theme\/SearchTranslations';/" ./src/theme/SearchBar/index.js > data.json && mv data.json ./src/theme/SearchBar/index.js
sed -e 'N' -e 's/"@docusaurus\/preset-classic",\n.*{/"@docusaurus\/preset-classic",\n\t{\n\t\t\t\t"googleAnalytics": {\n\t\t\t\t\t"trackingID": process.env.GA_TRACKING_ID,\n\t\t\t\t}, \n\t\t\t\t"gtag": {\n\t\t\t\t\t"trackingID": process.env.GA4_TRACKING_ID, \n\t\t\t\t},/' docusaurus.config.js > data.json && mv data.json docusaurus.config.js
sed -e 's/"mermaid": {/"algolia": {\n\t\t\t"appId": process.env.ALGOLIA_DS_APP_ID,\n\t\t\t"apiKey": process.env.ALGOLIA_DS_API_KEY,\n\t\t\t"indexName": process.env.ALGOLIA_DS_INDEX_NAME\n},\n"mermaid": {/' docusaurus.config.js > data.json && mv data.json docusaurus.config.js
fi