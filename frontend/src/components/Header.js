import React from "react";
import "./Header.css";
import Navigation from "../Navigation";

function Header() {
  const handleLogoClick = () => {
    window.location.href = "http://localhost:3000";
  };

  return (
    <header className="app-header">
      <a
        href="http://localhost:3000"
        target="_self"
        rel="noopener noreferrer"
        className="logo-link"
      >
        <img
          src="https://static.wixstatic.com/media/87c677_65d55df971df4f568c59e8744d095c05~mv2.png/v1/fill/w_95,h_54,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/android-chrome-512x512.png"
          alt="digital.auto logo"
          className="logo-img"
        />
      </a>
      <h1 className="logo-text" onClick={handleLogoClick}>
        digital.auto
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
