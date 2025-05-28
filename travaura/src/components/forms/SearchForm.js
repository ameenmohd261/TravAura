import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/searchform.css';

const SearchForm = ({ variant = 'default' }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [travelers, setTravelers] = useState({ adults: 2, children: 0 });
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format dates for URL
    const formattedCheckIn = checkIn ? checkIn.toISOString().split('T')[0] : '';
    const formattedCheckOut = checkOut ? checkOut.toISOString().split('T')[0] : '';
    
    // Create query string
    const params = new URLSearchParams({
      destination,
      checkIn: formattedCheckIn,
      checkOut: formattedCheckOut,
      adults: travelers.adults,
      children: travelers.children
    });
    
    // Navigate to search results
    navigate(`/search?${params.toString()}`);
  };
  
  const incrementTraveler = (type) => {
    setTravelers(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };
  
  const decrementTraveler = (type) => {
    if (travelers[type] > (type === 'adults' ? 1 : 0)) {
      setTravelers(prev => ({
        ...prev,
        [type]: prev[type] - 1
      }));
    }
  };
  
  const totalTravelers = travelers.adults + travelers.children;
  
  return (
    <form className={`search-form search-form-${variant}`} onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group destination">
          <label htmlFor="destination">
            <i className="fas fa-search"></i>
            Destination
          </label>
          <input
            id="destination"
            type="text"
            placeholder="Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group check-in">
          <label htmlFor="check-in">
            <i className="far fa-calendar-alt"></i>
            Check In
          </label>
          <DatePicker
            id="check-in"
            selected={checkIn}
            onChange={date => setCheckIn(date)}
            selectsStart
            startDate={checkIn}
            endDate={checkOut}
            minDate={new Date()}
            placeholderText="Select date"
            className="date-picker"
            dateFormat="MMM d, yyyy"
          />
        </div>
        
        <div className="form-group check-out">
          <label htmlFor="check-out">
            <i className="far fa-calendar-alt"></i>
            Check Out
          </label>
          <DatePicker
            id="check-out"
            selected={checkOut}
            onChange={date => setCheckOut(date)}
            selectsEnd
            startDate={checkIn}
            endDate={checkOut}
            minDate={checkIn || new Date()}
            placeholderText="Select date"
            className="date-picker"
            dateFormat="MMM d, yyyy"
          />
        </div>
        
        <div className="form-group travelers">
          <label htmlFor="travelers">
            <i className="fas fa-user-friends"></i>
            Travelers
          </label>
          <div className="travelers-dropdown-container">
            <button
              type="button"
              className="travelers-dropdown-toggle"
              onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
              aria-expanded={showTravelersDropdown}
              aria-haspopup="true"
            >
              {totalTravelers} {totalTravelers === 1 ? 'Traveler' : 'Travelers'}
            </button>
            
            {showTravelersDropdown && (
              <div className="travelers-dropdown">
                <div className="traveler-type">
                  <span>Adults</span>
                  <div className="counter">
                    <button 
                      type="button" 
                      className="counter-btn" 
                      onClick={() => decrementTraveler('adults')}
                      disabled={travelers.adults <= 1}
                    >
                      −
                    </button>
                    <span className="counter-value">{travelers.adults}</span>
                    <button 
                      type="button" 
                      className="counter-btn" 
                      onClick={() => incrementTraveler('adults')}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="traveler-type">
                  <span>Children</span>
                  <div className="counter">
                    <button 
                      type="button" 
                      className="counter-btn" 
                      onClick={() => decrementTraveler('children')}
                      disabled={travelers.children <= 0}
                    >
                      −
                    </button>
                    <span className="counter-value">{travelers.children}</span>
                    <button 
                      type="button" 
                      className="counter-btn" 
                      onClick={() => incrementTraveler('children')}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button 
                  type="button" 
                  className="apply-btn"
                  onClick={() => setShowTravelersDropdown(false)}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="form-group submit">
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;