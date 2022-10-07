/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

// const CompLibrary = require('CompLibrary.js');

// const Container = CompLibrary.Container;
// const GridBlock = CompLibrary.GridBlock;

function Help(props) {
    const { config: siteConfig, language = '' } = props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const supportLinks = [
        {
            content: `Learn more using the [documentation on this site.](${docUrl(
                'index.html',
            )})`,
            title: 'Getting Started',
        },
        {
            content: 'Go straight to the [How to docs] to work on a specific feature.',
            title: 'How-to docs',
        },
        {
            content: "Ask questions about the documentation and project.",
            title: 'Contact Support',
        },
    ];

    return (
        <div className="docMainWrapper wrapper">
            <div className="post">
                <header className="postHeader">
                    <h1>Need help?</h1>
                </header>
                <p>Simply drag-and-drop UI components and bind them with data and services.</p>
            </div>

            {/* <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>Simply drag-and-drop UI components and bind them with data and services.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container> */}
        </div>
    );
}

module.exports = Help;
