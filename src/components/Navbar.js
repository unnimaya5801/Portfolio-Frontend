import React, { useState } from 'react'; // Import useState for state management
import './Navbar.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  // State to manage navbar visibility
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle the navbar visibility
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Navbar Brand */}
        <Link className="navbar-brand" to="/">My Portfolio</Link>

        {/* Navbar Toggler for small screens */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}  // Toggle the navbar visibility
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Use Link for navigation */}
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              {/* Use Link for navigation */}
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              {/* Use Link for navigation */}
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





