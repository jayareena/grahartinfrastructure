import React from 'react';
import './Slider.css';  // Import the styles for the slider component
import sliderImage from '../images/building.png'; 
import rightImage from '../images/model.png'; // Replace with your image path
import { Link } from 'react-router-dom'; // Import Link for routing

const Slider = () => {
  return (
    <div className="slider-container" data-testid="slider-section">
      <div className="slider-image-wrapper">
        <img src={sliderImage} alt="Construction" className="slider-image" />
        <div className="black-blur-overlay"></div>
        <div className="slogan">Constructing Tomorrow's World</div>
        <div className="slogan1">Collaborate with Grahart to create a future supported by reliable foundations and creative design.</div>
        <div className="right-image-container">
          <img src={rightImage} alt="Right Content" className="right-image" />
        </div>
      </div>

      {/* Link for the Know More button */}
      <Link to="/about">
        <button className="know-more-button">Know More</button>
      </Link>
    </div>
  );
}

export default Slider;
