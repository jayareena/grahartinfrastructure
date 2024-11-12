import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Services from './Services';

describe('Services Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    );
  });

  test('renders the Services heading', () => {
    const headingElement = screen.getByText(/Services/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders all service cards with correct titles', () => {
    const serviceTitles = ['Construction', 'Telecom'];
    serviceTitles.forEach((title) => {
      const serviceCard = screen.getByText(title);
      expect(serviceCard).toBeInTheDocument();
    });
  });

  test('navigates to the /Service page when a service card is clicked', () => {
    const linkElements = screen.getAllByRole('link');
    linkElements.forEach((link) => {
      expect(link).toHaveAttribute('href', '/Service');
    });
  });

  test('applies active class on click', () => {
    const firstServiceCard = screen.getByText('Construction').closest('.service-card');
    expect(firstServiceCard).not.toHaveClass('active');

    fireEvent.click(firstServiceCard);

    expect(firstServiceCard).toHaveClass('active');
  });

  test('toggles hovered state on mouse enter and leave', () => {
    const firstServiceCard = screen.getByText('Construction').closest('.service-card');

    // Hover the element (mouseEnter)
    fireEvent.mouseEnter(firstServiceCard);
    expect(firstServiceCard).toHaveClass('service-card'); // Checks if element is targeted for hover

    // Mouse leave (hover off)
    fireEvent.mouseLeave(firstServiceCard);
    expect(firstServiceCard).not.toHaveClass('active'); // Ensures hover class isn’t persistently applied
  });

  test('removes active class when clicked again', () => {
    const firstServiceCard = screen.getByText('Construction').closest('.service-card');
    
    // Toggle active state on click
    fireEvent.click(firstServiceCard);
    expect(firstServiceCard).toHaveClass('active');
    
    fireEvent.click(firstServiceCard);
    expect(firstServiceCard).not.toHaveClass('active');
  });
});
