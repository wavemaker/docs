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
  url: "https://next-docs.wavemaker.com",
  organizationName: "WaveMaker, Inc.",
  favicon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/menu-icon/docs-icon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
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
          sidebarPath: "./sidebar/sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //TODO: Update the editUrl to point to correct branch
          editUrl:
            "https://github.com/wavemaker/docs/tree/release-12/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
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
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "warn",
          authorsMapPath: "../../data/author/authors.yml",
          blogSidebarTitle: 'All Blogs',
          blogSidebarCount: 'ALL',
          path: "blogs/blog",
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
        apiKey: "5c6569989dc17486081c8ab5cd736d10",
        indexName: "next_wavemakerdocs",
      },
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      navbar: {
        title: "WaveMaker Docs",
        logo: {
          alt: "WaveMaker Logo",
          src: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/menu-icon/docs-icon.png",
        },
        items: [
          {
            type: "dropdown",
            label: "What's New",
            position: 'left',
            items: [
              {
                to: '/docs/release-notes/',
                label: "Release Notes",
              },
              {
                label: 'Feature Announcements',
                to: '/feature-announcements',
              },
              {
                label: 'Tech Stack',
                to: '/tech-stack',
              }
            ],
          },
          {
            type: "docSidebar",
            sidebarId: "guideSidebar",
            position: "left",
            label: "Guide",
          },
          { to: "/blog", label: "Blogs", position: "left" },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            versions: {
            current: {label: 'v12.0.0'},
            },
            href: '#',
            dropdownItemsAfter: [
              {
                href: 'https://archive-docs.wavemaker.com/',
                label: 'Older Versions v10, v11',
              },
            ],
          },
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
                <a href="https://www.wavemaker.com/get-demo/" class="button button--dark">Send Message</a>
                </div>
                </div>
                `,
              },
              {
                html: `
                  <div class="footer-main-section row">
                  <div class="col col--5">
                  <a href="/" target="_blank" class="logo-links"> <img src="/img/wm-logo.svg"/>Wavemaker</a>
                  <p class="footer-desc">WaveMaker provided a flexible solution that allows us to model, design, and create web-based solutions that pass all security checks.</p>
                  </div>
                    <div class="col col--2">
                      <ul class="footer-nav-list">
                        <h3 class="nav-title">Navigation</h3>
                        <li class="nav-item">
                        <a class="nav-link" href="/">Platform</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/"> Offerings</a>
                        </li>
                      </ul>
                  </div>
                    <div class="col col--3">
                      <ul class="footer-nav-list">
                        <h3 class="nav-title">Help</h3>
                        <li class="nav-item">
                        <a class="nav-link" href="/">Support</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/">Terms & Conditions</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/"> Privacy Policy</a>
                        </li>
                      </ul>
                  </div>

                  <div class="col col--2">
                        <ul class="footer-nav-list">
                          <h3 class="nav-title">Resources</h3>
                          <li class="nav-item">
                          <a class="nav-link" href="/">Blogs</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">Tutorial</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/">Certifcation</a>
                          </li>
                        </ul>
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
        id: "feature-announcements",
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: "feature-announcements",
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: "blogs/feature-announcements",
        authorsMapPath: "../../data/author/authors.yml",
        blogSidebarTitle: 'Feature Announcements',
        blogSidebarCount: 'ALL',
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },
};

export default config;
