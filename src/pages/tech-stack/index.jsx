import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import { versions, versionDataMap } from '../../../data/tech-stack-data/versionDataMap';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useLocation, useHistory } from '@docusaurus/router';

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
  const [previousVersion, setPreviousVersion] = useState(null);
  const [prevSections, setPrevSections] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sync state with URL if it changes externally
    const v = new URLSearchParams(location.search).get('v') || versions[0];
    if (v !== selectedVersion) {
      setSelectedVersion(v);
    }
  }, [location.search]);

  useEffect(() => {
    function loadData() {
      setLoading(true);
      try {
        // Load current version from the map
        const currentData = versionDataMap[selectedVersion];
        if (!currentData) {
          throw new Error(`Version ${selectedVersion} not found`);
        }
        setSections(currentData);

        // Determine previous version
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
  const prevLibMap = {};
  if (prevSections) {
    prevSections.forEach(section => {
      section.groups.forEach(group => {
        group.items.forEach(item => {
          const key = `${section.title}|${group.title}|${item.library}`;
          prevLibMap[key] = item.version;
        });
      });
    });
  }

  const hasVersionChanged = (sectionTitle, groupTitle, library, currentVersion) => {
    if (!previousVersion) return false;
    const key = `${sectionTitle}|${groupTitle}|${library}`;
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
          {sections.map((section, sIdx) => (
            <section key={sIdx} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.nestedGrid}>
                {section.groups.map((group, gIdx) => (
                  <div key={gIdx} className={styles.subSection}>
                    <h3>{group.title}</h3>
                    <ul className={styles.list}>
                      {group.items.map((item, iIdx) => {
                        const isChanged = hasVersionChanged(section.title, group.title, item.library, item.version);
                        return (
                          <li key={iIdx} className={isChanged ? styles.itemChanged : ''}>
                            <div className={styles.libraryInfo}>
                              <Link
                                to={item.url}
                                className={styles.libraryLink}
                              >
                                {item.library}
                                {isChanged && <span className={styles.updateBadge}>Updated</span>}
                              </Link>
                              {item.description && <span className={styles.libraryDesc}>{item.description}</span>}
                            </div>
                            <span className={styles.libraryVersion}>{item.version || 'N/A'}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}