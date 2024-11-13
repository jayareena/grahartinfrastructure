import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

describe('About Component', () => {
  
  // Test for basic rendering without crashing
  it('renders the About component without crashing', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });

  // Test for the main heading presence
  it('displays the main heading with "Grahart Infrastructure Private Limited"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const mainHeading = screen.getByRole('heading', { name: /Grahart Infrastructure Private Limited/i });
    expect(mainHeading).toBeInTheDocument();
  });

  // Test for "About Us" overlay text in the slider section
  it('displays the "About Us" overlay text in the slider section', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const overlayText = screen.getByText(/About Us/i);
    expect(overlayText).toBeInTheDocument();
  });

  // Test for "Our Core Values" section title
  it('renders the core values section with title "Our Core Values"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const coreValuesTitle = screen.getByRole('heading', { name: /Our Core Values/i });
    expect(coreValuesTitle).toBeInTheDocument();
  });

  // Test for each core value title and description presence
  it('renders all core values with titles and descriptions', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const coreValues = ['Safety', 'Quality', 'Integrity', 'Innovation', 'Collaboration', 'Sustainability'];

    coreValues.forEach((value) => {
      const titleElement = screen.getByRole('heading', { name: new RegExp(value, 'i') });
      expect(titleElement).toBeInTheDocument();

      const descriptionElements = screen.getAllByText(new RegExp(`\\b${value}\\b`, 'i'));
      expect(descriptionElements.length).toBeGreaterThan(0);
    });
  });

  // Test for "Our Vision" and "Our Mission" sections with images
  it('renders the "Our Vision" and "Our Mission" sections with their respective images', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const visionTitle = screen.getByRole('heading', { name: /Our Vision/i });
    const missionTitle = screen.getByRole('heading', { name: /Our Mission/i });
    expect(visionTitle).toBeInTheDocument();
    expect(missionTitle).toBeInTheDocument();

    const visionImage = screen.getByAltText('Our Vision');
    const missionImage = screen.getByAltText('Our Mission');
    expect(visionImage).toBeInTheDocument();
    expect(missionImage).toBeInTheDocument();
  });

  // Test for "Our Director's Leadership" section content
  it('renders the "Our Director\'s Leadership" section', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const directorHeading = screen.getByRole('heading', { name: /Our Director's Leadership/i });
    const directorDescription = screen.getByText(/Binil Babu is our visionary leader/i);

    expect(directorHeading).toBeInTheDocument();
    expect(directorDescription).toBeInTheDocument();
  });

  // Test for ContactUs and Footer components presence
  it('renders the ContactUs and Footer components', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const contactUsElements = screen.getAllByText(/Contact Us/i);
    expect(contactUsElements.length).toBeGreaterThan(0);
  });
  // Test for ContactUs and Footer components presence
  it('renders the  and Footer components', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const sliderElement = screen.getByTestId('footer-container');
    expect(sliderElement).toBeInTheDocument();
  });
});
