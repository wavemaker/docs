/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import Layout from '@theme/Layout';
import SearchBar from '../theme/SearchBar';

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayInfoFooter: true
        }
    }
    getCategories() {
        let categoryComponents = [];
        let categories = [
            { href: '/learn/tutorials', icon: '/learn/img/exploreWidgets.svg', label: 'Tutorials' },
            { href: '/learn/app-development/custom-widgets/prefabs-overview', icon: '/learn/img/tailorPrefabs.svg', label: 'Build Prefabs' },
            { href: '/learn/react-native', icon: '/learn/img/reactNativeMobileApp.svg', label: 'Develop Native App' },
            { href: '/learn/on-premise/welcome', icon: '/learn/img/enterpriseGuide.svg', label: 'Enterprise Guide' }]
        categories.forEach((category) => {
            categoryComponents.push(
                <div className="col" key={categories.indexOf(category)}>
                    <a href={category.href} className='category'>
                        <img src={category.icon} className='icon'></img>
                        <span className='caption'>{category.label}</span>
                    </a>
                </div>
            )
        })
        return categoryComponents;
    }

    getExtensions() {
        let extensionComponents = [];
        let extensions = [
            { href: '/learn/app-development/ui-design/theme-builder', icon: '/learn/img/themeBuilder.svg', label: 'Theme Builder' },
            { href: '/learn/app-development/services/api-mock-server', icon: '/learn/img/apiMocking.svg', label: 'API Mocking' },
            { href: '/learn/app-development/dev-integration/chrome-developer-tool', icon: '/learn/img/devTool.svg', label: 'Dev Tool' },
            { href: '/learn/teams/overview', icon: '/learn/img/teamPortal.svg', label: 'Teams Portal' },
            { href: '/learn/connectors/connectors-introduction', icon: '/learn/img/connectors.svg', label: 'Connectors' },
        ]
        extensions.forEach((extension) => {
            extensionComponents.push(<div className='col padding-horiz--sm' key={extensions.indexOf(extension)}>
                <a className='extension row' href={extension.href}>
                    <img src={extension.icon} className='icon'></img>
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
                        <div className='row banner-content margin-vert--md'>
                            <div className='col'>
                                <h1 className='text--center text--semibold banner-Title'>how can we <span className='text--primary'>help</span>?</h1>
                                <div className='banner-search' id="home-search">
                                    <SearchBar autoFocus={true} elementId="home-search" />
                                </div>
                            </div>
                        </div>
                        {this.state.displayInfoFooter && <div className='banner-footer'>
                            <span className='banner-footer-msg'><img src='/learn/img/speaker.svg' />Learn more about WaveMaker 11 beta and see what's new.</span>
                            <a className='banner-footer-action' href='https://docs.wavemaker.com/learn/app-development/wavemaker-overview/wavemaker-11-beta'>Read more</a>
                            <a className="banner-footer-closeAction" href="javascript:void(0)" onClick={() => { this.setState({ displayInfoFooter: false }); }}><img src='/learn/img/closeIcon-black.svg' /></a>
                        </div>}
                    </div>
                    <div className='container categories'>
                        <div className='row margin-vert--lg padding-horiz--lg'>
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
                                            <a href='/learn/react-native'>React Native Studio</a>
                                        </li>
                                        <li>
                                            <a href='/learn/tutorials'>API Orchestration</a>
                                        </li>
                                        <li>
                                            <a href='/learn/tutorials'>Server-side Pagination</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col'>
                                    <ul>
                                        <li>
                                            <a href='/learn/app-development/wavemaker-overview/platform-overview'>Platform</a>
                                        </li>
                                        <li>
                                            <a href='/learn/connectors/connectors-architecture'>Architecture</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/wavemaker-overview/faqs-11'>FAQs</a>
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
                                            <a href='/learn/blog/2020/04/21/wavemaker-openapi-import'>API References</a>
                                        </li>
                                        <li>
                                            <a href='/learn/app-development/wavemaker-app-development-faqs/widgets-in-wavemaker'>Widgets API</a>
                                        </li>
                                        <li>
                                            <a href='/learn/react-native/styles'>React Native Styles</a>
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
                                            <a href=''>Get Training</a>
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
