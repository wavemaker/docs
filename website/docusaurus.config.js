module.exports = {
  "title": "WaveMaker Docs",
  "tagline": "Welcome to the Learning Center",
  "url": "https://www.wavemaker.com",
  "baseUrl": "/learn/",
  "organizationName": "WaveMaker, Inc.",
  "projectName": "learn",
  "markdown": {
    "mermaid": true,
  },
  "themes": ['@docusaurus/theme-mermaid'],
  "onBrokenLinks": 'warn',
  "onBrokenMarkdownLinks": 'warn',
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/learn/js/code-block-buttons.js",
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      "data-domain": 'docs.wavemaker.com/learn'
    },
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
              "label": 'v11.11.6',
              "path": '',
            },
            "v10.14": {
              "label": 'v10.15',
              "path": 'v10.15',
            },
          },
          "admonitions": {
            "keywords": [
                'info',
                'success',
                'danger',
                'note',
                'tip',
                'warning',
                'important',
                'caution',
                'impact',
            ],
        },
        },
        "blog": {
          "path": "../website/blog/",
          "blogSidebarTitle": 'All posts',
          "blogSidebarCount": 'ALL',
          "admonitions": {
            "keywords": [
                'info',
                'success',
                'danger',
                'note',
                'tip',
                'warning',
                'important',
                'caution',
                'impact',
            ],
        },
        },
        "theme": {
          "customCss": "../website/static/css/custom.css"
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
          "type": "doc",
          "docId": "documentation-reference",
          "label": "Web",
          "position": "left"
        },
        {
          "type": "doc",
          "docId": "react-native/react-native-overview",
          "label": "Mobile",
          "position": "left"
        },
        {
          "type": 'docsVersionDropdown',
          "position": 'right',
          "className": "version-dropdown"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "type": "doc",
          "docId": "wavemaker-release-notes",
          "label": "Releases",
          "position": "right"
        },
        {
          "to": "https://academy.wavemaker.com/",
          "label": "Academy",
          "position": "right",
        },
        {
          "to": "https://www.wavemaker.com/get-started/",
          "label": "Schedule Demo",
          "position": "right",
          "className": "navbar__link button button--warning headerSignIn"
        }
      ]
},
    "mermaid": {
      "theme": { "light": 'neutral', "dark": 'forest' },
    },
    "footer": {}
  }
}
