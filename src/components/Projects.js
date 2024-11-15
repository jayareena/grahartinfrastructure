import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import hous1Image from '../images/home1.jpg';
import hous2Image from '../images/home2.jpg';
import hous3Image from '../images/house3.jpg';
import hous4Image from '../images/house4.jpg';
const projectData = [
  { description: "A luxurious hotel-inspired home featuring spacious living areas and eco-friendly materials.", imageUrl: hous1Image },
  { description: "An elegant family residence designed with modern aesthetics and functionality in mind.", imageUrl: hous2Image },
  { description: "A contemporary home with a sleek  and modern design perfect for modern families.", imageUrl:hous3Image },
  { description: "A stunning hillside home offering breathtaking views and  natural beauty with refined elegance and luxury finishes.", imageUrl: hous4Image },
  { description: "A charming villa with Mediterranean influences and a beautiful garden.", imageUrl: hous1Image },
  { description: "A modern high-rise with panoramic views and luxury amenities.", imageUrl: hous2Image },
  { description: "A cozy retreat designed for relaxation in a tranquil setting.", imageUrl: hous3Image },
  { description: "A beautiful home with large windows and outdoor entertainment areas.", imageUrl: hous4Image },
  { description: "An artistic bungalow featuring unique architectural details and vibrant colors.", imageUrl:hous1Image },
  { description: "A traditional farmhouse that combines rustic charm with modern comforts.", imageUrl:hous2Image },
  { description: "A sleek urban townhouse designed for city living with efficiency and style.", imageUrl:hous3Image },
  { description: "An expansive estate with luxurious features and beautiful landscaping.", imageUrl: hous4Image },
  { description: "A minimalist home that emphasizes simplicity and open spaces.", imageUrl: hous1Image },
  { description: "A coastal home with ocean views and outdoor living spaces.", imageUrl: hous2Image },
  { description: "A modern cabin surrounded by nature, perfect for a peaceful getaway.", imageUrl: hous3Image },
  { description: "A family-friendly home with a large backyard and play area.", imageUrl: hous4Image },
  { description: "An eco-friendly home with sustainable materials and energy-efficient features.", imageUrl: hous1Image },
  { description: "A stylish loft that combines modern design with comfort.", imageUrl: hous2Image },
  { description: "A regal mansion with classic architecture and luxurious interiors.", imageUrl: hous3Image },
  { description: "A vibrant and colorful home designed to inspire creativity.", imageUrl: hous4Image },
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
