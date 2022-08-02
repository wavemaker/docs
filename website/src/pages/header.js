/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <a href='/learn/'>
                    <img className="logo" src="/learn/img/WM_blue_logo.png" alt="WaveMaker Docs" />
                    <h2 className="headerTitleWithLogo">WaveMaker Docs</h2>
                </a>
                <div className="navigationWrapper navigationSlider">
                    <nav className="slidingNav">
                        <ul className="nav-site nav-site-internal">
                            <li className="dropdown">
                                <a href="#" role="button" id="dropdown">Docs</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ display: 'none' }}>
                                    <a className="dropdown-item" href="/learn/documentation-reference" target="_self">Get started</a>
                                    <a className="dropdown-item" href="/learn/app-development/widgets/widget-library" target="_self">Widgets</a>
                                    <a className="dropdown-item" href="/learn/howtos-documents" target="_self">How-to</a>
                                    <a className="dropdown-item" href="/learn/on-premise/welcome" target="_self">Enterprise</a>
                                    <a className="dropdown-item" href="/learn/wavemaker-release-notes" target="_self">Releases</a>
                                    <a className="dropdown-item" href="/learn/blog/" target="_self">Blog</a>
                                    <a className="dropdown-item" href="https://www.wavemaker.com/get-started/" target="_blank">Sign-in</a>
                                </div>
                            </li>
                            <li className="">
                                <a href="/learn/documentation-reference" target="_self">Get started</a>
                            </li>
                            <li className="">
                                <a href="/learn/app-development/widgets/widget-library" target="_self">Widgets</a>
                            </li>
                            <li className="">
                                <a href="/learn/wavemaker-release-notes" target="_self">Releases</a>
                            </li>
                            <li className="">
                                <a href="/learn/blog/" target="_self">Blog</a>
                            </li>
                            <li className="headerSignIn">
                                <a href="https://www.wavemaker.com/get-started/" target="_blank">Sign In</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

