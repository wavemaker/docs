/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="prefabs">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>WM Prefabs Marketplace</h1>
              <p>Prefabs are ready-to-use extensions that interact with APIs and databases. You can easily embed and integrate these Prefabs in WaveMaker apps.</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Do you want to create your own Prefab using WaveMaker?</p>
            <a href="/learn/app-development/custom-widgets/creating-prefabs" className="button">
              Develop your own Prefab
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
