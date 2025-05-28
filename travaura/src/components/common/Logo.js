import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/logo.css';

const Logo = ({ variant = 'default', size = 'medium' }) => {
  return (
    <div className={`logo logo-${variant} logo-${size}`}>
      <Link to="/">
        <span className="logo-icon">
          <i className="fas fa-globe-americas"></i>
        </span>
        <span className="logo-text">TravAura</span>
      </Link>
    </div>
  );
};

export default Logo;