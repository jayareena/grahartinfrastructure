// Projects.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from './Projects';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Projects Component', () => {
  beforeEach(() => {
    renderWithRouter(<Projects />);
  });

  test('renders the Projects component with heading', () => {
    const headingElement = screen.getByText(/Projects/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('displays the correct number of projects per page', () => {
    const projectCards = screen.getAllByRole('link');
    expect(projectCards).toHaveLength(4); // Ensure 4 projects are displayed per page
  });

  test('displays pagination dots with correct active dot', () => {
    const totalPages = Math.ceil(20 / 4); // Adjust based on your actual total items
    const dots = screen.getAllByRole('button', { name: /Page/i }); // Use a regex to find buttons labeled "Page"
    expect(dots).toHaveLength(totalPages); // Adjust based on total number of pages

    const activeDot = dots.find(dot => dot.classList.contains('active'));
    expect(activeDot).toBeInTheDocument();
  });

  test('navigates to the next page when "Next" button is clicked', () => {
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    const updatedProjects = screen.getAllByRole('link');
    expect(updatedProjects).toHaveLength(4); // Still should be 4 projects on next page

    const dots = screen.getAllByRole('button', { name: /Page/i });
    const activeDot = dots.find(dot => dot.classList.contains('active'));
    expect(activeDot).not.toBeNull(); // Ensure there's an active dot after navigating
  });

  test('navigates to the previous page when "Back" button is clicked', () => {
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton); // Navigate to next page

    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton); // Navigate back

    const updatedProjects = screen.getAllByRole('link');
    expect(updatedProjects).toHaveLength(4); // Should still be 4 projects

    const firstDot = screen.getAllByRole('button', { name: /Page/i })[0];
    expect(firstDot.classList.contains('active')).toBe(true); // Ensure the first dot is active
  });

  test('disables "Back" button on the first page', () => {
    const backButton = screen.getByRole('button', { name: /back/i });
    expect(backButton).toBeDisabled(); // Ensure Back button is disabled
  });

  test('disables "Next" button on the last page', () => {
    const nextButton = screen.getByRole('button', { name: /next/i });

    // Click until reaching the last page
    while (!nextButton.disabled) {
      fireEvent.click(nextButton);
    }

    expect(nextButton).toBeDisabled(); // Ensure Next button is disabled
  });
});
