/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
    {
        "type": "category",
        "label": "How-tos",
        "items": [
            "guide/howtos/howtos-documents",
            "guide/howtos/howtos-ui",
            {
                "type": "category",
                "label": "App Development",
                "items": [
                    "guide/howtos/app-development/creating-registration-page"
                ]
            },
            {
                "type": "category",
                "label": "Deployment",
                "items": [
                    "guide/deployment/app-integration-with-azure-cdn",
                    "guide/deployment/deployment-to-heroku",
                    "guide/deployment/deployment-using-docker-compose",
                    "guide/deployment/ssl-offloading",
                    {
                        "type": "category",
                        "label": "Deployment to Web Server",
                        "items": [
                            "guide/deployment/deploy-to-webserver/wavemaker-application-deployment-jboss",
                            "guide/deployment/deploy-to-webserver/wavemaker-application-deployment-weblogic-application-server",
                            "guide/deployment/deploy-to-webserver/wavemaker-application-deployment-websphere-liberty-profile"
                        ]
                    }
                ]
            }
        ]
    }
,
  {
    type: "category",
    label: "Components",
    collapsible: true,
    collapsed: true,
    items: [
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
                  "guide/components/angular-components/data-table-actions",
                  "guide/components/angular-components/how-to-configure-row-expansion-in-a-data-table",
                  "guide/components/angular-components/data-table-widget-representations",
                  "guide/components/angular-components/view-master-detail-data-records-using-data-table",
                  "guide/components/angular-components/adding-parent-child-using-form-datatable",
                  "guide/components/angular-components/add-master-detail-records-using-data-table",
                  "guide/components/angular-components/export-data-data-table",
                  "guide/components/angular-components/export-data-data-table-2",
                  "guide/components/angular-components/setting-blob-filename",
                  "guide/components/angular-components/dynamic-data-tables",
                  "guide/components/angular-components/customize-dynamic-datatable",
                  "guide/components/angular-components/dynamic-data-table-edit",
                  "guide/components/angular-components/data-table-column-bound-query",
                  "guide/components/angular-components/combining-columns-data-table",
                  "guide/components/angular-components/data-table-styling",
                  "guide/components/angular-components/data-table-format-options",
                  "guide/components/angular-components/concurrency-record-locking-wavemaker",
                  "guide/components/angular-components/edit-datatable-bound-to-queryapi",
                ],
              },
              {
                type: "category",
                label: "Form",
                items: [
                  "guide/components/angular-components/dynamic-form",

                  "guide/components/angular-components/how-tos-form",
                  "guide/components/angular-components/form-with-wizard",
                  "guide/components/angular-components/get-validation-messages-form",
                  "guide/components/angular-components/form-conditional-flows",
                  "guide/components/angular-components/adding-master-detail-records-transaction",
                  "guide/components/angular-components/adding-parent-child-records-single-transaction",
                ],
              },
              {
                type: "category",
                label: "List",
                items: [
                  "guide/components/angular-components/list-basic-usage",

                  "guide/components/angular-components/list-grouped",
                  "guide/components/angular-components/list-multi-grouped",
                  "guide/components/angular-components/setting-partial-page-content-panel-within-list-using-javascript",
                  "guide/components/angular-components/onrender-event-list-widget",
                  "guide/components/angular-components/list-data-table",
                  "guide/components/angular-components/building-editable-list",
                  "guide/components/angular-components/building-cascading-lists",
                  "guide/components/angular-components/list-item-access",
                  "guide/components/angular-components/localization-data-table-column-headings",
                ],
              },
              {
                type: "category",
                label: "Cards",
                items: ["guide/components/angular-components/capturing-card-items"],
              },
              {
                type: "category",
                label: "Live Form",
                items: [
                  "guide/components/angular-components/live-form-tabbed-form",
                  "guide/components/angular-components/how-tos-live-form",
                  "guide/components/angular-components/using-live-form",
                  "guide/components/angular-components/live-form-linking-another-widget",
                  "guide/components/angular-components/live-form-related-fields",
                  "guide/components/angular-components/using-cascading-select-autocomplete-live-form-fields",
                  "guide/components/angular-components/using-cascading-select-within-live-form",
                  "guide/components/angular-components/using-cascading-filter-populate-live-form",
                  "guide/components/angular-components/using-wizard-master-detail-live-form",
                ],
              },
              {
                type: "category",
                label: "Live Filter",
                items: [
                  "guide/components/angular-components/live-filter-applying",
                  "guide/components/angular-components/live-filter-multiple-values",
                  "guide/components/angular-components/live-filter-range-filter",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Container",
            items: [
              {
                type: "category",
                label: "Accordion",
                items: [
                  "guide/components/angular-components/setting-partial-page-content-accordion-within-list",
                  "guide/components/angular-components/dynamic-tabs-accordions",
                ],
              },
              {
                type: "category",
                label: "Wizard",
                items: ["guide/components/angular-components/how-tos-wizard"],
              },
            ],
          },
          {
            type: "category",
            label: "Form Widgets",
            items: [
              "guide/components/angular-components/copy-to-clipboard",
              {
                type: "category",
                label: "Select",
                items: [
                  "guide/components/angular-components/configuring-select-widget-static-list-values",
                  "guide/components/angular-components/configuring-select-widget-static-variable",
                  "guide/components/angular-components/configuring-select-widget-variable",
                  "guide/components/angular-components/configuring-select-widget-display-data-fields",
                  "guide/components/angular-components/configuring-select-widget-database-fields",
                  "guide/components/angular-components/configuring-cascading-select",
                  "guide/components/angular-components/selection-widgets-use-case",
                ],
              },
              {
                type: "category",
                label: "Radioset",
                items: ["guide/components/angular-components/radioset-filter-list"],
              },
              {
                type: "category",
                label: "CheckboxSet",
                items: ["guide/components/angular-components/checkboxset-filter-list-data"],
              },
              {
                type: "category",
                label: "Date, Time and Datetime",
                items: ["guide/components/angular-components/settimezone-method"],
              },
              {
                type: "category",
                label: "Calendar",
                items: [
                  "guide/components/angular-components/how-tos-calendar",
                  "guide/components/angular-components/calendar-usage-create-event",
                  "guide/components/angular-components/calender-usage-google-calendar-integration",
                ],
              },
              {
                type: "category",
                label: "FileUpload",
                items: [
                  "guide/components/angular-components/file-upload-widget-operations",
                  "guide/components/angular-components/upload-file-save-database",
                  "guide/components/angular-components/file-upload-blob-data",
                  "guide/components/angular-components/file-upload-custom-directory",
                  "guide/components/angular-components/accessing-file-upload-java-code",
                  "guide/components/angular-components/upload-files-from-live-form-form",
                ],
              },
              {
                type: "category",
                label: "Slider",
                items: ["guide/components/angular-components/customize-slider"],
              },
              {
                type: "category",
                label: "Rating",
                items: [
                  "guide/components/angular-components/rating-widget-using-static-data",
                  "guide/components/angular-components/rating-widget-using-static-variable",
                  "guide/components/angular-components/building-rating-widget-using-variable",
                  "guide/components/angular-components/rating-widget-interactive",
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Basic Widgets",
            items: [
              {
                type: "category",
                label: "Tree",
                items: [
                  "guide/components/angular-components/tree-use-case-static-variable",
                  "guide/components/angular-components/tree-use-case-java-service",
                  "guide/components/angular-components/tree-use-case-dynamic-tree",
                ],
              },
              {
                type: "category",
                label: "Richtext Editor",
                items: ["guide/components/angular-components/adding-custom-fonts-richtext-editor"],
              },
              {
                type: "category",
                label: "Progress Bar",
                items: ["guide/components/angular-components/customize-progress-bar"],
              },
              {
                type: "category",
                label: "Progress Circle",
                items: ["guide/components/angular-components/using-progress-circle-widget"],
              },
            ],
          },
          {
            type: "category",
            label: "Charts",
            items: [
              {
                type: "category",
                label: "How-tos",
                items: [
                  "guide/components/angular-components/working-with-charts",
                  "guide/components/angular-components/charts-displaying-user-selection-another-widget",
                  "guide/components/angular-components/charts-handling-dynamic-data",
                  "guide/components/angular-components/charts-custom-data",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
