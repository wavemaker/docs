var _excluded = ["translations"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { MAX_QUERY_SIZE } from '@docsearch/react/dist//esm/constants';
import { LoadingIcon } from '@docsearch/react/dist//esm/icons/LoadingIcon';
import { ResetIcon } from '@docsearch/react/dist//esm/icons/ResetIcon';
import { DocSearchButton } from './DocSearchButton';
import { SearchIcon } from '@docsearch/react/dist//esm/icons/SearchIcon';
export function SearchBox(_ref) {
    var _ref$translations = _ref.translations,
        translations = _ref$translations === void 0 ? {} : _ref$translations,
        props = _objectWithoutProperties(_ref, _excluded);

    var _translations$resetBu = translations.resetButtonTitle,
        resetButtonTitle = _translations$resetBu === void 0 ? 'Clear the query' : _translations$resetBu,
        _translations$resetBu2 = translations.resetButtonAriaLabel,
        resetButtonAriaLabel = _translations$resetBu2 === void 0 ? 'Clear the query' : _translations$resetBu2,
        _translations$cancelB = translations.cancelButtonText,
        cancelButtonText = _translations$cancelB === void 0 ? 'Cancel' : _translations$cancelB,
        _translations$cancelB2 = translations.cancelButtonAriaLabel,
        cancelButtonAriaLabel = _translations$cancelB2 === void 0 ? 'Cancel' : _translations$cancelB2;

    var _props$getFormProps = props.getFormProps({
        inputElement: props.inputRef.current
    }),
        onReset = _props$getFormProps.onReset;

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    const [hideResetButton, setHideResetButton] = React.useState(true);
    React.useEffect(function () {
        if (props.autoFocus && props.inputRef.current) {
            props.inputRef.current.focus();
        }
    }, [props.autoFocus, props.inputRef]);
    React.useEffect(function () {
        if (props.isFromSelection && props.inputRef.current) {
            props.inputRef.current.select();
        }
    }, [props.isFromSelection, props.inputRef]);
    React.useEffect(()=>{
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
          };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])
    var isSearchActive = document.getElementsByClassName('search-active').length > 0;
    React.useEffect(()=>{
        if(screenWidth <= 768){
            setHideResetButton(!isSearchActive);
        }else{
            setHideResetButton(!props.state.query);
        }
    },[screenWidth,isSearchActive])

    const handleResetClick = () => {
        if (props.state.query == '') {
            props.onClose();
        } else {
            props.resetQuery();
        }
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
        className: "DocSearch-Form",
        onSubmit: function onSubmit(event) {
            event.preventDefault();
        },
        onReset: onReset
    }, /*#__PURE__*/React.createElement("label", _extends({
        className: "DocSearch-MagnifierLabel"
    }, props.getLabelProps()), /*#__PURE__*/React.createElement(SearchIcon, null)), /*#__PURE__*/React.createElement("div", {
        className: "DocSearch-LoadingIndicator"
    }, /*#__PURE__*/React.createElement(LoadingIcon, null)), /*#__PURE__*/React.createElement("input", _extends({
        className: "DocSearch-Input",
        ref: props.inputRef
    }, props.getInputProps({
        inputElement: props.inputRef.current,
        autoFocus: props.autoFocus,
        maxLength: MAX_QUERY_SIZE
    }))), /*#__PURE__*/React.createElement("button", {
        type: "reset",
        title: resetButtonTitle,
        className: "DocSearch-Reset",
        "aria-label": resetButtonAriaLabel,
        hidden: hideResetButton,
        onClick: handleResetClick
    }, /*#__PURE__*/React.createElement(ResetIcon, null)), React.createElement(DocSearchButton, {})), /*#__PURE__*/React.createElement("button", {
        className: "DocSearch-Cancel",
        type: "reset",
        "aria-label": cancelButtonAriaLabel,
        onClick: props.onClose
    }, cancelButtonText));
}