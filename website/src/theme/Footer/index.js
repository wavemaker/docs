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
      <footer /*id="footer"*/ className="footer">
        <div className='container padding-horiz--lg'>
          <div className='row footer-actions'>
            <div className='col col--3'>
              <a href="#" target="_blank" className='logo-name'>
                <img src="/learn/img/WM_blue_logo.png" alt="WaveMaker" height="32px" />
                Wavemaker Docs
              </a>
            </div>
            <div className='col col--6 extra-links'>
              <ul>
                <li>
                  <a href="https://www.wavemaker.com/" target="_blank" >WaveMaker</a>
                </li>
                <li>
                  <a href="https://academy.wavemaker.com/" target="_blank" >Get Training</a>
                </li>
                <li>
                  <a href="https://www.wavemaker.com/partner/" target="_blank" >Partners</a>
                </li>
                <li>
                  <a href="/learn/app-development/wavemaker-app-development-faqs/" target="_blank" >FAQs</a>
                </li>
              </ul>
            </div>
            <div className='col col--3 social-media-links'>
              <ul>
                <li>
                  <a href="https://www.facebook.com/wavemakersoftware" target="_blank" title="Facebook">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/WaveMaker" target="_blank" title="YouTube">
                    <i className="fa fa-youtube-play fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/WaveMaker" target="_blank" title="Twitter">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="http://www.linkedin.com/company/wavemaker" target="_blank" title="LinkedIn">
                    <i className="fa fa-linkedin fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/wavemaker" target="_blank" title="Github">
                    <i className="fa fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='row copyright'>
            <div className='col'>
              <div className='container copyright-text'>
                <span> © Copyright © 2024 WaveMaker.</span>
              </div>
            </div>
            <div className='col col--6 extra-links'>
              <ul>
                <li>
                  <a href="https://www.wavemaker.com/privacy-policy/" target="_blank" >Privacy Policy</a>
                </li>
                <li>
                  <a href="https://www.wavemaker.com/terms-of-use/" target="_blank" >Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}