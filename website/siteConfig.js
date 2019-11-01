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

const React = require('react');

class MyPage extends React.Component {
    render() {

    }
}

MyPage.description = 'My Custom Description';
module.exports = MyPage;

const siteConfig = {
    title: 'WaveMaker Learn', // Title for your website.
    tagline: 'Welcome to the Learning Center',
    url: 'https://www.wavemaker.com/',
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
		{doc: 'documentation-reference', label: 'Docs '},		
        {doc: 'app-development/widgets/widget-library', label: 'Widgets'},
		{doc: 'installation/wavemaker-enterprise-setup-guide', label: 'Enterprise'},
	//	{doc: 'tutorials', label: 'Tutorials'},		
    //  {href: 'https://www.wavemakeronline.com/studio/10.1.2.7413/docs/index.html', label: 'API Docs'},
		{doc: 'howtos-documents', label: 'How-to'},
		{doc: 'wavemaker-release-notes', label: 'Releases'},
    //  {blog: true, label: 'Team Blog'},
        {href: 'https://github.com/wavemaker/docs', label: 'GitHub', external: true},
        {href: 'https://www.wavemakeronline.com/login/login', label: 'Login', external: true}
    ],

    //disabling till docusaurus v2 comes with custom search
    /*algolia: {
        apiKey: '#add-the-key-here',
        indexName: 'github',
    },*/
    // If you have users set above, you add it here:
    users,

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
    scripts: ['https://buttons.github.io/buttons.js'],

    // Add custom css.
    stylesheets: ['https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'https://fonts.googleapis.com/css?family=Lato&display=swap'],
    // On page navigation for the current documentation page.
    onPageNav: 'separate',
    // No .html extensions for paths.
    cleanUrl: true,

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
