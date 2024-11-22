// Project.js
import React from 'react';
import './Project.css'; // External CSS for the overall styling
import proImage from '../images/project.jpg';
import Faq from './Faq';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Testimonial from './Testimonial';
import hous1Image from '../images/home1.jpg';
import hous2Image from '../images/home2.jpg';
import hous3Image from '../images/house3.jpg';
import hous4Image from '../images/house4.jpg';
import hous5Image from '../images/home3.jpg';
import hous6Image from '../images/home4.jpg';
import hous7Image from '../images/home6.png';
import hous8Image from '../images/home7.png';
import hous9Image from '../images/home8.jpg';
const Project = () => {
  const projectImages = [
    {
      image: hous1Image, // Replace with the correct image path
    },
    {
      image: hous2Image, // Replace with the correct image path
    },
    {
        image: hous3Image, // Replace with the correct image path
      },
      {
        image: hous4Image, // Replace with the correct image path
      },
      {
        image: hous5Image, // Replace with the correct image path
      },
      {
        image: hous6Image, // Replace with the correct image path
      },
      {
        image: hous7Image, // Replace with the correct image path
      },
      {
        image: hous8Image, // Replace with the correct image path
      },
      {
        image: hous9Image, // Replace with the correct image path
      },
    // Add more project images here...
  ];

  return (
    <div className="projectss-container">
        <div className="pro-container">
        <div className="projectssimage-container">
          <img src={proImage} alt="Slider" className="slider-image" />
          <div className="projectssoverlay-text-container">
            <h1 className="projectssoverlay-text">Projects</h1>
          </div>
        </div>
      </div>
      {/* Introduction */}<br></br>
      <center><h2>Our Projects</h2></center>
      <center><p>Take a look at some of our most prominent construction projects that demonstrate our dedication to quality and innovation.</p></center>
      <br></br><br></br>
      {/* Project Images */}
      <div className="projectss-grid">
        {projectImages.map((project, index) => (
          <div className="projectss-image-container" key={index}>
            <img src={project.image} alt={`Project ${index + 1}`} className="projectss-image" />
          </div>
        ))}
      </div>
      <Testimonial/>
      <Faq/>
      
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Project;
