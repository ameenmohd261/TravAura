import React from 'react';
import '../../styles/featuresection.css';

const FeatureSection = () => {
  const features = [
    {
      icon: 'map-marked-alt',
      title: 'Personalized Travel Plans',
      description: 'Get customized travel itineraries based on your preferences, time, and budget.'
    },
    {
      icon: 'hand-holding-usd',
      title: 'Best Price Guarantee',
      description: 'We promise the best rates and will match any lower price you find elsewhere.'
    },
    {
      icon: 'headset',
      title: '24/7 Customer Support',
      description: 'Our travel experts are available round the clock to assist you with any needs.'
    },
    {
      icon: 'shield-alt',
      title: 'Safe & Secure Booking',
      description: 'Book with confidence knowing your personal information is protected.'
    },
  ];

  return (
    <section className="feature-section">
      <div className="container">
        <div className="section-header center">
          <h2>Why Travel With Us</h2>
          <p>We provide exceptional service to make your travel experience memorable and hassle-free.</p>
        </div>
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;