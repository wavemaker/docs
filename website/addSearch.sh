#!/bin/bash
sed -i "s/        \/\/ placeholder={translations.placeholder}/        placeholder={translations.placeholder}/" ./src/theme/SearchBar/index.js
sed -i "s/        \/\/ translations={translations.modal}/        translations={translations.modal}/" ./src/theme/SearchBar/index.js
sed -i "s/\/\/ import translations from '@theme\/SearchTranslations';/import translations from '@theme\/SearchTranslations';/" ./src/theme/SearchBar/index.js
sed -i 's/"@docusaurus\/preset-classic"/"@docusaurus\/preset-classic", \n\t\t\t{\n\t"googleAnalytics": {\n\t\t"trackingID": process.env.GA_TRACKING_ID,\n\t\t},\n\t}/' docusaurus.config.js
sed -i 's/"mermaid": {/"algolia": {\n\t\t\t"appId": process.env.ALGOLIA_DS_APP_ID,\n\t\t\t"apiKey": process.env.ALGOLIA_DS_API_KEY,\n\t\t\t"indexName": process.env.ALGOLIA_DS_INDEX_NAME\n},\n"mermaid": {/' docusaurus.config.js