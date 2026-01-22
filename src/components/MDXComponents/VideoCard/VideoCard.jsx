import Link from '@docusaurus/Link';
import './VideoCard.css';

function VideoCard({
  videoUrl,
  title,
  description,
  thumbnailSrc,
  thumbnailText,
  thumbnailSubtext,
}) {
  return (
    <Link to={videoUrl} style={{ textDecoration: 'none' }}>
      <div className="video-card-container">
        <div className="video-card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="video-card-thumbnail-container">
          {thumbnailSrc ? (
            <img src={thumbnailSrc} alt={title} className="video-card-thumbnail" />
          ) : (
            <div className="thumbnail-fallback">
              {(thumbnailText ?? title) && (
                <div className="thumbnail-text">{(thumbnailText ?? title).slice(0, 15)}</div>
              )}
              {(thumbnailSubtext ?? description) && (
                <div className="thumbnail-subtext">
                  {(thumbnailSubtext ?? description).slice(0, 15)}
                </div>
              )}
              <svg width="36" height="36" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36 69C54.2254 69 69 54.2254 69 36C69 17.7746 54.2254 3 36 3C17.7746 3 3 17.7746 3 36C3 54.2254 17.7746 69 36 69Z"
                  fill="currentColor"
                />

                <path
                  d="M52.1716 38.6337L28.4366 51.5801C26.4374 52.6705 24 51.2235 24 48.9464V23.0536C24 20.7764 26.4374 19.3295 28.4366 20.4199L52.1716 33.3663C54.2562 34.5034 54.2562 37.4966 52.1716 38.6337Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
