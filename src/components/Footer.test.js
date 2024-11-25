// src/components/Footer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer'; // Ensure this path is correct
import { BrowserRouter } from 'react-router-dom';

// Utility function to wrap the Footer component with Router
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Footer Component', () => {
  beforeEach(() => {
    renderWithRouter(<Footer />);
  });

  test('renders the Footer component without crashing', () => {
    expect(screen.getAllByText(/Grahart Infrastructure/i)[0]).toBeInTheDocument();
  });

  test('displays the "Grahart Infrastructure" heading', () => {
    const headingElement = screen.getByRole('heading', { name: /Grahart Infrastructure/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('displays the "Our Services" heading', () => {
    const servicesHeading = screen.getByRole('heading', { name: /Our Services/i });
    expect(servicesHeading).toBeInTheDocument();
  });

  test('displays the "Contact Us" heading', () => {
    const contactUsHeading = screen.getByRole('heading', { name: /Contact Us/i });
    expect(contactUsHeading).toBeInTheDocument();
  });

  test('displays the contact address link', () => {
    const addressLink = screen.getByRole('link', { name: /Karthika Complex/i });
    expect(addressLink).toBeInTheDocument();
    expect(addressLink).toHaveAttribute('href', expect.stringContaining('https://www.google.com/maps/search/?api=1&query=XXXlll/667'));
  });

  test('displays the email link with correct href', () => {
    const emailLink = screen.getByRole('link', { name: /mail@grahartinfrastructure.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:mail@grahartinfrastructure.com');
  });

  test('displays the phone number link with correct href', () => {
    const phoneLink = screen.getAllByRole('link', { name: /\+91 8848482764/i })[0];
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+918848482764');
  });

  test('displays the WhatsApp link with correct href', () => {
    const whatsappLink = screen.getAllByRole('link', { name: /\+91 8848482764/i })[1];
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/918848482764');
  });

  test('renders social media icons with links', () => {
    const socialLinks = [
      { name: 'Facebook', icon: /facebook/i },
      { name: 'LinkedIn', icon: /linkedin/i },
      { name: 'Instagram', icon: /instagram/i },
    ];

    socialLinks.forEach(({ name }) => {
      const socialLink = screen.getByRole('link', { name: new RegExp(name, 'i') });
      expect(socialLink).toBeInTheDocument();
      expect(socialLink.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is present
    });
  });

  test('renders the copyright text', () => {
    const footerElement = screen.getByText(/© 2024 Grahart Infrastructure Pvt Ltd/i);
    expect(footerElement).toBeInTheDocument();
  });
});
