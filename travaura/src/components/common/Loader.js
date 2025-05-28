import React from 'react';
import '../../styles/loader.css';

const Loader = ({ size = 'medium', color = 'primary', text = 'Loading...' }) => {
  return (
    <div className={`loader-container loader-${size}`}>
      <div className={`loader loader-${color}`}>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;