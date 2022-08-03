/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

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
            { href: '/learn/docs/app-development/widgets/widget-library', backgroundImage: 'linear-gradient(to left, rgba(131, 195, 250, 0.51), #4c90f2)', icon: '/learn/img/exploreWidgets.svg', label: 'Comprehensive How-to\'s' },
            { href: '/learn/docs/app-development/custom-widgets/prefabs-overview', backgroundImage: 'linear-gradient(to left, #addce7, #62b9a0)', icon: '/learn/img/tailorPrefabs.svg', label: 'Tailor Made Prefabs.' },
            { href: '/learn/docs/react-native/react-native', backgroundImage: 'linear-gradient(to left, #f1cfb5, #f6a191)', icon: '/learn/img/reactNativeMobileApp.svg', label: 'React Native Mobile Apps.' },
            { href: '/learn/docs/on-premise/welcome', backgroundImage: 'linear-gradient(to left, #f6cfed, #c68bbf)', icon: '/learn/img/enterpriseGuide.svg', label: 'Enterprise Guide' }]
        categories.forEach((category) => {
            categoryComponents.push(
                <div className="column" key={categories.indexOf(category)}>
                    <div className='content-wrapper'>
                        <a href={category.href}>
                            <div className='category' style={{ backgroundImage: category.backgroundImage }}>
                                <div className='column'>
                                    <span>{category.label}</span>
                                </div>
                                <div className='column'>
                                    <img height="98px" src={category.icon}></img>
                                </div>
                            </div>
                        </a>
                    </div>
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
            extensionComponents.push(<div className='column' key={extensions.indexOf(extension)}>
                <div className='content-wrapper'>
                    <div className='extension'>
                        <img height="60px" src={extension.icon}></img>
                        <h4>{extension.label}</h4>
                        <a href={extension.href}>Explore <img src="/learn/img/combined-shape-black.svg" /></a>
                    </div>
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
                    <div className="banner">
                        <div className='column'>
                            <div className='row bannerContent'>
                                <div className='column'>
                                    <span className='bannerTitle'>How can we help?</span>
                                    <div className='bannerSearch'>
                                        <li className="navSearchWrapper reactNavSearchWrapper" key="search">
                                            <input
                                                className='searchInput'
                                                id="search_input_react"
                                                type="text"
                                                placeholder='Search'
                                                title='Type here'
                                            />
                                        </li>
                                        {/* <button className='bannerSearchButton'>Search</button> */}
                                    </div>
                                </div>
                                <div className='column'>
                                    <img className='bannerImg' src='/learn/img/bannerImage.svg' />
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
                    <div className='row categories'>
                        {this.getCategories()}
                    </div>
                    <div className='row extensionInfo'>
                        <div className='column'>
                            <span>Studio Extensions</span>
                        </div>
                    </div>
                    <div className='row extensions'>
                        {this.getExtensions()}
                    </div>
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
                            <div className='row'>
                                <div className='column'>
                                    <p></p>
                                </div>
                                <div className="column navigation">
                                    <ul id="nav">
                                        <li><a href="https://www.wavemaker.com/get-started" target="_blank" >PRICING</a> </li>
                                        <li><a href="https://www.wavemaker.com/partners" target="_blank" >PARTNERS</a> </li>
                                        <li><a href="https://www.wavemaker.com/customer-stories" target="_blank" >CUSTOMERS</a> </li>
                                        <li><a href="https://www.wavemaker.com/about" target="_blank" >ABOUT US</a> </li>
                                        <li><a href="https://www.wavemaker.com/contact" target="_blank" >CONTACT US</a> </li>
                                    </ul>
                                </div>
                                <div className="column social-media-list">
                                    <ul>
                                        <li><a href="https://www.facebook.com/wavemakersoftware" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a> </li>
                                        <li><a href="https://www.youtube.com/c/WaveMaker" target="_blank" title="YouTube"> <i className="fa fa-youtube-play"></i></a> </li>
                                        <li><a href="https://twitter.com/WaveMaker" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a> </li>
                                        <li><a href="http://www.linkedin.com/company/wavemaker" target="_blank" title="LinkedIn"><i className="fa fa-linkedin" style={{ 'fontSize': '22px' }}></i></a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div id="copyright">
                                    <div className="container">
                                        <div className="copyright-text"> <a href="//www.wavemaker.com/legal/terms-of-use/">Terms of Use </a>| {this.props.config.copyright} </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            );
        };

        return (
            <div>
                <Main />
            </div>
        );
    }
}
