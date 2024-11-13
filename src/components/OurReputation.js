import React from 'react';
import './OurReputation.css';  // Assuming custom CSS for styling
import { FaCrown, FaUsers, FaDraftingCompass } from 'react-icons/fa'; // Icons for the cards

const OurReputation = () => {
  return (
    <div className="reputation-container">
      <h2>Our Reputation</h2>
      <div className="reputation-cards">
        <div className="reputation-card">
          <FaCrown className="icon" data-testid="FaCrown-icon" />
          <h3>Best Services</h3>
          <p>We committed to providing top-quality services tailored to meet every construction need.</p>
        </div>
        <div className="reputation-card">
          <FaUsers className="icon" data-testid="FaUsers-icon" />
          <h3>Best Teams</h3>
          <p>Our expert team brings together unparalleled skills and experience to ensure the success of every project.</p>
        </div>
        <div className="reputation-card">
          <FaDraftingCompass className="icon" data-testid="FaDraftingCompass-icon" />
          <h3>Best Designs</h3>
          <p>We pride ourselves on delivering innovative and aesthetically striking designs that stand the test of time.</p>
        </div>
      </div>
    </div>
  );
};

export default OurReputation;
