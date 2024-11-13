// service.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Service from './Service';
import { BrowserRouter as Router } from 'react-router-dom';
import Testimonial from './Testimonial';
import Faq from './Faq';

describe('Service Component', () => {

  test('renders the Service page with correct title', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const services = screen.getAllByText(/Service/i);
    expect(services.length).toBeGreaterThan(0); // Ensure the text appears multiple times if intended
  });

  test('renders "Our Best Services" heading', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const heading = screen.getByText(/Our Best Services/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders the "Know More" button', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const button = screen.getByRole('button', { name: /Know More/i });
    expect(button).toBeInTheDocument();
  });

  test('navigates to the About page when "Know More" is clicked', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const button = screen.getByRole('button', { name: /Know More/i });
    fireEvent.click(button);

    expect(window.location.pathname).toBe('/about'); // checks that clicking navigates correctly
  });

  test('displays services cards', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const constructionService = screen.getByText(/Construction Services/i);
    const telecomServices = screen.getAllByText(/Telecom Services/i);
    expect(telecomServices).toHaveLength(2); // Expecting both <p> and <h3> elements
    expect(constructionService).toBeInTheDocument();
  });

  test('renders images in service cards', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0); // Ensure images are rendered
  });

  test('renders hover effects on images', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const imageContainers = screen.getAllByAltText(/Project/i); // Adjust alt text accordingly
    expect(imageContainers.length).toBeGreaterThan(0);

    fireEvent.mouseOver(imageContainers[0]); // Simulate hover
    const overlay = screen.getByText(/Custom Residential Homes/i);
    expect(overlay).toBeInTheDocument();
  });

  test('renders the "Why Choose Us" section', () => {
    render(
      <Router>
        <Service />
      </Router>
    );

    const whyChooseUs = screen.getByText(/Why Choose Us?/i);
    expect(whyChooseUs).toBeInTheDocument();
  });
});

// Separate tests for Testimonial and Faq components
describe('Testimonial Component', () => {
  test('renders the Testimonial component', () => {
    render(<Testimonial />);
    
    const testimonialHeader = screen.queryByText(/What Our Clients Say/i);
    expect(testimonialHeader).toBeInTheDocument();
  });
});

describe('Faq Component', () => {
  test('renders the Faq component', () => {
    render(<Faq />);
    
    const faqHeader = screen.queryByText(/Frequently Asked Questions/i);
    expect(faqHeader).toBeInTheDocument();
  });
});
