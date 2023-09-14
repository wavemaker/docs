/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import Layout from '@theme/Layout';
import SearchBar from '../theme/SearchBar';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayInfoFooter: true
        }
    }
    getCategories() {
        const { colorMode } = useColorMode();
        let categoryComponents = [];
        let categories = [
            { href: '/learn/tutorials', lightIcon: '/learn/img/tutorials.svg', darkIcon: '/learn/img/tutorialsDark.svg', label: 'Tutorials' },
            { href: '/learn/react-native/react-native-overview', lightIcon: '/learn/img/reactNativeMobileApp.svg', darkIcon: '/learn/img/reactNativeMobileAppDark.svg', label: 'Mobile App Development' },
            { href: '/learn/on-premise/welcome', lightIcon: '/learn/img/enterpriseGuide.svg', darkIcon: '/learn/img/enterpriseGuideDark.svg', label: 'Enterprise Guide' },
            { href: '/learn/app-development/custom-widgets/prefabs-overview', lightIcon: '/learn/img/tailorPrefabs.svg', darkIcon: '/learn/img/tailorPrefabsDark.svg', label: 'Prefab Building' }]
        categories.forEach((category) => {
            categoryComponents.push(
                <div className="col" key={categories.indexOf(category)}>
                    <a href={category.href} className='category'>
                        <img src={colorMode != "dark" ? category.lightIcon : category.darkIcon} className='icon'></img>
                        <span className='caption'>{category.label}</span>
                    </a>
                </div>
            )
        })
        return categoryComponents;
    }

    getExtensions() {
        const { colorMode } = useColorMode();
        let extensionComponents = [];
        let extensions = [
            { href: '/learn/app-development/ui-design/theme-builder', lightIcon: '/learn/img/themeBuilder.svg', darkIcon: '/learn/img/themeBuilderDark.svg', label: 'Theme Builder' },
            { href: '/learn/app-development/services/mock-services/mock-imported-apis/', lightIcon: '/learn/img/apiMocking.svg', darkIcon: '/learn/img/apiMockingDark.svg', label: 'MockingBird' },
            { href: '/learn/app-development/dev-integration/chrome-developer-tool', lightIcon: '/learn/img/devTool.svg', darkIcon: '/learn/img/devToolDark.svg', label: 'Dev Tool' },
            { href: '/learn/teams/overview', lightIcon: '/learn/img/teamPortal.svg', darkIcon: '/learn/img/teamPortalDark.svg', label: 'Teams Portal' },
            { href: '/learn/connectors/connectors-introduction', lightIcon: '/learn/img/connectors.svg', darkIcon: '/learn/img/connectorsDark.svg', label: 'Connectors' },
        ]
        extensions.forEach((extension) => {
            extensionComponents.push(<div className='col padding-horiz--sm' key={extensions.indexOf(extension)}>
                <a className='extension row' href={extension.href}>
                    <img src={colorMode != "dark" ? extension.lightIcon : extension.darkIcon} className='icon'></img>
                    <p className='caption'>{extension.label}</p>
                    <span className='link'>Explore <img src="/learn/img/combined-shape-black.svg" /></span>
                </a>
            </div >)
        })
        return extensionComponents;
    }
    render() {
        const { config: siteConfig, language = '' } = this.props;
        const { baseUrl } = siteConfig;
        // let displayInfoFooter = true;
        const Main = () => {
            return (
                <main className="main-container">
                    <div className='container banner spl-icon footer-left'>
                        <div className='row banner-content'>
                            <div className='col'>
                                <h1 className='text--center text--semibold banner-Title'>How can we help?</h1>
                                <div className='banner-search' id="home-search">
                                <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <BrowserOnly>
                                        {()=><SearchBar autoFocus={true} elementId="home-search" />}
                                    </BrowserOnly>
                                </div>
                            </div>
                        </div>
                        {this.state.displayInfoFooter && <div className='banner-footer'>
                            <span className='banner-footer-msg'><img src='/learn/img/speaker.svg' />WaveMaker released an update v11.4.1. See what's new.</span>
                            <a className='banner-footer-action' href='/learn/wavemaker-release-notes/v11-4-1'>Read more</a>
                            <a className="banner-footer-closeAction" href="javascript:void(0)" onClick={() => { this.setState({ displayInfoFooter: false }); }}><img src='/learn/img/closeIcon-black.svg' /></a>
                        </div>}
                    </div>
                    <div className='container categories'>
                        <div className='row margin-vert--xl padding-horiz--lg'>
                            {this.getCategories()}
                        </div>
                    </div>
                    <div className='container extensions text--center padding-vert--lg spl-icon header-right'>
                        <h1>Studio Extensions</h1>
                        <div className='row margin-vert--lg'>
                            {this.getExtensions()}
                        </div>
                    </div>
                    <div className='container-fluid helpfull-resources'>
                        <div className='container margin-top--lg padding-bottom--xl'>
                            <h1 className='text--center'>Helpful Resources</h1>
                            <div className='row margin-top--lg padding--md'>
                                <div className='col'>
                                    <ul>
                                        <li>
                                            <a href='/learn/'>What's new?</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/custom-widgets/enterprise-marketplace/'>Prefab Marketplace</a>
                                        </li>
                                        <li>
                                            <a href='/learn/react-native/react-native-overview'>React Native Studio</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/services/java-services/api-composer-toolkit'>API Orchestration</a>
                                        </li>
                                        <li>
                                            <a href='/learn/how-tos/adding-ui-for-api-server-side-pagination'>Server-side Pagination</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul>
                                        <li>
                                            <a href='/learn/app-development/wavemaker-overview/platform-overview'>Platform</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/wavemaker-app-development-faqs/what-is-wavemaker-app'>Architecture</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/wavemaker-app-development-faqs/'>FAQs</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/wavemaker-overview/product-walkthrough'>Studio Walkthrough</a>
                                        </li>
                                        <li>
                                            <a href='/learn/tutorials/leave-management-app'>Exercises</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul>
                                        <li>
                                            <a href=''>API References</a>
                                        </li>
                                        <li>
                                            <a href='https://www.wavemakeronline.com/app-runtime/latest/docs/index.html'>Widgets API</a>
                                        </li>
                                        <li>
                                            <a href='https://www.wavemakeronline.com/app-runtime/latest/rn/style-docs/widgets/advanced/carousel/'>React Native Styles</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul>
                                        <li>
                                            <a href='/learn/documentation-reference#quick-start-guide'>Quick Topics</a>
                                        </li>
                                        <li>
                                            <a href='/learn/how-tos/localization-wavemaker-apps'>Localization</a>
                                        </li>
                                        <li>
                                            <a href='/learn/how-tos/building-pwa-app#what-is-pwa-progressive-web-application'>PWA</a>
                                        </li>
                                        <li>
                                            <a href='/learn/blog/2020/02/25/wavemaker-micro-front-end-support'>Micro Frontend</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/sspa/micro-frontend'>SSPA</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul>
                                        <li>
                                            <a href=''>Community</a>
                                        </li>
                                        <li>
                                            <a href='https://www.wavemaker.com/training/'>Get Training</a>
                                        </li>
                                        <li>
                                            <a href='https://github.com/wavemaker'>Github</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            );
        };

        return (
            <div className='index'>
                <Layout>
                    <Main />
                </Layout>
            </div>
        );
    }
}
