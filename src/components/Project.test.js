import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from './Project';
import '@testing-library/jest-dom/';

// Mocking the images used in Project component to avoid errors in test
jest.mock('../images/project.png', () => 'project.png');
jest.mock('../images/home1.jpg', () => 'home1.jpg');
jest.mock('../images/home2.jpg', () => 'home2.jpg');
jest.mock('../images/house3.jpg', () => 'house3.jpg');
jest.mock('../images/house4.jpg', () => 'house4.jpg');
jest.mock('../images/home3.jpg', () => 'home3.jpg');
jest.mock('../images/home4.jpg', () => 'home4.jpg');
jest.mock('../images/home6.png', () => 'home6.png');
jest.mock('../images/home7.png', () => 'home7.png');
jest.mock('../images/home8.jpg', () => 'home8.jpg');

describe('Project Component', () => {
  test('renders the Project component with title and description', () => {
    render(<Project />);
    expect(screen.getByText('Our Projects')).toBeInTheDocument();
    expect(screen.getByText('Take a look at some of our most prominent construction projects that demonstrate our dedication to quality and innovation.')).toBeInTheDocument();
  });

  test('renders all project images', () => {
    render(<Project />);
    const projectImages = screen.getAllByRole('img', { name: /Project \d+/ });
    expect(projectImages.length).toBe(9); // Assuming there are 9 images in total as per the component
  });

  test('includes the FAQ, ContactUs, and Footer components', () => {
    render(<Project />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText(/Send Message/i)).toBeInTheDocument(); // Part of ContactUs
    expect(screen.getByText(/©/i)).toBeInTheDocument(); // Common symbol in Footer content
  });

  test('renders the overlay text "Projects" on the main image', () => {
    render(<Project />);
    const overlayText = screen.getByText('Projects');
    expect(overlayText).toBeInTheDocument();
    expect(overlayText).toHaveClass('projectssoverlay-text'); // Verifying class name
  });
});
