import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} /> {/* Use 'Contact' component here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
