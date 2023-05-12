import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
import styles from './styles.module.css';
function TagsRow(props) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        'row margin-bottom--sm',
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}
function Feedback(props) {
  let url = "https://github.com/wavemaker/docs/issues/new?title=&amp;body=%0A%0A%5BEnter%20feedback%20here%5D%0A%0A%0A---%0A%23%23%23%23%20Document%20Details%0A*%20Document URL%3A%20" + props.url.replace('../learn/', '') + "%0A*%20Document PATH%3A%20" + props.url.replace('../learn/', '').slice(props.url.indexOf('/learn/'), props.url.length) + "%0A";
  return (
    <div className='feedback-container margin-top--lg'>
      <a className="github-link" aria-label="Send feedback about this page" data-bi-name="create-issue-on-github" href={url}>
        <img className="submit-btn" src='/learn/img/submit_btn.svg'></img>
        <span> Submit Feedback for This Page</span>
      </a>
    </div>
  )
}
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <React.Fragment>
      <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>
        <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}<Feedback url={editUrl} /></div>
        
        <div className={clsx('col', styles.lastUpdated)}>
          {(lastUpdatedAt || lastUpdatedBy) && (
            <LastUpdated
              lastUpdatedAt={lastUpdatedAt}
              formattedLastUpdatedAt={formattedLastUpdatedAt}
              lastUpdatedBy={lastUpdatedBy}
            />
          )}
        </div>
      </div>

    </React.Fragment>
  );
}
export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags } =
    metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  if (!canDisplayFooter) {
    return null;
  }
  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      
    </footer>
  );
}
