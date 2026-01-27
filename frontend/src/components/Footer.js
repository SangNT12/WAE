import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>
          <a href="http://localhost:3000">digital.auto - stay tuned and get involved!</a>
        </p>
        <div className="footer-links">
          <a href="#imprint">Imprint</a>
          <a href="#privacy">Privacy policy</a>
          <a href="#disclaimer">Disclaimer</a>
          <a href="#antitrust">Antitrust Code of Conduct</a>
        </div>
        <p className="copyright">©2024 by digital.auto</p>
      </div>
    </footer>
  );
}

export default Footer;
