import React, { useState, useEffect } from "react";
import "./Navigation.css";

function Navigation({ onNavigate }) {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const handleMouseEnter = (itemId) => {
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleNavClick = (e, url) => {
    e.preventDefault();
    
    // Extract page name from URL
    const pageName = url.replace("/", "") || "home";
    
    // If it's an internal navigation, use the onNavigate callback
    if (url.startsWith("/") && !url.startsWith("http")) {
      // Update the browser URL
      window.history.pushState({ page: pageName }, "", url);
      onNavigate(pageName);
    } else {
      // For external links, open in new tab
      window.open(url, "_blank");
    }
  };

  if (loading) {
    return <nav className="navigation"><span>Loading...</span></nav>;
  }

  return (
    <nav className="navigation">
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={item.url}
              onClick={(e) => handleNavClick(e, item.url)}
              className="nav-link"
            >
              {item.label}
            </a>
            {item.hasSubmenu && item.submenu && item.submenu.length > 0 && (
              <ul
                className={`nav-submenu ${
                  openDropdown === item.id ? "open" : ""
                }`}
              >
                {item.submenu.map((subitem) => (
                  <li key={subitem.id} className="nav-subitem">
                    <a
                      href={subitem.url}
                      onClick={(e) => handleNavClick(e, subitem.url)}
                      className="nav-sublink"
                    >
                      {subitem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
