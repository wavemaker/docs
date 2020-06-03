/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
    {
        caption: 'User1',
        // You will need to prepend the image path with your baseUrl
        // if it is not '/', like: '/test-site/img/image.jpg'.
        image: '/img/undraw_open_source.svg',
        infoLink: 'https://www.facebook.com',
        pinned: true,
    },
];

require('dotenv').config();

const siteConfig = {
    title: 'WaveMaker Docs', // Title for your website.
    tagline: 'Welcome to the Learning Center',
    url: 'https://www.wavemaker.com',
    baseUrl: '/learn/',
    docsUrl: '',
    customDocsPath: 'learn',


    // Used for publishing and more
    projectName: 'learn',
    organizationName: 'WaveMaker, Inc.',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        {languages: true},
		{doc: 'documentation-reference', label: 'Get started'},
        {doc: 'app-development/widgets/widget-library', label: 'Widgets'},
		{doc: 'howtos-documents', label: 'How-to'},
		{doc: 'on-premise/welcome', label: 'Enterprise'},
		{doc: 'wavemaker-release-notes', label: 'Releases'},
        {blog: true, label:'Blog'},
		{href: 'https://www.wavemaker.com/get-started/', label: 'Sign-in', external: true}
    ],

    /* Algolia DocSearch */
    algolia: {
        apiKey: process.env.ALGOLIA_DS_API_KEY,
        indexName: process.env.ALGOLIA_DS_INDEX_NAME
    },

    // If you have users set above, you add it here:
    users,

    /* Google Analytics */	
    gaTrackingId: process.env.GA_TRACKING_ID,

    /* path to images for header/footer */
    headerIcon: 'img/WM_blue_logo.png',
    footerIcon: 'img/WM_blue_logo.png',
    favicon: 'img/WM_blue_logo.png',

    /* Colors for website */
    colors: {
        primaryColor: '#097FD5',
        secondaryColor: '#097FD5',
    },

    /* Custom fonts for website - the default was Times New Roman instead of Open Sans */
    fonts: {
        myFont: [
            "Open Sans",
            "Serif"
        ],
        myOtherFont: [
            "-apple-system",
            "system-ui"
        ]
    },


    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © 2013-${new Date().getFullYear()} WaveMaker, Inc. All rights reserved.`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'github',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        '/learn/js/code-block-buttons.js',
        '/learn/js/error-reporting.js',
        '/learn/js/inject-stylesheets.js'
    ],

    // Add custom css.
    stylesheets: [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://fonts.googleapis.com/css?family=Lato&display=swap'
    ],

    separateCss: ['static/remark/css/wmsicon.css', 'static/remark/css/remark-wm-theme.css'],

    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,
	
	scrollToTop: true,

    editUrl: 'https://github.com/wavemaker/docs/tree/master/learn/',

    // Open Graph and Twitter card images.
    //ogImage: 'img/undraw_online.svg',
    //twitterImage: 'img/undraw_tweetstorm.svg',

    // For sites with a sizable amount of content, set collapsible to true.
    // Expand/collapse the links and subcategories under categories.
    docsSideNavCollapsible: true,

    // Show documentation's last contributor's name.
    enableUpdateBy: true,

    // Show documentation's last update time.
    enableUpdateTime: true,
	
	blogSidebarCount: 'ALL',

    markdownPlugins: [
        require('remarkable-admonitions')({icon: 'svg-inline'})
    ]

};

module.exports = siteConfig;
