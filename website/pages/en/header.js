/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Header extends React.Component {
    render() {
        return (
            <header id="header" className="header">
                <div className="row">
                    <div id="logo-navigation" className="column logo-col">
                        <div id="logo">
                            <a href="https://www.wavemaker.com/rapid-application-development-platform/"><img src="/learn/img//WM_logo-final-grey-04.svg" alt="WaveMaker"/></a>
                        </div>
                    </div>
                    <div className="column navigation nav-menu">
                        <ul id="nav">
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

module.exports = Header;
