import React from 'react';
import '../../styles/pageheader.css';

const PageHeader = ({ 
  title, 
  subtitle = '', 
  backgroundImage = '',
  breadcrumbs = [],
  alignment = 'center',
  overlay = true,
  height = 'medium'
}) => {
  return (
    <header 
      className={`page-header page-header-${alignment} page-header-${height}`}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      {overlay && <div className="page-header-overlay"></div>}
      
      <div className="container">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol>
              {breadcrumbs.map((crumb, index) => (
                <li key={index}>
                  {crumb.link ? (
                    <a href={crumb.link}>{crumb.label}</a>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <i className="fas fa-chevron-right"></i>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <div className="page-header-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;