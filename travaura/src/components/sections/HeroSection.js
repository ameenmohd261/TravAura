import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../forms/SearchForm';
import '../../styles/herosection.css';

const HeroSection = ({ 
  title = "Discover Your Perfect Adventure", 
  subtitle = "Explore breathtaking destinations with TravAura and create memories that last a lifetime.",
  backgroundImage = "/assets/images/hero-background.jpg",
  searchForm = true,
  overlay = true,
  height = "100vh",
  alignContent = "center",
}) => {
  return (
    <section 
      className="hero-section" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        height: height
      }}
    >
      {overlay && <div className="hero-overlay"></div>}
      
      <div className={`hero-content hero-align-${alignContent}`}>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        
        {searchForm && (
          <div className="hero-search-container">
            <SearchForm />
          </div>
        )}
        
        <div className="hero-buttons">
          <Link to="/destinations" className="btn btn-primary btn-lg">
            Explore Destinations
          </Link>
          <Link to="/plan-trip" className="btn btn-secondary btn-lg">
            Plan Your Trip
          </Link>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default HeroSection;