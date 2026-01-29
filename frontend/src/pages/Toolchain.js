import React, { useState, useEffect } from "react";
import { apiService } from "../services/apiService";
import "./Toolchain.css";

function Toolchain() {
  const [toolchain, setToolchain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchToolchain = async () => {
      try {
        const data = await apiService.getToolchain();
        setToolchain(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load toolchain data");
        setLoading(false);
      }
    };

    fetchToolchain();
  }, []);

  if (loading) {
    return <div className="toolchain loading">Loading...</div>;
  }

  if (error) {
    return <div className="toolchain error">{error}</div>;
  }

  if (!toolchain) {
    return <div className="toolchain empty">No toolchain data available</div>;
  }

  return (
    <div className="toolchain">
      <div className="toolchain-hero">
        <h1>{toolchain.label}</h1>
        <p>{toolchain.description}</p>
      </div>

      <div className="toolchain-grid">
        {toolchain.tools.map((tool) => (
          <div key={tool.id} className="tool-card">
            <div className="tool-icon">{tool.icon}</div>
            <h2>{tool.label}</h2>
            <p className="tool-description">{tool.fullDescription}</p>

            <div className="tool-features">
              <h3>Key Features:</h3>
              <ul>
                {tool.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="tool-cta">
              <p className="get-started">{tool.getStarted}</p>
              {tool.external ? (
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tool-link external"
                >
                  Learn More →
                </a>
              ) : (
                <a href={tool.url} className="tool-link">
                  Learn More →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toolchain;
