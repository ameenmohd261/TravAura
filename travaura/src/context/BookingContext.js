import React, { createContext, useState, useEffect } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    destination: null,
    checkIn: null,
    checkOut: null,
    adults: 1,
    children: 0,
    rooms: 1,
    activities: [],
    totalPrice: 0,
  });

  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  const updateBooking = (bookingData) => {
    setBooking(prev => ({ ...prev, ...bookingData }));
  };

  const addToRecentSearches = (search) => {
    const newSearches = [search, ...recentSearches.filter(s => 
      s.destination !== search.destination
    )].slice(0, 5);
    
    setRecentSearches(newSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newSearches));
  };

  const calculatePrice = () => {
    let total = 0;
    
    if (booking.destination) {
      // Base price per night
      const basePrice = booking.destination.pricePerNight || 0;
      
      // Calculate number of nights
      const checkIn = booking.checkIn ? new Date(booking.checkIn) : null;
      const checkOut = booking.checkOut ? new Date(booking.checkOut) : null;
      const nights = checkIn && checkOut ? 
        Math.max(1, Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))) : 0;
      
      // Base room cost
      total += basePrice * nights * booking.rooms;
      
      // Add activities cost
      if (booking.activities && booking.activities.length > 0) {
        booking.activities.forEach(activity => {
          total += activity.price * (booking.adults + booking.children);
        });
      }
    }
    
    updateBooking({ totalPrice: total });
    return total;
  };

  const resetBooking = () => {
    setBooking({
      destination: null,
      checkIn: null,
      checkOut: null,
      adults: 1,
      children: 0,
      rooms: 1,
      activities: [],
      totalPrice: 0,
    });
  };

  return (
    <BookingContext.Provider value={{ 
      booking, 
      updateBooking, 
      recentSearches, 
      addToRecentSearches,
      calculatePrice,
      resetBooking
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;