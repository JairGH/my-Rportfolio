import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-nav-container">
      <nav className="nav-container">
        <h2 className="my-name">Jair GH</h2>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#skills">Skills</a>
        </p>
        <p>
          <a href="#contact">Contact Me</a>
        </p>
      </nav>
    </div>
  );
};

export default Header;
