import React from 'react';
import Layout from '@theme/Layout';
import metricsData from '@site/scripts/metrics.json';
import styles from './styles.module.css';

export default function MetricsPage() {
  const allPendingDocs = metricsData.noAuthorDocs || [];
  const allMigratedDocs = metricsData.authorDocs['WaveMaker'] || [];
  const allInProgressDocs = metricsData.authorDocs['Author Name'] || [];
  const completedAuthors = Object.keys(metricsData.authorDocs).filter(
    author => author !== 'WaveMaker' && author !== 'Author Name',
  );
  const allCompletedDocs = completedAuthors.flatMap(author => metricsData.authorDocs[author]);

  // Helper to split docs into Core and Guide
  const filterByPath = (docs, isGuide) => docs.filter(doc => doc.path.startsWith('guide/') === isGuide);

  const coreMetrics = {
    pending: filterByPath(allPendingDocs, false),
    migrated: filterByPath(allMigratedDocs, false),
    inProgress: filterByPath(allInProgressDocs, false),
    completed: filterByPath(allCompletedDocs, false),
  };

  const guideMetrics = {
    pending: filterByPath(allPendingDocs, true),
    migrated: filterByPath(allMigratedDocs, true),
    inProgress: filterByPath(allInProgressDocs, true),
    completed: filterByPath(allCompletedDocs, true),
  };

  const coreNewDocsCount = coreMetrics.inProgress.length + coreMetrics.completed.length;
  const guideNewDocsCount = guideMetrics.inProgress.length + guideMetrics.completed.length;


  const DocTable = ({ docs }) => (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Filename</th>
          <th>Relative Path</th>
        </tr>
      </thead>
      <tbody>
        {docs.map((doc, index) => (
          <tr key={index}>
            <td>{doc.name}</td>
            <td>
              <code>{doc.path}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const Accordion = ({ title, docs, count }) => (
    <details className={styles.accordion}>
      <summary className={styles.accordionSummary}>
        <span>
          {title} ({count || docs.length})
        </span>
        <span className={styles.arrow}>▼</span>
      </summary>
      <div className={styles.accordionContent}>
        <DocTable docs={docs} />
      </div>
    </details>
  );

  return (
    <Layout
      title="Documentation Metrics"
      description="Overview of documentation migration and author contributions"
    >
      <div className={styles.metricsContainer}>
        <header className={styles.header}>
          <h1>Documentation Metrics</h1>
          <p>Real-time audit of our documentation status</p>
        </header>
        <h2 className={styles.sectionTitle}>Core Docs</h2>
        <section className={styles.topRow}>
          <div className={`${styles.card} ${styles.newDocsCard}`}>
            <div className={styles.cardTitle}>New Docs</div>
            <div className={styles.cardValue}>{coreNewDocsCount}</div>
            <div className={styles.internalGrid}>
              <div className={styles.internalBox}>
                <div className={styles.internalTitle}>In Progress</div>
                <div className={styles.internalValue}>{coreMetrics.inProgress.length}</div>
              </div>
              <div className={styles.internalBox}>
                <div className={styles.internalTitle}>Completed</div>
                <div className={styles.internalValue}>{coreMetrics.completed.length}</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Migrated</div>
            <div className={styles.cardValue}>{coreMetrics.migrated.length}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Pending</div>
            <div className={styles.cardValue}>{coreMetrics.pending.length}</div>
          </div>
        </section>
        <h2 className={styles.sectionTitle}>Other Migrated Docs</h2>
        <section className={styles.secondRow}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Feature Announcements</div>
            <div className={styles.cardValue}>{metricsData.featureAnnouncementCount || 0}</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Blogs</div>
            <div className={styles.cardValue}>{metricsData.blogCount || 0}</div>
          </div>
        </section>
        <h2 className={`${styles.sectionTitle} ${styles.guideSectionTitle}`}>Guides</h2>
        <section className={styles.topRow}>
          <div className={`${styles.card} ${styles.guideCard} ${styles.guideNewDocsCard}`}>
            <div className={styles.cardTitle}>New Docs</div>
            <div className={styles.cardValue}>{guideNewDocsCount}</div>
            <div className={styles.internalGrid}>
              <div className={styles.internalBox}>
                <div className={styles.internalTitle}>In Progress</div>
                <div className={styles.internalValue}>{guideMetrics.inProgress.length}</div>
              </div>
              <div className={styles.internalBox}>
                <div className={styles.internalTitle}>Completed</div>
                <div className={styles.internalValue}>{guideMetrics.completed.length}</div>
              </div>
            </div>
          </div>
          <div className={`${styles.card} ${styles.guideCard}`}>
            <div className={styles.cardTitle}>Migrated</div>
            <div className={styles.cardValue}>{guideMetrics.migrated.length}</div>
          </div>
          <div className={`${styles.card} ${styles.guideCard}`}>
            <div className={styles.cardTitle}>Pending</div>
            <div className={styles.cardValue}>{guideMetrics.pending.length}</div>
          </div>
        </section>
        <h2 className={styles.sectionTitle}>Detailed Breakdown</h2>
        <div className={styles.accordionSection}>
          <Accordion title="Pending Docs" docs={allPendingDocs} />
          <Accordion title="Migrated Docs" docs={allMigratedDocs} />
          <Accordion title="In Progress Docs" docs={allInProgressDocs} />
          <Accordion title="Completed Docs" docs={allCompletedDocs} />
        </div>

        <h2 className={styles.sectionTitle}>Docs by Authors</h2>
        <div className={styles.accordionSection}>
          {Object.keys(metricsData.authorDocs)
            .sort()
            .map(author => (
              <Accordion key={author} title={author} docs={metricsData.authorDocs[author]} />
            ))}
        </div>
      </div>
    </Layout>
  );
}
