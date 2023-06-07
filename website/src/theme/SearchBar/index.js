import React, { useState, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import { useSearchPage } from '@docusaurus/theme-common/internal';
import { DocSearchButton, useDocSearchKeyboardEvents } from '@docsearch/react';
import { useAlgoliaContextualFacetFilters } from '@docusaurus/theme-search-algolia/client';
import Translate from '@docusaurus/Translate';
// import translations from '@theme/SearchTranslations';
import { DocSearchModal as Modal } from '../SearchModal/index';
import { useActivePluginAndVersion } from '@docusaurus/plugin-content-docs/lib/client/index';
let DocSearchModal = Modal;
function Hit({ hit, children }) {
  return <Link to={hit.url}>{children}</Link>;
}
function ResultsFooter({ state, onClose }) {
  const { generateSearchPageLink } = useSearchPage();
  return (
    <Link to={generateSearchPageLink(state.query)} onClick={onClose}>
      <Translate
        id="theme.SearchBar.seeAll"
        values={{ count: state.context.nbHits }}>
        {'See all {count} results'}
      </Translate>
    </Link>
  );
}
function mergeFacetFilters(f1, f2) {
  const normalize = (f) => (typeof f === 'string' ? [f] : f);
  return [...normalize(f1), ...normalize(f2)];
}
function DocSearch({ contextualSearch, externalUrlRegex, ...props }) {
  const { siteMetadata } = useDocusaurusContext();
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();
  const configFacetFilters = props.searchParameters?.facetFilters ?? [];
  const facetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
    mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
    configFacetFilters;
  // We let user override default searchParameters if she wants to
  const searchParameters = {
    ...props.searchParameters,
    facetFilters,
  };
  const { withBaseUrl } = useBaseUrlUtils();
  const history = useHistory();
  const searchContainer = useRef(null);
  const searchButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState(undefined);
  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve();
    }
    return Promise.all([
      import('../SearchModal/index'),
      import('@docsearch/react/style'),
      import('./styles.css'),
    ]).then(([{ DocSearchModal: Modal }]) => {
      DocSearchModal = Modal;
    });
  }, []);
  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => { });
    searchContainer.current = document.createElement('div');
    document.querySelector('.DocSearch-Input').focus()
    document.body.classList.add("search-active")
    document.body.classList.add("DocSearch--active")
    setIsOpen(true);
  }, [importDocSearchModalIfNeeded, setIsOpen]);
  const onClose = useCallback(() => {
    document.querySelector('.DocSearch-Input').blur()
    document.querySelector('.DocSearch-Input').value = '';
    setIsOpen(false);
    document.body.classList.remove("DocSearch--active")
    document.body.classList.remove("search-active")
    if (document.querySelector('.DocSearch-Reset'))
      document.querySelector('.DocSearch-Reset').innerHTML = ''
    if (props.elementId == "home-search" && document.querySelector('.DocSearch-Dropdown-Container')) {
      document.querySelector('.DocSearch-Dropdown-Container').innerHTML = ''
    }
    searchContainer.current?.remove();
  }, [setIsOpen]);
  const onInput = useCallback(
    (event) => {
      setInitialQuery(event.key);
    },
    [setInitialQuery],
  );
  const navigator = useRef({
    navigate({ itemUrl }) {
      // Algolia results could contain URL's from other domains which cannot
      // be served through history and should navigate with window.location
      if (isRegexpStringMatch(externalUrlRegex, itemUrl)) {
        window.location.href = itemUrl;
      } else {
        history.push(itemUrl);
      }
    },
  }).current;
  const transformItems = useRef((items) =>
    items.map((item) => {
      // If Algolia contains a external domain, we should navigate without
      // relative URL
      if (isRegexpStringMatch(externalUrlRegex, item.url)) {
        return item;
      }
      // We transform the absolute URL into a relative URL.
      const url = new URL(item.url);
      return {
        ...item,
        url: withBaseUrl(`${url.pathname}${url.hash}`),
      };
    }),
  ).current;
  const resultsFooterComponent = useMemo(
    () =>
      // eslint-disable-next-line react/no-unstable-nested-components
      (footerProps) =>
        <ResultsFooter {...footerProps} onClose={onClose} />,
    [onClose],
  );
  const transformSearchClient = useCallback(
    (searchClient) => {
      searchClient.addAlgoliaAgent(
        'docusaurus',
        siteMetadata.docusaurusVersion,
      );
      return searchClient;
    },
    [siteMetadata.docusaurusVersion],
  );
  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });
  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>
      <DocSearchModal
        autoFocus={props.autoFocus}
        onClose={onClose}
        onOpen={onOpen}
        initialScrollY={window.scrollY}
        initialQuery={initialQuery}
        navigator={navigator}
        transformItems={transformItems}
        hitComponent={Hit}
        transformSearchClient={transformSearchClient}
        {...(props.searchPagePath && {
          resultsFooterComponent,
        })}
        {...props}
        searchParameters={searchParameters}
        filters={'version:' + useActivePluginAndVersion().activeVersion.name}
        // placeholder={translations.placeholder}
        // translations={translations.modal}
      />
    </>
  );
}
export default function SearchBar(props) {
  const { siteConfig } = useDocusaurusContext();
  return <DocSearch {...siteConfig.themeConfig.algolia} elementId={props.elementId} autoFocus={props.autoFocus} />;
}
