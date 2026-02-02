import React, { useState, useEffect, useMemo } from 'react';
import Layout from '@theme/Layout';
import { versions, versionDataMap } from '../../../data/tech-stack-data/versionDataMap';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useLocation, useHistory } from '@docusaurus/router';
import { TabsWrapper, TabItem } from '../../components/MDXComponents/LayoutComponents/Tabs';

function formatVersion(v) {
  return 'v' + v.replace(/-/g, '.');
}

export default function TechStackPage() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const initialVersion = query.get('v') || versions[0];
  
  const [selectedVersion, setSelectedVersion] = useState(initialVersion);
  const [sections, setSections] = useState(null);
  const [prevSections, setPrevSections] = useState(null);
  const [previousVersion, setPreviousVersion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const v = new URLSearchParams(location.search).get('v') || versions[0];
    if (v !== selectedVersion) {
      setSelectedVersion(v);
    }
  }, [location.search]);

  useEffect(() => {
    function loadData() {
      setLoading(true);
      try {
        const currentData = versionDataMap[selectedVersion];
        if (!currentData) {
          throw new Error(`Version ${selectedVersion} not found`);
        }
        setSections(currentData);

        const currentIndex = versions.indexOf(selectedVersion);
        const prevV = currentIndex < versions.length - 1 ? versions[currentIndex + 1] : null;
        setPreviousVersion(prevV);

        if (prevV) {
          const prevData = versionDataMap[prevV];
          setPrevSections(prevData || null);
        } else {
          setPrevSections(null);
        }
      } catch (error) {
        console.error('Error loading tech stack data:', error);
        setSections(null);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [selectedVersion]);

  const handleVersionChange = (e) => {
    const newV = e.target.value;
    setSelectedVersion(newV);
    const newParams = new URLSearchParams(location.search);
    newParams.set('v', newV);
    history.push({ search: newParams.toString() });
  };

  // Create a lookup map for previous version libraries
  const prevLibMap = useMemo(() => {
    const map = {};
    if (prevSections) {
      Object.entries(prevSections).forEach(([category, subCats]) => {
        Object.entries(subCats).forEach(([subCat, items]) => {
          items.forEach(item => {
            const key = `${category}|${subCat}|${item.name}`;
            map[key] = item.version;
          });
        });
      });
    }
    return map;
  }, [prevSections]);

  const hasVersionChanged = (category, subCat, name, currentVersion) => {
    if (!previousVersion) return false;
    const key = `${category}|${subCat}|${name}`;
    const prevVersion = prevLibMap[key];
    return prevVersion && prevVersion !== currentVersion;
  };

  if (loading) {
    return (
      <Layout title="Tech Stack">
        <div className="container margin-vert--lg">
          <h1>Loading...</h1>
        </div>
      </Layout>
    );
  }

  if (!sections) {
    return (
      <Layout title="Tech Stack">
        <div className="container margin-vert--lg">
          <h1>Version not found</h1>
          <p>The selected version <strong>{selectedVersion}</strong> could not be loaded.</p>
          <Link to="/tech-stack">Back to latest</Link>
        </div>
      </Layout>
    );
  }

  // Filter categories and subcategories based on visibility rules
  const visibleCategories = Object.entries(sections).filter(([category, subCats]) => {
    // Check if there's at least one non-empty subcategory
    return Object.values(subCats).some(items => items && items.length > 0);
  });

  return (
    <Layout title="Tech Stack" description="WaveMaker Tech Stack versions and libraries">
      <main className="container margin-vert--lg">
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Tech Stack</h1>
            <p className={styles.subtitle}>Detailed information about the frameworks and libraries used in WaveMaker.</p>
          </div>
          <div className={styles.versionSelector}>
            <label htmlFor="version-select">Select Version:</label>
            <select
              id="version-select"
              value={selectedVersion}
              onChange={handleVersionChange}
              className={styles.select}
            >
              {versions.map((v) => (
                <option key={v} value={v}>
                  {formatVersion(v)}
                </option>
              ))}
            </select>
            {previousVersion && (
              <p className={styles.compareNote}>
                Comparing with <strong>{formatVersion(previousVersion)}</strong>
              </p>
            )}
          </div>
        </div>

        <div className={styles.content}>
          <TabsWrapper>
            {visibleCategories.map(([category, subCats], cIdx) => (
              <TabItem key={cIdx} name={category}>
                <div className={styles.section}>
                  {Object.entries(subCats).map(([subCat, items], sIdx) => {
                    if (!items || items.length === 0) return null;
                    
                    return (
                      <details key={sIdx} className={styles.accordion}>
                        <summary className={styles.accordionSummary}>
                          {subCat}
                        </summary>
                        <div className={styles.accordionContent}>
                          <ul className={styles.list}>
                            {items.map((item, iIdx) => {
                              const isChanged = hasVersionChanged(category, subCat, item.name, item.version);
                              return (
                                <li key={iIdx} className={isChanged ? styles.itemChanged : ''}>
                                  <div className={styles.libraryInfo}>
                                    {item.link && item.link !== '#' ? (
                                      <Link to={item.link} className={styles.libraryLink}>
                                        {item.name}
                                        {isChanged && <span className={styles.updateBadge}>Updated</span>}
                                      </Link>
                                    ) : (
                                      <span className={styles.libraryName}>
                                        {item.name}
                                        {isChanged && <span className={styles.updateBadge}>Updated</span>}
                                      </span>
                                    )}
                                    {item.description && <span className={styles.libraryDesc}>{item.description}</span>}
                                  </div>
                                  <span className={styles.libraryVersion}>{item.version || 'N/A'}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </details>
                    );
                  })}
                </div>
              </TabItem>
            ))}
          </TabsWrapper>
        </div>
      </main>
    </Layout>
  );
}