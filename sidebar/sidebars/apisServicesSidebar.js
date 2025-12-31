/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
    {
        "type": "category",
        "label": "Concepts",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "apis-and-services/concepts/overview"
            },
            {
                "type": "doc",
                "id": "apis-and-services/concepts/architecture"
            },
            {
                "type": "doc",
                "id": "apis-and-services/concepts/techstack"
            }
        ]
    },
    {
        "type": "category",
        "label": "APIs",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "category",
                "label": "Database & CRUD APIs",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/database-and-crud-apis/overview"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/database-and-crud-apis/generated-API-code"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/database-and-crud-apis/generated-apis"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/database-and-crud-apis/queries-and-procedures"
                    },
                     {
                        "type": "doc",
                        "id": "apis-and-services/apis/database-and-crud-apis/stored-procedures"
                    }
                ]
            },
            {
                "type": "category",
                "label": "Import Open API / Swagger",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/importing-apis/overview"
                    },
                    {
                        "type": "category",
                        "label": "Individual REST Endpoints",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/import-rest"
                            },
                            {
                                "type": "doc",
                                "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/rest-request-timeouts"
                            },
                            {
                                "type": "doc",
                                "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/secure-server-side-properties"
                            },
                            {
                                "type": "doc",
                                "id": "apis-and-services/apis/importing-apis/individual-rest-endpoints/rest-services-using-oauth20"
                            }
                        ]
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/importing-apis/import-apis"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/importing-apis/websockets"
                    },
                     {
                        "type": "doc",
                        "id": "apis-and-services/apis/importing-apis/generated-code"
                    }
                ]
            },
            {
                "type": "category",
                "label": "Building Custom APIs",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/building-custom-apis/overview"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/building-custom-apis/java-integration-services"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/building-custom-apis/db-service-integration"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/building-custom-apis/api-orchestration"
                    },
                     {
                        "type": "doc",
                        "id": "apis-and-services/apis/building-custom-apis/generated-code"
                    }
                ]
            },
            {
                "type": "doc",
                "id": "apis-and-services/apis/mocking-bird/mocking-bird",
                "label": "Creating Mock APIs"
            },
            {
                "type": "category",
                "label": "Third party libraries",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/third-party-libraries/jar-files"
                    },
                  
                    {
                        "type": "doc",
                        "id": "apis-and-services/apis/third-party-libraries/using-3rd-party-libraries"
                    }
                ]
            }
        ]
    },
    {
       	"type": "category",
        "label": "Security",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "apis-and-services/security/overview"
            },
			{
                "type": "doc",
                "id": "apis-and-services/security/authentication-and-authorization"
            },
            {
                "type": "category",
                "label": "Providers",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                    "type": "doc",
                    "id": "apis-and-services/security/providers/openid-authentication"
                    }
                ]
            },
			
            {
                "type": "doc",
                "id": "apis-and-services/security/hardening-app"
            }   
        ]
    },
    {
        "type": "category",
        "label": "Configurations",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "apis-and-services/configurations/profiles"
            }
        ]
    },
    {
        "type": "category",
        "label": "Connectors",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "apis-and-services/connectors/architecture"
            },
            {
                "type": "doc",
                "id": "apis-and-services/connectors/build-a-connector"
            },
            {
                "type": "doc",
                "id": "apis-and-services/connectors/import-connectors"
            },
            {
                "type": "doc",
                "id": "apis-and-services/connectors/working-with-connectors"
            }
        ]
    },
    {
        "type": "category",
        "label": "Testing And Debugging",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "category",
                "label": "How to build & use",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/testing-and-debugging/how-to-build-and-use/running-and-preview-apps"
                    }
                ]
            },
            {
                "type": "category",
                "label": "Unit Testing",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/testing-and-debugging/unit-testing/integrate-junit-tests"
                    }
                ]
            },
            {
                "type": "doc",
                "id": "apis-and-services/testing-and-debugging/debugging"
            }
        ]
    }
]
