import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import sections from "../routerData";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="site-logo">
        <span className="logo-text">YN</span>
      </Link>
      <ul className="nav-sections">
        {sections.map((section) => (
          <li key={section.id} className="nav-sections-item">
            <Link to={section.to}>{section.section}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
