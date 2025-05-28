import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import '../../styles/mobilemenu.css';

const MobileMenu = ({ isOpen, onClose, links }) => {
  const { currentUser, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header">
        <Logo variant="default" size="medium" />
        <button 
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <nav className="mobile-nav">
        <ul className="mobile-nav-links">
          {links.map(link => (
            <li key={link.path}>
              <Link to={link.path} onClick={onClose}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {currentUser ? (
        <div className="mobile-user-section">
          <div className="mobile-user-info">
            <img 
              src={currentUser.avatar || '/assets/images/default-avatar.jpg'} 
              alt={currentUser.name}
              className="user-avatar-small" 
            />
            <span>{currentUser.name}</span>
          </div>
          
          <ul className="mobile-user-links">
            <li>
              <Link to="/profile" onClick={onClose}>
                <i className="fas fa-user"></i> My Profile
              </Link>
            </li>
            <li>
              <Link to="/bookings" onClick={onClose}>
                <i className="fas fa-ticket-alt"></i> My Bookings
              </Link>
            </li>
            <li>
              <Link to="/saved-trips" onClick={onClose}>
                <i className="fas fa-heart"></i> Saved Trips
              </Link>
            </li>
            <li>
              <Link to="/settings" onClick={onClose}>
                <i className="fas fa-cog"></i> Settings
              </Link>
            </li>
            <li>
              <button onClick={() => { logout(); onClose(); }} className="mobile-logout-button">
                <i className="fas fa-sign-out-alt"></i> Log out
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="mobile-auth-buttons">
          <Link to="/login" className="btn btn-outline" onClick={onClose}>
            Log in
          </Link>
          <Link to="/register" className="btn btn-primary" onClick={onClose}>
            Sign up
          </Link>
        </div>
      )}
      
      <div className="mobile-theme-toggle">
        <span>Theme</span>
        <ThemeToggle />
      </div>
      
      <div className="mobile-menu-footer">
        <div className="mobile-social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} TravAura. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;