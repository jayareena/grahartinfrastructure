import React from 'react';
import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section Component', () => {
  beforeEach(() => {
    render(<Section />);
  });

  test('renders the main container', () => {
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveClass('diagonal-container'); // Check for the correct class
  });

  test('renders the left section with title and description', () => {
    const title = screen.getByRole('heading', { name: /building dreams, crafting excellence/i });
    const description = screen.getByText(/grahart infrastructure pvt ltd, where vision becomes reality/i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('renders the right section with the construction image', () => {
    const image = screen.getByAltText(/construction/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('constimg.png')); // Check if the correct image source is used
  });

  test('checks if the section has correct styles applied', () => {
    const mainContainer = screen.getByRole('main');
    expect(mainContainer).toHaveClass('diagonal-container');
  });
});
