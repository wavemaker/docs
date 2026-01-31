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
        id: 'apis-and-services/concepts/overview',
      },
      {
        type: 'doc',
        id: 'apis-and-services/concepts/architecture',
      },
      {
        type: 'doc',
        id: 'apis-and-services/concepts/techstack',
      },
    ],
  },
  {
    type: 'category',
    label: 'APIs',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'Database & CRUD APIs',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'apis-and-services/apis/database-and-crud-apis/index',
        },
        items: [
          {
            type: 'doc',
            id: 'apis-and-services/apis/database-and-crud-apis/generated-API-code',
          },
          {
            type: 'doc',
            id: 'apis-and-services/apis/database-and-crud-apis/generated-apis',
          },
          {
            type: 'doc',
            id: 'apis-and-services/apis/database-and-crud-apis/queries-and-procedures',
          },
          {
            type: 'doc',
            id: 'apis-and-services/apis/database-and-crud-apis/stored-procedures',
          },
        ],
      },
      {
        type: 'category',
        label: 'Import APIs',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'apis-and-services/apis/importing-apis/index',
        },
        items: [
          // {
          //     "type": "category",
          //     "label": "Import Individual REST Endpoints",
          //     "collapsible": true,
          //     "collapsed": true,
          //     "items": [
          //         {
          //             "type": "doc",
          //             "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/import-rest"
          //         },
          //         {
          //             "type": "doc",
          //             "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/rest-request-timeouts"
          //         },
          //         {
          //             "type": "doc",
          //             "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/secure-server-side-properties"
          //         },
          //         {
          //             "type": "doc",
          //             "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/rest-services-using-oauth20"
          //         }
          //     ]
          // },
          {
            type: 'doc',
            id: 'apis-and-services/apis/importing-apis/import-apis',
          },
          {
            type: 'doc',
            id: 'apis-and-services/apis/importing-apis/import-rest',
          },
          {
            type: 'doc',
            id: 'apis-and-services/apis/importing-apis/websockets',
          },
          {
            type: 'doc',
            id: 'apis-and-services/apis/importing-apis/proxy',
          },
        ],
      },
      {
        type: 'category',
        label: 'Building Custom APIs',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'apis-and-services/apis/building-custom-apis/index',
        },
        items: [
           {
            type: 'doc',
            id: 'apis-and-services/apis/building-custom-apis/generated-code',
          },

             {
            type: 'doc',
            id: 'apis-and-services/apis/building-custom-apis/api-orchestration',
          },

          {
            type: 'doc',
            id: 'apis-and-services/apis/building-custom-apis/java-integration-services',
          },
        //   {
        //     type: 'doc',
        //     id: 'apis-and-services/apis/building-custom-apis/db-service-integration',
        //   },
       
         
        ],
      },
      {
        type: 'doc',
        id: 'apis-and-services/apis/mocking-bird/mocking-bird',
        label: 'Creating Mock APIs',
      },
      {
        type: 'doc',
        id: 'apis-and-services/apis/third-party-libraries/jar-files',
        label: 'Integrating Third party libraries',
      },
      // {
      //     "type": "category",
      //     "label": "Third party libraries",
      //     "collapsible": true,
      //     "collapsed": true,
      //     "items": [
      //         {
      //             "type": "doc",
      //             "id": "apis-and-services/apis/third-party-libraries/jar-files"
      //         }

      //         // {
      //         //     "type": "doc",
      //         //     "id": "apis-and-services/apis/third-party-libraries/using-3rd-party-libraries"
      //         // }
      //     ]
      // }
    ],
  },
  {
    type: 'category',
    label: 'Security',
    collapsible: true,
    collapsed: true,
    link: {
      type: 'doc',
      id: 'apis-and-services/security/index',
    },
    items: [
    //   {
    //     type: 'doc',
    //     id: 'apis-and-services/security/app-security',
    //   },
      {
        type: 'doc',
        id: 'apis-and-services/security/authentication-and-authorization',
      },
    //   {
    //     type: 'doc',
    //     id: 'apis-and-services/security/access-level-and-permissions',
    //   },

     {
        type: 'category',
        label: 'Settings',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'apis-and-services/security/settings/remember-me',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/settings/concurrent-sessions',
          },
        //   {
        //     type: 'doc',
        //     id: 'apis-and-services/security/configurations/securing-server-side-properties-rest-services',
        //   },
          {
            type: 'doc',
            id: 'apis-and-services/security/settings/security-variables',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/settings/session-persistence',
          },
        ],
      },
      {
        type: 'category',
        label: 'Providers',
        collapsible: true,
        collapsed: true,
        items: [
             {
            type: 'doc',
            id: 'apis-and-services/security/providers/overview',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/providers/secure-connection-deployed-apps',
          },
        //   {
        //     type: 'doc',
        //     id: 'apis-and-services/security/providers/login-configuration',
        //   },

         
          {
            type: 'doc',
            id: 'apis-and-services/security/providers/database',
          },
             {
            type: 'doc',
            id: 'apis-and-services/security/providers/demo',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/providers/saml-integration',
          },
           {
            type: 'doc',
            id: 'apis-and-services/security/providers/cas',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/providers/openid-authentication',
          },

             {
            type: 'doc',
            id: 'apis-and-services/security/providers/active-directory',
          },
            
          
          {
            type: 'doc',
            id: 'apis-and-services/security/providers/token-based-authentication',
          },
        
       
          {
            type: 'doc',
            id: 'apis-and-services/security/providers/custom',
          },
        ],
      },
     
      {
        type: 'category',
        label: 'Hardening app',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'apis-and-services/security/hardening-app/xss-antisamy-policy-configuration',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/hardening-app/owasp',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/hardening-app/ssl-encryption',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/hardening-app/xss-prevention',
          },
          {
            type: 'doc',
            id: 'apis-and-services/security/hardening-app/hostheader-injection',
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'Configurations',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'apis-and-services/configurations/profiles',
      },
      {
        type: 'doc',
        id: 'apis-and-services/configurations/profile-settings',
      },
    ],
  },
  {
    type: 'category',
    label: 'Connectors',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'doc',
        id: 'apis-and-services/connectors/architecture',
      },
      {
        type: 'doc',
        id: 'apis-and-services/connectors/build-a-connector',
      },
      {
        type: 'doc',
        id: 'apis-and-services/connectors/import-connectors',
      },
      {
        type: 'doc',
        id: 'apis-and-services/connectors/working-with-connectors',
      },
    ],
  },
  {
    type: 'category',
    label: 'Testing And Debugging',
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: 'category',
        label: 'How to build & use',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'apis-and-services/testing-and-debugging/how-to-build-and-use/running-and-preview-apps',
          },
        ],
      },
      {
        type: 'category',
        label: 'Unit Testing',
        collapsible: true,
        collapsed: true,
        items: [
          {
            type: 'doc',
            id: 'apis-and-services/testing-and-debugging/unit-testing/integrate-junit-tests',
          },
        ],
      },
      {
        type: 'doc',
        id: 'apis-and-services/testing-and-debugging/debugging',
      },
    ],
  },
];
