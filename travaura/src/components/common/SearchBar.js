import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/searchbar.css';

const SearchBar = ({ className = '', variant = 'default' }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };
  
  return (
    <div className={`search-bar search-bar-${variant} ${isFocused ? 'focused' : ''} ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search destinations, experiences..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {query && (
          <button 
            type="button"
            className="search-clear-btn"
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;