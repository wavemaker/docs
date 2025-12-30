/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: "category",
    label: "Concepts",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "user-interfaces/web/concepts/overview",
      },
      {
        type: "doc",
        id: "user-interfaces/web/concepts/tech-stack",
      },
    ],
  },
  {
    type: "category",
    label: "Components",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "user-interfaces/web/components/react-components",
        label: "React Components",
      },
      {
        type: "category",
        label: "Angular Components",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "category",
            label: "Data widgets",
            items: [
              {
                type: "category",
                label: "Data Table",
                items: [
                  "app-development/widgets/datalive/data-table",
                  "app-development/widgets/datalive/datatable/data-table-basic-usage",
                  "app-development/widgets/datalive/datatable/data-source",
                  "app-development/widgets/datalive/datatable/layouts",
                  "app-development/widgets/datalive/datatable/styles",
                  "app-development/widgets/datalive/datatable/table-configuration",
                  "app-development/widgets/datalive/datatable/field-configuration",
                  "app-development/widgets/datalive/field-validator",
                  "app-development/widgets/datalive/datatable/summary-row",
                  "app-development/widgets/datalive/datatable/row-expansion-data-table",
                  "app-development/widgets/datalive/datatable/actions",
                  "app-development/widgets/datalive/datatable/datatable-events-methods",
                  "app-development/widgets/datalive/datatable/data-table-use-cases",
                ],
              },
              {
                type: "category",
                label: "Form",
                items: [
                  "app-development/widgets/datalive/form",
                  "app-development/widgets/datalive/form/form-usage-scenarios",
                  "app-development/widgets/datalive/form/form-data-source",
                  "app-development/widgets/datalive/form/form-layouts",
                  "app-development/widgets/datalive/form/form-configurations",
                  "app-development/widgets/datalive/form/form-fields-configuration",
                  "app-development/widgets/datalive/field-validator",
                  "app-development/widgets/datalive/form/form-events-methods",
                ],
              },
              {
                type: "category",
                label: "List",
                items: [
                  "app-development/widgets/datalive/list",
                  "app-development/widgets/datalive/list/list-data-source",
                  "app-development/widgets/datalive/list/list-templates",
                  "app-development/widgets/datalive/list/configuration",
                  "app-development/widgets/datalive/list/behavior-settings",
                  "app-development/widgets/datalive/list/list-properties-events-methods",
                  "app-development/widgets/datalive/list/list-use-cases",
                ],
              },
              {
                type: "category",
                label: "Cards",
                items: [
                  "app-development/widgets/datalive/cards",
                  "app-development/widgets/datalive/cards/card-basic-usage",
                  "app-development/widgets/datalive/cards/cards-data-source",
                  "app-development/widgets/datalive/cards/cards-templates",
                  "app-development/widgets/datalive/cards/card-configuration",
                  "app-development/widgets/datalive/cards/card-behavior-settings",
                  "app-development/widgets/datalive/cards/cards-properties-events-methods",
                  "app-development/widgets/datalive/cards/card-use-cases",
                ],
              },
              {
                type: "category",
                label: "Live Form",
                items: [
                  "app-development/widgets/datalive/live-form",
                  "app-development/widgets/datalive/live-form/live-form-basic-usage",
                  "app-development/widgets/datalive/live-form/live-form-data-source",
                  "app-development/widgets/datalive/live-form/liveform-layouts",
                  "app-development/widgets/datalive/live-form/liveform-configurations",
                  "app-development/widgets/datalive/live-form/fields-configuration",
                  "app-development/widgets/datalive/live-form/liveform-actions",
                  "app-development/widgets/datalive/live-form/events-methods",
                  "app-development/widgets/datalive/live-form/liveform-use-cases",
                ],
              },
              {
                type: "category",
                label: "Live Filter",
                items: [
                  "app-development/widgets/datalive/live-filter",
                  "app-development/widgets/datalive/livefilter/live-filter-basic-usage",
                  "app-development/widgets/datalive/livefilter/live-filter-data-source",
                  "app-development/widgets/datalive/livefilter/livefilter-layouts",
                  "app-development/widgets/datalive/livefilter/filter-configurations",
                  "app-development/widgets/datalive/livefilter/livefilter-field-configuration",
                  "app-development/widgets/datalive/livefilter/livefilter-actions",
                  "app-development/widgets/datalive/livefilter/livefilter-events-methods",
                  "app-development/widgets/datalive/livefilter/livefilter-use-cases",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Container",
            items: [
              "app-development/widgets/container/layout",
              "app-development/widgets/container/flex-layout",
              "app-development/widgets/container/grid-layout",
              {
                type: "category",
                label: "Accordion",
                items: ["app-development/widgets/container/accordion"],
              },
              "app-development/widgets/container/container",
              "app-development/widgets/container/panel",
              "app-development/widgets/container/tabs",
              "app-development/widgets/container/tile",
              {
                type: "category",
                label: "Wizard",
                items: ["app-development/widgets/container/wizard"],
              },
            ],
          },
          {
            type: "category",
            label: "Form Widgets",
            items: [
              "app-development/widgets/form-widgets/button",
              "app-development/widgets/form-widgets/button-group",
              "app-development/widgets/form-widgets/text",
              "app-development/widgets/form-widgets/number",
              "app-development/widgets/form-widgets/textarea",
              {
                type: "category",
                label: "Select",
                items: ["app-development/widgets/form-widgets/select"],
              },
              "app-development/widgets/form-widgets/chips",
              "app-development/widgets/form-widgets/currency",
              {
                type: "category",
                label: "Radioset",
                items: ["app-development/widgets/form-widgets/radioset"],
              },
              "app-development/widgets/form-widgets/checkbox",
              {
                type: "category",
                label: "CheckboxSet",
                items: ["app-development/widgets/form-widgets/checkboxset"],
              },
              "app-development/widgets/form-widgets/toggle",
              "app-development/widgets/form-widgets/switch",
              {
                type: "category",
                label: "Date, Time and Datetime",
                items: [
                  "app-development/widgets/form-widgets/date-time-datetime",
                ],
              },
              {
                type: "category",
                label: "Calendar",
                items: ["app-development/widgets/form-widgets/calendar"],
              },
              {
                type: "category",
                label: "FileUpload",
                items: [
                  "app-development/widgets/form-widgets/file-upload",
                  "app-development/widgets/form-widgets/file-upload-basic-usage",
                ],
              },
              "app-development/widgets/form-widgets/color-picker",
              {
                type: "category",
                label: "Slider",
                items: ["app-development/widgets/form-widgets/slider"],
              },
              {
                type: "category",
                label: "Rating",
                items: ["app-development/widgets/form-widgets/rating-widget"],
              },
              "app-development/widgets/form-widgets/select-locale",
            ],
          },
          {
            type: "category",
            label: "Basic Widgets",
            items: [
              "app-development/widgets/basic/label",
              "app-development/widgets/basic/anchor",
              "app-development/widgets/basic/icon",
              "app-development/widgets/basic/picture",
              {
                type: "category",
                label: "Tree",
                items: ["app-development/widgets/basic/tree"],
              },
              "app-development/widgets/basic/video",
              "app-development/widgets/basic/audio",
              "app-development/widgets/basic/html",
              "app-development/widgets/basic/iframe",
              "app-development/widgets/basic/lottie",
              "app-development/widgets/basic/message",
              "app-development/widgets/basic/spinner",
              "app-development/widgets/basic/search",
              "app-development/widgets/basic/search-basic-usage",
              {
                type: "category",
                label: "Richtext Editor",
                items: ["app-development/widgets/basic/richtext-editor"],
              },
              {
                type: "category",
                label: "Progress Bar",
                items: ["app-development/widgets/basic/progress-bar"],
              },
              {
                type: "category",
                label: "Progress Circle",
                items: ["app-development/widgets/basic/progress-circle"],
              },
            ],
          },
          {
            type: "category",
            label: "Charts",
            items: [
              "app-development/widgets/chart/chart-widget",
              "app-development/widgets/chart/onbeforerender",
            ],
          },
          {
            type: "category",
            label: "Navigation",
            items: [
              {
                type: "category",
                label: "Nav",
                items: [
                  "app-development/widgets/navigation/nav",
                  "app-development/widgets/navigation/nav-basic-usage",
                ],
              },
              {
                type: "category",
                label: "Nav Bar",
                items: ["app-development/widgets/navigation/nav-bar"],
              },
              {
                type: "category",
                label: "Breadcrumb",
                items: [
                  "app-development/widgets/navigation/breadcrumb",
                  "app-development/widgets/navigation/breadcrumb-use-cases",
                ],
              },
              {
                type: "category",
                label: "Dropdown Menu",
                items: [
                  "app-development/widgets/navigation/dropdown-menu",
                  "app-development/widgets/navigation/dropdown-menu-use-cases",
                ],
              },
              {
                type: "category",
                label: "Popover",
                items: [
                  "app-development/widgets/navigation/popover",
                  "app-development/widgets/navigation/popover-basic-usage",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Advanced Widgets",
            items: [
              "app-development/widgets/advanced/login",
              "app-development/widgets/advanced/marquee",
              "app-development/widgets/advanced/carousel",
            ],
          },
          {
            type: "category",
            label: "Modal Windows & Dialog",
            items: [
              "app-development/widgets/modal-windows-dialogs",
              "app-development/widgets/design-dialog",
              "app-development/widgets/alert-dialog",
              "app-development/widgets/confirm-dialog",
              "app-development/widgets/iframe-dialog",
              "app-development/widgets/page-dialog",
              "app-development/widgets/login-dialog",
            ],
          },
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Develop",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "user-interfaces/web/develop/create-page-working-with-layouts",
      },
      {
        type: "doc",
        id: "user-interfaces/web/develop/styling-with-design-tokens",
      },
      {
        type: "doc",
        id: "user-interfaces/web/develop/responsive-design",
      },
      {
        type: "doc",
        id: "user-interfaces/web/develop/ui-event-handling",
      },
      {
        type: "doc",
        id: "user-interfaces/web/develop/input-validations",
      },
      {
        type: "doc",
        id: "user-interfaces/web/develop/state-management",
      },
      {
        type: "category",
        label: "Integrating with APIs",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "user-interfaces/web/develop/integrating-with-apis/life-cycle-hooks",
          },
          {
            type: "doc",
            id: "user-interfaces/web/develop/integrating-with-apis/types",
          },
          {
            type: "doc",
            id: "user-interfaces/web/develop/integrating-with-apis/variables",
          },
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Enterprise capabilities",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "user-interfaces/web/enterprise-capabilities/accessibility",
      },
      {
        type: "doc",
        id: "user-interfaces/web/enterprise-capabilities/language-support-i18n",
      },
      {
        type: "category",
        label: "prefabs",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "user-interfaces/web/enterprise-capabilities/prefabs/wmx-components-mobile",
          },
        ],
      },
      {
        type: "doc",
        id: "user-interfaces/web/enterprise-capabilities/prefabs",
      },
      {
        type: "doc",
        id: "user-interfaces/web/enterprise-capabilities/role-based-access-control",
      },
    ],
  },
  {
    type: "category",
    label: "Testing & Debugging",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "category",
        label: "community-debugging-tools",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "user-interfaces/web/testing-and-debugging/community-debugging-tools/flipper-expo-dev-tools",
          },
        ],
      },
      {
        type: "category",
        label: "testing-strategies",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "user-interfaces/web/testing-and-debugging/testing-strategies/ui-testing-mobile",
          },
          {
            type: "doc",
            id: "user-interfaces/web/testing-and-debugging/testing-strategies/ui-testing-web",
          },
        ],
      },
      {
        type: "category",
        label: "unit-testing",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "user-interfaces/web/testing-and-debugging/unit-testing/web-and-mobile",
          },
        ],
      },
      {
        type: "category",
        label: "wm-debugging-tools",
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: "doc",
            id: "user-interfaces/web/testing-and-debugging/wm-debugging-tools/wave-pulse-inspection-frameworks",
          },
        ],
      },
    ],
  },
];
