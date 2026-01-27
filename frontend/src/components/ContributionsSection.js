import React from "react";
import "./ContributionsSection.css";

function ContributionsSection({ contributions }) {
  if (!contributions || contributions.length === 0) return null;

  return (
    <section className="contributions-section">
      <div className="container">
        <h2 className="section-title">digital.auto contributions</h2>

        {contributions.map((contribution) => (
          <div className="contribution" key={contribution.id}>
            <h3 className="contribution-title">{contribution.title}</h3>
            <p className="contribution-text">
              {contribution.description}
            </p>
            {contribution.learnMoreLink && (
              <p className="contribution-text">
                Learn more about the dreamKIT <a href={contribution.learnMoreLink} className="inline-link">here</a>.
              </p>
            )}
            <div className="contribution-image-wrapper">
              <img 
                src={contribution.image}
                alt={contribution.title}
                className="contribution-image"
              />
              <p className="image-caption">
                {contribution.id === 1 && "Our cloud-based rapid prototyping environment for new software-defined vehicle (SDV) features: the digital.auto.playground"}
                {contribution.id === 2 && "Our PoC hardware to try out digitally developed software-defined vehicle features on a physical device."}
                {contribution.id === 3 && "Our vision for open test fleet access for software-defined vehicle development."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContributionsSection;
