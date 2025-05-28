import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import SocialLinks from '../common/SocialLinks';
import Newsletter from '../common/Newsletter';
import '../../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Partnerships', path: '/partnerships' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Safety Information', path: '/safety' },
        { name: 'Cancellation Options', path: '/cancellations' },
        { name: 'COVID-19 Resources', path: '/covid' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Destinations',
      links: [
        { name: 'Europe', path: '/destinations/europe' },
        { name: 'Asia', path: '/destinations/asia' },
        { name: 'Africa', path: '/destinations/africa' },
        { name: 'North America', path: '/destinations/north-america' },
        { name: 'South America', path: '/destinations/south-america' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Cookie Policy', path: '/cookie-policy' },
        { name: 'Accessibility', path: '/accessibility' }
      ]
    }
  ];

  return (
    <footer className="app-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-brand">
            <Logo variant="light" />
            <p className="footer-tagline">
              Discover the world's most breathtaking destinations with TravAura - your ultimate travel companion.
            </p>
            <SocialLinks />
          </div>
          
          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="footer-link-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="footer-newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <p>Get travel inspiration, deals, and more delivered to your inbox.</p>
            <Newsletter />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} TravAura. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms-of-service">Terms</Link>
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;