import React, { useState, useEffect } from "react";
import "./Navigation.css";

function Navigation() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch navigation data from backend
    fetch("http://localhost:5000/api/navigation")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching navigation:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <nav className="navigation"><span>Loading...</span></nav>;
  }

  return (
    <nav className="navigation">
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.id} className="nav-item">
            <a href={item.url} target="_self" className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
