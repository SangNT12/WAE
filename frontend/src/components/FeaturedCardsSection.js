import React from "react";
import "./FeaturedCardsSection.css";

function FeaturedCardsSection({ featuredCards }) {
  if (!featuredCards || featuredCards.length === 0) return null;

  return (
    <section className="featured-section">
      <div className="container">
        <div className="cards-grid">
          {featuredCards.map((card) => (
            <div className="card" key={card.id}>
              <div className="card-image">
                <img 
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
                <a href={card.link} className="card-link">{card.linkText} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCardsSection;
