import React from "react";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav className="nav_container">
      <div className="nav_left">
        <a>P-CUBE</a>
      </div>

      <div className="nav_right">
        <a href="#about" className="nav_link">
          About
        </a>

        <a href="#experience" className="nav_link">
          Experience
        </a>

        <a href="#work" className="nav_link">
          Projects
        </a>

        <a href="#contact" className="nav_link">
          Contact
        </a>

        <button className="nav_resume_btn">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;