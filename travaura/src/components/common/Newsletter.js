import React, { useState } from 'react';
import Button from './Button';
import '../../styles/newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
      
      // Reset status after a few seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="newsletter-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          
          <Button 
            type="submit" 
            variant="accent" 
            loading={loading}
            disabled={loading}
          >
            Subscribe
          </Button>
        </div>
        
        {status === 'success' && (
          <div className="newsletter-message success">
            Thanks for subscribing!
          </div>
        )}
        
        {status === 'error' && (
          <div className="newsletter-message error">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
      <p className="newsletter-privacy">
        By subscribing, you agree to our <a href="/privacy-policy">Privacy Policy</a> and consent to receive updates from TravAura.
      </p>
    </div>
  );
};

export default Newsletter;