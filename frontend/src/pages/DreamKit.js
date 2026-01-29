import React, { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import "./ToolDetail.css";

function DreamKit() {
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const toolchain = await apiService.getToolchain();
        const dreamkitTool = toolchain.tools.find(
          (t) => t.label.toLowerCase() === "dreamkit"
        );
        if (dreamkitTool) {
          setTool(dreamkitTool);
        } else {
          setError("DreamKit tool not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load DreamKit data");
        setLoading(false);
      }
    };

    fetchTool();
  }, []);

  if (loading) {
    return <div className="tool-detail loading">Loading...</div>;
  }

  if (error) {
    return <div className="tool-detail error">{error}</div>;
  }

  if (!tool) {
    return <div className="tool-detail empty">Tool not found</div>;
  }

  return (
    <div className="tool-detail">
      <div className="tool-header">
        <div className="tool-header-icon">{tool.icon}</div>
        <h1>{tool.label}</h1>
        <p className="tool-subtitle">{tool.description}</p>
      </div>

      <div className="tool-content">
        <section className="tool-section">
          <h2>About dreamKIT</h2>
          <p>{tool.fullDescription}</p>
        </section>

        <section className="tool-section">
          <h2>Key Features</h2>
          <ul className="features-list">
            {tool.features.map((feature, idx) => (
              <li key={idx}>
                <span className="feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="tool-section">
          <h2>Getting Started</h2>
          <p>{tool.getStarted}</p>
          <div className="cta-button-group">
            <a href={tool.url} className="cta-button primary">
              Download dreamKIT
            </a>
            <a href="/toolchain" className="cta-button secondary">
              Back to Toolchain
            </a>
          </div>
        </section>

        <section className="tool-section info-box">
          <h3>🛠️ Automotive Development</h3>
          <p>
            dreamKIT provides everything you need for professional SDV development, 
            including middleware for distributed systems, real-time scheduling, and 
            automotive-grade tooling for safety-critical applications.
          </p>
        </section>
      </div>
    </div>
  );
}

export default DreamKit;
