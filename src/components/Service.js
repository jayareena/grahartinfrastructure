import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import serviceImage1 from '../images/service1.jpg';
import serviceImage2 from '../images/service2.png';
import serviceImage3 from '../images/seevice3.png';
import serviceImage4 from '../images/service4.png';
import cImg1 from '../images/const2.png';
import cImg2 from '../images/const3.png';
import cImg3 from '../images/const4.png';
import cImg4 from '../images/const5.png';
import tImg1 from '../images/telecom1.png';
import tImg2 from '../images/telecom2.png';
import tImg3 from '../images/telecom3.png';
import tImg4 from '../images/telecom4.jpg';
import tImg from '../images/telecom.jpg';
import Faq from './Faq';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs'; // Image for 'Core Values'
import Footer from './Footer';
const Service = () => {
  return (
    <div className="servicess-page">
      {/* Slider Section */}
      <div className="servicess-container">
        <div className="servicessimage-container">
          <img src={serviceImage1} alt="Slider" className="slider-image" />
          <div className="servicessoverlay-text-container">
            <h1 className="servicessoverlay-text">Services</h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="introduction-section">
        <div className="intro-content">
          <h2>Our Best Services</h2>
          <p> We provide comprehensive construction and telecom services designed to meet the highest industry standards. From residential and commercial construction projects to advanced telecom infrastructure solutions, we ensure quality, reliability, and innovation in every endeavor. Our team is dedicated to delivering tailored solutions that exceed client expectations while maintaining a commitment to safety and sustainability. Trust us to bring your vision to life with excellence and precision.</p>
      <br></br>    <Link to="/about">       <button className="intro-btn">Know More</button></Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="servicesss-section">
        <div className="servicess-cards-horizontal">
          {/* Construction Service */}
          <div className="servicess-card">
            <img src={serviceImage2} alt="Construction" />
            <div className="servicess-card-content">
              <h3>Construction Services</h3>
              <p>Providing top-notch construction solutions for residential, commercial, and industrial projects.</p>
            </div>
          </div>
          {/* Telecom Service */}
          <div className="servicess-card">
            <img src={serviceImage3} alt="Telecom" />
            <div className="servicess-card-content">
              <h3>Telecom Services</h3>
              <p>Offering cutting-edge telecom solutions that improve communication infrastructure.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-content-wrapper">
  <div className="content-above">
    <h2>Construction</h2>
    <h3>Planning & Design</h3>
    <p>We start every project with detailed planning and innovative design. Our team works closely with you to understand your vision and develop a blueprint that aligns with your goals, while ensuring structural integrity and compliance with regulations.</p>
 
    <h3>Project Estimation</h3>
    <p>Understanding the costs of a construction project is crucial. We provide accurate and transparent cost estimations, giving you a clear picture of your financial investment from the start. Our estimates cover materials, labor, and timeline, with no hidden fees.</p>
    <img src={serviceImage4} alt="Construction Site" className="image-left" />
    
  <div className="content-below">
    <h3>Building Permits & Approvals</h3>
    <p>Navigating legal requirements can be overwhelming. We handle all the necessary building permits and approvals for your project, ensuring everything is in line with local laws and safety regulations so you can focus on your vision.</p>
    
    <h3>Construction Supervision</h3>
    <p>Our team of experts supervises every phase of the construction process. From the foundation to the final touches, we ensure quality workmanship, adherence to deadlines, and seamless coordination with contractors to bring your project to life.</p>
    
    <h3>Project Management</h3>
    <p>We offer full-service project management to keep your project on track and within budget. Our managers work closely with architects, engineers, and construction crews to ensure all phases of the project run smoothly.</p>
  </div>
</div>
</div>

      {/* 2 Row Images */}
      {/* 2 Row Images with Hover Effect */}
<div className="servicess-image-grid">
  <div className="servicess-row">
    <div className="servicess-hover-container">
      <img src={cImg1} alt="Project 1" />
      <div className="servicess-slogans-overlay">
        <p>Custom Residential Homes</p>
      </div>
    </div>
    <div className="servicess-hover-container">
      <img src={cImg2} alt="Project 2" />
      <div className="servicess-slogans-overlay">
        <p>Commercial Buildings</p>
      </div>
    </div>
    <div className="servicess-hover-container">
      <img src={cImg3} alt="Project 3" />
      <div className="servicess-slogans-overlay">
        <p>Infrastructure Development</p>
      </div>
    </div>
    <div className="servicess-hover-container">
      <img src={cImg4} alt="Project 4" />
      <div className="servicess-slogans-overlay">
        <p>Project Management and Consulting</p>
      </div>
    </div>
  </div>
</div>
{/* Image and Content Side-by-Side Section */}
<div className="image-content-wrapper">
  <div className="content-above">
    <h2>Telecom</h2>
    <h3>Network Design & Planning</h3>
    <p>We provide comprehensive network design and planning services for telecom infrastructure. Our experts collaborate with clients to develop customized solutions that meet their specific requirements, whether for urban or rural networks. We ensure robust, scalable, and future-ready network designs that optimize performance and reliability.</p>
    <h3>Network Design & Planning</h3>
    <p>We provide comprehensive network design and planning services for telecom infrastructure. Our experts collaborate with clients to develop customized solutions that meet their specific requirements, whether for urban or rural networks. We ensure robust, scalable, and future-ready network designs that optimize performance and reliability.</p>
    <img src={tImg} alt="Construction Site" className="image-left" />
    <div className="content-below">
    <h3>Site Acquisition & Permits</h3>
    <p>Navigating the complex legal and regulatory environment for telecom infrastructure projects is challenging. We handle site acquisition, securing permits, and obtaining approvals to ensure that your project complies with local laws and regulations, minimizing delays and legal hurdles.</p>
    
    <h3>Tower Construction</h3>
    <p>From small cell sites to large macro towers, our team has extensive experience in constructing telecom towers for various network needs. We use the latest technology and high-quality materials to build towers that are durable, weather-resistant, and capable of supporting the latest telecom equipment.</p>
    
    <h3>Fiber Optic Installation</h3>
    <p>Our telecom infrastructure services include the installation of high-speed fiber optic cables, which are essential for delivering fast, reliable internet and communication services. We manage everything from trenching to laying and splicing cables, ensuring minimal disruption and maximum efficiency.</p>
    <h3>Equipment Installation & Testing</h3>
<p>We provide end-to-end equipment installation services, including the installation of antennas, base stations, and other telecom hardware. Our technicians also conduct thorough testing and quality checks to ensure optimal performance before the system goes live.
</p>
<h3>Network Maintenance & Upgrades</h3>
<p>We offer ongoing maintenance and upgrade services to ensure that your telecom network remains operational and up-to-date with the latest technology. From routine inspections to emergency repairs, our team is available 24/7 to support your infrastructure needs.
</p>
</div>
  </div>
</div>

      {/* 2 Row Images */}
      {/* 2 Row Images with Hover Effect */}
<div className="servicess-image-grid">
  <div className="servicess-row">
    <div className="servicess-hover-container">
      <img src={tImg1} alt="Project 1" />
      <div className="servicess-slogans-overlay">
        <p>Network Installation</p>
      </div>
    </div>
    <div className="servicess-hover-container">
      <img src={tImg2} alt="Project 2" />
      <div className="servicess-slogans-overlay">
        <p>Wireless Communication Solution</p>
      </div>
    </div>
    <div className="servicess-hover-container">
      <img src={tImg3} alt="Project 3" />
      <div className="servicess-slogans-overlay">
        <p>Data Centers Setup</p>
      </div>
    </div>
    <div className="servicess-hover-container">
      <img src={tImg4} alt="Project 4" />
      <div className="servicess-slogans-overlay">
        <p>Telecom infrastructure management</p>
      </div>
    </div>
  </div>
</div>


      {/* Why Choose Us Section */}
      <div className="why-choose-us">
  <h2>Why Choose Us?</h2>
  <div className="why-cards">
    <div className="why-card">
      <i className="fas fa-check-circle icon-reliability"></i> {/* Reliability Icon */}
      <h3>Reliability</h3>
      <p>Every project is completed with precision and care.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-tools icon-expertise"></i> {/* Expertise Icon */}
      <h3>Expertise</h3>
      <p>Our expert team delivers unmatched skills in the industry.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-smile icon-customer"></i> {/* Customer Satisfaction Icon */}
      <h3>Customer Satisfaction</h3>
      <p>Your satisfaction is our top priority.</p>
    </div>
    <div className="why-card">
      <i className="fas fa-lightbulb icon-innovation"></i> {/* Innovation Icon */}
      <h3>Innovation</h3>
      <p>We deliver cutting-edge solutions to meet modern needs.</p>
    </div>
  </div>
</div>
      <Testimonial/>
      <Faq/>
      <ContactUs/>
      <Footer/>
     
    </div>
  );
};

export default Service;