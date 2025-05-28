import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardImage, CardBody } from '../common/Card';
import '../../styles/traveltips.css';

const TravelTipsSection = () => {
  const travelTips = [
    {
      id: 1,
      title: "10 Packing Hacks Every Traveler Should Know",
      excerpt: "Save space and stay organized with these essential packing tips for any type of trip.",
      image: "/assets/images/travel-tips-1.jpg",
      date: "May 22, 2025",
      author: "Sarah Johnson",
      category: "Travel Tips",
      slug: "packing-hacks"
    },
    {
      id: 2,
      title: "How to Find Hidden Gems in Popular Destinations",
      excerpt: "Discover local secrets and avoid tourist traps with these insider techniques.",
      image: "/assets/images/travel-tips-2.jpg",
      date: "May 15, 2025",
      author: "David Wong",
      category: "Destinations",
      slug: "hidden-gems"
    },
    {
      id: 3,
      title: "Budget Travel: See More for Less",
      excerpt: "Stretch your travel budget further with smart planning and local insights.",
      image: "/assets/images/travel-tips-3.jpg",
      date: "May 10, 2025",
      author: "Elena Petrova",
      category: "Budget Travel",
      slug: "budget-travel-tips"
    }
  ];

  return (
    <section className="travel-tips-section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Travel Tips & Insights</h2>
            <p>Expert advice to enhance your travel experience and make every journey smoother.</p>
          </div>
          <Link to="/travel-guides" className="view-all-link">
            View All Tips <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        
        <div className="travel-tips-grid">
          {travelTips.map(tip => (
            <Card key={tip.id} className="travel-tip-card" hoverable>
              <CardImage 
                src={tip.image} 
                alt={tip.title} 
                aspectRatio="16/9"
              />
              <CardBody>
                <div className="tip-meta">
                  <span className="tip-category">{tip.category}</span>
                  <span className="tip-date">{tip.date}</span>
                </div>
                <h3 className="tip-title">
                  <Link to={`/travel-guides/${tip.slug}`}>{tip.title}</Link>
                </h3>
                <p className="tip-excerpt">{tip.excerpt}</p>
                <div className="tip-author">
                  <span>By {tip.author}</span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="tips-center-button">
          <Link to="/travel-guides" className="btn btn-outline">
            Read More Travel Guides
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelTipsSection;