import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // For testing the Link component
import AboutUs from './AboutUs';

describe('AboutUs Component', () => {
    beforeEach(() => {
        render(
            <Router> {/* Wrap component in Router for Link functionality */}
                <AboutUs />
            </Router>
        );
    });

    test('renders the main heading "About Us"', () => {
        const heading = screen.getByRole('heading', { name: /About Us/i });
        expect(heading).toBeInTheDocument();
    });

    test('renders the image with the correct alt text', () => {
        const image = screen.getByAltText('About Us');
        expect(image).toBeInTheDocument();
    });

    test('checks if the image is wrapped in a link to the About page', () => {
        const link = screen.getByRole('link', { name: /About Us/i });
        expect(link).toHaveAttribute('href', '/About');
    });

    test('renders the content paragraph text', () => {
        const contentText = screen.getByText(/At Grahart Infrastructure Pvt Ltd, we are committed to delivering high-quality services and fostering lasting relationships with our clients/i);
        expect(contentText).toBeInTheDocument();
    });
});
