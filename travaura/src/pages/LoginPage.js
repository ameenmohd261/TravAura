import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Button from '../components/common/Button';
import '../styles/authpages.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from || '/';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    
    // Clear errors when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    if (generalError) {
      setGeneralError('');
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!credentials.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(credentials.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!credentials.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    
    try {
      await login(credentials.email, credentials.password);
      navigate(from, { replace: true });
    } catch (error) {
      setGeneralError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };
  
  const socialLogin = (provider) => {
    // Would implement actual social login integration here
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setGeneralError(`${provider} login not implemented yet`);
    }, 1000);
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your TravAura account to access your saved trips, bookings, and personalized recommendations.</p>
          </div>
          
          {generalError && (
            <div className="auth-error-message">
              <i className="fas fa-exclamation-circle"></i>
              <span>{generalError}</span>
            </div>
          )}
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <div className="password-label-group">
                <label htmlFor="password">Password</label>
                <Link to="/forgot-password" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <div className="input-with-icon">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={errors.password ? 'error' : ''}
                />
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            <div className="form-checkbox">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            
            <Button 
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
              disabled={loading}
            >
              Sign In
            </Button>
          </form>
          
          <div className="auth-divider">
            <span>or continue with</span>
          </div>
          
          <div className="social-auth-buttons">
            <button 
              type="button"
              className="social-btn google"
              onClick={() => socialLogin('Google')}
              disabled={loading}
            >
              <i className="fab fa-google"></i>
              <span>Google</span>
            </button>
            <button 
              type="button"
              className="social-btn facebook"
              onClick={() => socialLogin('Facebook')}
              disabled={loading}
            >
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </button>
            <button 
              type="button"
              className="social-btn apple"
              onClick={() => socialLogin('Apple')}
              disabled={loading}
            >
              <i className="fab fa-apple"></i>
              <span>Apple</span>
            </button>
          </div>
          
          <p className="auth-redirect">
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
        
        <div className="auth-image-container">
          <img src="/assets/images/login-image.jpg" alt="Travel destination" />
          <div className="auth-image-overlay">
            <div className="auth-image-content">
              <h2>Discover the world with TravAura</h2>
              <p>Join thousands of travelers exploring incredible destinations around the globe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;