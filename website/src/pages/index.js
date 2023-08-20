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
    getFeatures() {
        let featureComponents = [];
        let features = [
            { href: '/learn/app-development/custom-widgets/enterprise-marketplace/', title: 'Prefab MarketPlace', description: "Enterprise marketplace allows artifacts to be published by teams to be used across multiple teams..." },
            { href: '/learn/how-tos/adding-ui-for-api-server-side-pagination/', title: 'Server side Pagination', description: "Pagination is a way to represent data in sets of pages. Server-side pagination controls how these..." },
            { href: '/learn/react-native/react-native-overview/', title: 'React Native Studio', description: "React Native is a cross-platform framework for developing native mobile applications..." },
            { href: '/learn/app-development/services/java-services/api-composer-toolkit/', title: 'API Orchestration', description: "API Composition toolkit can be your playground to compose an API or an object using multiple API endpoints. This..." }]
        features.forEach((feature) => {
            featureComponents.push(
                <div className='col' key={features.indexOf(feature)}>
                    <a className='extension row' href={feature.href}>
                        <h4 className='title'>{feature.title}</h4>
                        <p className='description'>{feature.description}</p>
                        <span className='link'>Know More <img src="/learn/img/combined-shape-black.svg" /></span>
                    </a>
                </div>
            )
        })
        return featureComponents;
    }

    getRecentSearch() {
        let recentSearch = JSON.parse(localStorage.getItem('recentSearch'));
        let output = [];
        if (recentSearch) {
            recentSearch.forEach((search) => {
                output.push(<div className='text--center recentSearchItem'>
                        <p>{search}</p>
                    </div>)
            })
            return (<div className='container'>
                <p>Recently Visited:</p>{output}
            </div>);
        }
        return null;
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
                    {this.state.displayInfoFooter && <div className='banner-footer'>
                        <span className='banner-footer-msg'><img src='/learn/img/speaker.svg' />WaveMaker released several new features in WM11.3 See what's new.</span>
                        <a className='banner-footer-action' href='/learn/wavemaker-release-notes/v11-3-0'>Read more</a>
                        <a className="banner-footer-closeAction" href="javascript:void(0)" onClick={() => { this.setState({ displayInfoFooter: false }); }}><img src='/learn/img/closeIcon-black.svg' /></a>
                    </div>}
                    <div className='container banner spl-icon footer-left'>
                        <div className='row banner-content'>
                            <div className='col'>
                                <h1 className='text--center text--semibold banner-Title'>How can we help?</h1>
                                <div className='banner-search' id="home-search">
                                    <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    <BrowserOnly>
                                        {() => <SearchBar autoFocus={true} elementId="home-search" />}
                                    </BrowserOnly>
                                </div>
                                <div className='row recentSearch text--center'>
                                    {this.getRecentSearch()}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container extensions text--center  spl-icon header-right'>
                        <div className='row '>
                            {this.getExtensions()}
                        </div>
                    </div>
                    <div className='container-fluid helpfull-resources'>
                        <div className='container margin-top--lg padding-bottom--xl'>
                            <h1 className='text--center'>Feature Highlight</h1>
                            <div className='row'>
                                {this.getFeatures()}
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
