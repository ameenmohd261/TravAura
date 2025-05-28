import React from 'react';
import '../../styles/sociallinks.css';

const SocialLinks = ({ variant = 'default' }) => {
  const socialMedia = [
    { name: 'Facebook', icon: 'facebook-f', url: 'https://facebook.com' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { name: 'YouTube', icon: 'youtube', url: 'https://youtube.com' },
    { name: 'Pinterest', icon: 'pinterest-p', url: 'https://pinterest.com' }
  ];

  return (
    <div className={`social-links social-links-${variant}`}>
      {socialMedia.map((platform, index) => (
        <a 
          key={index}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${platform.name}`}
          className="social-link"
        >
          <i className={`fab fa-${platform.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;