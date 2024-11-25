import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import hous1Image from '../images/home1.jpg';
import hous2Image from '../images/home2.jpg';
import hous3Image from '../images/house3.jpg';
import hous4Image from '../images/house4.jpg';
import hous5Image from '../images/h3.jpg';
import hous6Image from '../images/h4.png';
import hous7Image from '../images/h5.png';
import hous8Image from '../images/h6.png';
import hous9Image from '../images/home3.jpg';
import hous10Image from '../images/home4.jpg';
import hous11Image from '../images/house5.jpg';
import hous12Image from '../images/house4.jpg';
export const projectData = [
  { description: "A luxurious hotel-inspired home featuring spacious living areas and eco-friendly materials.", imageUrl: hous1Image },
  { description: "An elegant family residence designed with modern aesthetics and functionality in mind.", imageUrl: hous2Image },
  { description: "A contemporary home with a sleek  and modern design perfect for modern families.", imageUrl:hous3Image },
  { description: "A stunning hillside home offering breathtaking views and  natural beauty with refined elegance and luxury finishes.", imageUrl: hous4Image },
  { description: "A charming villa with Mediterranean influences and a beautiful garden.", imageUrl: hous5Image },
  { description: "A modern high-rise with panoramic views and luxury amenities.", imageUrl: hous6Image },
  { description: "A cozy retreat designed for relaxation in a tranquil setting.", imageUrl: hous7Image },
  { description: "A beautiful home with large windows and outdoor entertainment areas.", imageUrl: hous8Image },
  { description: "An artistic bungalow featuring unique architectural details and vibrant colors.", imageUrl:hous9Image },
  { description: "A traditional farmhouse that combines rustic charm with modern comforts.", imageUrl:hous10Image },
  { description: "A sleek urban townhouse designed for city living with efficiency and style.", imageUrl:hous11Image },
  { description: "An expansive estate with luxurious features and beautiful landscaping.", imageUrl: hous12Image }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  const handleNavigation = (direction) => {
    setCurrentPage((prevPage) => Math.max(0, Math.min(prevPage + direction, totalPages - 1)));
  };

  const currentProjects = projectData.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  return (
    <div className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        {currentProjects.map((project, index) => (
          <Link to="/project" key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt="Project" />
            </div>
            <div className="project-info">
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-btn"
          onClick={() => handleNavigation(-1)}
          disabled={currentPage === 0}
          aria-label="Back"
        >
          Back
        </button>
        <button
          className="carousel-btn"
          onClick={() => handleNavigation(1)}
          disabled={currentPage === totalPages - 1}
          aria-label="Next"
        >
          Next
        </button>
      </div>

      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            role="button"
            aria-label={`Page ${index + 1}`} // Added aria-label for accessibility
            className={`dot ${index === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)} // Allow clicking on dots
            tabIndex={0} // Make the dots focusable
            onKeyPress={(e) => { if (e.key === 'Enter') setCurrentPage(index); }} // Handle keyboard navigation
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
