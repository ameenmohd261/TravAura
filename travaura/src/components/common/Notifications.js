import React from 'react';
import { useContext } from 'react';
import { NotificationContext } from '../../context/NotificationContext';
import '../../styles/notifications.css';

const Notifications = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className="notifications-container">
      {notifications.map(notification => (
        <div 
          key={notification.id} 
          className={`notification notification-${notification.type}`}
        >
          <div className="notification-icon">
            {notification.type === 'success' && <i className="fas fa-check-circle"></i>}
            {notification.type === 'error' && <i className="fas fa-exclamation-circle"></i>}
            {notification.type === 'info' && <i className="fas fa-info-circle"></i>}
            {notification.type === 'warning' && <i className="fas fa-exclamation-triangle"></i>}
          </div>
          <div className="notification-content">
            <p>{notification.message}</p>
          </div>
          <button 
            className="notification-close" 
            onClick={() => removeNotification(notification.id)}
            aria-label="Close notification"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;