import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function FeatureAnnouncementCard({ BlogPostContent, metadata }) {
  const { title, date, formattedDate, authors, readingTime, frontMatter, permalink } = metadata;
  const { tags } = frontMatter;

  const author = authors[0]; 

  return (
    <div className={clsx('card', styles.featureCard)}>
      
      <div className={styles.cardBody}>
        <h3 className={styles.title}>
          <Link to={permalink}>{title}</Link>
        </h3>
        {author && (
            <div className={styles.author}>
                {author.imageURL && <img src={author.imageURL} alt={author.name} className={styles.authorImage} />}
                <span className={styles.authorName}>{author.name}</span>
            </div>
        )}
              <div className={styles.cardHeader}>
        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, idx) => (
              <span key={idx} className={clsx(styles.tag, tag.toLowerCase() === 'new feature' ? styles.tagNew : styles.tagDefault)}>
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className={styles.meta}>
          <time dateTime={date} itemProp="datePublished">
            {formattedDate}
          </time>
          {readingTime && (
            <>
              <span>{Math.ceil(readingTime)} min read</span>
            </>
          )}
        </div>
      </div>
        <div className={clsx(styles.description, 'markdown')}>
             <BlogPostContent />
        </div>
      </div>

      <div className={styles.cardFooter}>
         <Link to={permalink} className={styles.readMore}>
            Read full announcement <span className={styles.arrow}>→</span>
         </Link>
      </div>
    </div>
  );
}

export default function FeatureAnnouncementsList({ items }) {
  return (
    <div className={clsx('container', styles.listContainer)}>
      <div className={styles.grid}>
        {items.map(({ content: BlogPostContent }) => (
           <FeatureAnnouncementCard
             key={BlogPostContent.metadata.permalink}
             BlogPostContent={BlogPostContent}
             metadata={BlogPostContent.metadata}
            />
        ))}
      </div>
    </div>
  );
}
