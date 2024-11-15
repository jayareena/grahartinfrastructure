import React, { useState, useEffect } from 'react';
import './Contact.css'; // Import the CSS file
import contactImage from '../images/contactus.png';
import sliderImage from '../images/contact.jpg'; // Example image for right section
import Footer from './Footer';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation check
    if (!formData.email.includes('@')) {
      setSubmitStatus('Error: Please enter a valid email address');
      return;
    }

    // Make a POST request to send form data to the backend
    axios.post('http://localhost:5000/send-email', formData)
      .then((response) => {
        setSubmitStatus('Message sent successfully!');
        // Clear form after submission
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        if (error.response) {
          setSubmitStatus(`Error: ${error.response.data.message || 'Failed to send the message'}`);
        } else {
          setSubmitStatus('Error: Failed to send the message');
        }
      });
  };

  // Auto-dismiss the success message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'Message sent successfully!') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div>
      {/* Slider Section */}
      <div className="reachout-container">
        <div className="reachoutimage-container">
          <img src={sliderImage} alt="Slider" className="slider-image" />
          <div className="overlay-text-container">
            <h1 className="overlay-text">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-container">
        <h2 className="header-text">Get In Touch With Us</h2>
        <div className="form-image-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label className="label-text">
                Your Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label className="label-text">
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label className="label-text">
                Message
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  required
                  className="textarea-field"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>

            {/* Display submit status message */}
            {submitStatus && (
              <p className={`message ${submitStatus.includes('Error') ? 'error' : 'success'}`}>
                {submitStatus}
              </p>
            )}
          </div>
          <div className="image1-container">
            <img src={contactImage} alt="Person at desk" className="contact-image" />
          </div>
        </div>

        {/* Contact Details and Map Section */}
        <div className="details-map-container">
          <div className="contact-details">
            <h3>Contact Details</h3>
            <p>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <strong> CALL US</strong><br />
              <a href="tel:+918848482764" className="phone-link">&nbsp;&nbsp;+91 8848482764</a> <br />
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <strong> EMAIL US</strong><br />
              <a href="mailto:mail@grahartinfrastructure.com" className="email-link"> &nbsp;&nbsp;mail@grahartinfrastructure.com</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=XXXlll/667, Karthika Complex, Kachery Road, Opp. Sub Registrar Office, Punalur, Kollam, Kerala-691305"
                target="_blank" 
                rel="noopener noreferrer" 
                className="address-link"
              >
                &nbsp;&nbsp;XXXlll/667, Karthika Complex <br />
                Kachery Road, Opp. Sub Registrar Office <br />
                Punalur, Kollam (Dist.), Kerala-691305
              </a>
            </p>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2827.0950122101144!2d76.92306897501874!3d9.01915549104182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDEnMDkuMCJOIDc2wrA1NSczMi4zIkU!5e1!3m2!1sen!2sgh!4v1728552614578!5m2!1sen!2sgh"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
