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
              <p>Projects Completed</p>
            </div>
          </div>
        </div>

        <div className="stat-section2">
          <div className="stat-item2">
            <img src={expImg2} alt="Happy Clients Icon" className="stat-icon" />
            <div className="stat-text">
              <h2>84</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="stat-section3">
          <div className="stat-item3">
            <img src={expImg3} alt="Awards Win Icon" className="stat-icon" />
            <div className="stat-text">
              <h2>3</h2>
              <p>Awards Win</p>
            </div>
          </div>
        </div>

        <div className="stat-section4">
          <div className="stat-item4">
            <img src={expImg4} alt="Years in Business Icon" className="stat-icon" />
            <div className="stat-text">
              <h2>10</h2>
              <p>Years in Business</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-section">
        <h1>10 Years Experience</h1>
        <p>Grahart Infrastructure, established in 2014, has been the trusted leader in delivering exceptional construction services across Punalur, Kerala. With a legacy of excellence and innovation, we transform visions into reality, building iconic structures that stand the test of time. Whether it's homes, commercial spaces, or infrastructure projects, we bring unmatched expertise and a commitment to quality that our clients rely on.</p> <Link to="/contact"> <button className="contact-button">Contact Us</button></Link> 
      </div>
    </div>
  );
};

export default Experience;
