import React, { useState, useEffect } from "react";
import "./UseCases.css";

function UseCases() {
  const [useCasesData, setUseCasesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch use cases data from backend
    fetch("http://localhost:5000/api/use-cases")
      .then((response) => response.json())
      .then((data) => {
        setUseCasesData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching use cases:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="use-cases-loading">Loading...</div>;
  }

  if (!useCasesData) {
    return <div className="use-cases-error">Failed to load use cases</div>;
  }

  return (
    <main className="use-cases-page">
      {/* Header Section */}
      <section className="use-cases-header">
        <div className="use-cases-header-content">
          <h1 className="use-cases-title">{useCasesData.intro.title}</h1>
          <p className="use-cases-subtitle">{useCasesData.intro.subtitle}</p>
        </div>
      </section>

      {/* Practice Section */}
      <section className="use-cases-practice">
        <div className="use-cases-container">
          <h2 className="practice-title">{useCasesData.practice.title}</h2>
          <div className="practice-content">
            <p className="practice-description">
              {useCasesData.practice.description}
            </p>
            <h3 className="practice-subtitle">Typical characteristics include:</h3>
            <ul className="practice-characteristics">
              {useCasesData.practice.characteristics.map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
            <p className="practice-conclusion">
              {useCasesData.practice.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* Use Case Examples Section */}
      <section className="use-cases-examples">
        <div className="use-cases-container">
          <h2 className="examples-title">Use case examples</h2>
          <div className="examples-grid">
            {useCasesData.examples.map((example) => (
              <div key={example.id} className="example-card">
                <div className="example-image">
                  <img
                    src={example.image}
                    alt={example.title}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=" +
                        example.title;
                    }}
                  />
                </div>
                <div className="example-content">
                  <h3 className="example-title">{example.title}</h3>
                  <div className="example-details">
                    <div className="example-detail">
                      <strong>Benefits:</strong>
                      <p>{example.benefits}</p>
                    </div>
                    <div className="example-detail">
                      <strong>Implementation:</strong>
                      <p>{example.implementation}</p>
                    </div>
                    <div className="example-detail">
                      <strong>Partners:</strong>
                      <p>{example.partners}</p>
                    </div>
                  </div>
                  <div className="example-links">
                    <a
                      href={example.playgroundUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      Playground profile
                    </a>
                    <a
                      href={example.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      Watch the demo
                    </a>
                    {example.blogUrl && (
                      <a
                        href={example.blogUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button"
                      >
                        Read blog article
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="use-cases-cta">
        <div className="use-cases-container">
          <h2 className="cta-title">{useCasesData.cta.title}</h2>
          <p className="cta-description">{useCasesData.cta.description}</p>
          <div className="cta-links">
            <a
              href={useCasesData.cta.playgroundLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              Check out the playground
            </a>
            <a
              href={useCasesData.cta.wikiLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Visit the wiki
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UseCases;
