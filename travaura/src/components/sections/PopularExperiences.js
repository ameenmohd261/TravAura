import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/popularexperiences.css';

const PopularExperiences = () => {
  const categories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'culture', name: 'Cultural' },
    { id: 'food', name: 'Food & Wine' },
    { id: 'wellness', name: 'Wellness' },
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const experiences = [
    {
      id: 1,
      title: "Guided Safari Adventure",
      location: "Serengeti, Tanzania",
      duration: "5 days",
      price: 1299,
      rating: 4.9,
      reviewCount: 128,
      image: "/assets/images/experience-safari.jpg",
      categories: ['adventure'],
      featured: true
    },
    {
      id: 2,
      title: "Kyoto Tea Ceremony",
      location: "Kyoto, Japan",
      duration: "3 hours",
      price: 89,
      rating: 4.7,
      reviewCount: 95,
      image: "/assets/images/experience-tea.jpg",
      categories: ['culture'],
      featured: false
    },
    {
      id: 3,
      title: "Tuscan Cooking Class",
      location: "Florence, Italy",
      duration: "4 hours",
      price: 129,
      rating: 4.8,
      reviewCount: 156,
      image: "/assets/images/experience-cooking.jpg",
      categories: ['food'],
      featured: true
    },
    {
      id: 4,
      title: "Balinese Spa Retreat",
      location: "Ubud, Bali",
      duration: "Full day",
      price: 199,
      rating: 4.9,
      reviewCount: 88,
      image: "/assets/images/experience-spa.jpg",
      categories: ['wellness'],
      featured: false
    },
    {
      id: 5,
      title: "Amazon Rainforest Trek",
      location: "Manaus, Brazil",
      duration: "3 days",
      price: 599,
      rating: 4.7,
      reviewCount: 74,
      image: "/assets/images/experience-amazon.jpg",
      categories: ['adventure'],
      featured: true
    },
    {
      id: 6,
      title: "Barcelona Tapas Tour",
      location: "Barcelona, Spain",
      duration: "4 hours",
      price: 79,
      rating: 4.6,
      reviewCount: 103,
      image: "/assets/images/experience-tapas.jpg",
      categories: ['food', 'culture'],
      featured: false
    }
  ];
  
  const filteredExperiences = activeCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.categories.includes(activeCategory));

  return (
    <section className="popular-experiences-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-subtitle">Amazing Activities</span>
          <h2>Popular Experiences</h2>
          <p>Discover unique activities and unforgettable adventures around the world.</p>
          
          <div className="experience-categories">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="experiences-grid">
          {filteredExperiences.map(experience => (
            <div 
              key={experience.id} 
              className={`experience-card ${experience.featured ? 'featured' : ''}`}
            >
              <div className="experience-image">
                <img src={experience.image} alt={experience.title} />
                {experience.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="experience-content">
                <div className="experience-meta">
                  <span className="experience-location">
                    <i className="fas fa-map-marker-alt"></i> {experience.location}
                  </span>
                  <span className="experience-duration">
                    <i className="far fa-clock"></i> {experience.duration}
                  </span>
                </div>
                
                <h3 className="experience-title">
                  <Link to={`/experiences/${experience.id}`}>{experience.title}</Link>
                </h3>
                
                <div className="experience-rating">
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i < Math.floor(experience.rating) ? 'filled' : ''}`}></i>
                    ))}
                    <span className="rating-value">{experience.rating}</span>
                    <span className="review-count">({experience.reviewCount} reviews)</span>
                  </div>
                  <div className="experience-price">
                    <span className="price-from">from</span>
                    <span className="price-value">${experience.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="center-button">
          <Link to="/experiences" className="btn btn-primary">
            Explore All Experiences
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularExperiences;