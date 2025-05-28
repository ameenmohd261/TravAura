// Base API URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.travaura.com/v1';

/**
 * Generic API fetch with authorization and error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} Response data
 */
export const fetchApi = async (endpoint, options = {}) => {
  const token = localStorage.getItem('auth_token');
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  };
  
  const fetchOptions = {
    ...defaultOptions,
    ...options
  };
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, fetchOptions);
    
    // Handle 401 Unauthorized (token expired)
    if (response.status === 401) {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      throw new Error('Authentication expired. Please log in again.');
    }
    
    // Handle other error responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error: ${response.status}`);
    }
    
    // Check if response is empty
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

/**
 * API service methods
 */
export const api = {
  auth: {
    login: (email, password) => 
      fetchApi('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      }),
    
    register: (userData) => 
      fetchApi('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData)
      }),
    
    forgotPassword: (email) => 
      fetchApi('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email })
      }),
    
    resetPassword: (token, password) => 
      fetchApi('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ token, password })
      })
  },
  
  destinations: {
    getAll: (params) => 
      fetchApi(`/destinations${params ? `?${new URLSearchParams(params)}` : ''}`),
    
    getById: (id) => 
      fetchApi(`/destinations/${id}`),
    
    getFeatured: () => 
      fetchApi('/destinations/featured'),
    
    search: (query) => 
      fetchApi(`/destinations/search?q=${encodeURIComponent(query)}`)
  },
  
  experiences: {
    getAll: (params) => 
      fetchApi(`/experiences${params ? `?${new URLSearchParams(params)}` : ''}`),
    
    getById: (id) => 
      fetchApi(`/experiences/${id}`),
    
    getByDestination: (destinationId) => 
      fetchApi(`/destinations/${destinationId}/experiences`)
  },
  
  bookings: {
    create: (bookingData) => 
      fetchApi('/bookings', {
        method: 'POST',
        body: JSON.stringify(bookingData)
      }),
    
    getAll: () => 
      fetchApi('/bookings'),
    
    getById: (id) => 
      fetchApi(`/bookings/${id}`),
    
    cancelBooking: (id) => 
      fetchApi(`/bookings/${id}/cancel`, { method: 'POST' })
  },
  
  user: {
    getProfile: () => 
      fetchApi('/user/profile'),
    
    updateProfile: (profileData) => 
      fetchApi('/user/profile', {
        method: 'PATCH',
        body: JSON.stringify(profileData)
      }),
    
    getSavedTrips: () => 
      fetchApi('/user/saved-trips'),
    
    saveTrip: (tripData) => 
      fetchApi('/user/saved-trips', {
        method: 'POST',
        body: JSON.stringify(tripData)
      }),
    
    deleteTrip: (tripId) => 
      fetchApi(`/user/saved-trips/${tripId}`, { method: 'DELETE' })
  }
};

export default api;