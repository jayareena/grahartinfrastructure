import React from 'react';
import './Logo.css';
import logoImg from '../images/logo.png'; // Correct path if `logo.png` is in `images` folder

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImg} alt="Learning Platform Logo" />
        </div>
    );
};


export default Logo;
