import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../common/DestinationCard';
import '../../styles/destinationslider.css';

const DestinationSlider = ({ title, subtitle, destinations, viewAllLink }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const sliderRef = useRef(null);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(destinations.length / 3) - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(destinations.length / 3) - 1 : prev - 1
    );
  };
  
  useEffect(() => {
    const slider = sliderRef.current;
    
    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
    };
    
    const handleTouchMove = (e) => {
      setTouchEndX(e.touches[0].clientX);
    };
    
    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        nextSlide();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        prevSlide();
      }
    };
    
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart, { passive: true });
      slider.addEventListener('touchmove', handleTouchMove, { passive: true });
      slider.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchmove', handleTouchMove);
        slider.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [touchStartX, touchEndX]);

  const visibleDestinations = destinations.slice(
    currentSlide * 3,
    currentSlide * 3 + 3
  );

  return (
    <section className="destination-slider-section">
      <div className="section-header">
        <div className="section-header-content">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        
        <div className="section-header-actions">
          <div className="slider-controls">
            <button 
              className="slider-control prev" 
              onClick={prevSlide}
              aria-label="Previous destinations"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="slider-control next" 
              onClick={nextSlide}
              aria-label="Next destinations"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          {viewAllLink && (
            <Link to={viewAllLink} className="view-all-link">
              View All <i className="fas fa-arrow-right"></i>
            </Link>
          )}
        </div>
      </div>
      
      <div className="destination-slider-container" ref={sliderRef}>
        <div className="destination-slider">
          {visibleDestinations.map((destination) => (
            <div key={destination.id} className="destination-slide">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
        
        <div className="slider-pagination">
          {Array.from({ length: Math.ceil(destinations.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider;