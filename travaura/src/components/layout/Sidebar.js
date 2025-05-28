import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../styles/sidebar.css';

const Sidebar = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  
  const mainNavLinks = [
    { icon: 'home', name: 'Home', path: '/' },
    { icon: 'map-marker-alt', name: 'Destinations', path: '/destinations' },
    { icon: 'compass', name: 'Experiences', path: '/experiences' },
    { icon: 'book-open', name: 'Travel Guides', path: '/travel-guides' }
  ];
  
  const accountNavLinks = currentUser ? [
    { icon: 'user', name: 'My Profile', path: '/profile' },
    { icon: 'bookmark', name: 'Saved Trips', path: '/saved-trips' },
    { icon: 'history', name: 'Travel History', path: '/travel-history' },
    { icon: 'cog', name: 'Settings', path: '/settings' }
  ] : [];
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="app-sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3>Explore</h3>
          <ul>
            {mainNavLinks.map(link => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={isActive(link.path) ? 'active' : ''}
                >
                  <i className={`fas fa-${link.icon}`}></i>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {currentUser && (
          <div className="nav-section">
            <h3>My Account</h3>
            <ul>
              {accountNavLinks.map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    <i className={`fas fa-${link.icon}`}></i>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="nav-section">
          <div className="promo-box">
            <h4>Plan Your Dream Trip</h4>
            <p>Get personalized recommendations for your next adventure</p>
            <Link to="/plan-trip" className="btn btn-accent">
              Start Planning
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;