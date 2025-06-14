import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav>
      <div className="nav-content">
        <h3 className='logo'>LEUWIHEJO.COM</h3>

        <ul className={menuOpen ? "open" : ""}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/facility" onClick={() => setMenuOpen(false)}>Facility</Link></li>
          <li><Link to="/testimonial" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
