import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';
import useScrollPosition from '../../hooks/useScrollPosition';
import Logo from '../common/Logo';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';
import UserMenu from '../common/UserMenu';
import ThemeToggle from '../common/ThemeToggle';
import MobileMenu from '../common/MobileMenu';
import '../../styles/header.css';

const Header = () => {
  const { currentUser } = useAuth();
  const { darkMode } = useTheme();
  const { y: scrollY } = useScrollPosition();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Travel Guides', path: '/travel-guides' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : ''}`}>
      <div className="header-container">
        <div className="header-left">
          <Logo />
          <nav className="desktop-nav">
            <ul>
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="header-right">
          <SearchBar className="header-search" />
          <ThemeToggle />
          
          {currentUser ? (
            <UserMenu user={currentUser} />
          ) : (
            <div className="auth-buttons">
              <Button 
                variant="text" 
                as={Link} 
                to="/login"
              >
                Log in
              </Button>
              <Button 
                variant="primary" 
                as={Link} 
                to="/register"
              >
                Sign up
              </Button>
            </div>
          )}
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
      
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        links={navLinks}
      />
    </header>
  );
};

export default Header;