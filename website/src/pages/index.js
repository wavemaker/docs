/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
import Footer from './Footer';
import Header from './header';

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
            { href: '/learn/docs/app-development/widgets/widget-library', icon: '/learn/img/exploreWidgets.svg', label: 'Comprehensive How-to\'s' },
            { href: '/learn/docs/app-development/custom-widgets/prefabs-overview', icon: '/learn/img/tailorPrefabs.svg', label: 'Tailor Made Prefabs' },
            { href: '/learn/docs/react-native/react-native', icon: '/learn/img/reactNativeMobileApp.svg', label: 'React Native Mobile Apps' },
            { href: '/learn/docs/on-premise/welcome', icon: '/learn/img/enterpriseGuide.svg', label: 'Enterprise Guide' }]
        categories.forEach((category) => {
            categoryComponents.push(
                <div className="col" key={categories.indexOf(category)}>
                    <a href={category.href} className='row category'>
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
            { href: '/learn/docs/app-development/ui-design/theme-builder', icon: '/learn/img/themeBuilder.svg', label: 'Theme Builder' },
            { href: '/learn/docs/app-development/services/api-mock-server', icon: '/learn/img/apiMocking.svg', label: 'API Mocking' },
            { href: '/learn/docs/app-development/dev-integration/chrome-developer-tool', icon: '/learn/img/devTool.svg', label: 'Dev Tool' },
            { href: '/learn/docs/teams/overview', icon: '/learn/img/teamPortal.svg', label: 'Teams Portal' },
            { href: '/learn/docs/connectors/connectors-introduction', icon: '/learn/img/connectors.svg', label: 'Connectors' },
        ]
        extensions.forEach((extension) => {
            extensionComponents.push(<div className='col padding-horiz--sm' key={extensions.indexOf(extension)}>
                <div className='extension'>
                    <img src={extension.icon} className='icon'></img>
                    <h4  className='caption'>{extension.label}</h4>
                    <a href={extension.href}>Explore <img src="/learn/img/combined-shape-black.svg" /></a>
                </div>
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
                    <div className='container'>
                        <div className="banner margin-vert--md">
                            <div className='column'>
                                <div className='row bannerContent'>
                                    <div className='column'>
                                        <div className='row'>
                                            <span className='bannerTitle'>How can I <span style={{ color: '#1794ef' }}>help</span> you?</span>
                                        </div>
                                        <div className='row bannerSearch'>
                                            <li className="navSearchWrapper reactNavSearchWrapper" key="search">
                                                <input
                                                    className='searchInput'
                                                    id="search_input_react"
                                                    type="text"
                                                    placeholder='Search'
                                                    title='Type here'
                                                />
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                {this.state.displayInfoFooter && <div className='row bannerFooter'>
                                    <div className='bannerFooterNotification column'>
                                        <div>
                                            <span><img style={{ margin: "0 0.5em" }} src='/learn/img/speaker.svg' />Learn more about WaveMaker 11 beta and see what's new.</span>
                                        </div>
                                        <a style={{ margin: "0 0.5em" }} href='https://docs.wavemaker.com/learn/app-development/wavemaker-overview/wavemaker-11-beta'>Read more</a>
                                    </div>
                                    <div className='column'>
                                        <a onClick={() => { this.setState({ displayInfoFooter: false }); }}><img className="bannerFooterCloseImg" src='/learn/img/closeIcon.svg' /></a>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row margin-vert--xl padding-horiz--lg'>
                            {this.getCategories()}
                        </div>
                    </div>
                    <div className='container text--center padding-vert--lg'>
                        <h1>Studio Extensions</h1>
                        <div className='row margin-vert--lg'>
                            {this.getExtensions()}
                        </div>
                    </div>
                    <div className='container padding-vert--lg'>
                        <h1 className='text--center'>Helpful Resources</h1>
                        <div className='indexFooter'>
                            <div className='column'>
                                <div className='row indexFooterLinks'>
                                    <div className='column'>
                                        <div className='content-wrapper'>
                                            <div className='footerLogo footerContent'>
                                                <img className='footerImage' src='/learn/img/WM_blue_logo.png'></img>
                                                <p>Wavemaker Docs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <div className='content-wrapper'>
                                            <div className='footerContent'>
                                                <a href='/learn/docs/'>Learn</a>
                                                <a href='/learn/docs/tutorials'>Tutorial</a>
                                                <a href='/learn/docs/tutorials/leave-management-app'>Exercises</a>
                                                <a href=''>Get Training</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <div className='content-wrapper'>
                                            <div className='footerContent'>
                                                <a href='/learn/docs/app-development/wavemaker-overview/platform-overview'>Platform</a>
                                                <a href='/learn/docs/connectors/connectors-architecture#docsNav'>Architecture</a>
                                                <a href='/learn/docs/app-development/wavemaker-overview/faqs-11-beta'>FAQs</a>
                                                <a href='/learn/docs/app-development/wavemaker-overview/product-walkthrough'>Studio Walkthrough</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <div className='content-wrapper'>
                                            <div className='footerContent'>
                                                <a href='/learn/docs/blog/2020/04/21/wavemaker-openapi-import'>API References</a>
                                                <a href='/learn/docs/app-development/wavemaker-app-development-faqs/widgets-in-wavemaker'>Widgets API</a>
                                                <a href='/learn/docs/react-native/styles'>React Native Styles</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <div className='content-wrapper'>
                                            <div className='footerContent'>
                                                <a href='/learn/docs/documentation-reference#quick-start-guide'>Quick Topics</a>
                                                <a href='/learn/docs/how-tos/localization-wavemaker-apps'>Localization</a>
                                                <a href='/learn/docs/how-tos/building-pwa-app#what-is-pwa-progressive-web-application'>PWA</a>
                                                <a href='/learn/docs/blog/2020/02/25/wavemaker-micro-front-end-support'>Micro Frontend</a>
                                                <a href='/learn/docs/app-development/sspa/micro-frontend'>SSPA</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <div className='content-wrapper'>
                                            <div className='footerContent'>
                                                <a href=''>Community</a>
                                                <a href=''>Forum</a>
                                                <a href='https://github.com/wavemaker'>Github</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            );
        };

        return (
            <div className='index'>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
