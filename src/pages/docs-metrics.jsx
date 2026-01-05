import React from 'react';
import Layout from '@theme/Layout';
import metricsData from '@site/scripts/metrics.json';

export default function MetricsPage() {
  return (
    <Layout title="Documentation Audit">
      <main style={{padding: '2rem', maxWidth: '1000px'}}>
        <h1>Detailed Docs Metrics</h1>
        
        <div style={{display: 'flex', gap: '10px', marginBottom: '2rem'}}>
          <StatBox label="Total" value={metricsData.total} />
          <StatBox label="Unassigned" value={metricsData.noAuthorDocs.length} color="#fff4f4" />
        </div>

        {/* SECTION: UNASSIGNED DOCS */}
        <section style={{marginBottom: '3rem'}}>
          <details style={{border: '1px solid #ff4444', borderRadius: '8px', padding: '1rem'}}>
            <summary style={{fontWeight: 'bold', cursor: 'pointer', color: '#ff4444'}}>
              ⚠️ Documents with No Author ({metricsData.noAuthorDocs.length})
            </summary>
            <DocTable docs={metricsData.noAuthorDocs} />
          </details>
        </section>

        {/* SECTION: PER AUTHOR */}
        <h3>Docs by Author</h3>
        {Object.entries(metricsData.authorDocs).map(([author, docs]) => (
          <details key={author} style={{border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', marginBottom: '10px'}}>
            <summary style={{fontWeight: 'bold', cursor: 'pointer'}}>
              {author} — ({docs.length} docs)
            </summary>
            <DocTable docs={docs} />
          </details>
        ))}
      </main>
    </Layout>
  );
}

function DocTable({ docs }) {
  return (
    <table style={{width: '100%', marginTop: '1rem', fontSize: '0.85rem'}}>
      <thead>
        <tr style={{textAlign: 'left', borderBottom: '1px solid #eee'}}>
          <th>File Name</th>
          <th>Relative Path</th>
        </tr>
      </thead>
      <tbody>
        {docs.map((doc, i) => (
          <tr key={i} style={{borderBottom: '1px solid #f9f9f9'}}>
            <td style={{padding: '5px', fontWeight: '500'}}>{doc.name}</td>
            <td style={{padding: '5px', color: '#666'}}><code>{doc.path}</code></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StatBox({label, value, color="#f4f4f4"}) {
  return (
    <div style={{background: color, padding: '1rem', borderRadius: '8px', flex: 1, textAlign: 'center', border: '1px solid #ddd'}}>
      <div style={{fontSize: '0.8rem', textTransform: 'uppercase'}}>{label}</div>
      <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{value}</div>
    </div>
  );
}