module.exports = {
  "title": "WaveMaker Docs",
  "tagline": "Welcome to the Learning Center",
  "url": "https://www.wavemaker.com",
  "baseUrl": "/learn/",
  "organizationName": "WaveMaker, Inc.",
  "projectName": "learn",
  "onBrokenLinks": 'warn',
  "onBrokenMarkdownLinks": 'warn',
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/learn/js/code-block-buttons.js",
    "/learn/js/error-reporting.js",
    "/learn/js/inject-stylesheets.js",
    {
      src: 'https://app.happyreact.com/widget/reactions.js',
      defer: true,
    },
  ],
  "stylesheets": [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    "https://fonts.googleapis.com/css?family=Lato&display=swap"
  ],
  "favicon": "img/WM_blue_logo.png",
  "customFields": {
    "docsUrl": "",
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
    ],
    "fonts": {
      "myFont": [
        "Open Sans",
        "Serif"
      ],
      "myOtherFont": [
        "-apple-system",
        "system-ui"
      ]
    },
    "separateCss": [
      "static/remark/css/wmsicon.css",
      "static/remark/css/remark-wm-theme.css"
    ],
    "blogSidebarCount": "ALL",
    "markdownPlugins": [
      null
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../learn",
          "routeBasePath": "/",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/wavemaker/docs/tree/master/learn/",
          "sidebarPath": "../website/sidebars.json",
          "lastVersion": 'current',
          "versions": {
            "current": {
              "label": 'v11.2',
              "path": '',
            },
          },
        },
        "blog": {
          "path": "../website/blog/",
          "blogSidebarTitle": 'All posts',
          "blogSidebarCount": 'ALL',
        },
        "theme": {
          "customCss": "/css/custom.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": true,
      },
    },
    "navbar": {
      "title": "WaveMaker Docs",
      "logo": {
        "src": "img/WM_blue_logo.png"
      },
      "items": [
        {
          "to": "documentation-reference",
          "label": "Guide",
          "position": "left"
        },
        {
          "to": "app-development/widgets/widget-library",
          "label": "Widgets",
          "position": "left"
        },
        {
          "to": "howtos-documents",
          "label": "How-to",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "type": 'docsVersionDropdown',
          "position": 'right',
          "className": "version-dropdown"
        },
        {
          "to": "wavemaker-release-notes",
          "label": "Releases",
          "position": "right"
        },
        {
          "to": "https://www.wavemakeronline.com/login/login",
          "label": "Login",
          "position": "right",
          "className": "button button--secondary"
        },
        {
          "to": "https://www.wavemaker.com/get-started/",
          "label": "Get Started",
          "position": "right",
          "className": "navbar__link button button--warning headerSignIn"
        }
      ]
    },
    "algolia": {
      "appId": "BH4D9OD16A",
      "apiKey": "e8b42d5d2b0d945ef393598f0ca271c6",
      "indexName": "wavemaker",
      "contextualSearch": true
    },
    "footer": {}
  }
}
