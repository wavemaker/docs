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

    const Main = () => {
      return (
          <main className="main-container">
            <div className="banner">
                <div className="row">
                    <div className="column">
                        <h1>Welcome to WaveMaker Learning Center</h1>
                        <h4>Find a complete developer's guide to build an app with Low-code solution.</h4>
						<div>
							<a className="cta" href= "/learn/documentation-reference" target="_self" >Get Started</a>
							<a className="cta secondary" href= "https://www.wavemaker.com/rapid-application-development-platform/" target="_blank" >Platform</a>
						</div>
                    </div>
					<div className="column">
						<img src="/learn/img/Hero_img_WM_learning_center.svg" alt="hero Image"/>
					</div>
                </div>
            </div>
            <div className="row">                
                <div className="column" style={{'opacity': '1'}}>
                    <div className="content-wrapper">
                        <div className="content-blocks">
                            <div className="imagebox-img">
                                <img src="/learn/img/02-Tutorials.svg" alt=""/>
                            </div>
							<div>
								<h1>Beginners</h1>
								<p>Step-by-step tutorials of specific features and applications.</p>
								<p>
									Build a fully-functional app<br />
									<a href="/learn/tutorials/" target="_self" >Tutorials</a>
									<a href="http://www.wavemaker.com/training/" target="_blank" >Get Training</a>
								</p>
							</div>
                        </div>
                    </div>
                </div>
				<div className="column" style={{'opacity': '1'}}>
                    <div className="content-wrapper">
                        <div className="content-blocks">
                            <div className="imagebox-img">
                                <img src="/learn/img/01-Mobile_app.svg" alt=""/>
                            </div>
							<div>
								<h1>Mobile Apps</h1>                            
								<p>Create cross-platform hybrid mobile apps.</p>
								<p>
									Rapid mobile app development<br />								
									<a href="/learn/hybrid-mobile/building-hybrid-mobile-apps" target="_self" > Build</a>
									<a href="/learn/app-development/widgets/widget-library#mobile-device-widgets" target="_blank" >Mobile Widgets</a>
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
								<h1>Resources</h1>
								<p>Access to the WaveMaker older rescources, faqs, and more.</p>                            
								<p>
									Let experts guide you<br />                                    
									<a href="/learn/app-development/wavemaker-app-development-faqs/" target="_self" >FAQs</a>									
									<a href="https://www.wavemaker.com/9/learn/index.html" target="_blank" >9.x</a>
									<a href="https://www.wavemaker.com/8/learn/index.html" target="_blank" >8.x</a>										
								</p>
							</div>
                        </div>
                    </div>
                </div>
				<div className="column">
                    <div className="content-wrapper">
                        <div className="content-blocks">
                            <div className="imagebox-img">                                
								<img src="/learn/img/04-Team_blog.svg" alt=""/>
                            </div>
							<div>
								<h1>What's new?</h1>
								<p>See the latest updates directly from our developers.</p>                            
								<p>Stay tuned for more<br />
									<a href="/learn/wavemaker-release-notes" target="_self" >Release Notes</a>
									<a href="/learn/blog" target="_blank" >Team Blog</a>																		
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
