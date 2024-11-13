import React from "react";
import "./Section.css";
import constImg from "../images/constimg.png"; // Adjust the path to your image file

const Section = () => {
  return (
    <main className="diagonal-container" data-testid="section"> {/* Change to <main> */}
      <div className="right-section">
        <img src={constImg} alt="construction" className="centered-image" />
      </div>
      <div className="left-section">
        <div className="text-content">
          <h1>Building Dreams, Crafting Excellence</h1>
          <p>Grahart Infrastructure Pvt Ltd, Where Vision Becomes Reality.</p>
        </div>
      </div>
    </main>
  );
};

export default Section;
