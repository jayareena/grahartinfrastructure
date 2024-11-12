// Slider.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Slider from './Slider'; // Adjust path as necessary

describe('Slider Component', () => {
  test('renders slider component correctly', () => {
    render(
      <BrowserRouter>
        <Slider />
      </BrowserRouter>
    );

    // Check if main image is present
    const sliderImage = screen.getByAltText(/Construction/i);
    expect(sliderImage).toBeInTheDocument();

    // Check if overlay slogan text is present
    const slogan = screen.getByText(/Constructing Tomorrow's World/i);
    expect(slogan).toBeInTheDocument();

    // Check if secondary slogan text is present
    const slogan1 = screen.getByText(/Collaborate with Grahart to create a future/i);
    expect(slogan1).toBeInTheDocument();

    // Check if right side image is present
    const rightImage = screen.getByAltText(/Right Content/i);
    expect(rightImage).toBeInTheDocument();

    // Check if Know More button is present and linked to the correct path
    const knowMoreButton = screen.getByRole('button', { name: /Know More/i });
    expect(knowMoreButton).toBeInTheDocument();
    expect(knowMoreButton.closest('a')).toHaveAttribute('href', '/about');
  });
});
