import React, { useState } from 'react';
import Layout from '@theme/Layout';
import techStackData from './tech-stack-data.json';
import styles from './styles.module.css';

export default function TechStackPage() {
  const versions = Object.keys(techStackData).sort((a, b) => {
    const parse = (v) => v.replace(/^v/, '').split('.').map(Number);
    const av = parse(a);
    const bv = parse(b);
    for (let i = 0; i < 3; i++) {
      if (av[i] > bv[i]) return -1;
      if (av[i] < bv[i]) return 1;
    }
    return 0;
  });

  const [selectedVersion, setSelectedVersion] = useState(versions[0] || 'v11.14.0');

  const currentIndex = versions.indexOf(selectedVersion);
  const previousVersion = currentIndex < versions.length - 1 ? versions[currentIndex + 1] : null;

  const sections = techStackData[selectedVersion];
  const prevSections = previousVersion ? techStackData[previousVersion] : null;

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

  if (!sections) {
    return (
      <Layout title="Tech Stack">
        <div className="container margin-vert--lg">
          <h1>Version not found</h1>
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
              onChange={(e) => setSelectedVersion(e.target.value)}
              className={styles.select}
            >
              {versions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            {previousVersion && (
              <p className={styles.compareNote}>
                Comparing with <strong>{previousVersion}</strong>
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
                              <a
                                href={item.url}
                                target={item.url === '#' ? undefined : '_blank'}
                                rel={item.url === '#' ? undefined : 'noopener noreferrer'}
                                className={styles.libraryLink}
                              >
                                {item.library}
                                {isChanged && <span className={styles.updateBadge}>Updated</span>}
                              </a>
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