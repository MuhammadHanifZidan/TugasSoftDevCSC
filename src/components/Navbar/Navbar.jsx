import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleLogout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    navigate('/');
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

        <div className="auth-buttons">
          {currentUser ? (
            <div className="user-info">
              <span className="user-name">{currentUser.displayName}</span>
              <button className="auth-btn logout" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <>
              <Link to="/sign_in" className="btn-sign-in" onClick={() => setMenuOpen(false)}>Sign In</Link>
              <Link to="/sign_up" className="btn-sign-up" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu} role="button" tabIndex={0}>
          <div></div><div></div><div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
