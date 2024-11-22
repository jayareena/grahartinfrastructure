import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import abtImg from '../images/aboutus.png'; // Ensure the path is correct

const AboutUs = () => {
    return (
        <div className="full-width-section">
          <center>  
          <h2>About Us
            </h2></center>
            <div className="about-us-container">
                <Link to="/About"> {/* Make the image a link to the About page */}
                    <div className="about-us-image">
                        <img src={abtImg} alt="About Us" />
                    </div>
                </Link>
                <div className="about-us-content">
                    <p>
                    At Grahart Infrastructure Pvt Ltd, we are committed to delivering high-quality services and fostering lasting relationships with our clients. With years of expertise in the construction and infrastructure sector, we strive to create innovative solutions that enhance community development and promote sustainability.

Our mission is to build a better future by leveraging cutting-edge technology and industry best practices to execute projects that not only meet but exceed our clients' expectations. We believe that infrastructure is the backbone of progress, and we are dedicated to contributing to the growth and prosperity of the communities we serve.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
