import React from "react";
import "./InteroperabilitySection.css";

function InteroperabilitySection({ interoperability, partners }) {
  if (!interoperability) return null;

  return (
    <section className="interoperability-section">
      <div className="container">
        <h2 className="section-title">{interoperability.title}</h2>

        <div className="interop-content">
          <h3 className="contribution-title">{interoperability.subtitle}</h3>
          <p className="contribution-text">
            {interoperability.description}
          </p>
          <div className="contribution-image-wrapper">
            <img 
              src={interoperability.image}
              alt="SDV interoperability approach"
              className="contribution-image"
            />
            <p className="image-caption">
              Our aim of an open tool chain for software-defined vehicles.
            </p>
          </div>
        </div>

        {/* Partners Section */}
        {partners && partners.length > 0 && (
          <div className="partners-section">
            <h3 className="contribution-title">Partnerships for interoperability</h3>
            <p className="contribution-text">
              As digital.auto we aim to enable an open tool chain for the software-defined vehicle. 
              Interoperability is key. Therefore, we have teamed up with many partners to start an 
              SDV interoperability initiative. Find more information about the current state of the 
              digital.auto inter::op proof points <a href="https://www.digital.auto/tool-chain" className="inline-link">here</a>.
            </p>
            <div className="partners-grid">
              {partners.map((partner) => (
                <div className="partner-logo" key={partner.id}>
                  <img src={partner.logo} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default InteroperabilitySection;
