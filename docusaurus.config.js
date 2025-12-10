// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WaveMaker Docs",
  tagline: "Welcome to the Learning Center",
  url: "https://www.wavemaker.com",
  organizationName: "WaveMaker, Inc.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      algolia: {
        appId: "QCVP2DTGFE",
        apiKey: "e6c3135299d8686cb165ab06fa129dbe",
        indexName: "wavemakerdocs",
        askAi: "oiUXwuic142f",
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "WaveMaker Docs",
        logo: {
          alt: "WaveMaker Logo",
          src: "img/wm-logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "designSystemSidebar",
            position: "left",
            label: "Design System",
          },
          {
            type: "docSidebar",
            sidebarId: "platformSidebar",
            position: "left",
            label: "Platform",
          },
          {
            type: "docSidebar",
            sidebarId: "aiAgentsSidebar",
            position: "left",
            label: "AI Agents",
          },
          { to: "/whatsnew", label: "What's New", position: "right" },
          { to: "/blog", label: "Blogs", position: "right" },
          {
            type: "docSidebar",
            sidebarId: "howToSidebar",
            position: "right",
            label: "How to",
          },

          {
            to: "https://www.wavemaker.com/get-demo/",
            label: "Schedule Demo",
            position: "right",
            className: "button button--outline button--primary",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: "light",

        links: [
          {
            items: [
              {
                html: `
                <div class="send-message-section row">
                <div class="col col--6">
                <h4 class="message">Stuck somewhere? Our<br/>team is ready to assist you.</h4>
                </div>
                <div class="col col--6 text--right">
                <button class="button button--dark">Send Message</button>
                </div>
                </div>
                `,
              },
               {
                html: `
                <div class="footer-main-section row">
                 <div class="col col--5">
                 <a href="/" target="_blank" class="logo-links"> <img src="/img/wm-logo.svg"/>Wavemaker</a>
                 <p class="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat</p>
                 </div>
                  <div class="col col--2">
                  <ul>
                  <li>
                  </li>
                   <li>
                  </li>
                   <li>
                  </li>
                  </ul>
                 </div>
                  <div class="col col--3">
                 </div>
                  <div class="col col--3">
                 </div>
                </div>
                `,
              },
            ],
          },
           
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        /**
         * Required for any multi-instance plugin
         */
        id: "whatsnew",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "whatsnew",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "./whatsnew",
      },
    ],
  ],
};

export default config;
