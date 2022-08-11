/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

export default class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <div>
        <footer id="footer" className="footer">
          <div className="row">
            <div className="column logo-col">
              <div id="logo">
                <a href="https://www.wavemaker.com/" target="_blank" >
                  <img src="/learn/img/WM_logo-final-grey-04.svg" alt="WaveMaker" />
                </a>
              </div>
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
        </footer>
        <div id="copyright">
          <div className="container">
            <div className="copyright-text">Copyright © 2013-2022 WaveMaker, Inc. All rights reserved. </div>
          </div>
        </div>
      </div>
    );
  }
}