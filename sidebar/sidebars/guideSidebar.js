/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
    {
        "type": "doc",
        "id": "guide/intro"
    },
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
                  "how-tos/data-table-actions",
                  "how-tos/how-to-configure-row-expansion-in-a-data-table",
                  "how-tos/data-table-widget-representations",
                  "how-tos/view-master-detail-data-records-using-data-table",
                  "how-tos/adding-parent-child-using-form-datatable",
                  "how-tos/add-master-detail-records-using-data-table",
                  "how-tos/export-data-data-table",
                  "how-tos/export-data-data-table-2",
                  "how-tos/setting-blob-filename",
                  "how-tos/dynamic-data-tables",
                  "how-tos/customize-dynamic-datatable",
                  "how-tos/dynamic-data-table-edit",
                  "how-tos/data-table-column-bound-query",
                  "how-tos/combining-columns-data-table",
                  "how-tos/data-table-styling",
                  "how-tos/data-table-format-options",
                  "how-tos/concurrency-record-locking-wavemaker",
                  "how-tos/edit-datatable-bound-to-queryapi",
                ],
              },
              {
                type: "category",
                label: "Form",
                items: [
                  "how-tos/dynamic-form",

                  "how-tos/how-tos-form",
                  "how-tos/form-with-wizard",
                  "how-tos/get-validation-messages-form",
                  "how-tos/form-conditional-flows",
                  "how-tos/adding-master-detail-records-transaction",
                  "how-tos/adding-parent-child-records-single-transaction",
                ],
              },
              {
                type: "category",
                label: "List",
                items: [
                  "how-tos/list-basic-usage",

                  "how-tos/list-grouped",
                  "how-tos/list-multi-grouped",
                  "how-tos/setting-partial-page-content-panel-within-list-using-javascript",
                  "how-tos/onrender-event-list-widget",
                  "how-tos/list-data-table",
                  "how-tos/building-editable-list",
                  "how-tos/building-cascading-lists",
                  "how-tos/list-item-access",
                  "how-tos/localization-data-table-column-headings",
                ],
              },
              {
                type: "category",
                label: "Cards",
                items: ["how-tos/capturing-card-items"],
              },
              {
                type: "category",
                label: "Live Form",
                items: [
                  "how-tos/live-form-tabbed-form",
                  "how-tos/how-tos-live-form",
                  "how-tos/using-live-form",
                  "how-tos/live-form-linking-another-widget",
                  "how-tos/live-form-related-fields",
                  "how-tos/using-cascading-select-autocomplete-live-form-fields",
                  "how-tos/using-cascading-select-within-live-form",
                  "how-tos/using-cascading-filter-populate-live-form",
                  "how-tos/using-wizard-master-detail-live-form",
                ],
              },
              {
                type: "category",
                label: "Live Filter",
                items: [
                  "how-tos/live-filter-applying",
                  "how-tos/live-filter-multiple-values",
                  "how-tos/live-filter-range-filter",
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
                  "how-tos/setting-partial-page-content-accordion-within-list",
                  "how-tos/dynamic-tabs-accordions",
                ],
              },
              {
                type: "category",
                label: "Wizard",
                items: ["how-tos/how-tos-wizard"],
              },
            ],
          },
          {
            type: "category",
            label: "Form Widgets",
            items: [
              "how-tos/copy-to-clipboard",
              {
                type: "category",
                label: "Select",
                items: [
                  "how-tos/configuring-select-widget-static-list-values",
                  "how-tos/configuring-select-widget-static-variable",
                  "how-tos/configuring-select-widget-variable",
                  "how-tos/configuring-select-widget-display-data-fields",
                  "how-tos/configuring-select-widget-database-fields",
                  "how-tos/configuring-cascading-select",
                  "how-tos/selection-widgets-use-case",
                ],
              },
              {
                type: "category",
                label: "Radioset",
                items: ["how-tos/radioset-filter-list"],
              },
              {
                type: "category",
                label: "CheckboxSet",
                items: ["how-tos/checkboxset-filter-list-data"],
              },
              {
                type: "category",
                label: "Date, Time and Datetime",
                items: ["how-tos/settimezone-method"],
              },
              {
                type: "category",
                label: "Calendar",
                items: [
                  "how-tos/how-tos-calendar",
                  "how-tos/calendar-usage-create-event",
                  "how-tos/calender-usage-google-calendar-integration",
                ],
              },
              {
                type: "category",
                label: "FileUpload",
                items: [
                  "how-tos/file-upload-widget-operations",
                  "how-tos/upload-file-save-database",
                  "how-tos/file-upload-blob-data",
                  "how-tos/file-upload-custom-directory",
                  "how-tos/accessing-file-upload-java-code",
                  "how-tos/upload-files-from-live-form-form",
                ],
              },
              {
                type: "category",
                label: "Slider",
                items: ["how-tos/customize-slider"],
              },
              {
                type: "category",
                label: "Rating",
                items: [
                  "how-tos/rating-widget-using-static-data",
                  "how-tos/rating-widget-using-static-variable",
                  "how-tos/building-rating-widget-using-variable",
                  "how-tos/rating-widget-interactive",
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
                  "how-tos/tree-use-case-static-variable",
                  "how-tos/tree-use-case-java-service",
                  "how-tos/tree-use-case-dynamic-tree",
                ],
              },
              {
                type: "category",
                label: "Richtext Editor",
                items: ["how-tos/adding-custom-fonts-richtext-editor"],
              },
              {
                type: "category",
                label: "Progress Bar",
                items: ["how-tos/customize-progress-bar"],
              },
              {
                type: "category",
                label: "Progress Circle",
                items: ["how-tos/using-progress-circle-widget"],
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
                  "how-tos/working-with-charts",
                  "how-tos/charts-displaying-user-selection-another-widget",
                  "how-tos/charts-handling-dynamic-data",
                  "how-tos/charts-custom-data",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
