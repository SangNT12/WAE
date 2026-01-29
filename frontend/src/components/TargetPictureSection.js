import React from "react";
import "./TargetPictureSection.css";

function TargetPictureSection({ targetPicture }) {
  if (!targetPicture) return null;

  return (
    <section className="target-picture-section">
      <div className="container">
        <h2 className="section-title">{targetPicture.title}</h2>
        <div className="target-picture-content">
          <div className="target-image">
            <img 
              src={targetPicture.image}
              alt="Digital first approach for SDV"
            />
          </div>
          <p className="target-description">
            {targetPicture.description}
          </p>
          <div className="target-text">
            {targetPicture.details && Array.isArray(targetPicture.details) && targetPicture.details.map((detail, index) => (
              <p key={index} className={index === targetPicture.details.length - 1 ? "target-quote" : "target-detail"}>
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetPictureSection;
