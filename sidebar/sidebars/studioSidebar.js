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
                "type": "category",
                "label": "wme",
                "collapsible": true,
                "collapsed": true,
                "items": [
                    {
                        "type": "category",
                        "label": "aws",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "category",
                                "label": "install",
                                "collapsible": true,
                                "collapsed": true,
                                "items": [
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/aws/install/apply-license",
                                        "label": "Apply License"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/aws/install/download-copy-installer",
                                        "label": "Download and Copy Installer"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/aws/install/extract-package",
                                        "label": "Extract Package"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/aws/install/initilize-setup",
                                        "label": "Initialize Setup"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/aws/install/setup-using-cw",
                                        "label": "Setup Using ConfigPortal"
                                    }
                                ]
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/aws/install-prerequisites",
                                "label": "Install Prerequisites Softwares"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/aws/launching-instances-in-aws",
                                "label": "Prepare Infrastructure"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/aws/non-root-execution",
                                "label": "Non Root WME Execution"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/aws/wavemaker-enterprise-setup-on-aws",
                                "label": "Overview"
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
                                "type": "category",
                                "label": "install",
                                "collapsible": true,
                                "collapsed": true,
                                "items": [
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/azure/install/apply-license",
                                        "label": "Apply License"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/azure/install/download-copy-installer",
                                        "label": "Download and Copy Installer"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/azure/install/extract-package",
                                        "label": "Extract Package"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/azure/install/initilize-setup",
                                        "label": "Initialize Setup"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/azure/install/setup-using-cw",
                                        "label": "Setup Using ConfigPortal"
                                    }
                                ]
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/install-prerequisites",
                                "label": "Install Prerequisites Softwares"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/launching-instances-in-azure-vhd",
                                "label": "Prepare Infrastructure using VHD"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/launching-instances-in-azure",
                                "label": "Prepare Infrastructure"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/non-root-execution",
                                "label": "Non Root WME Execution"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/azure/wavemaker-enterprise-setup-on-azure",
                                "label": "Overview"
                            }
                        ]
                    },
                    {
                        "type": "category",
                        "label": "configure",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configure/add-apps-capacity",
                                "label": "Add Apps Capacity"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configure/add-dev-capacity",
                                "label": "Add Developer Capacity"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configure/config-pipeline",
                                "label": "Configure Pipeline"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configure/config-ssl",
                                "label": "Configure SSL"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configure/config-users-auth-providers",
                                "label": "Users Onboarding"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/configure/config-vcs",
                                "label": "Configure VCS"
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
                        "label": "Getting Started",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/getting-started/architecture",
                                "label": "Architecture"
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
                        "label": "hyperv",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "category",
                                "label": "install",
                                "collapsible": true,
                                "collapsed": true,
                                "items": [
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/hyperv/install/apply-license",
                                        "label": "Apply License"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/hyperv/install/download-copy-installer",
                                        "label": "Download and Copy Installer"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/hyperv/install/extract-package",
                                        "label": "Extract Package"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/hyperv/install/initilize-setup",
                                        "label": "Initialize Setup"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/hyperv/install/non-root-execution",
                                        "label": "Non Root WME Execution"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/hyperv/install/setup-using-cw",
                                        "label": "Setup Using ConfigPortal"
                                    }
                                ]
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/hyperv/install-prerequisites",
                                "label": "Install Prerequisites Softwares"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/hyperv/launching-instances-in-hyper-v-vhd",
                                "label": "Prepare Infrastructure using VHD"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/hyperv/wavemaker-enterprise-setup-on-hyperv",
                                "label": "Overview"
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
                                        "id": "studio/offerings/wme/observability/logs-aggregation/fluentd",
                                        "label": "fluentd tags"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/logs-aggregation/kibana",
                                        "label": "Kibana"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/logs-aggregation/overview",
                                        "label": "Overview"
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
                                        "id": "studio/offerings/wme/observability/metrics-collection/alerts",
                                        "label": "Alerts"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/metrics-collection/grafana",
                                        "label": "Grafana"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/metrics-collection/overview",
                                        "label": "Overview"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/observability/metrics-collection/prometheus",
                                        "label": "Prometheus"
                                    }
                                ]
                            }
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
                    },
                    {
                        "type": "category",
                        "label": "upgrade",
                        "collapsible": true,
                        "collapsed": true,
                        "items": [
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/docker-upgrade",
                                "label": "Docker Upgrade"
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
                                "id": "studio/offerings/wme/upgrade/os-upgrade",
                                "label": "OS Upgrade"
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
                                "id": "studio/offerings/wme/upgrade/upgrade-prerequisites",
                                "label": "Upgrade Prerequisites"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/upgrade-setup",
                                "label": "Upgrade Overview"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/upgrade/upgrade-non-root-execution",
                                "label": "Upgrade Non Root WME Execution"
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
                                "type": "category",
                                "label": "install",
                                "collapsible": true,
                                "collapsed": true,
                                "items": [
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/vmware-esxi/install/apply-license",
                                        "label": "Apply License"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/vmware-esxi/install/download-copy-installer",
                                        "label": "Download and Copy Installer"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/vmware-esxi/install/extract-package",
                                        "label": "Extract Package"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/vmware-esxi/install/initilize-setup",
                                        "label": "Initialize Setup"
                                    },
                                    {
                                        "type": "doc",
                                        "id": "studio/offerings/wme/vmware-esxi/install/setup-using-cw",
                                        "label": "Setup Using ConfigPortal"
                                    }
                                ]
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/vmware-esxi/install-prerequisites",
                                "label": "Install Prerequisites Softwares"
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
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/vmware-esxi/non-root-execution",
                                "label": "Non Root WME Execution"
                            },
                            {
                                "type": "doc",
                                "id": "studio/offerings/wme/vmware-esxi/wavemaker-enterprise-setup-on-vmware",
                                "label": "Overview"
                            }
                        ]
                    },
                    {
                        "type": "doc",
                        "id": "studio/offerings/wme/welcome",
                        "label": "Welcome"
                    }
                ]
            },
            {
                "type": "doc",
                "id": "studio/offerings/wme"
            },
            {
                "type": "doc",
                "id": "studio/offerings/wmo"
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
