import { render, screen, fireEvent, waitFor } from '@testing-library/react'; 
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';  // Ensure this import is correct

// Mock axios to prevent actual network requests
jest.mock('axios');

describe('Contact Component', () => {

  test('renders the contact form with all input fields and submit button', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    
    // Check if the form title and input fields are rendered
    expect(screen.getByText('Get In Touch With Us')).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('shows error message for invalid email', async () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    // Fill the form with invalid email
    fireEvent.change(screen.getByLabelText(/Your Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'invalid-email' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello, this is a test message.' } });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /Submit/i })); 

    // Wait for the error message to appear
    const errorMessage = await screen.findByText(/Please enter a valid email address/i);

    // Check if the error message is in the document
    expect(errorMessage).toBeInTheDocument();
  });

  

  test('submits the form successfully with valid inputs', async () => {
    axios.post.mockResolvedValue({ data: { message: 'Message sent successfully!' } });

    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    // Fill the form with valid data
    fireEvent.change(screen.getByLabelText(/Your Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello, this is a test message.' } });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Check if the success message is displayed
    await screen.findByText('Message sent successfully!');
  });

  test('displays error message when form submission fails', async () => {
    axios.post.mockRejectedValueOnce({
      response: { data: { message: 'Failed to send the message' } }
    });

    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    // Fill the form with valid data
    fireEvent.change(screen.getByLabelText(/Your Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello, this is a test message.' } });

    // Simulate form submission
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Use regex to find the error message, allowing for flexible matching
    const errorMessage = await screen.findByText(/Failed to send the message/i);

    // Check if the error message is in the document
    expect(errorMessage).toBeInTheDocument();
  });
  
});


