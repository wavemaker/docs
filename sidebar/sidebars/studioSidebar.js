/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
    {
        "type": "doc",
        "id": "studio/overview"
    },
    {
        "type": "category",
        "label": "governance",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "studio/governance/app-portal"
            },
            {
                "type": "doc",
                "id": "studio/governance/projects-hub"
            },
            {
                "type": "doc",
                "id": "studio/governance/team-portal"
            }
        ]
    },
    {
        "type": "category",
        "label": "offerings",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "studio/offerings/wme"
            },
            {
                "type": "doc",
                "id": "studio/offerings/wmo"
            },
            {
                "type": "category",
                "label": "wme",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "doc",
                        "id": "studio/offerings/wme/welcome",
                        "label": "Welcome"
                    },
                    {
                        "type": "doc",
                        "id": "studio/offerings/wme/getting-started/architecture",
                        "label": "Architecture"
                    },
                    {
                        "type": "category",
                        "label": "Getting Started",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                             {
                                "type": "doc",
                                "id": "studio/offerings/wme/getting-started/getting-started",
                                "label": "Enterprise Setup Process"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/getting-started/prerequisites",
                                "label": "What you'll need"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/getting-started/users-roles",
                                "label": "Users & Roles"
                            }
                        ],
                        "link": {
                            "type": "doc",
                            "id": "studio/offerings/wme/getting-started/getting-started"
                        }
                    },
                    {
                        "type": "category",
                        "label": "aws",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [ 
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/aws/wavemaker-enterprise-setup-on-aws",
                                "label": "Overview"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/aws/launching-instances-in-aws",
                                "label": "Prepare Infrastructure"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "azure",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                        
                            
                           
                           
                           {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/wavemaker-enterprise-setup-on-azure",
                                "label": "Overview"
                            },
                             {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/launching-instances-in-azure",
                                "label": "Prepare Infrastructure"
                            },
                             {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/launching-instances-in-azure-vhd",
                                "label": "Prepare Infrastructure using VHD"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "hyperv",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            
                           
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/hyperv/wavemaker-enterprise-setup-on-hyperv",
                                "label": "Overview"
                            },
                             
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/hyperv/launching-instances-in-hyper-v-vhd",
                                "label": "Prepare Infrastructure using VHD"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "vmware-esxi",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/vmware-esxi/wavemaker-enterprise-setup-on-vmware",
                                "label": "Overview"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/vmware-esxi/launching-instances-in-esxi-iso",
                                "label": "Prepare infrastructure using ISO"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/vmware-esxi/launching-instances-in-esxi-ova",
                                "label": "Prepare Infrastructure using OVA"
                            }
                        
                    
                        ]
                    },
                    {
                        "type": "category",
                        "label": "Common Installation & Initialization",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/Common Installation & Initialization/install-prerequisites",
                                "label": "Install Prerequisites Softwares"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/Common Installation & Initialization/non-root-execution",
                                "label": "Non Root WME Execution"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/Common Installation & Initialization/download-copy-installer",
                                "label": "Download and Copy Installer"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/Common Installation & Initialization/extract-package",
                                "label": "Extract Package"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/Common Installation & Initialization/initilize-setup",
                                "label": "Initialize Setup"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "Config Portal",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/ConfigPortal & Licensing/setup-using-cw",
                                "label": "Setup Using ConfigPortal"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "Licensing",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/ConfigPortal & Licensing/apply-license",
                                "label": "Apply License"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "configuration",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configuration/config-users-auth-providers",
                                "label": "Users Onboarding"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configuration/config-vcs",
                                "label": "configuration VCS"
                            },
                            
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configuration/add-dev-capacity",
                                "label": "Add Developer Capacity"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configuration/add-apps-capacity",
                                "label": "Add Apps Capacity"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configuration/config-pipeline",
                                "label": "configuration Pipeline"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configuration/config-ssl",
                                "label": "configuration SSL"
                            }
                            
                            
                        ]
                    },
                
                    {
                        "type": "category",
                        "label": "observability",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/observability/introduction",
                                "label": "Introduction"
                            },
                            {
                                "type": "category",
                                "label": "logs-aggregation",
                                "collapsible": true,
                                "collapsed": true,
                                "items": [
                                     {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/logs-aggregation/overview",
                                        "label": "Overview"
                                    },
                                    
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/logs-aggregation/kibana",
                                        "label": "Kibana"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/logs-aggregation/fluentd",
                                        "label": "fluentd tags"
                                    }
                                   
                                ]
                            },
                            {
                                "type": "category",
                                "label": "metrics-collection",
                                "collapsible": true,
                                "collapsed": true,
                                "items": [
                                    
                                    
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/metrics-collection/overview",
                                        "label": "Overview"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/metrics-collection/prometheus",
                                        "label": "Prometheus"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/metrics-collection/alerts",
                                        "label": "Alerts"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/metrics-collection/grafana",
                                        "label": "Grafana"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "disaster-recovery",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/disaster-recovery/dehydration-and-rehydration",
                                "label": "Dehydration and Rehydration"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/disaster-recovery/backup-and-restore",
                                "label": "Backup and Restore "
                            }
                        ]
                    },
                    
                    {
                        "type": "category",
                        "label": "upgrade",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            
                           
                            
                            
                           
                        
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/upgrade-setup",
                                "label": "Upgrade Overview"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/upgrade-prerequisites",
                                "label": "Upgrade Prerequisites"
                            },
                             {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/download-copy-patch",
                                "label": "Download and Copy Patch"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/extract-patch",
                                "label": "Extract Package"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/passivate-containers",
                                "label": "Passivate Containers"
                            },
                             {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/run-patch",
                                "label": "Run Patch"
                            },
                             {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/docker-upgrade",
                                "label": "Docker Upgrade"
                            },
                            {

                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/upgrade-non-root-execution",
                                "label": "Upgrade Non Root WME Execution"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/os-upgrade",
                                "label": "OS Upgrade"
                            },
                        ]
                    },
                    {
                        "type": "category",
                        "label": "proxy-configuration",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/proxy-configuration/enabling-proxy-in-wme",
                                "label": "Enabling Proxy in WaveMaker Enterprise"
                            }
                        ]
                    }
                ]
            }
            
        ]
    },
    {
        "type": "category",
        "label": "workspaces",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "studio/workspaces/api-workspace"
            },
            {
                "type": "doc",
                "id": "studio/workspaces/database-workspace"
            },
            {
                "type": "doc",
                "id": "studio/workspaces/design-canvas"
            },
            {
                "type": "doc",
                "id": "studio/workspaces/security-workspace"
            },
            {
                "type": "doc",
                "id": "studio/workspaces/style-workspace"
            },
            {
                "type": "doc",
                "id": "studio/workspaces/vcs-workspace"
            }
        ]
    }
]
