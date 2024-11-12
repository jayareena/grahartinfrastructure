// ContactUs.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ContactUs from './ContactUs';

describe('ContactUs Component', () => {
  test('renders the ContactUs component correctly', () => {
    render(
      <BrowserRouter>
        <ContactUs />
      </BrowserRouter>
    );

    // Check if background image renders with correct alt text
    const backgroundImage = screen.getByAltText(/Slogan Background/i);
    expect(backgroundImage).toBeInTheDocument();

    // Check if headings render with correct text
    const heading = screen.getByText(/Your trusted partner for the best service/i);
    expect(heading).toBeInTheDocument();

    const subheading = screen.getByText(/Contact us to begin/i);
    expect(subheading).toBeInTheDocument();

    // Check if button renders with correct text and link
    const button = screen.getByRole('button', { name: /Contact Us/i });
    expect(button).toBeInTheDocument();

    // Check if the button link is correct
    const link = screen.getByRole('link', { name: /Contact Us/i });
    expect(link).toHaveAttribute('href', '/contact');
  });

  // Removed button style check for simplicity
});
