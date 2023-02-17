const React = require('react');

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar--fixed-top">
                    <div className="navbar__inner">
                        <div className="navbar__items">
                            <button aria-label="Navigation bar toggle" className="navbar__toggle clean-btn" type="button" tabindex="0">
                                <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22">
                                    </path>
                                </svg>
                            </button>
                            <a className="navbar__brand" href="/learn/">
                                <div className="navbar__logo">
                                    <img src="/learn/img/WM_blue_logo.png" alt="" className="themedImage_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module themedImage--light_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module" />
                                </div>
                                <span className="navbar__title text--truncate">WaveMaker Docs</span>
                            </a>
                            <a className="navbar__item navbar__link" href="/learn/docs/documentation-reference">Guide</a>
                            <a className="navbar__item navbar__link" href="/learn/docs/app-development/widgets/widget-library">Widgets</a>
                        </div>
                        <div className='navbar__items navbar__items--right'>
                            <a className="navbar__item navbar__link" href="/learn/docs/wavemaker-release-notes">Releases</a>
                            <a className="navbar__item navbar__link" href="/learn/docs/on-premise/welcome">Blog</a>
                            <div className='navbar__item'>
                                <a href="https://www.wavemaker.com/get-started/" target="_blank" rel="noopener noreferrer" className="navbar__link button button--warning headerSignIn">Sign In</a>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-sidebar'>
                        <div className='navbar-sidebar__brand'>
                            <a className="navbar__brand" href="/learn/">
                                <div className="navbar__logo">
                                    <img src="/learn/img/WM_blue_logo.png" alt="" className="themedImage_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module themedImage--light_node_modules-@docusaurus-theme-classic-lib-theme-ThemedImage-styles-module" />
                                </div>
                                <span className="navbar__title text--truncate">WaveMaker Docs</span>
                            </a>
                            <button type="button" className="clean-btn navbar-sidebar__close">
                                <svg viewBox="0 0 15 15" width="21" height="21">
                                    <g stroke="var(--ifm-color-emphasis-600)" stroke-width="1.2">
                                        <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25">
                                        </path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
        );
    }
}