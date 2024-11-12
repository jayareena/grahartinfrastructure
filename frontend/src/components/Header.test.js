// Header.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';
import '@testing-library/jest-dom'; // Change this import statement

// Mocking the useNavigate hook from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Header Component', () => {
  it('renders the logo and navigation links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verify logo
    const logo = screen.getByAltText('Grahart');
    expect(logo).toBeInTheDocument();

    // Verify navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
  });

  it('navigates to Home page when logo is clicked', () => {
    const navigateMock = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const logo = screen.getByAltText('Grahart'); // Fix the alt text to match your logo
    fireEvent.click(logo);
    expect(navigateMock).toHaveBeenCalledWith('/Home');
  });

  it('toggles the mobile menu when hamburger icon is clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const hamburger = screen.getByRole('button');
    const navMenu = screen.getByRole('navigation');

    // Initially, nav menu should be hidden on mobile
    expect(navMenu).toHaveClass('nav-menu');

    // Click to open the menu
    fireEvent.click(hamburger);
    expect(navMenu).toHaveClass('nav-active');

    // Click again to close the menu
    fireEvent.click(hamburger);
    expect(navMenu).not.toHaveClass('nav-active');
  });

  it('closes mobile menu after clicking a link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const hamburger = screen.getByRole('button');
    const homeLink = screen.getByText('Home');

    // Open the menu
    fireEvent.click(hamburger);

    // Click on the Home link
    fireEvent.click(homeLink);

    const navMenu = screen.getByRole('navigation');
    expect(navMenu).not.toHaveClass('nav-active');
  });
});
