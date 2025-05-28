import React from 'react';
import Newsletter from '../common/Newsletter';
import '../../styles/newsletterbanner.css';

const NewsletterBanner = () => {
  return (
    <section className="newsletter-banner">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-header">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get exclusive travel deals, insider tips, and travel inspiration delivered straight to your inbox.</p>
          </div>
          
          <div className="newsletter-form-container">
            <Newsletter />
          </div>
          
          <div className="newsletter-perks">
            <div className="perk">
              <i className="fas fa-tag"></i>
              <span>Exclusive Deals</span>
            </div>
            <div className="perk">
              <i className="fas fa-bell"></i>
              <span>Travel Alerts</span>
            </div>
            <div className="perk">
              <i className="fas fa-percent"></i>
              <span>Subscriber Discounts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;