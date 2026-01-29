import React, { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import "./ToolDetail.css";

function Verse() {
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const toolchain = await apiService.getToolchain();
        const verseTool = toolchain.tools.find(
          (t) => t.label.toLowerCase() === "digital.auto/verse"
        );
        if (verseTool) {
          setTool(verseTool);
        } else {
          setError("Verse tool not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load Verse data");
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
          <h2>About Digital.auto/Verse</h2>
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
              Start with Verse
            </a>
            <a href="/toolchain" className="cta-button secondary">
              Back to Toolchain
            </a>
          </div>
        </section>

        <section className="tool-section info-box">
          <h3>🌐 Virtual Ecosystem</h3>
          <p>
            Verse enables you to build and test complete Software-Defined Vehicle 
            applications in a fully simulated environment with realistic sensor data 
            and V2X communication capabilities.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Verse;
