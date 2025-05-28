import React, { useState, useEffect, useRef } from 'react';
import '../../styles/testimonialssection.css';

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'Emma Thompson',
      location: 'London, UK',
      avatar: '/assets/images/testimonial-1.jpg',
      rating: 5,
      text: 'TravAura made planning our honeymoon to Bali completely stress-free. Their personalized recommendations were spot on, and the local experiences they arranged were the highlight of our trip!',
      trip: 'Honeymoon in Bali'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      avatar: '/assets/images/testimonial-2.jpg',
      rating: 5,
      text: 'I was nervous about traveling solo for the first time, but TravAura detailed guides and responsive customer service gave me the confidence to explore Japan on my own. An unforgettable experience!',
      trip: 'Solo trip to Japan'
    },
    {
      id: 3,
      name: 'Sofia Rodriguez',
      location: 'Barcelona, Spain',
      avatar: '/assets/images/testimonial-3.jpg',
      rating: 5,
      text: 'Our family trip to Costa Rica was perfect thanks to TravAura. They balanced adventure activities for our teenagers with relaxation time for us parents. Everyone came home happy!',
      trip: 'Family vacation in Costa Rica'
    }
  ];
  
  const nextSlide = () => {
    setActive(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActive(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);
  
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-subtitle">Traveler Stories</span>
          <h2>What Our Customers Say</h2>
          <p>Real experiences from travelers who explored the world with TravAura.</p>
        </div>
        
        <div 
          className="testimonials-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonials-track" style={{ transform: `translateX(-${active * 100}%)` }}>
            {testimonials.map(testimonial => (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`fas fa-star ${i < testimonial.rating ? 'filled' : ''}`}
                      ></i>
                    ))}
                  </div>
                  
                  <blockquote className="testimonial-text">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="testimonial-trip-tag">
                    <i className="fas fa-suitcase-rolling"></i>
                    <span>{testimonial.trip}</span>
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="testimonial-nav prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            className="testimonial-nav next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="testimonials-pagination">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`pagination-dot ${active === index ? 'active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;