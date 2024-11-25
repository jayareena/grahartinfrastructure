import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Projects from './Projects';
import { projectData } from './Projects';


// Mock the image imports to prevent issues during testing
jest.mock('../images/home1.jpg', () => 'mockImage1');
jest.mock('../images/home2.jpg', () => 'mockImage2');
jest.mock('../images/house3.jpg', () => 'mockImage3');
jest.mock('../images/house4.jpg', () => 'mockImage4');
jest.mock('../images/h3.jpg', () => 'mockImage5');
jest.mock('../images/h4.png', () => 'mockImage6');
jest.mock('../images/h5.png', () => 'mockImage7');
jest.mock('../images/h6.png', () => 'mockImage8');
jest.mock('../images/home3.jpg', () => 'mockImage9');
jest.mock('../images/home4.jpg', () => 'mockImage10');
jest.mock('../images/house5.jpg', () => 'mockImage11');
jest.mock('../images/house4.jpg', () => 'mockImage12');


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

  test('renders images for each project on the page', () => {
    console.log(projectData);
    const currentProjects = projectData.slice(0, 4); // Get the projects displayed on the first page
    const projectImages = screen.getAllByRole('img');
    expect(projectImages).toHaveLength(4); // Ensure 4 images are displayed per page
    currentProjects.forEach((project, index) => {
      expect(projectImages[index]).toHaveAttribute('src', project.imageUrl);
      expect(projectImages[index]).toHaveAttribute('alt', 'Project');
    });
  });
  
  

  test('displays pagination dots with correct active dot', () => {
    const totalPages = Math.ceil(12 / 4); // Adjust based on your actual total items
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

    const updatedImages = screen.getAllByRole('img');
    expect(updatedImages).toHaveLength(4); // Ensure images are displayed for next page projects

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

    const updatedImages = screen.getAllByRole('img');
    expect(updatedImages).toHaveLength(4); // Ensure images are displayed on the first page

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
