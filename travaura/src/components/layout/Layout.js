import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Notifications from '../common/Notifications';
import useMediaQuery from '../../hooks/useMediaQuery';
import '../../styles/layout.css';

const Layout = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        {!isMobile && <Sidebar />}
        <div className="page-content">
          {children}
        </div>
      </div>
      <Footer />
      <Notifications />
    </div>
  );
};

export default Layout;