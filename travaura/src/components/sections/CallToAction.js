import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/calltoaction.css';

const CallToAction = ({ 
  title = "Ready for your next adventure?", 
  subtitle = "Book your dream vacation today and save up to 30% on selected destinations",
  backgroundImage = "/assets/images/cta-background.jpg",
  buttonText = "Start Planning",
  buttonLink = "/plan-trip"
}) => {
  return (
    <section 
      className="cta-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <Link to={buttonLink} className="btn btn-primary btn-lg">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;