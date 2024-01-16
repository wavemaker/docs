function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useState } from 'react';
import { ControlKeyIcon } from '@docsearch/react/dist/esm/icons/ControlKeyIcon';
var ACTION_KEY_DEFAULT = 'Ctrl';
var ACTION_KEY_APPLE = '⌘';

function isAppleDevice() {
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

export var DocSearchButton = React.forwardRef(function (_ref, ref) {
 
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      key = _useState2[0],
      setKey = _useState2[1];

  useEffect(function () {
    if (typeof navigator !== 'undefined') {
      isAppleDevice() ? setKey(ACTION_KEY_APPLE) : setKey(ACTION_KEY_DEFAULT);
    }
  }, []);
  var isSearchActive = document.getElementsByClassName('search-active').length > 0;
  return /*#__PURE__*/!isSearchActive ? React.createElement("span", {
    className: "DocSearch-Button-Keys"
  }, key !== null && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("kbd", {
    className: "DocSearch-Button-Key"
  }, key === ACTION_KEY_DEFAULT ? /*#__PURE__*/React.createElement(ControlKeyIcon, null) : key), /*#__PURE__*/React.createElement("kbd", {
    className: "DocSearch-Button-Key"
  }, "K"))): null;
});