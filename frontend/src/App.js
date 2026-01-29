import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UseCases from "./pages/UseCases";
import Toolchain from "./pages/Toolchain";
import Playground from "./pages/Playground";
import Verse from "./pages/Verse";
import DreamKit from "./pages/DreamKit";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Handle direct URL loads and navigation
  useEffect(() => {
    const path = window.location.pathname;
    const pathPage = path.replace(/^\//, "") || "home";
    setCurrentPage(pathPage);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    // Handle nested routes like "toolchain/playground"
    const baseRoute = currentPage.split("/")[0];
    
    switch (baseRoute) {
      case "use-cases":
        return <UseCases />;
      case "toolchain": {
        const subRoute = currentPage.split("/")[1];
        switch (subRoute) {
          case "playground":
            return <Playground />;
          case "verse":
            return <Verse />;
          case "dreamkit":
            return <DreamKit />;
          default:
            return <Toolchain />;
        }
      }
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header onNavigate={handleNavigate} />
      <main className="app-main">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
