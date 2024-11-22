import React from 'react';
import './Experience.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import expImg1 from '../images/exp1.png';
import expImg2 from '../images/exp2.png';
import expImg3 from '../images/exp3.png';
import expImg4 from '../images/exp4.png';

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="stats-section">
        <div className="stat-section1">
          <div className="stat-item1">
            <img src={expImg1} alt="Projects Completed Icon" className="stat-icon" />
            <div className="stat-text">
              <h2>123</h2>
              <h3>Projects Completed</h3>
            </div>
          </div>
        </div>

        <div className="stat-section2">
          <div className="stat-item2">
            <img src={expImg2} alt="Happy Clients Icon" className="stat-icon" />
            <div className="stat-text">
              <h2>84</h2>
              <h3>Happy Clients</h3>
            </div>
          </div>
        </div>

        <div className="stat-section3">
          <div className="stat-item3">
            <img src={expImg3} alt="Awards Win Icon" className="stat-icon" />
            <div className="stat-text">
              <h2>3</h2>
              <h3>Awards Win</h3>
            </div>
          </div>
        </div>

        <div className="stat-section4">
          <div className="stat-item4">
            <img src={expImg4} alt="Years in Business Icon" className="stat-icon" />
            <div className="stat-text">
              <h2>10</h2>
              <h3>Years in Business</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="text-section">
        <h2>10 Years Experience</h2>
        <p>Established in 2014, Grahart Infrastructure Pvt. Ltd. has emerged as a trusted leader in delivering exceptional construction and infrastructure services across Punalur, Kerala. Over the years, we have built a reputation for excellence, innovation, and reliability, earning the confidence of countless clients and communities we serve.

        </p><p>Our mission is to transform visions into reality by crafting iconic structures that stand the test of time. From beautiful homes that provide comfort and security to commercial spaces that fuel business growth, and infrastructure projects that connect communities, we ensure every endeavor reflects our commitment to quality and meticulous attention to detail.

</p><p>With a legacy of over a decade in the industry, we bring unmatched expertise to every project. Our dedicated team leverages cutting-edge technologies, sustainable practices, and industry best standards to deliver projects that not only meet expectations but consistently exceed them.
</p><p>
We believe that construction is more than just building structures—it’s about creating meaningful spaces that inspire, empower, and endure. At Grahart Infrastructure, we take pride in being a partner of choice for those seeking reliability, innovation, and excellence in construction.</p><br></br><Link to="/contact"> <button className="contact-button">Contact Us</button></Link> </div>
    </div>
  );
};

export default Experience;
