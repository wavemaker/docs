var _excluded = ["footer", "searchBox"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { createAutocomplete } from '@algolia/autocomplete-core';
import React from 'react';
import { MAX_QUERY_SIZE } from '@docsearch/react/dist/esm/constants';
import { Footer } from '@docsearch/react/dist/esm/Footer';
import { Hit } from '@docsearch/react/dist/esm/Hit';
import { ScreenState } from '../SearchPage/ScreenState';
import { SearchBox } from '../SearchBox';
import { createStoredSearches } from '@docsearch/react/dist/esm/stored-searches';
import { useSearchClient } from '@docsearch/react/dist/esm/useSearchClient';
import { useTouchEvents } from '@docsearch/react/dist/esm/useTouchEvents';
import { useTrapFocus } from '@docsearch/react/dist/esm/useTrapFocus';
import { groupBy, identity, noop, removeHighlightTags } from '@docsearch/react/dist/esm/utils';
export function DocSearchModal(_ref) {
    var appId = _ref.appId,
        filters = _ref.filters,
        autoFocus = _ref.autoFocus,
        _ref$onOpen = _ref.onOpen,
        onOpen = _ref$onOpen === void 0 ? noop : _ref$onOpen,
        apiKey = _ref.apiKey,
        indexName = _ref.indexName,
        _ref$placeholder = _ref.placeholder,
        placeholder = _ref$placeholder === void 0 ? 'Search docs' : _ref$placeholder,
        searchParameters = _ref.searchParameters,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? noop : _ref$onClose,
        _ref$transformItems = _ref.transformItems,
        transformItems = _ref$transformItems === void 0 ? identity : _ref$transformItems,
        _ref$hitComponent = _ref.hitComponent,
        hitComponent = _ref$hitComponent === void 0 ? Hit : _ref$hitComponent,
        _ref$resultsFooterCom = _ref.resultsFooterComponent,
        resultsFooterComponent = _ref$resultsFooterCom === void 0 ? function () {
            return null;
        } : _ref$resultsFooterCom,
        navigator = _ref.navigator,
        _ref$initialScrollY = _ref.initialScrollY,
        initialScrollY = _ref$initialScrollY === void 0 ? 0 : _ref$initialScrollY,
        _ref$transformSearchC = _ref.transformSearchClient,
        transformSearchClient = _ref$transformSearchC === void 0 ? identity : _ref$transformSearchC,
        _ref$disableUserPerso = _ref.disableUserPersonalization,
        disableUserPersonalization = _ref$disableUserPerso === void 0 ? false : _ref$disableUserPerso,
        _ref$initialQuery = _ref.initialQuery,
        initialQueryFromProp = _ref$initialQuery === void 0 ? '' : _ref$initialQuery,
        _ref$translations = _ref.translations,
        translations = _ref$translations === void 0 ? {} : _ref$translations,
        getMissingResultsUrl = _ref.getMissingResultsUrl;

    var footerTranslations = translations.footer,
        searchBoxTranslations = translations.searchBox,
        screenStateTranslations = _objectWithoutProperties(translations, _excluded);

    var _React$useState = React.useState({
        query: '',
        collections: [],
        completion: null,
        context: {},
        isOpen: false,
        activeItemId: null,
        status: 'idle'
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        state = _React$useState2[0],
        setState = _React$useState2[1];

    var containerRef = React.useRef(null);
    var modalRef = React.useRef(null);
    var formElementRef = React.useRef(null);
    var dropdownRef = React.useRef(null);
    var inputRef = React.useRef(null);
    var snippetLength = React.useRef(10);
    var initialQueryFromSelection = React.useRef(typeof window !== 'undefined' ? window.getSelection().toString().slice(0, MAX_QUERY_SIZE) : '').current;
    var initialQuery = React.useRef(initialQueryFromProp || initialQueryFromSelection).current;
    var searchClient = useSearchClient(appId, apiKey, transformSearchClient);
    var favoriteSearches = React.useRef(createStoredSearches({
        key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(indexName),
        limit: 5
    })).current;
    var saveRecentSearch = React.useCallback(function saveRecentSearch(item) {
        if (disableUserPersonalization) {
            return;
        } // We don't store `content` record, but their parent if available.


        var search = item.type === 'content' ? item.__docsearch_parent : item; // We save the recent search only if it's not favorited.

        if (search && favoriteSearches.getAll().findIndex(function (x) {
            return x.objectID === search.objectID;
        }) === -1) {
            let output = search.hierarchy["lvl1"];
            if (typeof window !== 'undefined') {
                if (localStorage.getItem('recentSearch')) {
                    let recentSearch = JSON.parse(localStorage.getItem('recentSearch'));
                    if (!recentSearch.includes(output)) {
                        if (recentSearch.length == 1) {
                            recentSearch.push(output);
                        }
                        else if (recentSearch.length == 2) {
                            recentSearch.push(output);
                            recentSearch.shift();
                        }
                        localStorage.setItem('recentSearch', JSON.stringify(recentSearch));
                    }
                }
                else {
                    localStorage.setItem('recentSearch', JSON.stringify([output]));
                }
            }
        }
    }, [favoriteSearches, disableUserPersonalization]);
    var autocomplete = React.useMemo(function () {
        return createAutocomplete({
            id: 'docsearch',
            defaultActiveItemId: 0,
            placeholder: placeholder,
            openOnFocus: true,
            initialState: {
                query: initialQuery,
                context: {
                    searchSuggestions: []
                }
            },
            navigator: navigator,
            onStateChange: function onStateChange(props) {
                setState(props.state);
                if (!props.prevState.isOpen && props.state.query != '') {
                    onOpen();
                    document.querySelector('.DocSearch-Input').value = props.state.query;
                }
                if (!props.state.isOpen && props.prevState.isOpen) {
                    setState({
                        query: '',
                        collections: [],
                        completion: null,
                        context: {},
                        isOpen: false,
                        activeItemId: null,
                        status: 'idle'
                    })
                    document.querySelector('.DocSearch-Input').value = '';
                }
            },
            getSources: function getSources(_ref2) {
                var query = _ref2.query,
                    sourcesState = _ref2.state,
                    setContext = _ref2.setContext,
                    setStatus = _ref2.setStatus;

                if (!query) {
                    if (disableUserPersonalization) {
                        return [];
                    }
                    return [];
                }

                return searchClient.search([{
                    query: query,
                    indexName: indexName,
                    hitsPerPage: 5,
                    filters: filters
                }]).catch(function (error) {
                    // The Algolia `RetryError` happens when all the servers have
                    // failed, meaning that there's no chance the response comes
                    // back. This is the right time to display an error.
                    // See https://github.com/algolia/algoliasearch-client-javascript/blob/2ffddf59bc765cd1b664ee0346b28f00229d6e12/packages/transporter/src/errors/createRetryError.ts#L5
                    if (error.name === 'RetryError') {
                        setStatus('error');
                    }

                    throw error;
                }).then(function (_ref7) {
                    var results = _ref7.results;
                    var _results$ = results[0],
                        hits = _results$.hits,
                        nbHits = _results$.nbHits;
                    var sources = groupBy(hits, function (hit) {
                        return removeHighlightTags(hit);
                    }); // We store the `lvl0`s to display them as search suggestions
                    // in the "no results" screen.

                    if (sourcesState.context.searchSuggestions.length < Object.keys(sources).length) {
                        setContext({
                            searchSuggestions: Object.keys(sources)
                        });
                    }

                    setContext({
                        nbHits: nbHits
                    });
                    return Object.values(sources).map(function (items, index) {
                        return {
                            sourceId: "hits".concat(index),
                            onSelect: function onSelect(_ref8) {
                                var item = _ref8.item,
                                    event = _ref8.event;
                                saveRecentSearch(item);

                                if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
                                    onClose();
                                }
                            },
                            getItemUrl: function getItemUrl(_ref9) {
                                var item = _ref9.item;
                                return item.url;
                            },
                            getItems: function getItems() {
                                return Object.values(groupBy(items, function (item) {
                                    return item.hierarchy.lvl1;
                                })).map(transformItems).map(function (groupedHits) {
                                    return groupedHits.map(function (item) {
                                        return _objectSpread(_objectSpread({}, item), {}, {
                                            __docsearch_parent: item.type !== 'lvl1' && groupedHits.find(function (siblingItem) {
                                                return siblingItem.type === 'lvl1' && siblingItem.hierarchy.lvl1 === item.hierarchy.lvl1;
                                            })
                                        });
                                    });
                                }).flat();
                            }
                        };
                    });
                });
            }
        });
    }, [indexName, searchParameters, searchClient, onClose, favoriteSearches, saveRecentSearch, initialQuery, placeholder, navigator, transformItems, disableUserPersonalization]);
    var getEnvironmentProps = autocomplete.getEnvironmentProps,
        getRootProps = autocomplete.getRootProps,
        refresh = autocomplete.refresh;
    useTouchEvents({
        getEnvironmentProps: getEnvironmentProps,
        panelElement: dropdownRef.current,
        formElement: formElementRef.current,
        inputElement: inputRef.current
    });
    useTrapFocus({
        container: containerRef.current
    });
    React.useEffect(function () {
        var isMobileMediaQuery = window.matchMedia('(max-width: 768px)');

        if (isMobileMediaQuery.matches) {
            snippetLength.current = 5;
        }
    }, []);
    React.useEffect(function () {
        if (dropdownRef.current) {
            dropdownRef.current.scrollTop = 0;
        }
    }, [state.query]); // We don't focus the input when there's an initial query (i.e. Selection
    // Search) because users rather want to see the results directly, without the
    // keyboard appearing.
    // We therefore need to refresh the autocomplete instance to load all the
    // results, which is usually triggered on focus.
    React.useEffect(function () {
        inputRef.current.value = state.query;
    }, [state])
    React.useEffect(function () {
        if (initialQuery.length > 0) {
            refresh();

            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }, [initialQuery, refresh]); // We rely on a CSS property to set the modal height to the full viewport height
    // because all mobile browsers don't compute their height the same way.
    // See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

    React.useEffect(function () {
        function setFullViewportHeight() {
            if (modalRef.current) {
                var vh = window.innerHeight * 0.01;
                modalRef.current.style.setProperty('--docsearch-vh', "".concat(vh, "px"));
            }
        }

        setFullViewportHeight();
        window.addEventListener('resize', setFullViewportHeight);
        return function () {
            window.removeEventListener('resize', setFullViewportHeight);
        };
    }, []);
    return React.createElement("div", _extends({
        ref: containerRef,
        style: { width: '100%', height: '100%' }
    }, {
        onMouseDown: function onMouseDown(event) {
            if (event.target === event.currentTarget) {
                onClose();
            }
        }
    }), /*#__PURE__*/React.createElement("div", {
        className: "DocSearch-Modal",
        ref: modalRef
    }, /*#__PURE__*/React.createElement("header", {
        className: "DocSearch-SearchBar",
        ref: formElementRef
    }, /*#__PURE__*/React.createElement(SearchBox, _extends({}, autocomplete, {
        state: state,
        autoFocus: autoFocus,
        inputRef: inputRef,
        isFromSelection: Boolean(initialQuery) && initialQuery === initialQueryFromSelection,
        translations: searchBoxTranslations,
        onClose: onClose
    }))), /*#__PURE__*/React.createElement("div", {
        className: "DocSearch-Dropdown",
        ref: dropdownRef
    }, /*#__PURE__*/React.createElement(ScreenState, _extends({}, autocomplete, {
        indexName: indexName,
        state: state,
        isOpen: _ref.isOpen,
        hitComponent: hitComponent,
        resultsFooterComponent: resultsFooterComponent,
        disableUserPersonalization: disableUserPersonalization,
        favoriteSearches: favoriteSearches,
        inputRef: inputRef,
        translations: screenStateTranslations,
        getMissingResultsUrl: getMissingResultsUrl,
        onItemClick: function onItemClick(item) {
            saveRecentSearch(item);
            onClose();
        }
    })))));
}