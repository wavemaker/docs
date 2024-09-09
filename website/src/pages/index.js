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
import { MobileAppDevIcon, WebAppDevIcon, PrefabIcon, AdminTeamPortalIcon, EnterpriseIcon} from '../../static/js/svg-assets';

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
                    <a className='feature-card' href={feature.href}>
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
        let recentSearch = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('recentSearch')) : null;
        let output = [];
        if (recentSearch) {
            Reflect.ownKeys(recentSearch).forEach((search, index) => {
                const itemName = search.length>22?search.slice(0,20)+'...':search; 
                output.push(<a key={"" + index} href={recentSearch[search]} className='RecentSearch-link'><span className='RecentSearch-action'>{itemName}</span></a>)
            })
            return (<div className='container'>
                <span className='RecentSearch-text'>Recently Visited: </span>
                {output}
            </div>);
        }
        return <div></div>;
    }

    getExtensions() {
        let extensionComponents = [];
        let extensions = [
            { href: '/learn/app-development/ui-design/designing-app/', icon:<WebAppDevIcon className='icon'/>, label: 'Web App Development' },
            { href: '/learn/react-native/react-native-overview/', icon:<MobileAppDevIcon className='icon'/>, label: 'Mobile App Development' },
            { href: '/learn/app-development/custom-widgets/prefab-with-partials/#creating-partials', icon:<PrefabIcon className='icon'/>, label: 'Prefabs Design & Develop' },
            { href: '/learn/on-premise/welcome/', icon:<EnterpriseIcon className='icon'/>, label: 'Enterprise Install & Setup' },
            { href: '/learn/teams/overview', icon:<AdminTeamPortalIcon className='icon'/>, label: 'Administration Teams Portal' },
        ]
        extensions.forEach((extension) => {
            extensionComponents.push(<div className='col padding-horiz--sm' key={extensions.indexOf(extension)}>
                <a className='extension row' href={extension.href}>
                    <span className="img-circle">{extension.icon}</span>
                    <p className='caption'>{extension.label}</p>
                    <span className='link'>Explore <img src="/learn/img/combined-shape-black.svg" /></span>
                </a>
            </div >)
        })
        return extensionComponents;
    }

    scrollSmoothTo(elementId) {
        const element = document.getElementById(elementId);
        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
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
                    <div className=' banner footer-left'>
                        <div className='row banner-content'>
                            <div className='col'>
                                <h1 className='text--center text--semibold banner-Title'>How can we help?</h1>
                                <div className='banner-search' id="home-search">
                                    <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    <BrowserOnly>
                                        {() => <SearchBar autoFocus={true} elementId="home-search" />}
                                    </BrowserOnly>
                                </div>
                                <div className='row recentSearch text--center'>
                                    <BrowserOnly>
                                        {() => this.getRecentSearch()}
                                    </BrowserOnly>
                                </div>
                            </div>
                        </div>
                        {this.state.displayInfoFooter && <div className='banner-footer'>
                            <span className='banner-footer-msg'><img src='/learn/img/speaker.svg' />WaveMaker released an update v11.8.3. See what's new.</span>
                            <a className='banner-footer-action' href='/learn/wavemaker-release-notes/v11-8-3'>Read more</a>
                            <a className="banner-footer-closeAction" href="javascript:void(0)" onClick={() => { this.setState({ displayInfoFooter: false }); }}><img src='/learn/img/closeIcon-black.svg' /></a>
                        </div>}
                    </div>
                   
                    <div className='container extensions text--center'>
                    <a onClick={()=>{this.scrollSmoothTo("feature-section")}} className='spl-icon'/>
                        <div className='row '>
                            {this.getExtensions()}
                        </div>
                    </div>
                    <div className='container-fluid features-section' id='feature-section'>
                        <div className='container margin-top--lg padding-bottom--xl'>
                            <h1 className='text--center margin-bottom--xl'>Feature Highlight</h1>
                            <div className='row border-gradient'>
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