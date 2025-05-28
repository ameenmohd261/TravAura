import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import DestinationSlider from '../components/sections/DestinationSlider';
import FeatureSection from '../components/sections/FeatureSection';
import PopularExperiences from '../components/sections/PopularExperiences';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import TravelTipsSection from '../components/sections/TravelTipsSection';
import NewsletterBanner from '../components/sections/NewsletterBanner';
import CallToAction from '../components/sections/CallToAction';
import '../styles/homepage.css';

// Mock data for destinations
const featuredDestinations = [
  {
    id: 1,
    title: 'Santorini',
    location: 'Greece',
    image: '/assets/images/santorini.jpg',
    rating: 4.9,
    price: 1299,
    currency: 'USD'
  },
  {
    id: 2,
    title: 'Bali',
    location: 'Indonesia',
    image: '/assets/images/bali.jpg',
    rating: 4.8,
    price: 999,
    currency: 'USD'
  },
  {
    id: 3,
    title: 'Kyoto',
    location: 'Japan',
    image: '/assets/images/kyoto.jpg',
    rating: 4.7,
    price: 1499,
    currency: 'USD'
  },
  {
    id: 4,
    title: 'Paris',
    location: 'France',
    image: '/assets/images/paris.jpg',
    rating: 4.6,
    price: 1199,
    currency: 'USD'
  },
  {
    id: 5,
    title: 'Machu Picchu',
    location: 'Peru',
    image: '/assets/images/machu-picchu.jpg',
    rating: 4.9,
    price: 1599,
    currency: 'USD'
  },
  {
    id: 6,
    title: 'Dubai',
    location: 'UAE',
    image: '/assets/images/dubai.jpg',
    rating: 4.7,
    price: 1399,
    currency: 'USD'
  }
];

const trendingDestinations = [
  {
    id: 7,
    title: 'Maldives',
    location: 'Maldives',
    image: '/assets/images/maldives.jpg',
    rating: 4.9,
    price: 2199,
    currency: 'USD'
  },
  {
    id: 8,
    title: 'Barcelona',
    location: 'Spain',
    image: '/assets/images/barcelona.jpg',
    rating: 4.6,
    price: 899,
    currency: 'USD'
  },
  {
    id: 9,
    title: 'Cape Town',
    location: 'South Africa',
    image: '/assets/images/cape-town.jpg',
    rating: 4.7,
    price: 1299,
    currency: 'USD'
  },
  {
    id: 10,
    title: 'New York',
    location: 'USA',
    image: '/assets/images/new-york.jpg',
    rating: 4.8,
    price: 1499,
    currency: 'USD'
  },
  {
    id: 11,
    title: 'Rio de Janeiro',
    location: 'Brazil',
    image: '/assets/images/rio.jpg',
    rating: 4.5,
    price: 1199,
    currency: 'USD'
  },
  {
    id: 12,
    title: 'Sydney',
    location: 'Australia',
    image: '/assets/images/sydney.jpg',
    rating: 4.7,
    price: 1799,
    currency: 'USD'
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection 
        title="Discover Your Dream Destination"
        subtitle="Explore breathtaking locations, unique experiences, and create memories that last a lifetime with TravAura."
        backgroundImage="/assets/images/hero-background.jpg"
      />
      
      <DestinationSlider 
        title="Featured Destinations"
        subtitle="Explore our handpicked selection of the world's most amazing places"
        destinations={featuredDestinations}
        viewAllLink="/destinations"
      />
      
      <FeatureSection />
      
      <PopularExperiences />
      
      <DestinationSlider 
        title="Trending Destinations"
        subtitle="See where travelers are heading to right now"
        destinations={trendingDestinations}
        viewAllLink="/destinations"
      />
      
      <TestimonialsSection />
      
      <TravelTipsSection />
      
      <NewsletterBanner />
      
      <CallToAction 
        title="Ready for your next adventure?"
        subtitle="Book your dream vacation today and save up to 30% on selected destinations"
      />
    </div>
  );
};

export default HomePage;