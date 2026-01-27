import React from "react";
import "./TechDetailsSection.css";

function TechDetailsSection({ techDetails }) {
  if (!techDetails) return null;

  return (
    <section className="tech-details-section">
      <div className="container">
        <h3 className="tech-title">{techDetails.title}</h3>
        <p className="tech-text">
          {techDetails.description}
        </p>
        <a href={techDetails.link} target="_blank" rel="noopener noreferrer" className="cta-button">{techDetails.linkText}</a>
      </div>
    </section>
  );
}

export default TechDetailsSection;
