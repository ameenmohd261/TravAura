import React, { useState, useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import DestinationCard from '../components/common/DestinationCard';
import FilterSidebar from '../components/common/FilterSidebar';
import Loader from '../components/common/Loader';
import '../styles/destinationspage.css';

// Mock data
import { destinations } from '../data/destinations';

const DestinationsPage = () => {
  const [loading, setLoading] = useState(true);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [filters, setFilters] = useState({
    continent: '',
    priceRange: [0, 5000],
    duration: [],
    rating: 0,
    activities: []
  });
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
      setFilteredDestinations(destinations);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Apply filters
    let results = [...destinations];
    
    // Filter by continent
    if (filters.continent) {
      results = results.filter(dest => dest.continent === filters.continent);
    }
    
    // Filter by price range
    results = results.filter(
      dest => dest.price >= filters.priceRange[0] && dest.price <= filters.priceRange[1]
    );
    
    // Filter by duration
    if (filters.duration.length > 0) {
      results = results.filter(dest => filters.duration.includes(dest.duration));
    }
    
    // Filter by rating
    if (filters.rating > 0) {
      results = results.filter(dest => dest.rating >= filters.rating);
    }
    
    // Filter by activities
    if (filters.activities.length > 0) {
      results = results.filter(dest => 
        filters.activities.some(activity => dest.activities.includes(activity))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // 'popular' - default sorting
        results.sort((a, b) => b.popularity - a.popularity);
    }
    
    setFilteredDestinations(results);
  }, [filters, sortBy]);
  
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };
  
  const resetFilters = () => {
    setFilters({
      continent: '',
      priceRange: [0, 5000],
      duration: [],
      rating: 0,
      activities: []
    });
  };

  return (
    <div className="destinations-page">
      <PageHeader 
        title="Explore Destinations"
        backgroundImage="/assets/images/destinations-header.jpg"
      />
      
      <div className="container destinations-content">
        <FilterSidebar 
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={resetFilters}
        />
        
        <div className="destinations-main">
          <div className="destinations-toolbar">
            <div className="destinations-count">
              {filteredDestinations.length} destinations found
            </div>
            
            <div className="destinations-controls">
              <div className="sort-control">
                <label htmlFor="sort-select">Sort By:</label>
                <select 
                  id="sort-select" 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
              
              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid View"
                >
                  <i className="fas fa-th"></i>
                </button>
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List View"
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
          
          {loading ? (
            <Loader />
          ) : filteredDestinations.length > 0 ? (
            <div className={`destinations-${viewMode}`}>
              {filteredDestinations.map(destination => (
                <DestinationCard 
                  key={destination.id} 
                  destination={destination}
                  layout={viewMode} 
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No destinations found</h3>
              <p>Try adjusting your filters to find more results</p>
              <button className="btn btn-outline" onClick={resetFilters}>
                Reset Filters
              </button>
            </div>
          )}
          
          {filteredDestinations.length > 0 && (
            <div className="pagination">
              <button className="pagination-btn" disabled>
                <i className="fas fa-chevron-left"></i> Previous
              </button>
              <div className="pagination-pages">
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <span className="page-ellipsis">...</span>
                <button className="page-btn">10</button>
              </div>
              <button className="pagination-btn">
                Next <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;