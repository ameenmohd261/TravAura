import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../styles/usermenu.css';

const UserMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { logout } = useAuth();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <div className="user-menu" ref={menuRef}>
      <button 
        className="user-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <img 
          src={user.avatar || '/assets/images/default-avatar.jpg'} 
          alt={user.name}
          className="user-avatar" 
        />
        <span className="user-name">{user.name}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} dropdown-icon`}></i>
      </button>
      
      {isOpen && (
        <div className="user-dropdown">
          <div className="user-dropdown-header">
            <img 
              src={user.avatar || '/assets/images/default-avatar.jpg'} 
              alt={user.name}
              className="user-avatar-large" 
            />
            <div className="user-info">
              <h4>{user.name}</h4>
              <span>{user.email}</span>
            </div>
          </div>
          
          <ul className="user-menu-items">
            <li>
              <Link to="/profile" onClick={() => setIsOpen(false)}>
                <i className="fas fa-user"></i> My Profile
              </Link>
            </li>
            <li>
              <Link to="/bookings" onClick={() => setIsOpen(false)}>
                <i className="fas fa-ticket-alt"></i> My Bookings
              </Link>
            </li>
            <li>
              <Link to="/saved-trips" onClick={() => setIsOpen(false)}>
                <i className="fas fa-heart"></i> Saved Trips
              </Link>
            </li>
            <li>
              <Link to="/settings" onClick={() => setIsOpen(false)}>
                <i className="fas fa-cog"></i> Settings
              </Link>
            </li>
            <li className="divider"></li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                <i className="fas fa-sign-out-alt"></i> Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;