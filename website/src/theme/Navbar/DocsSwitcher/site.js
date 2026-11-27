import { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ALL_VERSIONS } from './versions';

// Site-specific part of the docs switcher (this is the classic docs site, served under /learn).
// The AI docs site has its own copy of this file.
const DEFAULT_AI_DOCS_URL = 'https://docs.wavemaker.ai/';
const AI_DOCS_URL_BY_HOST = {
  'docs.wavemaker.ai': 'https://docs.wavemaker.ai/',
  'next-docs.wavemaker.ai': 'https://next-docs.wavemaker.ai/',
};

// This site is also served under /learn on the AI docs hosts, so link back to the host we are on.
// Everywhere else (docs.wavemaker.com, localhost) falls back to the default. The host is read after
// mount so the server-rendered HTML and the first client render stay identical.
function useAiDocsUrl() {
  const [url, setUrl] = useState(DEFAULT_AI_DOCS_URL);
  useEffect(() => {
    setUrl(
      AI_DOCS_URL_BY_HOST[window.location.hostname] ?? DEFAULT_AI_DOCS_URL,
    );
  }, []);
  return url;
}

export function useDocsSite() {
  const { pathname } = useLocation();
  const aiUrl = useAiDocsUrl();
  const base = useBaseUrl('/');
  // The v10.15 docs are the "v10.14" docs version, published under /v10.15/ (see docusaurus.config.js).
  const v10Root = useBaseUrl('v10.15/');
  const v10Home = useBaseUrl('v10.15/documentation-reference');
  const currentId = pathname.startsWith(v10Root) ? 'v10' : 'v11';
  return {
    current: ALL_VERSIONS.find((version) => version.id === currentId),
    hrefs: { v12: aiUrl, v11: base, v10: v10Home },
    isHome: pathname.replace(/\/+$/, '') === base.replace(/\/+$/, ''),
  };
}
