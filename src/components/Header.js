import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../images/logo.png';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateHome = () => {
    navigate('/Home'); // Navigate to the Home page
    setIsOpen(false); // Close menu on logo click
  };

  return (
    <header className="header-container">
      <div className="logo-container" onClick={navigateHome}>
        <img src={logoImg} alt="Grahart" className="logo-style" />
      </div>

      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle menu" // Adding an aria-label for accessibility
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${isOpen ? 'nav-active' : ''}`}>
        <NavLink
          to="/Home"
          className={({ isActive }) => `header-link bold ${isActive ? 'active-link' : ''}`}
          onClick={toggleMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/Service"
          className={({ isActive }) => `header-link bold ${isActive ? 'active-link' : ''}`}
          onClick={toggleMenu}
        >
          Services
        </NavLink>
        <NavLink
          to="/Project"
          className={({ isActive }) => `header-link bold ${isActive ? 'active-link' : ''}`}
          onClick={toggleMenu}
        >
          Projects
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) => `header-link bold ${isActive ? 'active-link' : ''}`}
          onClick={toggleMenu}
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => `header-link bold ${isActive ? 'active-link' : ''}`}
          onClick={toggleMenu}
        >
          Contact us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
