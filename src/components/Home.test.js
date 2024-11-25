// src/components/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

 
  it('renders the Our Slider section', () => {
    const sliderElement = screen.getByTestId('slider-section');
    expect(sliderElement).toBeInTheDocument();
});


  

  it('renders the Our Reputation section', () => {
    const reputationElement = screen.getByText(/our reputation/i);
    expect(reputationElement).toBeInTheDocument();
  });

  it('renders the About Us section', () => {
    const aboutUsElement = screen.getByText(/about us/i);
    expect(aboutUsElement).toBeInTheDocument();
  });

 
  it('renders the Our Services section', () => {
    const projectElements = screen.queryAllByText(/services/i);
    expect(projectElements.length).toBeGreaterThan(0); // or whatever condition makes sense
  });
  

  it('renders the Experience section', () => {
    // Make sure this matches only the correct element
    const experienceElements = screen.getAllByText(/experience/i);
    expect(experienceElements.length).toBeGreaterThan(0); // Check if there are elements
    expect(experienceElements[0]).toBeInTheDocument(); // Ensure at least the first one is in the document
  });

  
  it('renders the Our Section section', () => {
    const sliderElement = screen.getByTestId('section');
    expect(sliderElement).toBeInTheDocument();
});


  
  it('renders the Our Projects section', () => {
    const projectElements = screen.queryAllByText(/projects/i);
    expect(projectElements.length).toBeGreaterThan(0); // or whatever condition makes sense
  });
  

 
  it('renders the Our Contact us section', () => {
    const projectElements = screen.queryAllByText(/contact us/i);
    expect(projectElements.length).toBeGreaterThan(0); // or whatever condition makes sense
  });

  
});
