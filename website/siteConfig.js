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
    // ... your rendering code
  }
}

MyPage.description = 'My Custom Description';
module.exports = MyPage;

const siteConfig = {
  title: 'WaveMaker Docs', // Title for your website.
  tagline: 'Welcome to the Learning Center',
  url: 'https://www.wavemaker.com/', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  baseUrl: '/learn/',
    docsUrl: '',
    customDocsPath: 'learn',
  

  // Used for publishing and more
  projectName: 'WaveMaker Docs',
  organizationName: 'WaveMakerDocs',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
	{search: true},
	{languages: true },
	{doc: 'widget-library/widget-lib', label: 'Widgets'},
    {href: 'https://www.wavemakeronline.com/studio/10.1.1.7359/docs/index.html', label: 'API Docs'},
    {doc: 'release-notes/release-notes-v10.1', label: 'Release Notes'},
	{doc: 'app-development/wavemaker-app-development-faqs/index', label: 'FAQs'},
	{page: 'help', label: 'Help'},
	{href: 'https://www.wavemakeronline.com/login/login', label: 'Login'}
	
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/WM_white_logo.png',
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
  copyright: `Copyright © ${new Date().getFullYear()} WaveMaker, Inc. All rights reserved.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme:  'monokai', 
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  
  editUrl: 'https://github.com/wavemaker/docs/tree/master/learn/',
 
  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
	
 markdownPlugins: [
    // Highlight admonitions.
    require('remarkable-admonitions')({ icon: 'svg-inline' })
	]
    
};



module.exports = siteConfig;
