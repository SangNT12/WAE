import React from "react";
import "./AboutSection.css";

function AboutSection({ about }) {
  if (!about) return null;

  const [beforeStrong, afterStrong] = about.description.split('Our open community');

  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-title">{about.title}</h2>
        
        <p className="about-text">
          {beforeStrong}
          <strong>Our open community{afterStrong}</strong>
        </p>
        
        <p className="about-quote">
          {about.quote}
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
