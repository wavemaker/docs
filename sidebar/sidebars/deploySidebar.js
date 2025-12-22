/** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */
export default [
    {
        "type": "doc",
        "id": "build-and-deploy/overview"
    },
    {
        "type": "category",
        "label": "deployment-cicd",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "build-and-deploy/deployment-cicd/container-deployment"
            },
            {
                "type": "doc",
                "id": "build-and-deploy/deployment-cicd/kubernetes-deployment"
            },
            {
                "type": "doc",
                "id": "build-and-deploy/deployment-cicd/one-click-deployment"
            }
        ]
    },
    {
        "type": "category",
        "label": "mobile-app-build-and-publish",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "build-and-deploy/mobile-app-build-and-publish/app-stores"
            },
            {
                "type": "doc",
                "id": "build-and-deploy/mobile-app-build-and-publish/appchef-cli"
            },
            {
                "type": "doc",
                "id": "build-and-deploy/mobile-app-build-and-publish/mobile-overview"
            }
        ]
    },
    {
        "type": "category",
        "label": "web-app-build",
        "collapsible": true,
        "collapsed": true,
        "items": [
            {
                "type": "doc",
                "id": "build-and-deploy/web-app-build/built-options"
            },
            {
                "type": "doc",
                "id": "build-and-deploy/web-app-build/static-deployment"
            },
            {
                "type": "doc",
                "id": "build-and-deploy/web-app-build/war-deployment"
            }
        ]
    }
]
