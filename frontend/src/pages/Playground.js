import React, { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import "./ToolDetail.css";

function Playground() {
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const toolchain = await apiService.getToolchain();
        const playgroundTool = toolchain.tools.find(
          (t) => t.label.toLowerCase() === "playground"
        );
        if (playgroundTool) {
          setTool(playgroundTool);
        } else {
          setError("Playground tool not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to load playground data");
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
          <h2>About Playground</h2>
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
            <a
              href={tool.url}
              className="cta-button primary"
              target={tool.external ? "_blank" : "_self"}
              rel={tool.external ? "noopener noreferrer" : ""}
            >
              Visit Playground
            </a>
            <a href="/toolchain" className="cta-button secondary">
              Back to Toolchain
            </a>
          </div>
        </section>

        <section className="tool-section info-box">
          <h3>💡 Pro Tip</h3>
          <p>
            The playground provides an excellent environment to learn digital.auto 
            concepts before diving into production deployments.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Playground;
