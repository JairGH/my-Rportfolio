import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div className="navbar-container">
      <h1>Full Stack Developer</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
