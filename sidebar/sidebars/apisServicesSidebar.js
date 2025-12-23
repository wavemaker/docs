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
                        "id": "apis-and-services/apis/third-party-libraries/javascript-files"
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
                "type": "category",
                "label": "Authentication & Authorization",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/authentication-and-authorization/access-levels-and-permissions"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/authentication-and-authorization/authentication"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/authentication-and-authorization/authorization"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/authentication-and-authorization/overview"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/authentication-and-authorization/role-based-and-fine-grained-permissions"
                    }
                ]
            },
            {
                "type": "category",
                "label": "Providers",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/providers/central-authentication-system-cas"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/providers/saml-integration"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/providers/token-based-authentication"
                    }
                ]
            },
            {
                "type": "category",
                "label": "Hardening App",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/antisamy-policy-configuration"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/application-hardening"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/concurrent-sessions-handling"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/host-header-injection-prevention"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/login-configuration"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/other-security-hardening-measures"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/owasp-guidelines"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/remember-me-functionality"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/secure-connection-for-deployed-apps"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/security-overview-and-best-practices"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/session-persistence-and-management"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/ssl-tls-encryption"
                    },
                    {
                        "type": "doc",
                        "id": "apis-and-services/security/hardening-app/xss-prevention-techniques"
                    }
                ]
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
