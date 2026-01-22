import './AcademyCard.css';
import Link from '@docusaurus/Link';

function AcademyCard({ title, description, academyLink, children }) {
  return (
    <div className="academy-card-container">
      <div className="academy-card-header">
        <div className="academy-card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="academy-card-action">
          <Link to={academyLink} className="academy-card-link">
            <img width="32" height="32" src="/img/icon/acd-icon.svg" alt="Academy Icon"/>
            <span>View on Academy</span>
          </Link>
        </div>
      </div>
      {children && (
        <div className="academy-card-body">
          {children}
        </div>
      )}
    </div>
  );
}

export default AcademyCard;
