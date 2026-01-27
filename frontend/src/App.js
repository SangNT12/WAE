import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
