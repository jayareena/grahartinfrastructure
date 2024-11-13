import React, { useState } from 'react';
import './Faq.css'; // Import your custom CSS file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track which FAQ is active

  const toggleFAQ = (index) => {
    // If the clicked FAQ is already open, close it. Otherwise, open the clicked FAQ.
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer both construction and telecom services for various projects.',
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 support for our telecom services.',
    },
    {
      question: 'What are your company’s areas of expertise?',
      answer: 'We specialize in residential and commercial construction, as well as telecommunications infrastructure.',
    },
    {
      question: 'How do I request a quote?',
      answer: 'You can request a quote by contacting us through our website or calling our customer service team.',
    },
  ];

  return (
    <div className="faqs-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="faq-question">{faq.question}</h3>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
