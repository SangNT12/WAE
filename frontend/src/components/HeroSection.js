import React from "react";
import "./HeroSection.css";

function HeroSection({ hero }) {
  if (!hero) return null;

  return (
    <section className="hero-section">
      <img 
        src={hero.backgroundImage}
        alt="digital.auto main visual"
        className="hero-background"
      />
      <div className="hero-content">
        <h1 className="hero-title">{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle1}</p>
        <p className="hero-subtitle">{hero.subtitle2}</p>
      </div>
    </section>
  );
}

export default HeroSection;
