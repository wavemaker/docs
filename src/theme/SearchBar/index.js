/**
 * Custom SearchBar that extends the default Algolia DocSearch
 * Adds an "Ask AI" option within the search results
 */
import React, { useCallback, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DocSearchButton } from '@docsearch/react/button';
import { useDocSearchKeyboardEvents } from '@docsearch/react/useDocSearchKeyboardEvents';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import {
    isRegexpStringMatch,
    useSearchLinkCreator,
} from '@docusaurus/theme-common';
import {
    useAlgoliaContextualFacetFilters,
    useSearchResultUrlProcessor,
    mergeFacetFilters,
} from '@docusaurus/theme-search-algolia/client';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import translations from '@theme/SearchTranslations';

import ReactMarkdown from 'react-markdown';
import CodeBlock from '@theme/CodeBlock';

// Default API URL for docs-agent
const DEFAULT_API_URL = 'https://0fa5d0748468.ngrok-free.app';

// Global flag to prevent multiple DocSearch modals from opening
let globalModalOpen = false;

/**
 * Copy code block content to clipboard
 * This function will be added to the window object
 */
if (typeof window !== 'undefined') {
    window.copyCodeBlock = async function (id) {
        const codeBlock = document.getElementById(id);
        if (codeBlock) {
            const code = codeBlock.textContent;
            try {
                await navigator.clipboard.writeText(code);

                // Update button text temporarily
                const wrapper = codeBlock.closest('.code-block-wrapper');
                const copyBtn = wrapper?.querySelector('.copy-btn');
                const copyText = copyBtn?.querySelector('.copy-text');
                if (copyText) {
                    const originalText = copyText.textContent;
                    copyText.textContent = 'Copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyText.textContent = originalText;
                        copyBtn.classList.remove('copied');
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };
}

let DocSearchModal = null;

function importDocSearchModalIfNeeded() {
    if (DocSearchModal) {
        return Promise.resolve();
    }
    return Promise.all([
        import('@docsearch/react/modal'),
        import('@docsearch/react/style'),
        import('./styles.css'),
    ]).then(([{ DocSearchModal: Modal }]) => {
        DocSearchModal = Modal;
    });
}

function useNavigator({ externalUrlRegex }) {
    const history = useHistory();
    const [navigator] = useState(() => ({
        navigate(params) {
            if (isRegexpStringMatch(externalUrlRegex, params.itemUrl)) {
                window.location.href = params.itemUrl;
            } else {
                history.push(params.itemUrl);
            }
        },
    }));
    return navigator;
}

function useTransformSearchClient() {
    const {
        siteMetadata: { docusaurusVersion },
    } = useDocusaurusContext();
    return useCallback(
        (searchClient) => {
            searchClient.addAlgoliaAgent('docusaurus', docusaurusVersion);
            return searchClient;
        },
        [docusaurusVersion],
    );
}

function useTransformItems(props) {
    const processSearchResultUrl = useSearchResultUrlProcessor();
    const [transformItems] = useState(() => (items) =>
        props.transformItems
            ? props.transformItems(items)
            : items.map((item) => ({
                ...item,
                url: processSearchResultUrl(item.url),
            })),
    );
    return transformItems;
}

function Hit({ hit, children }) {
    return <Link to={hit.url}>{children}</Link>;
}

function ResultsFooter({ state, onClose }) {
    const createSearchLink = useSearchLinkCreator();
    return (
        <Link to={createSearchLink(state.query)} onClick={onClose}>
            <Translate
                id="theme.SearchBar.seeAll"
                values={{ count: state.context.nbHits }}>
                {'See all {count} results'}
            </Translate>
        </Link>
    );
}

function useSearchParameters({ contextualSearch, ...props }) {
    const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();
    const configFacetFilters = props.searchParameters?.facetFilters ?? [];
    const facetFilters = contextualSearch
        ? mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
        : configFacetFilters;
    return {
        ...props.searchParameters,
        facetFilters,
    };
}

/**
 * Ask AI Panel - Full modal takeover when activated
 */
/**
 * Ask AI Panel - Full modal takeover when activated
 */
function AskAIPanel({ query, apiUrl, onClose, isVisible, triggerSearch }) {
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sources, setSources] = useState([]);
    const [videos, setVideos] = useState([]);
    const [submittedQuery, setSubmittedQuery] = useState('');
    const [queryId, setQueryId] = useState(null);
    const [feedbackState, setFeedbackState] = useState(null); // 'helpful', 'unhelpful', null
    const [comment, setComment] = useState('');
    const [showComment, setShowComment] = useState(false);
    const [commentSubmitted, setCommentSubmitted] = useState(false);

    // Auto-search removed as per user request (manual trigger only)

    // Listen for manual trigger (e.g. Enter key)
    useEffect(() => {
        if (isVisible && triggerSearch > 0 && query && !isLoading) {
            handleAskAI();
        }
    }, [triggerSearch]);

    const handleAskAI = async () => {
        if (!query.trim() || isLoading) return;

        setSubmittedQuery(query.trim());
        setIsLoading(true);
        setResponse('');
        setSources([]);
        setVideos([]);
        setQueryId(null);
        setFeedbackState(null);
        setComment('');
        setShowComment(false);
        setCommentSubmitted(false);

        try {
            const res = await fetch(`${apiUrl}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: query.trim(),
                    stream: true,
                    include_sources: true
                }),
            });

            if (!res.ok) throw new Error(`API error: ${res.status}`);

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let fullResponse = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        try {
                            const data = JSON.parse(line.slice(6));
                            if (data.type === 'text') {
                                fullResponse += data.content;
                                setResponse(fullResponse);
                            } else if (data.type === 'sources') {
                                setSources(data.sources || []);
                            } else if (data.type === 'videos') {
                                setVideos(data.videos || []);
                            } else if (data.type === 'done') {
                                setQueryId(data.query_id);
                            }
                        } catch { }
                    }
                }
            }
        } catch (error) {
            setResponse(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const submitFeedback = async (helpful, feedbackComment = null) => {
        if (!queryId) return;

        try {
            await fetch(`${apiUrl}/api/analytics/feedback`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query_id: queryId,
                    helpful: helpful,
                    comment: feedbackComment
                }),
            });

            if (!feedbackComment) {
                setFeedbackState(helpful ? 'helpful' : 'unhelpful');
                // Commenting disabled as per user request
                // setShowComment(true); 
                setCommentSubmitted(true);
            } else {
                setCommentSubmitted(true);
                setShowComment(false);
            }
        } catch (error) {
            console.error('Failed to submit feedback:', error);
        }
    };

    const isHelpful = feedbackState === 'helpful';

    return (
        <div className="DocSearch-AskAI-Fullscreen">
            {/* Disclaimer */}
            <div className="DocSearch-AskAI-Disclaimer">
                Answers are generated with AI which can make mistakes. Verify responses.
            </div>

            {/* Content */}
            <div className="DocSearch-AskAI-Body">
                {/* New Query Prompt */}
                {query && query !== submittedQuery && !isLoading && (
                    <div className="DocSearch-AskAI-NewQuery">
                        <button className="DocSearch-AskAI-NewQueryBtn" onClick={handleAskAI}>
                            Ask "{query}" <span>↵</span>
                        </button>
                    </div>
                )}

                {!submittedQuery && !isLoading && (
                    <div className="DocSearch-AskAI-EmptyState">
                        <span>Ask the question above and then press Enter <kbd class="mx-0.5">↵</kbd> to send it.</span>
                    </div>
                )}

                {submittedQuery && <h2 className="DocSearch-AskAI-QueryTitle">{submittedQuery}</h2>}

                {/* {sources.length > 0 && (
                    <div className="DocSearch-AskAI-SearchInfo">
                        Searched for "{submittedQuery}" found {sources.length} results
                    </div>
                )} */}

                {isLoading && !response && (
                    <div className="DocSearch-AskAI-Loading">
                        <span></span><span></span><span></span>
                    </div>
                )}

                {response && (
                    <div className="DocSearch-AskAI-Content">
                        <ReactMarkdown
                            children={response.replace(/\[(\d+)\]/g, (match, id) => {
                                const index = parseInt(id, 10) - 1;
                                if (sources[index]) {
                                    return `[${match}](${sources[index].url})`;
                                }
                                return match;
                            })}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <CodeBlock language={match[1]} className={className}>
                                            {String(children).replace(/\n$/, '')}
                                        </CodeBlock>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                },
                                a({ node, children, href, ...props }) {
                                    return (
                                        <a
                                            href={href}
                                            onClick={(e) => {
                                                // If it's a relative link or same domain, treat as internal navigation
                                                // This covers the citation links we just generated
                                                const isInternal = href && (href.startsWith('/') || href.includes(window.location.host));
                                                if (isInternal) {
                                                    e.preventDefault();
                                                    onClose();
                                                    window.location.href = href;
                                                }
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            {...props}
                                        >
                                            {children}
                                        </a>
                                    );
                                },
                                table({ node, children, ...props }) {
                                    return <table className="md-table" {...props}>{children}</table>;
                                },
                                blockquote({ node, children, ...props }) {
                                    return <blockquote>{children}</blockquote>;
                                }
                            }}
                        />
                    </div>
                )}

                {sources.length > 0 && (
                    <div className="DocSearch-AskAI-Sources">
                        <strong>Sources:</strong>
                        <div className="DocSearch-AskAI-SourceCards">
                            {sources.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    className="DocSearch-AskAI-SourceCard"
                                    title={s.title}
                                    onClick={(e) => { e.preventDefault(); onClose(); window.location.href = s.url; }}
                                >
                                    <span className="DocSearch-AskAI-SourceCard-Number">[{i + 1}]</span>
                                    <span className="DocSearch-AskAI-SourceCard-Title">{s.title}</span>
                                    <span className="DocSearch-AskAI-SourceCard-Arrow">→</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {videos.length > 0 && (
                    <div className="DocSearch-AskAI-Videos">
                        <strong>Related Videos:</strong>
                        <div className="DocSearch-AskAI-VideoCards">
                            {videos.map((v, i) => (
                                <a
                                    key={i}
                                    href={v.url}
                                    className="DocSearch-AskAI-VideoCard"
                                    title={v.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg className="DocSearch-AskAI-VideoCard-Icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V15L22 19V5L18 9V6C18 4.9 17.1 4 16 4H4ZM4 6H16V18H4V6Z" />
                                    </svg>
                                    <span className="DocSearch-AskAI-VideoCard-Title">{v.title}</span>
                                    <span className="DocSearch-AskAI-VideoCard-Play">▶</span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {!isLoading && response && queryId && (
                    <div className="DocSearch-AskAI-Feedback">
                        <div className="DocSearch-AskAI-FeedbackLabel">Was this answer helpful?</div>
                        <div className="DocSearch-AskAI-FeedbackButtons">
                            <button
                                className={`DocSearch-AskAI-FeedbackBtn ${feedbackState === 'helpful' ? 'active' : ''}`}
                                onClick={() => submitFeedback(true)}
                                disabled={feedbackState !== null}
                                title="Helpful"
                            >
                                👍
                            </button>
                            <button
                                className={`DocSearch-AskAI-FeedbackBtn ${feedbackState === 'unhelpful' ? 'active' : ''}`}
                                onClick={() => submitFeedback(false)}
                                disabled={feedbackState !== null}
                                title="Not helpful"
                            >
                                👎
                            </button>
                        </div>

                        {commentSubmitted && (
                            <div className="DocSearch-AskAI-FeedbackMessage">
                                Thanks for your feedback!
                            </div>
                        )}
                    </div>
                )}

                {showComment && (
                    <div className="DocSearch-AskAI-Comment">
                        <textarea
                            className="DocSearch-AskAI-CommentInput"
                            placeholder="Optional: Tell us more..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            autoFocus
                        />
                        <button
                            className="DocSearch-AskAI-CommentSubmit"
                            onClick={() => submitFeedback(isHelpful, comment)}
                        >
                            Send
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}

        </div>
    );
}

/**
 * Custom Modal Wrapper that adds Ask AI
 */
function CustomDocSearchModal({ onClose, apiUrl, ...props }) {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState('search'); // 'search' | 'ask-ai'
    const [triggerSearch, setTriggerSearch] = useState(0);

    // Listen for query changes from DocSearch
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const input = document.querySelector('.DocSearch-Input');
            if (input && input.value !== query) {
                setQuery(input.value);
            }
        });

        const container = document.querySelector('.DocSearch-Container');
        if (container) {
            observer.observe(container, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }

        // Also listen for input events
        const handleInput = (e) => {
            if (e.target.classList.contains('DocSearch-Input')) {
                setQuery(e.target.value);
            }
        };

        const handleKeyDown = (e) => {
            if (e.target.classList.contains('DocSearch-Input') && e.key === 'Enter') {
                if (activeTab === 'ask-ai') {
                    // Prevent DocSearch form submission
                    e.preventDefault();
                    e.stopPropagation();
                    setTriggerSearch(prev => prev + 1);
                }
            }
        };

        document.addEventListener('input', handleInput);
        document.addEventListener('keydown', handleKeyDown, true); // Capture phase to prevent DocSearch default

        return () => {
            observer.disconnect();
            document.removeEventListener('input', handleInput);
            document.removeEventListener('keydown', handleKeyDown, true);
        };
    }, [query, activeTab]);

    return (
        <>
            <DocSearchModal onClose={onClose} {...props} />
            {/* Inject Tabs into Header */}
            <SearchTabsPortal
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {/* Inject Ask AI panel via portal */}
            <AskAIPortal
                query={query}
                apiUrl={apiUrl}
                onClose={onClose}
                activeTab={activeTab}
                triggerSearch={triggerSearch}
            />
        </>
    );
}

/**
 * Portal to inject tabs into the Search Header
 */
function SearchTabsPortal({ activeTab, setActiveTab }) {
    const [container, setContainer] = useState(null);

    useEffect(() => {
        const ensureContainer = () => {
            const form = document.querySelector('.DocSearch-Form');
            if (!form) return;

            // Check if our container exists
            let tabsContainer = document.querySelector('.DocSearch-Tabs-Container');

            if (!tabsContainer) {
                tabsContainer = document.createElement('div');
                tabsContainer.className = 'DocSearch-Tabs-Container';
                // Append after the form (search input) in the header
                form.parentElement.appendChild(tabsContainer);
            }

            setContainer(tabsContainer);
        };

        // Retry a few times as Modal renders
        const interval = setInterval(ensureContainer, 50);
        setTimeout(() => clearInterval(interval), 2000);

        return () => clearInterval(interval);
    }, []);

    if (!container) return null;

    return createPortal(
        <div className="DocSearch-Tabs">
            <button
                className={`DocSearch-Tab ${activeTab === 'search' ? 'DocSearch-Tab--active' : ''}`}
                onClick={() => setActiveTab('search')}
            >
                Search
            </button>
            <button
                className={`DocSearch-Tab ${activeTab === 'ask-ai' ? 'DocSearch-Tab--active' : ''}`}
                onClick={() => setActiveTab('ask-ai')}
            >
                <svg className="DocSearch-Tab-Icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5L10 2Z" />
                    <path d="M18 12L19 15L22 16L19 17L18 20L17 17L14 16L17 15L18 12Z" />
                </svg>
                Ask AI
            </button>
        </div>,
        container
    );
}

/**
 * Portal to inject Ask AI into DocSearch results
 */
function AskAIPortal({ query, apiUrl, onClose, activeTab, triggerSearch }) {
    const [container, setContainer] = useState(null);
    const containerRef = useRef(null);

    // Handle visibility of Search Dropdown vs AI Panel
    useEffect(() => {
        const dropdown = document.querySelector('.DocSearch-Dropdown');
        if (dropdown) {
            if (activeTab === 'ask-ai') {
                dropdown.style.display = 'none';
            } else {
                dropdown.style.display = '';
            }
        }

        // Also handle footer visibility
        const footer = document.querySelector('.DocSearch-Footer');
        if (footer) {
            if (activeTab === 'ask-ai') {
                footer.style.display = 'none';
            } else {
                footer.style.display = '';
            }
        }
    }, [activeTab]);

    useEffect(() => {
        // Function to find or create the Ask AI container
        const ensureContainer = () => {
            // We inject into the .DocSearch-Modal to be a sibling of the dropdown
            // This allows us to use flexbox to position it correctly below the header
            const modalContent = document.querySelector('.DocSearch-Modal');
            if (!modalContent) return;

            let askAiContainer = document.querySelector('.DocSearch-AskAI-Container');

            if (!askAiContainer) {
                askAiContainer = document.createElement('div');
                askAiContainer.className = 'DocSearch-AskAI-Container';

                // Find where to insert - ideally after the dropdown (or where it would be)
                const dropdown = document.querySelector('.DocSearch-Dropdown');

                if (dropdown && dropdown.nextSibling) {
                    modalContent.insertBefore(askAiContainer, dropdown.nextSibling);
                } else {
                    modalContent.appendChild(askAiContainer);
                }
            }

            if (containerRef.current !== askAiContainer) {
                containerRef.current = askAiContainer;
                setContainer(askAiContainer);
            }
        };

        // Initial check
        ensureContainer();
        const interval = setInterval(ensureContainer, 100);
        setTimeout(() => clearInterval(interval), 2000);

        return () => clearInterval(interval);
    }, []);

    if (!container) return null;

    // unless we want persistence. Let's keep it mounted but hidden for persistence.
    return createPortal(
        <div style={{ display: activeTab === 'ask-ai' ? 'flex' : 'none', flex: 1, flexDirection: 'column', height: '100%', minHeight: 0, overflow: 'hidden' }}>
            <AskAIPanel
                query={query}
                apiUrl={apiUrl}
                onClose={onClose}
                isVisible={activeTab === 'ask-ai'}
                triggerSearch={triggerSearch}
            />
        </div>,
        container
    );
}

function DocSearch({ externalUrlRegex, ...props }) {
    const { siteConfig } = useDocusaurusContext();
    const apiUrl = siteConfig?.customFields?.docsAgentApiUrl || DEFAULT_API_URL;

    const navigator = useNavigator({ externalUrlRegex });
    const searchParameters = useSearchParameters({ ...props });
    const transformItems = useTransformItems(props);
    const transformSearchClient = useTransformSearchClient();
    const searchContainer = useRef(null);
    const searchButtonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [initialQuery, setInitialQuery] = useState(undefined);

    const prepareSearchContainer = useCallback(() => {
        if (!searchContainer.current) {
            const divElement = document.createElement('div');
            searchContainer.current = divElement;
            document.body.insertBefore(divElement, document.body.firstChild);
        }
    }, []);

    const openModal = useCallback(() => {
        // Prevent opening if another modal is already open (multiple SearchBar instances)
        if (globalModalOpen) return;
        globalModalOpen = true;
        prepareSearchContainer();
        importDocSearchModalIfNeeded().then(() => setIsOpen(true));
    }, [prepareSearchContainer]);

    const closeModal = useCallback(() => {
        globalModalOpen = false;
        setIsOpen(false);
        searchButtonRef.current?.focus();
        setInitialQuery(undefined);
    }, []);

    const handleInput = useCallback(
        (event) => {
            if (event.key === 'f' && (event.metaKey || event.ctrlKey)) {
                return;
            }
            event.preventDefault();
            setInitialQuery(event.key);
            openModal();
        },
        [openModal],
    );

    const resultsFooterComponent = useCallback(
        ({ state }) => <ResultsFooter state={state} onClose={closeModal} />,
        [closeModal],
    );

    useDocSearchKeyboardEvents({
        isOpen,
        onOpen: openModal,
        onClose: closeModal,
        onInput: handleInput,
        searchButtonRef,
    });

    return (
        <>
            <Head>
                <link
                    rel="preconnect"
                    href={`https://${props.appId}-dsn.algolia.net`}
                    crossOrigin="anonymous"
                />
            </Head>

            <DocSearchButton
                onTouchStart={importDocSearchModalIfNeeded}
                onFocus={importDocSearchModalIfNeeded}
                onMouseOver={importDocSearchModalIfNeeded}
                onClick={openModal}
                ref={searchButtonRef}
                translations={props.translations?.button ?? translations.button}
            />

            {isOpen &&
                DocSearchModal &&
                searchContainer.current &&
                createPortal(
                    <CustomDocSearchModal
                        onClose={closeModal}
                        apiUrl={apiUrl}
                        initialScrollY={window.scrollY}
                        initialQuery={initialQuery}
                        navigator={navigator}
                        transformItems={transformItems}
                        hitComponent={Hit}
                        transformSearchClient={transformSearchClient}
                        {...(props.searchPagePath && { resultsFooterComponent })}
                        {...props}
                        translations={props.translations?.modal ?? translations.modal}
                        searchParameters={searchParameters}
                    />,
                    searchContainer.current,
                )}
        </>
    );
}

export default function SearchBar() {
    const { siteConfig } = useDocusaurusContext();
    return <DocSearch {...siteConfig.themeConfig.algolia} />;
}
