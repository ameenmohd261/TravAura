import React from 'react';
import { Range } from 'react-range';
import '../../styles/filtersidebar.css';

// Mock data for filters
import { continents } from '../../data/destinations';

const FilterSidebar = ({ filters, onFilterChange, onReset }) => {
  const durations = ["1-3 days", "4-7 days", "8-14 days", "15+ days"];
  
  const activities = [
    "Beaches",
    "Hiking",
    "Cultural",
    "Food & Dining",
    "Adventure",
    "Nightlife",
    "Wellness",
    "Wildlife",
    "Shopping",
    "Historical"
  ];

  const handleContinentChange = (e) => {
    onFilterChange({ continent: e.target.value });
  };

  const handleDurationChange = (duration) => {
    let updatedDurations;
    if (filters.duration.includes(duration)) {
      updatedDurations = filters.duration.filter(item => item !== duration);
    } else {
      updatedDurations = [...filters.duration, duration];
    }
    
    onFilterChange({ duration: updatedDurations });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({ rating });
  };

  const handleActivityChange = (activity) => {
    let updatedActivities;
    if (filters.activities.includes(activity)) {
      updatedActivities = filters.activities.filter(item => item !== activity);
    } else {
      updatedActivities = [...filters.activities, activity];
    }
    
    onFilterChange({ activities: updatedActivities });
  };

  const handlePriceRangeChange = (values) => {
    onFilterChange({ priceRange: values });
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <h3>Filter Results</h3>
        <button 
          className="filter-reset-button"
          onClick={onReset}
        >
          Reset All
        </button>
      </div>
      
      <div className="filter-section">
        <h4>Continent</h4>
        <div className="filter-options">
          <select 
            value={filters.continent}
            onChange={handleContinentChange}
            className="continent-select"
          >
            <option value="">All Continents</option>
            {continents.map((continent, index) => (
              <option key={index} value={continent}>{continent}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-range">
          <Range
            step={100}
            min={0}
            max={5000}
            values={filters.priceRange}
            onChange={handlePriceRangeChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="price-slider-track"
              >
                {children}
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className={`price-slider-thumb ${isDragged ? 'dragged' : ''}`}
              />
            )}
          />
          <div className="price-range-labels">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Duration</h4>
        <div className="filter-options duration-options">
          {durations.map((duration, index) => (
            <label key={index} className="filter-checkbox">
              <input 
                type="checkbox"
                checked={filters.duration.includes(duration)}
                onChange={() => handleDurationChange(duration)}
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-label">{duration}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Rating</h4>
        <div className="rating-filter">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button 
              key={rating}
              className={`rating-option ${filters.rating === rating ? 'active' : ''}`}
              onClick={() => handleRatingChange(filters.rating === rating ? 0 : rating)}
            >
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`fas fa-star ${i < rating ? 'filled' : ''}`}
                  ></i>
                ))}
              </div>
              <span>& Up</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="filter-section activities-section">
        <h4>Activities</h4>
        <div className="filter-options activities-options">
          {activities.map((activity, index) => (
            <label key={index} className="filter-checkbox">
              <input 
                type="checkbox"
                checked={filters.activities.includes(activity)}
                onChange={() => handleActivityChange(activity)}
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-label">{activity}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;