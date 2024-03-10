// events.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Events from '../../../pages/about/events'
describe('Events Component', () => {
  test('renders events page correctly', () => {
    render(<Events />);
    
    // Check if certain elements are present on the page
    expect(screen.getByText('Scale Your Feeds Without Headaches')).toBeInTheDocument();
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
    expect(screen.getByText('Unmatched Infrastructure Performance for Any Size Blog')).toBeInTheDocument();
    expect(screen.getByText('Activity Feed Cloud Components')).toBeInTheDocument();
  });

  test('renders event categories correctly', () => {
    render(<Events />);
    
    // Check if event categories are rendered
    expect(screen.getByText('Conferences')).toBeInTheDocument();
    expect(screen.getByText('Workshops')).toBeInTheDocument();
    // Add more checks for other event categories
  });

  // Add more test cases based on your component's functionality
});
