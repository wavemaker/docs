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
            <header id="header" className="header">
                <div className="row">
                    <div id="logo-navigation" className="column logo-col">
                        <div id="logo">
                            <a href="https://www.wavemaker.com/rapid-application-development-platform/"><img src="/learn/img//WM_logo-final-grey-04.svg" alt="WaveMaker" /></a>
                        </div>
                    </div>
                    <div className="column navigation nav-menu">
                        <ul id="nav">
                            <li class="dropdown">
                                <a href="#" role="button" id="dropdown">Docs</a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/learn/documentation-reference" target="_self">Docs</a>
                                    <a class="dropdown-item" href="/learn/app-development/widgets/widget-library" target="_self">Widgets</a>
                                    <a class="dropdown-item" href="/learn/howtos-documents" target="_self">How-to</a>
                                    <a class="dropdown-item" href="/learn/wavemaker-release-notes" target="_self">Releases</a>
                                    <a class="dropdown-item" href="https://www.wavemakeronline.com/login/login" target="_blank">Login</a>
                                    <a class="dropdown-item" href="https://www.wavemaker.com/get-started/" target="_blank">Start free trial</a>
                                </div>
                            </li>
                            <li><a href="/learn/docs">DOCS</a></li>
                            <li><a href="http://www.wavemaker.com/partners">PARTNERS</a></li>
                            <li><a href="http://www.wavemaker.com/customers">CUSTOMERS</a></li>
                            <li><a href="http://www.wavemaker.com/about">ABOUT US</a></li>
                            <li><a href="http://www.wavemaker.com/contact">CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}