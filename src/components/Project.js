// Projects.js
import React from 'react';
import './Project.css'; // External CSS for the overall styling
import proImage from '../images/project.png';
import Faq from './Faq';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Project = () => {
  const projectImages = [
    {
      image: '/images/home1.jpg', // Replace with the correct image path
    },
    {
      image: '/images/home2.jpg', // Replace with the correct image path
    },
    {
        image: '/images/house3.jpg', // Replace with the correct image path
      },
      {
        image: '/images/house4.jpg', // Replace with the correct image path
      },
      {
        image: '/images/home3.jpg', // Replace with the correct image path
      },
      {
        image: '/images/home4.jpg', // Replace with the correct image path
      },
      {
        image: '/images/home6.png', // Replace with the correct image path
      },
      {
        image: '/images/home7.png', // Replace with the correct image path
      },
      {
        image: '/images/home8.jpg', // Replace with the correct image path
      },
    // Add more project images here...
  ];

  return (
    <div className="projectss-container">
        <div className="pro-container">
        <div className="[projectssmage-container">
          <img src={proImage} alt="Slider" className="slider-image" />
          <div className="projectssoverlay-text-container">
            <h1 className="projectssoverlay-text">Projects</h1>
          </div>
        </div>
      </div>
      {/* Introduction */}
      <h2>Our Projects</h2>
      <p>Take a look at some of our most prominent construction projects that demonstrate our dedication to quality and innovation.</p>
      
      {/* Project Images */}
      <div className="projectss-grid">
        {projectImages.map((project, index) => (
          <div className="projectss-image-container" key={index}>
            <img src={project.image} alt={`Project ${index + 1}`} className="projectss-image" />
          </div>
        ))}
      </div>
      <Faq/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Project;
