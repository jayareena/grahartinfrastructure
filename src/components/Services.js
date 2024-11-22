import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Services.css';
import { FaBuilding, FaWifi } from 'react-icons/fa'; // Added FaWifi for telecom

const servicesData = [
  { id: 1, icon: <FaBuilding size={30} />, title: 'Construction' },
  { id: 2, icon: <FaWifi size={30} />, title: 'Telecom' }, // Removed paths since we are not going to individual pages
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null); // New state for hover

  const handleServiceClick = (id) => {
    setActiveService((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div data-testid="services-container">
     <center>
  <h2>Services</h2>
</center>

      <div className="services-grid">
        {servicesData.map((service) => {
          const isActive = activeService === service.id;
          const isHovered = hoveredService === service.id; // Check if hovered

          return (
            <Link to="/Service" key={service.id} style={{ textDecoration: 'none' }}> {/* Change path to /services and remove underline */}
              <div
                className={`service-card ${isActive ? 'active' : ''}`}
                onClick={() => handleServiceClick(service.id)}
                onMouseEnter={() => setHoveredService(service.id)} // Set hovered on enter
                onMouseLeave={() => setHoveredService(null)} // Clear hovered on leave
              >
                <div className="icon-overlay">
                  <div className={`icon ${isActive ? 'active' : ''}`}>
                    {React.cloneElement(service.icon, {
                      style: { 
                        color: isActive || isHovered ? 'white' : 'black', // Change to white on active or hover
                      },
                    })}
                  </div>
                </div>
                <div className={`line ${isActive ? 'active' : ''}`}></div>
                <h3 className={`${isActive ? 'active' : ''}`}>{service.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
