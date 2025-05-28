import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for existing user session in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      // Simulate API call for authentication
      if (email === 'demo@travaura.com' && password === 'password') {
        const user = { 
          id: '1', 
          name: 'Demo User', 
          email: 'demo@travaura.com',
          avatar: '/assets/images/avatar.jpg'
        };
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);
      // Simulate API call for registration
      const user = { 
        id: Date.now().toString(), 
        name, 
        email,
        avatar: '/assets/images/avatar-placeholder.jpg'
      };
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (userData) => {
    const updatedUser = { ...currentUser, ...userData };
    setCurrentUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      loading, 
      error, 
      login, 
      register, 
      logout,
      updateProfile 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;