import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const projectData = [
  { description: "A luxurious hotel-inspired home featuring spacious living areas and eco-friendly materials.", imageUrl: '/images/home1.jpg' },
  { description: "An elegant family residence designed with modern aesthetics and functionality in mind.", imageUrl: '/images/home2.jpg' },
  { description: "A contemporary home with a sleek  and modern design perfect for modern families.", imageUrl: '/images/house3.jpg' },
  { description: "A stunning hillside home offering breathtaking views and  natural beauty with refined elegance and luxury finishes.", imageUrl: '/images/house4.jpg' },
  { description: "A charming villa with Mediterranean influences and a beautiful garden.", imageUrl: '/images/home1.jpg' },
  { description: "A modern high-rise with panoramic views and luxury amenities.", imageUrl: '/images/home2.jpg' },
  { description: "A cozy retreat designed for relaxation in a tranquil setting.", imageUrl: '/images/house3.jpg' },
  { description: "A beautiful home with large windows and outdoor entertainment areas.", imageUrl: '/images/house4.jpg' },
  { description: "An artistic bungalow featuring unique architectural details and vibrant colors.", imageUrl: '/images/home1.jpg' },
  { description: "A traditional farmhouse that combines rustic charm with modern comforts.", imageUrl: '/images/home2.jpg' },
  { description: "A sleek urban townhouse designed for city living with efficiency and style.", imageUrl: '/images/house3.jpg' },
  { description: "An expansive estate with luxurious features and beautiful landscaping.", imageUrl: '/images/house4.jpg' },
  { description: "A minimalist home that emphasizes simplicity and open spaces.", imageUrl: '/images/home1.jpg' },
  { description: "A coastal home with ocean views and outdoor living spaces.", imageUrl: '/images/home2.jpg' },
  { description: "A modern cabin surrounded by nature, perfect for a peaceful getaway.", imageUrl: '/images/house3.jpg' },
  { description: "A family-friendly home with a large backyard and play area.", imageUrl: '/images/house4.jpg' },
  { description: "An eco-friendly home with sustainable materials and energy-efficient features.", imageUrl: '/images/home1.jpg' },
  { description: "A stylish loft that combines modern design with comfort.", imageUrl: '/images/home2.jpg' },
  { description: "A regal mansion with classic architecture and luxurious interiors.", imageUrl: '/images/house3.jpg' },
  { description: "A vibrant and colorful home designed to inspire creativity.", imageUrl: '/images/house4.jpg' },
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
