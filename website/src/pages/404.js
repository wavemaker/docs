/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

export default class FourOhFour extends React.Component {
    render() {
        return (
            <div className="error404">
                <div className="wrapall">
                    <div id="transparentimage" className="titlebar">
                        <div className="titlebar-overlay"></div>
                        <div className="container">
                            <div className="sixteen columns">
                                <h1>Oops, this Page could not be found.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="blog_title_bottomwave"></div>
                    <div id="page-wrap" className="page-404 container">
                        <div id="content" className="sixteen columns">
                            <article>
                                <div className="entry">
                                    <h2 className="error-404">404</h2>
                                    <h3 className="error-404">Not Found.</h3>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <script dangerouslySetInnerHTML={{__html: 'reportIssue("404")'}}></script>
            </div>
        );
    }
}
