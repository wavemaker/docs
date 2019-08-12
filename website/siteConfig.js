/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible

const siteConfig = {
    title: 'WaveMaker Learn', // Title for your website.
    tagline: 'Learning Center',
    url: 'https://www.wavemaker.com', // Your website URL
    baseUrl: '/learn/',

    // Used for publishing and more
    projectName: 'WaveMaker Docs',
    organizationName: 'WaveMaker Inc.',

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        /*{doc: 'doc1', label: 'Docs'},
        {doc: 'doc4', label: 'API'},
        {page: 'help', label: 'Help'}*/
    ],

    customDocsPath: 'learn',

    /* path to images for header/footer */
    headerIcon: 'img/headerIcon.png',
    favicon: 'img/favicon.ico',

    /* Colors for website */
    colors: {
        primaryColor: '#1794ef',
        secondaryColor: '#777777',
    },

    /* Custom fonts for website */

    fonts: {
        myFont: [
            "Lato",
            "Arial",
            "Helvetica",
            "sans-serif"
        ],
        myOtherFont: [
            "-apple-system",
            "system-ui"
        ]
    },


    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} WaveMaker, Inc. All rights reserved.`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    docsSideNavCollapsible: true,

};

module.exports = siteConfig;
