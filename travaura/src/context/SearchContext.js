import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 10000,
    rating: 0,
    amenities: [],
    destination: '',
    dates: {
      startDate: null,
      endDate: null
    }
  });

  const handleSearch = (query, searchFilters = {}) => {
    setIsSearching(true);
    setSearchQuery(query);
    
    // Update filters if provided
    if (Object.keys(searchFilters).length > 0) {
      setFilters(prev => ({...prev, ...searchFilters}));
    }
    
    // Mock search functionality - would be replaced with API call
    setTimeout(() => {
      // Generate mock search results based on query
      const results = generateMockResults(query, filters);
      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  const generateMockResults = (query, filters) => {
    // This would be replaced with actual API call
    const mockData = [
      { id: 1, name: 'Paris Adventure', type: 'city', price: 1200, rating: 4.8 },
      { id: 2, name: 'Bali Beach Retreat', type: 'beach', price: 1500, rating: 4.7 },
      { id: 3, name: 'Swiss Alps Hiking', type: 'mountain', price: 1800, rating: 4.9 },
      { id: 4, name: 'Tokyo City Explorer', type: 'city', price: 2000, rating: 4.6 },
      { id: 5, name: 'Maldives Paradise', type: 'beach', price: 3000, rating: 5.0 }
    ];
    
    return mockData.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) &&
      item.price >= filters.priceMin &&
      item.price <= filters.priceMax &&
      item.rating >= filters.rating
    );
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({...prev, ...newFilters}));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      searchResults,
      isSearching,
      filters,
      handleSearch,
      updateFilters,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;