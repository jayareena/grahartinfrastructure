import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section" data-testid="footer-section">
          <h3>Grahart Infrastructure</h3>
          <Link to="/About">
            <p>
              Grahart Infrastructure specializes in building homes and commercial structures with quality and care. 
              We focus on innovation, sustainability, and client satisfaction. From homes to towers, we bring your vision to life with precision and expertise.
            </p>
          </Link>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <p> <Link to="/Service">
            
              Construction<br /><br />
              Telecom<br /><br />
            
          </Link></p>
        </div>

        <div className="footer-section" >
          <h3>Contact Us</h3>
          <address>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
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
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:mail@grahartinfrastructure.com" className="email-link">
                &nbsp;&nbsp;mail@grahartinfrastructure.com
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 
              <a href="tel:+918848482764" className="phone-link">
                &nbsp;&nbsp;+91 8848482764
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} />
              <a href="https://wa.me/918848482764" className="whatsapp-link">
                &nbsp;&nbsp;+91 8848482764
              </a>
            </p>
          </address>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <p>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/grahart_builders"  target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
       <center> <p>&copy; 2024 Grahart Infrastructure Pvt Ltd. All rights reserved.</p></center>
      </div>
    </footer>
  );
};

export default Footer;
