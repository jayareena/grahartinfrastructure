import React from 'react';
import { render, screen } from '@testing-library/react';
import OurReputation from './OurReputation'; // Adjust the import based on your file structure

describe('OurReputation Component', () => {
  beforeEach(() => {
    render(<OurReputation />);
  });

  test('renders Our Reputation heading', () => {
    const heading = screen.getByText(/our reputation/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders Best Services card with correct text', () => {
    const bestServicesText = screen.getByText(/best services/i);
    expect(bestServicesText).toBeInTheDocument();

    const servicesDescription = screen.getByText(/we committed to providing top-quality services tailored to meet every construction need/i);
    expect(servicesDescription).toBeInTheDocument();
  });

  test('renders Best Teams card with correct text', () => {
    const bestTeamsText = screen.getByText(/best teams/i);
    expect(bestTeamsText).toBeInTheDocument();

    const teamsDescription = screen.getByText(/our expert team brings together unparalleled skills and experience to ensure the success of every project/i);
    expect(teamsDescription).toBeInTheDocument();
  });

  test('renders Best Designs card with correct text and icon', () => {
    const bestDesignsText = screen.getByText(/best designs/i);
    expect(bestDesignsText).toBeInTheDocument();

    const designsDescription = screen.getByText(/we pride ourselves on delivering innovative and aesthetically striking designs that stand the test of time/i);
    expect(designsDescription).toBeInTheDocument();

    // Assuming you have a specific test ID for the icon
    const compassIcon = screen.queryByTestId('FaDraftingCompass-icon');
    expect(compassIcon).toBeInTheDocument();
  });
});
