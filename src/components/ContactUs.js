import React from 'react';
import './ContactUs.css';
import Contimg from '../images/touch-us.png';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="image-container-contactus">
      <img src={Contimg} alt="Slogan Background" className="background-image" />
      <div className="slogan-overlay-contactus">
        <h2>Your trusted partner for the best service </h2>
        <h4>Contact us to begin</h4>
        <div className="contactus-button">
        <Link to="/contact">
          <button className="btn-contact-us">Contact Us</button>
        </Link>
      </div>
        
      </div>
      
    </div>
  );
};

export default ContactUs;
