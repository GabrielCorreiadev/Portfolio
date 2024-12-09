import React from "react";
import './header.css';

const Header1: React.FC = () => {
  return (
    <header className="header">
      <div className="name-logo">
        <div className="name">Gabriel Correia</div>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#About" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="projects-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="contact-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header1;
