import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import styles from './styles.module.css';
import ExpandButton from './ExpandButton';
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const [showDesktopTOC, setShowDesktopTOC] = React.useState(false);
  const toggeleShowDesktopTOC = ()=>{
    setShowDesktopTOC(prev => !prev);
  };
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol, showDesktopTOC? styles.docItemColShowDesktop:styles.docItemColDontShowDesktop)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop  && (
        <>
          <div className={showDesktopTOC && 'col col--3'}>
            <div style={{position:'sticky',top:"calc(var(--ifm-navbar-height) + 1rem)"}}>
              {showDesktopTOC && docTOC.desktop}
              <ExpandButton toggeleShowDesktopTOC={toggeleShowDesktopTOC} showDesktopTOC={showDesktopTOC} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
