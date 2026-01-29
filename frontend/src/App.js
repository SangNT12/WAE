import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UseCases from "./pages/UseCases";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "use-cases":
        return <UseCases />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header onNavigate={setCurrentPage} />
      <main className="app-main">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
