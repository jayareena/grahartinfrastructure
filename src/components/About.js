import React from 'react';
import './About.css';
import aboutImage1 from '../images/about.png';
import visionImage from '../images/Ourvision.jpg'; // Image for 'Our Vision'
import missionImage from '../images/Ourmission.jpg'; // Image for 'Our Mission'
import coreImage from '../images/Corevalue.jpg';
import safetyImage from '../images/Safety.png';
import qualityImage from '../images/Quality.png';
import integrityImage from '../images/Integrity.png';
import innovationImage from '../images/Innovation.png';
import collaborationImage from '../images/Collaboration.png';
import sustainabilityImage from '../images/Sustainability.png';
import ContactUs from './ContactUs'; // Image for 'Core Values'
import Footer from './Footer';

// Define core values with their descriptions and images
const coreValues = [
  {
    title: 'Safety',
    description: 'Safety comes first. We provide a secure environment for everyone involved.',
    image: safetyImage, // Update with the actual image path
  },
  {
    title: 'Quality',
    description: 'We deliver projects that stand the test of time and meet the highest standards.',
    image: qualityImage, // Update with the actual image path
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in every project.',
    image: integrityImage, // Update with the actual image path
  },
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology to ensure efficiency in our projects.',
    image: innovationImage, // Update with the actual image path
  },
  {
    title: 'Collaboration',
    description: 'Strong communication and teamwork are essential to our success.',
    image: collaborationImage, // Update with the actual image path
  },
  {
    title: 'Sustainability',
    description: 'We implement eco-friendly practices to minimize environmental impact.',
    image: sustainabilityImage, // Update with the actual image path
  },
];

const About = () => {
  return (
    <div>
      {/* Slider Section */}
      <div className="aboutours-container">
        <div className="aboutoursimage-container">
          <img src={aboutImage1} alt="Slider" className="slider-image" />
          <div className="overlayabout-text-container">
            <h1 className="overlayabout-text">About Us</h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-header">
        <h1>Grahart Infrastructure Private Limited</h1>
      </div>

      <div className="about-content1">
        <div className="about-text">
          <p>Grahart Infrastructure Private Limited specializes in the construction of homes and telecommunication infrastructure, offering comprehensive solutions tailored to meet the needs of both residential and telecom projects. We are committed to delivering high-quality construction services, combining our expertise in building homes with innovative telecom infrastructure development. Our approach is rooted in active engagement and clear communication with clients to ensure that every project is executed seamlessly, from planning to completion. By employing cutting-edge technology and a problem-solving mindset, we not only build structures but also long-lasting client partnerships, ensuring the delivery of reliable and future-ready solutions for homes and telecommunication networks.</p>
     </div>
      </div>

{/* Our Core Values Section */}
<div className="corevalue-content">
  {/* Core Value Image on the same row */}
 <center> <div className="corevalue-image">
    <img src={coreImage} alt="Core Values" />
  </div></center>

<div className="corevalue-text">
 <center> <h2>Our Core Values</h2></center>
  <p>
  At Grahart Infrastructure, we believe that our success is rooted in our core principles. These values guide our actions and decision-making processes, ensuring we deliver exceptional results in every project. Integrity is at the heart of everything we do, fostering trust and transparency with our clients and partners. We are committed to innovation, constantly seeking smarter, more efficient solutions to meet evolving needs. Our dedication to sustainability drives us to create projects that respect the environment and uplift communities. Through teamwork, excellence, and a customer-first approach, we strive to build a future where our values shape every success.
  </p>
  </div>
  
  
  {/* Core Values Grid on the next line */}
  <div className="core-values-grid">
    {coreValues.map((value, index) => (
      <div className="core-value" key={index}>
        <img src={value.image} alt={value.title} />
        <h3>{value.title}</h3>
        <p>{value.description}</p>
      </div>
    ))}
  </div>
</div>

      {/* Our Vision Section */}
      <div className="vision-content">
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>Our vision is to be the leading construction and infrastructure company, recognized for transforming ideas into sustainable realities. We aim to redefine industry standards by delivering innovative, high-quality solutions that prioritize environmental stewardship and community well-being. Through our expertise and dedication, we aspire to build not just structures, but enduring trust and meaningful connections with clients and society. By shaping smarter and greener spaces, we strive to create a legacy of excellence that empowers future generations.</p>
        </div>
        <div className="vision-image">
          <img src={visionImage} alt="Our Vision" />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mission-content">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>Our mission is to provide exceptional construction services, delivering projects with excellence, on time, and within budget. We are committed to maintaining the highest standards of quality, safety, and sustainability in every aspect of our work. By leveraging innovation and fostering strong partnerships, we aim to exceed client expectations and create lasting value. Our dedication lies in building not just structures, but also trust and positive impacts for communities and the environment.</p>
        </div>
        <div className="mission-image">
          <img src={missionImage} alt="Our Mission" />
        </div>
      </div>
      <div className="director-container">
      <h2 className="director-heading">Our Director's Leadership</h2>

      <div className="card">
        <p className="director-description">
           Binil Babu is our visionary leader of Grahart Infrastructure Pvt Ltd, serving as Director, Founder, and CEO. With a passion for innovation and a commitment to excellence, Binil Babu has steered the company towards remarkable growth and success, shaping the future of infrastructure development. Under their leadership, the company focuses on delivering quality projects with cutting-edge technology and sustainable solutions.
        </p>
      </div>
    </div>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default About;
