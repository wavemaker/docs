var _excluded = ["translations"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { ResultsScreen } from './ResultsScreen';
export var ScreenState = React.memo(function (_ref) {
  const inlineSearchActions = [{
    "href": "/learn/react-native/react-native-overview/",
    "label": "React Native"
  }, {
    "href": "/learn/react-native/custom-widget/",
    "label": "Custom Widget"
  }, {
    "href": "/learn/app-development/ui-design/themes/",
    "label": "Themes"
  }];
  var props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/props.isOpen  &&  props.state.collections.length == 0 ? inlineSearchActions.map(function (action) {
    return React.createElement("div", {
      className: "DocSearch-inlineSearch-action"
    }, /*#__PURE__*/React.createElement("a", {
      className: "DocSearch-inlineSearch-action-link",
      href: action.href
    },/*#__PURE__*/React.createElement("p", {
      className: "DocSearch-inlineSearch-action-text"
    }, action.label)));
  }): React.createElement(ResultsScreen, props);
}, function areEqual(_prevProps, nextProps) {
  return nextProps.state.status === 'loading' || nextProps.state.status === 'stalled';
});