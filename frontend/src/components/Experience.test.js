// Experience.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Experience from './Experience';

describe('Experience Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Experience />
      </BrowserRouter>
    );
  });

  test('renders the experience section', () => {
    const experienceSection = screen.getByText(/10 Years Experience/i);
    expect(experienceSection).toBeInTheDocument();
  });

  test('renders all stat items with correct text and icons', () => {
    const statItems = [
      { text: 'Projects Completed', count: '123' },
      { text: 'Happy Clients', count: '84' },
      { text: 'Awards Win', count: '3' },
      { text: 'Years in Business', count: '10' },
    ];

    statItems.forEach(({ text, count }) => {
      const statText = screen.getByText(text);
      const statCount = screen.getByText(count);
      expect(statText).toBeInTheDocument();
      expect(statCount).toBeInTheDocument();
    });
  });

  test('renders the contact button with correct text', () => {
    const contactButton = screen.getByRole('button', { name: /Contact Us/i });
    expect(contactButton).toBeInTheDocument();
  });

  test('contact button has correct link', () => {
    const contactLink = screen.getByRole('link', { name: /Contact Us/i });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
