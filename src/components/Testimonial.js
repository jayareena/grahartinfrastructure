import React, { useState } from 'react';
import './Testimonial.css'; // Import your CSS file
import testimonial1 from '../images/avt1.png'; // Import local image
import testimonial2 from '../images/avt2.jpg'; 
import testimonial3 from '../images/avt3.png'; // Import local image
import testimonial4 from '../images/avt4.jpg'; // Import local image

const testimonials = [
  {
    text: "Grahart Infrastructure exceeded our expectations! The team was professional, the project was completed on time, and the quality of work was outstanding. We couldn’t be happier with our new home.",
    author: "Ashok Kumar, ",
    role: "Homeowner",
    image: testimonial1 // Use imported image
  },
  {
    text: "We couldn’t have asked for a better partner for our construction project. Grahart Infrastructure delivered an impressive building on time and within budget, with a keen focus on quality.",
    author: "Aditi Sharma",
    role: "Commercial Project Owner",
    image: testimonial2 // Use imported image
  },
  {
    text: "Our experience with Grahart Infrastructure was top-notch. Their team worked diligently to meet all our specifications and timelines, and the final structure is both sturdy and aesthetically pleasing.",
    author: "Rajesh Kumar  ",
    role: "Real Estate Investor",
    image: testimonial3 // Use imported image
  },
  {
    text: "The professionalism and dedication of Grahart Infrastructure were evident in every phase of our project. They went above and beyond to ensure that our building was completed to the highest standard." ,
    author: "Rashmi Mehra, ",
    role:"Corporate Office Client",
    image: testimonial4// Use imported image
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-carousel">
        <button className="carousel-control prev" onClick={handlePrev} aria-label="Previous Slide">
          &#10094; {/* Left arrow */}
        </button>
        <div className="carousel-container">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="testimonial">
                <img src={testimonial.image} alt={testimonial.author} className="testimonial-image" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control next" onClick={handleNext} aria-label="Next Slide">
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
