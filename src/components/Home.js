import React from 'react'; 
import './Home.css';
import Slider from './Slider';
import OurReputation from './OurReputation';
import AboutUs from './AboutUs'; 
import Services from './Services'; 
import Experience from './Experience'; 
import Footer from './Footer'; 
import Section from './Section';
import Projects from './Projects';
import ContactUs from './ContactUs';

const Home = () => {

  return (
    <>
      <Slider  data-testid="slider-section"  />
      <OurReputation />
      <AboutUs />
      <Services />
      <Experience />
      <Section data-testid="section" />
      <Projects  />
      <ContactUs />
      <Footer data-testid="footer-section"/>
    </>
  );
};

export default Home;
