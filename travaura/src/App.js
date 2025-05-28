// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './context/ThemeContext';
// import { AuthProvider } from './context/AuthContext';
// import { BookingProvider } from './context/BookingContext';
// import { NotificationProvider } from './context/NotificationContext';
// import Layout from './components/layout/Layout';
// import ScrollToTop from './utils/ScrollToTop';

// // Pages
// import HomePage from './pages/HomePage';
// import DestinationsPage from './pages/DestinationsPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';

// // Import styles
// import './styles/global.css';

// function App() {
//   return (
//     <AuthProvider>
//       <ThemeProvider>
//         <BookingProvider>
//           <NotificationProvider>
//             <Router>
//               <ScrollToTop />
//               <Layout>
//                 <Routes>
//                   <Route path="/" element={<HomePage />} />
//                   <Route path="/destinations" element={<DestinationsPage />} />
//                   <Route path="/about" element={<AboutPage />} />
//                   <Route path="/contact" element={<ContactPage />} />
//                   <Route path="/login" element={<LoginPage />} />
//                   <Route path="/register" element={<RegisterPage />} />
//                   <Route path="*" element={<NotFoundPage />} />
//                 </Routes>
//               </Layout>
//             </Router>
//           </NotificationProvider>
//         </BookingProvider>
//       </ThemeProvider>
//     </AuthProvider>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import { NotificationProvider } from './context/NotificationContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './utils/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import TravelGuidesPage from './pages/TravelGuidesPage';
import TravelGuideDetailPage from './pages/TravelGuideDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/CheckoutPage';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

// Styles
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BookingProvider>
          <NotificationProvider>
            <Router>
              <ScrollToTop />
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/destinations" element={<DestinationsPage />} />
                  <Route path="/destinations/:id" element={<DestinationDetailPage />} />
                  <Route path="/experiences" element={<ExperiencesPage />} />
                  <Route path="/experiences/:id" element={<ExperienceDetailPage />} />
                  <Route path="/travel-guides" element={<TravelGuidesPage />} />
                  <Route path="/travel-guides/:id" element={<TravelGuideDetailPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/booking" element={<BookingPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Layout>
            </Router>
          </NotificationProvider>
        </BookingProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;