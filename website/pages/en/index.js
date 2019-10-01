/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Header = () => {
      return (
          <header id="header" className="header">
            <div className="row">
                <div id="logo-navigation" className="column logo-col">
                    <div id="logo">
                        <a href="https://www.wavemaker.com/"><img src="/learn/img//WM_logo-final-grey-04.svg" alt="WaveMaker"/></a>
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
    };

    const Main = () => {
      return (
          <main className="main-container">
            <div className="banner">
                <div className="row">
                    <div className="column">
                        <h1>Welcome to WaveMaker Learning Center</h1>
                        <h4>Find the documentation and references to develop a WaveMaker app.</h4>
                        <button>
						<a href= "/learn/documentation-reference" target="_self" >Get Started</a>
						</button>
                    </div>
					<div className="column">
						<img src="/learn/img/Hero img_WM learning center.svg" alt="hero Image"/>
					</div>
                </div>
            </div>
            <div className="row">
                <div className="column" style={{'opacity': '1'}}>
                    <div className="content-wrapper">
                        <div className="content-blocks">
                            <div className="imagebox-img">
                                <img src="/learn/img/01-Mobile app.svg" alt=""/>
                            </div>
							<div>
								<h1>Mobile Apps</h1>                            
								<p>Create cross-platform hybrid mobile apps.</p>
								<p>
									Rapid mobile app development<br />								
									<a href="/learn/hybrid-mobile/building-hybrid-mobile-apps" target="_self" > Build</a>
									<a href="http://www.wavemaker.com/training/" target="_self" >Mobile Widgets</a>
								</p>
							</div>
                        </div>
                    </div>
                </div>
                <div className="column" style={{'opacity': '1'}}>
                    <div className="content-wrapper">
                        <div className="content-blocks">
                            <div className="imagebox-img">
                                <img src="/learn/img/02-Tutorials.svg" alt=""/>
                            </div>
							<div>
								<h1>Tutorials</h1>
								<p>Step-by-step tutorials of specific features and applications.</p>
								<p>
									Build a fully-functional app<br />
									<a href="/learn/tutorials/" target="_self" >Get Started</a>
									<a href="http://www.wavemaker.com/training/" target="_self" >Training</a>
								</p>
							</div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="content-wrapper">
                        <div className="content-blocks">
                            <div className="imagebox-img">                                
								<img src="/learn/img/03-Resources.svg" alt=""/>
                            </div>
							<div>
								<h1>How-tos</h1>
								<p>See scenarios and solutions for using widgets and features.</p>                            
								<p>
									Customise your app<br />
                                    <a href="/learn/howtos-documents" target="_self" >How-to Docs</a>
									<a href="/learn/app-development/wavemaker-app-development-faqs/" target="_self" >FAQs</a>									                                
								</p>
							</div>
                        </div>
                    </div>
                </div>
				<div className="column">
                    <div className="content-wrapper">
                        <div className="content-blocks">
                            <div className="imagebox-img">                                
								<img src="/learn/img/04-Team blog.svg" alt=""/>
                            </div>
							<div>
								<h1>What's new?</h1>
								<p>See the latest updates directly from our developers.</p>                            
								<p>Stay tuned for more<br />
									<a href="/learn/wavemaker-release-notes" target="_self" >Release Notes</a>
									<a href="/learn/app-development/wavemaker-app-development-faqs/" target="_self" >Team Blog</a>																		
								</p>
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

module.exports = Index;
