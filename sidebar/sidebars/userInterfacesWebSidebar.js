/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: 'category',
    label: 'Concepts',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/web/concepts/overview',
      },
      {
        type: 'doc',
        id: 'user-interfaces/web/concepts/development-model',
        label: 'Development Model',
      },

      {
        type: 'doc',
        id: 'user-interfaces/web/concepts/tech-stack',
      },
    ],
  },
  {
    type: 'category',
    label: 'Components',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/web/components/react-components',
        label: 'React Components',
      },
      {
        type: 'category',
        label: 'Angular Components',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/components/angular-components/index',
        },
        items: [
          {
            type: 'category',
            label: 'Data widgets',
            items: [
              {
                type: 'category',
                label: 'Data Table',
                items: [
                  'user-interfaces/web/components/angular-components/datalive/data-table',
                  'user-interfaces/web/components/angular-components/datalive/datatable/data-table-basic-usage',
                  'user-interfaces/web/components/angular-components/datalive/datatable/data-source',
                  'user-interfaces/web/components/angular-components/datalive/datatable/layouts',
                  'user-interfaces/web/components/angular-components/datalive/datatable/styles',
                  'user-interfaces/web/components/angular-components/datalive/datatable/table-configuration',
                  'user-interfaces/web/components/angular-components/datalive/datatable/field-configuration',
                  'user-interfaces/web/components/angular-components/datalive/field-validator',
                  'user-interfaces/web/components/angular-components/datalive/datatable/summary-row',
                  'user-interfaces/web/components/angular-components/datalive/datatable/row-expansion-data-table',
                  'user-interfaces/web/components/angular-components/datalive/datatable/actions',
                  'user-interfaces/web/components/angular-components/datalive/datatable/datatable-events-methods',
                  'user-interfaces/web/components/angular-components/datalive/datatable/data-table-use-cases',
                ],
              },
              {
                type: 'category',
                label: 'Form',
                items: [
                  'user-interfaces/web/components/angular-components/datalive/form',
                  'user-interfaces/web/components/angular-components/datalive/form/form-usage-scenarios',
                  'user-interfaces/web/components/angular-components/datalive/form/form-data-source',
                  'user-interfaces/web/components/angular-components/datalive/form/form-layouts',
                  'user-interfaces/web/components/angular-components/datalive/form/form-configurations',
                  'user-interfaces/web/components/angular-components/datalive/form/form-fields-configuration',
                  'user-interfaces/web/components/angular-components/datalive/field-validator',
                  'user-interfaces/web/components/angular-components/datalive/form/form-events-methods',
                ],
              },
              {
                type: 'category',
                label: 'List',
                items: [
                  'user-interfaces/web/components/angular-components/datalive/list',
                  'user-interfaces/web/components/angular-components/datalive/list/list-data-source',
                  'user-interfaces/web/components/angular-components/datalive/list/list-templates',
                  'user-interfaces/web/components/angular-components/datalive/list/configuration',
                  'user-interfaces/web/components/angular-components/datalive/list/behavior-settings',
                  'user-interfaces/web/components/angular-components/datalive/list/list-properties-events-methods',
                  'user-interfaces/web/components/angular-components/datalive/list/list-use-cases',
                ],
              },
              {
                type: 'category',
                label: 'Cards',
                items: [
                  'user-interfaces/web/components/angular-components/datalive/cards',
                  'user-interfaces/web/components/angular-components/datalive/cards/card-basic-usage',
                  'user-interfaces/web/components/angular-components/datalive/cards/cards-data-source',
                  'user-interfaces/web/components/angular-components/datalive/cards/cards-templates',
                  'user-interfaces/web/components/angular-components/datalive/cards/card-configuration',
                  'user-interfaces/web/components/angular-components/datalive/cards/card-behavior-settings',
                  'user-interfaces/web/components/angular-components/datalive/cards/cards-properties-events-methods',
                  'user-interfaces/web/components/angular-components/datalive/cards/card-use-cases',
                ],
              },
              {
                type: 'category',
                label: 'Live Form',
                items: [
                  'user-interfaces/web/components/angular-components/datalive/live-form',
                  'user-interfaces/web/components/angular-components/datalive/live-form/live-form-basic-usage',
                  'user-interfaces/web/components/angular-components/datalive/live-form/live-form-data-source',
                  'user-interfaces/web/components/angular-components/datalive/live-form/liveform-layouts',
                  'user-interfaces/web/components/angular-components/datalive/live-form/liveform-configurations',
                  'user-interfaces/web/components/angular-components/datalive/live-form/fields-configuration',
                  'user-interfaces/web/components/angular-components/datalive/live-form/liveform-actions',
                  'user-interfaces/web/components/angular-components/datalive/live-form/events-methods',
                  'user-interfaces/web/components/angular-components/datalive/live-form/liveform-use-cases',
                ],
              },
              {
                type: 'category',
                label: 'Live Filter',
                items: [
                  'user-interfaces/web/components/angular-components/datalive/live-filter',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/live-filter-basic-usage',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/live-filter-data-source',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/livefilter-layouts',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/filter-configurations',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/livefilter-field-configuration',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/livefilter-actions',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/livefilter-events-methods',
                  'user-interfaces/web/components/angular-components/datalive/livefilter/livefilter-use-cases',
                ],
              },
            ],
          },
          {
            type: 'category',
            label: 'Container',
            items: [
              'user-interfaces/web/components/angular-components/container/layout',
              'user-interfaces/web/components/angular-components/container/flex-layout',
              'user-interfaces/web/components/angular-components/container/grid-layout',
              {
                type: 'category',
                label: 'Accordion',
                items: ['user-interfaces/web/components/angular-components/container/accordion'],
              },
              'user-interfaces/web/components/angular-components/container/container',
              'user-interfaces/web/components/angular-components/container/panel',
              'user-interfaces/web/components/angular-components/container/tabs',
              'user-interfaces/web/components/angular-components/container/tile',
              {
                type: 'category',
                label: 'Wizard',
                items: ['user-interfaces/web/components/angular-components/container/wizard'],
              },
            ],
          },
          {
            type: 'category',
            label: 'Form Widgets',
            items: [
              'user-interfaces/web/components/angular-components/form-widgets/button',
              'user-interfaces/web/components/angular-components/form-widgets/button-group',
              'user-interfaces/web/components/angular-components/form-widgets/text',
              'user-interfaces/web/components/angular-components/form-widgets/number',
              'user-interfaces/web/components/angular-components/form-widgets/textarea',
              {
                type: 'category',
                label: 'Select',
                items: ['user-interfaces/web/components/angular-components/form-widgets/select'],
              },
              'user-interfaces/web/components/angular-components/form-widgets/chips',
              'user-interfaces/web/components/angular-components/form-widgets/currency',
              {
                type: 'category',
                label: 'Radioset',
                items: ['user-interfaces/web/components/angular-components/form-widgets/radioset'],
              },
              'user-interfaces/web/components/angular-components/form-widgets/checkbox',
              {
                type: 'category',
                label: 'CheckboxSet',
                items: [
                  'user-interfaces/web/components/angular-components/form-widgets/checkboxset',
                ],
              },
              'user-interfaces/web/components/angular-components/form-widgets/toggle',
              'user-interfaces/web/components/angular-components/form-widgets/switch',
              {
                type: 'category',
                label: 'Date, Time and Datetime',
                items: [
                  'user-interfaces/web/components/angular-components/form-widgets/date-time-datetime',
                ],
              },
              {
                type: 'category',
                label: 'Calendar',
                items: ['user-interfaces/web/components/angular-components/form-widgets/calendar'],
              },
              {
                type: 'category',
                label: 'FileUpload',
                items: [
                  'user-interfaces/web/components/angular-components/form-widgets/file-upload',
                  'user-interfaces/web/components/angular-components/form-widgets/file-upload-basic-usage',
                ],
              },
              'user-interfaces/web/components/angular-components/form-widgets/color-picker',
              {
                type: 'category',
                label: 'Slider',
                items: ['user-interfaces/web/components/angular-components/form-widgets/slider'],
              },
              {
                type: 'category',
                label: 'Rating',
                items: [
                  'user-interfaces/web/components/angular-components/form-widgets/rating-widget',
                ],
              },
              'user-interfaces/web/components/angular-components/form-widgets/select-locale',
            ],
          },
          {
            type: 'category',
            label: 'Basic Widgets',
            items: [
              'user-interfaces/web/components/angular-components/basic/label',
              'user-interfaces/web/components/angular-components/basic/anchor',
              'user-interfaces/web/components/angular-components/basic/icon',
              'user-interfaces/web/components/angular-components/basic/picture',
              {
                type: 'category',
                label: 'Tree',
                items: ['user-interfaces/web/components/angular-components/basic/tree'],
              },
              'user-interfaces/web/components/angular-components/basic/video',
              'user-interfaces/web/components/angular-components/basic/audio',
              'user-interfaces/web/components/angular-components/basic/html',
              'user-interfaces/web/components/angular-components/basic/iframe',
              'user-interfaces/web/components/angular-components/basic/lottie',
              'user-interfaces/web/components/angular-components/basic/message',
              'user-interfaces/web/components/angular-components/basic/spinner',
              'user-interfaces/web/components/angular-components/basic/search',
              'user-interfaces/web/components/angular-components/basic/search-basic-usage',
              {
                type: 'category',
                label: 'Richtext Editor',
                items: ['user-interfaces/web/components/angular-components/basic/richtext-editor'],
              },
              {
                type: 'category',
                label: 'Progress Bar',
                items: ['user-interfaces/web/components/angular-components/basic/progress-bar'],
              },
              {
                type: 'category',
                label: 'Progress Circle',
                items: ['user-interfaces/web/components/angular-components/basic/progress-circle'],
              },
            ],
          },
          {
            type: 'category',
            label: 'Charts',
            items: [
              'user-interfaces/web/components/angular-components/chart/chart-widget',
              'user-interfaces/web/components/angular-components/chart/onbeforerender',
            ],
          },
          {
            type: 'category',
            label: 'Navigation',
            items: [
              {
                type: 'category',
                label: 'Nav',
                items: [
                  'user-interfaces/web/components/angular-components/navigation/nav',
                  'user-interfaces/web/components/angular-components/navigation/nav-basic-usage',
                ],
              },
              {
                type: 'category',
                label: 'Nav Bar',
                items: ['user-interfaces/web/components/angular-components/navigation/nav-bar'],
              },
              {
                type: 'category',
                label: 'Breadcrumb',
                items: [
                  'user-interfaces/web/components/angular-components/navigation/breadcrumb',
                  'user-interfaces/web/components/angular-components/navigation/breadcrumb-use-cases',
                ],
              },
              {
                type: 'category',
                label: 'Dropdown Menu',
                items: [
                  'user-interfaces/web/components/angular-components/navigation/dropdown-menu',
                  'user-interfaces/web/components/angular-components/navigation/dropdown-menu-use-cases',
                ],
              },
              {
                type: 'category',
                label: 'Popover',
                items: [
                  'user-interfaces/web/components/angular-components/navigation/popover',
                  'user-interfaces/web/components/angular-components/navigation/popover-basic-usage',
                ],
              },
            ],
          },
          {
            type: 'category',
            label: 'Advanced Widgets',
            items: [
              'user-interfaces/web/components/angular-components/advanced/login',
              'user-interfaces/web/components/angular-components/advanced/marquee',
              'user-interfaces/web/components/angular-components/advanced/carousel',
            ],
          },
          {
            type: 'category',
            label: 'Modal Windows & Dialog',
            items: [
              'user-interfaces/web/components/angular-components/modal-windows-dialogs',
              'user-interfaces/web/components/angular-components/design-dialog',
              'user-interfaces/web/components/angular-components/alert-dialog',
              'user-interfaces/web/components/angular-components/confirm-dialog',
              'user-interfaces/web/components/angular-components/iframe-dialog',
              'user-interfaces/web/components/angular-components/page-dialog',
              'user-interfaces/web/components/angular-components/login-dialog',
            ],
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Develop',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'Create Web App',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/create-web-app-project/index',
        },
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/create-web-app-project/project-structure',
            label: 'Project structure',
          },
           {
            type: 'doc',
            id: 'user-interfaces/web/develop/create-web-app-project/angular-project-structure',
            label: 'Generated Angular project',
          },
           {
            type: 'doc',
            id: 'user-interfaces/web/develop/create-web-app-project/react-project-structure',
            label: 'Generated React project',
          },
        ],
      },
      {
        type: 'category',
        label: 'Create a page',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/page/index',
        },
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/page/properties',
            label: 'Properties & Behaviour',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/page/types',
            label: 'Types',
          },
        ],
      },
      {
        type: 'category',
        label: 'Working with Layouts',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/working-with-layouts/index',
        },
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/working-with-layouts/auto-layout',
            label: 'Auto Layout',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/working-with-layouts/component-with-layouting-features',
            label: 'Component with Layouting features',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/working-with-layouts/responsive-design-with-layouts',
            label: 'Responsive Design with Layouts',
          },
        ],
      },
      {
        type: 'category',
        label: 'Styling with Design Tokens',
        collapsible: true,
        collapsed: true,
         link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/styling-with-design-tokens/index',
        },
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/styling-with-design-tokens/introduction-to-foundation-css',
            label: 'Introduction to Foundation CSS',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/styling-with-design-tokens/customising-your-application',
            label: 'Customising your Application',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/styling-with-design-tokens/editing-foundation-css',
            label: 'Editing Foundation CSS',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/styling-with-design-tokens/overview',
            label: 'Styling with Design Tokens',
          },
        ],
      },
      {
        type: 'category',
        label: 'Integrating with APIs',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/integrating-with-apis/index',
        },
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/integrating-with-apis/variables',
            label: 'Variables',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/integrating-with-apis/life-cycle-hooks',
          },
        ],
      },
      {
        type: 'category',
        label: 'Component behaviour & methods',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/component-behaviour-and-methods/common-properties',
            label: 'Common properties',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/component-behaviour-and-methods/javascript-access',
            label: 'JavaScript access methods',
          },
        ],
      },
      {
        type: 'category',
        label: 'Validations',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/form-input-validations/index',
        },
        items: [
          // {
          //   type: 'doc',
          //   id: 'user-interfaces/web/develop/form-input-validations/validation-messages',
          //   label: 'Validation messages',
          // },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/form-input-validations/custom-validators-in-javascript',
            label: 'Custom validators in JavaScript',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/form-input-validations/bind-expressions',
            label: 'Bind expressions',
          },
        ],
      },

      {
        type: 'category',
        label: 'Event Handling',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/events/index',
        },
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/events/app-page-events',
            label: 'App and Page Events',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/events/variable-events',
            label: 'Variable Events',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/events/ui-events',
            label: 'UI Component Events',
          }
        ],
      },
      {
        type: 'category',
        label: 'Actions',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'user-interfaces/web/develop/actions/index',
        },
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/develop/actions/types',
            label: 'Types',
          },
        ],
      },
      // {
      //   type: 'doc',
      //   id: 'user-interfaces/web/develop/input-validations',
      // },
      // {
      //   type: 'doc',
      //   id: 'user-interfaces/web/develop/state-management',
      // },
      // {
      //   type: 'category',
      //   label: 'State Management',
      //   collapsible: true,
      //   collapsed: true,
      //   items: [
      //     {
      //       type: 'doc',
      //       id: 'user-interfaces/web/develop/state-management/overview',
      //       label: 'State Management',
      //     },
      //   ],
      // },
    ],
  },
  {
    type: 'category',
    label: 'Enterprise capabilities',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'user-interfaces/web/enterprise-capabilities/accessibility',
      },
      {
        type: 'doc',
        id: 'user-interfaces/web/enterprise-capabilities/language-support-i18n',
      },
      {
        type: 'category',
        label: 'prefabs',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/enterprise-capabilities/prefabs/overview',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/enterprise-capabilities/prefabs/create-prefab',
          },
          {
            type: 'doc',
            id: 'user-interfaces/web/enterprise-capabilities/prefabs/publishing',
          },
        ],
      },
      // {
      //   type: 'doc',
      //   id: 'user-interfaces/web/enterprise-capabilities/prefabs',
      // },
      // {
      //   type: 'doc',
      //   id: 'user-interfaces/web/enterprise-capabilities/role-based-access-control',
      // },
    ],
  },
  {
    type: 'category',
    label: 'Testing & Debugging',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'community-debugging-tools',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/testing-and-debugging/community-debugging-tools/flipper-expo-dev-tools',
          },
        ],
      },
      {
        type: 'category',
        label: 'testing-strategies',
        collapsible: true,
        collapsed: true,
        items: [
          // {
          //   type: 'doc',
          //   id: 'user-interfaces/web/testing-and-debugging/testing-strategies/ui-testing-mobile',
          // },
          {
            type: 'doc',
            id: 'user-interfaces/web/testing-and-debugging/testing-strategies/ui-testing-web',
          },
        ],
      },
      {
        type: 'category',
        label: 'unit-testing',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'user-interfaces/web/testing-and-debugging/unit-testing/web-and-mobile',
          },
        ],
      },
    ],
  },
];
