function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { SelectIcon, SourceIcon } from '@docsearch/react/dist/esm/icons';
import { Results } from './Results';
import { removeHighlightTags } from '@docsearch/react/dist/esm/utils';
export function ResultsScreen(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "DocSearch-Dropdown-Container"
  }, props.state.collections.map(function (collection) {
    if (collection.items.length === 0) {
      return null;
    }

    var title = collection.items[0]["hierarchy"]["lvl0"];
    return /*#__PURE__*/React.createElement(Results, _extends({}, props, {
      key: collection.source.sourceId,
      title: title,
      collection: collection,
      renderAction: function renderAction() {
        return /*#__PURE__*/React.createElement("div", {
          className: "DocSearch-Hit-action"
        }, /*#__PURE__*/React.createElement(SelectIcon, null));
      }
    }));
  }), props.resultsFooterComponent && /*#__PURE__*/React.createElement("section", {
    className: "DocSearch-HitsFooter"
  }));
}