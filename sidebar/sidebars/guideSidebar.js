/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
  {
    type: 'category',
    label: 'How-tos',
    items: [
      'guide/howtos/howtos-documents',
      'guide/howtos/howtos-ui',
      {
        type: 'category',
        label: 'App Development',
        items: ['guide/app-development/creating-registration-page'],
      },
      {
        type: 'category',
        label: 'Deployment',
        items: [
          'guide/deployment/app-integration-with-azure-cdn',
          'guide/deployment/deployment-to-heroku',
          'guide/deployment/deployment-using-docker-compose',
          'guide/deployment/ssl-offloading',
          {
            type: 'category',
            label: 'Deployment to Web Server',
            items: [
              'guide/deployment/deploy-to-webserver/wavemaker-application-deployment-jboss',
              'guide/deployment/deploy-to-webserver/wavemaker-application-deployment-weblogic-application-server',
              'guide/deployment/deploy-to-webserver/wavemaker-application-deployment-websphere-liberty-profile',
            ],
          },
        ],
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
        type: 'category',
        label: 'Data widgets',
        items: [
          {
            type: 'category',
            label: 'Data Table',
            items: [
              'guide/components/data-table-actions',
              'guide/components/how-to-configure-row-expansion-in-a-data-table',
              'guide/components/data-table-widget-representations',
              'guide/components/view-master-detail-data-records-using-data-table',
              'guide/components/adding-parent-child-using-form-datatable',
              'guide/components/add-master-detail-records-using-data-table',
              'guide/components/export-data-data-table',
              'guide/components/export-data-data-table-2',
              'guide/components/setting-blob-filename',
              'guide/components/dynamic-data-tables',
              'guide/components/customize-dynamic-datatable',
              'guide/components/dynamic-data-table-edit',
              'guide/components/data-table-column-bound-query',
              'guide/components/combining-columns-data-table',
              'guide/components/data-table-styling',
              'guide/components/data-table-format-options',
              'guide/components/concurrency-record-locking-wavemaker',
              'guide/components/edit-datatable-bound-to-queryapi',
            ],
          },
          {
            type: 'category',
            label: 'Form',
            items: [
              'guide/components/dynamic-form',

              'guide/components/how-tos-form',
              'guide/components/form-with-wizard',
              'guide/components/get-validation-messages-form',
              'guide/components/form-conditional-flows',
              'guide/components/adding-master-detail-records-transaction',
              'guide/components/adding-parent-child-records-single-transaction',
            ],
          },
          {
            type: 'category',
            label: 'List',
            items: [
              'guide/components/list-basic-usage',
              'guide/components/list-grouped',
              'guide/components/list-multi-grouped',
              'guide/components/setting-partial-page-content-panel-within-list-using-javascript',
              'guide/components/onrender-event-list-widget',
              'guide/components/list-data-table',
              'guide/components/building-editable-list',
              'guide/components/building-cascading-lists',
              'guide/components/list-item-access',
              'guide/components/localization-data-table-column-headings',
            ],
          },
          {
            type: 'category',
            label: 'Cards',
            items: ['guide/components/capturing-card-items'],
          },
          {
            type: 'category',
            label: 'Live Form',
            items: [
              'guide/components/live-form-tabbed-form',
              'guide/components/how-tos-live-form',
              'guide/components/using-live-form',
              'guide/components/live-form-linking-another-widget',
              'guide/components/live-form-related-fields',
              'guide/components/using-cascading-select-autocomplete-live-form-fields',
              'guide/components/using-cascading-select-within-live-form',
              'guide/components/using-cascading-filter-populate-live-form',
              'guide/components/using-wizard-master-detail-live-form',
            ],
          },
          {
            type: 'category',
            label: 'Live Filter',
            items: [
              'guide/components/live-filter-applying',
              'guide/components/live-filter-multiple-values',
              'guide/components/live-filter-range-filter',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Container',
        items: [
          {
            type: 'category',
            label: 'Accordion',
            items: [
              'guide/components/setting-partial-page-content-accordion-within-list',
              'guide/components/dynamic-tabs-accordions',
            ],
          },
          {
            type: 'category',
            label: 'Wizard',
            items: ['guide/components/how-tos-wizard'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Form Widgets',
        items: [
          'guide/components/copy-to-clipboard',
          {
            type: 'category',
            label: 'Select',
            items: [
              'guide/components/configuring-select-widget-static-list-values',
              'guide/components/configuring-select-widget-static-variable',
              'guide/components/configuring-select-widget-variable',
              'guide/components/configuring-select-widget-display-data-fields',
              'guide/components/configuring-select-widget-database-fields',
              'guide/components/configuring-cascading-select',
              'guide/components/selection-widgets-use-case',
            ],
          },
          {
            type: 'category',
            label: 'Radioset',
            items: ['guide/components/radioset-filter-list'],
          },
          {
            type: 'category',
            label: 'CheckboxSet',
            items: ['guide/components/checkboxset-filter-list-data'],
          },
          {
            type: 'category',
            label: 'Date, Time and Datetime',
            items: ['guide/components/settimezone-method'],
          },
          {
            type: 'category',
            label: 'Calendar',
            items: [
              'guide/components/how-tos-calendar',
              'guide/components/calendar-usage-create-event',
              'guide/components/calender-usage-google-calendar-integration',
            ],
          },
          {
            type: 'category',
            label: 'FileUpload',
            items: [
              'guide/components/file-upload-widget-operations',
              'guide/components/upload-file-save-database',
              'guide/components/file-upload-blob-data',
              'guide/components/file-upload-custom-directory',
              'guide/components/accessing-file-upload-java-code',
              'guide/components/upload-files-from-live-form-form',
            ],
          },
          {
            type: 'category',
            label: 'Slider',
            items: ['guide/components/customize-slider'],
          },
          {
            type: 'category',
            label: 'Rating',
            items: [
              'guide/components/rating-widget-using-static-data',
              'guide/components/rating-widget-using-static-variable',
              'guide/components/building-rating-widget-using-variable',
              'guide/components/rating-widget-interactive',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'Basic Widgets',
        items: [
          {
            type: 'category',
            label: 'Tree',
            items: [
              'guide/components/tree-use-case-static-variable',
              'guide/components/tree-use-case-java-service',
              'guide/components/tree-use-case-dynamic-tree',
            ],
          },
          {
            type: 'category',
            label: 'Richtext Editor',
            items: ['guide/components/adding-custom-fonts-richtext-editor'],
          },
          {
            type: 'category',
            label: 'Progress Bar',
            items: ['guide/components/customize-progress-bar'],
          },
          {
            type: 'category',
            label: 'Progress Circle',
            items: ['guide/components/using-progress-circle-widget'],
          },
        ],
      },
      {
        type: 'category',
        label: 'Charts',
        items: [
          {
            type: 'category',
            label: 'How-tos',
            items: [
              'guide/components/working-with-charts',
              'guide/components/charts-displaying-user-selection-another-widget',
              'guide/components/charts-handling-dynamic-data',
              'guide/components/charts-custom-data',
            ],
          },
        ],
      },
    ],
  },
];
