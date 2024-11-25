import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

describe('About Component', () => {

  it('renders the About component without crashing', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });

  it('displays the main heading with "Grahart Infrastructure Private Limited"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const mainHeading = screen.getByRole('heading', { name: /Grahart Infrastructure Private Limited/i });
    expect(mainHeading).toBeInTheDocument();
  });

  it('displays the "About Us" overlay text in the slider section', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const overlayText = screen.getByText(/About Us/i);
    expect(overlayText).toBeInTheDocument();
  });

  it('renders the core values section with title "Our Core Values"', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const coreValuesTitle = screen.getByRole('heading', { name: /Our Core Values/i });
    expect(coreValuesTitle).toBeInTheDocument();
  });

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
 
});
